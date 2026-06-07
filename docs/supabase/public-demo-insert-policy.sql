-- SoundCare AI Booking CRM - Phase 18 public demo insert policy
--
-- Allows anonymous browser clients to insert fake/demo booking requests only.
-- This does not allow public reading, updating, or deleting bookings.
-- Do not use real patient data.

create policy "Allow public demo booking inserts"
on public.bookings
for insert
to anon
with check (
  customer_name is not null
  and length(trim(customer_name)) > 0
  and customer_email is not null
  and length(trim(customer_email)) > 0
  and service is not null
  and length(trim(service)) > 0
  and status = 'New'
);

grant insert on table public.bookings to anon;
