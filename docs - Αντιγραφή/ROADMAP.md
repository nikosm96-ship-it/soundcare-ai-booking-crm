# Roadmap

## Phase 0: Project Foundation
Goal: Create project documentation and define the MVP.

Status: Completed for the original WordPress direction, then updated for the React pivot.

## Phase 1 Restart: React App Skeleton
Goal: Remove the obsolete WordPress plugin skeleton and create a clean React + Vite starter app.

Acceptance criteria:
- React + Vite app structure exists.
- Old WordPress PHP/admin/public plugin files are removed.
- Documentation remains in `docs/`.
- App runs with `npm run dev`.
- First screen is a simple app shell for SoundCare AI Booking CRM.
- No booking form, AI logic, analytics, backend, or localStorage feature exists yet.

## Phase 2: Data Model and Local Storage
Goal: Define the booking shape and local persistence helpers.

Acceptance criteria:
- Booking fields are defined in one place.
- Demo booking data exists.
- localStorage load/save helpers exist.
- The app can read bookings from the service layer.

## Phase 3: Public Booking Form
Goal: Add the visitor booking form.

Acceptance criteria:
- Form collects customer name, email, phone, service, preferred date/time, and notes.
- Required fields are validated.
- Valid submissions create bookings with status `New`.
- Bookings are saved in localStorage.
- User sees clear success/error feedback.

## Phase 4: Admin Booking Dashboard
Goal: Let the clinic admin view and manage bookings.

Acceptance criteria:
- Dashboard lists bookings.
- Bookings can be filtered by status and service.
- Admin can update booking status.
- Empty states are clear.

## Phase 5: Basic Analytics
Goal: Add simple CRM metrics.

Acceptance criteria:
- Total bookings count is shown.
- Counts by status are shown.
- Counts by service are shown.
- Upcoming appointment requests are shown.

## Phase 6: Mock AI Assistant
Goal: Add safe mock AI output.

Acceptance criteria:
- Admin can generate a customer summary.
- Admin can generate a suggested next action.
- Admin can generate a follow-up message.
- Output does not provide medical advice.

## Phase 7: README and Screenshots
Goal: Prepare the GitHub portfolio presentation.

Acceptance criteria:
- README includes setup, features, screenshots, architecture, safety note, and learning outcomes.
- Test plan is complete.
- Nikos can explain the project flow.

## Phase 8: Optional Backend
Goal: Add a real backend only if the React MVP is stable.

Possible options:
- Supabase
- Node/Express API
- Other lightweight backend chosen later

Acceptance criteria:
- Backend choice is documented before implementation.
- Local mock mode still works.
- No secrets are committed.
