# Changelog

## 0.11.0 - 2026-06-07
- Completed Phase 9 portfolio walkthrough and screenshot preparation documentation.
- Added `docs/PORTFOLIO_WALKTHROUGH.md` with elevator pitch, problem/goal framing, feature walkthrough, screenshot checklist, interview talking points, limitations, and next improvements.
- Linked the walkthrough from README.
- Updated product owner notes and test plan for screenshot/walkthrough validation.
- Kept app UI, backend APIs, real AI calls, authentication, payments, external libraries, real patient data, medical advice, diagnosis, treatment recommendations, clinical claims, and deployment out of scope.

## 0.10.0 - 2026-06-06
- Completed Phase 8 final QA pass and portfolio-readiness review.
- Verified the full browser MVP flow: feature summary, analytics overview, public booking form, mock AI assistant, CRM dashboard, status updates, reset demo bookings, localStorage persistence, and footer safety notes.
- Updated current-phase documentation and app status copy from Phase 7 portfolio polish to Phase 8 final QA.
- Kept backend APIs, real AI calls, authentication, payments, external libraries, real patient data, medical advice, diagnosis, treatment recommendations, clinical claims, and message sending out of scope.

## 0.9.0 - 2026-06-06
- Added Phase 7 portfolio polish and presentation readiness updates.
- Added a compact feature summary section for booking requests, CRM tracking, analytics overview, and the mock AI draft assistant.
- Added a short footer with portfolio MVP, fake/demo data, and no medical advice notes.
- Refined header copy, spacing, responsive layout, and visual hierarchy while keeping the first screen focused on the working app.
- Updated README, product owner notes, and test plan for the current MVP status and limitations.
- Kept backend APIs, real AI calls, authentication, payments, external libraries, real patient data, medical advice, diagnosis, treatment recommendations, clinical claims, and message sending out of scope.

## 0.8.0 - 2026-06-06
- Added Phase 6 Mock AI Assistant panel.
- Loaded existing fake bookings from the local booking storage helper.
- Added booking, draft type, and tone selectors for administrative draft generation.
- Generated safe local template drafts only, always including the non-medical administrative safety line.
- Added a clear draft action.
- Kept real AI calls, API keys, backend APIs, authentication, payments, external libraries, real patient data, medical advice, diagnosis, treatment recommendations, clinical claims, and message sending out of scope.

## 0.7.0 - 2026-06-06
- Added Phase 5 basic analytics overview cards.
- Counted total, new, scheduled, completed, follow-up, and cancelled bookings from the existing localStorage booking helpers.
- Used the existing booking status constants as the analytics source of truth.
- Refreshed analytics after fake booking submissions, dashboard status changes, and demo booking resets.
- Kept AI assistant logic, backend APIs, authentication, payments, external libraries, real patient data, and medical advice out of scope.

## 0.6.0 - 2026-06-06
- Added Phase 4 CRM-style booking dashboard.
- Listed bookings from the existing localStorage booking helpers.
- Added per-booking status dropdowns using the existing booking status source of truth.
- Persisted status changes with an updated `updatedAt` timestamp.
- Added a reset demo bookings action using the existing `resetBookings()` helper.
- Kept analytics UI, AI assistant logic, backend APIs, authentication, payments, and external libraries out of scope.

## 0.5.0 - 2026-06-06
- Added Phase 3 public booking request form.
- Added required field validation for customer name, customer email, and service.
- Saved fake/demo booking requests to localStorage through the existing Phase 2 storage helpers.
- Kept dashboard, analytics, AI assistant logic, backend APIs, authentication, payments, and external libraries out of scope.

## 0.4.0 - 2026-06-06
- Added Phase 2 booking status constants in one place.
- Added fake demo booking records for local development and portfolio testing.
- Added localStorage helper functions for loading, saving, and resetting bookings.
- Kept the React UI skeleton unchanged with no booking form, dashboard, analytics, backend, authentication, payments, or AI logic added.

## 0.3.0 - 2026-06-06
- Removed the obsolete WordPress plugin skeleton files and folders.
- Added a minimal React + Vite app skeleton.
- Added placeholder panels for future Booking Form, CRM Dashboard, Analytics, and Mock AI Assistant.
- Kept Phase 1 free of booking data, localStorage, backend APIs, analytics behavior, and AI logic.

## 0.2.0 - 2026-06-06
- Pivoted the project from WordPress plugin MVP to React app MVP.
- Updated project goal, spec, roadmap, decisions, test plan, README, and learning notes.
- Marked the existing WordPress skeleton as obsolete.
- Prepared the next Coding Agent prompt for a React + Vite restart.

## 0.1.1 - 2026-06-06
- Reviewed the Phase 1 WordPress plugin skeleton with static checks.
- Confirmed no database table, shortcode, REST endpoint, AI logic, or external dependency appears in plugin code.
- Prepared Phase 2 for adding the bookings database table.
- Status: superseded by React pivot.

## 0.1.0 - 2026-06-06
- Added the Phase 1 WordPress plugin skeleton.
- Added the main plugin header, activation placeholder, admin placeholder page, starter assets, and uninstall guard.
- Confirmed this phase does not add a database table, booking form, REST API endpoint, or AI logic.
- Status: superseded by React pivot.

## 0.0.1 - 2026-06-06
- Created initial product documentation.
- Defined MVP scope and non-goals.
- Added roadmap, decisions log, prompt log, learning notes, and test plan.
- Prepared the first Coding Agent prompt for the WordPress plugin skeleton.
