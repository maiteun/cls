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
  if (diff < 0) return "D-CLOSED";
  if (diff === 0) return "D-DAY";
  return `D-${diff}`;
}

export default function Recruit() {
  const dday = getDday(RECRUIT_DEADLINE);
  const filledSlots = Array.from({ length: RECRUIT_CAPACITY_MAX }, (_, i) => i < RECRUIT_CURRENT);

  return (
    <section id="apply" className="mx-auto max-w-3xl px-4 pt-10 sm:pt-14">
      <RetroWindow title="모집 안내 — STATUS.bar">
        <div className="flex flex-col gap-4">
          <div className="bevel-in flex flex-wrap items-center justify-between gap-2 bg-purple/10 px-3 py-2">
            <span className="font-display text-[10px] sm:text-[11px] text-purple-deep">
              모집 인원 {RECRUIT_CAPACITY_MIN}~{RECRUIT_CAPACITY_MAX}명
            </span>
            <span className="font-display text-[10px] sm:text-[11px] bg-red-accent text-cream px-2 py-1">
              {dday}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {filledSlots.map((filled, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, type: "spring", bounce: 0.4 }}
                className={`h-6 w-6 border-2 border-ink pixel-shape sm:h-7 sm:w-7 ${
                  filled ? "bg-purple" : "bg-cream"
                }`}
              />
            ))}
          </div>
          <p className="font-body text-lg text-ink/70">
            현재 {RECRUIT_CURRENT}명 지원 완료 · 정원 마감 시 조기 마감될 수
            있습니다.
          </p>

          <motion.a
            href={APPLY_FORM_URL}
            whileHover={{ x: 3, y: 3 }}
            whileTap={{ x: 6, y: 6 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            className="pixel-btn-lg bevel-out mt-2 inline-block self-start bg-orange px-6 py-3 font-display text-xs text-ink"
          >
            지금 지원하기 ▶
          </motion.a>
        </div>
      </RetroWindow>
    </section>
  );
}
