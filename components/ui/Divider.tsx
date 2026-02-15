import { cn } from "@/lib/utils";

type DividerProps = React.HTMLAttributes<HTMLDivElement>;

export default function Divider({ className, ...props }: DividerProps) {
  return (
    <div
      className={cn(
        "h-px w-full bg-gradient-to-r from-white/5 via-white/40 to-white/5",
        className
      )}
      {...props}
    />
  );
}
