"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type AsTag = "div" | "li" | "section" | "article" | "ul";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: AsTag;
};

export default function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  as = "div",
}: Props) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (prefersReducedMotion) {
    const Tag = as as "div";
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
