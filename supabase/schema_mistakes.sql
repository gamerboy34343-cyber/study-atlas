-- ============================================================
-- The Study Atlas - Mistake tracking (run AFTER schema.sql)
-- ============================================================

create table if not exists public.mistakes (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  subject text not null check (subject in ('bb','cq','gq','tq','no')),
  topic text not null,
  question jsonb,
  created_at timestamptz not null default now()
);

alter table public.mistakes enable row level security;

drop policy if exists "users manage their own mistakes" on public.mistakes;
create policy "users manage their own mistakes"
  on public.mistakes for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create index if not exists mistakes_user_idx on public.mistakes (user_id, created_at desc);
