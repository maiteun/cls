import { notFound } from "next/navigation";
import WorkspaceShell from "@/components/workspace/WorkspaceShell";
import PageEditor from "@/components/workspace/PageEditor";
import { getPage } from "@/lib/workspace/actions";

export default async function WorkspacePagePage({
  params,
}: {
  params: Promise<{ pageId: string }>;
}) {
  const { pageId } = await params;
  const page = await getPage(pageId);

  if (!page) notFound();

  return (
    <WorkspaceShell activeId={page.id}>
      <PageEditor page={page} />
    </WorkspaceShell>
  );
}
