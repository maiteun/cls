"use client";

import { motion } from "framer-motion";

export default function Motivation() {
  return (
    <motion.section
      id="motivation"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl px-4 pt-16 text-center sm:pt-20"
    >
      <p className="font-display text-xl leading-relaxed text-orange sm:text-2xl">
        AI 활용 능력이 취업 시장의
        <br />
        새로운 무기가 되고 있습니다
      </p>
      <p className="mt-3 font-body text-xl text-ink/70 sm:text-2xl">
        지금 시작하지 않으면, 그 격차는 더 벌어집니다.
      </p>
    </motion.section>
  );
}
