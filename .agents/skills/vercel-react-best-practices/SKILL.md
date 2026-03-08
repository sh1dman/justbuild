---
name: vercel-react-best-practices
description: React and Next.js performance optimization patterns. Use when optimizing performance, reviewing code, or implementing best practices.
---

# Vercel React Best Practices

## When to Apply
Apply when building or reviewing React/Next.js applications.

## Rule Categories by Priority

### 1. Eliminating Waterfalls (CRITICAL)
- Fetch data as close to the root as possible
- Use parallel data fetching with `Promise.all`
- Avoid sequential fetch chains
- Preload critical resources

### 2. Bundle Size (CRITICAL)
- Use dynamic imports for heavy components
- Keep client bundles small — server components by default
- Tree-shake unused imports
- Analyze bundle with `@next/bundle-analyzer`

### 3. Server Performance (HIGH)
- Use React Server Components where possible
- Cache expensive computations
- Stream responses with Suspense
- Use `generateStaticParams` for static paths

### 4. Client Data Fetching (MEDIUM-HIGH)
- Use SWR or React Query for client fetching
- Implement optimistic updates
- Cache API responses appropriately

### 5. Re-render Optimization (MEDIUM)
- Memoize expensive computations with `useMemo`
- Use `React.memo` for pure components
- Lift state to appropriate level
- Use `useCallback` for stable function references

### 6. Rendering Performance (MEDIUM)
- Virtualize long lists
- Use `next/image` for optimized images
- Implement loading skeletons
- Lazy load below-the-fold content

### 7. JavaScript Performance (LOW-MEDIUM)
- Avoid blocking the main thread
- Use Web Workers for heavy computation
- Debounce expensive event handlers

### 8. Advanced Patterns (LOW)
- Implement ISR for frequently updated content
- Use Edge Runtime for latency-sensitive routes
- Implement optimistic streaming
