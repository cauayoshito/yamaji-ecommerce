// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "@/app/globals.css";
import { WHATSAPP_DISPLAY_NUMBER } from "@/lib/contact";

const SITE = {
  name: "Yamaji Studio",
  domain: "yamajistudio.com.br",
  url: "https://www.yamajistudio.com.br",
  description:
    "Criação de sites responsivos, lojas virtuais, sistemas, automação e IA para empresas em Salvador e todo o Brasil.",
  logo: "/images/logo-yamaji-aqua.png",
  tel: WHATSAPP_DISPLAY_NUMBER,
  email: "yamaji.studio@gmail.com",
  sameAs: [
    "https://www.instagram.com/yamajistudio",
    "https://www.linkedin.com/company/yamaji-studio",
  ],
  address: {
    street: "Rua Macário de Castro, 92",
    city: "Salvador",
    region: "BA",
    postal: "41940-700",
    country: "BR",
  },
  plausibleDomain: "yamajistudio.com.br",
  ga4: "G-TODO12345",
  metaPixel: "TODO_PIXEL_ID",
};

export const metadata: Metadata = {
  title: {
    default: "Ecossistema Yamaji — Tecnologia que entende o seu negócio",
    template: "%s • Yamaji Studio",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Tecnologia e desenvolvimento de software",
  keywords: [
    "criação de sites em Salvador",
    "agência de desenvolvimento web",
    "loja virtual",
    "e-commerce responsivo",
    "sistemas personalizados",
    "automação empresarial",
    "inteligência artificial para empresas",
    "SEO técnico",
  ],
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: "Ecossistema Yamaji — Uma Yamaji para cada tipo de negócio",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecossistema Yamaji — Uma Yamaji para cada tipo de negócio",
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/logo-yamaji-aqua.png",
    apple: "/images/logo-yamaji-aqua.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#0A0A0B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        {/* Preconnects para performance */}
        <link rel="preconnect" href="https://plausible.io" />

        {/* JSON-LD LocalBusiness */}
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "ProfessionalService"],
              name: SITE.name,
              url: SITE.url,
              telephone: SITE.tel,
              email: SITE.email,
              image: `${SITE.url}${SITE.logo}`,
              address: {
                "@type": "PostalAddress",
                streetAddress: SITE.address.street,
                addressLocality: SITE.address.city,
                addressRegion: SITE.address.region,
                postalCode: SITE.address.postal,
                addressCountry: SITE.address.country,
              },
              areaServed: "Brazil",
              sameAs: SITE.sameAs,
              openingHours: "Mo-Sa 08:00-20:00",
              priceRange: "$$",
              description: SITE.description,
              knowsAbout: [
                "Desenvolvimento de sites",
                "E-commerce",
                "Sistemas personalizados",
                "Automação empresarial",
                "Inteligência artificial",
                "SEO técnico",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços digitais Yamaji Studio",
                itemListElement: [
                  "Criação de sites responsivos",
                  "Desenvolvimento de lojas virtuais",
                  "Sistemas personalizados",
                  "Automação e inteligência artificial",
                  "SEO e performance web",
                ].map((name) => ({
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name },
                })),
              },
            }),
          }}
        />
      </head>

      <body className="bg-bg text-fg antialiased overflow-x-hidden">
        {children}

        {/* --------- Analytics --------- */}
        {/* Plausible (tagged events) */}
        <Script
          defer
          data-domain={SITE.plausibleDomain}
          src="https://plausible.io/js/script.tagged-events.js"
        />

        {/* GA4 */}
        {SITE.ga4 !== "G-TODO12345" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${SITE.ga4}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${SITE.ga4}', { send_page_view: true });
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel */}
        {SITE.metaPixel !== "TODO_PIXEL_ID" && (
          <>
            <Script id="fb-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${SITE.metaPixel}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${SITE.metaPixel}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        {/* --------- Tracking avançado (delegador + scroll + seções + outbound) --------- */}
        <Script id="site-tracking" strategy="afterInteractive">
          {`
            (function () {
              const track = (name, props = {}) => {
                // Plausible
                if (window.plausible) window.plausible(name, { props });
                // GA4
                if (window.gtag) window.gtag('event', name, props);
                // Meta
                if (window.fbq) window.fbq('trackCustom', name, props);
              };

              // 1) Delegador de CTAs (usa data-cta/data-label)
              document.addEventListener('click', (e) => {
                const t = e.target.closest('[data-cta]');
                if (!t) return;
                const type = t.getAttribute('data-cta');
                const label = t.getAttribute('data-label') || t.textContent.trim();
                track('cta_click', { type, label, from: 'home' });
              });

              // 2) Scroll depth (25/50/75/100)
              const marks = [25, 50, 75, 100];
              const hit = new Set();
              const onScroll = () => {
                const scrollTop = window.scrollY;
                const doc = document.documentElement;
                const h = doc.scrollHeight - doc.clientHeight;
                const pct = Math.round((scrollTop / h) * 100);
                marks.forEach(m => {
                  if (pct >= m && !hit.has(m)) {
                    hit.add(m);
                    track('scroll_depth', { percent: m });
                  }
                });
              };
              window.addEventListener('scroll', onScroll, { passive: true });

              // 3) View de seção (usa data-section nos <section>)
              const seen = new Set();
              const io = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (!entry.isIntersecting) return;
                  const id = entry.target.getAttribute('data-section') || entry.target.id;
                  if (!id || seen.has(id)) return;
                  seen.add(id);
                  track('section_view', { id });
                });
              }, { rootMargin: '0px 0px -45% 0px', threshold: 0.2 });
              document.querySelectorAll('section[data-section], main section[id]').forEach((el) => io.observe(el));

              // 4) Outbound helpers (wa.me, mailto:, tel:)
              const isOutbound = (href) => {
                try { const u = new URL(href, location.href); return u.hostname !== location.hostname; } catch { return false; }
              };
              document.addEventListener('click', (e) => {
                const a = e.target.closest('a[href]');
                if (!a) return;
                const href = a.getAttribute('href');
                if (!href) return;

                // WhatsApp/mail/tel
                if (href.startsWith('https://wa.me')) track('whatsapp_click', { href });
                if (href.startsWith('mailto:')) track('mailto_click', { href });
                if (href.startsWith('tel:')) track('tel_click', { href });

                // outbound genérico
                if (isOutbound(href)) track('outbound_click', { href });
              });

              // 5) Tempo até primeira interação de CTA
              let firstCta = false;
              document.addEventListener('click', (e) => {
                if (firstCta) return;
                const t = e.target.closest('[data-cta]');
                if (t) {
                  firstCta = true;
                  track('time_to_first_cta', { ms: performance.now() });
                }
              });
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
