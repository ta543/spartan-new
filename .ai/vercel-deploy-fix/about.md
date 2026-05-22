# Vercel Deploy Fix

The repository deploys to Vercel as a single project using `experimentalServices`,
mounting the Next.js app at `frontend/` to `/`. Build runs `next build` against
`frontend/package.json` with the sibling `backend/` directory available for
TypeScript path-mapped imports (`@backend/*` → `../backend/*`).

The build is clean: TypeScript passes, all 22 pages prerender, and there are no
unwrapped `useSearchParams()` callers.

## Layout
- `vercel.json` — single `frontend` service entry, `nextjs` framework, includes
  `../backend/**` so the path-mapped imports resolve at build time on Vercel.
- `frontend/` — Next.js 14 app router, all pages.
- `backend/` — shared TypeScript modules used by the frontend's API routes via
  `@backend/*` path mapping in `frontend/tsconfig.json`.
- `services/kpi-go` — local Go service used only in `docker-compose.yml`. Not
  deployed to Vercel.

## Key constraints honored
- `useSearchParams()` callers are wrapped in a `<Suspense>` boundary so static
  prerender does not bail (Next.js 14 csr-bailout rule).
- Chart.js v4 grid options use the new `border` field, not the v3 `drawBorder`
  flag.
- The `baseDateOptions` literal is typed as `PresetDateOption[]` so
  `calculatePresetRange` accepts the inferred element type.
