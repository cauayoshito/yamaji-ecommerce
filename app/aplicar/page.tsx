import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import ApplyProjectOptionsPanel from "@/components/apply/ApplyProjectOptionsPanel";

export const metadata: Metadata = {
  title: "Aplicar para Projeto | Yamaji Studio",
  description:
    "Conte sobre seu projeto e receba um retorno rapido da equipe Yamaji. Aplicacao direta com resposta em ate 24h uteis.",
};

const services = [
  {
    title: "Sites & Landing Pages",
    desc: "Paginas rapidas, premium e focadas em conversao (SEO + performance).",
    tag: "Conversao",
  },
  {
    title: "Sistemas & Plataformas",
    desc: "CRM, paineis, portais, area do cliente e produtos SaaS sob medida.",
    tag: "Produto",
  },
  {
    title: "E-commerce",
    desc: "Loja pronta para vender com checkout, catalogo, cupons e integracoes.",
    tag: "Vendas",
  },
  {
    title: "Trafego Pago (Ads)",
    desc: "Campanhas com criativos, estrutura e tracking para escalar com clareza.",
    tag: "Aquisicao",
  },
  {
    title: "IA & Automacao",
    desc: "Automatize WhatsApp, leads, atendimento e processos com IA e fluxos.",
    tag: "Eficiencia",
  },
  {
    title: "SEO & Conteudo",
    desc: "Estrategia para aparecer no Google e transformar busca em demanda.",
    tag: "Organico",
  },
  {
    title: "Integracoes & Dados",
    desc: "APIs, analytics, eventos, dashboards e relatorios com metricas reais.",
    tag: "Tracking",
  },
];

export default function AplicarPage() {
  return (
    <>
      <NavBar />
      <main className="bg-bg text-fg">
        <section className="relative overflow-hidden bg-[#0A0A0B] pb-16 pt-28 md:pb-20 md:pt-32">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/12 via-transparent to-transparent" />
          <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-[90px]" />

          <Container className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted hover:text-accent"
              >
                <span aria-hidden="true">←</span>
                Voltar para Home
              </Link>

              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">
                  Aplicar para projeto
                </p>

                <h1 className="mt-4 text-3xl font-semibold md:text-5xl">
                  Projetos com alto impacto, execucao premium e previsibilidade.
                </h1>

                <p className="mt-4 max-w-xl text-sm text-muted md:text-base">
                  Preencha o formulario e receba um retorno rapido com o proximo
                  passo. A Yamaji seleciona poucos projetos por mes para manter
                  qualidade, prazo e resultado.
                </p>
              </div>

              <div className="grid gap-3 text-sm text-muted">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  Diagnostico inicial em ate <span className="text-fg">24h uteis</span>.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <span className="text-fg">Estrategia + design + dev</span> no mesmo squad.
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  Entrega com foco em <span className="text-fg">conversao, SEO e performance</span>.
                </div>
              </div>

              <div className="pt-2">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted">
                  O que entregamos
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {services.map((s) => (
                    <div
                      key={s.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/7"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-sm font-semibold">{s.title}</h3>
                        <span className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-muted">
                          {s.tag}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted">{s.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-muted">
                  Dica: se voce ja tem um site, mande o link. Se nao tem,
                  descreva o objetivo (captar leads, vender online, automatizar
                  atendimento etc).
                </p>
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <ApplyProjectOptionsPanel services={services} />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
