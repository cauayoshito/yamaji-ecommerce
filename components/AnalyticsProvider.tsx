"use client";
import { useEffect } from "react";
import Script from "next/script";
import { GA_ID, trackPageview } from "@/lib/analytics";
import { usePathname, useSearchParams } from "next/navigation";

export default function AnalyticsProvider() {
  const pathname = usePathname();
  const search = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const url = pathname + (search?.toString() ? `?${search.toString()}` : "");
    trackPageview(url);
  }, [pathname, search]);

  if (!GA_ID) return null;

  return (
    <>
      {/* GA4 base */}
      <Script
        id="ga4-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
