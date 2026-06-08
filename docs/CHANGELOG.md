# Changelog

## 0.27.0 - 2026-06-08
- Completed Phase 27 GitHub presentation polish.
- Reworked `README.md` into a recruiter-friendly GitHub landing page with badges, live demo link, embedded screenshots, project purpose, core features, architecture notes, testing summary, deployment settings, limitations, and documentation links.
- Moved the first impression away from internal phase history and toward what the app demonstrates.
- Kept claims realistic: junior portfolio project, browser-safe Supabase insert proof, local-only admin dashboard workflow, no medical advice, no real patient data, no auth, no payments, and no real AI API.
- Kept app source, UI behavior, dependencies, backend policies, schema, screenshots, and deployment unchanged.

## 0.26.0 - 2026-06-08
- Completed Phase 26 professional UI polish and useful dashboard cleanup.
- Replaced the decorative client hero panel with a useful clinic reception visual, scheduling response detail, front desk hours, and service categories.
- Improved the appointment form presentation with better placeholders, autocomplete hints, date/time bounds, note guidance, and a notes character counter.
- Reworked the client help section into modern support cards for front desk contact and urgent-care guidance.
- Removed dead admin sidebar controls and made sidebar navigation link to Dashboard, Recent bookings, and Message drafts.
- Made the admin logo return to the client booking page.
- Reworked Recent bookings as a scrollable work area with a sticky table header, clearer status controls, request count, and cleaner note display.
- Renamed the draft assistant heading to Message drafts while preserving the non-medical administrative safety line.
- Added a real reception image from Pexels and captured Phase 26 client, admin, and mobile screenshots.
- Kept routing, backend behavior, auth, payments, real AI, Supabase schema, new libraries, real patient data, medical advice, diagnosis, treatment recommendations, and clinical claims out of scope.

## 0.25.0 - 2026-06-08
- Completed Phase 25 final portfolio QA and documentation polish.
- Confirmed the real project folder is the React + Vite SoundCare AI Booking CRM repository, not the old Codex folder.
- Ran the full Vitest suite and production build through direct Node fallback commands because `npm` was not available on PATH in this shell.
- Verified local browser flows: client booking page, admin dashboard, required validation, invalid email validation, valid booking submission, success feedback, dashboard listing, analytics refresh, status update, administrative draft safety line, mobile overflow, and clean console.
- Verified the live Vercel deployment at `https://soundcare-ai-booking-crm.vercel.app/`.
- Submitted one fake/test booking on the live app and confirmed success feedback, dashboard update, analytics update, clean visible UI wording, clean console, and usable mobile layout.
- Refreshed final portfolio screenshots:
  - `docs/screenshots/phase-25-final-client-page.png`
  - `docs/screenshots/phase-25-final-admin-dashboard.png`
  - `docs/screenshots/phase-25-final-mobile-page.png`
- Reconfirmed the portfolio boundaries: junior React + Vite app, professional client booking page and admin dashboard, Supabase only as browser-safe booking insert proof, local-only admin reads/status updates until auth/RLS role design, fake/demo data only, and no medical advice.
- Kept app source, UI redesign, authentication, payments, real AI, backend admin reads, Supabase schema changes, new libraries, real patient data, medical advice, diagnosis, treatment recommendations, and clinical claims out of scope.

## 0.24.0 - 2026-06-08
- Completed Phase 24 booking save feedback polish.
- Updated the booking form success confirmation so it still clearly confirms the appointment request was received.
- Added a small client-friendly save-status line that says when the request was saved to the booking system.
- Added a client-friendly unavailable message when online saving is skipped or fails, without exposing internal error details.
- Preserved the existing createBookingRequest flow, local fallback behavior, optional remote insert attempt, form reset behavior, dashboard refresh, and analytics refresh.
- Expanded BookingForm tests for successful online save status, unavailable/failed online save status, and the existing valid submit flow.
- Captured `docs/screenshots/phase-24-booking-save-status.png`.
- Kept authentication, payments, real AI, backend admin reads, schema changes, new libraries, real patient data, and medical advice out of scope.

## 0.23.0 - 2026-06-08
- Completed Phase 23 AI-assisted development documentation.
- Added `docs/AI_ASSISTED_DEVELOPMENT.md` explaining how AI assistance supported planning, implementation prompts, local debugging, review, validation, documentation, and portfolio storytelling.
- Documented what the developer still owned: product decisions, scope choices, output review, manual browser testing, screenshot checks, validation commands, Git status review, and tradeoff explanations.
- Summarized the phase-based workflow from React pivot through validation polish.
- Documented key tradeoffs around React + Vite, localStorage-first persistence, Supabase insert-only proof, mock administrative assistant behavior, fake/demo data, no auth/payments, and the professional UI redesign.
- Linked the AI-assisted development note from README, portfolio copy, interview readiness, roadmap, product owner notes, and test plan.
- Kept app source code, UI, CSS, dependencies, Supabase logic, auth, payments, real AI, backend APIs, and real patient data out of scope.

## 0.22.0 - 2026-06-08
- Completed Phase 22 professional booking form validation polish.
- Made full name, email address, phone number, service, preferred date, and preferred time required on the client appointment request form.
- Added stronger email validation so empty email and invalid email format show distinct client-facing messages.
- Updated required field labels with asterisks and added clear validation messages for each required booking field.
- Preserved the existing booking request save flow, local fallback behavior, optional remote insert attempt, and professional success confirmation copy.
- Expanded BookingForm tests for empty submit validation, invalid email format, successful submission, and the existing save-flow call.
- Kept authentication, payments, backend APIs, real AI, real patient data, and technical persistence details out of the client UI.

## 0.21.0 - 2026-06-07
- Completed Phase 21 professional UI redesign.
- Reworked the app into two simple state-driven views: `Book Appointment` for clients and `Admin Dashboard` for internal review.
- Replaced visible portfolio/demo implementation copy in the app UI with SoundCare Hearing Care product copy.
- Redesigned the public booking page with a professional header, large appointment hero, CSS clinic/reception visual, polished form card, success confirmation, help section, and urgent-care safety note.
- Redesigned the admin surface with a dark teal sidebar, topbar, overview analytics cards, booking table, professional status badges, styled status controls, and renamed Administrative Draft Assistant.
- Preserved booking validation, localStorage fallback, Supabase insert attempt, dashboard listing, status updates, analytics refresh, and the required assistant safety line.
- Added UI guardrail tests for the new client/admin views, success confirmation, and forbidden visible wording.
- Captured `docs/screenshots/phase-21-client-booking-page.png`, `docs/screenshots/phase-21-admin-dashboard-page.png`, and `docs/screenshots/phase-21-mobile-booking-page.png`.
- Kept authentication, payments, real AI API calls, backend API routes, production medical claims, real patient data, diagnosis, treatment recommendations, and HIPAA/GDPR claims out of scope.

## 0.20.0 - 2026-06-07
- Completed Phase 20 interview readiness and portfolio pause-point cleanup.
- Added `docs/INTERVIEW_READINESS.md` with a final junior-portfolio demo script, one-minute explanation, three-minute walkthrough, interview answers, safety boundaries, and what not to overclaim.
- Updated README, portfolio copy, portfolio walkthrough, roadmap, product owner notes, and test plan to reflect the current state: deployed React + Vite MVP, localStorage dashboard workflow, Supabase fake/demo insert proof, automated tests, and clear limitations.
- Marked the project as a good pause point for a junior portfolio before any larger authenticated admin/backend phase.
- Kept app behavior, UI, public read, public update/delete, auth, payments, real AI, secret/service keys, real patient data, medical advice, diagnosis, treatment recommendations, and clinical claims out of scope.

## 0.19.0 - 2026-06-07
- Completed Phase 19 Supabase integration QA and documentation cleanup.
- Added `docs/SUPABASE_VERIFICATION.md` with live setup, table, RLS, deployment, data flow, safety boundary, limitation, and next-step notes.
- Documented that Vercel environment variables are configured for Supabase demo inserts.
- Documented that a fake booking submitted through the live app appeared in the Supabase `bookings` table.
- Documented that an external browser-safe REST insert returned HTTP `201`.
- Clarified that dashboard reads, analytics, status updates, reset behavior, and mock assistant booking selections remain localStorage-only until an auth/admin phase is approved.
- Kept app behavior, UI, public read, public update/delete, auth, payments, real AI, secret/service keys, real patient data, medical advice, diagnosis, treatment recommendations, and clinical claims out of scope.

## 0.18.0 - 2026-06-07
- Completed Phase 18 Supabase demo insert integration.
- Installed `@supabase/supabase-js`.
- Added `src/services/supabaseClient.js` using `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`.
- Updated `src/services/bookingRepository.js` so fake/demo booking requests save to localStorage and attempt Supabase insert when configured.
- Added fallback behavior so missing Supabase config or insert errors do not break local demo booking saves.
- Added `bookingToDatabaseInsertRow()` to omit local-only ids and timestamps from Supabase inserts, letting Postgres generate UUID/timestamps.
- Updated the booking form submit path to use the async repository request flow.
- Added `.env.example` and updated `.gitignore` so `.env.local` stays out of Git.
- Added `docs/supabase/public-demo-insert-policy.sql` to record the manually applied insert-only RLS policy.
- Captured `docs/screenshots/phase-18-visual-check.png` to confirm the app still loads normally with localStorage fallback when Supabase env vars are not configured locally.
- Kept public read, dashboard reads, status updates, auth, payments, real AI, secret/service keys, real patient data, medical advice, diagnosis, treatment recommendations, and clinical claims out of scope.

## 0.17.0 - 2026-06-07
- Completed Phase 17 persistence repository layer.
- Added `src/services/bookingRepository.js` as the booking persistence boundary used by the React components.
- Added repository tests for localStorage-backed get/add/status-update/reset behavior.
- Added mapping tests for frontend camelCase booking objects and future Supabase/Postgres snake_case rows.
- Updated analytics, booking form, mock assistant, and dashboard components to use the repository instead of importing localStorage helpers directly.
- Captured `docs/screenshots/phase-17-visual-check.png` to confirm the UI stayed visually unchanged after the internal persistence refactor.
- Kept browser localStorage as the active persistence layer.
- Kept visible UI, Supabase client code, backend APIs, environment files, secrets, authentication, payments, real AI calls, production dependencies, real patient data, medical advice, diagnosis, treatment recommendations, and clinical claims out of scope.

## 0.16.0 - 2026-06-07
- Completed Phase 16 Supabase setup planning and migration draft.
- Added `docs/SUPABASE_SETUP_PLAN.md` for later manual Supabase project setup, RLS decisions, environment variable names, localStorage continuity, fake/demo data warnings, and Phase 17 guidance.
- Added `docs/supabase/bookings-migration-draft.sql` with a draft `bookings` table, UUID default, status check constraint, optional `updated_at` trigger, RLS enablement, and conservative access notes.
- Linked the setup plan and migration draft from README and `docs/BACKEND_PLAN.md`.
- Aligned `package.json` and `package-lock.json` version metadata with the Phase 16 changelog version.
- Updated roadmap, product owner notes, and test plan for Phase 16 completion and suggested Phase 17 persistence repository work.
- Kept the app browser-only with localStorage as the active persistence layer.
- Kept app behavior, visible UI, Supabase client code, backend APIs, environment files, secrets, authentication, payments, real AI calls, production dependencies, real patient data, medical advice, diagnosis, treatment recommendations, and clinical claims out of scope.

## 0.15.0 - 2026-06-07
- Completed Phase 15 backend/data persistence planning.
- Added `docs/BACKEND_PLAN.md` for a future Supabase `bookings` table, field types, status mapping, fake/demo data rules, security/privacy notes, RLS planning, environment variable rules, migration/setup plan, frontend integration path, risks, decisions, and recommended next phases.
- Linked the backend plan from README.
- Updated roadmap, product owner notes, and test plan for Phase 15 completion and Phase 16 Supabase setup planning.
- Kept the app browser-only with localStorage as the active persistence layer.
- Kept app behavior, visible UI, Supabase client code, backend APIs, environment files, secrets, authentication, payments, real AI calls, production dependencies, real patient data, medical advice, diagnosis, treatment recommendations, and clinical claims out of scope.

## 0.14.0 - 2026-06-07
- Completed Phase 14 automated test coverage for existing MVP behavior.
- Added Vitest, jsdom, and React Testing Library as dev-only test tooling.
- Added focused tests for booking localStorage helpers, analytics summary counts, mock assistant administrative safety-line output, and booking form required-field validation.
- Added `npm run test` and documented the test command in README and the test plan.
- Captured a desktop visual check screenshot at `docs/screenshots/phase-14-visual-check.png`.
- Added `docs/AGENT_REPORT_TEMPLATE.md` to standardize future Coding Agent reports, warnings, validation details, and visual checks.
- Kept app features, backend APIs, real AI calls, authentication, payments, production dependencies, real patient data, medical advice, diagnosis, treatment recommendations, clinical claims, and UI redesign out of scope.

## 0.13.1 - 2026-06-07
- Completed Phase 13 portfolio final review and sharing preparation.
- Added `docs/PORTFOLIO_COPY.md` with project title, portfolio summary, CV/LinkedIn copy, case-study paragraph, feature bullets, tech stack, learning notes, interview talking points, limitations, suggested next improvements, live demo link, and GitHub repo link.
- Linked the new portfolio copy document from README.
- Updated roadmap, product owner notes, and test plan for Phase 13 completion and the next optional test coverage phase.
- Confirmed existing screenshots remain in `docs/screenshots/` and are referenced by the portfolio walkthrough.
- Kept app features, backend APIs, real AI calls, authentication, payments, external libraries, real patient data, medical advice, diagnosis, treatment recommendations, and clinical claims out of scope.

## 0.13.0 - 2026-06-07
- Completed Phase 12 first public deployment to Vercel.
- Published the live demo at `https://soundcare-ai-booking-crm.vercel.app/`.
- Validated the deployed app loads, accepts a fake booking submission, updates analytics and dashboard state, and generates a safe mock administrative draft.
- Added a small SVG favicon to avoid the deployed browser favicon 404.
- Updated README and project docs with the live deployment URL.
- Completed Phase 11 deployment preparation documentation.
- Confirmed the app is React + Vite with `npm run build` as the production build command and `dist` as the static output directory.
- Documented recommended static deployment settings for Vercel or Netlify.
- Confirmed no `.env` files or tracked secrets are present.
- Kept app features, backend APIs, real AI calls, authentication, payments, external libraries, real patient data, medical advice, diagnosis, treatment recommendations, clinical claims, and automatic deployment out of scope.

## 0.12.2 - 2026-06-07
- Replaced internal phase labels in the visible app UI with portfolio-friendly product labels.
- Refreshed the portfolio screenshot set so screenshots match the current UI copy.
- Kept app behavior, backend APIs, real AI calls, authentication, payments, real patient data, medical advice, diagnosis, treatment recommendations, and clinical claims out of scope.

## 0.12.1 - 2026-06-07
- Completed a pre-deployment project audit pass after Phase 10.
- Removed the unused `src/components/PlaceholderPanel.jsx` skeleton component.
- Aligned `package.json` and `package-lock.json` version metadata with the current changelog version range.
- Updated the roadmap to match the actual React portfolio MVP phases and current next step.
- Kept app features, backend APIs, real AI calls, authentication, payments, external libraries, real patient data, medical advice, diagnosis, treatment recommendations, clinical claims, and deployment out of scope.

## 0.12.0 - 2026-06-07
- Completed Phase 10 portfolio screenshot capture and documentation.
- Added `docs/screenshots/first-screen.png`, `analytics-overview.png`, `booking-form.png`, `crm-dashboard.png`, `status-change.png`, `mock-ai-draft.png`, `mobile-layout.png`, and `footer-safety-note.png`.
- Updated the portfolio walkthrough, README, product owner notes, and test plan to reference the captured screenshot set.
- Updated the app status label to read as portfolio-ready instead of an internal QA phase during screenshot review.
- Verified the local app loaded without framework error overlays or console warnings/errors during screenshot capture.
- Verified the mobile capture had no horizontal overflow.
- Used fake/demo data only, including the built-in demo records and `Alex Demo <alex.demo@example.com>`.
- Kept app features, UI, backend APIs, real AI calls, authentication, payments, external libraries, real patient data, medical advice, diagnosis, treatment recommendations, clinical claims, and deployment out of scope.

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
