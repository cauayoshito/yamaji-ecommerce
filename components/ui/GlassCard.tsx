import { cn } from "@/lib/utils";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement>;

export default function GlassCard({ className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/5 bg-gradient-to-b from-zinc-900/80 to-zinc-950/80 p-6 md:p-8 backdrop-blur-md shadow-[0_18px_45px_rgba(0,0,0,0.45)] motion-safe:animate-fadeUp",
        className
      )}
      {...props}
    />
  );
}
