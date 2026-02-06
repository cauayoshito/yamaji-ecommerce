import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Sobre — Yamaji Studio",
  description:
    "Estúdio de design e desenvolvimento focado em performance e SEO. Processo claro, qualidade e resultado.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Sobre — Yamaji Studio",
    description:
      "Design estratégico + performance. Sites e marcas que geram resultado.",
    url: "https://yamaji.vercel.app/about",
    siteName: "Yamaji Studio",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
