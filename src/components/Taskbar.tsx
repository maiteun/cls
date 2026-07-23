"use client";

import { motion } from "framer-motion";
import { APPLY_FORM_URL } from "@/lib/constants";

const NAV_ITEMS = [
  { icon: "🖥", label: "Home", href: "#hero" },
  { icon: "🎯", label: "Target", href: "#target" },
  { icon: "📚", label: "Curriculum", href: "#curriculum" },
  { icon: "❗", label: "Why", href: "#motivation" },
];

export default function Taskbar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t-2 border-ink bg-purple-darker px-2 py-1.5 sm:px-3">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-1.5 sm:gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="pixel-btn bevel-out flex h-9 w-9 items-center justify-center bg-periwinkle text-sm sm:h-10 sm:w-10"
              title={n.label}
            >
              {n.icon}
            </a>
          ))}
        </div>

        <motion.a
          id="apply-cta"
          href={APPLY_FORM_URL}
          whileHover={{ x: 2, y: 2 }}
          whileTap={{ x: 4, y: 4 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
          className="pixel-btn bevel-out flex items-center gap-1.5 bg-orange px-3 py-2 font-display text-[9px] text-ink sm:px-4 sm:text-[10px]"
        >
          지원하기 ▶
        </motion.a>
      </div>
    </div>
  );
}
