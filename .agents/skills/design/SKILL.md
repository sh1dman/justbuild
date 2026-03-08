---
name: design
description: Create a design system from scratch — UI/UX, tokens, spacing, components. Triggers on "$design", "design system", "create a design".
---

# $design — create a design system

## what this does
build a complete, reusable design system for the current project. this covers tokens, components, patterns, and guidelines.

## step 1: audit what exists
read `app/globals.css`, `hero.ts`, and any existing components. understand the current state.

if there's no design system yet, start fresh. if there is one, ask:
> "you've got some styling going. want to refine what's here or rebuild from scratch?"

## step 2: define design tokens
create or update `hero.ts` with a custom HeroUI theme:

```typescript
export default heroui({
  themes: {
    dark: {
      colors: {
        background: "...",
        foreground: "...",
        primary: { DEFAULT: "...", foreground: "..." },
        secondary: { DEFAULT: "...", foreground: "..." },
        // ... all color tokens
      },
    },
    light: {
      colors: { /* ... */ },
    },
  },
});
```

## step 3: typography system
update `globals.css` with:
- heading styles (size, weight, letter-spacing, font-family per heading level)
- body text styles
- caption/label styles
- code/mono styles

use the available font variables:
- `--font-manrope` — clean, modern
- `--font-space-grotesk` — techy, geometric
- `--font-bricolage` — quirky, personality
- `--font-instrument-serif` — elegant
- `--font-geist-sans` — developer clean
- `--font-geist-mono` — monospace

## step 4: component patterns
create reusable component wrappers in `components/` that apply the design system:
- consistent card styles (glass, bordered, solid)
- button variants matching the palette
- input field styling
- section layout patterns
- navigation patterns

## step 5: animation guidelines
define standard animations using framer-motion:
- entrance animations (fade-up, slide-in, scale)
- hover effects
- page transitions
- loading states
- scroll-triggered reveals

document these in `docs/animations.md`.

## step 6: responsive patterns
define breakpoints and layout behavior:
- mobile-first approach
- grid columns per breakpoint
- component scaling rules
- touch target sizes for mobile

## output
present the design system as a visual summary:
> "here's your design system: [colors] [fonts] [component style]. want to adjust anything?"

## rules
- every token should have a specific purpose
- colors must be accessible (WCAG AA minimum contrast)
- keep the system small — 3-5 colors, 2-3 fonts, consistent spacing
- test in dark mode AND light mode
- prefer HeroUI components over custom HTML
