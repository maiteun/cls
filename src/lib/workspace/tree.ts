import type { PageRow } from "@/lib/supabase/types";

export type TreeNode = {
  page: PageRow;
  children: TreeNode[];
};

export function buildTree(pages: PageRow[]): TreeNode[] {
  const byId = new Map<string, TreeNode>(
    pages.map((page) => [page.id, { page, children: [] }]),
  );
  const roots: TreeNode[] = [];

  for (const page of pages) {
    const node = byId.get(page.id)!;
    const parent = page.parent_id ? byId.get(page.parent_id) : undefined;
    if (parent) {
      parent.children.push(node);
    } else {
      roots.push(node);
    }
  }

  return roots;
}
