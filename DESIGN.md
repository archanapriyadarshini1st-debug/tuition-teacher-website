# [TEACHER NAME] — Design System

This file is the visual source of truth for the tuition-teacher website. Future pages and components must preserve this system rather than importing the default appearance of a component library.

## 1. Brand thesis

**Positioning:** Classroom experience, made personal.  
**Teaching principle:** Understanding before memorising. Final public wording requires teacher approval.  
**Audience:** Parents/guardians first; students from Classes 1–10 second.  
**Personality:** capable, calm, warm, intelligent, attentive, contemporary.

The website should feel like an exceptionally art-directed lesson: clear hierarchy, connected ideas, visible progression, and human reassurance.

## 2. Visual direction

**Style:** Human Teacher + Editorial Learning Notes.

- Editorial rather than template-like
- Academic without institutional coldness
- Warm without becoming childish
- Asymmetric but grid-aligned
- Mostly sharp geometry and fine rules
- One expressive idea per section
- Authentic photography when supplied

### Forbidden visual language

- Generic AI gradients
- Aurora, particle, star, or shader backgrounds
- Excessive glassmorphism
- Repetitive bento grids
- Cards inside cards
- Floating blobs or school clip art
- Spotlight and tilt effects on every surface
- Huge empty headlines without composition
- Generic SaaS dashboards
- Synthetic teacher portraits
- Multiple icon families

## 3. Color system

| Token | Value | Usage |
|---|---:|---|
| `--ink` | `#17211B` | Main text, footer, dark academic surfaces |
| `--ink-2` | `#243029` | Secondary dark surface |
| `--chalk` | `#F4F0E6` | Primary page background |
| `--paper` | `#FFFDF8` | Form and editorial surface |
| `--forest` | `#1C5B4E` | Main action and teaching-mode surface |
| `--forest-dark` | `#16483E` | Hover and dark green section |
| `--rust` | `#8D4029` | Editorial accent and active annotation |
| `--gold` | `#C58A18` | Focus ring and diagram highlight |
| `--rule` | `#D7D0C2` | Borders and construction lines |
| `--muted` | `#5F6A63` | Supporting copy |

### Color rules

- Approximately 75% Chalk/Paper, 18% Ink/Forest, 7% Rust/Gold.
- No gradients as a core brand device.
- Rust marks editorial emphasis; forest marks action or service mode.
- Gold is primarily focus/diagram color, not small text on light backgrounds.
- Never communicate state by color alone.

## 4. Typography

### Families

- **Display/editorial:** Source Serif 4 Variable
- **Body/UI:** Manrope Variable
- **Fallbacks:** Georgia for serif; Arial/sans-serif for UI

### Roles

- Serif communicates authority, teaching, and editorial warmth.
- Sans communicates instructions, controls, labels, and practical facts.
- Numerals use tabular forms during counters and data presentation.

### Scale

| Role | Size | Weight | Line height | Tracking |
|---|---|---:|---:|---:|
| Hero | `clamp(4.5rem, 6.3vw, 7rem)` | 500 | .86 | -.055em |
| Section H2 | `clamp(3.4rem, 5vw, 5.4rem)` | 450–500 | .92–.98 | -.05em |
| H3 | 1.35–2.1rem | 500–600 | 1.15–1.25 | -.015em |
| Intro | 1.06–1.25rem | 400 | 1.55 | 0 |
| Body | 1rem | 400 | 1.6 | 0 |
| Label | .62–.75rem | 700–800 | 1.35 | .08–.105em |

### Typography rules

- Body measure: 58–70 characters.
- Use intentional line breaks at major breakpoints.
- Do not use all caps for full sentences.
- Use en dashes and curly punctuation.
- Never turn approximate experience into an unsupported combined claim.

## 5. Layout

### Container

- Large desktop max: 1360px
- Laptop working max: 1180px
- Desktop outer margin: 48px minimum
- Tablet outer margin: 28px
- Mobile outer margin: 18–20px

### Grid

- Desktop: 12 columns, 24px gaps
- Tablet: 8 columns, 20px gaps
- Mobile: 4 conceptual columns, 16px gaps

### Spacing tokens

`4, 8, 12, 16, 24, 32, 48, 64, 88, 96, 128, 176`

- Section desktop: 100–144px
- Section mobile: 64–88px
- Alternate spacious narrative sections with tighter factual bands.

## 6. Shape and material

- Inputs and buttons: 0–8px radius
- Media frames: 0–12px radius maximum
- Borders: quiet 1px rules; 2px only for active/focus treatment
- Shadows: rare and contextual
- Portrait and notebook may use one controlled offset/depth treatment
- Asymmetry must align to the underlying grid
- Use paper, ink, margin notes, construction lines, circles, and annotations—not literal school stationery clip art

## 7. Component rules

### Header

- Fixed, transparent at top; compact paper treatment after scrolling
- Active section shown by a restrained hand-drawn rust mark
- Mobile menu emerges from its trigger and closes with Escape

### Buttons

- One primary action per section
- Verb-first labels
- Minimum 44px touch height; primary buttons approximately 52px
- Press feedback: `scale(.98)`
- Never use magnetic movement or click particles

### Forms

- Persistent labels above controls
- Single-column flow on mobile
- Related short fields may pair on desktop
- Errors appear next to the affected field and in an optional summary
- Failed submission preserves entered data
- Confirmation occurs at the form/action origin

### Cards

- Not a default container
- Prefer rules, columns, surfaces, and typographic grouping
- Use a card only when it represents one discrete object or interaction

### Photography

- Authentic teacher portrait and real teaching details
- No synthetic identity image
- Avoid identifiable minors without documented consent
- Placeholder must remain clearly labelled until photography exists

## 8. Motion language

The five motion verbs are:

1. **Draw** — academic rules and SVG annotations construct
2. **Reveal** — editorial type uncovers in short groups
3. **Connect** — a line links stages or related ideas
4. **Confirm** — a control reports its result in place
5. **Settle** — media or panels finish with restrained physical ease

### Timing

| Motion | Duration |
|---|---:|
| Press/hover feedback | 100–180ms |
| Menu/control state | 160–240ms |
| Editorial reveal | 320–720ms |
| Diagram sequence | 600–1000ms total |
| Exit | Shorter than entrance |

### Easing

- Enter: `cubic-bezier(.23, 1, .32, 1)`
- On-screen movement: `cubic-bezier(.77, 0, .175, 1)`
- Springs only for interruptible active indicators or panel state

### Motion constraints

- Animate transform and opacity by default.
- Small SVG stroke animations are acceptable.
- No animation on every paragraph.
- Group stagger: 40–80ms, total sequence under roughly 700ms.
- No ambient cursor effects, marquees, parallax backgrounds, or scroll hijacking.
- `prefers-reduced-motion` removes positional movement and renders diagrams complete.

## 9. Responsive behavior

### Mobile

- Identity, offer, and CTA appear before portrait
- No hover-dependent information
- Learning process becomes horizontally scrollable controls plus one readable panel
- Class progression becomes vertical
- Form becomes single column
- Sticky UI must not cover content or software keyboard

### Tablet

- Use 8-column composition
- Diagram may become two rows instead of shrinking labels
- Keep portrait crop intentional

### Large desktop

- Stop content growth at 1360px
- Expand whitespace, not typography indefinitely
- Keep text columns readable

## 10. Accessibility

- Target WCAG 2.2 AA
- Semantic landmarks and logical headings
- Visible skip link and `:focus-visible` ring
- Normal text contrast at least 4.5:1
- Prefer 44×44px touch targets
- Keyboard support for menus, tabs, disclosures, and forms
- No information conveyed only by animation, color, hover, or position
- Interactive teaching diagram has static text equivalent
- Respect zoom, forced colors, and reduced motion

## 11. Performance

- Server Components by default
- Client code only for navigation, learning process, FAQ, form state, and motion orchestration
- One runtime motion engine: Motion.dev
- No Lenis, GSAP, React Spring, Anime.js, Three.js, Spline, or shader runtime
- Self-host fonts
- Explicit image sizes and responsive sources
- Avoid shipping component libraries for a single visual effect

## 12. Content guardrails

Never invent:

- Qualifications
- School name
- Location
- Boards/curricula
- Subjects beyond confirmed coverage
- Student counts
- Results or marks
- Awards
- Testimonials
- Affiliations

Keep school and tuition experience separate. Do not add the figures together.

## 13. Quality gate

Before accepting a new section, verify:

- Does it answer a parent or student question?
- Is the claim verified?
- Does it follow the 12/8/4-column system?
- Could rules/whitespace replace a card?
- Does any animation have a clear job?
- Does reduced motion remain understandable?
- Is it visually consistent with the ink/chalk/forest system?
- Does mobile have its own composition?
- Is the component library’s appearance fully removed?
- Would the section still feel designed without its animation?
