"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useSiteMotion } from "./MotionPreferences";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function DeskScene() {
  const root = useRef<HTMLDivElement>(null);
  const { reduced: reducedMotion } = useSiteMotion();

  useGSAP(() => {
    if (reducedMotion || !root.current) return;
    const scene = root.current;
    const layers = gsap.utils.toArray<HTMLElement>("[data-desk-depth]");
    const setters = layers.map((layer) => ({
      element: layer,
      depth: Number(layer.dataset.deskDepth || 1),
      x: gsap.quickTo(layer, "x", { duration: .65, ease: "power3.out" }),
      y: gsap.quickTo(layer, "y", { duration: .65, ease: "power3.out" }),
    }));

    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const bounds = scene.getBoundingClientRect();
      const px = (event.clientX - bounds.left) / bounds.width - .5;
      const py = (event.clientY - bounds.top) / bounds.height - .5;
      setters.forEach((item) => {
        item.x(px * item.depth * 8);
        item.y(py * item.depth * 8);
      });
    };
    const leave = () => setters.forEach((item) => { item.x(0); item.y(0); });
    scene.addEventListener("pointermove", move);
    scene.addEventListener("pointerleave", leave);

    gsap.to(".desk-scene-inner", {
      yPercent: 8,
      rotate: .8,
      ease: "none",
      scrollTrigger: { trigger: scene, start: "top top", end: "bottom top", scrub: .6 },
    });

    return () => {
      scene.removeEventListener("pointermove", move);
      scene.removeEventListener("pointerleave", leave);
    };
  }, { scope: root, dependencies: [reducedMotion] });

  return (
    <div className="desk-scene" ref={root} aria-label="Art-directed teaching desk with teacher portrait placeholder and lesson notes">
      <div className="desk-scene-inner">
        <div className="desk-mat" aria-hidden="true" />
        <div className="desk-ruler" data-desk-depth="1.2" aria-hidden="true"><span>0</span><span>5</span><span>10</span><span>15</span></div>
        <div className="desk-pencil" data-desk-depth="1.8" aria-hidden="true"><i /></div>
        <div className="desk-notebook" data-desk-depth=".7" aria-hidden="true">
          <span className="notebook-title">LESSON / 01</span>
          <p>What do we know?</p>
          <p>What are we finding?</p>
          <b>Explain the gap.</b>
        </div>
        <div className="desk-photo" data-desk-depth="2.3" role="img" aria-label="Teacher portrait placeholder—authentic photography pending">
          <span className="desk-photo-label">[TEACHER PORTRAIT]</span>
          <div className="desk-person" aria-hidden="true"><i /><b /></div>
          <span className="desk-photo-note">Photography pending</span>
        </div>
        <div className="desk-sticky" data-desk-depth="2.8" aria-hidden="true">
          <span>CLASSES</span><strong>01—10</strong><i>ask freely</i>
        </div>
        <svg className="desk-mark" viewBox="0 0 240 150" aria-hidden="true"><path d="M14 108C57 20 149 14 219 54"/><path d="M205 43l15 11-18 7"/></svg>
        <span className="desk-coordinate top" aria-hidden="true">TEACHING DESK / 01</span>
        <span className="desk-coordinate side" aria-hidden="true">UNDERSTAND → PRACTISE → IMPROVE</span>
      </div>
    </div>
  );
}
