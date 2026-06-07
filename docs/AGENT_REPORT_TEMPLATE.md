# Agent Report Template

Use this template at the end of every Coding Agent phase report.

## Phase Summary
- Phase:
- Goal:
- Expected visible UI change: yes/no
- Actual visible UI change: yes/no

## Folder And Scope Check
- Working folder:
- Required markers found: `.git`, `package.json`, `vite.config.js`, `src`, `docs`
- Confirmed React + Vite: yes/no
- Stopped because wrong folder: yes/no

## Changed Files
List every changed file and explain why it changed.

- `path/to/file`: reason

## Dependencies And Scripts
- Production dependencies added: yes/no
- Dev dependencies added: yes/no
- Scripts changed: yes/no
- If yes, list exact package names and why they were needed.

## Validation Commands
List each command exactly, with result.

- Command:
- Result:
- Notes:

Required when relevant:
- `npm run test`
- `npm run build`
- `git status`

## Visual Check
- Screenshot captured: yes/no
- Screenshot path:
- App URL checked:
- What changed visually:
- If nothing changed visually, explain why that is expected.

## Scope Guard
Confirm each item:

- No new product feature:
- No backend API:
- No real AI/API call:
- No authentication:
- No payments:
- No production dependency unless explicitly approved:
- No real patient data:
- No medical advice, diagnosis, treatment recommendation, or clinical claim:

## Warnings And Blockers
Separate warnings from blockers.

### Blockers
- None, or list exact blocker and what user must do.

### Non-Blocking Warnings
- Warning:
- Why it is not blocking:
- Whether it should be fixed later:

## Git Status
Paste or summarize `git status`.

## What To Commit
Suggested commit message:

```text
type: short description
```

## Open Questions
- None, or list questions that need user decision.
