import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export default function SectionHeader({
  title,
  eyebrow,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          {eyebrow}
        </span>
      ) : null}
      <h2 className={cn("h2 text-fg", titleClassName)}>{title}</h2>
      {description ? (
        <p className="text-base text-muted md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
