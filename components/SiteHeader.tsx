"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const links = [
  ["approach", "Approach"],
  ["classes", "Classes"],
  ["experience", "Experience"],
  ["questions", "Questions"],
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = [...links.map(([id]) => document.getElementById(id)), document.getElementById("contact")].filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -58% 0px", threshold: [0, 0.15, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`site-header ${compact ? "is-compact" : ""}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="nav-shell">
        <a className="brand" href="#top" aria-label="[Teacher Name], home">
          <span className="brand-mark">TN</span>
          <span>[TEACHER NAME]</span>
        </a>
        <nav id="primary-navigation" className={`nav-links ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}>
              {label}
              {active === id && (
                <motion.span
                  layoutId="active-nav-mark"
                  className="active-nav-mark"
                  transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 430, damping: 34 }}
                  aria-hidden="true"
                />
              )}
            </a>
          ))}
          <a className={`button button-small ${active === "contact" ? "active" : ""}`} href="#contact" onClick={() => setOpen(false)}>Enquire</a>
        </nav>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
          <span /><span />
        </button>
      </div>
    </header>
  );
}
