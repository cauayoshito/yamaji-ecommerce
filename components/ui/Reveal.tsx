"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  once?: boolean;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  once = true,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReduceMotion(media.matches);
    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, reduceMotion]);

  const style = reduceMotion
    ? { opacity: 1, transform: "none", transition: "none" }
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(16px) scale(0.98)",
        transitionProperty: "opacity, transform",
        transitionDuration: "500ms",
        transitionTimingFunction: "ease-out",
        transitionDelay: `${delay}ms`,
        willChange: "opacity, transform",
      };

  return (
    <div ref={ref} className={cn(className)} style={style}>
      {children}
    </div>
  );
}
