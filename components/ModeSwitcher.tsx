"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useSiteMotion } from "./MotionPreferences";

const modes = {
  online: {
    number: "01",
    label: "Online",
    title: "A focused lesson, wherever home is.",
    copy: "Learn from home with the platform, timings, and session format to be confirmed.",
    detail: "[Platform and device requirements pending]",
  },
  offline: {
    number: "02",
    label: "Offline",
    title: "A shared desk, with room to ask again.",
    copy: "Learn in person at [Location], with venue details and current timings to be confirmed.",
    detail: "[Location and service area pending]",
  },
};

type Mode = keyof typeof modes;

export default function ModeSwitcher() {
  const [active, setActive] = useState<Mode>("online");
  const { reduced: reduceMotion } = useSiteMotion();
  const mode = modes[active];

  function moveMode(current: Mode, key: string) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(key)) return;
    const keys = Object.keys(modes) as Mode[];
    const index = keys.indexOf(current);
    const next = key === "Home" ? keys[0] : key === "End" ? keys[keys.length - 1] : keys[(index + (key === "ArrowRight" ? 1 : -1) + keys.length) % keys.length];
    setActive(next);
    document.getElementById(`mode-tab-${next}`)?.focus();
  }

  return (
    <div className={`mode-world ${active}`}>
      <div className="mode-world-nav" role="tablist" aria-label="Choose a class mode">
        {(Object.keys(modes) as Mode[]).map((key) => (
          <button key={key} id={`mode-tab-${key}`} role="tab" aria-selected={active === key} aria-controls="mode-world-panel" tabIndex={active === key ? 0 : -1} onClick={() => setActive(key)} onKeyDown={(event) => { if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) event.preventDefault(); moveMode(key, event.key); }}>
            {active === key && <motion.span layoutId="mode-world-highlight" className="mode-world-highlight" transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }} />}
            <span>{modes[key].number}</span>{modes[key].label}
          </button>
        ))}
      </div>

      <div className="mode-world-stage" id="mode-world-panel" role="tabpanel" aria-labelledby={`mode-tab-${active}`} tabIndex={0}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={active} className="mode-world-copy" initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }} transition={{ duration: reduceMotion ? .1 : .38, ease: [0.23, 1, 0.32, 1] }}>
            <span className="eyebrow">{mode.number} / {mode.label.toUpperCase()} CLASSES</span>
            <h3>{mode.title}</h3>
            <p>{mode.copy}</p>
            <small>{mode.detail}</small>
          </motion.div>
        </AnimatePresence>

        <div className="mode-world-visual" aria-hidden="true">
          <AnimatePresence mode="wait" initial={false}>
            {active === "online" ? (
              <motion.div key="online-visual" className="online-device" initial={reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: -3, scale: .96 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, scale: .98 }} transition={{ duration: reduceMotion ? .1 : .52, ease: [0.23, 1, 0.32, 1] }}>
                <div className="device-screen"><span className="screen-teacher" /><div><i /><i /><i /></div><b>CONCEPT / 02</b></div>
                <span className="device-base" />
              </motion.div>
            ) : (
              <motion.div key="offline-visual" className="offline-desk" initial={reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 3, scale: .96 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, scale: .98 }} transition={{ duration: reduceMotion ? .1 : .52, ease: [0.23, 1, 0.32, 1] }}>
                <div className="offline-paper"><span>TRY IT</span><i /><i /><i /><b>✓</b></div>
                <span className="offline-pencil" />
              </motion.div>
            )}
          </AnimatePresence>
          <svg viewBox="0 0 300 180"><path d="M12 151C74 38 188 18 286 67"/><path d="M271 56l15 11-18 8"/></svg>
        </div>
      </div>
    </div>
  );
}
