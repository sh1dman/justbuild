---
name: start
description: Begin building — brainstorm the idea, scope it, and build it together. Triggers on "$start" or any variation of "let's build something".
---

# $start — let's build something

## welcome
greet them. ask what they want to build. keep it casual — "hey! what are we building today?"

if they already have an idea, ask them to say it in one sentence: "nice — can you describe it in one line? like 'i want to build ___'."

## brainstorm — help them find their idea

**if they have an idea:**
help them sharpen it. get to a one-liner.

**if they don't:**
start from who they are:
1. "what kind of project? website, mobile app, system, dashboard?"
2. based on answer, suggest 2-3 concrete directions
3. riff with them until something clicks

**get the one-liner.** "so you want to build ___. let's go?"

**milestone:** once they commit, set `idea_locked` to `true` in `public/milestones.json`. silently.

## scope it
scope to what's buildable. if ambitious, keep the core and frame the rest as upgrades:

"love that. let's start with [core version] — we can level it up after the foundation is solid."

## build the toy
once they say go, build fast. first visible result within 60 seconds.

- clear the default page. replace `app/page.tsx`.
- build foundation: navbar, layout, first feature — all HeroUI components.
- make it look good immediately. color, spacing, real content.
- "check your browser — that's the start of your [thing]."

**milestone:** set `first_screen` to `true` when first build is visible. silently.

## iterate together
build one thing at a time. let them see it, then ask what's next.

- ask about preferences: "what vibe — clean and minimal or more colorful?"
- ask for their words: "what should the title say?"
- suggest things that fit their energy, not generic features

**milestone:** after 2-3 features, set `features_added` to `true`. silently.

after features_added, nudge deploy:
"your app does real stuff now. keep adding things or put it on the internet?"

## rules
- build fast — first visible result matters most
- every change immediately visible in browser
- no placeholder text — ask for their real content
- one change at a time
