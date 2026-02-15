"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function AnchorNav({
  items,
}: {
  items: { href: string; label: string }[];
}) {
  const [active, setActive] = useState(items[0]?.href);
  useEffect(() => {
    const els = items
      .map((i) => document.querySelector(i.href))
      .filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Atalhos da página"
      className="sticky top-16 z-30 border-y border-white/10 bg-black/30 backdrop-blur"
    >
      <div className="mx-auto max-w-container px-4">
        <ul className="no-scrollbar flex overflow-x-auto">
          {items.map((a, i) => (
            <li key={a.href} className="flex items-stretch">
              {i !== 0 && (
                <span className="mx-1 my-2 h-5 w-px bg-white/10" aria-hidden />
              )}
              <a
                href={a.href}
                className={`inline-flex items-center gap-1 px-3 py-2 text-[13px] rounded-md hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400
                  ${
                    active === a.href
                      ? "bg-white/10 text-white"
                      : "text-white/80"
                  }`}
              >
                {a.label}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
