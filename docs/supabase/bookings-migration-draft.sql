-- SoundCare AI Booking CRM - Phase 16 Supabase bookings migration draft
--
-- Draft only. Review in the Supabase SQL editor against a fake/demo project
-- before applying. Do not run this against production data without a separate
-- approved backend, auth, and privacy review phase.
--
-- This portfolio MVP must use fake/demo booking records only.

-- gen_random_uuid() is available in modern Postgres, but enabling pgcrypto keeps
-- the draft explicit for Supabase projects where extension state is reviewed.
create extension if not exists pgcrypto;

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  customer_email text not null,
  customer_phone text,
  service text not null,
  preferred_date date,
  preferred_time time,
  notes text,
  status text not null default 'New',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint bookings_status_check check (
    status in (
      'New',
      'Contacted',
      'Scheduled',
      'Completed',
      'Follow-up',
      'Cancelled'
    )
  )
);

comment on table public.bookings is
  'Draft Phase 16 bookings table for fake/demo SoundCare AI Booking CRM data only. Review before applying.';

comment on column public.bookings.notes is
  'Fake/demo administrative notes only. Do not store real patient, medical, diagnosis, treatment, payment, or identity data.';

-- Optional updated_at trigger draft.
-- Keep this only if database-managed update timestamps are approved for the
-- first Supabase implementation. The trigger helper lives outside the exposed
-- public schema so it is not available as a public API function.
create schema if not exists app_private;

create or replace function app_private.set_bookings_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_bookings_updated_at on public.bookings;

create trigger set_bookings_updated_at
before update on public.bookings
for each row
execute function app_private.set_bookings_updated_at();

-- RLS must be enabled before any frontend traffic or Data API access is allowed.
alter table public.bookings enable row level security;

-- Conservative RLS notes:
-- - No public SELECT policy is created by default.
-- - No public UPDATE or DELETE policy is created by default.
-- - Public INSERT is not enabled in this draft and should not be enabled without
--   explicit approval, spam/privacy review, and fake/demo data rules.
-- - Admin read/write requires a future authentication and admin authorization
--   phase before policies are written.
-- - The absence of policies is intentional: with RLS enabled, anon/authenticated
--   browser access should remain denied unless a later phase adds reviewed
--   policies and grants.
