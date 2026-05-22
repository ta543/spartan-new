# Plan — FeatureSection redesign

Phases: 4
Assessed: yes
Complexity: Standard (focused UI rewrite, 2 files, no new deps)

## Steps

### Phase A — Replace FeatureGrid with a FeatureCard component
1. Rewrite `src/sections/FeatureSection/components/FeatureGrid.tsx` as a
   small `FeatureCard` component: bordered rounded-md box with title
   (bold sky-950) + description (sky-950, ~14px) + icon on the right.

### Phase B — Restructure FeatureSection
2. Centered h1 with teal underline.
3. 3-column desktop grid: left cards / pillow image / right cards.
4. Reuse `pillow-new-image.webp` from the live CDN.
5. CTA block beneath: green pulse button with timer + Safe&Secure + payment icons.
6. Mobile: stack everything (cards above pillow above more cards above CTA).

### Phase C — Validate
7. `npx next build`.
8. Browser verify at 1280px desktop and 375px mobile.

### Phase D — Commit + push (PR auto-update)

## Status
- [ ] A. FeatureCard component
- [ ] B. Section restructure
- [ ] C. Validation
- [ ] D. Commit + push
