import "server-only";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

let client: ReturnType<typeof createClient<Database>> | null = null;

export function isSupabaseConfigured() {
  return Boolean(
    process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}

/**
 * Server-only client using the service role key. Never import this file
 * from a "use client" component — all page CRUD must go through
 * Server Actions in src/lib/workspace/actions.ts.
 */
export function getSupabaseServerClient() {
  if (!isSupabaseConfigured()) {
    throw new Error(
      "Supabase가 아직 설정되지 않았습니다. SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY를 .env.local에 추가하세요.",
    );
  }

  if (!client) {
    client = createClient<Database>(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false } },
    );
  }

  return client;
}
