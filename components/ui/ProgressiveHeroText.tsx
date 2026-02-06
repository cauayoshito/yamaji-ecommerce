"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ProgressiveHeroTextProps = {
  phrases: string[];
  className?: string;
};

export default function ProgressiveHeroText({
  phrases,
  className,
}: ProgressiveHeroTextProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const lastIndex = useRef(0);
  const rafRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReduceMotion(media.matches);
    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        const rect = hero.getBoundingClientRect();
        const viewport = window.innerHeight || 1;
        const total = rect.height + viewport * 0.4;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const progress = total === 0 ? 0 : scrolled / total;
        const nextIndex = Math.min(
          phrases.length - 1,
          Math.floor(progress * phrases.length)
        );

        if (nextIndex === lastIndex.current) return;
        lastIndex.current = nextIndex;

        if (reduceMotion) {
          setIndex(nextIndex);
          return;
        }

        setVisible(false);
        if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
          setIndex(nextIndex);
          setVisible(true);
        }, 180);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [phrases, reduceMotion]);

  return (
    <p
      className={cn(
        "transition duration-300 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className
      )}
      aria-live="polite"
    >
      {phrases[index]}
    </p>
  );
}
