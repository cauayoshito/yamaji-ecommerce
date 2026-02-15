// lib/analytics.ts
// Inicialização simples de GA4 + helpers de evento

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export function gtag(...args: any[]) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag(...args);
  }
}

export function trackPageview(url: string) {
  if (!GA_ID) return;
  gtag("config", GA_ID, { page_path: url });
}

type EventParams = {
  category: string;
  label?: string;
  value?: number;
  [k: string]: any;
};

export function trackEvent(action: string, params: EventParams) {
  if (!GA_ID) return;
  gtag("event", action, params);
}

// atalhos semânticos
export const trackLeadWhats = (source: string) =>
  trackEvent("lead_whatsapp_click", { category: "lead", label: source });

export const trackViewHowItWorks = (source: string) =>
  trackEvent("view_how_it_works", { category: "navigation", label: source });

export const trackCTA = (id: string) =>
  trackEvent("cta_click", { category: "cta", label: id });
