import Script from "next/script";

type Props = {
  name?: string;
  url?: string;
  logo?: string;
  phone?: string;
  street?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
};

export default function SEOJsonLd({
  name = "Yamaji Studio",
  url = "https://www.yamajistudio.com.br",
  logo = "https://www.yamajistudio.com.br/logo.png",
  phone = "+55 71 99225-8349",
  street = "Salvador",
  city = "Salvador",
  region = "BA",
  postalCode = "40000-000",
  country = "BR",
}: Props) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    sameAs: ["https://www.instagram.com/yamajistudio"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: phone,
        contactType: "customer service",
        areaServed: "BR",
        availableLanguage: ["Portuguese", "English"],
      },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    url,
    image: logo,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      addressLocality: city,
      addressRegion: region,
      postalCode,
      addressCountry: country,
    },
    areaServed: city,
    priceRange: "$$",
    sameAs: ["https://www.instagram.com/yamajistudio"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Script id="jsonld-organization" type="application/ld+json">
        {JSON.stringify(organization)}
      </Script>
      <Script id="jsonld-localbusiness" type="application/ld+json">
        {JSON.stringify(localBusiness)}
      </Script>
      <Script id="jsonld-website" type="application/ld+json">
        {JSON.stringify(website)}
      </Script>
    </>
  );
}
