"use client";

import { motion } from "framer-motion";
import RetroWindow from "./RetroWindow";

const MENU_ITEMS = [
  { icon: "🔌", label: "MCP 연결", href: "#curriculum" },
  { icon: "🧩", label: "스킬·커넥터", href: "#curriculum" },
  { icon: "⌨", label: "바이브코딩 실전", href: "#curriculum" },
  { icon: "⚡", label: "자동화 워크플로우", href: "#curriculum" },
  { icon: "🗂", label: "결과물 포트폴리오화", href: "#curriculum" },
  { icon: "🏠", label: "Back to Lobby", href: "#hero" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, bounce: 0.3, duration: 0.5 },
  },
};

export default function Curriculum() {
  return (
    <section id="curriculum" className="mx-auto max-w-3xl px-4 pt-10 sm:pt-14">
      <RetroWindow title="무엇을 배우나요 — MENU.sys">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3"
        >
          {MENU_ITEMS.map((m) => (
            <motion.a
              key={m.label}
              href={m.href}
              variants={item}
              className="bevel-out group flex flex-col items-center justify-center gap-2 bg-cream px-3 py-6 text-center transition-colors duration-100 hover:bg-ink hover:border-neon"
            >
              <span className="text-2xl">{m.icon}</span>
              <span className="font-display text-[10px] leading-relaxed text-ink group-hover:text-neon">
                {m.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </RetroWindow>
    </section>
  );
}
