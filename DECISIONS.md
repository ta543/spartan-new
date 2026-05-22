# System Decisions

*This file is the single source of truth for architectural and implementation decisions in this project.*

## Purpose

Records key technical decisions, their rationale, alternatives considered, and outcomes. This file prevents the same discussions from happening twice and helps future-you (or future-sessions) understand *why* things are the way they are.

## When to Update This File

Update this file when:
- A significant technical or architectural decision is made
- A library, framework, or tool is chosen over alternatives
- A design pattern or approach is selected for a non-trivial problem
- A previous decision is revisited, changed, or reversed
- A constraint or trade-off is discovered that shaped the implementation
- A workaround is chosen due to external limitations (API quirks, library bugs, etc.)

**Do not** log trivial decisions (variable naming, minor formatting). If it wouldn't be worth explaining to a teammate joining the project, skip it.

## Format

Each entry follows this structure:

```
### [YYYY-MM-DD] — [Short Decision Title]

**Status:** Accepted | Superseded | Deprecated
**Context:** Why this decision was needed. What problem or question triggered it.
**Decision:** What was decided.
**Alternatives Considered:**
- [Alternative A] — Why it was rejected.
- [Alternative B] — Why it was rejected.
**Consequences:** What this decision enables, constrains, or risks.
```

If this file gets corrupted, re-create it. 
CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

---

## Decisions

<!-- New entries go here, newest first -->

### [2026-03-18] — Workspace Folder as Canonical Knowledge Hub

**Status:** Accepted
**Context:** The project needs durable cross-session memory so future work can quickly recover the route, styling, debugging, and behavior conventions without rediscovery.
**Decision:** Treat `workspace/` as the canonical knowledge hub and the actual app home, keeping both persistent project context and the runnable app/config files there via `README.md`, `MEMORY.md`, `CHANGELOG.md`, `DECISIONS.md`, `PATTERNS.md`, `DEBUGGING.md`, `TODO.md`, and the Next.js project files.
**Alternatives Considered:**
- Scatter notes across root-level files — rejected because it weakens discoverability for future sessions.
- Keep only `MEMORY.md` — rejected because decisions, debugging, and patterns need their own durable records.
**Consequences:** Future sessions have a single folder to read for repo memory and a single folder containing the runnable app before making changes.

### [2026-03-18] — Campaign Route and Global Font Ownership

**Status:** Accepted
**Context:** The initial Next.js migration left the page at `/` and kept most global styling in `tailwind.css`, but the requested campaign URL and font ownership needed to be explicit.
**Decision:** Serve the landing page from `/s/adv/cellular-energy-discovery`, implement `/` as a `next.config.js` redirect instead of an `app/page.tsx` redirect page, and centralize global font-face declarations in `app/globals.css`.
**Alternatives Considered:**
- Keep the page at `/` — rejected because it did not match the requested campaign URL.
- Keep fonts only in `tailwind.css` — rejected because the request explicitly asked for font-face declarations in `globals.css`.
**Consequences:** Routing now matches the requested ad path, avoids the reported Turbopack root-page crash, and keeps future typography updates in a single source of truth.
