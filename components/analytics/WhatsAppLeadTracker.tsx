"use client";

import { useEffect } from "react";
import { trackLead } from "@/lib/metaPixel";

const WHATSAPP_HOSTS = ["wa.me", "api.whatsapp.com"];

const isWhatsAppHref = (href: string) => {
  try {
    const url = new URL(href, window.location.origin);
    return WHATSAPP_HOSTS.some((host) => url.hostname.includes(host));
  } catch {
    return false;
  }
};

export default function WhatsAppLeadTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a[href]");
      if (!link) {
        return;
      }

      const href = link.getAttribute("href");
      if (!href || !isWhatsAppHref(href)) {
        return;
      }

      trackLead();
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
