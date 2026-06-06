# Test Plan

## Current Phase: Phase 5

Manual checks:
- Run `npm run dev`.
- Open the local dev server URL.
- Confirm analytics cards show the correct demo booking counts.
- Submit valid fake booking data from the public form and confirm total bookings increases.
- Change a booking status and confirm the matching analytics status count updates.
- Click `Reset demo bookings` and confirm analytics counts return to the demo values.
- Confirm the dashboard still displays fake demo bookings and status updates still persist.
- Confirm no AI logic, backend API, authentication, payments, external libraries, real patient data, medical advice, diagnosis, or treatment recommendations are added.

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

- Confirm AI summary is generated from booking data.
- Confirm suggested next action is administrative, not medical.
- Confirm follow-up message is safe and does not diagnose.
- Confirm mock AI works without API keys.
