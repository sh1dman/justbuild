#!/bin/bash
for file in ~/.codex/skills/*/SKILL.md; do
  if [ -f "$file" ]; then
    count=$(grep -c "^---" "$file")
    if [ "$count" -gt 2 ]; then
      echo "Fixing $file..."
      awk '/^---/{if(++c>2) next} 1' "$file" > "$file.tmp" && mv "$file.tmp" "$file"
    fi
  fi
done
echo "Done fixing."
