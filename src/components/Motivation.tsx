"use client";

import RetroWindow from "./RetroWindow";

export default function Motivation() {
  return (
    <section id="motivation" className="mx-auto max-w-3xl px-4 pt-10 sm:pt-14">
      <div className="mx-auto max-w-sm">
        <RetroWindow
          title="시스템 알림"
          titleBarClassName="!bg-purple-darker"
          bodyClassName="text-center"
        >
          <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center border-2 border-ink bg-neon font-display text-sm">
            !
          </div>
          <p className="font-display text-[11px] sm:text-xs leading-loose text-purple-deep">
            AI 활용 능력이 취업 시장의
            <br />
            새로운 무기가 되고 있습니다
          </p>
          <p className="mt-3 font-body text-lg text-ink/70">
            지금 시작하지 않으면, 그 격차는 더 벌어집니다.
          </p>
        </RetroWindow>
      </div>
    </section>
  );
}
