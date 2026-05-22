# Context — Vercel Deploy Fix (task a)

## Goal
Make `npm run build` succeed in `frontend/` so Vercel can complete its
production build. The user reported the deploy was failing.

## Reproduction
```
cd frontend
npm install
npm run build
```
This is what Vercel runs for the `frontend` service in `vercel.json`. Running
it locally surfaced the exact failures Vercel hit (TypeScript errors, then
prerender errors), in order.

## Root causes (in build order)

### 1. chart.js v4 dropped `drawBorder`
File: `frontend/components/MetricDetailsModal.tsx:231`
The `scales.y.grid.drawBorder` option was removed in chart.js v4 and replaced
with a top-level `scales.<axis>.border.display` field. With chart.js `^4.4.0`
in `frontend/package.json`, the v3 syntax was a hard type error.

### 2. Sparkline labels typed as `string[] | number[]`
File: `frontend/components/Sparkline.tsx:86`
`labels: labels ?? data.map((_, i) => i)` widened to `string[] | number[]`,
which chart.js types reject. Coercing the index to a string keeps the chart
behavior identical and satisfies the type.

### 3. `baseDateOptions` lost its literal-union element type
File: `frontend/components/TopBar.tsx:28`
`const baseDateOptions = [...]` (without `as const` or annotation) inferred
`string[]`, but `calculatePresetRange` from `frontend/lib/dateRanges.ts:101`
takes the literal union `PresetDateOption`. Annotating
`baseDateOptions: PresetDateOption[]` keeps the array mutable while accepting
the union.

### 4. `useSearchParams()` not wrapped in Suspense → static prerender bailed
Files:
- `frontend/components/Layout.tsx` — renders `<TopBar>` on every non-settings
  page, and `TopBar` calls `useSearchParams()`.
- `frontend/app/dashboard/page.tsx:1958` — calls `useSearchParams()` directly
  in the page component.

Next.js 14 fails `next build` if any client component calling
`useSearchParams()` is reachable from a statically prerendered page without an
ancestor `<Suspense>`. The fix is two narrow Suspense wraps — one around
`<TopBar>` in `Layout.tsx`, one around the dashboard page body. Both use
`fallback={null}` because the existing UI already handles the loading state
inside the wrapped components.

### 5. `vercel.json` referenced a Go service Vercel doesn't build
File: `vercel.json`
The original config declared a second service:
```json
"kpi-go": { "entrypoint": "services/kpi-go", "routePrefix": "/_/kpi-go" }
```
Vercel's `experimentalServices` officially supports `nextjs`, `fastapi`, and
`express` framework slugs. Go is not listed, and the frontend never calls
`/_/kpi-go` (verified by grep across `frontend/`). The Go service is only
used by `docker-compose.yml` for local dev. Removing it from `vercel.json`
prevents Vercel from attempting a build it can't perform.

`includeFiles: "../backend/**"` was added to the `frontend` service so the
sibling `backend/` directory ships with the build — `frontend/tsconfig.json`
maps `@backend/*` to `../backend/*`, and Next.js API route bundles need
those modules at runtime as well as build time.

## Files touched
- `frontend/components/MetricDetailsModal.tsx`
- `frontend/components/Sparkline.tsx`
- `frontend/components/TopBar.tsx`
- `frontend/components/Layout.tsx`
- `frontend/app/dashboard/page.tsx`
- `vercel.json`

## Validation
`cd frontend && rm -rf .next && npm run build` finishes cleanly:
- ✓ Compiled successfully
- ✓ Linting and checking validity of types
- ✓ Generating static pages (22/22)

No remaining type errors. No prerender bailouts.
