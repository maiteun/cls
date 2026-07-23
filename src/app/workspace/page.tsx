import RetroWindow from "@/components/RetroWindow";
import WorkspaceShell from "@/components/workspace/WorkspaceShell";

export default function WorkspaceIndexPage() {
  return (
    <WorkspaceShell>
      <RetroWindow title="회의록">
        <p className="font-body text-lg text-ink/70">
          왼쪽에서 문서를 선택하거나, &quot;+ 새 문서&quot;로 회의록을
          시작하세요.
        </p>
      </RetroWindow>
    </WorkspaceShell>
  );
}
