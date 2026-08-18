"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useEffect } from "react";

export default function MotionSystem() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 115,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const root = document.documentElement;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-stagger]"));

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-in-view"));
      return;
    }

    root.classList.add("motion-ready");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in-view");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -7% 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, [reduceMotion]);

  return (
    <motion.div
      className="page-progress"
      aria-hidden="true"
      style={{ scaleX: reduceMotion ? 0 : smoothProgress }}
    />
  );
}
