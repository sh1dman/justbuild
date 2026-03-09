# JustBuild Homepage Redesign Spec

## Understanding Summary

- The redesign target is the current `justbuild` homepage.
- The primary goal is explanation clarity, not a cosmetic refresh.
- The main audience is developers.
- The key messaging problem is differentiation: visitors do not quickly understand why `justbuild` is better than using generic AI tools directly.
- The core positioning is speed: `justbuild` should feel like a faster path from idea to shipped app.
- The primary proof mechanism is a visible workflow: idea -> command -> app.
- The primary CTA should guide users into docs or workflow content, not directly into install.

## Explicit Non-Goals

- Do not make the page primarily about brand theatrics.
- Do not center the page on a broad skills inventory.
- Do not lead with tech stack or implementation details.
- Do not rely on vague AI marketing language.

## Assumptions

- `justbuild` is a developer-facing product or workflow layer, not a general consumer product.
- The current page is too feature-list-driven and not workflow-driven enough.
- The next click after the homepage should take users into a clearer workflow or documentation path.
- A more interactive homepage is acceptable if the interaction improves comprehension.
- Performance should remain solid on desktop and mobile even with richer motion.
- Traffic scale is normal landing-page scale, not extreme high-traffic infrastructure.
- The marketing page itself has no unusual security or privacy constraints.
- Ongoing maintenance of a more custom homepage is acceptable.

## Decision Log

- Chose explanation clarity as the redesign goal over pure visual polish.
- Chose developers as the primary audience.
- Chose differentiation from generic AI tools as the main homepage problem to solve.
- Chose "faster path from idea to shipped app" as the core positioning.
- Chose workflow visibility as the primary proof mechanism.
- Chose docs or workflow content as the primary CTA.
- Chose to de-emphasize tech-stack marketing.
- Chose a minimal, technical tone.
- Chose selective interaction only where it helps explain the product.
- Chose a workflow-first landing structure over a feature-grid structure.

## Recommended Approach

Build a workflow-first technical landing page.

The homepage should make one argument in sequence:

1. What `justbuild` is
2. Why it is faster than generic AI chat workflows
3. How it works in practice
4. What a developer gets out of it
5. Where to go next

This should be the dominant structure of the page. The redesign should stop treating the homepage like a catalog of capabilities and instead treat it like a guided explanation.

## Page Structure

### 1. Hero

Purpose:
Explain the product category and main benefit immediately.

Recommended content:

- Eyebrow: short product framing
- Headline: speed-oriented promise
- Subhead: explain the differentiator in plain English
- Primary CTA: read the workflow
- Supporting visual: restrained workflow diagram or terminal progression

Content direction:

- Avoid vague phrases like "AI co-pilot handles the rest"
- Avoid stack mentions in the hero
- Avoid decorative elements that compete with the message

### 2. How It Works

Purpose:
Provide the main proof that `justbuild` is faster.

Recommended structure:

1. Start with an idea or task
2. Enter the right command path
3. Move toward a usable app or redesign outcome

This section should be the core explanatory engine of the page.

### 3. Why Not Generic AI Chat

Purpose:
Answer the differentiation question directly and honestly.

Recommended framing:

- Generic AI tools start from a blank conversation
- `justbuild` reduces manual prompting and workflow setup
- The value is guided progression, not model superiority

This section should focus on reducing friction and ambiguity, not attacking competitors.

### 4. What You End Up With

Purpose:
Show the concrete outcome categories developers can expect.

Examples:

- landing page
- redesign spec
- app shell
- prototype
- shipped project path

This section should stay concrete and outcome-oriented.

### 5. Read the Workflow

Purpose:
Move serious users into the next step.

Recommended CTA behavior:

- route users into docs, workflow guidance, or onboarding content
- make the next click feel like continuation, not a hard conversion ask

### 6. Secondary Support Content

Optional only if it supports the main argument:

- compact commands preview
- selected skills preview
- lightweight ecosystem note

This content should stay below the core narrative.

## Visual Direction

### Tone

- minimal
- technical
- restrained
- specific

### Visual System

- A dark or near-dark base is acceptable
- Reduce glow intensity and novelty styling
- Use one strong accent color with at most one muted secondary accent
- Replace most glass-heavy cards with cleaner panels, dividers, terminal frames, and diagram-style layouts
- Use mono only where it communicates commands or state

### Motion

- Motion should explain workflow progression or section state
- Avoid decorative motion that does not add meaning
- Use interaction budget on comprehension, not spectacle

## What to De-Emphasize or Remove

- Tech stack section as a major homepage pillar
- Broad skill/category grids near the top of the page
- Heavy ambient glow fields
- Decorative gradients as the main visual hook
- Generic AI-SaaS messaging patterns

## Risks

- If the page remains abstract, it will still read like an AI wrapper.
- If the comparison language becomes too aggressive, it may feel insecure.
- If interaction becomes flashy, clarity will drop.
- If the docs/workflow destination is weak, the homepage promise will break on the next click.

## Implementation Handoff Notes

When implementation begins, the build should prioritize:

1. Hero rewrite
2. Workflow-first page structure
3. Clear differentiation section
4. Outcome-oriented examples
5. Docs/workflow CTA path
6. Visual simplification and motion cleanup

Implementation should preserve the strongest parts of the existing brand only where they support recognition without harming clarity.
