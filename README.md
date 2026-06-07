# SoundCare AI Booking CRM

SoundCare AI Booking CRM is a React + Vite portfolio MVP for a fake hearing-care clinic booking workflow. It shows how a small frontend app can collect demo booking requests, persist them in the browser, track CRM-style statuses, show simple analytics, and generate safe mock administrative draft text.

This is the active React app version of the project. The earlier WordPress plugin direction was abandoned on 2026-06-06 and the old PHP skeleton was removed.

## Current Status

Portfolio-ready MVP deployed publicly on Vercel.

The MVP is browser-only and designed for portfolio review. The screenshot set in `docs/screenshots/` captures the first screen, analytics, booking form, CRM dashboard, status update, mock assistant draft, mobile layout, and footer safety note.

Live demo: [https://soundcare-ai-booking-crm.vercel.app/](https://soundcare-ai-booking-crm.vercel.app/)

## Features

- Public booking form for fake/demo appointment requests.
- Required-field validation for name, email, and service.
- Browser localStorage persistence for demo bookings.
- CRM-style booking dashboard with status updates.
- Reset demo bookings action.
- Analytics overview for total and status-based booking counts.
- Mock AI Assistant that creates administrative draft text from fake booking data.
- Beginner-friendly React component structure and plain CSS styling.
- Portfolio safety notes for fake data and non-medical use.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Browser localStorage

No external UI libraries, backend APIs, authentication, payments, database services, or real AI API calls are used in this phase.

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

If the build command fails in PowerShell with `Access is denied`, try:

```bash
node node_modules/vite/bin/vite.js build
```

## Deployment

Current deployment: [Vercel live demo](https://soundcare-ai-booking-crm.vercel.app/).

Recommended deployment target: Vercel or Netlify as a static Vite site.

Use these settings:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

No environment variables or secrets are required for the current portfolio MVP. The deployed app remains browser-only and uses fake/demo data with browser localStorage.

## Safety And Demo Data

This project is a portfolio demo only. Use fake/demo data only.

The app does not provide medical advice, diagnosis, treatment recommendations, clinical claims, or message sending. The mock assistant is limited to administrative draft text about scheduling and booking details.

## Portfolio Walkthrough

For presentation flow, screenshot planning, limitations, and interview talking points, see [Portfolio Walkthrough](docs/PORTFOLIO_WALKTHROUGH.md).

For ready-to-use CV, LinkedIn, portfolio case-study, and interview copy, see [Portfolio Copy](docs/PORTFOLIO_COPY.md).

Captured portfolio screenshots are stored in [docs/screenshots](docs/screenshots).

## Current Limitations

- Data is stored in browser localStorage only.
- The AI assistant is mock/template-based only.
- There is no backend yet.
- There is no real AI API integration.
- There is no authentication or role-based access.
- There are no payments.
- There is no production database.

## Project Docs

See `docs/` for the product spec, roadmap, decisions log, prompt log, test plan, changelog, and learning notes.
