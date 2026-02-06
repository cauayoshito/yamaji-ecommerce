"use client";

import {
  motion,
  MotionConfig,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import React, { useCallback, forwardRef } from "react";

type HoverCardProps = {
  children: React.ReactNode;
  className?: string;
  /** desliga o efeito de inclinação */
  disableTilt?: boolean;
  /** desliga o glow que segue o cursor */
  disableGlow?: boolean;
  /** intensidade do tilt (graus) */
  tilt?: number; // default 8
};

const HoverCard = forwardRef<HTMLDivElement, HoverCardProps>(
  ({ children, className = "", disableTilt, disableGlow, tilt = 8 }, ref) => {
    const prefersReduced = useReducedMotion();
    const shouldReduce = prefersReduced || disableTilt;

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-50, 50], [tilt, -tilt]);
    const rotateY = useTransform(x, [-50, 50], [-tilt, tilt]);

    const handleMove = useCallback(
      (e: React.PointerEvent<HTMLDivElement>) => {
        if (shouldReduce) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        x.set((px - 0.5) * 100);
        y.set((py - 0.5) * 100);
      },
      [x, y, shouldReduce]
    );

    const reset = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <MotionConfig transition={{ duration: 0.5, ease: "easeOut" }}>
        {/* wrapper com perspective para 3D real */}
        <div className="relative [perspective:1000px]" onPointerLeave={reset}>
          <motion.div
            ref={ref}
            role="group"
            tabIndex={0}
            onPointerMove={handleMove}
            onFocus={reset}
            onBlur={reset}
            style={
              shouldReduce
                ? { transformStyle: "preserve-3d" as any }
                : { rotateX, rotateY, transformStyle: "preserve-3d" as any }
            }
            whileHover={shouldReduce ? {} : { scale: 1.02 }}
            whileFocus={{ scale: 1.02 }}
            className={[
              "relative rounded-2xl border border-white/10 bg-card/70 p-6",
              "will-change-transform shadow-none transition",
              "focus:outline-none focus:ring-2 focus:ring-accent/60",
              className,
            ].join(" ")}
          >
            {/* Glow que segue o cursor */}
            {!prefersReduced && !disableGlow && (
              <motion.div
                aria-hidden
                style={{ x, y, translateX: "-50%", translateY: "-50%" }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
              />
            )}

            {children}
          </motion.div>
        </div>
      </MotionConfig>
    );
  }
);

HoverCard.displayName = "HoverCard";
export default HoverCard;
