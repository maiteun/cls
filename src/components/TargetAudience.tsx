"use client";

import { motion } from "framer-motion";
import RetroWindow from "./RetroWindow";

const TARGETS = [
  {
    no: "01",
    icon: "▶◼",
    title: "바이브코딩 입문자",
    desc: "코드보다 아이디어가 먼저인, 만들면서 배우고 싶은 분",
  },
  {
    no: "02",
    icon: "⚙◆",
    title: "MCP·자동화 관심자",
    desc: "MCP와 자동화로 반복 업무를 줄이고 싶은 분",
  },
  {
    no: "03",
    icon: "◇✦",
    title: "클로드 디자인 입문자",
    desc: "클로드로 기획·디자인까지 확장하고 싶은 분",
  },
  {
    no: "04",
    icon: "?!",
    title: "시작이 막막한 초보자",
    desc: "어디서부터 시작해야 할지 막막한 완전 초보자",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, bounce: 0.3, duration: 0.5 },
  },
};

export default function TargetAudience() {
  return (
    <section id="target" className="mx-auto max-w-3xl px-4 pt-10 sm:pt-14">
      <RetroWindow title="이런 분을 찾습니다.exe">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {TARGETS.map((t) => (
            <motion.div
              key={t.no}
              variants={item}
              className="bevel-out relative bg-beige p-4 pt-6"
            >
              <span className="absolute left-2 top-1 font-display text-[10px] text-purple-deep">
                {t.no}
              </span>
              <div className="mb-2 font-display text-base text-purple">
                {t.icon}
              </div>
              <h3 className="font-display text-[11px] sm:text-xs mb-2 leading-relaxed">
                {t.title}
              </h3>
              <p className="font-body text-lg leading-tight text-ink/80">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </RetroWindow>
    </section>
  );
}
