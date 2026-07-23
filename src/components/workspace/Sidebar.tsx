import Link from "next/link";
import type { TreeNode } from "@/lib/workspace/tree";
import { createPageAction } from "@/lib/workspace/actions";
import { logoutAction } from "@/app/login/actions";
import DeletePageButton from "./DeletePageButton";

function SidebarNode({
  node,
  activeId,
  depth,
}: {
  node: TreeNode;
  activeId?: string;
  depth: number;
}) {
  const isActive = node.page.id === activeId;

  return (
    <li>
      <div
        className={`group flex items-center justify-between gap-1 rounded-sm px-2 py-1.5 ${
          isActive ? "bg-periwinkle" : "hover:bg-lavender-deep/50"
        }`}
        style={{ paddingLeft: 8 + depth * 14 }}
      >
        <Link
          href={`/workspace/${node.page.id}`}
          className="min-w-0 flex-1 truncate font-body text-lg leading-none"
        >
          {node.page.title || "제목 없음"}
        </Link>

        <div className="flex shrink-0 items-center gap-2 opacity-0 group-hover:opacity-100">
          <form action={createPageAction}>
            <input type="hidden" name="parentId" value={node.page.id} />
            <button
              type="submit"
              title="하위 페이지 추가"
              className="font-body text-lg text-ink/50 hover:text-purple-deep"
            >
              +
            </button>
          </form>
          <DeletePageButton id={node.page.id} />
        </div>
      </div>

      {node.children.length > 0 ? (
        <ul>
          {node.children.map((child) => (
            <SidebarNode
              key={child.page.id}
              node={child}
              activeId={activeId}
              depth={depth + 1}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default function Sidebar({
  tree,
  activeId,
  userName,
}: {
  tree: TreeNode[];
  activeId?: string;
  userName: string;
}) {
  return (
    <aside className="bevel-out flex min-h-[70vh] w-64 shrink-0 flex-col bg-cream">
      <div className="flex items-center justify-between gap-2 rounded-t bg-purple-deep px-3 py-2.5">
        <span className="min-w-0 truncate font-display text-sm text-cream">
          회의록 — {userName}
        </span>
        <form action={logoutAction}>
          <button
            type="submit"
            className="shrink-0 font-body text-base text-cream/60 hover:text-cream"
          >
            로그아웃
          </button>
        </form>
      </div>

      <div className="p-2">
        <form action={createPageAction}>
          <button
            type="submit"
            className="pixel-btn w-full bg-orange px-3 py-2 font-display text-xs text-cream"
          >
            + 새 문서
          </button>
        </form>
      </div>

      <nav className="flex-1 overflow-y-auto p-2">
        {tree.length === 0 ? (
          <p className="p-2 font-body text-base text-ink/50">
            아직 문서가 없습니다.
          </p>
        ) : (
          <ul>
            {tree.map((node) => (
              <SidebarNode
                key={node.page.id}
                node={node}
                activeId={activeId}
                depth={0}
              />
            ))}
          </ul>
        )}
      </nav>
    </aside>
  );
}
