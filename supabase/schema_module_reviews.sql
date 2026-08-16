-- ============================================================
-- The Study Atlas - Module review gate (run AFTER schema.sql)
-- ============================================================

create table if not exists public.module_reviews (
  user_id uuid not null references auth.users(id) on delete cascade,
  subject text not null check (subject in ('bb','cq','mr','co','gq','tq','no','sc','hi','cv','tr')),
  module_id text not null,
  passed boolean not null default false,
  best_score integer not null default 0,
  updated_at timestamptz not null default now(),
  primary key (user_id, subject, module_id)
);

alter table public.module_reviews enable row level security;

drop policy if exists "users manage their own module reviews" on public.module_reviews;
create policy "users manage their own module reviews"
  on public.module_reviews for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
