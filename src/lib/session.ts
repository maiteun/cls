import "server-only";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "cls_user";

export async function getSessionUser() {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value ?? null;
}
