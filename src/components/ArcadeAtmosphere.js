import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const schedule = [
  { kind: "banner", period: 60000, first: 12000, duration: 16000 },
  { kind: "jets", period: 30000, first: 25000, duration: 2200 },
  { kind: "helicopter", period: 60000, first: 40000, duration: 20000 },
  { kind: "rocket", period: 120000, first: 120000, duration: 5500 },
  { kind: "road-truck", period: 120000, first: 18000, duration: 14000 },
  { kind: "dump-truck", period: 120000, first: 60000, duration: 22000 },
];

const Truck = ({ dump = false }) => (
  <div className={`scene-truck ${dump ? "scene-dump-truck" : ""}`}>
    <div className="scene-truck-art">
    <span className="scene-truck-bed"><i /><i /><i /></span>
    <span className="scene-truck-cab" />
    <span className="scene-truck-wheel wheel-back" />
    <span className="scene-truck-wheel wheel-front" />
    </div>
  </div>
);

const ArcadeAtmosphere = () => {
  const terrain = useRef(null);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const clock = schedule.map((entry) => ({ ...entry, due: performance.now() + entry.first }));
    let serial = 0;

    const terrainCoordinates = (kind) => {
      const landscape = terrain.current.parentElement;
      const landscapeBounds = landscape.getBoundingClientRect();
      const fieldBounds = landscape.closest(".arcade-shell").getBoundingClientRect();
      const mountain = landscape.querySelector(".arcade-volcano-mountain").getBoundingClientRect();
      const crater = landscape.querySelector(".arcade-volcano-crater").getBoundingClientRect();
      const peak = [...landscape.querySelectorAll(".skyline-peak")];
      const landing = peak[Math.floor(Math.random() * peak.length)]?.getBoundingClientRect();
      const baseX = mountain.left - landscapeBounds.left;
      const baseY = mountain.bottom - landscapeBounds.top - 28;
      const craterX = crater.left + crater.width / 2 - landscapeBounds.left;
      const craterY = crater.bottom - landscapeBounds.top;
      const slope = mountain.height * .88 / (mountain.width * .44);
      const slopeAngle = -Math.atan(slope);
      // The local point (34, 34) is the truck's wheel contact midpoint.
      const wheelAnchor = 34;
      const summitDistance = Math.max(0, mountain.width * .44 - 25);
      const groundY = mountain.bottom - landscapeBounds.top;
      const summitX = baseX + summitDistance;
      const summitY = groundY - summitDistance * slope;
      const bedX = summitX - 14 * Math.cos(slopeAngle) + 30 * Math.sin(slopeAngle);
      const bedY = summitY - 14 * Math.sin(slopeAngle) - 30 * Math.cos(slopeAngle);

      return {
        "--scene-width": `${landscapeBounds.width}px`,
        "--base-x": `${baseX}px`,
        "--base-y": `${baseY}px`,
        "--crater-x": `${craterX - 35}px`,
        "--crater-y": `${craterY - 30}px`,
        "--slope-angle": `${slopeAngle * 180 / Math.PI}deg`,
        "--mountain-base-x": `${baseX - wheelAnchor}px`,
        "--mountain-base-y": `${groundY - wheelAnchor}px`,
        "--mountain-top-x": `${summitX - wheelAnchor}px`,
        "--mountain-top-y": `${summitY - wheelAnchor}px`,
        "--payload-start-x": `${bedX}px`,
        "--payload-start-y": `${bedY}px`,
        "--payload-end-x": `${craterX}px`,
        "--payload-end-y": `${craterY}px`,
        "--heli-x": `${landing ? landing.left + landing.width / 2 - landscapeBounds.left - 18 : craterX}px`,
        "--heli-y": `${landing ? landing.top + landing.height * .13 - landscapeBounds.top - 16 : craterY - 16}px`,
        "--flight-y": kind === "banner" ? `${-fieldBounds.top + window.innerHeight * (.12 + Math.random() * .14)}px` : `${8 + Math.random() * 12}vh`,
      };
    };

    const tick = () => {
      if (document.hidden || motion.matches) return;
      const now = performance.now();
      const additions = [];
      for (const entry of clock) {
        if (now < entry.due) continue;
        additions.push({ id: serial++, kind: entry.kind, expires: now + entry.duration, style: terrainCoordinates(entry.kind) });
        entry.due = now + entry.period;
      }
      setEvents((current) => {
        const remaining = current.filter((event) => event.expires > now);
        return additions.length || remaining.length !== current.length ? [...remaining, ...additions] : current;
      });
    };

    const onMotionChange = () => {
      if (motion.matches) setEvents([]);
      for (const entry of clock) entry.due = performance.now() + entry.first;
    };

    const interval = window.setInterval(tick, 250);
    motion.addEventListener("change", onMotionChange);
    return () => {
      window.clearInterval(interval);
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  const sky = events.filter(({ kind }) => ["jets", "rocket"].includes(kind));

  return (
    <>
      {createPortal(
        <div className="scene-sky-traffic" aria-hidden="true">
          {sky.map(({ id, kind, style }) => (
            <div key={id} className={`scene-flight scene-${kind}`} style={style}>
              {kind === "jets" && <><span className="scene-jet jet-lead"><i className="scene-vapor-cone" /></span><span className="scene-jet jet-wing"><i className="scene-vapor-cone" /></span></>}
              {kind === "rocket" && <span className="scene-rocket-body"><i /></span>}
            </div>
          ))}
        </div>,
        document.body,
      )}
      {events.some(({ kind }) => kind === "banner") && createPortal(
        <div className="scene-banner-layer" aria-hidden="true">
          {events.filter(({ kind }) => kind === "banner").map(({ id, style }) => (
            <div key={id} className="scene-flight scene-banner" style={style}>
              <span className="scene-instagram-banner">@sasinkg</span>
              <span className="scene-towline" />
              <span className="scene-prop-plane"><i /></span>
            </div>
          ))}
        </div>,
        terrain.current.closest(".arcade-shell"),
      )}
      {events.some(({ kind }) => kind === "helicopter") && createPortal(
        <div className="scene-helicopter-traffic" aria-hidden="true">
          {events.filter(({ kind }) => kind === "helicopter").map(({ id, style }) => (
            <div key={id} className="scene-helicopter" style={style}>
              <div className="scene-helicopter-art">
                <span className="scene-heli-rotor" /><span className="scene-heli-body" />
                <span className="scene-heli-tail" /><span className="scene-heli-skids" />
              </div>
            </div>
          ))}
        </div>,
        terrain.current.parentElement.querySelector(".arcade-volcano-skyline"),
      )}
      <div ref={terrain} className="scene-terrain-traffic" aria-hidden="true">
        {events.filter(({ kind }) => ["road-truck", "dump-truck"].includes(kind)).map(({ id, kind, style }) => (
          <div key={id} className={`scene-terrain-event scene-${kind}-event`} style={style}>
            <Truck dump={kind === "dump-truck"} />
            {kind === "dump-truck" && <><span className="scene-dump-payload" /><span className="scene-dump-smoke" /></>}
          </div>
        ))}
      </div>
    </>
  );
};

export default ArcadeAtmosphere;
