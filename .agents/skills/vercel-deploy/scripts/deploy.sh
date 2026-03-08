#!/usr/bin/env bash
# Vercel Deploy Script — No auth needed
set -e

PROJECT_DIR="${1:-.}"
cd "$PROJECT_DIR"

# Build first
echo "→ Building project..."
npm run build

# Check if vercel CLI exists
if command -v vercel &>/dev/null; then
  echo "→ Deploying with Vercel CLI..."
  vercel deploy -y
else
  echo "→ Vercel CLI not found. Installing..."
  npm install -g vercel
  echo "→ Deploying..."
  vercel deploy -y
fi
