-- ============================================================
-- The Study Atlas - Shop system (run AFTER schema.sql)
-- ============================================================

alter table public.profiles add column if not exists equipped_theme text not null default 'default';

create table if not exists public.inventory (
  user_id uuid not null references auth.users(id) on delete cascade,
  item_id text not null,
  quantity integer not null default 1,
  updated_at timestamptz not null default now(),
  primary key (user_id, item_id)
);

alter table public.inventory enable row level security;

drop policy if exists "users manage their own inventory" on public.inventory;
create policy "users manage their own inventory"
  on public.inventory for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
