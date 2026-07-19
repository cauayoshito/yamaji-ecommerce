import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type DeviceFrameProps = {
  children: ReactNode;
  label: string;
  kind?: "browser" | "phone" | "panel";
  className?: string;
};

export default function DeviceFrame({
  children,
  label,
  kind = "panel",
  className,
}: DeviceFrameProps) {
  return (
    <div
      className={cn(
        "overflow-hidden border border-white/10 bg-[#0B0E13] shadow-[0_24px_70px_-32px_rgba(0,0,0,0.9)]",
        kind === "phone" ? "rounded-[1.7rem]" : "rounded-2xl",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.025] px-3 py-2",
          kind === "phone" && "justify-center"
        )}
      >
        {kind !== "phone" && (
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/10" />
          </div>
        )}
        <span className="truncate text-[9px] font-medium uppercase tracking-[0.14em] text-white/35">
          {label}
        </span>
      </div>
      {children}
    </div>
  );
}
