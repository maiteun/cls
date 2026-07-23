"use client";

import dynamic from "next/dynamic";
import type { PageRow } from "@/lib/supabase/types";

const BlockEditor = dynamic(() => import("./BlockEditor"), {
  ssr: false,
  loading: () => (
    <div className="p-4 font-body text-lg text-ink/40">
      에디터를 불러오는 중…
    </div>
  ),
});

export default function PageEditor({ page }: { page: PageRow }) {
  return <BlockEditor page={page} />;
}
