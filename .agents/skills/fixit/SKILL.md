---
name: fixit
description: Auto-diagnose and fix problems. Triggers on "$fixit", "something broke", "fix this", or any error/bug report.
---

# $fixit — fix problems

## before you touch anything
stop and think:
- what was the user doing when this broke?
- what changed recently?
- what are you assuming is fine that might not be?

## diagnostic checklist
run through this. **stop and fix at the first failure.**

## 1. Dev Server Running?
```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
```

if not responding:
```bash
npm run dev &
```

## 2. File Integrity
verify these exist and are valid:
- `app/page.tsx` — has default export, `"use client"` at top
- `app/layout.tsx` — has default export, wraps children in `<Providers>`
- `app/providers.tsx` — exports `Providers` with `HeroUIProvider`
- `app/globals.css` — has `@import "tailwindcss"`, `@plugin '../hero.ts'`
- `hero.ts` — default export from `heroui()`

## 3. Import Check
scan `app/` and `components/` for:
- valid `@heroui/react` imports
- no missing local file imports
- no uninstalled packages

## 4. Lint Check
```bash
npx eslint app/ --fix
```

## 5. Build Check
```bash
npm run build
```

## after fixing
tell the user in plain language:
> "found a small issue — [description]. fixed it, check your browser."

## if everything passes
> "everything looks good — your app is running clean."

## rules
- never show raw error output or stack traces
- fix problems, don't just report them
- keep it casual — "found a typo in an import" not "ESLint rule violation"
- verify the fix actually works before telling the user
