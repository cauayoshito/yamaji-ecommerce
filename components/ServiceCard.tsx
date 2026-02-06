import { type ElementType } from "react";

type Props = {
  title: string;
  tagline?: string;
  Icon: ElementType;
  items: string[];
};

export default function ServiceCard({ title, tagline, Icon, items }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition hover:border-accent/60 hover:shadow-[0_0_24px_rgba(0,255,163,0.18)]">
      {/* glow suave ao passar o mouse */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 blur-[60px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="flex items-start gap-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-accent">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-display text-lg text-fg">{title}</h3>
          {tagline && <p className="mt-1 text-sm text-muted">{tagline}</p>}
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-muted">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {it}
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-fg transition group-hover:border-accent/40">
          Detalhes
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18l6-6-6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
