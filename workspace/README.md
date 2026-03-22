# Workspace Knowledge Hub

This folder is the canonical memory area for the repo and now also contains the runnable app/config files.

## Memory files
- `SOUL.md` — working style and behavioral guardrails.
- `MEMORY.md` — current project snapshot and durable context.
- `CHANGELOG.md` — recent work, newest first.
- `DECISIONS.md` — architectural decisions and tradeoffs.
- `PATTERNS.md` — repeatable implementation conventions.
- `DEBUGGING.md` — recurring issues and fixes.
- `TODO.md` — high-signal next steps only.

## Project map
- `app/layout.tsx` — root Next.js layout (inside the workspace app package).
- `app/globals.css` — global styles, fonts, and visibility behavior.
- `app/s/adv/cellular-energy-discovery/page.tsx` — live marketing route.
- `src/sections/TopBar/index.tsx` — main landing-page component tree.
- `next.config.js` — root redirect and remote image config.
- `public/fonts/` — home for local/self-hosted font assets.
- `package.json` / `tsconfig.json` / `postcss.config.js` — framework/tooling config for the workspace app package.
- `PROJECT_README.md` — original top-level project readme moved under the workspace hub.

## Rule
When project knowledge needs to persist across sessions, document it in `workspace/` so future sessions can learn from it quickly.
