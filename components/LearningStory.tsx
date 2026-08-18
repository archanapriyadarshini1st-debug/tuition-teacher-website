"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSiteMotion } from "./MotionPreferences";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  { number: "01", short: "Notice", title: "Notice the question", text: "Begin by understanding what the question is really asking—not by rushing towards an answer.", symbol: "?" },
  { number: "02", short: "Explain", title: "Explain the idea", text: "Break a difficult concept into smaller, connected parts and use language the student can follow.", symbol: "A→B" },
  { number: "03", short: "Try", title: "Try it together", text: "Work through an example with guidance, making each choice visible rather than skipping to the result.", symbol: "1+1" },
  { number: "04", short: "Practise", title: "Practise independently", text: "Give the learner space to apply the idea and notice where confidence turns into uncertainty.", symbol: "✓" },
  { number: "05", short: "Review", title: "Review the gap", text: "Return to the exact point of confusion, revise it clearly, and try again with purpose.", symbol: "↻" },
];

export default function LearningStory() {
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const { reduced: reducedMotion } = useSiteMotion();

  useGSAP(() => {
    if (reducedMotion) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 821px) and (prefers-reduced-motion: no-preference)", () => {
      const panels = gsap.utils.toArray<HTMLElement>(".story-panel");
      const marks = gsap.utils.toArray<HTMLElement>(".story-visual-mark");
      gsap.set(panels, { autoAlpha: 0, y: 28, scale: 0.985 });
      gsap.set(marks, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(panels[0], { autoAlpha: 1, y: 0, scale: 1 });
      gsap.set(marks[0], { scaleX: 1 });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        scrollTrigger: {
          trigger: root.current,
          start: "top 82px",
          end: "+=3200",
          pin: stage.current,
          scrub: 0.75,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const next = Math.min(steps.length - 1, Math.floor(self.progress * steps.length));
            if (next !== activeRef.current) {
              activeRef.current = next;
              setActive(next);
            }
          },
        },
      });

      for (let index = 1; index < panels.length; index += 1) {
        timeline
          .to(panels[index - 1], { autoAlpha: 0, y: -22, scale: 0.99, duration: 0.35 })
          .fromTo(panels[index], { autoAlpha: 0, y: 30, scale: 0.985 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.55 }, "<0.18")
          .to(marks[index], { scaleX: 1, duration: 0.45 }, "<0.05");
      }

      return () => timeline.kill();
    });

    return () => mm.revert();
  }, { scope: root, dependencies: [reducedMotion] });

  return (
    <div className="learning-story" ref={root}>
      <div className="learning-stage" ref={stage}>
        <div className="story-nav" aria-label="Learning process progress">
          {steps.map((step, index) => (
            <div className={`story-nav-item ${active === index ? "active" : ""}`} key={step.number}>
              {active === index && <motion.span layoutId="unlumen-learning-highlight" className="story-active-highlight" transition={reducedMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }} />}
              <span className="story-nav-number">{step.number}</span>
              <span>{step.short}</span>
            </div>
          ))}
        </div>

        <div className="story-canvas">
          {steps.map((step, index) => (
            <article className="story-panel" key={step.number}>
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
            </article>
          ))}
        </div>
        <p className="story-instruction"><span aria-hidden="true">↓</span> Scroll to move through the learning process</p>
      </div>
      <p className="draft-note story-draft">A draft process for discussion—final wording will reflect the teacher’s actual method.</p>
    </div>
  );
}
