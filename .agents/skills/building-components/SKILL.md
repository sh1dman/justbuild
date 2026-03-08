---
name: building-components
description: Guide for building modern, accessible, and composable UI components with HeroUI. Use when building new components, implementing accessibility, or creating composable APIs.
---

# Building Components

## When to use this skill
- Building new UI components
- Implementing accessibility features (ARIA, keyboard navigation)
- Creating composable component APIs
- Working with design tokens and theming

## Core Principles

### 1. Use HeroUI First
Always check if HeroUI has a component before building custom. Available: Button, Card, Input, Textarea, Select, Checkbox, Switch, Modal, Navbar, Dropdown, Avatar, Badge, Chip, Tooltip, Tabs, Accordion, Table, Pagination, Spinner, Progress, Divider, Spacer, Image, Link, Code, Snippet.

### 2. Component Structure
```
components/
  ComponentName.tsx    # "use client" + default export
```

### 3. Accessibility
- Every interactive element needs keyboard support
- Use semantic HTML elements
- Add ARIA labels where meaning isn't clear from content
- Ensure sufficient color contrast (WCAG AA)
- Test with keyboard-only navigation

### 4. Composability
- Keep components focused — one responsibility
- Accept children and className props
- Use TypeScript interfaces for props
- Default to controlled components, support uncontrolled

### 5. Styling
- Use Tailwind CSS v4 classes
- Reference design tokens from `hero.ts`
- Support dark mode via HeroUI theme
- Use `framer-motion` for animations
