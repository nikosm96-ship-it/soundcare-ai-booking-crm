# Portfolio Walkthrough

## Project Elevator Pitch
SoundCare AI Booking CRM is a React + Vite portfolio MVP for a fake hearing-care clinic booking workflow. It demonstrates how a small frontend application can collect demo booking requests, persist dashboard data in the browser, insert fake booking requests into Supabase, track CRM-style statuses, show simple analytics, and generate safe mock administrative draft text. The project stays intentionally small so the portfolio version can focus on React fundamentals, product thinking, deployment, testing, and clear safety boundaries.

## Problem And Goal
The MVP demonstrates a common small-business problem: a clinic needs a simple way to collect booking requests, review them, track follow-up status, and prepare administrative communication without using scattered notes or spreadsheets.

A hearing-care booking CRM is a useful portfolio scenario because it combines realistic frontend workflows: form validation, local persistence, dashboard state, analytics, and careful handling of privacy and safety language. It also gives a clear interview story about building useful software while avoiding medical advice, real patient data, and premature backend complexity.

## Feature Walkthrough

### Feature Summary
Start with the top feature summary to explain the app at a glance. Point out that the MVP covers booking requests, CRM tracking, analytics, and a mock AI draft assistant without adding a full admin backend or real AI calls.

### Booking Form
Show how a visitor can submit a fake booking request with required name, email, and service fields. Explain that the form validates required inputs, saves demo booking data locally for the dashboard, and can insert fake requests into Supabase when browser-safe environment variables are configured.

### Analytics Overview
Use the analytics cards to show how app state becomes useful operational information. Explain that the counts update from the same local booking data used by the dashboard.

### CRM Booking Dashboard
Present the dashboard as the admin view for reviewing booking requests. Mention that it lists fake/demo bookings and keeps the workflow focused on scheduling status, not clinical information.

### Status Updates
Change a booking status during the walkthrough and show the analytics updating afterward. This demonstrates React state updates, local persistence, and a simple CRM workflow.

### Reset Demo Bookings
Use the reset action to return the app to a clean demo state. Explain that this makes the project easy to present repeatedly without keeping personal or real patient data.

### Mock AI Assistant
Generate a mock assistant draft from a fake booking. Explain that this is template-based administrative text only, with no API key, no real AI model, no message sending, and no medical advice.

### Footer Safety Notes
End the walkthrough by pointing to the footer safety notes. Use them to explain that the app is a portfolio MVP, uses fake/demo data only, and does not provide medical advice.

## Screenshots Checklist
- `screenshots/first-screen.png` - first screen / header + feature summary
- `screenshots/analytics-overview.png` - analytics overview
- `screenshots/booking-form.png` - booking form with fake portfolio data
- `screenshots/crm-dashboard.png` - dashboard with fake demo bookings
- `screenshots/status-change.png` - status change interaction after updating a fake booking
- `screenshots/mock-ai-draft.png` - Mock AI Assistant generated administrative draft
- `screenshots/mobile-layout.png` - mobile layout check
- `screenshots/footer-safety-note.png` - footer safety note

## Interview Talking Points
- React + Vite was chosen because it is fast to set up, beginner-friendly, and well suited for a focused frontend portfolio MVP.
- localStorage was used first because the early React MVP needed simple browser persistence before backend setup, accounts, hosting, or database management.
- Supabase was added later only for fake/demo inserts, while dashboard reads and status updates remain local until authenticated admin access exists.
- The AI assistant is mock/template-based because the goal is to demonstrate product thinking and safe UI behavior before adding cost, privacy, API-key handling, or model-risk concerns.
- Safety and privacy were handled by using fake/demo data only, avoiding real patient records, limiting assistant output to administrative draft text, and stating clearly that the app is not medical advice.
- The project was planned and shipped in phases so each step had a small scope, acceptance criteria, and validation path.
- GitHub commit history can show steady progress from product docs, through the React pivot, localStorage data, booking form, dashboard, analytics, mock assistant, polish, QA, and walkthrough preparation.

## Limitations
- Dashboard/admin workflow still uses browser localStorage.
- Supabase is insert-only for fake/demo booking requests in the current deployed version.
- No real AI yet.
- No authentication.
- No payments.
- No real patient data.
- Not medical advice.

## Next Improvements
- Add authenticated admin access before moving dashboard reads/status updates to Supabase.
- Add stronger filtering, sorting, and export tools only if they improve the demo story.
- Add a real AI assistant with strict safety boundaries.

## Final Interview Guide
For the final junior-portfolio demo script, recommended answers, and what not to overclaim, see `docs/INTERVIEW_READINESS.md`.
