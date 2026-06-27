# TERRARIUM-MSK: Design Philosophy

## Chosen Approach: **Organic Minimalism**

### Design Movement
**Biophilic Modernism** — a fusion of nature-inspired aesthetics with clean, contemporary design. Emphasizes natural materials, living systems, and the beauty of carefully curated ecosystems.

### Core Principles
1. **Authenticity through Simplicity** — Every element serves a purpose; no decorative excess. The product (terrarium) is the hero.
2. **Living Geometry** — Asymmetric layouts that mirror natural growth patterns, avoiding rigid grids.
3. **Tactile Depth** — Subtle shadows, layering, and texture create a sense of physical presence and craftsmanship.
4. **Breathing Space** — Generous whitespace and pacing allow the eye to rest and appreciate each section.

### Color Philosophy
- **Primary Palette:** Deep forest green (`#1a3a2a`) + warm charcoal (`#2d2d2d`) + cream (`#f5f3f0`)
- **Accent:** Muted gold (`#c9a961`) for premium highlights
- **Reasoning:** Greens evoke living ecosystems and trust; charcoal conveys sophistication; cream softens the palette for approachability. Gold signals exclusivity without ostentation.

### Layout Paradigm
- **Hero Section:** Full-width asymmetric layout with image on right, text left-aligned (breaking center convention)
- **Content Sections:** Alternating left-right layouts with generous negative space
- **Cards & Testimonials:** Organic card shapes with subtle borders, no hard corners
- **Navigation:** Minimal top nav with logo + essential links; sticky on scroll with backdrop blur

### Signature Elements
1. **Organic Dividers:** Curved SVG wave dividers between sections (not straight lines)
2. **Hand-Drawn Typography:** Serif font for headlines (Playfair Display), sans-serif for body (Poppins)
3. **Nature Imagery:** High-quality terrarium photography with natural lighting, no artificial backgrounds

### Interaction Philosophy
- **Smooth Transitions:** All CTAs and hover states use 200-250ms ease-out curves
- **Scale on Interaction:** Buttons scale to 0.98 on click; cards lift on hover with shadow depth
- **Micro-Interactions:** Form fields gain a subtle green underline on focus; testimonial cards slide in on scroll

### Animation
- **Entrance:** Elements fade in + slide up (100px) over 600ms with staggered 50ms delays
- **Hover:** Cards lift 4px with shadow increase; buttons scale 0.98 on active
- **Scroll Reveal:** Testimonials and portfolio items appear as they enter viewport (Intersection Observer)
- **Respect Motion:** All animations respect `prefers-reduced-motion` media query

### Typography System
- **Headlines:** Playfair Display (serif, 700 weight) — 3.5rem (h1), 2.5rem (h2), 1.875rem (h3)
- **Body:** Poppins (sans-serif, 400-500 weight) — 1rem base, 0.875rem secondary
- **Hierarchy:** Weight contrast (700 for headlines, 400 for body) creates clear visual structure
- **Line Height:** 1.6 for body text, 1.2 for headlines (tighter for impact)

### Brand Essence
**One-liner:** Handcrafted living art for discerning collectors who refuse mass-produced mediocrity.
**Personality Adjectives:** Refined, Authentic, Visionary

### Brand Voice
- **Headlines:** Poetic, aspirational, emphasizing uniqueness
  - Example: "Terrariumes, созданные для вашей уникальной экосистемы"
  - Example: "Искусство живого пространства"
- **CTAs:** Action-oriented, premium-feeling
  - Example: "Начать проект" (not "Get started")
  - Example: "Запросить консультацию" (not "Contact us")
- **Microcopy:** Warm, personal, avoiding corporate jargon
  - Example: "Каждый террариум — это уникальный мир"

### Wordmark & Logo
- **Logo Concept:** Minimalist geometric terrarium silhouette (hexagon or dome shape) with a single leaf inside
- **Style:** Bold graphic symbol on transparent background, no text
- **Usage:** 48px in header, 64px as favicon

### Signature Brand Color
**Deep Forest Green** (`#1a3a2a`) — unmistakably represents living ecosystems and premium craftsmanship. Used as primary accent throughout.

---

## Design Decisions Locked In
✅ Asymmetric layouts (no centered grids)
✅ Serif + sans-serif pairing (Playfair + Poppins)
✅ Deep green + charcoal + cream palette
✅ Organic wave dividers between sections
✅ Generous whitespace and breathing room
✅ Smooth, purposeful animations (200-250ms)
✅ Premium, personal brand voice
