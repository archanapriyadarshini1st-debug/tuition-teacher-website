"use client";

import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useSiteMotion } from "./MotionPreferences";

const ease = [0.23, 1, 0.32, 1] as const;

export function AnimatedHeadline() {
  const { reduced: reduceMotion } = useSiteMotion();
  const firstLine = ["Classroom", "experience,"];
  const secondLine = ["made", "personal."];
  let index = 0;

  function word(text: string, accent = false) {
    const delay = reduceMotion ? 0 : 0.12 + index++ * 0.065;
    return (
      <span className={`headline-word-mask ${accent ? "accent" : ""}`} key={text}>
        <motion.span
          className="headline-word"
          initial={{ transform: "translateY(108%)", opacity: 0 }}
          animate={{ transform: "translateY(0%)", opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.72, delay, ease }}
        >
          {text}
        </motion.span>
      </span>
    );
  }

  return (
    <h1 className="animated-headline" aria-label="Classroom experience, made personal.">
      <span className="headline-line" aria-hidden="true">{firstLine.map((item) => word(item))}</span>
      <em className="headline-line" aria-hidden="true">{secondLine.map((item) => word(item, true))}</em>
    </h1>
  );
}

function CountNumber({ end, decimals = 0, delay = 0 }: { end: number; decimals?: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const { reduced: reduceMotion } = useSiteMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      const frame = requestAnimationFrame(() => setValue(end));
      return () => cancelAnimationFrame(frame);
    }
    const control = animate(0, end, {
      duration: 1.15,
      delay,
      ease,
      onUpdate: setValue,
    });
    return () => control.stop();
  }, [inView, reduceMotion, end, delay]);

  return <span ref={ref}>{value.toFixed(decimals)}</span>;
}

export function TuitionCount() {
  return <strong className="count-stat"><span aria-hidden="true">~</span><CountNumber end={4.9} decimals={1} /><span className="sr-only">Approximately 4.9</span></strong>;
}

export function SchoolCount() {
  return <strong className="count-stat"><span aria-hidden="true">~</span><CountNumber end={1} /><span aria-hidden="true">–</span><CountNumber end={2} delay={.08} /><span className="sr-only">Approximately 1 to 2</span></strong>;
}
