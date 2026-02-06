import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services } from "@/components/services/data";
import { notFound } from "next/navigation";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const svc = services.find((s) => s.slug === params.slug);
  if (!svc) return {};
  return {
    title: `${svc.name} — Yamaji Studio`,
    description: svc.short,
  };
}

export default function ServiceDetail({ params }: { params: Params }) {
  const svc = services.find((s) => s.slug === params.slug);
  if (!svc) return notFound();

  return (
    <>
      <Header />
      <main className="pt-28 pb-24 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          {/* HERO */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold">{svc.hero.title}</h1>
            <p className="text-muted mt-4 max-w-2xl mx-auto">
              {svc.hero.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {svc.hero.bullets.map((b) => (
                <span
                  key={b}
                  className="px-3 py-1 rounded-full border border-white/10 text-sm bg-white/5"
                >
                  {b}
                </span>
              ))}
            </div>
          </section>

          {/* BENEFÍCIOS */}
          <section className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {svc.benefits.map((b) => (
              <div
                key={b}
                className="rounded-xl border border-white/10 bg-[#101010] p-5 hover:bg-white/[0.06] transition"
              >
                <h3 className="font-medium">{b}</h3>
              </div>
            ))}
          </section>

          {/* PROCESSO */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold">Como entregamos</h2>
            <ol className="mt-6 grid md:grid-cols-3 gap-6">
              {svc.process.map((p, i) => (
                <li
                  key={p.title}
                  className="rounded-xl border border-white/10 bg-[#0f0f0f] p-6"
                >
                  <div className="text-accent text-sm">0{i + 1}</div>
                  <h3 className="font-semibold mt-1">{p.title}</h3>
                  <p className="text-sm text-muted mt-2">{p.desc}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* DEPOIMENTO */}
          {svc.testimonial && (
            <section className="mt-16 rounded-2xl border border-white/10 bg-[#0f0f0f] p-8">
              <p className="italic text-lg">“{svc.testimonial.quote}”</p>
              <p className="text-sm text-muted mt-3">
                — {svc.testimonial.author}
                {svc.testimonial.role ? `, ${svc.testimonial.role}` : ""}
              </p>
            </section>
          )}

          {/* FAQ */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold">Perguntas frequentes</h2>
            <div className="mt-6 space-y-4">
              {svc.faq.map((f) => (
                <details
                  key={f.q}
                  className="rounded-xl border border-white/10 bg-[#0f0f0f] p-5"
                >
                  <summary className="cursor-pointer font-medium">
                    {f.q}
                  </summary>
                  <p className="text-sm text-muted mt-2">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 text-center">
            <a
              href="https://wa.me/5571987194367?text=Ol%C3%A1!%20Quero%20falar%20sobre%20um%20projeto%20com%20a%20Yamaji%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-black hover:opacity-90 transition"
            >
              {svc.ctaLabel ?? "Falar com a Yamaji Studio →"}
            </a>
          </section>
        </div>
      </main>

      {/* SEO extra: FAQ Schema */}
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: svc.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <Footer />
    </>
  );
}
