"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RetroWindowProps = {
  title?: string;
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
  delay = 0,
}: RetroWindowProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {title ? (
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-orange">
          {title}
        </h2>
      ) : null}

      {subtitleBar ? (
        <p className="mt-1 font-body text-lg text-ink/70">{subtitleBar}</p>
      ) : null}

      <div className={`${title ? "mt-4" : ""} ${bodyClassName}`}>
        {children}
      </div>
    </motion.section>
  );
}
