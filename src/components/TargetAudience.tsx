"use client";

import { motion } from "framer-motion";
import RetroWindow from "./RetroWindow";

const TARGETS = [
  {
    title: "바이브코딩 입문자",
    desc: "코드보다 아이디어가 먼저인, 만들면서 배우고 싶은 분",
  },
  {
    title: "MCP·자동화 관심자",
    desc: "MCP와 자동화로 반복 업무를 줄이고 싶은 분",
  },
  {
    title: "클로드 디자인 입문자",
    desc: "클로드로 기획·디자인까지 확장하고 싶은 분",
  },
  {
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
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function TargetAudience() {
  return (
    <section id="target" className="mx-auto max-w-2xl px-4 pt-16 sm:pt-20">
      <RetroWindow title="이런 분을 찾습니다">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-3"
        >
          {TARGETS.map((t) => (
            <motion.p
              key={t.title}
              variants={item}
              className="font-body text-xl leading-snug text-ink/80 sm:text-2xl"
            >
              <span className="font-semibold text-ink">{t.title}.</span>{" "}
              {t.desc}
            </motion.p>
          ))}
        </motion.div>
      </RetroWindow>
    </section>
  );
}
