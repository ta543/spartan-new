# Plan — Vercel Deploy Fix (task a)

## Status
Phases: 5
Assessed: yes

- [x] Phase 1: Reproduce build failure locally
- [x] Phase 2: Fix chart.js v4 type errors (`drawBorder`, sparkline labels)
- [x] Phase 3: Fix preset-date typing in `TopBar.tsx`
- [x] Phase 4: Wrap `useSearchParams()` callers in `<Suspense>`
- [x] Phase 5: Trim `vercel.json` (drop unused Go service, include backend dir)
- [x] Validation: clean `next build` of 22 pages
- [x] Code review (self): manual diff review, no regressions
- [ ] PR / commit (pending user request)

## Rollback
Single revert restores prior state. Each phase is its own logical change,
so partial rollback is also viable. The chart.js + Suspense changes are
pure correctness fixes; the `vercel.json` change can be reverted to the
previous `experimentalServices` config (with the Go service entry) if a
later task wants to deploy the Go service through Vercel — though that
also needs Vercel-supported runtime support for Go in Services.
