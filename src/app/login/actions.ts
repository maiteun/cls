"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ALLOWED_USERS, SESSION_COOKIE } from "@/lib/session";

export async function loginAction(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();

  if (!name) {
    redirect("/login?error=1");
  }

  if (!ALLOWED_USERS.includes(name.toLowerCase())) {
    redirect("/login?error=2");
  }

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, name.slice(0, 40), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  redirect("/workspace");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
  redirect("/");
}
