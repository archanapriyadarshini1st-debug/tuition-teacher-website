# Design Ecosystem Review — Tuition Teacher Website

**Reviewed:** 18 August 2026  
**Scope:** Every named resource supplied for the project  
**Decision standard:** Relevance to a warm, premium, parent-trust-focused tuition website—not novelty, popularity, or technical impressiveness.

## Executive conclusion

The strongest combination for this site is deliberately small:

- **Taste/critique:** Recent (formerly Godly), Awwwards, mmmdesign/MNMM, Styles Refero, Mobbin, Impeccable, Taste Skill
- **Implementation:** Motion.dev, Motion Primitives as reference, shadcn/Radix primitives where needed
- **Quality:** Vercel Web Guidelines, Context7, Agentation, UI/UX Pro Max
- **Optional asset work:** Pikaicons, Jitter, Penpot

The site should **not** combine many component libraries or animation engines. React Bits, Watermelon, Kokonut, 21st.dev, Skiper, Aceternity, Vengeance, Originkit, Unlumen, Uiverse, and HeroUI overlap heavily. Their best use is as a searchable pattern catalogue; importing each would destroy visual consistency.

The existing site already follows the right direction: editorial typography, authentic-teacher emphasis, purposeful motion, warm academic colors, and minimal cards. The research suggests improving **motion choreography, active navigation, teacher photography, and form feedback**, not changing to a dark SaaS/3D/shader aesthetic.

---

# A. Design intelligence and agent skills

| Resource | What it contributes | Relevance | Decision |
|---|---|---:|---|
| **Taste Skill** | Visual-variance controls and anti-generic art direction. Comparative reviews position it as especially strong for immediate visual personality [1](https://design.app.br/skill/29-ranking-design-skills/). | High | **Use as critique lens.** Check whether each section has a designed composition rather than default blocks. |
| **UI/UX Pro Max** | Structured guidance for typography, palettes, layout, accessibility, touch targets, performance, forms, and responsive behavior [2](https://smithery.ai/skills/nextlevelbuilder/ui-ux-pro-max). | Very high | **Use for audits.** Particularly useful for form, responsive, and accessibility reviews. |
| **Impeccable** | Refinement workflow and explicit anti-pattern review; ranked strongly for end-to-end web-design critique [1](https://design.app.br/skill/29-ranking-design-skills/). | High | **Use after implementation**, not as a visual generator. |
| **Superpowers** | A broad agent workflow/process label rather than one stable visual system. | Medium | **Use process principles only.** It should not override project-specific design decisions. |
| **Skill UI** | Ambiguous name; no single authoritative resource could be confirmed. Similar UI-design skills emphasize component best practices, accessible forms, and explicit anti-patterns [3](https://github.com/carmahhawwari/ui-design-brain). | Medium | **Do not install until exact URL/repository is confirmed.** |
| **Context7** | Injects current, version-specific library documentation into coding-agent context [4](https://www.deployhq.com/blog/context7-guide-stop-ai-hallucinations-with-live-docs). | Very high | **Use before API-sensitive implementation**, especially Next.js and Motion. |
| **Awesome DESIGN.md** | Structured, agent-readable design systems covering color, type, spacing, components, and guardrails [5](https://github.com/VoltAgent/awesome-design-md/blob/main/README.md). | High | **Create a project-specific DESIGN.md** rather than importing another brand’s identity. |
| **Image-to-Code Skill** | Image-first workflow: generate/inspect visual references before translating them into code [6](https://claudeskills.info/skills/leonxlnx/taste-skill/image-to-code/). | Medium–high | **Useful for section visual exploration**, but not for copying live sites or replacing semantic design decisions. |
| **DesignDNA** | Converts references into structured design tokens, qualitative style, and visual-effects specifications [7](https://github.com/zanwei/design-dna). | High | **Useful for documenting this site’s final design DNA.** |
| **Motion Design Skill** | Decision framework for purpose, frequency, duration, easing, and motion properties [8](https://mcpmarket.com/tools/skills/motion-design-ui-animation). | Very high | **Use as motion-review checklist.** |
| **AThevon/Genjutsu** | Motion and visual-system pipeline covering CSS, Motion, GSAP, Three.js, reduced motion, and design audits [9](https://github.com/AThevon/genjutsu). | High | **Use the motion-principles/audit ideas only.** Heavy modules are unnecessary here. |

### Skill conclusion

Use skills to **review decisions**, not to stack aesthetics. The project needs one documented visual system and one motion vocabulary.

---

# B. Human-curated design and pattern references

| Resource | What it contributes | Relevance | Decision |
|---|---|---:|---|
| **Recent.design** | Godly’s successor; now curates web, interface, branding, typography, motion, editorial, illustration, 3D, print, and more. The feed currently includes useful references such as editorial projects, SVG-highlighted navigation, slide-away inputs, and microinteractions [10](https://recent.design/). | Very high | **Primary taste reference.** Study composition, cropping, typography, and isolated interaction moments. |
| **Godly** | Historical web-focused curation; it now redirects to Recent [11](https://godly.website/website/bou-516). | High | **Use its legacy website archive; use Recent for current research.** |
| **Awwwards** | Broad award-gallery coverage of motion, animation, typography, and experimental interaction [12](https://www.awwwards.com/websites/motion/). | High | **Use selectively.** Extract craft, not scroll-jacking or spectacle. |
| **Motion Sites** | Appears to focus on prompt-driven animated heroes and motion-rich template directions [13](https://moge.ai/product/motionsites). | Medium | **Reference hero choreography only.** Avoid template language and animated-background clichés. |
| **Post.Design / posts.design** | The discoverable current resource is `posts.design`, a reference wall for social-post and brand-content design [14](https://posts.design/). | Low–medium | **Useful for campaign/social extensions**, not core website architecture. Exact intended URL should be confirmed. |
| **MNMM / mmmdesign** | Hand-curated design library that intentionally avoids noisy feeds [15](https://www.mmmdesign.co/). | High | **Use for restraint, graphic references, and typography.** “MNMM” may refer to a different site; exact URL remains ambiguous. |
| **Variant.com** | Endless-scroll AI design exploration; it makes comparison itself the interaction [16](https://variant.com/). | Medium–high | **Borrow comparative exploration logic** for the learning-process section, not its dark mosaic aesthetic. |
| **Styles.Refero.Design** | Real-product style and component reference system. | High | **Use for production patterns**, especially forms, navigation, and responsive details. |
| **Mobbin** | Real production app screens and complete flows; stronger for practical UX than gallery spectacle [17](https://www.saasui.design/best-saas-ui-design-inspiration). | Very high | **Use for mobile form, menu, and enquiry-flow behavior.** |
| **GetLayers** | AI-native library of templates, prompts, and 3D scenes positioned as an antidote to generic output [18](https://www.getlayers.ai/). | Medium | **Use for art-direction prompts only.** Do not import a cinematic/3D layer without a teaching rationale. |
| **Podium.global** | Cinematic sports-production portfolio using high-contrast type, grid dividers, motion, and large video [19](https://uiuxshowcase.com/agency/podium-agency/). | Low–medium | **Reference confidence and media cropping**, not sports energy or autoplay video. |
| **Rice.app** | No authoritative design resource matching this exact name/domain could be verified. | Unknown | **Blocked pending exact URL.** Do not infer a product from an ambiguous name. |
| **Bklit** | shadcn-based charts and utility components [20](https://madewithreactjs.com/bklit-ui). | Low | **Not relevant unless verified student-performance data is added later.** |

### Curation conclusion

For this project, the highest-value research loop is:

1. **Recent** for art direction
2. **Awwwards motion/editorial filters** for choreography
3. **Mobbin/Refero** for parent-facing UX
4. **mmmdesign** for restraint

---

# C. UI and component ecosystems

| Resource | What it contributes | Relevance | Decision |
|---|---|---:|---|
| **ReactBits.dev** | Large copy-paste collection of text effects, motion wrappers, backgrounds, and interactive components [21](https://lobehub.com/skills/haniakrim21-everything-claude-code-react-bits). | High as reference | **Inspect only selected patterns.** Do not use aurora, particles, click sparks, glass, docks, or shader backgrounds. |
| **Watermelon UI** | 260+ copy-paste React components using Tailwind, Radix, and Motion; shadcn-registry compatible [22](https://github.com/WatermelonCorp/watermellon-registry). | Medium | **Reference animated accordion/form states.** No reason to adopt the registry wholesale. |
| **Kokonut UI** | Animated React/Tailwind/shadcn components and complete marketing sections [23](https://www.shadcn.io/template/kokonut-labs-kokonutui). | Medium | **Reference transitions, not layouts.** Prebuilt sections risk generic SaaS styling. |
| **21st.dev** | Community registry for React components and templates, with AI-assisted discovery/remixing [24](https://uiuxshowcase.com/resources/21st-dev/). | Medium–high | **Use as searchable catalogue.** Every candidate still needs accessibility, license, and bundle review. |
| **Skipper UI** | Name appears to be a spelling variant/duplicate of Skiper UI; no distinct authoritative library confirmed. | Unknown | **Treat as duplicate until an exact URL is supplied.** |
| **Skiper UI** | Motion-ready, “uncommon” shadcn components for Next.js [25](https://www.shadcn.io/awesome/item/skiper-ui). | Medium | **Reference scroll effects and navigation**, but avoid installing GSAP-based blocks into the existing Motion stack. |
| **Vengeance UI** | New animated landing-page component collection using Tailwind and Motion [26](https://github.com/Ashutoshx7/VengeanceUI). | Low–medium | **Reference only.** Immature ecosystem and substantial overlap with current code. |
| **Animaster UI** | No stable authoritative library matching this exact name was verified. It may refer to an animation-skill or component project under a different spelling. | Unknown | **Blocked pending exact URL.** |
| **HeroUI** | Batteries-included React component system using React Aria, Tailwind, and AI-oriented documentation [27](https://github.com/heroui-inc/heroui). | Medium | **Good for app interfaces; unnecessary for this custom marketing site.** |
| **Uiverse.io** | Large community gallery of isolated CSS UI effects. | Low–medium | **Use for small interaction ideas only.** Quality and accessibility vary by submission. |
| **Aceternity UI** | High-impact animated landing-page effects and components. | Medium | **Avoid recognizable spotlights, beams, 3D cards, and SaaS styling.** |
| **Originkit** | 50+ animated components across React, Next.js, Vite, and Framer, browsable through an MCP/plugin workflow [28](https://github.com/vellum-ai/originkit). | Medium | **Reference image/text transitions**, but current site already has a coherent custom system. |
| **UI Unlumen** | Animated open-source React/TypeScript/Tailwind/Motion components distributed through shadcn CLI [29](https://ui.unlumen.com/). | Medium | **Reference isolated motion patterns only.** |
| **Motion Primitives** | Copyable Motion-based building blocks such as disclosures, in-view effects, text effects, and scroll progress [30](https://motion-primitives.com/docs). | Very high | **Best-fit reference library** because the site already uses Motion. Adapt rather than import visually unchanged. |
| **shadcn/ui** | Accessible, copy-owned primitives and AI skills that inspect project configuration and enforce component composition [31](https://ui.shadcn.com/docs/skills). | High | **Use only where native HTML is insufficient:** accordion, select, sheet/dialog if needed. |

### Component conclusion

The website should keep its **custom editorial CSS**. Component registries are behavior references—not an excuse to reconstruct the page from unrelated blocks.

---

# D. Motion and interaction resources

| Resource | What it contributes | Relevance | Decision |
|---|---|---:|---|
| **Motion.dev** | React-first animation engine supporting scroll-triggered, scroll-linked, layout, gesture, and state animation [32](https://motion.dev/docs/react). | Very high | **Primary and only runtime animation engine.** Already integrated. |
| **Emil Kowalski** | Restrained interaction motion, strong ease-out curves, transform/opacity preference, short staggers, and reduced-motion design [33](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md). | Very high | **Primary motion-quality reference.** |
| **React Spring** | Spring-physics animation for React. | Low | **Do not add.** Motion already supplies springs and state transitions. |
| **Lenis.dev** | Lightweight smooth-scrolling library designed to synchronize scroll-driven effects [34](https://lenis.darkroom.engineering/). | Low | **Do not use.** Native scroll is preferable for this information-first site. |
| **Anime.js** | Small, imperative animation library supporting DOM, CSS, SVG, and timelines [35](https://alignify.co/tools/animation-library). | Low | **Do not add a second animation engine.** |
| **SVGator** | Visual SVG animation editor with stroke, morph, path, trigger, and multiple export formats [36](https://www.svgator.com/). | Medium | **Potentially useful for one authored teaching diagram.** Prefer lightweight SVG/CSS if equivalent. |
| **Jitter** | Visual motion-design and template inspection workflow; especially useful for studying layer structure and timing [37](https://www.reddit.com/r/MotionDesign/comments/1sfdecy/what_sites_do_you_go_to_for_motion_design_inspo/). | High in design phase | **Use to storyboard complex choreography**, not as a mandatory runtime dependency. |
| **Motion Design Skill** | Purpose/frequency/easing decision framework. | Very high | **Use for audit.** See Section A. |
| **AThevon/Genjutsu** | Multi-stack motion pipeline. | High | **Use principles, not every module.** |

### Motion conclusion

Motion vocabulary for the site should stay limited to:

- **Draw** — rules and academic annotations construct
- **Reveal** — editorial headings uncover by group
- **Connect** — progress line links teaching stages
- **Confirm** — controls and form states respond in place
- **Settle** — portrait/media movement is subtle and rare

No cursor trails, endless marquees, magnetic navigation, smooth-scroll hijacking, or shader loops.

---

# E. Graphics, icons, color, 3D, and asset tools

| Resource | What it contributes | Relevance | Decision |
|---|---|---:|---|
| **Pikaicons** | 5,000+ hand-drawn, optically balanced SVG icons across a consistent system [38](https://pikaicons.com/). | Medium–high | **Best icon candidate** if a paid icon set is approved. Use very sparingly. |
| **Iconsax** | Large icon family with multiple styles, including linear and two-tone [39](https://lineicons.com/blog/best-open-source-icon-libraries). | Medium | **Alternative to Pikaicons**, not an additional set. Choose one visual family. |
| **LS Graphics** | Premium mockups, device frames, UI kits, and presentation assets [40](https://uiuxshowcase.com/resources/ls-graphics/). | Low–medium | **Useful for presentation mockups**, not the live site. |
| **Shaders / shaders.com** | Exact intended resource could not be reliably identified. Shader tooling generally supports GPU-rendered visual effects. | Low | **Do not use without a specific concept and verified URL.** |
| **Haikei** | SVG shape/background generator for waves, blobs, grids, and gradients [41](https://www.usetools.design/tools/haikei). | Low | **Avoid generic generated blobs.** Could produce a quiet dot/grid texture if custom SVG is genuinely needed. |
| **Realtime Colors** | Tests text, background, primary, secondary, and accent roles in realistic layouts with contrast feedback [42](https://uiuxshowcase.com/resources/realtime-colors/). | High | **Use for palette validation**, then verify final combinations in the real page. |
| **Penpot** | Open design environment and potential design-to-code/MCP workflow for components, colors, typography, and layout [43](https://mcpmarket.com/tools/skills/penpot-design-ui-kit). | Medium–high | **Useful if formal visual handoff or collaborative wireframing is needed.** |
| **Spline** | Visual 3D scene creation and React/web integration [44](https://docs.spline.design/). | Low | **Do not use.** The teacher brand has no necessary 3D object or configurator. |
| **Unicorn Studio** | No-code WebGL effects, real-time graphics, interaction, and web embeds [45](https://www.unicorn.studio/). | Low | **Do not use at launch.** Even a relatively optimized WebGL effect lacks conceptual value here. |
| **Three.js** | General WebGL/3D engine. | Very low | **Do not use.** High complexity without educational or commercial benefit. |
| **GetLayers** | Templates/prompts/3D scenes for AI design. | Medium | **Prompt reference only.** |

---

# F. Engineering, QA, and feedback

| Resource | What it contributes | Relevance | Decision |
|---|---|---:|---|
| **Vercel Web Guidelines** | Accessibility, focus, forms, motion, responsive layout, images, and performance checks [46](https://vercel.com/design). | Very high | **Use as pre-launch audit.** |
| **Agentation.com** | Turns element-level visual annotations into structured agent-readable feedback with selectors and computed styles [47](https://www.agentation.com/). | Very high during review | **Excellent for the next visual-QA round.** Development-only; do not ship to production. |
| **Context7** | Current API documentation. | Very high | **Use during implementation.** |
| **Image-to-Code Skill** | Visual implementation fidelity. | Medium–high | **Use for isolated prototypes and screenshot analysis.** |
| **Superpowers** | General development workflow. | Medium | **Use only where its process improves testing/review.** |

---

# G. Clarifications and unresolved names

The following supplied names could not be mapped confidently to one authoritative current resource:

1. **Rice.app**
2. **Animaster UI**
3. **Skill UI**
4. **Shaders / shaders.com**
5. **Skipper UI** as distinct from **Skiper UI**
6. **MNMM** as distinct from mmmdesign/Minimum (`mnmm.xyz`)
7. **Post.Design** as distinct from `posts.design`

They are not being ignored; they are marked unresolved because guessing the intended project would make the comparison unreliable. Exact URLs would resolve them.

---

# H. What this research changes in the website

## Keep

- Warm ink/chalk/forest palette
- Editorial serif + modern sans pairing
- Teacher-led hero
- Academic notes and line work
- Current Motion.dev foundation
- Mobile-first, non-card-heavy layout
- Explicit placeholders instead of invented trust claims

## Improve next

1. **Active-section navigation mark**  
   Use a restrained SVG underline/marker inspired by Recent’s highlighted-navigation references.

2. **Teaching-process choreography**  
   Turn the process into a stronger connected sequence: line draws, active node settles, explanation changes in place.

3. **Form state transition**  
   Let the submit control become the confirmation state, keeping feedback at the interaction origin.

4. **Teacher photography**  
   This remains the highest-impact upgrade. No component or shader can replace authentic human credibility.

5. **Motion QA**  
   Review every animation for purpose, frequency, reduced motion, mobile behavior, and compositor-friendly properties.

6. **Project-specific DESIGN.md**  
   Encode the chosen palette, typography, spacing, shape, section rhythm, motion vocabulary, and anti-patterns so future changes stay coherent.

## Do not add

- A second animation engine
- Lenis smooth scrolling
- Three.js, Spline, or Unicorn Studio
- Particle, aurora, spotlight, click-spark, or shader backgrounds
- Generic bento grids
- Card carousels, marquees, or cursor trails
- Multiple icon families
- Components simply because they look impressive in isolation

---

# Final ranking for this exact project

## Tier 1 — directly useful

1. Recent.design
2. Motion.dev
3. Emil Kowalski
4. Mobbin
5. Styles.Refero.Design
6. Vercel Web Guidelines
7. Context7
8. Agentation
9. UI/UX Pro Max
10. Realtime Colors

## Tier 2 — useful as references

- Awwwards
- mmmdesign/MNMM
- Taste Skill
- Impeccable
- Motion Design Skill
- Motion Primitives
- shadcn/ui
- React Bits
- Jitter
- Penpot
- Pikaicons
- DesignDNA
- Image-to-Code Skill
- AThevon/Genjutsu
- 21st.dev

## Tier 3 — browse, but probably do not import

- Watermelon UI
- Kokonut UI
- Skiper UI
- Vengeance UI
- HeroUI
- Uiverse
- Aceternity UI
- Originkit
- UI Unlumen
- GetLayers
- Motion Sites
- Podium.global
- Bklit
- Iconsax
- SVGator
- LS Graphics
- Haikei
- Variant
- posts.design

## Tier 4 — deliberately exclude from this build

- React Spring
- Anime.js
- Lenis
- Spline
- Unicorn Studio
- Three.js
- Unspecified shader tools

---

## Research verdict

Reviewing the entire ecosystem reinforces the original strategy rather than invalidating it. The website should become **more authored, not more effect-heavy**. Its premium quality will come from authentic photography, precise type, controlled rhythm, one coherent motion language, and trustworthy content—not from importing the maximum number of libraries.
