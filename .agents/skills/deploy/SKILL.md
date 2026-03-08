---
name: deploy
description: Deploy the app to the internet. Triggers on "$deploy", "deploy", "push live", "put it on the internet".
---

# $deploy — put it on the internet

## pre-deploy
```bash
npm run build
```

if it fails, fix errors, rebuild. tell the user: "putting your app on the internet — give me a sec."

## deploy
```bash
bash .agents/skills/vercel-deploy/scripts/deploy.sh
```

capture the preview URL from output.

## celebrate
set `deployed` to `true` in `public/milestones.json`. silently.

> "your app is live. here's your link:"
> "[Preview URL]"
> "send that to anyone — they'll see exactly what you built."

if output includes `claimUrl`:
> "that link works now. if you want to keep it permanently, claim it at [claimUrl] — totally optional."

> "you just built something and put it on the internet. that's real."

## help them share
ask who they'd share with, draft a message:
- **friend:** "yo check this out → [url]"
- **family:** "i just built this! → [url]"
- **coworker:** "been building something — here's what i made → [url]"

milestone: if they share, set `shared` to `true`.

## if it fails
1. check build errors → fix
2. check dev server
3. retry deploy
never show raw logs.

## rules
- always `npm run build` first
- never show raw output
- make the celebration genuine
