---
name: vercel-deploy
description: Deploy applications to Vercel. Use when user requests deployment.
---

# Vercel Deploy

Deploy any project to Vercel instantly. **Always deploy as preview** unless user asks for production.

## Quick Start

1. Check Vercel CLI:
```bash
command -v vercel
```

2. If installed:
```bash
vercel deploy [path] -y
```

3. If not installed or auth fails, use fallback:
```bash
bash .agents/skills/vercel-deploy/scripts/deploy.sh
```

## Fallback (No Auth)

The deploy script handles framework detection, packaging, and deployment.

```bash
# Deploy current directory
bash .agents/skills/vercel-deploy/scripts/deploy.sh

# Deploy specific project
bash .agents/skills/vercel-deploy/scripts/deploy.sh /path/to/project
```

Returns JSON with `previewUrl` and `claimUrl`.

## Production

Only if explicitly asked:
```bash
vercel deploy [path] --prod -y
```

## Output

Show user the deployment URL. For fallback, also show claim URL.
Do not curl/fetch the deployed URL to verify.
