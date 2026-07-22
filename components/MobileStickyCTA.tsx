"use client";

import { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { GENERAL_WHATSAPP_LINK } from "@/lib/contact";

type MobileStickyCTAProps = {
  label?: string;
  actionLabel?: string;
  actionHref?: string;
  whatsappHref?: string;
  revealAfter?: number;
};

export default function MobileStickyCTA({
  label = "Studio · Eats · Fit · Legal",
  actionLabel = "Escolher solução",
  actionHref = "#solucoes",
  whatsappHref = GENERAL_WHATSAPP_LINK,
  revealAfter = 360,
}: MobileStickyCTAProps) {
  const [visible, setVisible] = useState(false);
  const actionIsExternal = /^https?:\/\//.test(actionHref);

  useEffect(() => {
    const onScroll = () => {
      const distanceFromBottom =
        document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight);

      setVisible(window.scrollY > revealAfter && distanceFromBottom > 160);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [revealAfter]);

  return (
    <div
      className={`mobile-lead-bar fixed inset-x-0 bottom-0 z-40 px-2 transition duration-300 lg:hidden ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
      role="region"
      aria-label="Acesso rápido às soluções Yamaji"
      aria-hidden={!visible}
    >
      <div className="mx-auto flex w-full max-w-md items-center gap-1.5 rounded-2xl border border-white/[0.1] bg-[#090D11]/96 p-1.5 shadow-[0_18px_55px_-18px_rgba(0,0,0,.95)] backdrop-blur-xl">
        <div className="hidden min-w-0 flex-1 px-2 sm:block">
          <span className="block text-[9px] font-medium uppercase tracking-[0.16em] text-accent">
            Ecossistema Yamaji
          </span>
          <span className="block truncate text-[11px] text-white/55">
            {label}
          </span>
        </div>

        <a
          href={actionHref}
          target={actionIsExternal ? "_blank" : undefined}
          rel={actionIsExternal ? "noreferrer noopener" : undefined}
          data-cta="mobile-sticky-primary"
          data-label={actionLabel}
          className="inline-flex min-h-11 min-w-0 flex-1 items-center justify-center gap-1.5 rounded-xl bg-accent px-3 text-center text-[12px] font-semibold text-[#08090B] sm:flex-none sm:shrink-0"
        >
          <span className="truncate">{actionLabel}</span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0" />
        </a>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Falar com a Yamaji no WhatsApp"
          data-cta="whatsapp"
          data-label="mobile-sticky-whatsapp"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white"
        >
          <MessageCircle className="h-5 w-5" fill="currentColor" />
        </a>
      </div>
    </div>
  );
}
