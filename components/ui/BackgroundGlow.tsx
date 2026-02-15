import { cn } from "@/lib/utils";

type BackgroundGlowProps = React.HTMLAttributes<HTMLDivElement>;

export default function BackgroundGlow({ className, ...props }: BackgroundGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute right-10 top-24 h-96 w-96 rounded-full bg-accent2/20 blur-[140px]" />
    </div>
  );
}
