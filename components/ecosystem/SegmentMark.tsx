import { Dumbbell, Scale, Store, UtensilsCrossed } from "lucide-react";
import type { SegmentSlug } from "@/data/ecosystem";
import { cn } from "@/lib/utils";

const icons = {
  studio: Store,
  eats: UtensilsCrossed,
  fit: Dumbbell,
  legal: Scale,
};

export default function SegmentMark({
  segment,
  className,
}: {
  segment: SegmentSlug;
  className?: string;
}) {
  const Icon = icons[segment];

  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[var(--segment-accent,#5EEAD4)]",
        className
      )}
      aria-hidden="true"
    >
      <Icon className="h-4 w-4" strokeWidth={1.8} />
    </span>
  );
}
