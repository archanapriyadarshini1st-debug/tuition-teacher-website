"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useSiteMotion } from "./MotionPreferences";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  { number: "01", short: "Notice", title: "Notice the question", text: "Begin by understanding what the question is really asking—not by rushing towards an answer.", symbol: "?" },
  { number: "02", short: "Explain", title: "Explain the idea", text: "Break a difficult concept into smaller, connected parts and use language the student can follow.", symbol: "A→B" },
  { number: "03", short: "Try", title: "Try it together", text: "Work through an example with guidance, making each choice visible rather than skipping to the result.", symbol: "1+1" },
  { number: "04", short: "Practise", title: "Practise independently", text: "Give the learner space to apply the idea and notice where confidence turns into uncertainty.", symbol: "✓" },
  { number: "05", short: "Review", title: "Review the gap", text: "Return to the exact point of confusion, revise it clearly, and try again with purpose.", symbol: "↻" },
];

type Step = (typeof steps)[number];

function StoryPanel({ step, animated = false }: { step: Step; animated?: boolean }) {
  const content = (
    <>
      <div className="story-symbol" aria-hidden="true">
        <span>{step.symbol}</span>
        <i className="story-orbit one" /><i className="story-orbit two" />
        <b className="story-visual-mark" />
      </div>
      <div className="story-copy">
        <span className="panel-index">{step.number} / 05</span>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </div>
    </>
  );

  if (!animated) return <article className="story-panel">{content}</article>;

  return (
    <motion.article
      className="story-panel story-panel-active"
      initial={{ opacity: 1, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .38, ease: [0.23, 1, 0.32, 1] }}
    >
      {content}
    </motion.article>
  );
}

export default function LearningStory() {
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const { reduced: reducedMotion } = useSiteMotion();

  useGSAP(() => {
    if (reducedMotion) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 821px)", () => {
      const trigger = ScrollTrigger.create({
        trigger: root.current,
        start: "top 82px",
        end: "+=2800",
        pin: stage.current,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const next = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
          if (next !== activeRef.current) {
            activeRef.current = next;
            setActive(next);
          }
        },
      });
      return () => trigger.kill();
    });
    return () => mm.revert();
  }, { scope: root, dependencies: [reducedMotion] });

  return (
    <div className={`learning-story ${reducedMotion ? "is-reduced" : ""}`} ref={root}>
      <div className="learning-stage" ref={stage}>
        <div className="story-nav" aria-label="Learning process progress">
          {steps.map((step, index) => (
            <div className={`story-nav-item ${active === index ? "active" : ""}`} key={step.number}>
              {active === index && <motion.span layoutId="unlumen-learning-highlight" className="story-active-highlight" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
              <span className="story-nav-number">{step.number}</span>
              <span>{step.short}</span>
            </div>
          ))}
        </div>

        <div className="story-canvas story-desktop-canvas" aria-live="polite">
          <StoryPanel key={steps[active].number} step={steps[active]} animated />
        </div>

        <div className="story-mobile-list">
          {steps.map((step) => <StoryPanel key={step.number} step={step} />)}
        </div>

        <p className="story-instruction"><span aria-hidden="true">↓</span>{active === 4 ? " Continue to Classes 1–10" : " Scroll to move through the learning process"}</p>
      </div>
      <p className="draft-note story-draft">A draft process for discussion—final wording will reflect the teacher’s actual method.</p>
    </div>
  );
}
