"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-2xl flex-col items-center gap-5 px-4 pt-16 text-center sm:pt-24"
    >
      <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
        CLAUDE STUDY
      </h1>

      <p className="font-display text-lg text-orange sm:text-xl">
        우린 클로드로 진짜 만드는 스터디를 합니다.
      </p>

      <p className="max-w-md font-body text-xl leading-snug text-ink/80 sm:text-2xl">
        바이브코딩 · MCP 자동화 · 클로드 디자인까지 처음부터 같이
        만들어갈 사람을 찾습니다.
      </p>

      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <motion.a
          href="#apply"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
          className="pixel-btn-lg inline-block bg-orange px-8 py-3 font-display text-sm text-cream"
        >
          참여하기
        </motion.a>

        <motion.a
          href="/login"
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
          className="pixel-btn-lg inline-block bg-periwinkle px-8 py-3 font-display text-sm text-ink"
        >
          Login
        </motion.a>
      </div>
    </section>
  );
}
