"use client";

import { motion } from "framer-motion";
import { APPLY_FORM_URL } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "Target", href: "#target" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Why", href: "#motivation" },
];

export default function Taskbar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-purple-darker px-3 py-2.5">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-2">
        <nav className="flex items-center gap-4 sm:gap-6">
          {NAV_ITEMS.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="font-body text-lg text-cream/70 transition-colors hover:text-cream sm:text-xl"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <motion.a
          id="apply-cta"
          href={APPLY_FORM_URL}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
          className="pixel-btn shrink-0 bg-orange px-4 py-2 font-display text-xs text-cream"
        >
          지원하기
        </motion.a>
      </div>
    </div>
  );
}
