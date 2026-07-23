"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RetroWindowProps = {
  title: string;
  subtitleBar?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  titleBarClassName?: string;
  delay?: number;
};

export default function RetroWindow({
  title,
  subtitleBar,
  children,
  className = "",
  bodyClassName = "",
  titleBarClassName = "",
  delay = 0,
}: RetroWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: "spring", bounce: 0.3, duration: 0.6, delay }}
      className={`bevel-out bg-cream ${className}`}
    >
      <div
        className={`flex items-center justify-between gap-2 bg-purple-deep px-3 py-2 border-b-2 border-ink ${titleBarClassName}`}
      >
        <span className="font-display text-[10px] sm:text-xs text-cream tracking-wide truncate">
          {title}
        </span>
        <button
          type="button"
          aria-hidden="true"
          tabIndex={-1}
          className="pixel-btn bevel-out !shadow-[2px_2px_0_0_var(--color-ink)] h-5 w-5 shrink-0 bg-orange text-ink text-[10px] leading-none flex items-center justify-center font-display"
        >
          ✕
        </button>
      </div>

      {subtitleBar ? (
        <div className="bg-purple px-3 py-2 border-b-2 border-ink">
          <span className="font-display text-[9px] sm:text-[11px] leading-relaxed text-neon">
            {subtitleBar}
          </span>
        </div>
      ) : null}

      <div className={`p-4 sm:p-6 ${bodyClassName}`}>{children}</div>
    </motion.div>
  );
}
