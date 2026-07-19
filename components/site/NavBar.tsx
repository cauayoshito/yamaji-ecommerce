"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import SegmentMark from "@/components/ecosystem/SegmentMark";
import { ecosystemSolutions } from "@/data/ecosystem";
import { GENERAL_WHATSAPP_LINK } from "@/lib/contact";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobilePanelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSolutionsOpen(false);
        setMobileOpen(false);
      }
    }
    function onPointerDown(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    if (mobileOpen) {
      requestAnimationFrame(() => closeButtonRef.current?.focus());
    } else if (mobileTriggerRef.current) {
      mobileTriggerRef.current.focus();
      mobileTriggerRef.current = null;
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleMobileMenuKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key !== "Tab") return;
    const focusable = Array.from(
      mobilePanelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ) ?? []
    );
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  const isActive = (href: string) => pathname === href;
  const processHref = pathname === "/" ? "#como-funciona" : "/#como-funciona";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-300",
        scrolled
          ? "border-white/[0.07] bg-[#08090B]/88 backdrop-blur-xl"
          : "border-transparent bg-[#08090B]/45 backdrop-blur-md"
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-[68px]">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-md focus-visible:ring-2 focus-visible:ring-accent/60"
          aria-label="Ecossistema Yamaji — página inicial"
        >
          <Image
            src="/images/logo-yamaji-aqua.png"
            alt=""
            width={30}
            height={30}
            priority
            className="h-7 w-7 object-contain"
          />
          <span className="text-sm font-semibold tracking-tight text-white sm:text-[15px]">
            Yamaji Studio
          </span>
          <span className="hidden rounded-full border border-accent/15 bg-accent/[0.06] px-2 py-1 text-[8px] font-medium uppercase tracking-[0.14em] text-accent sm:inline-flex">
            Ecossistema
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-[13px] text-white/58 lg:flex" aria-label="Navegação principal">
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setSolutionsOpen((open) => !open)}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-md py-2 transition hover:text-white focus-visible:ring-2 focus-visible:ring-accent/60",
                ecosystemSolutions.some((item) => isActive(`/${item.slug}`)) && "text-white"
              )}
              aria-haspopup="menu"
              aria-expanded={solutionsOpen}
              aria-controls="solutions-menu"
            >
              Soluções
              <ChevronDown className={cn("h-3.5 w-3.5 transition", solutionsOpen && "rotate-180")} />
            </button>

            {solutionsOpen && (
              <div
                id="solutions-menu"
                role="menu"
                className="absolute left-1/2 mt-3 w-[540px] -translate-x-1/2 rounded-2xl border border-white/[0.09] bg-[#0A0D12]/98 p-3 shadow-[0_24px_80px_-28px_rgba(0,0,0,.95)] backdrop-blur-xl"
              >
                <div className="grid grid-cols-2 gap-2">
                  {ecosystemSolutions.map((solution) => (
                    <Link
                      key={solution.slug}
                      href={`/${solution.slug}`}
                      role="menuitem"
                      onClick={() => setSolutionsOpen(false)}
                      className={cn(
                        "group flex gap-3 rounded-xl border border-transparent p-3 transition hover:border-white/[0.08] hover:bg-white/[0.035]",
                        isActive(`/${solution.slug}`) && "border-white/[0.08] bg-white/[0.04]"
                      )}
                      style={{
                        "--segment-accent": solution.accent,
                        "--segment-soft": solution.accentSoft,
                      } as React.CSSProperties}
                    >
                      <SegmentMark segment={solution.slug} className="h-9 w-9 shrink-0 rounded-lg" />
                      <div>
                        <p className="text-xs font-semibold text-white">{solution.name}</p>
                        <p className="mt-1 text-[10px] leading-relaxed text-white/35">{solution.audience}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/cases" className={cn("transition hover:text-white", isActive("/cases") && "text-white")}>Cases</Link>
          <Link href={processHref} className="transition hover:text-white">Como funciona</Link>
          <Link href="/sobre" className={cn("transition hover:text-white", isActive("/sobre") && "text-white")}>Sobre</Link>
        </nav>

        <a
          href={GENERAL_WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer noopener"
          data-cta="whatsapp"
          data-label="navbar"
          className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-[12px] font-semibold text-[#08090B] transition hover:-translate-y-0.5 hover:bg-[#7bf0dc] lg:inline-flex"
        >
          Falar com a Yamaji
          <ArrowRight className="h-3.5 w-3.5" />
        </a>

        <button
          type="button"
          onClick={(event) => {
            mobileTriggerRef.current = event.currentTarget;
            setMobileOpen(true);
          }}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/75 lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </Container>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/75 backdrop-blur-sm transition-opacity lg:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <aside
        ref={mobilePanelRef}
        id="mobile-navigation"
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-[90%] max-w-sm overflow-y-auto border-l border-white/[0.08] bg-[#090C10] p-5 shadow-2xl transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu do site"
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
        onKeyDown={handleMobileMenuKeyDown}
      >
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
          <div className="flex items-center gap-2.5">
            <Image src="/images/logo-yamaji-aqua.png" alt="" width={28} height={28} />
            <div>
              <p className="text-sm font-semibold text-white">Yamaji Studio</p>
              <p className="text-[9px] uppercase tracking-[0.14em] text-accent">Ecossistema Yamaji</p>
            </div>
          </div>
          <button ref={closeButtonRef} type="button" onClick={() => setMobileOpen(false)} className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70" aria-label="Fechar menu">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="py-6">
          <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.18em] text-white/30">Soluções por mercado</p>
          <nav className="space-y-2" aria-label="Soluções Yamaji">
            {ecosystemSolutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/${solution.slug}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3"
                style={{
                  "--segment-accent": solution.accent,
                  "--segment-soft": solution.accentSoft,
                } as React.CSSProperties}
              >
                <SegmentMark segment={solution.slug} className="h-9 w-9 shrink-0 rounded-lg" />
                <div>
                  <p className="text-sm font-semibold text-white">{solution.name}</p>
                  <p className="text-[10px] text-white/35">{solution.audience}</p>
                </div>
              </Link>
            ))}
          </nav>
        </div>

        <nav className="space-y-1 border-t border-white/[0.08] pt-5 text-sm text-white/65" aria-label="Outras páginas">
          <Link href="/cases" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-white/[0.04] hover:text-white">Cases</Link>
          <Link href={processHref} onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-white/[0.04] hover:text-white">Como funciona</Link>
          <Link href="/sobre" onClick={() => setMobileOpen(false)} className="block rounded-lg px-3 py-3 hover:bg-white/[0.04] hover:text-white">Sobre</Link>
        </nav>

        <a href={GENERAL_WHATSAPP_LINK} target="_blank" rel="noreferrer noopener" onClick={() => setMobileOpen(false)} data-cta="whatsapp" data-label="mobile-navbar" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-[#08090B]">
          Falar com a Yamaji <ArrowRight className="h-4 w-4" />
        </a>
      </aside>
    </header>
  );
}
