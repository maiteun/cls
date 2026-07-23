"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { updatePageAction } from "@/lib/workspace/actions";
import type { PageRow } from "@/lib/supabase/types";

export default function PageEditor({ page }: { page: PageRow }) {
  const [title, setTitle] = useState(page.title);
  const [content, setContent] = useState(page.content);
  const [mode, setMode] = useState<"edit" | "preview">("edit");

  return (
    <form action={updatePageAction} className="flex h-full flex-col gap-3">
      <input type="hidden" name="id" value={page.id} />

      <div className="flex items-center gap-2">
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목 없음"
          className="min-w-0 flex-1 bg-transparent font-display text-xl font-semibold text-ink outline-none"
        />
        <button
          type="button"
          onClick={() => setMode(mode === "edit" ? "preview" : "edit")}
          className="pixel-btn shrink-0 bg-periwinkle px-3 py-1.5 font-body text-base text-ink"
        >
          {mode === "edit" ? "미리보기" : "편집"}
        </button>
        <button
          type="submit"
          className="pixel-btn shrink-0 bg-orange px-3 py-1.5 font-body text-base text-cream"
        >
          저장
        </button>
      </div>

      {mode === "edit" ? (
        <textarea
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="마크다운으로 회의록을 작성하세요..."
          className="bevel-in min-h-[60vh] flex-1 resize-none bg-cream p-4 font-body text-lg leading-relaxed text-ink outline-none"
        />
      ) : (
        <div className="bevel-in md-preview min-h-[60vh] flex-1 overflow-y-auto bg-cream p-4">
          <ReactMarkdown>{content || "_내용 없음_"}</ReactMarkdown>
          <input type="hidden" name="content" value={content} />
        </div>
      )}
    </form>
  );
}
