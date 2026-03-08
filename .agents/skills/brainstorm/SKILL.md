---
name: brainstorm
description: Pre-implementation product planning — colors, typography, layout, user interviews, competitive analysis. Triggers on "$brainstorm", "plan a product", "design a product".
---

# $brainstorm — plan before you build

## what this does
this is the pre-implementation phase. before writing a single line of code, we design the entire product on paper — color palettes, typography, page layouts, user flows, and a product brief.

## step 1: understand the product
ask these questions one at a time:

1. "what are we building? give me the elevator pitch in one sentence."
2. "who is this for? describe your ideal user."
3. "what's the #1 thing a user should be able to do?"
4. "any brands or websites you love the vibe of? (links help)"
5. "what feeling should this give people? (professional, playful, luxurious, minimal, bold?)"

## step 2: competitive analysis
based on their answers:
- identify 2-3 similar products in the space
- note what they do well and what could be better
- find the gap that this product fills

present this as a quick summary — not a report. 3-4 bullet points max.

## step 3: design system
create a design brief document at `docs/design-brief.md` with:

### color palette
- primary color + 2-3 shades (light, DEFAULT, dark)
- secondary/accent color + shades
- background and text colors
- success, warning, error colors
- present as hex codes with a visual description

### typography
- heading font recommendation (from available fonts or suggest a Google Font)
- body font recommendation
- font sizes: h1-h6, body, small, caption
- line heights and letter spacing

### layout
- page structure (header, hero, sections, footer)
- grid system (columns, gutters, max-width)
- spacing scale (4px base, 8, 12, 16, 24, 32, 48, 64)
- breakpoints for responsive design

### components
- button styles (primary, secondary, outline, ghost)
- card styles (bordered, elevated, flat)
- input styles
- navigation pattern (top bar, sidebar, tabs)

## step 4: page wireframes
for each main page, describe:
- what sections appear and in what order
- what content goes in each section
- what interactions/animations matter
- mobile vs desktop differences

write these to `docs/wireframes.md`.

## step 5: product brief
create `docs/product-brief.md` with:
- product name and tagline
- target audience
- core features (v1)
- future features (v2+)
- success metrics
- technical requirements

## final check
present the full design system to the user:
> "here's the game plan for [product]. take a look and tell me what to change before we start building."

wait for their approval. adjust anything they want.

once approved:
> "design system locked. type `$start` and we'll build this thing."

## rules
- make every recommendation specific, not generic
- use their industry and audience to guide decisions
- color palettes should be harmonious (use complementary or analogous schemes)
- typography should have contrast (pair serif with sans-serif, or geometric with humanist)
- present everything visually where possible
- this is a conversation, not a form — guide naturally
