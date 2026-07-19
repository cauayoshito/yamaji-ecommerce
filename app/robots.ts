import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const site = "https://www.yamajistudio.com.br";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/private/",
          "/drafts/",
          "/admin/",
          "/login",
          "/painel",
        ],
      },
    ],
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}
