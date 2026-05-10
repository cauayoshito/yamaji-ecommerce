import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/site/NavBar";

export const metadata: Metadata = {
  title: "Yamaji Studio — Sites, E-commerce, Social Media e Automação",
  description:
    "Equipe de design, tecnologia e marketing para pequenos negócios. Sites, lojas online, social media, IA e sistemas em Salvador, BA.",
};

const whatsMessage = encodeURIComponent(
  "Olá, vim pelo site da Yamaji Studio. Quero começar minha presença digital."
);
const WHATSAPP_LINK = `https://wa.me/5571992258349?text=${whatsMessage}`;

const chartHeights = [35, 50, 40, 62, 45, 70, 55, 80, 65, 90, 75, 100];

/* ---------- sub-components (inline, no extra files) ---------- */
function ArrowIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
    >
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

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function Page() {
  return (
    <>
      {/* Skip link */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-white"
      >
        Ir para o conteúdo
      </a>

      <NavBar />

      {/* WhatsApp FAB — mobile only */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_24px_-4px_rgba(37,211,102,0.5)] transition duration-200 hover:scale-105 lg:hidden"
      >
        <WhatsAppIcon />
      </a>

      {/* ── Main wrapper — todas as classes v5 vivem dentro de .home-v5 ── */}
      <main
        id="conteudo"
        className="home-v5 overflow-x-hidden pt-16 md:pt-[68px]"
      >
        {/* ============================================================
            HERO — dark, commercial premium
            ============================================================ */}
        <section className="hero" data-section="hero">
          <div className="shell">
            <div className="hero-grid">
              {/* ── Copy ── */}
              <div>
                <div className="hero-eye">
                  <span className="pill-dot" aria-hidden="true" />
                  Studio disponível
                </div>

                <h1>
                  Presença digital{" "}
                  <em>construída</em>{" "}
                  <span className="acc">para vender.</span>
                </h1>

                <p className="hero-pitch">
                  Design, tecnologia e marketing em uma só equipe.{" "}
                  <strong>Para negócios que querem crescer</strong> sem montar
                  um departamento digital.
                </p>

                <div className="hero-cta">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer noopener"
                    data-cta="primary"
                    data-label="hero-whatsapp"
                    className="btn btn-wa"
                  >
                    Falar com a equipe
                    <svg
                      className="arr"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 7h10M7 2l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <Link href="#servicos" className="btn btn-ghost">
                    Ver serviços
                  </Link>
                </div>

                <div className="hero-trust">
                  <div className="avatars" aria-hidden="true">
                    <span className="av j">Y</span>
                    <span className="av">UX</span>
                    <span className="av">DS</span>
                    <span className="av">TK</span>
                  </div>
                  <p className="txt">
                    <strong>Equipe completa</strong>
                    <br />
                    Design · Dev · Marketing · Automação
                  </p>
                </div>
              </div>

              {/* ── Painéis visuais ── */}
              <div className="hero-show" aria-hidden="true">
                {/* Painel grande — crescimento orgânico (light) */}
                <div className="show big">
                  <div className="head">
                    <span>Visitantes / 30 dias</span>
                    <span className="live">Ao vivo</span>
                  </div>
                  <div className="num">2.840</div>
                  <div className="chart">
                    {chartHeights.map((h, i) => (
                      <div
                        key={i}
                        className={`bar${i === chartHeights.length - 1 ? " j" : ""}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="chart-x">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>Mai</span>
                    <span>Jul</span>
                  </div>
                  <p className="desc">
                    Crescimento orgânico de um site institucional
                  </p>
                </div>

                {/* Painel — leads via automação (accent/jade) */}
                <div className="show accent">
                  <div className="head">
                    <span>WhatsApp</span>
                    <span className="live">Ativo</span>
                  </div>
                  <div className="num">
                    48<em>leads</em>
                  </div>
                  <p className="desc">
                    Conversas geradas pela automação esta semana
                  </p>
                </div>

                {/* Painel — equipe (dark) */}
                <div className="show team">
                  <div className="head">
                    <span>Equipe Yamaji</span>
                  </div>
                  <div className="roles">
                    <span>Design</span>
                    <span>Dev</span>
                    <span>SEO</span>
                    <span>Social</span>
                    <span>IA</span>
                    <span>CRM</span>
                  </div>
                  <p className="desc" style={{ marginTop: "auto" }}>
                    Especialistas sob demanda, sem CLT
                  </p>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="hero-creds">
              <span className="lbl">Capacidade</span>
              <div className="stats">
                <div className="stat">
                  <span className="v">
                    6<em>serv</em>
                  </span>
                  <span className="l">Serviços</span>
                </div>
                <div className="stat">
                  <span className="v">SSA</span>
                  <span className="l">Salvador, BA</span>
                </div>
                <div className="stat">
                  <span className="v">
                    24<em>h</em>
                  </span>
                  <span className="l">Resposta</span>
                </div>
                <div className="stat">
                  <span className="v">
                    100<em>%</em>
                  </span>
                  <span className="l">Humano</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SOBRE — sec--light
            ============================================================ */}
        <section id="sobre" className="sec sec--light" data-section="sobre">
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">01</span>
                <span className="name">Sobre</span>
              </div>
              <h2 className="h-section">
                Não somos uma <em>agência genérica.</em>
              </h2>
              <p className="anno">
                Yamaji Studio é uma estrutura ágil de design, tecnologia e
                marketing. Trabalhamos como extensão da sua equipe, sem o custo
                fixo de um departamento interno.
              </p>
            </div>

            <div className="position-grid">
              <div className="position-copy">
                <p className="pull">
                  Você não precisa de uma{" "}
                  <em>plataforma template.</em> Precisa de uma equipe que{" "}
                  <span className="mark">entende o seu negócio.</span>
                </p>
                <p>
                  Wix, Shopify e NuvemShop são ferramentas. Mas ferramentas não
                  criam estratégia. Não pensam no seu cliente. Não atendem você
                  quando algo dá errado.
                </p>
                <p>
                  A Yamaji pensa o visual, constrói a tecnologia, configura a
                  automação e acompanha os resultados.{" "}
                  <strong>
                    Tudo sob o mesmo teto, com a mesma interlocução.
                  </strong>
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-link"
                  data-label="sobre-whatsapp"
                >
                  Conversar com a equipe
                  <ArrowIcon />
                </a>
              </div>

              {/* Card de projetos recentes */}
              <div className="position-card">
                <div className="pc-head">
                  <span className="ttl">Projetos recentes</span>
                  <span className="live">Em andamento</span>
                </div>
                <div className="pc-list">
                  {[
                    { n: "01", nm: "Loja de moda online", meta: "E-commerce", hot: true },
                    { n: "02", nm: "Site clínica odontológica", meta: "Site", hot: false },
                    { n: "03", nm: "Automação de atendimento", meta: "IA", hot: true },
                    { n: "04", nm: "Social media restaurante", meta: "Marketing", hot: false },
                  ].map((item) => (
                    <div key={item.n} className="row">
                      <span className="n">{item.n}</span>
                      <span className="nm">{item.nm}</span>
                      <span className={`meta${item.hot ? " hot" : ""}`}>
                        {item.meta}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pc-foot">
                  <span>Salvador, BA</span>
                  <span>Yamaji Studio</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SERVIÇOS — sec--graphite
            ============================================================ */}
        <section
          id="servicos"
          className="sec sec--graphite"
          data-section="servicos"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">02</span>
                <span className="name">Serviços</span>
              </div>
              <h2 className="h-section">
                Soluções <em>para cada fase</em> do negócio.
              </h2>
              <p className="anno">
                Cada serviço foi desenhado para resolver um problema real.
                Comece pelo que faz sentido agora e evolua conforme crescer.
              </p>
            </div>

            <div className="svc-grid">
              {/* 01 — Sites & Landing Pages */}
              <article className="svc-card featured">
                <span className="sc-num">01 — Sites & Landing Pages</span>
                <h3>
                  Presença que o <em>Google encontra.</em>
                </h3>
                <p className="sc-desc">
                  Para negócios que precisam aparecer nas buscas e passar
                  credibilidade ao cliente. Um site Yamaji é rápido, indexável
                  e alinhado com o que você vende.
                </p>
                <div className="sc-mock">
                  <div className="row">
                    <span className="k">Performance</span>
                    <span className="v acc">95 / 100</span>
                  </div>
                  <div className="row">
                    <span className="k">Mobile First</span>
                    <span className="v tag">Sim</span>
                  </div>
                  <div className="row">
                    <span className="k">SEO técnico</span>
                    <span className="v">Incluso</span>
                  </div>
                </div>
                <Link href="/sites-landing-pages" className="sc-link">
                  Ver mais <ArrowIcon />
                </Link>
              </article>

              {/* 02 — E-commerce */}
              <article className="svc-card wide">
                <span className="sc-num">02 — E-commerce</span>
                <h3>
                  Loja própria, <em>sem comissão</em> de marketplace.
                </h3>
                <p className="sc-desc">
                  Para quem quer vender online com controle total: catálogo,
                  checkout, pagamento e entrega. Tudo da sua marca, com seus
                  clientes.
                </p>
                <div className="sc-mock">
                  <div className="row">
                    <span className="k">Checkout integrado</span>
                    <span className="v acc">Sim</span>
                  </div>
                  <div className="row">
                    <span className="k">Pagamento</span>
                    <span className="v">Pix, cartão, boleto</span>
                  </div>
                  <div className="row">
                    <span className="k">A partir de</span>
                    <span className="v">R$37/mês</span>
                  </div>
                </div>
                <Link href="/e-commerce" className="sc-link">
                  Ver planos <ArrowIcon />
                </Link>
              </article>

              {/* 03 — CRM */}
              <article className="svc-card">
                <span className="sc-num">03 — CRM</span>
                <h3>
                  Gestão de <em>clientes</em> sem planilha.
                </h3>
                <p className="sc-desc">
                  Para clínicas, consultórios e negócios de serviço que perdem
                  clientes por falta de follow-up. Agenda, histórico e
                  comunicação em um só lugar.
                </p>
                <div className="sc-mock">
                  <div className="chips">
                    <span>Agenda</span>
                    <span>Histórico</span>
                    <span>WhatsApp</span>
                  </div>
                </div>
                <Link href="/crm-clinicas" className="sc-link">
                  Saiba mais <ArrowIcon />
                </Link>
              </article>

              {/* 04 — IA & Automação */}
              <article className="svc-card">
                <span className="sc-num">04 — IA & Automação</span>
                <h3>
                  Atendimento <em>automático,</em> sem perder o tom.
                </h3>
                <p className="sc-desc">
                  Para negócios que não conseguem responder tudo a tempo. Fluxos
                  de WhatsApp, e-mail e notificações que funcionam mesmo fora do
                  horário.
                </p>
                <div className="sc-mock">
                  <div className="chips">
                    <span>WhatsApp</span>
                    <span>Leads</span>
                    <span>n8n</span>
                  </div>
                </div>
                <Link href="/automacao-ia" className="sc-link">
                  Saiba mais <ArrowIcon />
                </Link>
              </article>

              {/* 05 — Social Media */}
              <article className="svc-card">
                <span className="sc-num">05 — Social Media</span>
                <h3>
                  Redes que <em>vendem,</em> não só postam.
                </h3>
                <p className="sc-desc">
                  Para negócios que precisam de presença consistente no
                  Instagram e LinkedIn. Artes, conteúdo e estratégia alinhados
                  com o que você vende.
                </p>
                <div className="sc-mock">
                  <div className="chips">
                    <span>Instagram</span>
                    <span>LinkedIn</span>
                    <span>Design</span>
                  </div>
                </div>
                <Link href="/social-marketing" className="sc-link">
                  Ver planos <ArrowIcon />
                </Link>
              </article>

              {/* 06 — Sistemas */}
              <article className="svc-card">
                <span className="sc-num">06 — Sistemas</span>
                <h3>
                  Plataforma <em>sob medida</em> para sua operação.
                </h3>
                <p className="sc-desc">
                  Para negócios que cresceram e precisam de mais que um site.
                  Portais, plataformas educacionais e sistemas internos
                  desenvolvidos do zero.
                </p>
                <div className="sc-mock">
                  <div className="chips">
                    <span>Portal</span>
                    <span>EAD</span>
                    <span>Custom</span>
                  </div>
                </div>
                <Link href="/sistemas/plataforma-educacional" className="sc-link">
                  Saiba mais <ArrowIcon />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================================
            POR QUE YAMAJI — sec--sand
            ============================================================ */}
        <section id="por-que" className="sec sec--sand" data-section="por-que">
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">03</span>
                <span className="name">Diferenciais</span>
              </div>
              <h2 className="h-section">
                Por que a <em>Yamaji?</em>
              </h2>
              <p className="anno">
                Não competimos por preço. Competimos por qualidade de entrega,
                clareza de processo e proximidade real com o cliente.
              </p>
            </div>

            <div className="value-grid">
              <article className="value-card">
                <span className="v-num">01</span>
                <h4>
                  Uma equipe, <em>não um freelancer.</em>
                </h4>
                <p>
                  Design, desenvolvimento, marketing e automação sob o mesmo
                  teto. Você fala com um ponto de contato e a execução acontece
                  com especialistas.
                </p>
              </article>
              <article className="value-card">
                <span className="v-num">02</span>
                <h4>
                  Atendimento <em>humano</em> no WhatsApp.
                </h4>
                <p>
                  Sem ticket de suporte. Sem aguardar 3 dias úteis. Quando você
                  precisa, tem alguém real para responder, sem robô nem fila de
                  espera.
                </p>
              </article>
              <article className="value-card">
                <span className="v-num">03</span>
                <h4>
                  Escopo claro <em>desde o início.</em>
                </h4>
                <p>
                  Cada projeto começa com um briefing detalhado. Você sabe o
                  que vai receber, quando vai receber e quanto vai custar. Sem
                  surpresas no caminho.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================================
            PROJETOS — sec--dark
            ============================================================ */}
        <section
          id="projetos"
          className="sec sec--dark"
          data-section="projetos"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">04</span>
                <span className="name">Projetos</span>
              </div>
              <h2 className="h-section">
                Trabalhos <em>que saíram</em> do papel.
              </h2>
              <p className="anno">
                Projetos reais entregues para negócios reais. Design, tecnologia
                e marketing aplicados com propósito comercial.
              </p>
            </div>

            <div className="projects-grid">
              {/* Projeto grande */}
              <article className="project large">
                <div className="thumb">
                  <div className="thumb-art t1" aria-hidden="true">
                    <div className="pat" />
                    <div className="thumb-device">
                      <div className="head">
                        <div className="dot" />
                        <span className="nm">E-commerce</span>
                      </div>
                      <div className="bar s1" />
                      <div className="bar s2" />
                      <div className="row">
                        <div className="blk" />
                        <div className="blk j" />
                        <div className="blk" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="body">
                  <div className="meta">
                    <span>Moda & Lifestyle</span>
                    <span className="acc">E-commerce</span>
                  </div>
                  <h4>
                    Loja online de <em>moda feminina.</em>
                  </h4>
                  <p className="scope">
                    Catálogo, checkout integrado e identidade visual do zero.
                  </p>
                </div>
              </article>

              {/* Projeto médio */}
              <article className="project med">
                <div className="thumb">
                  <div className="thumb-art t2" aria-hidden="true">
                    <div className="pat" />
                    <div className="thumb-device">
                      <div className="head">
                        <div className="dot" />
                        <span className="nm">Clínica</span>
                      </div>
                      <div className="bar s1" />
                      <div className="bar s3" />
                    </div>
                  </div>
                </div>
                <div className="body">
                  <div className="meta">
                    <span>Saúde</span>
                    <span className="acc">CRM</span>
                  </div>
                  <h4>
                    CRM para <em>clínica odontológica.</em>
                  </h4>
                  <p className="scope">Agenda e histórico de pacientes.</p>
                </div>
              </article>

              {/* Projeto padrão */}
              <article className="project std">
                <div className="thumb">
                  <div className="thumb-art t3" aria-hidden="true">
                    <div className="pat" />
                    <div className="thumb-device">
                      <div className="head">
                        <div className="dot" />
                        <span className="nm">Automação</span>
                      </div>
                      <div className="bar s2" />
                      <div className="bar s1" />
                    </div>
                  </div>
                </div>
                <div className="body">
                  <div className="meta">
                    <span>Tech</span>
                    <span className="acc">Automação</span>
                  </div>
                  <h4>
                    Atendimento <em>automático</em> 24h.
                  </h4>
                  <p className="scope">
                    Fluxo de leads via WhatsApp e e-mail.
                  </p>
                </div>
              </article>

              {/* Projeto padrão */}
              <article className="project std">
                <div className="thumb">
                  <div className="thumb-art t4" aria-hidden="true">
                    <div className="pat" />
                    <div className="thumb-device">
                      <div className="head">
                        <div className="dot" />
                        <span className="nm">Landing Page</span>
                      </div>
                      <div className="bar s3" />
                      <div className="bar s2" />
                    </div>
                  </div>
                </div>
                <div className="body">
                  <div className="meta">
                    <span>Educação</span>
                    <span className="acc">Site</span>
                  </div>
                  <h4>
                    Landing page de <em>lançamento.</em>
                  </h4>
                  <p className="scope">
                    Campanha de lançamento de curso online.
                  </p>
                </div>
              </article>
            </div>

            <div className="projects-foot">
              <span className="note">
                Projetos entregues em Salvador, BA e todo o Brasil
              </span>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-link"
                data-label="projetos-iniciar"
              >
                Iniciar um projeto
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            PROCESSO — sec--light
            ============================================================ */}
        <section
          id="processo"
          className="sec sec--light"
          data-section="processo"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">05</span>
                <span className="name">Processo</span>
              </div>
              <h2 className="h-section">
                Como <em>funciona</em> na prática.
              </h2>
              <p className="anno">
                Do primeiro contato à entrega, o processo é claro e sem
                surpresa. Você sabe o que esperar em cada etapa.
              </p>
            </div>

            <div className="process-grid">
              <article className="proc-card">
                <div className="pc-num">
                  <strong>01</strong>
                  <span>Diagnóstico</span>
                </div>
                <h4>
                  Entender <em>antes</em> de propor.
                </h4>
                <p>
                  Começamos com uma conversa sobre seu negócio, seus clientes e
                  o que você quer alcançar. Sem formulário genérico.
                </p>
                <div className="pc-out">
                  <span className="k">Entregável</span>
                  <span className="v">Briefing + proposta</span>
                </div>
              </article>

              <article className="proc-card">
                <div className="pc-num">
                  <strong>02</strong>
                  <span>Criação</span>
                </div>
                <h4>
                  Design e tech <em>em paralelo.</em>
                </h4>
                <p>
                  Design, desenvolvimento e conteúdo acontecem de forma
                  integrada. Você acompanha o progresso e aprova cada etapa.
                </p>
                <div className="pc-out">
                  <span className="k">Entregável</span>
                  <span className="v">Protótipo aprovado</span>
                </div>
              </article>

              <article className="proc-card">
                <div className="pc-num">
                  <strong>03</strong>
                  <span>Lançamento</span>
                </div>
                <h4>
                  No ar com <em>suporte</em> real.
                </h4>
                <p>
                  Publicamos, configuramos e acompanhamos os primeiros dias.
                  Depois, atendimento humano via WhatsApp para qualquer ajuste.
                </p>
                <div className="pc-out">
                  <span className="k">Entregável</span>
                  <span className="v">Projeto publicado</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ============================================================
            AUTORIDADE TÉCNICA — sec--graphite
            ============================================================ */}
        <section
          id="tecnologia"
          className="sec sec--graphite"
          data-section="tecnologia"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">06</span>
                <span className="name">Tecnologia</span>
              </div>
              <h2 className="h-section">
                Stack <em>atual,</em> não legacy.
              </h2>
              <p className="anno">
                Usamos as mesmas ferramentas que grandes produtos digitais.
                Velocidade real, SEO técnico e escala sem retrabalho.
              </p>
            </div>

            <div className="auth-grid">
              <div className="auth-copy">
                <p className="pull">
                  Tecnologia não é detalhe. É a diferença entre um site que{" "}
                  <em>aparece no Google</em> e um que ninguém encontra.
                </p>
                <p>
                  Cada ferramenta da nossa stack foi escolhida por performance,
                  confiabilidade e capacidade de crescer com o cliente.{" "}
                  <strong>
                    Sem gambiarras. Sem dependência de plugins frágeis.
                  </strong>
                </p>
                <p>
                  Isso significa que seu projeto hoje vai continuar funcionando
                  bem daqui a dois anos, sem precisar refazer tudo do zero.
                </p>
              </div>

              <div className="auth-cap">
                <div className="auth-cap-head">
                  <span className="ttl">Stack principal</span>
                  <span className="pill">Produção</span>
                </div>
                <div className="auth-cap-list">
                  {[
                    { k: "Framework web", v: "Next.js / React", acc: true },
                    { k: "E-commerce", v: "Shopify / Custom", acc: false },
                    { k: "Automação", v: "n8n + Make", acc: true },
                    { k: "CRM", v: "Supabase + Custom", acc: false },
                    { k: "Infraestrutura", v: "Vercel / Cloudflare", acc: false },
                  ].map((item) => (
                    <div key={item.k} className="row">
                      <span className="k">{item.k}</span>
                      <span className={`v${item.acc ? " acc" : ""}`}>
                        {item.v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats — spans full width via grid-column: 1 / span 2 in CSS */}
              <div className="auth-stats">
                <div className="auth-stat">
                  <div className="num">
                    3<em>+</em>
                  </div>
                  <div className="lbl">Anos de mercado</div>
                </div>
                <div className="auth-stat">
                  <div className="num">6</div>
                  <div className="lbl">Especialidades</div>
                </div>
                <div className="auth-stat">
                  <div className="num">
                    24<em>h</em>
                  </div>
                  <div className="lbl">Resposta máx.</div>
                </div>
                <div className="auth-stat">
                  <div className="num">SSA</div>
                  <div className="lbl">Base em Salvador</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            CTA FINAL — sec--dark
            ============================================================ */}
        <section className="sec sec--dark" data-section="cta-final">
          <div className="shell">
            <div className="cta-block">
              <div className="eye">
                <span className="pd" aria-hidden="true" />
                Atendimento aberto
              </div>

              <h2>
                Pronto para colocar <em>sua empresa</em>{" "}
                <span className="acc">no digital?</span>
              </h2>

              <p>
                Escolha por onde começar. A Yamaji cuida da estrutura, do
                visual e da tecnologia para você crescer sem improviso.
              </p>

              <div className="row-btns">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cta="primary"
                  data-label="cta-final-whatsapp"
                  className="btn btn-wa"
                >
                  Falar no WhatsApp
                  <svg
                    className="arr"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 7h10M7 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <Link href="#servicos" className="btn btn-ghost">
                  Ver serviços
                </Link>
              </div>

              <div className="foot">
                <span>Resposta em até 24h</span>
                <span>Atendimento humano</span>
                <span>Sem fidelidade</span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            FOOTER
            ============================================================ */}
        <footer className="footer">
          <div className="shell">
            <div className="footer-grid">
              <div className="footer-brand">
                <Link href="/">
                  <span className="bmark" aria-hidden="true">
                    Y
                  </span>
                  Yamaji Studio
                </Link>
                <p>
                  Equipe de design, tecnologia e marketing para negócios que
                  querem crescer com estrutura real e suporte humano.
                </p>
              </div>

              <nav className="footer-col" aria-label="Serviços">
                <h5>Serviços</h5>
                <ul>
                  <li>
                    <Link href="/sites-landing-pages">Sites & Landing Pages</Link>
                  </li>
                  <li>
                    <Link href="/e-commerce">E-commerce</Link>
                  </li>
                  <li>
                    <Link href="/social-marketing">Social Media</Link>
                  </li>
                  <li>
                    <Link href="/automacao-ia">IA & Automação</Link>
                  </li>
                  <li>
                    <Link href="/crm-clinicas">CRM</Link>
                  </li>
                  <li>
                    <Link href="/sistemas/plataforma-educacional">Sistemas</Link>
                  </li>
                </ul>
              </nav>

              <nav className="footer-col" aria-label="Empresa">
                <h5>Empresa</h5>
                <ul>
                  <li>
                    <Link href="/sobre">Sobre</Link>
                  </li>
                  <li>
                    <Link href="/work">Trabalhos</Link>
                  </li>
                  <li>
                    <Link href="/cases">Cases</Link>
                  </li>
                  <li>
                    <Link href="/aplicar">Trabalhe conosco</Link>
                  </li>
                </ul>
              </nav>

              <div className="footer-col">
                <h5>Contato</h5>
                <ul>
                  <li>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a href="mailto:oi@yamajistudio.com.br">E-mail</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <span>© 2025 Yamaji Studio. Todos os direitos reservados.</span>
              <span>Salvador, Bahia — Brasil</span>
            </div>
          </div>

          {/* Marca decorativa gigante */}
          <div className="footer-mark" aria-hidden="true">
            Yamaji
          </div>
        </footer>
      </main>
    </>
  );
}
