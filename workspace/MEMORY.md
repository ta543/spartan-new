# Project Memory

This directory stores persistent repo memory for future sessions.

The `workspace/` folder is the canonical place for persistent project knowledge and now also contains the runnable app/config files.

## Active memory files
- `SOUL.md`: assistant behavior and working style.
- `CHANGELOG.md`: newest work log, kept concise.
- `DECISIONS.md`: notable architectural decisions.
- `PATTERNS.md`: repeatable conventions.
- `DEBUGGING.md`: issue investigation history.
- `TODO.md`: high-signal unfinished work only.
- `README.md`: workspace index and project map.

## Current project snapshot
- The landing page is served from `/s/adv/cellular-energy-discovery` in Next.js.
- `/` redirects to that campaign route via `next.config.js`.
- Global fonts are declared in `app/globals.css` via `@font-face`.

- Local font files should live under `public/fonts/`.

- Content using `reveal` / `reveal-fast` should render immediately with no fade-in delay.

- The Next.js app, source tree, public assets, and config files now live directly under `workspace/`.
