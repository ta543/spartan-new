# Plan — pixel-perfect asset wiring

Phases: 4
Assessed: yes
Complexity: Standard (asset URL substitution across ~20 files, two version-bump deltas, browser-verified)

## Rollback plan

Single commit. To roll back: `git revert <commit-sha>`. No DB migrations,
no env vars, no infra changes.

## Steps

### Phase A — Bump four banner filename versions (precedes the global rewrite)

1. `banner-asset-mobile-r4.svg` → `banner-asset-mobile-r5.svg` in
   `src/sections/CountdownBanner/index.tsx`
2. `banner-asset-r4.svg` → `banner-asset-r5.svg` in
   `src/sections/CountdownBanner/index.tsx`
3. `banner-web-left-r6.svg` → `banner-web-left-r7.svg` in
   `src/sections/CountdownBanner/index.tsx`
4. `bg11-r5.webp` → `bg11-r8.webp` in
   `src/sections/HeroSection/components/HeroProduct.tsx`

### Phase B — Rewrite `../images/` → `https://offer.getnuzzle.com/images/`

5. Single global substitution across `src/` for `src="../images/` →
   `src="https://offer.getnuzzle.com/images/`. Use `find … xargs sed -i ''`
   (mac BSD sed). Verify no other `../images` patterns slipped through
   (e.g. style backgroundImage strings).
6. Spot-check three diverse files (a hero subcomponent, the comparison
   table, the FAQ accordion) to confirm only attribute values changed and
   no Tailwind class strings were broken.

### Phase C — Validate

7. `npx next build` — must succeed with zero TypeScript errors.
8. Restart preview server (or reload — HMR should pick up).
9. `preview_network` after page load — assert zero 404s on
   `offer.getnuzzle.com/images/*`.
10. `preview_console_logs` level=error — must be empty.
11. `preview_screenshot` desktop (default 1280px viewport).
12. `preview_resize` to 375x812 then `preview_screenshot` mobile.
13. Save both to `.ai/pixel-perfect/a/screenshots/phase-6-{golden-path,mobile}.png`.

### Phase D — Commit + push + PR

14. Atomic commit with conventional message (`fix(assets):` …).
15. `git push -u origin <branch>` (this branch already tracks
    `claude/heuristic-babbage-c70cfc`).
16. `gh pr create` against `main`, body lists the version bumps and the
    sweeping URL rewrite.

## Status

- [ ] A. Banner version bumps
- [ ] B. Global asset URL rewrite
- [ ] C. Validation (build + browser)
- [ ] D. PR created

## Out of scope (follow-up candidates)

- Exact green CTA color (`rgb(41, 175, 92)` vs Tailwind `green-500`).
- Exact navbar blue (`rgb(9, 36, 71)` vs `bg-sky-950`).
- Per-section structural drift (text content / spacing tokens diff). Asset
  parity should make ~95% of the visible gap close; structural tweaks need
  side-by-side diff which is best done in a follow-up task once we can see
  the after-state.
