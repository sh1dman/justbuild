---
name: imlost
description: Context-aware help when stuck. Reads conversation and project state to give specific, relevant help. Triggers on "$imlost" or any indication of confusion.
---

# $imlost — get unstuck

## first: figure out what's going on
read `app/` and `components/` to understand what's built. check if dev server is responding. read recent conversation — what were they trying? did something fail? are they between steps?

## respond based on what you find

**haven't started yet:**
> "hey! tell me what you want to build and we'll make it. or type `$start` to get going."

**something is broken:**
don't wait. run `$fixit` diagnostic flow. fix it, then:
> "found the issue — [simple explanation]. fixed it, check your browser."

**actively building:**
summarize what they've got, suggest 2-3 concrete next steps:
> "you've got [description]. want to add [specific feature A], [specific feature B], or [specific feature C]?"

**they seem stuck:**
> "all good — getting stuck is part of it. let me look at where things are."

**want to start over:**
> "no worries. want something totally different or redo the same idea fresh?"

**already deployed:**
> "your app is live! want to make changes and update it, or keep adding?"

**can't tell:**
> "hey — what's going on? where are you at?"

## rules
- always be specific to their project
- prefer ONE clear next step over a menu
- never say "have you tried" — just do it for them
