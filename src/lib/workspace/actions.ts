"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getSupabaseServerClient } from "@/lib/supabase/server";
import { getSessionUser } from "@/lib/session";
import type { PageRow } from "@/lib/supabase/types";

async function requireUser() {
  const user = await getSessionUser();
  if (!user) redirect("/login");
  return user;
}

export async function listPages(): Promise<PageRow[]> {
  await requireUser();
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("pages")
    .select("*")
    .order("position", { ascending: true })
    .order("created_at", { ascending: true });

  if (error) throw new Error(error.message);
  return (data ?? []) as PageRow[];
}

export async function getPage(id: string): Promise<PageRow | null> {
  await requireUser();
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("pages")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data as PageRow | null;
}

export async function createPageAction(formData: FormData) {
  const user = await requireUser();
  const parentId = (formData.get("parentId") as string) || null;

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("pages")
    .insert({
      parent_id: parentId,
      title: "제목 없음",
      content: "",
      created_by: user,
    })
    .select("id")
    .single();

  if (error) throw new Error(error.message);

  revalidatePath("/workspace");
  redirect(`/workspace/${data.id}`);
}

export async function updatePageAction(formData: FormData) {
  await requireUser();
  const id = String(formData.get("id"));
  const title = String(formData.get("title") ?? "제목 없음").trim() || "제목 없음";
  const content = String(formData.get("content") ?? "");

  const supabase = getSupabaseServerClient();
  const { error } = await supabase
    .from("pages")
    .update({ title, content, updated_at: new Date().toISOString() })
    .eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/workspace");
  revalidatePath(`/workspace/${id}`);
}

export async function deletePageAction(formData: FormData) {
  await requireUser();
  const id = String(formData.get("id"));

  const supabase = getSupabaseServerClient();
  const { error } = await supabase.from("pages").delete().eq("id", id);

  if (error) throw new Error(error.message);

  revalidatePath("/workspace");
  redirect("/workspace");
}
