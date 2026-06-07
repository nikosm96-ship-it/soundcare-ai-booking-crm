# Test Plan

## Current Phase: Phase 20

Interview readiness and pause-point checks:
- Confirm the real project folder contains `.git`, `package.json`, `vite.config.js`, `src`, and `docs`.
- Confirm `docs/INTERVIEW_READINESS.md` exists.
- Confirm it includes a one-minute explanation and three-minute demo flow.
- Confirm it explains why localStorage remains the dashboard source.
- Confirm it explains why Supabase is insert-only for fake/demo booking requests.
- Confirm it explains why authenticated admin access should come before Supabase dashboard reads/status updates.
- Confirm it includes what not to overclaim.
- Confirm README links to the interview readiness guide.
- Confirm portfolio copy and walkthrough reflect the current Supabase insert proof without claiming a full production backend.
- Run `npm run test`.
- Run `npm run build`.
- Confirm live URL returns HTTP `200` and includes `SoundCare AI Booking CRM`.
- Run `git status` and review changed files.
- Confirm expected visible UI change is `no`.
- Confirm actual visible UI change is `no`.
- Confirm no app behavior, public read policy, public update/delete policy, auth, payment flow, real AI call, `.env` file, secret/service key, real patient data, medical advice, diagnosis, treatment recommendation, or clinical claim was added.

Phase 20 validation notes:
- Phase 20 is documentation/readiness cleanup only.
- No screenshot is required because no app source or CSS files changed.

## Phase 19 Supabase Integration QA Checks

Supabase integration QA checks:
- Confirm the real project folder contains `.git`, `package.json`, `vite.config.js`, `src`, and `docs`.
- Confirm `docs/SUPABASE_VERIFICATION.md` exists.
- Confirm the verification doc records Vercel env vars by name only, without secret values.
- Confirm the verification doc records a fake live-app submission appearing in Supabase.
- Confirm the verification doc records external REST insert status `201`.
- Confirm the verification doc says dashboard reads, analytics, status updates, reset behavior, and mock assistant booking selections remain localStorage-only.
- Run `npm run test`.
- Run `npm run build`.
- Confirm live URL returns HTTP `200` and includes `SoundCare AI Booking CRM`.
- Run `git status` and review changed files.
- Confirm expected visible UI change is `no`.
- Confirm actual visible UI change is `no`.
- Confirm no app behavior, public read policy, public update/delete policy, auth, payment flow, real AI call, `.env` file, secret/service key, real patient data, medical advice, diagnosis, treatment recommendation, or clinical claim was added.

Phase 19 validation notes:
- Phase 19 is documentation/verification cleanup only.
- No screenshot is required because no app source or CSS files changed.

## Phase 18 Supabase Demo Insert Checks

Supabase demo insert checks:
- Confirm the real project folder contains `.git`, `package.json`, `vite.config.js`, `src`, and `docs`.
- Confirm the project is React + Vite from `package.json` and `vite.config.js`.
- Confirm `@supabase/supabase-js` is installed.
- Confirm `src/services/supabaseClient.js` uses `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`.
- Confirm `.env.example` exists and contains placeholder values only.
- Confirm `.gitignore` ignores `.env.local` and `.env.*.local`.
- Confirm no real `.env` or `.env.local` files are tracked by Git.
- Confirm `docs/supabase/public-demo-insert-policy.sql` documents insert-only anonymous RLS behavior.
- Confirm `bookingToDatabaseInsertRow()` does not send local-only ids or timestamps to Supabase insert.
- Confirm `createBookingRequest()` saves locally when Supabase config is missing.
- Confirm `createBookingRequest()` keeps local fallback if Supabase insert fails.
- Confirm booking form submissions use the repository request flow.
- Run `npm run test`.
- Run `npm run build`.
- Run the app locally and confirm it still loads.
- Capture a visual check screenshot because app source files changed: `docs/screenshots/phase-18-visual-check.png`.
- Confirm expected visible UI change is `minimal`.
- Confirm actual visible UI change is only the temporary submit button saving state.
- Run `git status` and review changed files.
- Confirm no public read, dashboard database read, status database update, auth, payment flow, real AI call, `.env` file, secret/service key, real patient data, medical advice, diagnosis, treatment recommendation, or clinical claim was added.

Phase 18 validation notes:
- Supabase insert works only when Vite/Vercel publishable env vars are configured.
- localStorage remains the fallback and dashboard source for now.
- Dashboard/admin database reads and status updates remain out of scope until auth/admin RLS is approved.

## Phase 17 Repository And Mapping Checks

Repository and mapping checks:
- Confirm the real project folder contains `.git`, `package.json`, `vite.config.js`, `src`, and `docs`.
- Confirm the project is React + Vite from `package.json` and `vite.config.js`.
- Confirm `src/services/bookingRepository.js` exists.
- Confirm analytics, booking form, mock assistant, and dashboard components import booking persistence from `bookingRepository.js`.
- Confirm `bookingStorage.js` remains the localStorage implementation behind the repository.
- Confirm repository tests cover get/add/status-update/reset behavior.
- Confirm mapping tests cover frontend camelCase booking fields and future snake_case database fields.
- Run `npm run test`.
- Run `npm run build`.
- Run the app locally and confirm it still loads.
- Capture a visual check screenshot because app source files changed: `docs/screenshots/phase-17-visual-check.png`.
- Confirm expected visible UI change is `no`.
- Confirm actual visible UI change is `no`.
- Run `git status` and review changed files.
- Confirm no Supabase client code, backend API, auth, payment flow, production dependency, real AI call, `.env` file, secret, real patient data, medical advice, diagnosis, treatment recommendation, or clinical claim was added.

Phase 17 validation notes:
- Phase 17 changes the internal persistence boundary, not the user-facing workflow.
- localStorage remains the active persistence layer.
- The repository prepares the codebase for a later Supabase adapter without connecting Supabase yet.

## Phase 16 Supabase Setup Planning Checks

Documentation checks:
- Confirm the real project folder contains `.git`, `package.json`, `vite.config.js`, `src`, and `docs`.
- Confirm the project is React + Vite from `package.json` and `vite.config.js`.
- Confirm `docs/BACKEND_PLAN.md` exists.
- Confirm `docs/SUPABASE_SETUP_PLAN.md` exists.
- Confirm `docs/supabase/bookings-migration-draft.sql` exists.
- Confirm the draft SQL creates `public.bookings` if not exists.
- Confirm the draft SQL includes `create extension if not exists pgcrypto`.
- Confirm the draft SQL includes `id uuid primary key default gen_random_uuid()`.
- Confirm the draft SQL includes `customer_name`, `customer_email`, `customer_phone`, `service`, `preferred_date`, `preferred_time`, `notes`, `status`, `created_at`, and `updated_at`.
- Confirm the draft SQL includes a status check for `New`, `Contacted`, `Scheduled`, `Completed`, `Follow-up`, and `Cancelled`.
- Confirm the draft SQL includes an optional `updated_at` trigger draft.
- Confirm the draft SQL enables Row Level Security on `public.bookings`.
- Confirm the draft SQL documents no public select/update/delete by default, public insert requiring explicit approval, and future admin read/write requiring auth/admin planning.
- Confirm the setup plan explains later manual Supabase dashboard setup.
- Confirm the setup plan documents `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`.
- Confirm the setup plan warns against service role keys in frontend code and committed `.env` files.
- Confirm the setup plan says localStorage remains active for now.
- Confirm README links to `docs/SUPABASE_SETUP_PLAN.md`.
- Confirm `docs/BACKEND_PLAN.md` links to the setup plan and migration draft.
- Confirm roadmap, changelog, product owner notes, and test plan mention Phase 16.
- Run `npm run test`.
- Run `npm run build`.
- Run `git status` and review changed files.
- Confirm expected visible UI change is `no`.
- Confirm actual visible UI change is `no`.
- Confirm no app feature, Supabase client code, backend API, auth, payment flow, production dependency, real AI call, `.env` file, secret, real patient data, medical advice, diagnosis, treatment recommendation, or clinical claim was added.

Phase 16 validation notes:
- Phase 16 is planning/documentation only.
- The current app remains browser-only and uses browser localStorage.
- No screenshot is required unless app files change.

## Phase 15 Backend/Data Persistence Planning Checks

Documentation checks:
- Confirm the real project folder contains `.git`, `package.json`, `vite.config.js`, `src`, and `docs`.
- Confirm the project is React + Vite from `package.json` and `vite.config.js`.
- Confirm `docs/BACKEND_PLAN.md` exists.
- Confirm the backend plan documents the purpose of backend persistence and why localStorage is not enough for a future booking workflow.
- Confirm Supabase is documented as the preferred future backend option.
- Confirm the proposed table name is `bookings`.
- Confirm the proposed fields include `id`, `customer_name`, `customer_email`, `customer_phone`, `service`, `preferred_date`, `preferred_time`, `notes`, `status`, `created_at`, and `updated_at`.
- Confirm suggested Postgres/Supabase data types are listed.
- Confirm status values map from `src/data/bookingStatus.js`.
- Confirm fake/demo data policy, security/privacy notes, RLS planning notes, environment variable plan, migration/setup plan, frontend integration plan, out-of-scope list, risks, decisions, and recommended next phases are included.
- Confirm README links to `docs/BACKEND_PLAN.md`.
- Confirm roadmap, changelog, product owner notes, and test plan mention Phase 15.
- Run `npm run test`.
- Run `npm run build`.
- Run `git status` and review changed files.
- Confirm expected visible UI change is `no`.
- Confirm actual visible UI change is `no`.
- Confirm no app feature, Supabase client code, backend API, auth, payment flow, production dependency, real AI call, `.env` file, secret, real patient data, medical advice, diagnosis, treatment recommendation, or clinical claim was added.

Phase 15 validation notes:
- Phase 15 is planning/documentation only.
- The current app remains browser-only and uses browser localStorage.
- No screenshot is required unless app files change.

## Phase 14 Automated Test Coverage Checks

Automated checks:
- Confirm the real project folder contains `.git`, `package.json`, `vite.config.js`, `src`, and `docs`.
- Confirm the project is React + Vite from `package.json` and `vite.config.js`.
- Run `npm run test`.
- Confirm booking localStorage helper tests cover empty storage fallback, invalid JSON fallback, save/load, and reset behavior.
- Confirm analytics tests cover total bookings and status counts.
- Confirm mock assistant tests cover the required safety line: `This message is a non-medical administrative draft.`
- Confirm booking form tests cover empty-submit required validation for name, email, and service.
- Run `npm run build`.
- Run the app locally and confirm it still loads with no expected visible UI change.
- Run `git status` and review changed files.
- Confirm no app feature, backend API, real AI call, authentication, payment flow, production dependency, real patient data, medical advice, diagnosis, treatment recommendation, or clinical claim was added.

Phase 14 validation notes:
- Test tooling is dev-only: Vitest, jsdom, and React Testing Library.
- Screenshot target: `docs/screenshots/phase-14-visual-check.png`.
- Phase 14 is expected to have no visible UI change.

## Phase 12 Deployment Checks

Manual checks:
- Open the live Vercel URL: `https://soundcare-ai-booking-crm.vercel.app/`.
- Confirm the deployed app loads with the `SoundCare AI Booking CRM` title.
- Confirm the initial demo analytics total is `4`.
- Submit a fake booking and confirm the success message appears.
- Confirm analytics update from `4` to `5`.
- Confirm the dashboard includes the submitted fake booking.
- Generate a mock assistant draft and confirm it includes `This message is a non-medical administrative draft.`
- Confirm the deployed app has no favicon 404 after the favicon update is deployed.
- Confirm README and project docs include the live URL.
- Confirm no backend APIs, real AI calls, authentication, payments, external libraries, real patient data, medical advice, diagnosis, treatment recommendations, or clinical claims were added.

Phase 12 validation notes:
- Live URL: `https://soundcare-ai-booking-crm.vercel.app/`.
- Hosting platform: Vercel.
- The app remains browser-only and uses fake/demo localStorage data.
- The current portfolio MVP does not require environment variables or secrets.

## Phase 11 Deployment Preparation Checks

- Confirm the real project folder contains `.git`, `package.json`, `vite.config.js`, `src`, and `docs`.
- Confirm the project is a React + Vite app from `package.json` and `vite.config.js`.
- Run `npm run build`.
- Confirm deployment settings:
  - Framework: Vite.
  - Build command: `npm run build`.
  - Output directory: `dist`.
- Confirm no `.env` files exist in the project tree.
- Confirm no `.env` files are tracked by Git.
- Confirm README includes a short deployment section.
- Confirm roadmap, changelog, product owner notes, and test plan mention Phase 11 deployment preparation.
- Run Git status and review the changed files.
- Confirm no backend APIs, real AI calls, authentication, payments, external libraries, real patient data, medical advice, diagnosis, treatment recommendations, clinical claims, or automatic deployment were added.

## Phase 10 Screenshot Checks

Manual checks:
- Confirm `docs/screenshots/` exists.
- Confirm these screenshots exist and are readable:
  - `first-screen.png`
  - `analytics-overview.png`
  - `booking-form.png`
  - `crm-dashboard.png`
  - `status-change.png`
  - `mock-ai-draft.png`
  - `mobile-layout.png`
  - `footer-safety-note.png`
- Confirm the local app loads without a Vite/framework error overlay before capture.
- Confirm browser console warnings/errors are empty or explained.
- Confirm screenshots use fake/demo data only.
- Confirm `mock-ai-draft.png` shows administrative draft text only and includes `This message is a non-medical administrative draft.`
- Confirm `mobile-layout.png` has no clipped text, overlapping content, or horizontal overflow.
- Confirm no app features, backend APIs, real AI calls, authentication, payments, external libraries, real patient data, medical advice, diagnosis, treatment recommendations, clinical claims, or deployment were added.
- If only screenshots/docs changed, `npm run build` is optional.

Phase 10 validation notes:
- Captured screenshots from the local Vite app at `http://127.0.0.1:5173`.
- Desktop captures used a clear desktop viewport for the first screen and section screenshots.
- Mobile capture used a narrow mobile viewport and confirmed `scrollWidth` matched `clientWidth`.
- Screenshot data came from built-in fake demo bookings plus one fake portfolio booking: `Alex Demo <alex.demo@example.com>`.
- App status copy was adjusted for screenshot readiness, so build validation was run after the app file change.

## Phase 9 Documentation Checks

Manual checks:
- Review `docs/PORTFOLIO_WALKTHROUGH.md`.
- Confirm the walkthrough includes elevator pitch, problem/goal, feature walkthrough, screenshot checklist, interview talking points, limitations, and next improvements.
- Confirm screenshot checklist covers first screen, analytics overview, booking form, dashboard with bookings, status change interaction, mock AI draft, mobile layout, and footer safety note.
- Confirm walkthrough text has no placeholder text.
- Confirm walkthrough does not claim backend APIs, real AI calls, authentication, payments, real patient data, medical advice, diagnosis, treatment recommendations, clinical claims, or deployment.
- Confirm README links to `docs/PORTFOLIO_WALKTHROUGH.md`.
- Run `npm run dev`.
- Open the local dev server URL.
- Confirm the app loads as a React + Vite app.
- Confirm the feature summary appears near the top.
- Confirm the footer appears with portfolio MVP, fake/demo data, and no medical advice notes.
- Confirm analytics, booking form, Mock AI Assistant, and booking dashboard still appear.
- Submit a fake booking and confirm analytics and dashboard update.
- Generate a mock assistant draft and confirm it remains administrative only.
- Confirm the draft includes the line `This message is a non-medical administrative draft.`
- Change one dashboard booking status and confirm analytics update.
- Click `Reset demo bookings` and confirm demo data returns.
- Check a mobile-sized viewport for clipped text, overlapping content, or horizontal overflow.
- Run `npm run build`.
- If needed, run `node node_modules/vite/bin/vite.js build`.
- Confirm no real AI logic, API key, backend API, authentication, payments, external libraries, real patient data, medical advice, diagnosis, treatment recommendations, clinical claims, or message sending are added.

For Phase 9 documentation-only updates, app run/build checks are only needed if app or package files change.

## Phase 1 Restart: React Skeleton Checks

After the Coding Agent creates the React skeleton:

- Run `npm install`.
- Run `npm run dev`.
- Open the local dev server URL.
- Confirm the first screen shows SoundCare AI Booking CRM.
- Confirm the browser console has no obvious runtime errors.
- Confirm old files like `soundcare-ai-booking-crm.php`, `includes/`, `admin/`, `public/class-scabc-public.php`, and `uninstall.php` are removed.
- Confirm `docs/` still exists.

Useful validation commands:

```bash
npm install
npm run dev
```

## Phase 2: Data Model and Local Storage Checks

- Confirm booking fields are defined consistently.
- Confirm demo bookings load.
- Confirm localStorage helpers can save and load data.
- Confirm invalid JSON in localStorage does not crash the app.
- Confirm empty localStorage returns the demo bookings.
- Confirm `resetBookings()` clears saved bookings and returns demo bookings.

## Phase 3: Booking Form Checks

- Submit with empty required fields and confirm validation messages.
- Submit valid fake data and confirm a new booking is created.
- Refresh the page and confirm the booking remains.
- Confirm no real patient data is used.

## Phase 4: Admin Dashboard Checks

- Confirm bookings are listed.
- Confirm status updates persist after refresh.
- Confirm reset demo bookings restores the demo records.
- Confirm empty states are clear if localStorage is manually set to an empty booking list.

## Phase 5: Analytics Checks

- Confirm total bookings count is correct.
- Confirm status counts are correct.
- Confirm analytics update after a new fake booking is submitted.
- Confirm analytics update after a booking status changes.
- Confirm analytics return to demo values after reset.

## Phase 6: Mock AI Checks

- Confirm Mock AI Assistant panel appears.
- Confirm user can select a booking, draft type, and tone.
- Confirm `Generate draft` creates a safe administrative draft from fake booking data.
- Confirm every generated draft includes the non-medical administrative safety line.
- Confirm `Clear draft` removes generated text.
- Confirm mock AI works without API keys, backend APIs, or external libraries.

## Phase 7: Portfolio Polish Checks

- Confirm the feature summary lists booking requests, CRM tracking, analytics overview, and mock AI draft assistant.
- Confirm footer safety notes are visible and concise.
- Confirm the first viewport still presents the actual app identity and workflow, not a marketing landing page.
- Confirm desktop and mobile layouts are readable.
- Confirm no text clips, overlaps, or creates horizontal page overflow on mobile.
- Confirm README explains project purpose, features, tech stack, local setup, safety/demo data note, and current limitations.

## Phase 8: Final QA Checks

- Confirm the real project folder contains `package.json`, `vite.config.js`, `src`, `docs`, and `.git`.
- Run the dev server and confirm the app opens through the configured Vite open behavior.
- Test desktop and mobile layouts for horizontal overflow, clipped text, broken spacing, unreadable text, and obvious visual issues.
- Submit a fake booking and confirm the form resets, analytics update, the dashboard shows the new booking, and the mock assistant booking dropdown can use it.
- Generate a mock assistant draft and confirm it is administrative only, includes `This message is a non-medical administrative draft.`, and includes no medical advice.
- Change a booking status and confirm analytics update.
- Refresh the page and confirm saved booking/status persistence.
- Reset demo bookings and confirm the demo state returns and remains after refresh.
- Run `npm run build`.
- Review README, changelog, product owner notes, and this test plan for current project status.

## Phase 9: Portfolio Walkthrough Checks

- Confirm `docs/PORTFOLIO_WALKTHROUGH.md` exists.
- Confirm it explains how to present the feature summary, booking form, analytics overview, CRM booking dashboard, status updates, reset demo bookings, mock AI assistant, and footer safety notes.
- Confirm it includes the recommended screenshot checklist.
- Confirm it includes interview talking points for React + Vite, localStorage, mock AI, safety/privacy, phase planning, and GitHub commit history.
- Confirm it clearly lists current limitations and realistic next improvements.
- Confirm README links to the walkthrough.
