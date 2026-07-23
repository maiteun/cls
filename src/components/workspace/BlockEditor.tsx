"use client";

import { useCallback, useRef, useState } from "react";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import type { PartialBlock } from "@blocknote/core";
import "@blocknote/mantine/style.css";
import { updatePageAction } from "@/lib/workspace/actions";
import type { PageRow } from "@/lib/supabase/types";

const blockNoteTheme = {
  colors: {
    editor: { text: "#423b57", background: "#f2e8db" },
    menu: { text: "#423b57", background: "#f8f2e9" },
    tooltip: { text: "#423b57", background: "#e9dcc8" },
    hovered: { text: "#423b57", background: "#e3d4bf" },
    selected: { text: "#f2e8db", background: "#c97b5a" },
    disabled: { text: "#a89fb6", background: "#e9dcc8" },
    shadow: "rgba(66, 59, 87, 0.15)",
    border: "rgba(66, 59, 87, 0.18)",
    sideMenu: "#a89fb6",
  },
  borderRadius: 6,
  fontFamily: "var(--font-lora)",
};

function parseInitialContent(content: string): PartialBlock[] | undefined {
  if (!content) return undefined;
  try {
    const parsed = JSON.parse(content);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed as PartialBlock[];
    }
    return undefined;
  } catch {
    // legacy plain-text content saved before the block editor existed
    return [{ type: "paragraph", content }];
  }
}

export default function BlockEditor({ page }: { page: PageRow }) {
  const [title, setTitle] = useState(page.title);
  const [status, setStatus] = useState<"idle" | "saving" | "saved">("idle");
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const editor = useCreateBlockNote({
    initialContent: parseInitialContent(page.content),
  });

  const scheduleSave = useCallback(
    (nextTitle: string, blocks: unknown) => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
      setStatus("saving");
      saveTimer.current = setTimeout(async () => {
        const formData = new FormData();
        formData.set("id", page.id);
        formData.set("title", nextTitle);
        formData.set("content", JSON.stringify(blocks));
        await updatePageAction(formData);
        setStatus("saved");
      }, 600);
    },
    [page.id],
  );

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3">
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            scheduleSave(e.target.value, editor.document);
          }}
          placeholder="제목 없음"
          className="min-w-0 flex-1 bg-transparent font-display text-3xl font-semibold text-ink outline-none"
        />
        <span className="shrink-0 font-body text-base text-ink/40">
          {status === "saving" ? "저장 중…" : status === "saved" ? "저장됨" : ""}
        </span>
      </div>

      <div className="min-h-[65vh] flex-1">
        <BlockNoteView
          editor={editor}
          theme={blockNoteTheme}
          onChange={() => scheduleSave(title, editor.document)}
        />
      </div>
    </div>
  );
}
