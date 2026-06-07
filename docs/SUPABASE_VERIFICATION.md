# Supabase Verification

## Purpose

This document records the Phase 19 verification pass for the SoundCare AI Booking CRM Supabase demo insert.

The goal is to confirm that the deployed portfolio app can write fake/demo booking requests to Supabase while keeping dashboard reads and status updates localStorage-only for now.

## Current Live Setup

- Live app: `https://soundcare-ai-booking-crm.vercel.app/`
- Supabase project: `soundcare-ai-booking-crm`
- Supabase table: `public.bookings`
- Active frontend environment variables in Vercel:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_PUBLISHABLE_KEY`
- Secret/service role keys: not used in frontend code, Vercel public variables, docs, or Git.

## Database Setup Verified

The Supabase table exists with the planned fields:

- `id`
- `customer_name`
- `customer_email`
- `customer_phone`
- `service`
- `preferred_date`
- `preferred_time`
- `notes`
- `status`
- `created_at`
- `updated_at`

Row Level Security is enabled. The table has an insert-only anonymous policy for fake/demo booking submissions. Public read, update, and delete access remain disabled.

## Deployment Verification

The Vercel deployment was rebuilt after adding the Supabase environment variables.

Verification results:

- The live app loaded successfully.
- The deployed JavaScript bundle contained the configured Supabase URL and a publishable key pattern.
- A fake booking submitted through the live app appeared in the Supabase `bookings` table.
- An external fake REST insert check returned HTTP `201`, confirming the Supabase insert path works from a browser-safe request.

External verification record:

```text
REST insert status=201
```

## Current Data Flow

Booking form submissions:

1. Save to browser localStorage.
2. Attempt Supabase insert if publishable environment variables are configured.
3. Continue working with localStorage fallback if Supabase is unavailable.

Dashboard, analytics, status updates, reset demo bookings, and mock assistant dropdowns still use browser localStorage.

This is intentional. Moving dashboard reads and status updates to Supabase requires a later auth/admin access phase so submitted booking records are not publicly readable or writable.

## Safety Boundaries

- Use fake/demo records only.
- Do not enter real patient data.
- Do not enter medical history, diagnosis, treatment, payment, identity, or private health information.
- Do not expose all bookings publicly.
- Do not add public update or delete policies.
- Do not use service role or secret keys in frontend code.

## Known Limitations

- Supabase currently stores new fake/demo submissions only.
- The app does not read bookings back from Supabase.
- The dashboard remains browser-local.
- The status dropdown updates browser-local data only.
- There is no authentication or admin role model yet.

## Recommended Next Step

Before moving dashboard reads/status updates to Supabase, create a dedicated admin/auth plan:

- Pick an authentication approach.
- Define who can read booking records.
- Define who can update statuses.
- Add RLS policies only after the admin model is approved.
- Keep localStorage fallback until Supabase admin behavior is tested.
