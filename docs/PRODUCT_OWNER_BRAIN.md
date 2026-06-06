# Product Owner Brain

## Project Goal
SoundCare AI Booking CRM is a React portfolio MVP for a demo hearing-care clinic. It will show that Nikos can build a practical frontend application with React, state management, forms, validation, dashboard UI, local data persistence, and a safe mock AI-assistant module.

## Target Job Alignment
This project is designed for junior software developer roles, with stronger focus on React/frontend skills after the pivot.

It should demonstrate:

- React component structure
- State management with hooks
- Form handling and validation
- Local data persistence with browser localStorage
- Dashboard and CRM-style UI
- Filtering and status updates
- Basic analytics from app state
- Safe mock AI-assisted text generation
- Clean documentation and portfolio storytelling
- Ability to explain tradeoffs in an interview

## Nikos Skill Level
Nikos is a beginner/junior developer. He knows some WordPress, Elementor, HTML, CSS, basic JavaScript, and basic Git. He is now choosing React, so the project should teach React step by step without jumping into backend complexity too early.

The project must teach the "why" behind each step, not only produce code.

## Communication Rules
- Explanations to Nikos should be in Greek.
- Prompts for the Coding Agent should be in English.
- Work must happen phase by phase.
- Each phase must have acceptance criteria and validation steps.
- The Coding Agent should make small scoped changes, inspect files first, and avoid unrelated refactors.
- Nikos should read the output and bring back logs, screenshots, changed files, and errors.

## Current Phase
Phase 4: Simple CRM booking dashboard.

Goal: let a clinic admin review fake/demo booking requests from localStorage, update booking status, and reset browser data back to demo bookings.

## Completed Phases
- Phase 0: Initial project foundation docs for the WordPress version.
- Phase 1 WordPress skeleton: completed but abandoned after the React pivot.
- Phase 1 Restart: React app skeleton.
- Phase 2: React data model and localStorage booking service.
- Phase 3: Public booking form.

## Next Phase
Phase 5: Basic analytics.

Only start this after the Phase 4 booking dashboard is validated.

## Current Blockers
- Git is not available in the current PowerShell path.

## Important Decisions
- Pivot from WordPress plugin to React app on 2026-06-06.
- Use React + Vite for the MVP.
- Use JavaScript instead of TypeScript at first to keep the project beginner-friendly.
- Use localStorage for the first data persistence layer.
- Add a real backend only after the React MVP works.
- Start with mock AI output before optional real API integration.
- Never store or use real patient data.
- Do not add Next.js, Laravel, Docker, payments, or complex CI/CD.

## Definition of Done for MVP
The MVP is complete when:

1. The React app runs locally.
2. A visitor can submit a booking request.
3. Booking requests are saved locally.
4. The admin dashboard lists bookings.
5. The admin can update booking status.
6. The app shows basic analytics.
7. Mock AI summary, next action, and follow-up message work safely.
8. README explains installation, features, screenshots, architecture, and learning outcomes.
9. Test plan is completed.
10. Nikos can explain the project in an interview.
