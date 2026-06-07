# Portfolio Copy

## Short Project Title
SoundCare AI Booking CRM

## One-Sentence Portfolio Summary
SoundCare AI Booking CRM is a React + Vite portfolio MVP that demonstrates a booking and CRM workflow for a fake hearing-care clinic, including local dashboard persistence, Supabase demo booking inserts, status tracking, analytics, and safe mock administrative draft generation.

## Short CV/LinkedIn Description
Built and deployed a React + Vite portfolio MVP for a demo hearing-care booking CRM. The app includes a public booking form, localStorage-backed dashboard state, Supabase demo inserts, CRM-style status updates, simple analytics, automated tests, and a safe template-based mock AI assistant using fake/demo data only.

## Portfolio Case Study Paragraph
SoundCare AI Booking CRM was built as a focused junior portfolio project to show how a small healthcare-adjacent business could collect booking requests, track follow-up status, and prepare administrative communication without overbuilding. I chose React + Vite to keep the MVP fast, beginner-friendly, and easy to deploy. The project uses browser localStorage for dashboard state, Supabase for fake/demo booking inserts, React state for analytics updates, and template-based mock assistant output instead of real AI calls. A key part of the project is the safety boundary: it avoids real patient data, medical advice, clinical claims, public booking reads, authentication, payments, and secret keys in the frontend while still presenting a realistic product workflow that can be explained clearly in an interview.

## Feature Bullets
- Public booking request form with required-field validation.
- Browser localStorage persistence for fake/demo bookings.
- Optional Supabase insert persistence for fake/demo booking requests.
- CRM-style dashboard for reviewing bookings and updating statuses.
- Analytics overview that updates from the same local booking data.
- Reset demo data action for repeatable portfolio walkthroughs.
- Mock AI Assistant that generates safe administrative draft text only.
- Portfolio documentation, screenshot set, live demo link, and clear limitations.

## Tech Stack
- React
- Vite
- JavaScript
- CSS
- Browser localStorage
- Supabase demo insert persistence
- Vercel static deployment

## What I Learned
- I learned how to structure a React MVP in small phases instead of trying to build everything at once.
- I practiced using React state and props to connect a booking form, dashboard, analytics view, and assistant panel.
- I learned how localStorage can be useful for an early browser-only prototype before adding a backend.
- I practiced writing safer product copy for a healthcare-adjacent demo by avoiding medical advice and real patient data.
- I learned how documentation, screenshots, deployment notes, and limitations make a portfolio project easier to review.
- I practiced explaining tradeoffs, such as why mock AI and localStorage were better choices for the first MVP.
- I learned why backend reads and updates should wait for authentication and access-control planning.

## Interview Talking Points
- Why React + Vite was chosen for a fast frontend MVP.
- How booking data flows from form submission to localStorage, dashboard, analytics, and mock assistant selection.
- Why localStorage was used before adding a database or authentication.
- Why Supabase was added only for safe fake/demo inserts, not public admin reads.
- Why dashboard reads and status updates should wait for authenticated admin access.
- How the mock assistant is intentionally template-based and administrative only.
- How the project avoids real patient data, medical claims, public admin database access, secret keys, and message sending.
- How phased delivery helped keep the project understandable and portfolio-ready.
- What would change if this became a real production application.

## Current Limitations
- Dashboard data is still stored in the browser through localStorage.
- Supabase is used only for fake/demo insert proof, not a full admin backend.
- There is no real AI model or external AI API call.
- There is no authentication or role-based access.
- There are no payments or billing workflows.
- There is no real patient data and the app is not suitable for clinical use.
- The mock assistant does not send messages; it only creates local administrative draft text.

## Suggested Next Improvements
- Add automated tests for the booking form, status updates, analytics, and mock assistant output.
- Add authentication and role-based access for a real admin workflow.
- Move dashboard reads/status updates to Supabase after auth and RLS policies are approved.
- Add export/reporting for booking lists and operational summaries.
- Add filtering and sorting to the dashboard.
- Add a real AI integration only after defining strict safety, privacy, logging, and cost boundaries.

## Live Demo Link
[https://soundcare-ai-booking-crm.vercel.app/](https://soundcare-ai-booking-crm.vercel.app/)

## GitHub Repo Link
[https://github.com/nikosm96-ship-it/soundcare-ai-booking-crm](https://github.com/nikosm96-ship-it/soundcare-ai-booking-crm)
