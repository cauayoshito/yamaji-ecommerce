"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackLead } from "@/lib/metaPixel";

type WhatsAppButtonProps = {
  href: string;
  label: string;
  trackLabel?: string;
  className?: string;
  variant?: "primary" | "secondary";
};

export default function WhatsAppButton({
  href,
  label,
  trackLabel,
  className,
  variant = "primary",
}: WhatsAppButtonProps) {
  const handleClick = () => {
    if (typeof window === "undefined") return;
    const payload = { label: trackLabel || label };

    if (window.plausible) window.plausible("ClickWhatsApp", { props: payload });
    if (window.gtag) window.gtag("event", "ClickWhatsApp", payload);
    trackLead();
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "ClickWhatsApp",
        label: payload.label,
      });
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      data-cta="whatsapp"
      data-label={trackLabel || label}
      aria-label={label}
      className={cn(
        "btn",
        variant === "primary" ? "btn-primary" : "btn-secondary",
        "w-full justify-center text-base md:text-sm px-6 py-4 md:py-3",
        className
      )}
    >
      {label}
    </Link>
  );
}
