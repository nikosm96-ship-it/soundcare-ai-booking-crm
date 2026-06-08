# Roadmap

## Project Status
SoundCare AI Booking CRM is currently a portfolio-ready junior React + Vite MVP with a professional two-view booking CRM UI, polished client booking validation, and client-friendly booking save feedback.

The current version is intentionally scoped for a junior portfolio. It uses fake/demo booking data, browser localStorage for the dashboard workflow, Supabase for fake/demo booking inserts, and safe template-based administrative draft text. It now presents a public `Book Appointment` view and an internal `Admin Dashboard` view. It does not include public booking reads, authenticated admin database updates, real AI calls, payments, real patient data, medical advice, diagnosis, treatment recommendations, or clinical claims.

## Completed Phases

### Phase 24: Booking Save Feedback
Goal: Improve the booking form success confirmation so clients understand whether the appointment request was saved online or received while online saving is unavailable.

Completed:
- Preserved the existing successful appointment request confirmation.
- Added a small save-status line for successful online booking-system saves.
- Added a small unavailable-status line when online saving is skipped or fails.
- Kept internal error details out of the visible client confirmation.
- Preserved form reset, local fallback, optional remote insert attempt, dashboard refresh, and analytics refresh after submit.
- Added BookingForm tests for online save, unavailable/failed online save, and the existing valid submit path.
- Captured `docs/screenshots/phase-24-booking-save-status.png`.
- Kept auth, payments, real AI, backend admin reads, schema changes, new libraries, real patient data, and medical advice out of scope.

### Phase 23: AI-Assisted Development Documentation
Goal: Explain how AI assistance was used during the project in a professional, honest, junior-developer-friendly way.

Completed:
- Added `docs/AI_ASSISTED_DEVELOPMENT.md`.
- Documented how AI supported planning, implementation prompts, local debugging, output review, validation, documentation, and portfolio storytelling.
- Documented what the developer still owned: scope, product decisions, manual testing, screenshot review, output review, Git status checks, and tradeoff explanations.
- Summarized the phase-based workflow and key technical/product tradeoffs.
- Reinforced safety and privacy boundaries, including no real patient data, medical advice, diagnosis, treatment recommendations, frontend secret keys, or public Supabase admin reads/status updates.
- Kept app source, UI, CSS, dependencies, Supabase logic, auth, payments, real AI, backend APIs, and real patient data unchanged.

### Phase 22: Professional Booking Form Validation Polish
Goal: Improve the client appointment request form so validation feels realistic and production-aware.

Completed:
- Required full name, email address, phone number, service, preferred date, and preferred time.
- Added distinct email messages for empty email and invalid email format.
- Updated all required visible labels with asterisks.
- Preserved the existing booking request persistence flow and professional success confirmation.
- Added BookingForm tests for empty required fields, invalid email, valid submit success, and save-flow invocation.
- Kept technical persistence details and portfolio implementation wording out of the client UI.

### Phase 21: Professional UI Redesign
Goal: Redesign the visible product surface as a professional hearing-care booking CRM.

Completed:
- Two-view state navigation for `Book Appointment` and `Admin Dashboard`.
- Public appointment request page with SoundCare Hearing Care branding, hero copy, CSS clinic/reception visual, polished form, confirmation state, help section, and urgent-care safety note.
- Admin dashboard with dark teal sidebar, topbar, analytics cards, booking table, status badges, status update controls, and Administrative Draft Assistant.
- Visible UI copy cleanup to remove portfolio/demo implementation wording from the app surface.
- Phase 21 screenshots for desktop client, desktop admin, and mobile booking views.
- Tests and build updated for the redesigned UI.

### Phase 0: Project Foundation
Goal: Create initial project documentation and define the MVP direction.

Status: Completed for the original WordPress direction, then superseded by the React pivot.

### Phase 1 Restart: React App Skeleton
Goal: Replace the obsolete WordPress plugin skeleton with a clean React + Vite starter app.

Completed:
- React + Vite app structure.
- Documentation preserved in `docs/`.
- Obsolete WordPress PHP/plugin files removed.
- Simple SoundCare AI Booking CRM app shell.

### Phase 2: Data Model And Local Storage
Goal: Define the booking data model, demo bookings, booking statuses, and localStorage helpers.

Completed:
- Booking status constants.
- Fake/demo booking records.
- `getBookings()`, `saveBookings(bookings)`, and `resetBookings()` helpers.
- Invalid localStorage JSON fallback to demo bookings.

### Phase 3: Public Booking Form
Goal: Add a public fake/demo booking request form.

Completed:
- Customer name, email, phone, service, preferred date/time, and notes fields.
- Required-field validation for name, email, and service.
- New fake bookings saved to localStorage with `New` status.
- Success and validation feedback.

### Phase 4: CRM Booking Dashboard
Goal: Let the demo admin review and update booking requests.

Completed:
- Booking list from localStorage/demo data.
- Per-booking status dropdown.
- Persisted status updates.
- Reset demo bookings action.
- Clear empty state.

### Phase 5: Basic Analytics
Goal: Show simple booking metrics from the existing booking data.

Completed:
- Total bookings count.
- Counts by booking status.
- Analytics refresh after booking submissions, status changes, and demo reset.

### Phase 6: Mock AI Assistant
Goal: Add safe mock AI-style administrative draft generation.

Completed:
- Booking selector.
- Draft type and tone controls.
- Template-based administrative draft generation.
- Required non-medical administrative safety line.
- Clear draft action.
- No real AI calls, API keys, backend calls, or message sending.

### Phase 7: Portfolio Polish
Goal: Improve portfolio presentation without turning the app into a marketing landing page.

Completed:
- Feature summary.
- Footer safety notes.
- Header and layout polish.
- Responsive layout improvements.
- README and docs updates.

### Phase 8: Final QA
Goal: Test the full MVP flow before portfolio documentation.

Completed:
- Desktop and mobile layout checks.
- Booking submission flow.
- Analytics refresh flow.
- Dashboard status update flow.
- localStorage persistence check.
- Reset demo bookings check.
- Mock assistant safety check.
- Production build validation.

### Phase 9: Portfolio Walkthrough
Goal: Prepare a clear explanation for interviews and portfolio review.

Completed:
- `docs/PORTFOLIO_WALKTHROUGH.md`.
- Elevator pitch, feature walkthrough, limitations, interview talking points, and next improvements.
- README link to the walkthrough.

### Phase 10: Portfolio Screenshots
Goal: Capture and document portfolio screenshots.

Completed:
- Screenshot set in `docs/screenshots/`.
- README and walkthrough references to screenshots.
- Fake/demo data only.
- No app feature expansion.

### Phase 11: Deployment Preparation
Goal: prepare the project for a first public portfolio deployment.

Completed:
- Confirmed the project is a React + Vite app.
- Confirmed the local production build command is `npm run build`.
- Confirmed the deployment output directory is `dist`.
- Confirmed no `.env` files or tracked secrets are present.
- Added deployment notes to README/docs.
- Kept localStorage/demo mode as the current browser-only data layer.
- Did not add backend APIs, real AI calls, authentication, payments, new libraries, or real patient data.

### Phase 12: First Public Deployment
Goal: deploy the existing portfolio MVP to a public static hosting target after explicit approval.

Completed:
- Deployed the current static Vite app to Vercel.
- Published live URL: `https://soundcare-ai-booking-crm.vercel.app/`.
- Confirmed the deployed URL loads the app.
- Confirmed booking form, dashboard, analytics, and mock assistant work with fake/demo localStorage data.
- Added a small SVG favicon to avoid a deployed favicon 404.
- Confirmed no secrets, backend APIs, real AI calls, authentication, payments, or real patient data were introduced.

### Phase 13: Portfolio Final Review
Goal: review the live deployment and GitHub repository as a portfolio artifact before sharing it publicly.

Completed:
- Reviewed the React + Vite project structure, README, portfolio walkthrough, screenshots folder, and documented live deployment URL.
- Added `docs/PORTFOLIO_COPY.md` with CV, LinkedIn, case-study, feature, tech stack, learning, interview, limitation, improvement, live demo, and GitHub repo copy.
- Linked the portfolio copy document from README.
- Confirmed the deployed app remains documented as browser-only with fake/demo data.
- Kept app features, backend APIs, real AI calls, authentication, payments, external libraries, and real patient data out of scope.

### Phase 14: Automated Test Coverage
Goal: add focused automated tests for the existing portfolio MVP behavior without expanding product scope.

Completed:
- Added Vitest, jsdom, and React Testing Library as dev-only test tooling.
- Added `npm run test`.
- Tested booking localStorage helper fallback, save/load, and reset behavior.
- Tested analytics total and status counts.
- Tested mock assistant output includes the required non-medical administrative draft safety line.
- Tested booking form empty-submit validation for name, email, and service.
- Confirmed the app still loads with no expected visible UI change.

### Phase 15: Backend/Data Persistence Planning
Goal: plan a future Supabase database persistence layer without connecting a backend yet.

Completed:
- Added `docs/BACKEND_PLAN.md`.
- Documented why localStorage is enough for the current portfolio MVP but not enough for a future cross-browser booking workflow.
- Selected Supabase as the preferred future backend option.
- Proposed a `bookings` table, fields, Postgres/Supabase types, and status mapping from the current booking constants.
- Documented fake/demo data policy, privacy notes, RLS planning notes, environment variable rules, migration/setup plan, frontend integration plan, out-of-scope items, risks, decisions, and recommended next phases.
- Kept the app browser-only with localStorage as the current persistence layer.
- Did not add Supabase client code, backend APIs, environment files, secrets, auth, payments, real AI calls, real patient data, production dependencies, or visible UI changes.

### Phase 16: Supabase Setup Planning And Migration Draft
Goal: prepare the Supabase project setup and database migration plan without changing app behavior.

Completed:
- Added `docs/SUPABASE_SETUP_PLAN.md`.
- Added `docs/supabase/bookings-migration-draft.sql`.
- Drafted the `bookings` table, status constraint, optional `updated_at` trigger, and RLS enablement.
- Documented conservative RLS boundaries: no public read/update/delete by default, public insert requires explicit approval, and admin read/write requires a future auth/admin phase.
- Documented future environment variable names without creating `.env` files or adding secrets.
- Kept localStorage as the active app persistence layer.
- Did not add Supabase client code, backend APIs, environment files, secrets, auth, payments, real AI calls, real patient data, production dependencies, or visible UI changes.

### Phase 17: Persistence Repository Layer
Goal: add a small booking persistence repository/service boundary while keeping localStorage as the active implementation.

Completed:
- Added `src/services/bookingRepository.js` as the persistence boundary used by React components.
- Kept localStorage as the active implementation behind that boundary.
- Added tests for repository get/add/status-update/reset behavior.
- Added mapping tests for current frontend camelCase booking fields and future snake_case database fields.
- Kept the visible UI unchanged.
- Did not install `@supabase/supabase-js`.
- Did not add backend APIs, authentication, payments, real AI calls, secrets, `.env` files, production dependencies, or real patient data.

### Phase 18: Supabase Demo Insert
Goal: connect fake/demo booking form submissions to Supabase insert after explicit approval, while retaining localStorage fallback.

Completed:
- Installed `@supabase/supabase-js`.
- Added a browser-safe Supabase client using `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`.
- Connected fake/demo booking form submissions to Supabase insert when environment variables are configured.
- Kept localStorage fallback behavior so the demo still works if Supabase settings are missing or insert fails.
- Added insert mapping that omits local-only ids and timestamps so Supabase can generate UUID/timestamps.
- Kept public insert limited by the Phase 18 Supabase policy.
- Kept dashboard/admin read and status updates localStorage-only until auth/RLS is approved.
- Did not add auth, payments, real AI calls, secret/service keys, real patient data, medical advice, diagnosis, or treatment recommendations.

### Phase 19: Admin Read And Status Updates
Goal: verify the Phase 18 Supabase insert integration before any dashboard read/status update work.

Completed:
- Added `docs/SUPABASE_VERIFICATION.md`.
- Confirmed Vercel environment variables are configured for Supabase demo inserts.
- Confirmed the live app still loads after redeploy.
- Confirmed fake live form submissions reach the Supabase `bookings` table.
- Confirmed an external browser-safe REST insert returned HTTP `201`.
- Clarified that dashboard reads, analytics, status updates, reset behavior, and mock assistant booking selections remain localStorage-only for now.
- Kept public read, public update/delete, auth, payments, real AI, secret/service keys, real patient data, medical advice, diagnosis, and treatment recommendations out of scope.

### Phase 20: Interview Readiness And Pause Point
Goal: prepare the final junior-portfolio presentation guide and decide where to stop for now.

Completed:
- Added `docs/INTERVIEW_READINESS.md`.
- Documented a one-minute explanation and three-minute demo flow.
- Documented interview answers about React + Vite, localStorage, Supabase insert-only persistence, repository boundaries, mock AI, testing, and deployment.
- Documented what not to overclaim.
- Marked the current project as a good pause point for a junior portfolio.
- Kept app source, UI behavior, Supabase policies, auth, payments, real AI, real patient data, medical advice, diagnosis, and treatment recommendations out of scope.

## Recommended Pause

This is a good stopping point for now. The project is useful, understandable, deployed, tested, documented, and not overbuilt for a junior role.

Future work should happen only if it improves the portfolio story or matches a specific job requirement.

## Next Optional Phase

### Phase 25: Authenticated Admin Planning
Goal: decide whether a future authenticated admin workflow is worth adding before dashboard reads/status updates move from localStorage to Supabase.

Suggested acceptance criteria:
- Do not expose all bookings publicly.
- Choose an auth/admin model before adding Supabase select/update policies.
- Keep service/secret keys out of frontend code and Vercel public variables.
- Add tests for any future Supabase read/update adapter behavior.
- Keep localStorage fallback until Supabase admin behavior is verified.

## Future Optional Improvements

These are intentionally out of scope until the portfolio MVP is deployed and reviewed:

- Authentication and role-based access.
- Real AI assistant integration with strict safety boundaries.
- Export/reporting features.
- More dashboard filtering and sorting.
