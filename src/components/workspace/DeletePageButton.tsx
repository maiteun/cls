"use client";

import { deletePageAction } from "@/lib/workspace/actions";

export default function DeletePageButton({ id }: { id: string }) {
  return (
    <form
      action={deletePageAction}
      onSubmit={(e) => {
        if (!confirm("이 페이지와 하위 페이지를 모두 삭제할까요?")) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        title="삭제"
        className="font-body text-lg text-ink/40 hover:text-red-accent"
      >
        ✕
      </button>
    </form>
  );
}
