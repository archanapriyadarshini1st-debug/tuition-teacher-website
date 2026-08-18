"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useSiteMotion } from "./MotionPreferences";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const enterEase = "power3.out";

export default function MotionSystem() {
  const { reduced: reduceMotion } = useSiteMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 115,
    damping: 24,
    restDelta: 0.001,
  });

  useGSAP(() => {
    const revealItems = gsap.utils.toArray<HTMLElement>("[data-reveal]");
    const staggerGroups = gsap.utils.toArray<HTMLElement>("[data-stagger]");
    const hero = document.querySelector<HTMLElement>(".hero");

    if (reduceMotion) {
      gsap.set([...revealItems, ...staggerGroups.flatMap((group) => Array.from(group.children))], {
        clearProps: "transform,opacity,visibility,clipPath,willChange",
      });
      return;
    }

    const mm = gsap.matchMedia();
    mm.add(
      {
        desktop: "(min-width: 821px)",
        mobile: "(max-width: 820px)",
        motionOK: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const { desktop } = context.conditions as { desktop: boolean; mobile: boolean; motionOK: boolean };
        const distance = desktop ? 42 : 22;

        // Strongest choreography: one deliberate hero timeline.
        if (hero) {
          const heroTimeline = gsap.timeline({ defaults: { ease: enterEase } });
          heroTimeline
            .fromTo(".hero .eyebrow", { autoAlpha: 0, x: -24 }, { autoAlpha: 1, x: 0, duration: .55 }, 0)
            .fromTo(".hero-desk", { autoAlpha: 0, scale: .975, clipPath: "inset(0 0 14% 16%)" }, { autoAlpha: 1, scale: 1, clipPath: "inset(0 0 0% 0%)", duration: 1.05 }, .08)
            .fromTo(".hero-intro", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: .62 }, .42)
            .fromTo(".hero-actions", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: .58 }, .53)
            .fromTo(".hero-facts > div", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: .48, stagger: .07 }, .64)
            .fromTo(".scroll-cue", { autoAlpha: 0 }, { autoAlpha: 1, duration: .45 }, .84);
        }

        // Medium-strength editorial section entrances.
        revealItems.forEach((item) => {
          if (item.closest(".hero")) return;
          if (item.parentElement?.matches("[data-stagger]")) return;

          const direction = item.dataset.reveal || "up";
          const from: gsap.TweenVars = { autoAlpha: 0, willChange: "transform,opacity" };
          if (direction === "left") from.x = -distance;
          if (direction === "right") from.x = distance;
          if (direction === "up") from.y = distance * .85;
          if (direction === "down") from.y = -distance * .7;
          if (direction === "number") { from.y = 22; from.scale = .985; }
          if (direction === "text" || direction === "split") {
            from.y = 24;
            from.clipPath = "inset(0 0 16% 0)";
          }

          const triggerStart = desktop ? "top 86%" : "top 91%";
          gsap.fromTo(item, from, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: direction === "text" || direction === "split" ? .88 : .74,
            ease: enterEase,
            clearProps: "willChange",
            scrollTrigger: {
              trigger: item,
              start: triggerStart,
              toggleActions: "play none none none",
              once: true,
            },
          });

          // A second, tighter typographic beat gives headings an editorial line-reveal feel.
          const heading = item.querySelector<HTMLElement>("h2:not(.scroll-reveal-quote)");
          if (heading) {
            gsap.fromTo(heading,
              { y: desktop ? 24 : 14, clipPath: "inset(0 0 20% 0)", willChange: "transform,clip-path" },
              {
                y: 0,
                clipPath: "inset(0 0 0% 0)",
                duration: .82,
                delay: .08,
                ease: enterEase,
                clearProps: "willChange",
                scrollTrigger: { trigger: item, start: triggerStart, toggleActions: "play none none none", once: true },
              }
            );
          }
        });

        // Group choreography varies by content type instead of one generic preset.
        staggerGroups.forEach((group) => {
          const children = Array.from(group.children) as HTMLElement[];
          if (!children.length) return;
          const isClasses = group.classList.contains("class-progression");
          const isSubjects = group.classList.contains("subject-index");
          const fromX = (index: number) => isClasses ? (index % 2 === 0 ? -26 : 26) : 0;

          gsap.fromTo(children,
            {
              autoAlpha: 0,
              x: (index: number) => fromX(index),
              y: isSubjects ? 16 : 20,
              willChange: "transform,opacity",
            },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              duration: isClasses ? .54 : .58,
              stagger: isClasses ? .075 : .065,
              ease: enterEase,
              clearProps: "willChange",
              scrollTrigger: {
                trigger: group,
                start: desktop ? "top 84%" : "top 90%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        });

        // Rare, low-amplitude media movement; disabled on mobile.
        if (desktop) {
          gsap.utils.toArray<HTMLElement>("[data-parallax-media]").forEach((media) => {
            gsap.fromTo(media, { yPercent: -2.5, scale: 1.025 }, {
              yPercent: 2.5,
              scale: 1,
              ease: "none",
              scrollTrigger: { trigger: media, start: "top bottom", end: "bottom top", scrub: .7 },
            });
          });
          gsap.to(".opening-mark", {
            y: 14,
            rotate: -3,
            ease: "none",
            scrollTrigger: { trigger: ".thesis-section", start: "top bottom", end: "bottom top", scrub: .8 },
          });
          gsap.to(".wave-grid", {
            yPercent: 4,
            ease: "none",
            scrollTrigger: { trigger: ".wave-chapter", start: "top bottom", end: "bottom top", scrub: 1 },
          });
        }
      }
    );

    ScrollTrigger.refresh();
    return () => mm.revert();
  }, { dependencies: [reduceMotion] });

  // Recalculate pinning and trigger positions after fonts, dynamic media, and viewport changes settle.
  useEffect(() => {
    let timer = 0;
    const refresh = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    };
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh, { passive: true });
    const main = document.querySelector("main");
    const observer = main ? new ResizeObserver(refresh) : null;
    if (main && observer) observer.observe(main);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      observer?.disconnect();
    };
  }, []);

  return (
    <motion.div
      className="page-progress"
      aria-hidden="true"
      style={{ scaleX: reduceMotion ? 0 : smoothProgress }}
    />
  );
}
