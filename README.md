# SoundCare AI Booking CRM

SoundCare AI Booking CRM is a junior portfolio React + Vite app for a fake hearing-care clinic booking workflow. It shows how a small frontend app can collect booking requests, present a professional client-facing appointment page, persist dashboard data in the browser, track CRM-style statuses, show simple analytics, and generate safe administrative draft text.

This is the active React app version of the project. The earlier WordPress plugin direction was abandoned on 2026-06-06 and the old PHP skeleton was removed.

## Current Status

Portfolio-ready junior React + Vite app deployed publicly on Vercel, with professional UI polish completed in Phase 26.

The app is designed for portfolio review. It uses browser localStorage for the demo dashboard workflow and Supabase only as browser-safe booking insert proof. Admin dashboard reads and status updates remain local-only until authentication and RLS role design are added. The current UI has a polished public `Book Appointment` view, useful client support sections, and an internal `Admin Dashboard` view with practical navigation, scrollable bookings, status controls, analytics, and message drafts. Booking requests can be submitted, and the booking confirmation tells clients whether the request was saved to the booking system or received while online saving is unavailable.

Live demo: [https://soundcare-ai-booking-crm.vercel.app/](https://soundcare-ai-booking-crm.vercel.app/)

## Features

- Public booking page for appointment requests.
- Required-field validation for full name, email address, phone number, service, preferred date, and preferred time.
- Email format validation with client-facing error messages.
- Booking success confirmation with client-friendly save-status feedback.
- Professional client hero with reception imagery and useful scheduling details.
- Browser localStorage persistence for local dashboard bookings.
- Booking repository layer that keeps localStorage behind a clean persistence boundary.
- Admin dashboard with a dark teal sidebar, overview cards, scrollable booking table, status badges, and status updates.
- Reset demo bookings action.
- Analytics overview for total and status-based booking counts.
- Administrative Draft Assistant that creates safe scheduling draft text from booking data.
- Beginner-friendly React component structure and plain CSS styling.
- UI copy cleaned so implementation/demo wording stays out of the visible product surface.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Browser localStorage
- Supabase only for browser-safe fake/demo booking insert proof

No external UI libraries, authentication, payments, admin backend reads, or real AI API calls are used in this phase.

## Screenshots

- `docs/screenshots/phase-25-final-client-page.png`
- `docs/screenshots/phase-25-final-admin-dashboard.png`
- `docs/screenshots/phase-25-final-mobile-page.png`
- `docs/screenshots/phase-26-client-polish.png`
- `docs/screenshots/phase-26-admin-polish.png`
- `docs/screenshots/phase-26-mobile-polish.png`

Reception photo source: [Pexels clinic reception image](https://www.pexels.com/photo/modern-luxury-clinic-reception-interior-design-31844508/).

## Run Locally

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Build the app:

```bash
npm run build
```

Run the automated tests:

```bash
npm run test
```

Optional Supabase demo insert setup:

```bash
cp .env.example .env.local
```

Then add the project URL and publishable key from Supabase:

```text
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
```

Use only the publishable browser-safe key. Never use a secret or service role key in the React app, `.env.local`, Vercel frontend variables, or Git.

If the build command fails in PowerShell with `Access is denied`, try:

```bash
node node_modules/vite/bin/vite.js build
```

If the test command fails in PowerShell with `Access is denied`, try:

```bash
node node_modules/vitest/vitest.mjs run
```

## Deployment

Current deployment: [Vercel live demo](https://soundcare-ai-booking-crm.vercel.app/).

Recommended deployment target: Vercel or Netlify as a static Vite site.

Use these settings:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

The deployed app can run without environment variables because localStorage remains the fallback. To enable Supabase demo inserts on Vercel, configure:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Do not configure or expose a secret/service role key.

## Backend Planning

Phase 15 documents a future Supabase persistence path in [Backend Persistence Plan](docs/BACKEND_PLAN.md).

Phase 16 adds the Supabase setup notes and draft SQL in [Supabase Setup Plan](docs/SUPABASE_SETUP_PLAN.md).

Phase 17 adds a small booking repository layer in `src/services/bookingRepository.js`. This keeps localStorage as the active implementation while preparing a cleaner boundary for a later Supabase adapter.

Phase 18 connects fake/demo booking form submissions to Supabase insert when safe publishable environment variables are configured. localStorage remains the fallback and the dashboard/status updates remain localStorage-only until an auth/admin phase is approved.

Phase 19 documents the live Supabase verification in [Supabase Verification](docs/SUPABASE_VERIFICATION.md): Vercel environment variables are configured, the app was redeployed, fake submissions reached Supabase, and an external browser-safe insert returned HTTP `201`.

Phase 20 adds the final junior-portfolio presentation guide in [Interview Readiness](docs/INTERVIEW_READINESS.md). This is the recommended pause point before adding larger production features such as authenticated admin access.

Phase 24 improves the booking request confirmation so clients see whether the appointment request was saved to the booking system or received while online saving is unavailable. Dashboard and analytics refresh still use the existing local workflow after submit.

Phase 25 completes the final portfolio QA pass: local tests/build, local browser QA, live Vercel QA, screenshot refresh, documentation polish, and security/privacy sanity checks. No new features were added.

## Safety And Demo Data

This project is a junior portfolio demo only. Use fake/demo data only. Do not enter real patient data.

The app does not provide medical advice, diagnosis, treatment recommendations, clinical claims, or message sending. The mock assistant is limited to administrative draft text about scheduling and booking details.

## Portfolio Walkthrough

For presentation flow, screenshot planning, limitations, and interview talking points, see [Portfolio Walkthrough](docs/PORTFOLIO_WALKTHROUGH.md).

For ready-to-use CV, LinkedIn, portfolio case-study, and interview copy, see [Portfolio Copy](docs/PORTFOLIO_COPY.md).

For Supabase setup proof, current data flow, and backend limitations, see [Supabase Verification](docs/SUPABASE_VERIFICATION.md).

For final demo flow, interview answers, and what not to overclaim, see [Interview Readiness](docs/INTERVIEW_READINESS.md).

For how AI assistance was used responsibly during planning, implementation prompts, review, validation, and documentation, see [AI-Assisted Development](docs/AI_ASSISTED_DEVELOPMENT.md).

Captured portfolio screenshots are stored in [docs/screenshots](docs/screenshots).

## Current Limitations

- Submitted fake/demo bookings can be inserted into Supabase when publishable environment variables are configured.
- Supabase is used only as browser-safe booking insert proof.
- Admin dashboard reads and status updates remain local-only until auth/RLS role design is added.
- localStorage remains the fallback and the dashboard data source for now.
- The AI assistant is mock/template-based only.
- There is no authenticated admin backend workflow yet.
- There is no real AI API integration.
- There is no authentication or role-based access.
- There are no payments.

## Project Docs

See `docs/` for the backend plan, product spec, roadmap, decisions log, prompt log, test plan, changelog, and learning notes.
