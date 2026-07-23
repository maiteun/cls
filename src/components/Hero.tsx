"use client";

import { motion } from "framer-motion";
import RetroWindow from "./RetroWindow";
import PixelIllustration from "./PixelIllustration";

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-3xl px-4 pt-10 sm:pt-16">
      <RetroWindow
        title="CLAUDE STUDY"
        subtitleBar="AI를 제대로 쓰는 능력, 같이 만듭니다"
      >
        <PixelIllustration />

        <div className="mt-6 flex flex-col items-center gap-4 text-center">
          <p className="font-body text-lg sm:text-xl leading-snug text-ink/80 max-w-md">
            바이브코딩 · MCP 자동화 · 클로드 디자인까지, 한 스터디에서 처음부터
            같이 만들어갑니다.
          </p>

          <motion.a
            href="#apply"
            whileHover={{ x: 3, y: 3 }}
            whileTap={{ x: 6, y: 6 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            className="pixel-btn-lg bevel-out inline-block bg-orange px-8 py-4 font-display text-xs sm:text-sm text-ink"
          >
            지원하기 ▶
          </motion.a>
        </div>
      </RetroWindow>
    </section>
  );
}
