<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
<!-- NEXT_ENTRY_HERE -->

## 2026-03-18
- Replaced the root `app/page.tsx` redirect with a `next.config.js` redirect after a reported Turbopack runtime crash on `/`.
- Kept the landing page at `app/s/adv/cellular-energy-discovery/page.tsx`, left global font ownership in `app/globals.css`, added `public/fonts/`, removed delayed reveal/fade behavior, moved the runnable app/config files under `workspace/`, and enlarged the hair-transplant section image.
- Added `workspace/README.md` and expanded workspace memory docs so the workspace folder is both the canonical repo-learning hub and the actual app home alongside SOUL/MEMORY/DECISIONS/PATTERNS/DEBUGGING/TODO.







## 2026-03-16
- Consolidated all page rendering into TopBar/index.tsx (was scattered across many component files)
- Added scroll-reveal (.reveal / .reveal-fast) via IntersectionObserver for all sections
- Implemented live countdown timer (23:59:41 → counts down in real time)
- CTA buttons: pulse-glow animation, hover/active press feedback, green color preserved
- Comments: interactive like/unlike toggle with state, animated comment entries
- CommentInput: functional with submit feedback, focus ring, Enter key support
- Sidebar: sticky positioning on desktop, hover scale on product image
- Sticky CTA bar: z-50, box shadow, pulse-glow on button
- Added keyframes: fade-up, fade-in, pulse-glow, slide-down, bounce-subtle to tailwind.config.js
- Videos: autoplay/muted/loop preserved with rounded corners
</changelog>
