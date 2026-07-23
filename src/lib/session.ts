import "server-only";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "cls_user";

export const ALLOWED_USERS = ["maite", "odiowood"];

export async function getSessionUser() {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value ?? null;
}
