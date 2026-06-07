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
- Every Coding Agent phase report should follow `docs/AGENT_REPORT_TEMPLATE.md` so warnings, blockers, validation commands, visual checks, and changed files are easy to review.

## Current Phase
Phase 14: Automated test coverage completed.

Goal: add focused automated tests for existing MVP behavior without changing app features, backend, real AI, auth, payments, production dependencies, real patient data, or medical claims.

## Completed Phases
- Phase 0: Initial project foundation docs for the WordPress version.
- Phase 1 WordPress skeleton: completed but abandoned after the React pivot.
- Phase 1 Restart: React app skeleton.
- Phase 2: React data model and localStorage booking service.
- Phase 3: Public booking form.
- Phase 4: Simple CRM booking dashboard.
- Phase 5: Basic analytics overview.
- Phase 6: Mock AI assistant.
- Phase 7: Portfolio polish and presentation readiness.
- Phase 8: Final QA pass and portfolio-readiness review.
- Phase 9: Portfolio walkthrough and screenshot preparation docs.
- Phase 10: Portfolio screenshot capture and documentation.
- Phase 11: Deployment preparation.
- Phase 12: First public Vercel deployment.
- Phase 13: Portfolio final review and sharing preparation.
- Phase 14: Automated test coverage for existing MVP behavior.

## Next Phase
Optional Phase 15: backend/data persistence planning.

Suggested scope:
- Decide whether the next portfolio step should remain frontend-only or introduce a simple backend.
- If backend is selected, define a small fake/demo-safe data model first.
- Keep real patient data, authentication, payments, and real AI integration out of scope until separately approved.
- No new product features, backend APIs, real AI calls, authentication, payments, or real patient data.

Expected deployment settings:
- Framework: Vite.
- Build command: `npm run build`.
- Output directory: `dist`.
- Environment variables: none required for the current portfolio MVP.
- Live URL: `https://soundcare-ai-booking-crm.vercel.app/`.

## Current Blockers
- Local PATH was adjusted so PowerShell 7, Node/npm, and Git are available from new terminals.
- Portfolio screenshots have been captured into `docs/screenshots/`.
- Deployment preparation is complete.
- Public Vercel deployment is complete.
- Portfolio sharing copy is complete in `docs/PORTFOLIO_COPY.md`.
- Automated test coverage is in place for the core browser-only MVP behavior.

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
7. Mock AI administrative draft generation works safely.
8. README explains installation, features, tech stack, safety notes, and current limitations.
9. Test plan is completed.
10. Nikos can explain the project in an interview.
11. Portfolio walkthrough and screenshot checklist are ready.
12. Portfolio screenshots are captured and documented.
13. The MVP is deployed publicly and linked from README/docs.
14. Portfolio sharing copy is ready for CV, LinkedIn, portfolio pages, and interviews.
15. Automated tests cover the core existing MVP behavior.
