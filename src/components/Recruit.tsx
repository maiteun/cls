"use client";

import { motion } from "framer-motion";
import RetroWindow from "./RetroWindow";
import {
  APPLY_FORM_URL,
  RECRUIT_CAPACITY_MAX,
  RECRUIT_CAPACITY_MIN,
  RECRUIT_CURRENT,
  RECRUIT_DEADLINE,
} from "@/lib/constants";

function getDday(deadline: string) {
  const diff = Math.ceil(
    (new Date(`${deadline}T23:59:59`).getTime() - Date.now()) /
      (1000 * 60 * 60 * 24),
  );
  if (diff < 0) return "모집 마감";
  if (diff === 0) return "오늘 마감";
  return `D-${diff}`;
}

export default function Recruit() {
  const dday = getDday(RECRUIT_DEADLINE);

  return (
    <section id="apply" className="mx-auto max-w-2xl px-4 pt-16 sm:pt-20">
      <RetroWindow title="모집 안내">
        <div className="flex flex-col gap-3">
          <p className="font-body text-xl text-ink/70 sm:text-2xl">
            모집 인원 {RECRUIT_CAPACITY_MIN}~{RECRUIT_CAPACITY_MAX}명 ·{" "}
            <span className="font-semibold text-red-accent">{dday}</span>
          </p>
          <p className="font-body text-xl text-ink/70 sm:text-2xl">
            현재 {RECRUIT_CURRENT}명 지원 완료 · 정원 마감 시 조기 마감될 수
            있습니다.
          </p>

          <motion.a
            href={APPLY_FORM_URL}
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            className="pixel-btn-lg mt-2 inline-block self-start bg-orange px-6 py-3 font-display text-sm text-cream"
          >
            지금 지원하기
          </motion.a>
        </div>
      </RetroWindow>
    </section>
  );
}
