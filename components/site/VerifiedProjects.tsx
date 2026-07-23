import { ArrowUpRight, CheckCircle2, Globe2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { verifiedProjects } from "@/data/verified-projects";

export default function VerifiedProjects() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projetos digitais desenvolvidos pela Yamaji Studio",
    itemListElement: verifiedProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.name,
        url: project.url,
        description: project.description,
        creator: {
          "@type": "Organization",
          name: "Yamaji Studio",
          url: "https://www.yamajistudio.com.br",
        },
      },
    })),
  };

  return (
    <section id="cases" className="relative py-16 sm:py-24 lg:py-28" data-section="cases-reais">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Container>
        <div className="grid gap-6 border-b border-white/[0.08] pb-8 sm:pb-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
              Cases reais · sites no ar
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-[11px] text-emerald-300">
              <CheckCircle2 className="h-3.5 w-3.5" /> Projetos verificáveis
            </div>
          </div>
          <div>
            <h2 className="max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Design bonito. Tecnologia funcionando. Negócios reais.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-base">
              Conheça projetos publicados pela Yamaji para moda, fitness e engenharia — três mercados diferentes, cada um com uma experiência feita para seu público.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-8 lg:grid-cols-3">
          {verifiedProjects.map((project, index) => (
            <article
              key={project.domain}
              className="group relative isolate flex min-h-[360px] overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-[#0B0E13] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:min-h-[400px] sm:p-7"
              style={{
                "--project-accent": project.accent,
                "--project-soft": project.accentSoft,
              } as React.CSSProperties}
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_10%,var(--project-soft),transparent_42%)]" />
              <div className="pointer-events-none absolute inset-x-5 top-20 -z-10 h-40 rounded-2xl border border-white/[0.06] bg-white/[0.018] sm:inset-x-7">
                <div className="flex h-8 items-center gap-1.5 border-b border-white/[0.06] px-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400/50" />
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300/50" />
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300/50" />
                  <span className="ml-2 truncate text-[8px] text-white/25">{project.domain}</span>
                </div>
                <div className="grid h-[calc(100%-2rem)] place-items-center px-5 text-center">
                  <div>
                    <Globe2 className="mx-auto h-5 w-5 text-[var(--project-accent)]" />
                    <p className="mt-2 text-lg font-semibold text-white/80">{project.name}</p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/30">{project.category}</p>
                  </div>
                </div>
              </div>

              <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-[var(--project-accent)]">
                0{index + 1} · {project.eyebrow}
              </span>

              <div className="mt-auto pt-48 sm:pt-52">
                <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{project.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/48">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span key={service} className="rounded-full border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-white/45">
                      {service}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar o site ${project.name}`}
                  data-cta="case"
                  data-label={project.domain}
                  className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-xs font-semibold text-white/75 transition group-hover:border-[var(--project-accent)]/40 group-hover:text-white"
                >
                  Visitar projeto <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
