import { cn } from "@/lib/utils";

type MetricChipProps = React.HTMLAttributes<HTMLSpanElement>;

export default function MetricChip({ className, ...props }: MetricChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-fg",
        className
      )}
      {...props}
    />
  );
}
