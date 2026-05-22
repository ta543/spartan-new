# Context — FeatureSection redesign

## Current state

[src/sections/FeatureSection/index.tsx](src/sections/FeatureSection/index.tsx)
renders an h1 + paragraph in the left column and a 6-cell icon grid
(`FeatureGrid`) in the right column. That's the Anima-generated layout.

## Live reference

`offer.getnuzzle.com` renders the same section completely differently:

- A centered h1 with a teal underline accent.
- A 3-column row beneath the heading:
  - **Left column:** three bordered "feature" cards stacked vertically.
    Each card: bold title, single-line description, icon on the right.
  - **Middle column:** the Nuzzle pillow product image
    (`https://offer.getnuzzle.com/images/pillow-new-image.webp`) with a
    soft cyan glow behind it.
  - **Right column:** three more bordered feature cards, same style.
- Below the row: green "SALE ENDS IN ⏱ / ORDER NOW AND SAVE" CTA, then a
  "Safe & Secure" line with payment-method icons.

## Card content (scraped from the live page)

Left column:
1. **Nanocoil Support Fibers** — "Perfectly cradles your head giving you a weightless sensation"
2. **3-in-1 Adjustable Design** — "No matter the sleep position, Nuzzle is fully customizable using the two layers included"
3. **NASA Phase Change Technology** — "Stay cool with Nuzzle for perfect sleep temperature, leaving hot, sweaty nights behind"

Right column:
4. **Lasting Quality** — "Nuzzle bounces back like new, even after hundreds of machine washes."
5. **Spine Health** — "Chiropractors nationwide recommend Nuzzle, giving you confidence in your purchase for better sleep."
6. **Advanced Breathability** — "The 360-degree gusset lets body heat escape, ensuring uninterrupted sleep with optimal comfort."

## Icons (already in our codebase)

These six SVGs already work — they were used in the old grid:
- `Icons-Sets-03.svg` → Nanocoil Support Fibers
- `Icons-Sets-06.svg` → 3-in-1 Adjustable Design
- `Icons-Sets-01.svg` → NASA Phase Change Technology
- `Icons-Sets-04.svg` → Lasting Quality
- `Icons-Sets-02.svg` → Spine Health
- `Icons-Sets-05.svg` → Advanced Breathability

## Files affected

- [src/sections/FeatureSection/index.tsx](src/sections/FeatureSection/index.tsx) — full rewrite of layout.
- [src/sections/FeatureSection/components/FeatureGrid.tsx](src/sections/FeatureSection/components/FeatureGrid.tsx) — replace with a `FeatureCard` component (or rewrite FeatureGrid as a card component).
- May reuse the existing CTA block pattern from
  [src/sections/GuaranteeSection/index.tsx](src/sections/GuaranteeSection/index.tsx)
  for the SALE ENDS IN button + payment row.

## Validation

- `npx next build` clean.
- `preview_screenshot` at 1280px viewport showing 3-column layout: cards-left + pillow-center + cards-right.
- All 6 icon images load + product image (pillow-new-image.webp) loads.
- No console errors.
