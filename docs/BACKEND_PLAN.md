# Backend Persistence Plan

## Purpose

The current SoundCare AI Booking CRM MVP stores fake/demo booking requests in browser localStorage. That is the right fit for the portfolio MVP because it keeps the app browser-only, easy to run, and safe to review without accounts, backend services, secrets, or real patient data.

A future backend persistence phase would let fake/demo booking requests persist across browsers and devices so an admin-style reviewer can inspect the same demo data from more than one machine. This plan defines the intended Supabase database direction before any implementation begins.

## Why localStorage Is Not Enough Later

Browser localStorage is scoped to one browser profile on one device. It is useful for a frontend MVP, but it is not enough for a real booking workflow because:

- Bookings do not sync across browsers, devices, or users.
- Clearing browser data deletes saved bookings.
- There is no centralized admin view of all submitted bookings.
- There is no reliable audit trail or server-side timestamp source.
- There is no database-level access control, validation, or row security.
- It cannot support future authenticated admin workflows safely.

localStorage should remain in place during the first backend integration as a fallback/demo mode until the Supabase path is verified.

## Preferred Backend Option

Supabase is the preferred next backend option because it provides:

- A hosted Postgres database with a familiar relational model.
- Row Level Security planning for future public insert and admin read/write access.
- A browser-compatible publishable key model for safe frontend reads/writes when policies are designed correctly.
- A migration path that can start small with one `bookings` table.
- Good portfolio value because it demonstrates realistic data persistence without building a custom backend first.

This phase does not add Supabase client code, install `@supabase/supabase-js`, create environment files, add API keys, or connect the app to Supabase.

## Proposed Table

Table name: `bookings`

The current frontend uses camelCase booking fields. The future database should use snake_case fields and map them in a repository/service layer.

| Field | Suggested type | Notes |
| --- | --- | --- |
| `id` | `uuid primary key default gen_random_uuid()` | Database-generated ID for future records. Existing demo string IDs can remain local-only or be migrated through a separate seed strategy. |
| `customer_name` | `text not null` | Fake/demo customer name only. |
| `customer_email` | `text not null` | Fake/demo email only. Consider format validation in the frontend and optionally a database check later. |
| `customer_phone` | `text` | Optional phone string because phone formatting varies. |
| `service` | `text not null` | Matches the current service field. |
| `preferred_date` | `date` | Optional requested appointment date. |
| `preferred_time` | `time` | Optional requested appointment time. |
| `notes` | `text` | Optional fake/demo notes. |
| `status` | `text not null default 'New'` | Constrained to the approved status list. |
| `created_at` | `timestamptz not null default now()` | Server-side creation timestamp. |
| `updated_at` | `timestamptz not null default now()` | Server-side update timestamp, later maintained by trigger or application update. |

Suggested status constraint for a later migration:

```sql
check (
  status in (
    'New',
    'Contacted',
    'Scheduled',
    'Completed',
    'Follow-up',
    'Cancelled'
  )
)
```

## Status Mapping

Current source of truth: `src/data/bookingStatus.js`

| Current frontend status | Future database `status` value |
| --- | --- |
| `BOOKING_STATUSES.NEW` | `New` |
| `BOOKING_STATUSES.CONTACTED` | `Contacted` |
| `BOOKING_STATUSES.SCHEDULED` | `Scheduled` |
| `BOOKING_STATUSES.COMPLETED` | `Completed` |
| `BOOKING_STATUSES.FOLLOW_UP` | `Follow-up` |
| `BOOKING_STATUSES.CANCELLED` | `Cancelled` |

The first Supabase integration should keep these values aligned with `bookingStatusList`. A later refactor can introduce a shared mapping module so the form, dashboard, tests, and database adapter do not drift.

## Fake/Demo Data Policy

- Use fake/demo records only.
- Do not enter real patient, medical, hearing test, diagnosis, treatment, payment, or identity data.
- Keep example emails on safe demo domains such as `example.com`.
- Keep notes clearly labeled as fake/demo where seeded examples are used.
- Do not present demo bookings as real clinic records.

## Security And Privacy Notes

- This portfolio app must not collect or store real patient data.
- Booking notes can become sensitive in a real workflow, so they must be treated as private even in planning.
- The frontend must never contain a Supabase service role key or any secret key.
- No secrets should be committed to Git.
- Public database access must be intentionally restricted with Row Level Security.
- Admin read/write access should wait for an approved authentication and authorization phase.
- Medical advice, diagnosis, treatment recommendations, and clinical claims remain out of scope.

## RLS Planning Notes

RLS should be enabled on `bookings` before the table is exposed to frontend traffic.

Initial planning boundaries:

- No real patient data.
- Do not expose admin read/write broadly without an approved auth phase.
- Public insert can be considered later for demo bookings only, but must be planned carefully to avoid spam, data leakage, and accidental sensitive data collection.
- Public read should not be enabled for all rows.
- Status updates should not be publicly writable.
- Admin read/write policies should be designed only after auth roles are selected.

Potential later policy shape:

- Anonymous/public insert: optional, limited to fake/demo booking submissions only.
- Anonymous/public select: disabled by default.
- Admin select/update: allowed only for approved authenticated admin users in a separate auth phase.

## Environment Variable Plan

Future Supabase values should be configured through environment variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Rules:

- Use only the publishable/anon frontend key in the browser.
- Never place a service role key in frontend code.
- Never commit `.env` files or secrets.
- Keep production, preview, and local environment values managed by the hosting/provider settings.

No environment files are created in this phase.

## Migration And Setup Plan For The Next Phase

Phase 16 can create the Supabase setup without changing visible UI:

1. Create or select a Supabase project for fake/demo portfolio data.
2. Draft the `bookings` table migration.
3. Enable RLS on `bookings`.
4. Add a conservative status constraint.
5. Add an `updated_at` maintenance strategy, either application-managed at first or a database trigger.
6. Decide whether public insert is allowed for demo submissions.
7. Decide the admin access model before enabling admin reads or updates.
8. Add environment variable documentation without committing secrets.
9. Keep localStorage as fallback/demo mode until Supabase is verified.

Phase 16 planning artifacts:

- [Supabase Setup Plan](SUPABASE_SETUP_PLAN.md)
- [Bookings Migration Draft](supabase/bookings-migration-draft.sql)

## Frontend Integration Plan

The frontend should move in small steps:

1. Keep localStorage as the default fallback/demo mode at first.
2. Create a booking repository/service layer that hides the persistence backend from React components.
3. Map frontend camelCase fields to database snake_case fields in the repository layer.
4. Later connect booking form submit to a Supabase insert.
5. Later connect dashboard read to Supabase select after admin access is approved.
6. Later connect dashboard status updates to Supabase update after admin access is approved.
7. Keep tests around localStorage fallback and add repository tests for mapping behavior.
8. Avoid visible UI changes unless a later phase explicitly approves them.

## Out Of Scope

- Authentication.
- Payments.
- Real AI integration.
- Email or SMS sending.
- Real patient data.
- Medical advice.
- Diagnosis or treatment recommendations.
- Backend APIs.
- Supabase client code.
- Installing `@supabase/supabase-js`.
- Environment files or API keys.

## Risks And Decisions Needed

- Decide whether public insert is worth the spam and privacy risk for a portfolio demo.
- Decide whether the dashboard should remain demo-only until admin authentication exists.
- Decide how admin users will be represented before writing read/update RLS policies.
- Decide whether demo bookings should be seeded in Supabase or stay local-only.
- Decide how to prevent accidental real patient data entry if the live demo accepts public submissions.
- Decide whether rate limiting, captcha, or a server-side function is needed before public insert.
- Decide whether `status` should remain `text` with a check constraint or become a Postgres enum later.

Important portfolio safety decision: the first Supabase implementation should not make all submitted rows publicly readable. A public live demo with anonymous insert can attract spam or accidental sensitive information, so read/update access should stay restricted until an approved admin/auth phase exists.

## Recommended Next Phases

### Phase 16: Supabase Setup Planning And Migration Draft

Create the database setup plan, draft SQL migration, RLS policy proposal, and environment variable documentation. Do not connect the frontend until policies and fake/demo data rules are approved.

Status: Completed in Phase 16 documentation and draft SQL only.

### Phase 17: Persistence Repository Layer

Add a frontend repository/service abstraction while keeping localStorage as the active implementation. Add tests for field mapping and fallback behavior.

### Phase 18: Supabase Demo Insert

Install the Supabase client only after approval, configure environment variables outside Git, and connect fake/demo booking form submissions to Supabase insert while retaining localStorage fallback.

### Phase 19: Admin Read And Status Updates

Add authenticated admin read/update only after a dedicated auth and RLS phase is approved.
