import React, { useEffect, useRef, useState } from "react";
import { Gamepad2 } from "lucide-react";

const crackAfter = 0.22;
const collapseAfter = 0.72;
const movementKeys = new Set(["w", "a", "s", "d", "r", "arrowdown", "escape"]);

const ArcadePlatformer = ({ stage }) => {
  const [playing, setPlaying] = useState(false);
  const [waitingToRespawn, setWaitingToRespawn] = useState(false);
  const respawnButton = useRef(null);
  const restart = useRef(null);
  const sprite = useRef(null);
  const controls = useRef(null);

  useEffect(() => {
    if (waitingToRespawn) respawnButton.current?.focus({ preventScroll: true });
  }, [waitingToRespawn]);

  useEffect(() => {
    if (!playing) return;

    const field = stage.current;
    const player = sprite.current;
    const ground = field.querySelector(".arcade-ground");
    const platforms = [...field.querySelectorAll("[data-platform]"), ground];
    const keys = new Set();
    const tiles = Array.from(ground.children, (element) => ({ element, grassWear: 0, dirtWear: 0 }));
    const crumbling = new Set();
    let grass;
    let dirt;
    let magmaTop;
    let burned = false;
    let burnTimer;

    let x = 0;
    let y = 0;
    let lift = 0;
    let grounded = true;
    let jump = false;
    let pressDown = false;
    let surfaces = [];
    let stageWidth = 0;
    let previousTime;
    let frame;

    const measure = () => {
      const fieldBounds = field.getBoundingClientRect();
      stageWidth = fieldBounds.width;
      surfaces = platforms.flatMap((platform) => {
        const bounds = platform.getBoundingClientRect();
        if (bounds.width === 0 || bounds.height === 0) return [];
        const left = bounds.left - fieldBounds.left;
        const right = bounds.right - fieldBounds.left;
        const top = { top: bounds.top - fieldBounds.top, left, right };

        if (platform === ground) {
          const height = bounds.bottom - bounds.top;
          grass = top;
          dirt = { ...top, top: top.top + height * 0.45 };
          magmaTop = top.top + height * 0.82;
          return [grass, dirt, { ...top, top: bounds.bottom - fieldBounds.top }];
        }
        if (!platform.hasAttribute("data-platform-floor")) return [top];
        return [top, { top: bounds.bottom - fieldBounds.top, left, right }];
      });
    };

    const render = () => {
      player.style.left = `${x}px`;
      player.style.top = `${y}px`;
      player.classList.toggle("is-crouching", keys.has("s"));
    };

    const restoreGrass = () => {
      for (const tile of crumbling) {
        tile.grassWear = 0;
        tile.dirtWear = 0;
        tile.element.classList.remove("grass-cracking", "grass-broken", "dirt-cracking", "dirt-broken");
      }
      crumbling.clear();
    };

    const respawn = () => {
      restoreGrass();
      burned = false;
      player.classList.remove("is-burning");
      const first = surfaces[0];
      x = (first.left + first.right) / 2;
      y = first.top;
      lift = 0;
      grounded = true;
      jump = false;
      pressDown = false;
      keys.clear();
      render();
      window.scrollTo({ top: window.scrollY + field.getBoundingClientRect().top, behavior: "instant" });
    };

    const onKeyDown = (event) => {
      const key = event.key.toLowerCase();
      if (!movementKeys.has(key) || event.metaKey || event.ctrlKey || event.altKey) return;
      event.preventDefault();

      if (key === "escape") {
        setPlaying(false);
        return;
      }
      if (burned) return;
      if (key === "r" && !event.repeat) {
        respawn();
        return;
      }
      if (key === "w" && !event.repeat) jump = true;
      if ((key === "s" || key === "arrowdown") && !event.repeat) pressDown = true;
      keys.add(key);
    };

    const onKeyUp = (event) => keys.delete(event.key.toLowerCase());
    const clearKeys = () => {
      keys.clear();
      jump = false;
      pressDown = false;
    };

    const tick = (now) => {
      const elapsed = Math.min((now - (previousTime ?? now)) / 1000, 0.033);
      previousTime = now;
      if (burned) return;
      const oldX = x;
      const oldY = y;
      const direction = Number(keys.has("d")) - Number(keys.has("a"));
      const crouching = keys.has("s");

      const floor = surfaces[surfaces.length - 1].top;
      const drop = grounded && y < floor && (pressDown || (jump && crouching));
      pressDown = false;

      if (direction) player.classList.toggle("is-facing-left", direction < 0);
      x = Math.max(11, Math.min(stageWidth - 11, x + direction * (crouching ? 95 : 255) * elapsed));
      if (jump && grounded && !crouching) lift = -495;
      if (drop) lift = 120;
      jump = false;
      lift += 1250 * elapsed;
      y += drop ? Math.max(0.01, lift * elapsed) : lift * elapsed;
      grounded = false;

      const tileIndex = Math.floor((x - grass.left) / (grass.right - grass.left) * tiles.length);
      const tile = tiles[tileIndex];
      if (tile && drop && (oldY === grass.top || oldY === dirt.top)) {
        crumbling.add(tile);
        tile.grassWear = collapseAfter;
        if (oldY === dirt.top) tile.dirtWear = collapseAfter;
      }

      const grassBroken = tile?.grassWear >= collapseAfter;
      const dirtBroken = tile?.dirtWear >= collapseAfter;

      if (lift >= 0) {
        // A drop skips only the current surface so the next one can still catch the avatar.
        const landing = surfaces.reduce((nearest, surface) => {
          const crossed = oldY <= surface.top && y >= surface.top;
          const aligned = x + 4 >= surface.left && x - 4 <= surface.right;
          const broken = (surface === grass && grassBroken) || (surface === dirt && dirtBroken);
          const skipped = (drop && surface.top === oldY) || broken;
          return crossed && aligned && !skipped ? Math.min(nearest, surface.top) : nearest;
        }, Infinity);
        if (landing < Infinity || y >= floor) {
          y = Math.min(landing, floor);
          lift = 0;
          grounded = true;
        }
      }

      if (y < grass.top) {
        restoreGrass();
      } else if (dirtBroken && y >= magmaTop) {
        y = magmaTop;
        burned = true;
        clearKeys();
        player.classList.add("is-burning");
        burnTimer = window.setTimeout(() => setWaitingToRespawn(true), 550);
      } else if (tile && grounded && (y === grass.top || y === dirt.top)) {
        crumbling.add(tile);
        if (y === grass.top) tile.grassWear += elapsed;
        if (y === dirt.top) tile.dirtWear += elapsed;
      }

      if (tile) {
        tile.element.classList.toggle("grass-cracking", tile.grassWear >= crackAfter && tile.grassWear < collapseAfter);
        tile.element.classList.toggle("grass-broken", tile.grassWear >= collapseAfter);
        tile.element.classList.toggle("dirt-cracking", tile.dirtWear >= crackAfter && tile.dirtWear < collapseAfter);
        tile.element.classList.toggle("dirt-broken", tile.dirtWear >= collapseAfter);
      }

      render();
      if (x !== oldX || y !== oldY) {
        const feet = field.getBoundingClientRect().top + y;
        const down = feet - window.innerHeight * 0.72;
        const up = feet - window.innerHeight * 0.26;
        if (down > 0 || up < 0) {
          window.scrollBy({ top: Math.max(-18, Math.min(18, down > 0 ? down : up)), behavior: "instant" });
        }
      }

      frame = requestAnimationFrame(tick);
    };

    restart.current = () => {
      setWaitingToRespawn(false);
      respawn();
      player.focus({ preventScroll: true });
      previousTime = undefined;
      frame = requestAnimationFrame(tick);
    };

    measure();
    respawn();
    player.focus({ preventScroll: true });
    const observer = new ResizeObserver(measure);
    observer.observe(field);
    platforms.forEach((platform) => observer.observe(platform));
    player.addEventListener("keydown", onKeyDown);
    player.addEventListener("blur", clearKeys);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", clearKeys);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(burnTimer);
      restart.current = null;
      restoreGrass();
      observer.disconnect();
      player.removeEventListener("keydown", onKeyDown);
      player.removeEventListener("blur", clearKeys);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", clearKeys);
    };
  }, [playing, stage]);

  return (
    <>
      <div className="arcade-play-controls">
        <button ref={controls} data-platform type="button" onClick={() => { setWaitingToRespawn(false); setPlaying(!playing); }}>
          <Gamepad2 size={18} aria-hidden="true" /> {playing ? "Stop playing" : "Play platformer"}
        </button>
        <p id="arcade-keys"><kbd>W</kbd> Jump <kbd>A</kbd><kbd>D</kbd> Move <kbd>S</kbd>/<kbd>↓</kbd> Drop through a surface <kbd>R</kbd> Respawn</p>
      </div>
      {playing && waitingToRespawn && (
        <button ref={respawnButton} type="button" className="arcade-respawn" onClick={() => restart.current()}>
          Respawn
        </button>
      )}
      {playing && (
        <div
          ref={sprite}
          className="arcade-player"
          tabIndex={0}
          aria-label="Platformer character. Press Escape to stop."
          aria-describedby="arcade-keys"
          onKeyDown={(event) => {
            if (event.key === "Escape") controls.current.focus({ preventScroll: true });
          }}
        >
          <span className="arcade-pixel-sprite" aria-hidden="true">
            <span className="arcade-pixel-face" />
            <span className="arcade-pixel-glasses" />
          </span>
        </div>
      )}
    </>
  );
};

export default ArcadePlatformer;
