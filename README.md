# SoundCare AI Booking CRM

SoundCare AI Booking CRM is a React + Vite portfolio MVP for a fake hearing-care clinic booking workflow. It shows how a small frontend app can collect booking requests, present a professional client-facing appointment page, persist dashboard data in the browser, track CRM-style statuses, show simple analytics, and generate safe administrative draft text.

This is the active React app version of the project. The earlier WordPress plugin direction was abandoned on 2026-06-06 and the old PHP skeleton was removed.

## Current Status

Portfolio-ready junior MVP deployed publicly on Vercel, with booking save feedback polish completed in Phase 24.

The MVP is designed for portfolio review. It uses browser localStorage for the demo dashboard workflow and Supabase for optional fake/demo booking inserts. The current UI has a public `Book Appointment` view and an internal `Admin Dashboard` view. The booking confirmation now tells clients whether the request was saved to the booking system or received while online saving is unavailable. The screenshot set in `docs/screenshots/` includes the Phase 21 client booking page, admin dashboard page, mobile booking page, Phase 22 booking validation check, and Phase 24 booking save-status check.

Live demo: [https://soundcare-ai-booking-crm.vercel.app/](https://soundcare-ai-booking-crm.vercel.app/)

## Features

- Public booking page for appointment requests.
- Required-field validation for full name, email address, phone number, service, preferred date, and preferred time.
- Email format validation with client-facing error messages.
- Booking success confirmation with client-friendly save-status feedback.
- Browser localStorage persistence for demo bookings.
- Booking repository layer that keeps localStorage behind a clean persistence boundary.
- Admin dashboard with a dark teal sidebar, overview cards, booking table, status badges, and status updates.
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
- Supabase for optional fake/demo booking inserts

No external UI libraries, authentication, payments, admin backend reads, or real AI API calls are used in this phase.

## Screenshots

- `docs/screenshots/phase-21-client-booking-page.png`
- `docs/screenshots/phase-21-admin-dashboard-page.png`
- `docs/screenshots/phase-21-mobile-booking-page.png`
- `docs/screenshots/phase-22-booking-validation.png`
- `docs/screenshots/phase-24-booking-save-status.png`

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

## Safety And Demo Data

This project is a portfolio demo only. Use fake/demo data only.

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
- localStorage remains the fallback and the dashboard data source for now.
- The AI assistant is mock/template-based only.
- There is no authenticated admin backend workflow yet.
- There is no real AI API integration.
- There is no authentication or role-based access.
- There are no payments.

## Project Docs

See `docs/` for the backend plan, product spec, roadmap, decisions log, prompt log, test plan, changelog, and learning notes.
