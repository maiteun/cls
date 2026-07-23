-- Run this once in the Supabase project's SQL editor (Dashboard > SQL Editor).
-- Only the service role key (server-side only, see src/lib/supabase/server.ts)
-- ever talks to this table, so RLS is enabled with no policies: anon/authenticated
-- keys are blocked entirely, and the service role bypasses RLS by design.

create extension if not exists "pgcrypto";

create table if not exists pages (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid references pages(id) on delete cascade,
  title text not null default '제목 없음',
  content text not null default '',
  position integer not null default 0,
  created_by text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists pages_parent_id_idx on pages(parent_id);

alter table pages enable row level security;
