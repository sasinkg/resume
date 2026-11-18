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
    const volcano = field.querySelector(".arcade-volcano");
    const eruption = field.querySelector(".arcade-eruption");
    if (!volcano || !eruption) return;

    let nextEruption = performance.now() + 30000;
    let eruptionEnds = 0;
    let previousVariant = "";
    const variants = ["smoke", "small", "big"];
    const interval = window.setInterval(() => {
      const now = performance.now();
      if (now >= nextEruption) {
        const choices = variants.filter((variant) => variant !== previousVariant);
        previousVariant = choices[Math.floor(Math.random() * choices.length)];
        eruption.className = `arcade-eruption eruption-${previousVariant}`;
        eruptionEnds = now + 4500;
        nextEruption = now + 30000;
      } else if (eruptionEnds && now >= eruptionEnds) {
        eruption.className = "arcade-eruption";
        eruptionEnds = 0;
      }

      const player = sprite.current;
      const mountain = volcano.getBoundingClientRect();
      const avatar = player?.getBoundingClientRect();
      const nearby = avatar && !player.classList.contains("is-burning") &&
        avatar.bottom >= mountain.top - 160 && avatar.top <= mountain.bottom + 100 &&
        avatar.right >= mountain.left - 120 && avatar.left <= mountain.right + 120;
      field.classList.toggle("is-volcano-warning", Boolean(nearby && nextEruption - now <= 5000));
    }, 100);

    return () => {
      window.clearInterval(interval);
      field.classList.remove("is-volcano-warning");
      eruption.className = "arcade-eruption";
    };
  }, [playing, stage]);

  useEffect(() => {
    if (!playing) return;

    const field = stage.current;
    const player = sprite.current;
    const ground = field.querySelector(".arcade-ground");
    let platforms = [];
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
    let standingOn = null;
    let airJumpAvailable = true;
    let pendingJumps = 0;
    let pressDown = false;
    let surfaces = [];
    let stageWidth = 0;
    let previousTime;
    let frame;

    const measure = () => {
      platforms = [
        field.querySelector(".arcade-cabinet"),
        ...field.querySelectorAll("[data-platform]:not(.arcade-cabinet)"),
        ground,
      ];
      const fieldBounds = field.getBoundingClientRect();
      stageWidth = fieldBounds.width;
      surfaces = platforms.flatMap((platform) => {
        const bounds = platform.getBoundingClientRect();
        if (bounds.width === 0 || bounds.height === 0) return [];
        const left = bounds.left - fieldBounds.left;
        const right = bounds.right - fieldBounds.left;
        const top = { top: bounds.top - fieldBounds.top, left, right, element: platform, moving: platform.hasAttribute("data-moving-platform") };
        if (platform.hasAttribute("data-platform-slope")) {
          const height = bounds.bottom - bounds.top;
          return [{
            ...top,
            topAt: (position) => {
              if (position < left || position > right) return undefined;
              const progress = (position - left) / (right - left);
              const distanceFromPeak = Math.abs(progress - 0.5);
              const depth = distanceFromPeak < 0.06
                ? 0.16 - distanceFromPeak * (2 / 3)
                : distanceFromPeak * 2;
              return top.top + depth * height;
            },
          }];
        }
        const svg = platform.querySelector(":scope > svg[data-collision-outline]");
        if (svg) {
          const inverse = svg.getScreenCTM()?.inverse();
          if (!inverse) return [];
          const shapes = [...svg.querySelectorAll("path, circle, rect, ellipse, polygon, polyline, line")];
          const outline = [];
          for (let px = bounds.left; px <= bounds.right; px += 2) {
            let hit;
            for (let py = bounds.top; py <= bounds.bottom; py += 2) {
              const point = new DOMPoint(px, py).matrixTransform(inverse);
              if (shapes.some((shape) => shape.isPointInStroke(point))) {
                hit = py - fieldBounds.top;
                break;
              }
            }
            outline.push(hit);
          }
          return [{ ...top, topAt: (position) => outline[Math.round((position - left) / 2)] }];
        }

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
      standingOn = null;
      airJumpAvailable = true;
      pendingJumps = 0;
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
      if (key === "w" && !event.repeat) pendingJumps = Math.min(2, pendingJumps + 1);
      if ((key === "s" || key === "arrowdown") && !event.repeat) pressDown = true;
      keys.add(key);
    };

    const onKeyUp = (event) => keys.delete(event.key.toLowerCase());
    const clearKeys = () => {
      keys.clear();
      pendingJumps = 0;
      pressDown = false;
    };

    const tick = (now) => {
      const elapsed = Math.min((now - (previousTime ?? now)) / 1000, 0.033);
      previousTime = now;
      if (burned) return;
      const fieldBounds = field.getBoundingClientRect();
      for (const surface of surfaces) {
        if (!surface.moving) continue;
        const bounds = surface.element.getBoundingClientRect();
        const nextLeft = bounds.left - fieldBounds.left;
        const nextTop = bounds.top - fieldBounds.top;
        if (grounded && standingOn === surface.element) {
          x += nextLeft - surface.left;
          y += nextTop - surface.top;
        }
        surface.left = nextLeft;
        surface.right = bounds.right - fieldBounds.left;
        surface.top = nextTop;
      }

      const oldX = x;
      const oldY = y;
      const wasGrounded = grounded;
      const direction = Number(keys.has("d")) - Number(keys.has("a"));
      const crouching = keys.has("s");

      const jump = pendingJumps > 0;
      const floor = surfaces[surfaces.length - 1].top;
      const drop = grounded && y < floor && (pressDown || (jump && crouching));
      pressDown = false;

      if (direction) player.classList.toggle("is-facing-left", direction < 0);
      x = Math.max(11, Math.min(stageWidth - 11, x + direction * (crouching ? 95 : 255) * elapsed));
      if (jump && !crouching && (grounded || airJumpAvailable)) {
        lift = -495;
        if (!grounded) airJumpAvailable = false;
      }
      if (drop) lift = 120;
      pendingJumps = Math.max(0, pendingJumps - 1);
      lift += 1250 * elapsed;
      y += drop ? Math.max(0.01, lift * elapsed) : lift * elapsed;
      grounded = false;
      standingOn = null;

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
        let landingSurface = null;
        const landing = surfaces.reduce((nearest, surface) => {
          const surfaceTop = surface.topAt ? surface.topAt(x) : surface.top;
          const previousTop = surface.topAt ? surface.topAt(oldX) : surface.top;
          const followsCurve = surface.topAt && wasGrounded && !drop && Math.abs(oldY - previousTop) < 3 && Number.isFinite(surfaceTop);
          const crossed = (oldY <= surfaceTop && y >= surfaceTop) || followsCurve;
          const aligned = x + 4 >= surface.left && x - 4 <= surface.right;
          const broken = (surface === grass && grassBroken) || (surface === dirt && dirtBroken);
          const skipped = (drop && Math.abs(previousTop - oldY) < 3) || broken;
          if (crossed && aligned && !skipped && surfaceTop < nearest) {
            landingSurface = surface;
            return surfaceTop;
          }
          return nearest;
        }, Infinity);
        if (landing < Infinity || y >= floor) {
          y = Math.min(landing, floor);
          lift = 0;
          grounded = true;
          standingOn = landingSurface?.element ?? null;
          airJumpAvailable = true;
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
    const mutations = new MutationObserver(() => {
      measure();
      platforms.forEach((platform) => observer.observe(platform));
    });
    mutations.observe(field, { childList: true, subtree: true });
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
      mutations.disconnect();
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
        <p id="arcade-keys"><kbd>W</kbd> Jump / double jump <kbd>A</kbd><kbd>D</kbd> Move <kbd>S</kbd>/<kbd>↓</kbd> Drop through a surface <kbd>R</kbd> Respawn</p>
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
