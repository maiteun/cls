import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/session";
import { isSupabaseConfigured } from "@/lib/supabase/server";
import { listPages } from "@/lib/workspace/actions";
import { buildTree } from "@/lib/workspace/tree";
import Sidebar from "./Sidebar";
import SetupNotice from "./SetupNotice";

export default async function WorkspaceShell({
  children,
  activeId,
}: {
  children: ReactNode;
  activeId?: string;
}) {
  const user = await getSessionUser();
  if (!user) redirect("/login");

  if (!isSupabaseConfigured()) {
    return <SetupNotice />;
  }

  const pages = await listPages();
  const tree = buildTree(pages);

  return (
    <div className="mx-auto flex min-h-[75vh] max-w-6xl items-start gap-4 px-4 py-4">
      <Sidebar tree={tree} activeId={activeId} userName={user} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
