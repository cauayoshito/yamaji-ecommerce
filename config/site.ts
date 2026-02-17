export const siteConfig = {
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
  metaPixel: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
} as const;
