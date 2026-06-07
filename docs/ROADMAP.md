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

## Next Phase

### Phase 11: Deployment Preparation
Goal: prepare the project for a first public portfolio deployment.

Planned acceptance criteria:
- Choose the deployment target.
- Confirm the build command and output directory.
- Keep secrets out of the repo.
- Keep localStorage/demo mode working after deployment.
- Add deployment notes to README/docs.
- Do not add backend APIs, real AI calls, authentication, payments, or real patient data during deployment preparation.

## Future Optional Improvements

These are intentionally out of scope until the portfolio MVP is deployed and reviewed:

- Backend/database, such as Supabase or a small Node API.
- Authentication and role-based access.
- Real AI assistant integration with strict safety boundaries.
- Export/reporting features.
- Automated tests.
- More dashboard filtering and sorting.
