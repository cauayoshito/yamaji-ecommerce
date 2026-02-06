// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";

const SERVICES = [
  {
    href: "/servicos/sites",
    title: "Sites que vendem",
    desc: "Arquitetura, SEO e UX para conversão real.",
  },
  {
    href: "/servicos/ads",
    title: "Gestão de Ads",
    desc: "Google & Meta orientados por oferta e dados.",
  },
  {
    href: "/servicos/ia-automacao",
    title: "IA que fecha 24/7",
    desc: "Chatbots e automações no WhatsApp/CRM.",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  // fecha dropdown ao clicar fora / ESC
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setServicesOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  // barra de progresso de scroll
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const h = doc.scrollHeight - doc.clientHeight;
      const pct = h > 0 ? (window.scrollY / h) * 100 : 0;
      setScrollPct(Math.min(100, Math.max(0, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || pathname?.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F14]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[#0B0F14]/70">
      {/* progress bar */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-white/5">
        <div
          className="h-full bg-teal-400/70 transition-[width]"
          style={{ width: `${scrollPct}%` }}
          aria-hidden
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          aria-label="Voltar para a página inicial"
        >
          <Image
            src="/images/logo-yamaji-aqua.png"
            alt="Yamaji Studio"
            width={28}
            height={28}
            priority
            className="h-7 w-7 object-contain"
          />
          <span className="text-sm md:text-base font-semibold tracking-wide">
            Yamaji<span className="text-teal-400">Studio</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm text-white/80"
          aria-label="Navegação principal"
        >
          {/* Dropdown Serviços */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-1 py-1 hover:text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400",
                SERVICES.some((s) => isActive(s.href)) && "text-white"
              )}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Serviços
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>

            {servicesOpen && (
              <div
                id="services-menu"
                role="menu"
                aria-label="Serviços"
                className="absolute left-0 mt-2 w-[300px] rounded-xl border border-white/10 bg-[#0B0F14] shadow-xl shadow-black/30 p-2"
              >
                {SERVICES.map((s) => (
                  <ServiceItem
                    key={s.href}
                    href={s.href}
                    title={s.title}
                    desc={s.desc}
                    active={isActive(s.href)}
                    onClick={() => setServicesOpen(false)}
                  />
                ))}
              </div>
            )}
          </div>

          <a href="/#processo" className="hover:text-white transition">
            Processo
          </a>
          <a href="/#cases" className="hover:text-white transition">
            Cases
          </a>
          <a href="/#comparativo" className="hover:text-white transition">
            Comparativo
          </a>
          <a href="/#depoimentos" className="hover:text-white transition">
            Depoimentos
          </a>
        </nav>

        {/* CTA desktop */}
        <Button
          asChild
          className="hidden md:inline-flex bg-teal-400/90 text-[#0B0F14] hover:bg-teal-400"
        >
          <a
            href="#cta"
            aria-label="Diagnosticar meu site"
            data-cta="cta"
            data-label="Header - Diagnosticar meu site"
          >
            Diagnosticar meu site
          </a>
        </Button>

        {/* Hamburguer mobile */}
        <button
          className="md:hidden text-white/80 rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#0B0F14] border-t border-white/10"
        >
          <nav
            className="flex flex-col px-4 py-3 text-sm text-white/80 gap-3"
            aria-label="Navegação mobile"
          >
            <details className="group">
              <summary className="list-none flex items-center justify-between cursor-pointer select-none py-2">
                <span className="font-medium">Serviços</span>
                <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
              </summary>
              <div className="mt-1 ml-2 flex flex-col gap-2">
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    aria-current={isActive(s.href) ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-md px-2 py-2 hover:bg-white/5",
                      isActive(s.href) && "text-white"
                    )}
                  >
                    <span className="block">{s.title}</span>
                    <span className="block text-xs text-white/60">
                      {s.desc}
                    </span>
                  </Link>
                ))}
              </div>
            </details>

            <a href="/#processo" onClick={() => setMobileOpen(false)}>
              Processo
            </a>
            <a href="/#cases" onClick={() => setMobileOpen(false)}>
              Cases
            </a>
            <a href="/#comparativo" onClick={() => setMobileOpen(false)}>
              Comparativo
            </a>
            <a href="/#depoimentos" onClick={() => setMobileOpen(false)}>
              Depoimentos
            </a>

            <a
              href="#cta"
              className="mt-2 rounded-lg bg-teal-400 text-[#0B0F14] font-semibold text-center py-2"
              data-cta="cta"
              data-label="Header (mobile) - Diagnosticar meu site"
              onClick={() => setMobileOpen(false)}
            >
              Diagnosticar meu site
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function ServiceItem({
  href,
  title,
  desc,
  active,
  onClick,
}: {
  href: string;
  title: string;
  desc: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      role="menuitem"
      className={cn(
        "block rounded-lg px-3 py-2 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400",
        active && "bg-white/5 text-white"
      )}
    >
      <p className="font-medium text-white">{title}</p>
      <p className="text-xs text-white/60">{desc}</p>
    </Link>
  );
}
