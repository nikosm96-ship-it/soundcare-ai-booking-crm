# SoundCare AI Booking CRM

SoundCare AI Booking CRM is now a React portfolio MVP for a demo hearing-care clinic. It will let a visitor submit a booking request, let a clinic admin manage bookings in a CRM-style dashboard, and later provide safe mock AI-assisted follow-up suggestions.

## Project Pivot

This project started as a WordPress plugin skeleton, but the direction changed on 2026-06-06. The active project is now a React app, not a WordPress plugin.

The old WordPress PHP skeleton has been removed.

## Current Phase

Phase 3: public booking request form.

The project has a clean React + Vite structure, beginner-friendly booking status constants, fake demo bookings, localStorage helper functions, and a public demo booking request form. Submitted requests are stored in browser localStorage only.

This phase intentionally does not add the admin dashboard UI, analytics UI, AI logic, backend APIs, authentication, payments, or external database integrations.

## Local Development

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

## Planned Tech Stack

- React
- Vite
- JavaScript
- CSS
- Browser localStorage for the first working MVP
- Mock AI output before any real AI API

## MVP Features

- Public booking form for fake/demo booking requests
- Booking data model stored locally in browser localStorage
- Admin dashboard-style booking list
- Status workflow
- Basic analytics
- Mock AI summary, next action, and follow-up message
- Portfolio-ready README with screenshots and learning notes

## Safety Note

This is a portfolio demo and learning project. Do not use real patient data. The AI assistant must not provide medical diagnosis or medical advice.

## Project Docs

See `docs/` for the product spec, roadmap, decisions log, prompt log, test plan, changelog, and learning notes.
