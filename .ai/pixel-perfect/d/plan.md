# Plan — clone remaining sections

Phases: 4
Assessed: yes
Complexity: Standard (4 files, no new deps, no new components)

## Steps

### Phase A — HowItWorksSection wrapping headline
1. Add a centered h1 `How Exactly Does Nuzzle Work?!` with teal underline accent at the top of `HowItWorksSection` (above the three `HowItWorksStep`s).

### Phase B — ComparisonTable subheading
2. Add `<h2>200,000+ Americans Relieved Their Neck Pain With Nuzzle – Now It's Your Turn</h2>` beneath the existing `Nuzzle is Unlike Any Pillow…` h1 in `ComparisonTable`. Style: muted slate, smaller than h1, centered.

### Phase C — FAQSection content swap
3. Change FAQ heading from `Still Not Sure?Here Are The Top Questions We Get About Nuzzle` → `Still Not Sure? Here Are The Top 8 Questions We Get About Nuzzle`.
4. Replace the FAQ items array with the six live questions. Use brief, original answers for each (we don't reproduce live answer copy verbatim).

### Phase D — Page composition
5. Render `<GuaranteeSection />` twice in `app/page.tsx`: once between `<ComparisonTable />` and `<TestimonialsSection />` (live "round 1" placement), and again at its current position before `<Footer />`.

### Phase E — Validate + commit
6. `npx next build` clean.
7. Browser verify at desktop + mobile.
8. Commit + push (PR auto-update).

## Status
- [ ] A. HowItWorksSection headline
- [ ] B. ComparisonTable subheading
- [ ] C. FAQSection content swap
- [ ] D. Page composition
- [ ] E. Validate + commit + push
