create table public.game_suggestions (
  id uuid primary key default gen_random_uuid(),
  game text not null check (char_length(btrim(game)) between 2 and 80),
  reason text not null check (char_length(btrim(reason)) between 10 and 500),
  created_at timestamptz not null default now()
);

create index game_suggestions_created_at_idx
  on public.game_suggestions (created_at desc);

alter table public.game_suggestions enable row level security;

revoke all on table public.game_suggestions from anon, authenticated;
grant select on table public.game_suggestions to anon, authenticated;
grant insert (game, reason) on table public.game_suggestions to anon, authenticated;

create policy "Anyone can read game suggestions"
  on public.game_suggestions
  for select
  to anon, authenticated
  using (true);

create policy "Anyone can add game suggestions"
  on public.game_suggestions
  for insert
  to anon, authenticated
  with check (
    char_length(btrim(game)) between 2 and 80
    and char_length(btrim(reason)) between 10 and 500
  );
