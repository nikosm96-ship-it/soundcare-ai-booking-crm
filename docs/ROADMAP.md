# Roadmap

## Project Status
SoundCare AI Booking CRM is currently a portfolio-ready React + Vite MVP.

The current version is intentionally browser-only. It uses fake/demo booking data, browser localStorage, and safe template-based administrative draft text. It does not include backend APIs, real AI calls, authentication, payments, real patient data, medical advice, diagnosis, treatment recommendations, or clinical claims.

## Completed Phases

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

## Next Optional Phase

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

## Next Optional Phase

### Phase 20: Admin Read And Status Updates Planning
Goal: decide whether to add authenticated admin access before dashboard reads/status updates move from localStorage to Supabase.

Suggested acceptance criteria:
- Do not expose all bookings publicly.
- Choose an auth/admin model before adding Supabase select/update policies.
- Keep service/secret keys out of frontend code and Vercel public variables.
- Add tests for any future Supabase read/update adapter behavior.
- Keep localStorage fallback until Supabase admin behavior is verified.

## Future Optional Improvements

These are intentionally out of scope until the portfolio MVP is deployed and reviewed:

- Backend/database, such as Supabase or a small Node API.
- Authentication and role-based access.
- Real AI assistant integration with strict safety boundaries.
- Export/reporting features.
- More dashboard filtering and sorting.
