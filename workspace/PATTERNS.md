# System Patterns & Conventions

*This file is the single source of truth for recurring patterns, conventions, and technical standards in this project.*

## Purpose

Documents the established architecture patterns, coding conventions, and technical standards the project follows. This file exists so the agent (and future sessions) can produce consistent code without re-discovering or re-debating how things are done here.

## When to Update This File

Update this file when:
- A new architectural pattern is introduced or adopted (e.g., repository pattern, event-driven flow)
- A coding convention is established that deviates from language defaults
- A reusable approach is identified and should be applied consistently (error handling, logging, validation)
- A pattern is deprecated or replaced by a better approach
- A new integration point is added that follows (or defines) a standard interface
- File/folder structure conventions change

**Do not** document one-off implementations. Only patterns that should be **replicated** across the codebase belong here.

## Format

Organize patterns by category. Each pattern follows this structure:

```
### [Pattern Name]

**Category:** Architecture | Data Flow | Error Handling | Testing | API Design | File Structure | [Other]
**Status:** Active | Deprecated
**Description:** What the pattern is and when to apply it.
**Implementation:**
[Code example or step-by-step description]
**Rationale:** Why this pattern was chosen.
```

When a pattern is **deprecated** you can either delete it or update its status and note the replacement.

If this file gets corrupted, re-create it. 
CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

---

## Architecture

<!-- Patterns related to high-level system structure -->

### Workspace Knowledge Hub

**Category:** File Structure
**Status:** Active
**Description:** Persistent project context and the active app/config files belong in `workspace/` so future sessions can recover repo history and edit the runnable project from one place.
**Implementation:**
- Update `workspace/README.md` when the project map changes.
- Keep the active Next.js app/config files under `workspace/`.
- Keep durable notes in `MEMORY.md`, `CHANGELOG.md`, `DECISIONS.md`, `PATTERNS.md`, `DEBUGGING.md`, and `TODO.md`.
**Rationale:** Makes the repo's "memory" explicit and easy to reload at the start of future sessions.

### Campaign Entry Route

**Category:** File Structure
**Status:** Active
**Description:** Campaign pages live under explicit marketing paths in the Next.js `app/` tree, while `/` can redirect to the primary campaign path when needed.
**Implementation:**
- Put the landing page at `app/s/adv/<campaign>/page.tsx`.
- Prefer `next.config.js` redirects for root-to-campaign forwarding when the root route does not need its own UI.
**Rationale:** Keeps marketing URLs stable without duplicating the page component.

### Global Font Ownership

**Category:** File Structure
**Status:** Active
**Description:** Shared font-face declarations belong in `app/globals.css`, not scattered across secondary stylesheet imports.
**Implementation:**
- Store self-hosted font files under `public/fonts/`.
- Define `@font-face` rules in `app/globals.css`.
- Apply the default body font there.
**Rationale:** Keeps app-wide typography centralized for Next.js layouts.


## Data Flow

<!-- Patterns for how data moves through the system -->

### Immediate Content Visibility

**Category:** Architecture
**Status:** Active
**Description:** Marketing copy and section content should render immediately instead of starting hidden behind reveal animations.
**Implementation:**
- Keep `.reveal` and `.reveal-fast` visible by default in `app/globals.css`.
- Do not attach IntersectionObserver-based fade-in logic for static page copy.
**Rationale:** Prevents text from appearing late or fading in/out on load.


## Error Handling

<!-- Standard approaches to errors, validation, and recovery -->
