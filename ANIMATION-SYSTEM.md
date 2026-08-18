# Animation System

## Codebase map

### Major sections

1. Hero — animated editorial headline and art-directed teaching desk
2. Credibility — tuition and school experience counters
3. Teaching thesis — scroll-linked editorial quote
4. Learning approach — pinned GSAP learning story
5. Class bands — three progressive education stages
6. Subjects — typographic subject index
7. Connected-learning interlude — React Bits/OGL gradient waves
8. Class modes — Motion-driven online/offline transformation
9. Experience — notebook visual and factual profile
10. Parent FAQ — accessible disclosures
11. Enquiry — animated form states
12. Footer

### Reusable interactive components

- `MotionSystem` — global GSAP section choreography, scroll refresh, reading progress
- `SiteHeader` — sticky state, mobile menu, active section indicator
- `AnimatedType` — hero typography and experience counters
- `DeskScene` — scoped pointer depth and scroll parallax
- `ScrollRevealQuote` — scroll-linked teaching statement
- `LearningStory` — pinned ScrollTrigger timeline
- `GradientWaves` / `WaveChapter` — one lazy WebGL interlude
- `ModeSwitcher` — accessible Motion tabs and scene transition
- `FAQ` — disclosure state
- `EnquiryForm` — submit and confirmation states

## Motion hierarchy

### Strong — hero only

- Masked word reveal
- GSAP scene reveal
- Sequenced supporting copy, CTA, and facts
- Desk illustration depth

### Medium — section entrances

- Direction chosen from composition: left, right, up, down, or clipped editorial reveal
- 0.74–0.88 second durations
- `power3.out` easing
- Trigger once between 84% and 91% viewport position

### Subtle — groups and controls

- 65–110ms group staggers
- 180–220ms hover feedback
- Transform/opacity first
- Spring highlight only where the active state changes location

## Library roles

- **GSAP + ScrollTrigger:** global section choreography, hero timeline, pinned learning story, rare parallax
- **Motion for React:** component state, active highlights, counters, text progression, form transitions
- **CSS:** hover/tap feedback, SVG line drawing, reduced-motion overrides
- **OGL:** one dynamically loaded gradient-wave interlude only

## Performance rules

- No Lenis or scroll hijacking
- No layout-property animation for hover effects
- GSAP React lifecycle uses `useGSAP`
- ScrollTrigger refreshes after fonts, load, resize, and meaningful content resizing
- Desktop-only parallax
- WebGL pauses offscreen and when the document is hidden
- `will-change` is temporary and cleared after entrance animations

## Reduced motion

- Global section transforms are skipped
- Learning story becomes a static sequence
- WebGL becomes a still frame
- Scroll-linked quote transforms are overridden
- Component transitions become instant or short opacity changes
- Content remains present and in normal reading order

## QA completed

- Production static build passes
- TypeScript passes
- ESLint passes
- Obsolete pre-GSAP approach component and CSS removed
- Duplicate section-reveal systems consolidated into GSAP
- Expensive hover padding animation replaced with transform
- Initial render/hydration states made deterministic
- Mobile pinned story disabled and converted to stacked reading order
