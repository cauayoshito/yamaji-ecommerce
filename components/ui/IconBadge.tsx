import { cn } from "@/lib/utils";

type IconBadgeProps = React.HTMLAttributes<HTMLDivElement>;

export default function IconBadge({ className, ...props }: IconBadgeProps) {
  return (
    <div
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-accent shadow-[0_0_20px_rgba(0,255,163,0.15)]",
        className
      )}
      {...props}
    />
  );
}
