// components/FaqSchema.tsx
import Script from "next/script";

export default function FaqSchema({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
  return (
    <Script
      type="application/ld+json"
      id="faq-schema"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
