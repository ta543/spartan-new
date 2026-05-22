# Debugging Records & Issue Tracking

*This file is the single source of truth for debugging sessions, issues, and troubleshooting history in this project.*

## Purpose

Records debugging sessions, error patterns, root causes, solutions, and recurring issues. This file enables systematic problem-solving, prevents re-solving the same bugs, and provides context for future debugging efforts. It supports Roo Code's Debug Mode by maintaining a persistent record of diagnostic work.

## When to Update This File

Update this file when:
- Encountering a new error, bug, or unexpected behavior
- Identifying a root cause during investigation
- Applying a fix or workaround (successful or not)
- Noticing a recurring issue pattern
- During systematic debugging sessions (e.g., in Debug Mode)
- Discovering performance issues, edge cases, or race conditions
- After verifying a fix works across relevant scenarios

**Do not** log transient one-liners or obvious typos. Focus on issues requiring investigation or likely to recur.

## Format

Each entry follows this structure:

```
### [YYYY-MM-DD HH:MM] — [Short Issue Title]

**Status:** Open | Investigating | Fixed | Recurring | Won't Fix
**Symptoms:** What went wrong. Error messages, stack traces, reproduction steps.
**Environment:** dependencies, affected files.
**Root Cause:** (if found) What caused it.
**Investigation Steps:**
- Step 1: What was tried, results.
- Step 2: etc.
**Solution:** What fixed it (code changes, config, workaround).
**Prevention:** How to avoid this in future (patterns, tests, docs).
**Related:** Links to DECISIONS.md entries, commits, or tickets.
```

Mark as **Recurring** if the issue returns.

If this file gets corrupted, re-create it. 
CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

---

## Current Issues

<!-- Newest debugging entries first. Closed issues move to "Resolved Issues" below. -->

## Resolved Issues

<!-- Historical debugging records -->

### [2026-03-18 15:40] — Root app redirect crashes under Turbopack

**Status:** Fixed
**Symptoms:** Visiting `/` triggered `TypeError: handler is not a function` plus a Turbopack panic while compiling the root app page.
**Environment:** Next.js app router, `app/page.tsx`, Turbopack dev runtime.
**Root Cause:** The root route redirect implemented as an app page caused a Turbopack/runtime failure in this setup.
**Investigation Steps:**
- Reviewed the reported stack trace and confirmed the only root route code was `redirect("/s/adv/cellular-energy-discovery")` in `app/page.tsx`.
- Moved the redirect responsibility to `next.config.js` and removed the root page file.
**Solution:** Configure the `/` → `/s/adv/cellular-energy-discovery` redirect in `next.config.js` instead of rendering a redirecting app page.
**Prevention:** Use config-level redirects for simple root campaign forwarding unless the root route needs its own rendered UI.
**Related:** `next.config.js`, `workspace/DECISIONS.md`, `workspace/PATTERNS.md`.

### [2026-03-18 15:29] — npm install blocked by registry policy

**Status:** Fixed
**Symptoms:** `npm install` fails with `403 Forbidden` for `https://registry.npmjs.org/@types%2fnode`, preventing dependency installation and a full Next.js build in this environment.
**Environment:** package.json, npm registry access in the container.
**Root Cause:** External package access is restricted by the environment's registry/security policy rather than by project configuration.
**Investigation Steps:**
- Ran `npm install` after the Next.js migration updates.
- Confirmed the same 403 response after simplifying dependencies.
**Solution:** Proceed with file-level validation (`git diff --check`, Python assertions) and document the limitation for future sessions.
**Prevention:** Treat npm-dependent verification as environment-limited unless registry access is restored.
**Related:** CHANGELOG.md entry for 2026-03-18.
