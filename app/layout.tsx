// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
<<<<<<< HEAD
import { Inter } from "next/font/google";
import "@/styles/globals.css";
=======
import { Inter, Montserrat } from "next/font/google";
import "@/app/globals.css";
>>>>>>> 858ba39 (update: aplicar page + novos serviços)

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE = {
  name: "Yamaji Studio",
  domain: "yamajistudio.com.br",
  url: "https://yamajistudio.com.br",
  description:
    "Sistemas, automações e experiências digitais premium para negócios que querem operar como empresa tech.",
  logo: "/logo.png",
  tel: "+55 71 99235-8249",
  email: "yamaji.studio@gmail.com",
  sameAs: [
    "https://www.instagram.com/yamaji.studio",
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
    default: "Yamaji Studio — Sistemas, Automação e Presença Digital Premium",
    template: "%s • Yamaji Studio",
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: "Yamaji Studio — Estrutura digital para empresas tech",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [
      {
        url: "/og.jpg", // crie uma imagem 1200x630
        width: 1200,
        height: 630,
        alt: "Yamaji Studio — Sistemas, automações e presença digital premium",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yamaji Studio — Estrutura digital para empresas tech",
    description: SITE.description,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
    <html lang="pt-BR" className={`${inter.variable} dark`}>
      <head>
        <meta charSet="utf-8" />
        {/* Preconnects para performance */}
        <link rel="preconnect" href="https://plausible.io" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />

        {/* JSON-LD LocalBusiness */}
        <Script
          id="ld-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
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
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "30",
              },
            }),
          }}
        />
      </head>

      <body className="font-sans bg-bg text-fg antialiased">
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
