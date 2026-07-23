import RetroWindow from "@/components/RetroWindow";

export default function SetupNotice() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-16">
      <RetroWindow
        title="설정이 필요해요"
        subtitleBar="Supabase 연결이 아직 안 되어 있어요."
      >
        <div className="flex flex-col gap-3 font-body text-lg leading-snug text-ink/80">
          <ol className="list-decimal space-y-2 pl-5">
            <li>supabase.com에서 프로젝트를 만드세요.</li>
            <li>
              <code className="bevel-in bg-cream px-1">supabase/schema.sql</code>
              을 Dashboard → SQL Editor에서 실행하세요.
            </li>
            <li>
              Project Settings → API에서 URL과 service_role key를 복사해
              <code className="bevel-in bg-cream px-1">.env.local</code>에
              붙여넣으세요 (
              <code className="bevel-in bg-cream px-1">
                .env.local.example
              </code>{" "}
              참고).
            </li>
            <li>개발 서버를 재시작하세요.</li>
          </ol>
        </div>
      </RetroWindow>
    </main>
  );
}
