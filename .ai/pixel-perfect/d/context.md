# Context — clone the rest of the live sections

## Live page section order (after dedup)

1. CountdownBanner
2. Navbar
3. HeroSection (`Stop Your Neck Pain... FAST`)
4. MediaBanner (`ADS FEATURED ON` — currently labelled `AS SEEN ON` in our copy, that's fine)
5. VideoSection (`Discover the Easiest Way…`)
6. PainPointsSection (`Professionally Recommended to STOP the damage…`)
7. FeatureSection (`Why Nuzzle Has Worked for 1000s of Americans?!`)
8. **HowItWorksSection** — wraps three steps under a single h1 `How Exactly Does Nuzzle Work?!`. Our current section has no wrapping headline.
9. **ComparisonTable** — `Nuzzle is Unlike Any Pillow…` (h1) **+ `200,000+ Americans Relieved Their Neck Pain With Nuzzle – Now It's Your Turn` (h2)`** that we don't render today.
10. **GuaranteeSection (round 1)** — `Try It At Our Risk For 90 Days Or Your Money Back`. Live page renders this *before* TestimonialsSection.
11. TestimonialsSection (`Real, Verified Relief…`)
12. **FAQSection** — heading is `Still Not Sure? Here Are The Top 8 Questions We Get About Nuzzle`. Visible questions on live page:
    - Can the Nuzzle pillow be washed and dried?
    - Who Is The Nuzzle Pillow Designed For?
    - Will the Nuzzle pillow lose its shape over time?
    - How does the 90 Day Guarantee work?
    - How Long Does Shipping Take?
    - How can I get refund?
    Our current section has different questions (Will it Lose Its Shape, Can I Wash It, How Do Returns Work etc).
13. GuaranteeSection (round 2) — same content, repeated at the bottom.
14. Footer
15. MobileOrderBar

## Current `app/page.tsx` order (post commit `0896c5a`)

```
CountdownBanner → StickyBar → Navbar → HeroSection → MediaBanner →
VideoSection → PainPointsSection → FeatureSection → HowItWorksSection →
ComparisonTable → TestimonialsSection → FAQSection → GuaranteeSection →
Footer → MobileOrderBar
```

The order is correct except `GuaranteeSection` should appear **before**
TestimonialsSection (and again after FAQ). The simplest way to honour
that without two source copies is to render `<GuaranteeSection />` twice
in the page composition.

## Files affected

- [app/page.tsx](app/page.tsx) — insert `<GuaranteeSection />` between ComparisonTable and TestimonialsSection.
- [src/sections/HowItWorksSection/index.tsx](src/sections/HowItWorksSection/index.tsx) — add a centered h1 `How Exactly Does Nuzzle Work?!` above the three steps, matching the heading style of FeatureSection (sky-950 + teal underline).
- [src/sections/ComparisonTable/index.tsx](src/sections/ComparisonTable/index.tsx) — add the `200,000+ Americans…` subheading under the existing h1.
- [src/sections/FAQSection/index.tsx](src/sections/FAQSection/index.tsx) — restructure heading to `Still Not Sure? Here Are The Top 8 Questions We Get About Nuzzle`, swap the questions list to the six live ones, keep the existing FAQItem component for the shape.

## Out of scope (not in this round)

- "I fell asleep so fast and stayed asleep all night" testimonial preview
  block between MediaBanner and PainPointsSection. It contains 1
  sentence + video that we don't have a component for; would be a
  follow-up.
- Trustpilot widget script in ComparisonTable — needs the live JS
  embed, requires a follow-up.
- Re-reordering anything inside the existing components.
