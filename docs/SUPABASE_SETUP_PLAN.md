# Supabase Setup Plan

## Purpose Of Phase 16

Phase 16 prepares the future Supabase database path for SoundCare AI Booking CRM without connecting the React app to Supabase yet.

This phase is documentation and SQL drafting only. The current app remains browser-only, uses browser localStorage as the active persistence layer, and does not install Supabase client code, create environment files, add API keys, add backend APIs, add authentication, add payments, add real AI calls, or store real patient data.

## Source Of Truth

This plan follows [Backend Persistence Plan](BACKEND_PLAN.md). The future database target is a Supabase Postgres `bookings` table that mirrors the current fake/demo booking model while using snake_case database fields.

Current frontend references:

- `src/data/demoBookings.js`
- `src/data/bookingStatus.js`
- `src/services/bookingStorage.js`

## What Supabase Setup Will Require Later

A future approved Supabase phase will require Nikos to:

- Create or select a Supabase project for fake/demo portfolio data.
- Review the SQL draft before applying it.
- Create the `bookings` table.
- Confirm Row Level Security is enabled.
- Decide whether public insert is allowed for demo submissions.
- Decide the admin authentication and authorization model before enabling admin read/write.
- Add Supabase environment variables outside Git.
- Install `@supabase/supabase-js` only in a later approved implementation phase.
- Keep localStorage fallback/demo behavior until Supabase behavior is verified.

## Manual Dashboard Steps For Later

When Phase 17 or a later approved phase reaches real setup, Nikos should do the setup manually in the Supabase dashboard:

1. Sign in to Supabase.
2. Create a new project or choose an existing fake/demo project.
3. Open the SQL Editor.
4. Review `docs/supabase/bookings-migration-draft.sql`.
5. Run the reviewed SQL only against the intended fake/demo project.
6. Open Table Editor and confirm `public.bookings` exists.
7. Confirm Row Level Security is enabled on `bookings`.
8. Confirm no public read, update, or delete policy exists by default.
9. Do not add real patient data.

## Draft SQL

Migration draft:

```text
docs/supabase/bookings-migration-draft.sql
```

The draft creates the `bookings` table, adds a status check constraint aligned with `src/data/bookingStatus.js`, drafts an optional `updated_at` trigger with its helper function outside the exposed `public` schema, enables Row Level Security, and leaves public access disabled until a later approved phase.

Phase 18 adds a separate public demo insert policy draft:

```text
docs/supabase/public-demo-insert-policy.sql
```

This policy allows anonymous fake/demo booking inserts only. It does not allow public reading, updating, or deleting booking rows.

## RLS Requirements

Row Level Security must be enabled because Supabase can expose tables in the `public` schema through its Data API. RLS gives the project a database-level safety boundary so browser requests only see or change rows when explicit policies allow it.

Public read should not be enabled because booking records may contain private administrative notes, even in a demo. A live portfolio demo must not expose all submitted rows to anonymous visitors.

Public update and delete should not be enabled because anonymous visitors should not be able to change CRM status values, edit bookings, or remove records.

Public insert is a separate product and security decision. It may be useful for fake/demo booking submissions later, but it can invite spam or accidental sensitive data entry. It should only be added after explicit approval, fake/demo copy review, and a decision about rate limiting or other abuse controls.

Admin read/write requires a future authentication and admin authorization phase. Do not create broad admin policies until the admin role model is decided.

## Environment Variables Needed Later

Later frontend Supabase setup should use:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Rules:

- Use only a publishable browser-safe key in frontend code.
- Never put a service role key in the frontend.
- Never commit `.env` files.
- Store local, preview, and production values in the appropriate local machine or hosting provider settings.

No `.env` file is created in Phase 16.

## Current Persistence Layer

Browser localStorage remains the active persistence layer for now.

Current active service:

```text
src/services/bookingStorage.js
```

Phase 16 does not remove localStorage, change app behavior, change visible UI, add Supabase client code, or add any backend connection.

## Fake/Demo Data Warning

Use fake/demo data only.

Do not enter real patient names, medical history, hearing test results, diagnosis details, treatment recommendations, payment details, identity documents, or private contact information. Demo emails should stay on safe domains such as `example.com`.

## Suggested Phase 17

Phase 17 should add a persistence repository layer while keeping localStorage as the active implementation. It should focus on:

- A small service/repository boundary for booking persistence.
- Field mapping tests between frontend camelCase and future database snake_case.
- localStorage fallback behavior.
- No Supabase client install yet unless separately approved.
- No visible UI change.

Only after that boundary is tested should a later phase install the Supabase client and connect fake/demo inserts.
