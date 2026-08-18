"use client";

import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const words = ["Before", "an", "answer", "can", "be", "remembered,", "the", "idea", "should", "make", "sense."];

function RevealWord({ word, index, progress, total }: { word: string; index: number; progress: MotionValue<number>; total: number }) {
  const start = index / (total + 2);
  const end = Math.min(start + 0.22, 1);
  const opacity = useTransform(progress, [start, end], [0.16, 1]);
  const y = useTransform(progress, [start, end], [10, 0]);
  const isAccent = index >= total - 2;

  return (
    <motion.span className={`scroll-word ${isAccent ? "accent" : ""}`} style={{ opacity, y }}>
      {word}
    </motion.span>
  );
}

export default function ScrollRevealQuote() {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 88%", "end 52%"] });

  return (
    <h2 ref={ref} className="scroll-reveal-quote" aria-label="Before an answer can be remembered, the idea should make sense.">
      <span className="sr-only">Before an answer can be remembered, the idea should make sense.</span>
      <span aria-hidden="true">
        {words.map((word, index) => <RevealWord key={`${word}-${index}`} word={word} index={index} progress={scrollYProgress} total={words.length} />)}
      </span>
    </h2>
  );
}
