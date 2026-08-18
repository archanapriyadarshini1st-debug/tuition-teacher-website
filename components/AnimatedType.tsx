"use client";

import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const ease = [0.23, 1, 0.32, 1] as const;

export function AnimatedHeadline() {
  const reduceMotion = useReducedMotion();
  const firstLine = ["Classroom", "experience,"];
  const secondLine = ["made", "personal."];
  let index = 0;

  function word(text: string, accent = false) {
    const delay = reduceMotion ? 0 : 0.12 + index++ * 0.065;
    return (
      <span className={`headline-word-mask ${accent ? "accent" : ""}`} key={text}>
        <motion.span
          className="headline-word"
          initial={reduceMotion ? false : { transform: "translateY(108%)", opacity: 0 }}
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

function useCount(end: number, decimals = 0, delay = 0) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? end : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(end);
      return;
    }
    const control = animate(0, end, {
      duration: 1.15,
      delay,
      ease,
      onUpdate: (latest) => setValue(latest),
    });
    return () => control.stop();
  }, [inView, reduceMotion, end, delay]);

  return { ref, value: value.toFixed(decimals) };
}

export function TuitionCount() {
  const { ref, value } = useCount(4.9, 1);
  return <strong className="count-stat"><span aria-hidden="true">~</span><span ref={ref}>{value}</span><span className="sr-only">Approximately 4.9</span></strong>;
}

export function SchoolCount() {
  const first = useCount(1, 0);
  const second = useCount(2, 0, 0.08);
  return <strong className="count-stat"><span aria-hidden="true">~</span><span ref={first.ref}>{first.value}</span><span aria-hidden="true">–</span><span ref={second.ref}>{second.value}</span><span className="sr-only">Approximately 1 to 2</span></strong>;
}
