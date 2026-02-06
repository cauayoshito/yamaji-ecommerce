import { MetadataRoute } from "next";
import { APPLY_ROUTE } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = "https://yamajistudio.com.br"; // substitua pelo domÃ­nio real
  const now = new Date().toISOString();

  return [
    {
      url: `${site}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${site}/cases`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${site}/solucoes/sistemas`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site}/solucoes/automacao`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site}/solucoes/presenca`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site}/solucoes/growth`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site}/sobre`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${site}/e-commerce`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${site}${APPLY_ROUTE}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}

