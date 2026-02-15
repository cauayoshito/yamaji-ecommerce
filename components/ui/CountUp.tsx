"use client";

import { useEffect, useMemo, useState } from "react";

type CountUpProps = {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

export default function CountUp({
  to,
  from = 0,
  duration = 1400,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const [value, setValue] = useState(from);

  const formatter = useMemo(
    () =>
      new Intl.NumberFormat("pt-BR", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      }),
    [decimals]
  );

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const delta = to - from;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOut(progress);
      setValue(from + delta * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [from, to, duration]);

  return (
    <span className={className}>
      {prefix}
      {formatter.format(value)}
      {suffix}
    </span>
  );
}
