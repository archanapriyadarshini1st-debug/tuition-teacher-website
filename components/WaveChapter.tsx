"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";

const GradientWaves = dynamic(() => import("./GradientWaves"), { ssr: false });

export default function WaveChapter() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="wave-chapter" aria-labelledby="wave-chapter-title">
      <div className="wave-background">
        <GradientWaves
          horizonColor="#17211B"
          waveColor="#1C5B4E"
          crestColor="#F4F0E6"
          speed={reduceMotion ? 0 : .16}
          amplitude={1.7}
          waveScale={.46}
          waveRatio={.88}
          swell={23}
          turbulence={12}
          tilt={1.08}
          zoom={1.04}
          height={5.3}
          fogDepth={19}
          detail="medium"
          brightness={.88}
          opacity={.82}
          mouseInteraction={!reduceMotion}
          parallaxStrength={.28}
          grain={!reduceMotion}
          grainIntensity={.025}
        />
      </div>
      <div className="wave-grid" aria-hidden="true" />
      <div className="page-shell wave-content">
        <motion.p className="eyebrow" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .6 }} transition={{ duration: reduceMotion ? 0 : .65, ease: [0.23,1,.32,1] }}>CONNECTED LEARNING / INTERLUDE</motion.p>
        <motion.h2 id="wave-chapter-title" initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .45 }} transition={{ duration: reduceMotion ? 0 : .85, ease: [0.23,1,.32,1] }}>Different subjects.<br /><em>One connected way of thinking.</em></motion.h2>
        <motion.div className="wave-caption" initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .7 }} transition={{ duration: reduceMotion ? 0 : .7, delay: reduceMotion ? 0 : .15, ease: [0.23,1,.32,1] }}>
          <span>UNDERSTAND</span><i /><span>PRACTISE</span><i /><span>IMPROVE</span>
        </motion.div>
      </div>
      <span className="wave-note">A VISUAL METAPHOR — NOT A LEARNING CLAIM</span>
    </section>
  );
}
