# Context — pixel-perfect parity with offer.getnuzzle.com

## Situation

The repo is a Next.js 14 (App Router) landing page port of the live page at
`https://offer.getnuzzle.com/`. The Tailwind classes, section component tree,
and copy were Anima-generated from the live page. Two parity-breaking gaps
remain:

1. **Every local image reference 404s.** Components reference `../images/foo.svg`
   but no `images/` directory exists in the project (and never did, even
   pre-Next.js — the original Vite config pointed `publicDir` at a nonexistent
   `./static`). The actual assets live on the customer's CDN at
   `https://offer.getnuzzle.com/images/<filename>`.
2. **Three banner asset filenames are out of date** vs. the live page:
   `banner-asset-mobile-r4.svg`, `banner-asset-r4.svg`,
   `banner-web-left-r6.svg`, `bg11-r5.webp`. The live page is on r5/r7/r8.

## Source of truth

`styling.json` (256 KB, 7671 lines) is a DOM/CSS extraction taken from the
live page on 2026-05-08 with `viewport=1920x872`. Top-level keys: `meta`,
`tokens` (colors, typography, spacing, radii, shadows, zIndex, transitions,
breakpoints), `cssVariables`, `fonts`, `layout` (flexbox/grid containers,
positioned elements, document dims), `components` (8 categories — buttons,
links, images, cards, navbars, footers, badges, icons — each with variants
including computed styles and dimensions), `interactions`, `assets` (50 images
+ 20 svgIcons + 2 backgroundImages), `rawStylesheets`.

Helpful summaries already extracted:

- `.ai/pixel-perfect/a/assets.md` — every image URL with alt text and intrinsic dimensions.
- `.ai/pixel-perfect/a/text-content.md` — text per component variant.

## Image references in current code

Found via `grep -rhoE 'src="\.\./images/[^"]+"' src/ app/`:

```
Green-circle.svg, Icons-Sets-01..06.svg, Logo_tiny_1Logo_tiny.webp,
Money-Back-Guarantee.svg, Trustpilot_Stars.svg, back.svg, badges-long-1.png,
banner-asset-mobile-r4.svg, banner-asset-r4.svg, banner-web-left-r6.svg,
bg11-r5.webp, cc-card-img.svg, cc-light_1.svg, fire.svg, footer-logo.webp,
head.svg, lock_black.svg, money-back.svg, neck.svg, numb.svg, pill_1pill.webp,
re-one.webp, shield-check.svg, shipping-fast.svg, shoulder.svg, star-new.svg,
tingle.svg, trustpilot_full_icon.svg, v5/gg1.png
```

A live HEAD check of all 33 distinct paths against
`https://offer.getnuzzle.com/images/...` returned 200 for every one — including
the four older `r4`/`r5`/`r6` variants AND the canonical `r5`/`r7`/`r8`
versions. Both work; we should bump to the canonical version because that's
what the live page renders today.

## Version bumps required (from `meta.url` snapshot 2026-05-08)

| Old (in code) | New (in styling.json `assets`) |
|---|---|
| `banner-asset-mobile-r4.svg` | `banner-asset-mobile-r5.svg` |
| `banner-asset-r4.svg` | `banner-asset-r5.svg` |
| `banner-web-left-r6.svg` | `banner-web-left-r7.svg` |
| `bg11-r5.webp` | `bg11-r8.webp` |

## Files affected

Image references are in:
- `src/components/CTAButton.tsx`, `src/components/CTABlock.tsx`, `src/components/FAQAccordion.tsx`
- `src/sections/Footer/index.tsx`
- `src/sections/CountdownBanner/index.tsx`
- `src/sections/HeroSection/components/{HeroProduct,HeroContent,BenefitTags,ShippingInfo,GuaranteeCard,TrustScore}.tsx`
- `src/sections/PainPointsSection/components/{PainPointsGrid,RecommendedSection}.tsx`
- `src/sections/MediaBanner/index.tsx`
- `src/sections/ComparisonTable/index.tsx`, `src/sections/ComparisonTable/components/ComparisonRow.tsx`
- `src/sections/TestimonialsSection/index.tsx`, `src/sections/TestimonialsSection/components/{ReviewCard,RatingSummary}.tsx`
- `src/sections/FAQSection/index.tsx`, `src/sections/FAQSection/components/FAQItem.tsx`
- `src/sections/GuaranteeSection/index.tsx`
- `src/sections/HowItWorksSection/components/HowItWorksStep.tsx`
- `src/sections/FeatureSection/components/FeatureGrid.tsx`

All references use the form `src="../images/<name>"`. Some files use `<img>`,
not `next/image`, which is correct given `next.config.mjs` sets
`images.unoptimized: true` (the live image set is mostly hosted on a
third-party CDN we don't want Next to proxy through its image optimizer).

## Fonts

`app/globals.css` already references the correct
`https://offer.getnuzzle.com/fonts-v5/...woff2` URLs for Proxima Nova
weights 300/400/500/600/700/800, plus the icon font. These already work in
the live preview. **No font changes required.**

## Layout / typography tokens

The Tailwind classes already encode the bulk of the design tokens (colors,
spacing, typography). `styling.json.tokens` confirms the active token set.
Spot-checked categories:

- Primary green CTA: `rgb(41, 175, 92)` — current code uses `bg-green-500`,
  which is `#22c55e` (rgb 34/197/94). Visually very close but **not** an
  exact match. Consider an exact-token utility if pixel-perfect is required;
  out of scope for round 1.
- Sale-banner red: `rgb(243, 67, 91)` — current code matches.
- Navbar dark: `rgb(9, 36, 71)` — current code uses `bg-sky-950` (`#082f49`,
  rgb 8/47/73). Close but not exact.

These two tweaks (green CTA, navbar blue) are **deferred to a follow-up
task** if the asset-URL fix alone doesn't deliver visual parity. The brief
prioritized "images, videos, gifs" first.

## Build / preview state

- `npm run build` passes cleanly post-Next.js conversion.
- Preview server runs on `localhost:3000`.
- Console reports zero JS errors when the page loads.
- Pre-fix screenshot: visible alt text instead of images
  (`Neck Pain` icon shows broken-image glyph + alt text).

## Validation strategy

1. After substitution, `npm run build` must still pass.
2. Restart preview, inspect with `preview_screenshot` and
   `preview_network` — verify no 404s on any `getnuzzle.com/images/*`
   request and that all `<img>` elements have `naturalWidth > 0`.
3. Capture before/after screenshots at desktop (1280px) and mobile (375px).
