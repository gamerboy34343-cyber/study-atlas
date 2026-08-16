-- ============================================================
-- The Study Atlas - Supabase schema
-- Paste this whole file into Supabase Dashboard -> SQL Editor -> New query -> Run.
-- Safe to re-run: uses IF NOT EXISTS / DROP ... IF EXISTS guards where practical.
-- ============================================================

-- ------------------------------------------------------------
-- profiles: one shared XP/coins/streak pool per account, used
-- by the top nav, every game, and the leaderboard.
-- ------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null default 'Learner',
  avatar text not null default '',
  xp integer not null default 0,
  coins integer not null default 0,
  streak integer not null default 0,
  last_activity_date date,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles are publicly readable" on public.profiles;
create policy "profiles are publicly readable"
  on public.profiles for select
  using (true);

drop policy if exists "users can insert their own profile" on public.profiles;
create policy "users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "users can update their own profile" on public.profiles;
create policy "users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

create index if not exists profiles_xp_idx on public.profiles (xp desc);

-- Auto-create a profile row the moment someone signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', 'Learner'));
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ------------------------------------------------------------
-- lesson_progress: per-subject, per-lesson completion, so each
-- game can persist unlocks/checkmarks to the account.
-- ------------------------------------------------------------
create table if not exists public.lesson_progress (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  subject text not null check (subject in ('bb','cq','mr','co','gq','tq','no','sc','hi','cv','tr')),
  lesson_id text not null,
  completed_at timestamptz not null default now(),
  unique (user_id, subject, lesson_id)
);

alter table public.lesson_progress enable row level security;

drop policy if exists "users manage their own lesson progress" on public.lesson_progress;
create policy "users manage their own lesson progress"
  on public.lesson_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ------------------------------------------------------------
-- study_bot_chats / study_bot_messages: multi-chat memory for
-- the Study Bot, synced per account instead of just localStorage.
-- ------------------------------------------------------------
create table if not exists public.study_bot_chats (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'New chat',
  pdf_name text not null default '',
  pdf_text text not null default '',
  updated_at timestamptz not null default now()
);

alter table public.study_bot_chats enable row level security;

drop policy if exists "users manage their own chats" on public.study_bot_chats;
create policy "users manage their own chats"
  on public.study_bot_chats for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create table if not exists public.study_bot_messages (
  id bigint generated always as identity primary key,
  chat_id uuid not null references public.study_bot_chats(id) on delete cascade,
  role text not null check (role in ('user','assistant','error')),
  content text not null,
  created_at timestamptz not null default now()
);

alter table public.study_bot_messages enable row level security;

drop policy if exists "users manage messages in their own chats" on public.study_bot_messages;
create policy "users manage messages in their own chats"
  on public.study_bot_messages for all
  using (exists (
    select 1 from public.study_bot_chats c
    where c.id = chat_id and c.user_id = auth.uid()
  ))
  with check (exists (
    select 1 from public.study_bot_chats c
    where c.id = chat_id and c.user_id = auth.uid()
  ));

create index if not exists study_bot_messages_chat_idx on public.study_bot_messages (chat_id, created_at);
