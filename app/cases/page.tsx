import type { Metadata } from "next";
import NavBar from "@/components/site/NavBar";

export const metadata: Metadata = {
  title: "Cases · Yamaji Studio",
  description:
    "Projetos no ar: sites, plataformas, automações e sistemas entregues pela Yamaji para negócios reais.",
};

const WHATSAPP_AUTO = `https://wa.me/5571992258349?text=${encodeURIComponent(
  "Quero automatizar meu atendimento"
)}`;

function ArrowIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path
        d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Project = {
  span: "large" | "med" | "std";
  art: string;
  device: string;
  niche: string;
  tag: string;
  name: string;
  scope: string;
  url?: string;
  badge?: string;
};

const projects: Project[] = [
  {
    span: "large",
    art: "t1",
    device: "Landing Page",
    niche: "Consultoria Social",
    tag: "Landing Page",
    name: "BM Consultoria",
    scope:
      "Site institucional com duas jornadas (organizações sociais e empresas), depoimentos e logos de parceiros como Petrobras e Plan International.",
    url: "https://comunicacaobm.com.br",
  },
  {
    span: "med",
    art: "t3",
    device: "Plataforma",
    niche: "Personal Trainer",
    tag: "Plataforma",
    name: "Dieisson Vasques",
    scope:
      "Biblioteca de vídeos por categorias, painel de métricas do aluno, três planos de assinatura e integração com nutricionista.",
    url: "https://dieissonvasques.com.br",
  },
  {
    span: "std",
    art: "t4",
    device: "Captação",
    niche: "Corretora de Saúde",
    tag: "Landing Page",
    name: "Plano de Saúde Bahia",
    scope:
      "Landing page focada em conversão para corretora de planos de saúde.",
    url: "https://planodesaudebahia.com.br",
  },
  {
    span: "std",
    art: "t2",
    device: "Site + Admin",
    niche: "Instituto Social",
    tag: "Site + Admin",
    name: "Instituto D'Joana",
    scope:
      "CMS próprio, módulo de notícias com upload de múltiplos PDFs e painel administrativo completo.",
    url: "https://institutodjoana.com.br",
  },
  {
    span: "std",
    art: "t6",
    device: "Next.js + Supabase",
    niche: "Associação",
    tag: "Site + Admin",
    name: "ACEBA",
    scope:
      "Migração de HTML estático para Next.js 15 + Supabase, admin com CRUD de parcerias, notícias e galeria, e anexos em PDF.",
    url: "https://aceba.com.br",
  },
  {
    span: "std",
    art: "t5",
    device: "Landing Page",
    niche: "Artes Marciais",
    tag: "Landing Page",
    name: "Bruxo Team",
    scope: "Site institucional para academia de jiu-jítsu.",
    url: "https://bruxoteam-smoky.vercel.app",
  },
  {
    span: "std",
    art: "t3",
    device: "SaaS Demo",
    niche: "E-commerce / Tech",
    tag: "SaaS Demo",
    name: "OrderFlow Commerce Cloud",
    scope:
      "IA integrada (Claude API), pagamentos Stripe + webhooks, e-mails transacionais via Resend e rastreamento de pedidos em tempo real via WebSocket (STOMP/SockJS).",
    badge: "Demo Técnica",
  },
  {
    span: "std",
    art: "t4",
    device: "Plataforma",
    niche: "Imobiliário / Leilão",
    tag: "Plataforma",
    name: "Proprium Imóveis",
    scope:
      "Plataforma de imóveis de leilão com busca, filtros, planos de assinatura e alertas por WhatsApp.",
    url: "https://proprium-imoveis.vercel.app",
  },
];

export default function CasesPage() {
  return (
    <>
      <NavBar />
      <main className="home-v5 overflow-x-hidden pt-16 md:pt-[68px]">
        <section className="sec sec--dark" data-section="cases">
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">★</span>
                <span className="name">Cases</span>
              </div>
              <h2 className="h-section">
                Projetos <em>no ar</em> para negócios reais.
              </h2>
              <p className="anno">
                Sites, plataformas, automações e sistemas que a Yamaji desenhou,
                construiu e mantém funcionando.
              </p>
            </div>

            <div className="projects-grid">
              {projects.map((p) => (
                <article key={p.name} className={`project ${p.span}`}>
                  <div className="thumb">
                    <div className={`thumb-art ${p.art}`} aria-hidden="true">
                      <div className="pat" />
                      <div className="thumb-device">
                        <div className="head">
                          <div className="dot" />
                          <span className="nm">{p.device}</span>
                        </div>
                        <div className="bar s1" />
                        <div className="bar s2" />
                      </div>
                    </div>
                  </div>
                  <div className="body">
                    <div className="meta">
                      <span>{p.niche}</span>
                      <span className="acc">{p.tag}</span>
                    </div>
                    <h4>{p.name}</h4>
                    <p className="scope">{p.scope}</p>
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="proj-link"
                        data-label={`case-${p.name}`}
                      >
                        {p.url.replace(/^https?:\/\//, "")}
                        <span className="ext" aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span className="proj-badge">{p.badge}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="projects-foot">
              <span className="note">
                Seu projeto pode ser o próximo a entrar no ar
              </span>
              <a
                href={WHATSAPP_AUTO}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-link"
                data-label="cases-whatsapp"
              >
                Quero algo assim
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
