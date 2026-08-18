"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const steps = [
  { number: "01", short: "Notice", title: "Notice the question", text: "Begin by understanding what the question is really asking—not by rushing towards an answer." },
  { number: "02", short: "Explain", title: "Explain the idea", text: "Break a difficult concept into smaller, connected parts and use language the student can follow." },
  { number: "03", short: "Try", title: "Try it together", text: "Work through an example with guidance, making each choice visible rather than skipping to the result." },
  { number: "04", short: "Practise", title: "Practise independently", text: "Give the learner space to apply the idea and notice where confidence turns into uncertainty." },
  { number: "05", short: "Review", title: "Review the gap", text: "Return to the exact point of confusion, revise it clearly, and try again with purpose." },
];

export default function ApproachSteps() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  function moveFocus(index: number, key: string) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(key)) return;
    let next = index;
    if (key === "ArrowRight") next = (index + 1) % steps.length;
    if (key === "ArrowLeft") next = (index - 1 + steps.length) % steps.length;
    if (key === "Home") next = 0;
    if (key === "End") next = steps.length - 1;
    setActive(next);
    document.getElementById(`step-tab-${next}`)?.focus();
  }

  return (
    <div className="approach-widget">
      <div className="step-track" role="tablist" aria-label="Learning approach">
        {steps.map((step, index) => (
          <button key={step.number} role="tab" aria-selected={active === index} aria-controls={`step-panel-${index}`} id={`step-tab-${index}`} tabIndex={active === index ? 0 : -1} className={active === index ? "active" : ""} onClick={() => setActive(index)} onKeyDown={(event) => { if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) event.preventDefault(); moveFocus(index, event.key); }}>
            <span className="step-number">{step.number}</span>
            <span>{step.short}</span>
          </button>
        ))}
        <span className="track-line" aria-hidden="true" />
        <span className="track-progress" aria-hidden="true" style={{ width: `${(active / (steps.length - 1)) * 100}%` }} />
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          className="step-panel"
          role="tabpanel"
          id={`step-panel-${active}`}
          aria-labelledby={`step-tab-${active}`}
          tabIndex={0}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(10px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: "translateY(-6px)" }}
          transition={{ duration: reduceMotion ? 0.12 : 0.28, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="panel-index">{steps[active].number} / 05</span>
          <h3>{steps[active].title}</h3>
          <p>{steps[active].text}</p>
        </motion.div>
      </AnimatePresence>
      <p className="draft-note">A draft process for discussion—final wording will reflect the teacher’s actual method.</p>
    </div>
  );
}
