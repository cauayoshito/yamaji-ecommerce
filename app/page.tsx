import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/site/NavBar";

export const metadata: Metadata = {
  title: "Yamaji Studio · Automação, IA e Engenharia para Negócios",
  description:
    "A Yamaji automatiza atendimento, mensagens e processos com IA e engenharia. Sua operação respondendo e vendendo sozinha, dia e noite. Salvador, BA.",
};

const whatsMessage = encodeURIComponent(
  "Olá, vim pelo site da Yamaji. Quero automatizar minha operação."
);
const WHATSAPP_LINK = `https://wa.me/5571992258349?text=${whatsMessage}`;
const WHATSAPP_TRAFEGO = `https://wa.me/5571992258349?text=${encodeURIComponent(
  "Quero gestão de tráfego"
)}`;
const WHATSAPP_AUTO = `https://wa.me/5571992258349?text=${encodeURIComponent(
  "Quero automatizar meu atendimento"
)}`;

/* Logos de clientes — src ausente = fallback em texto estilizado.
   Plano de Saúde Bahia não possui logo de marca própria (o site usa a marca
   "Noely Teixeira"), então entra como texto para não inventar associação. */
const clientLogos: { name: string; src?: string }[] = [
  { name: "BM Consultoria", src: "/logos/bm-consultoria.png" },
  { name: "Instituto D'Joana", src: "/logos/instituto-djoana.png" },
  { name: "ACEBA", src: "/logos/aceba.png" },
  { name: "Dieisson Vasques", src: "/logos/dieisson-vasques.png" },
  { name: "Plano de Saúde Bahia" },
  { name: "Bruxo Team", src: "/logos/bruxo-team.png" },
  { name: "Proprium Imóveis" },
];

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

function LogoNode({ name, src }: { name: string; src?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        className="logo-img"
        src={src}
        alt={name}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return <span className="logo-text">{name}</span>;
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
                  Automação · IA · Engenharia
                </div>

                <h1>
                  Sua empresa ainda{" "}
                  <em>responde tudo</em>{" "}
                  <span className="acc">na mão?</span>
                </h1>

                <p className="hero-pitch">
                  A Yamaji conecta sistemas, mensagens e inteligência artificial
                  para resolver os gargalos do seu negócio.{" "}
                  <strong>
                    Atendimento, vendas e processos rodando sozinhos,
                  </strong>{" "}
                  dia e noite.
                </p>

                <div className="hero-cta">
                  <a
                    href={WHATSAPP_AUTO}
                    target="_blank"
                    rel="noreferrer noopener"
                    data-cta="primary"
                    data-label="hero-whatsapp"
                    className="btn btn-wa"
                  >
                    Quero automatizar minha operação
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
                  <Link href="#problemas" className="btn btn-ghost">
                    Ver o que resolvemos
                  </Link>
                </div>

                <div className="hero-trust">
                  <div className="avatars" aria-hidden="true">
                    <span className="av j">Y</span>
                    <span className="av">IA</span>
                    <span className="av">DEV</span>
                    <span className="av">OPS</span>
                  </div>
                  <p className="txt">
                    <strong>Engenharia de verdade</strong>
                    <br />
                    Sistemas · IA · Automação · Dados
                  </p>
                </div>
              </div>

              {/* ── Painéis visuais — ilustração de automação rodando ── */}
              <div className="hero-show" aria-hidden="true">
                {/* Painel grande — volume de mensagens automáticas */}
                <div className="show big">
                  <div className="head">
                    <span>Mensagens respondidas / 24h</span>
                    <span className="live">No ar</span>
                  </div>
                  <div className="num">342</div>
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
                    <span>00h</span>
                    <span>08h</span>
                    <span>16h</span>
                    <span>24h</span>
                  </div>
                  <p className="desc">
                    Atendimento respondido sem ninguém digitar
                  </p>
                </div>

                {/* Painel — leads captados fora do horário (accent/jade) */}
                <div className="show accent">
                  <div className="head">
                    <span>WhatsApp</span>
                    <span className="live">Ativo</span>
                  </div>
                  <div className="num">
                    48<em>leads</em>
                  </div>
                  <p className="desc">
                    Capturados e respondidos fora do horário comercial
                  </p>
                </div>

                {/* Painel — fluxos de automação ativos (dark) */}
                <div className="show team">
                  <div className="head">
                    <span>Fluxos ativos</span>
                  </div>
                  <div className="roles">
                    <span>WhatsApp</span>
                    <span>E-mail</span>
                    <span>CRM</span>
                    <span>Relatórios</span>
                    <span>IA</span>
                    <span>Pagamentos</span>
                  </div>
                  <p className="desc" style={{ marginTop: "auto" }}>
                    Processos rodando sozinhos, 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="hero-creds">
              <span className="lbl">Operação</span>
              <div className="stats">
                <div className="stat">
                  <span className="v">
                    24<em>/7</em>
                  </span>
                  <span className="l">No ar</span>
                </div>
                <div className="stat">
                  <span className="v">IA</span>
                  <span className="l">Integrada</span>
                </div>
                <div className="stat">
                  <span className="v">
                    &lt;24<em>h</em>
                  </span>
                  <span className="l">Resposta humana</span>
                </div>
                <div className="stat">
                  <span className="v">SSA</span>
                  <span className="l">Salvador, BA</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            LOGOS — faixa de confiança (abaixo do hero)
            ============================================================ */}
        <section
          className="logos-strip"
          data-section="logos"
          aria-label="Negócios que confiam na Yamaji"
        >
          <div className="shell">
            <p className="logos-kicker">Negócios que confiam na Yamaji</p>
            <div className="logos-viewport">
              <div className="logos-track">
                {clientLogos.map((logo, i) => (
                  <div className="logo-item" key={`logo-a-${i}`}>
                    <LogoNode name={logo.name} src={logo.src} />
                  </div>
                ))}
                {/* duplicata para loop contínuo do marquee */}
                {clientLogos.map((logo, i) => (
                  <div
                    className="logo-item"
                    aria-hidden="true"
                    key={`logo-b-${i}`}
                  >
                    <LogoNode name={logo.name} src={logo.src} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            PROBLEMAS QUE RESOLVEMOS — dor → solução
            ============================================================ */}
        <section
          id="problemas"
          className="sec sec--graphite"
          data-section="problemas"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">01</span>
                <span className="name">Problemas</span>
              </div>
              <h2 className="h-section">
                Onde o seu negócio <em>trava</em> todo dia.
              </h2>
              <p className="anno">
                Se você reconhece um destes gargalos, a Yamaji resolve com
                sistema e automação. Você não compra um serviço, você tira um
                problema das suas costas.
              </p>
            </div>

            <div className="prob-grid">
              <article className="prob-card">
                <span className="prob-pain">
                  Você demora horas para responder cada cliente?
                </span>
                <h3 className="prob-sol">Atendimento que responde na hora.</h3>
                <p className="prob-desc">
                  Automação de WhatsApp que tira dúvida, qualifica e agenda
                  sozinha, 24 horas por dia, sem ninguém digitar.
                </p>
                <span className="prob-tag">Automação · WhatsApp</span>
              </article>

              <article className="prob-card">
                <span className="prob-pain">
                  Lead chega e esfria porque ninguém deu retorno?
                </span>
                <h3 className="prob-sol">Follow-up que não esquece ninguém.</h3>
                <p className="prob-desc">
                  Sequências automáticas que mantêm o contato vivo até o cliente
                  responder. Nenhuma venda fica para trás.
                </p>
                <span className="prob-tag">IA · CRM</span>
              </article>

              <article className="prob-card">
                <span className="prob-pain">
                  Sua equipe presa em tarefa repetitiva o dia todo?
                </span>
                <h3 className="prob-sol">Robôs cuidam do trabalho chato.</h3>
                <p className="prob-desc">
                  Cadastro, cobrança, planilha e relatório acontecem sozinhos.
                  Sua equipe foca no que dá dinheiro.
                </p>
                <span className="prob-tag">Automação · Integrações</span>
              </article>

              <article className="prob-card">
                <span className="prob-pain">
                  Não sabe de onde vem cada venda?
                </span>
                <h3 className="prob-sol">Relatório no seu WhatsApp.</h3>
                <p className="prob-desc">
                  Dashboards e resumos automáticos chegam prontos para você, sem
                  abrir planilha nem montar relatório na mão.
                </p>
                <span className="prob-tag">Dados · IA</span>
              </article>

              <article className="prob-card">
                <span className="prob-pain">
                  Tem site, mas ele não aparece e não vende?
                </span>
                <h3 className="prob-sol">Site ligado ao seu funil.</h3>
                <p className="prob-desc">
                  Site rápido e indexável que captura o lead e já joga dentro da
                  sua automação de atendimento.
                </p>
                <span className="prob-tag">Engenharia · SEO</span>
              </article>

              <article className="prob-card">
                <span className="prob-pain">
                  Anúncio gasta dinheiro e não converte?
                </span>
                <h3 className="prob-sol">Tráfego que vira conversa.</h3>
                <p className="prob-desc">
                  Meta e Google Ads conectados à automação: o anúncio atrai e o
                  robô responde e qualifica na hora.
                </p>
                <span className="prob-tag">Tráfego · Automação</span>
              </article>
            </div>

            <div className="prob-foot">
              <span className="note">Reconheceu o seu problema aí em cima?</span>
              <a
                href={WHATSAPP_AUTO}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-link"
                data-label="problemas-whatsapp"
              >
                Quero resolver isso
                <ArrowIcon />
              </a>
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
                <span className="num">02</span>
                <span className="name">Como pensamos</span>
              </div>
              <h2 className="h-section">
                A Yamaji é o seu <em>time de engenharia</em> sob demanda.
              </h2>
              <p className="anno">
                Você não contrata uma agência para postar bonito. Contrata quem
                liga as peças do seu negócio e faz a operação rodar sozinha.
              </p>
            </div>

            <div className="position-grid">
              <div className="position-copy">
                <p className="pull">
                  Ferramenta pronta não resolve.{" "}
                  <span className="mark">
                    Quem resolve é quem conecta tudo.
                  </span>
                </p>
                <p>
                  Wix, planilha e robôs de prateleira são peças soltas. Sozinhos
                  eles não conversam, não pensam no seu cliente e quebram quando
                  o negócio cresce.
                </p>
                <p>
                  A Yamaji entra como engenharia de verdade: desenha o fluxo,
                  constrói o sistema, pluga a IA e mantém tudo no ar.{" "}
                  <strong>
                    Uma camada de tecnologia que trabalha por você.
                  </strong>
                </p>
                <a
                  href={WHATSAPP_AUTO}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-link"
                  data-label="sobre-whatsapp"
                >
                  Quero entender como aplicar
                  <ArrowIcon />
                </a>
              </div>

              {/* Card — automações no ar */}
              <div className="position-card">
                <div className="pc-head">
                  <span className="ttl">Automações no ar</span>
                  <span className="live">Rodando</span>
                </div>
                <div className="pc-list">
                  {[
                    { n: "01", nm: "Resposta automática no WhatsApp", meta: "Auto", hot: true },
                    { n: "02", nm: "Follow-up de leads", meta: "IA", hot: true },
                    { n: "03", nm: "Relatório diário por e-mail", meta: "Dados", hot: false },
                    { n: "04", nm: "Cobrança e lembrete de pagamento", meta: "Fluxo", hot: false },
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
                  <span>Yamaji</span>
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
                <span className="num">03</span>
                <span className="name">Serviços</span>
              </div>
              <h2 className="h-section">
                O que a Yamaji <em>automatiza</em> e constrói.
              </h2>
              <p className="anno">
                Tudo gira em torno de tirar trabalho manual da sua rotina. A
                automação é o motor; os outros serviços plugam nela.
              </p>
            </div>

            <div className="svc-grid">
              {/* 01 · Automação & IA (carro-chefe) */}
              <article className="svc-card featured">
                <span className="sc-num">01 · Automação &amp; IA</span>
                <h3>
                  Sua operação <em>trabalhando sozinha.</em>
                </h3>
                <p className="sc-desc">
                  Atendimento, follow-up, cobrança e relatório no piloto
                  automático. A Yamaji desenha o fluxo, pluga a inteligência
                  artificial e deixa rodando dia e noite.
                </p>
                <div className="sc-mock">
                  <div className="row">
                    <span className="k">WhatsApp automático</span>
                    <span className="v acc">Sim</span>
                  </div>
                  <div className="row">
                    <span className="k">IA de atendimento</span>
                    <span className="v tag">Incluso</span>
                  </div>
                  <div className="row">
                    <span className="k">Integrações</span>
                    <span className="v">CRM, e-mail, Pix</span>
                  </div>
                </div>
                <Link href="/automacao-ia" className="sc-link">
                  Ver mais <ArrowIcon />
                </Link>
              </article>

              {/* 02 · Sistemas sob medida */}
              <article className="svc-card wide">
                <span className="sc-num">02 · Sistemas sob medida</span>
                <h3>
                  Plataforma <em>feita do jeito</em> que você opera.
                </h3>
                <p className="sc-desc">
                  Quando planilha e ferramenta pronta não dão mais conta.
                  Portais, painéis e sistemas internos construídos do zero, no
                  seu processo.
                </p>
                <div className="sc-mock">
                  <div className="row">
                    <span className="k">Banco de dados</span>
                    <span className="v acc">Supabase</span>
                  </div>
                  <div className="row">
                    <span className="k">Painel administrativo</span>
                    <span className="v tag">Incluso</span>
                  </div>
                  <div className="row">
                    <span className="k">Escala</span>
                    <span className="v">Sem retrabalho</span>
                  </div>
                </div>
                <Link href="/sistemas/plataforma-educacional" className="sc-link">
                  Saiba mais <ArrowIcon />
                </Link>
              </article>

              {/* 03 · Sites & Landing Pages */}
              <article className="svc-card">
                <span className="sc-num">03 · Sites &amp; Landing Pages</span>
                <h3>
                  Site que <em>aparece</em> e captura lead.
                </h3>
                <p className="sc-desc">
                  Rápido, indexável no Google e ligado direto à sua automação de
                  atendimento. O visitante vira conversa.
                </p>
                <div className="sc-mock">
                  <div className="chips">
                    <span>Performance</span>
                    <span>SEO</span>
                    <span>Captura</span>
                  </div>
                </div>
                <Link href="/sites-landing-pages" className="sc-link">
                  Ver mais <ArrowIcon />
                </Link>
              </article>

              {/* 04 · E-commerce */}
              <article className="svc-card">
                <span className="sc-num">04 · E-commerce</span>
                <h3>
                  Loja própria, <em>sem comissão.</em>
                </h3>
                <p className="sc-desc">
                  Catálogo, checkout e pagamento com a sua marca, integrados ao
                  estoque e ao seu WhatsApp.
                </p>
                <div className="sc-mock">
                  <div className="chips">
                    <span>Pix</span>
                    <span>Cartão</span>
                    <span>Checkout</span>
                  </div>
                </div>
                <Link href="/e-commerce" className="sc-link">
                  Ver planos <ArrowIcon />
                </Link>
              </article>

              {/* 05 · CRM */}
              <article className="svc-card">
                <span className="sc-num">05 · CRM</span>
                <h3>
                  Cliente <em>organizado,</em> retorno garantido.
                </h3>
                <p className="sc-desc">
                  Agenda, histórico e disparo de mensagem num lugar só. Ninguém
                  esquece de dar retorno.
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

              {/* 06 · Social Media */}
              <article className="svc-card">
                <span className="sc-num">06 · Social Media</span>
                <h3>
                  Conteúdo que <em>alimenta</em> o funil.
                </h3>
                <p className="sc-desc">
                  Presença no Instagram e LinkedIn conectada à captação, não
                  post solto só por postar.
                </p>
                <div className="sc-mock">
                  <div className="chips">
                    <span>Instagram</span>
                    <span>LinkedIn</span>
                    <span>Conteúdo</span>
                  </div>
                </div>
                <Link href="/social-marketing" className="sc-link">
                  Ver planos <ArrowIcon />
                </Link>
              </article>

              {/* 07 · Tráfego Pago & Performance */}
              <article id="trafego" className="svc-card cta">
                <span className="sc-num">07 · Tráfego Pago &amp; Performance</span>
                <h3>
                  Anúncios que <em>geram</em> clientes, não só cliques.
                </h3>
                <p className="sc-desc">
                  Para crescer com previsibilidade. Gestão completa de Meta Ads
                  e Google Ads: criativo, segmentação, otimização e relatório de
                  resultados toda semana, com o anúncio ligado à automação.
                </p>
                <div className="sc-mock">
                  <div className="chips">
                    <span>Meta Ads</span>
                    <span>Google Ads</span>
                    <span>Relatório semanal</span>
                  </div>
                </div>
                <a
                  href={WHATSAPP_TRAFEGO}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sc-link"
                  data-cta="primary"
                  data-label="servico-trafego-whatsapp"
                >
                  Quero gestão de tráfego <ArrowIcon />
                </a>
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
                <span className="num">04</span>
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
                <span className="num">05</span>
                <span className="name">Prova</span>
              </div>
              <h2 className="h-section">
                Quem já <em>opera</em> com a Yamaji.
              </h2>
              <p className="anno">
                Sistemas, automações e plataformas no ar para negócios reais.
                Estes são dois exemplos; o portfólio completo fica nos cases.
              </p>
            </div>

            <div className="projects-grid proof">
              {/* OrderFlow — SaaS técnico */}
              <article className="project std">
                <div className="thumb">
                  <div className="thumb-art t3" aria-hidden="true">
                    <div className="pat" />
                    <div className="thumb-device">
                      <div className="head">
                        <div className="dot" />
                        <span className="nm">SaaS Demo</span>
                      </div>
                      <div className="bar s3" />
                      <div className="row">
                        <div className="blk j" />
                        <div className="blk" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="body">
                  <div className="meta">
                    <span>E-commerce / Tech</span>
                    <span className="acc">SaaS Demo</span>
                  </div>
                  <h4>OrderFlow Commerce Cloud</h4>
                  <p className="scope">
                    IA integrada, pagamentos Stripe com webhooks e rastreamento
                    de pedidos em tempo real. Engenharia de produto de verdade.
                  </p>
                  <span className="proj-badge">Demo Técnica</span>
                </div>
              </article>

              {/* Proprium — plataforma de leilão */}
              <article className="project std">
                <div className="thumb">
                  <div className="thumb-art t4" aria-hidden="true">
                    <div className="pat" />
                    <div className="thumb-device">
                      <div className="head">
                        <div className="dot" />
                        <span className="nm">Plataforma</span>
                      </div>
                      <div className="bar s3" />
                      <div className="bar s1" />
                    </div>
                  </div>
                </div>
                <div className="body">
                  <div className="meta">
                    <span>Imobiliário / Leilão</span>
                    <span className="acc">Plataforma</span>
                  </div>
                  <h4>Proprium Imóveis</h4>
                  <p className="scope">
                    Plataforma de imóveis de leilão com busca, filtros, planos de
                    assinatura e alertas por WhatsApp.
                  </p>
                  <a
                    href="https://proprium-imoveis.vercel.app"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="proj-link"
                    data-label="case-proprium-imoveis"
                  >
                    proprium-imoveis.vercel.app
                    <span className="ext" aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            </div>

            <div className="projects-foot">
              <span className="note">
                8 projetos no ar para negócios reais
              </span>
              <Link
                href="/cases"
                className="btn-link"
                data-label="projetos-ver-todos"
              >
                Ver todos os cases
                <ArrowIcon />
              </Link>
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
                <span className="num">06</span>
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
                <span className="num">07</span>
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
                    { k: "Framework web", v: "Next.js / React", acc: false },
                    { k: "Inteligência artificial", v: "Claude API", acc: true },
                    { k: "Automação", v: "n8n + Make", acc: true },
                    { k: "Banco + Auth", v: "Supabase", acc: false },
                    { k: "Pagamentos", v: "Stripe / Pix", acc: false },
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
                Pronto para sua operação <em>rodar</em>{" "}
                <span className="acc">sozinha?</span>
              </h2>

              <p>
                Comece pela automação que mais dói hoje. A Yamaji liga as peças
                do seu negócio e deixa o resto no piloto automático.
              </p>

              <div className="row-btns">
                <a
                  href={WHATSAPP_AUTO}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cta="primary"
                  data-label="cta-final-whatsapp"
                  className="btn btn-wa"
                >
                  Quero automatizar minha operação
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
                  Automação, IA e engenharia para a sua operação responder,
                  vender e rodar sozinha. Com gente de verdade no suporte.
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
                  <li>
                    <Link href="/#trafego">Tráfego Pago</Link>
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
              <span>Salvador, Bahia, Brasil</span>
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
