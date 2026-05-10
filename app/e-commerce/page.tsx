import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/site/NavBar";

export const metadata: Metadata = {
  title: "Loja Online com Suporte Humano · Planos a partir de R$37/mês",
  description:
    "Sua loja online criada pela Yamaji Studio: visual profissional, hospedagem inclusa, checkout integrado e suporte humano. Planos START, GROW e PRO.",
  alternates: { canonical: "/e-commerce" },
};

const whatsMsg = encodeURIComponent(
  "Olá! Vim pelo site da Yamaji Studio e quero saber mais sobre a loja online."
);
const WHATSAPP = `https://wa.me/5571992258349?text=${whatsMsg}`;

function planMsg(plan: string) {
  return `https://wa.me/5571992258349?text=${encodeURIComponent(
    `Olá! Quero saber mais sobre o plano ${plan} da Yamaji Loja Online.`
  )}`;
}

const chartOrders = [18, 22, 15, 30, 25, 38, 28, 45, 35, 52, 43, 60];

const pains = [
  {
    title: "Plataformas complicadas",
    text: "Você passa horas tentando configurar e ainda fica perdido. Mensalidade alta e funções que nunca vai usar.",
  },
  {
    title: "Layout genérico",
    text: "Cara de template que qualquer um reconhece. Cliente sente desconfiança e sai sem comprar.",
  },
  {
    title: "Suporte robótico",
    text: "Você abre um ticket, espera dias. Quando responde, é uma mensagem automática que não resolve nada.",
  },
  {
    title: "Difícil de começar",
    text: "Sem conhecimento técnico, montar uma loja vira pesadelo. A maioria desiste antes da primeira venda.",
  },
];

const solutions = [
  {
    n: "01",
    title: "Feita por desenvolvedor",
    text: "Não é template arrastado. Cada loja é construída por gente que entende de código e de conversão.",
  },
  {
    n: "02",
    title: "Hospedagem inclusa",
    text: "Você não paga servidor, domínio extra, certificado nem nada à parte. Tudo entra no plano mensal.",
  },
  {
    n: "03",
    title: "Suporte humano de verdade",
    text: "Você fala direto com a gente pelo WhatsApp. Sem ticket, sem fila, sem bot que te manda para o FAQ.",
  },
];

const plans = [
  {
    name: "START",
    price: "37",
    tagline: "Para começar a vender já.",
    features: [
      "Loja simples e profissional",
      "Catálogo de produtos",
      "Botão direto para WhatsApp",
      "Hospedagem inclusa",
      "Suporte humano",
    ],
    ideal: "Ideal para começar rápido sem complicação.",
    featured: false,
  },
  {
    name: "GROW",
    price: "67",
    tagline: "Para vender todos os dias.",
    features: [
      "Tudo do START",
      "Carrinho simples",
      "Checkout via link e WhatsApp",
      "Personalização da loja",
      "Atualizações de produtos",
    ],
    ideal: "Ideal para quem já tem fluxo e quer profissionalizar.",
    featured: true,
  },
  {
    name: "PRO",
    price: "97",
    tagline: "Para escalar com estrutura.",
    features: [
      "Tudo do GROW",
      "Painel de pedidos",
      "Controle de produtos",
      "Estrutura mais completa",
      "Prioridade no suporte",
    ],
    ideal: "Ideal para quem quer escalar com organização.",
    featured: false,
  },
];

const steps = [
  {
    n: "01",
    title: "Você chama no WhatsApp",
    text: "Conta o que vende, qual o seu objetivo e a gente já te explica qual plano combina com o seu negócio.",
    out: "Briefing + proposta",
  },
  {
    n: "02",
    title: "Envia produtos e identidade",
    text: "Fotos, descrições, logo e cores. Tudo organizado em uma pastinha. A gente te guia se precisar.",
    out: "Material organizado",
  },
  {
    n: "03",
    title: "A gente cria sua loja",
    text: "Em poucos dias sua loja está pronta, com cara de empresa séria e tudo configurado para vender.",
    out: "Loja em homologação",
  },
  {
    n: "04",
    title: "Você começa a vender",
    text: "Compartilha o link, recebe pedidos pelo WhatsApp ou pelo painel. Simples assim.",
    out: "Loja no ar",
  },
];

const demos = [
  {
    tag: "Experiência do cliente",
    title: "Storefront",
    text: "Vitrine, produto e checkout. O que o seu cliente vai ver.",
    href: "/e-commerce/demo/storefront",
    thumb: "t3",
  },
  {
    tag: "Pós-compra",
    title: "Área do Cliente",
    text: "Pedidos, histórico e acompanhamento de entrega.",
    href: "/e-commerce/demo/cliente",
    thumb: "t2",
  },
  {
    tag: "Gestão",
    title: "Painel do Dono",
    text: "Produtos, estoque, pedidos e preços em um só lugar.",
    href: "/e-commerce/demo/dono",
    thumb: "t1",
  },
  {
    tag: "Inteligência",
    title: "Dashboard",
    text: "Faturamento, métricas e desempenho em tempo real.",
    href: "/e-commerce/demo/dashboard",
    thumb: "t4",
  },
];

const faqs = [
  {
    q: "Em quanto tempo a loja fica pronta?",
    a: "Em poucos dias. Depois que você manda os produtos, identidade visual e textos, a gente entrega geralmente entre 3 e 7 dias úteis, dependendo do plano.",
  },
  {
    q: "Tem fidelidade ou contrato preso?",
    a: "Não. A mensalidade é livre. Você pode cancelar quando quiser, sem multa, sem burocracia.",
  },
  {
    q: "E se eu já tenho uma loja, dá para migrar?",
    a: "Dá. A gente avalia sua loja atual, te orienta sobre os produtos, fotos e domínio, e migra tudo para o novo padrão Yamaji.",
  },
  {
    q: "A hospedagem é cobrada à parte?",
    a: "Não. Hospedagem entra no plano mensal. Você não paga servidor, certificado de segurança nem nada extra.",
  },
  {
    q: "Posso usar meu domínio próprio?",
    a: "Sim. Se você já tem um domínio (tipo seunome.com.br), a gente conecta na sua loja sem custo extra.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Direto pelo WhatsApp. Sem ticket, sem fila de espera, sem bot. Você fala com gente que conhece a sua loja.",
  },
  {
    q: "Posso mudar de plano depois?",
    a: "Sim, quando quiser. Começou no START e quer subir para o GROW ou PRO? É só avisar e a gente ajusta.",
  },
  {
    q: "Vocês ajudam a fotografar os produtos?",
    a: "A gente orienta o que funciona melhor para venda online. Se precisar de fotógrafo, indicamos parceiros.",
  },
];

function ArrowSvg() {
  return (
    <svg
      width="13"
      height="13"
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

function PlusSvg() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function EcommercePage() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-white"
      >
        Ir para o conteúdo
      </a>

      <NavBar />

      {/* WhatsApp FAB mobile */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_24px_-4px_rgba(37,211,102,0.5)] transition duration-200 hover:scale-105 lg:hidden"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <main
        id="conteudo"
        className="home-v5 overflow-x-hidden pt-16 md:pt-[68px]"
      >
        {/* ============================================================
            HERO
            ============================================================ */}
        <section className="hero" data-section="ecommerce-hero">
          <div className="shell">
            <div className="hero-grid">
              {/* Copy */}
              <div>
                <div className="hero-eye">
                  <span className="pill-dot" aria-hidden="true" />
                  Lojas no ar em poucos dias
                </div>

                <h1>
                  Sua loja online <em>criada</em>{" "}
                  <span className="acc">para vender.</span>
                </h1>

                <p className="hero-pitch">
                  Sem plataforma genérica. Sem suporte robótico.{" "}
                  <strong>Visual profissional, hospedagem inclusa</strong> e
                  foco em vendas reais — do jeito que o seu negócio merece.
                </p>

                <div className="hero-cta">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer noopener"
                    data-cta="primary"
                    data-label="ecommerce-hero-whatsapp"
                    className="btn btn-wa"
                  >
                    Quero minha loja
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
                  <Link href="#planos" className="btn btn-ghost">
                    Ver planos
                  </Link>
                </div>

                <div className="hero-trust">
                  <div className="avatars" aria-hidden="true">
                    <span className="av j">Y</span>
                    <span className="av">UX</span>
                    <span className="av">DS</span>
                  </div>
                  <p className="txt">
                    <strong>Feita por desenvolvedores</strong>
                    <br />
                    Não é template — é loja do seu jeito
                  </p>
                </div>
              </div>

              {/* Painéis visuais */}
              <div className="hero-show" aria-hidden="true">
                {/* Painel grande — pedidos crescendo */}
                <div className="show big">
                  <div className="head">
                    <span>Pedidos / 30 dias</span>
                    <span className="live">Loja ativa</span>
                  </div>
                  <div className="num">47</div>
                  <div className="chart">
                    {chartOrders.map((h, i) => (
                      <div
                        key={i}
                        className={`bar${i === chartOrders.length - 1 ? " j" : ""}`}
                        style={{ height: `${Math.round((h / 60) * 100)}%` }}
                      />
                    ))}
                  </div>
                  <div className="chart-x">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>Mai</span>
                    <span>Jul</span>
                  </div>
                  <p className="desc">Crescimento de pedidos — loja no plano GROW</p>
                </div>

                {/* Painel — checkout ativo */}
                <div className="show accent">
                  <div className="head">
                    <span>Checkout</span>
                    <span className="live">Ativo</span>
                  </div>
                  <div className="num">
                    23<em>pedidos</em>
                  </div>
                  <p className="desc">Recebidos esta semana via PIX e WhatsApp</p>
                </div>

                {/* Painel — recursos */}
                <div className="show team">
                  <div className="head">
                    <span>Incluso no plano</span>
                  </div>
                  <div className="roles">
                    <span>Catálogo</span>
                    <span>Checkout</span>
                    <span>PIX</span>
                    <span>Painel</span>
                    <span>Mobile</span>
                    <span>Suporte</span>
                  </div>
                  <p className="desc" style={{ marginTop: "auto" }}>
                    Hospedagem inclusa, sem custo extra
                  </p>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="hero-creds">
              <span className="lbl">Planos</span>
              <div className="stats">
                <div className="stat">
                  <span className="v">R$37</span>
                  <span className="l">Plano START</span>
                </div>
                <div className="stat">
                  <span className="v">3</span>
                  <span className="l">Opções</span>
                </div>
                <div className="stat">
                  <span className="v">
                    7<em>d</em>
                  </span>
                  <span className="l">No ar em média</span>
                </div>
                <div className="stat">
                  <span className="v">
                    100<em>%</em>
                  </span>
                  <span className="l">Suporte humano</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            PROBLEMA — sec--light
            ============================================================ */}
        <section
          id="problema"
          className="sec sec--light"
          data-section="ecommerce-problema"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">01</span>
                <span className="name">O problema</span>
              </div>
              <h2 className="h-section">
                Por que tanto vendedor <em>desiste</em> de vender online?
              </h2>
              <p className="anno">
                A maioria das plataformas promete fácil e te deixa sozinho com
                tudo nas costas. A gente resolve isso de outra forma.
              </p>
            </div>

            <div className="auth-grid">
              <div className="auth-copy">
                <p className="pull">
                  Wix, Shopify, NuvemShop — são ferramentas. Mas ferramenta não
                  vende. <em>Estratégia e execução</em> vendem.
                </p>
                <p>
                  Você não deveria precisar de tutorial do YouTube para colocar
                  sua loja no ar. Não deveria ficar esperando 3 dias úteis para
                  uma resposta de suporte. E não deveria pagar caro por algo que
                  parece igual ao do concorrente.
                </p>
                <p>
                  <strong>
                    A Yamaji faz a loja, entrega pronta e fica do seu lado.
                  </strong>{" "}
                  Você foca em vender.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-link"
                  data-label="ecommerce-problema-whatsapp"
                >
                  Quero começar do jeito certo
                  <ArrowSvg />
                </a>
              </div>

              {/* Pain cards grid */}
              <div className="pain-grid">
                {pains.map((p) => (
                  <article key={p.title} className="pain-card">
                    <span className="pc-icon" aria-hidden="true">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18 6L6 18M6 6l12 12"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    <h4>{p.title}</h4>
                    <p>{p.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            DIFERENÇA YAMAJI — sec--graphite
            ============================================================ */}
        <section
          id="diferenciais"
          className="sec sec--graphite"
          data-section="ecommerce-diferenciais"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">02</span>
                <span className="name">A diferença</span>
              </div>
              <h2 className="h-section">
                Loja online de verdade, <em>feita para o seu negócio.</em>
              </h2>
              <p className="anno">
                Você não vai depender de tutorial. A gente faz, entrega e fica
                do seu lado enquanto a loja cresce.
              </p>
            </div>

            <div className="value-grid">
              {solutions.map((s) => (
                <article key={s.n} className="value-card">
                  <span className="v-num">{s.n}</span>
                  <h4>
                    <em>{s.title.split(" ")[0]}</em>{" "}
                    {s.title.split(" ").slice(1).join(" ")}
                  </h4>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>

            {/* Card de garantia */}
            <div
              style={{
                marginTop: "var(--s-4)",
                padding: "var(--s-4)",
                borderRadius: "var(--r-lg)",
                background: "var(--jade-tint)",
                border: "1px solid rgba(45,196,136,0.25)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "var(--s-3)",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--t-0)",
                  lineHeight: "1.55",
                  maxWidth: "52ch",
                }}
              >
                <strong style={{ color: "var(--acc)" }}>
                  Sem fidelidade. Sem taxa escondida.
                </strong>{" "}
                Você pode cancelar quando quiser. O plano mensal é livre, sem
                multa e sem burocracia.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-link"
                data-label="ecommerce-diferenciais-whatsapp"
              >
                Falar com a equipe <ArrowSvg />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            PLANOS — sec--sand
            ============================================================ */}
        <section
          id="planos"
          className="sec sec--sand"
          data-section="ecommerce-planos"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">03</span>
                <span className="name">Planos</span>
              </div>
              <h2 className="h-section">
                Escolha o plano <em>certo para agora.</em>
              </h2>
              <p className="anno">
                Comece pequeno se precisar. Suba de plano quando quiser. Sem
                fidelidade, sem contrato amarrado.
              </p>
            </div>

            <div className="plans-grid">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`plan-card${plan.featured ? " featured" : ""}`}
                >
                  {plan.featured && (
                    <span className="plan-badge">Mais escolhido</span>
                  )}
                  <span className="plan-label">{plan.name}</span>
                  <div className="plan-price">
                    <span className="curr">R$</span>
                    {plan.price}
                    <span className="per">/mês</span>
                  </div>
                  <p className="plan-tagline">{plan.tagline}</p>
                  <ul className="plan-features">
                    {plan.features.map((feat) => (
                      <li key={feat}>{feat}</li>
                    ))}
                  </ul>
                  <p className="plan-ideal">{plan.ideal}</p>
                  <a
                    href={planMsg(plan.name)}
                    target="_blank"
                    rel="noreferrer noopener"
                    data-cta="primary"
                    data-label={`ecommerce-plano-${plan.name.toLowerCase()}`}
                    className={`btn${plan.featured ? " btn-wa" : " btn-ghost"}`}
                    style={{ marginTop: "var(--s-2)", justifyContent: "center" }}
                  >
                    Quero o {plan.name}
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
                </article>
              ))}
            </div>

            <p
              style={{
                marginTop: "var(--s-4)",
                textAlign: "center",
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--t-2)",
              }}
            >
              Pagamento mensal · Sem fidelidade · Cancele quando quiser
            </p>
          </div>
        </section>

        {/* ============================================================
            COMO FUNCIONA — sec--dark
            ============================================================ */}
        <section
          id="como-funciona"
          className="sec sec--dark"
          data-section="ecommerce-como"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">04</span>
                <span className="name">Processo</span>
              </div>
              <h2 className="h-section">
                Do briefing ao ar <em>em poucos dias.</em>
              </h2>
              <p className="anno">
                Você não precisa entender nada de tecnologia. A gente cuida da
                parte técnica enquanto você foca no negócio.
              </p>
            </div>

            <div
              className="process-grid"
              style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
            >
              {steps.map((s) => (
                <article key={s.n} className="proc-card">
                  <div className="pc-num">
                    <strong>{s.n}</strong>
                    <span>{s.title}</span>
                  </div>
                  <h4>
                    <em>{s.title.split(" ")[0]}</em>{" "}
                    {s.title.split(" ").slice(1).join(" ")}
                  </h4>
                  <p>{s.text}</p>
                  <div className="pc-out">
                    <span className="k">Resultado</span>
                    <span className="v">{s.out}</span>
                  </div>
                </article>
              ))}
            </div>

            <div
              style={{
                marginTop: "var(--s-5)",
                textAlign: "center",
              }}
            >
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer noopener"
                data-cta="primary"
                data-label="ecommerce-como-whatsapp"
                className="btn btn-wa"
              >
                Começar agora pelo WhatsApp
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
            </div>
          </div>
        </section>

        {/* ============================================================
            DEMO — sec--light
            ============================================================ */}
        <section
          id="demo"
          className="sec sec--light"
          data-section="ecommerce-demo"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">05</span>
                <span className="name">Demo</span>
              </div>
              <h2 className="h-section">
                Veja a plataforma <em>funcionando.</em>
              </h2>
              <p className="anno">
                Fluxo real: storefront, área do cliente, painel do dono e
                dashboard de métricas. Tudo disponível para explorar agora.
              </p>
            </div>

            <div className="projects-grid">
              {demos.map((d) => (
                <Link
                  key={d.title}
                  href={d.href}
                  className="project std"
                  style={{ textDecoration: "none" }}
                >
                  <div className="thumb">
                    <div className={`thumb-art ${d.thumb}`} aria-hidden="true">
                      <div className="pat" />
                      <div className="thumb-device">
                        <div className="head">
                          <div className="dot" />
                          <span className="nm">{d.title}</span>
                        </div>
                        <div className="bar s1" />
                        <div className="bar s2" />
                        <div className="row">
                          <div className="blk" />
                          <div className="blk j" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="body">
                    <div className="meta">
                      <span>{d.tag}</span>
                      <span className="acc">Demo</span>
                    </div>
                    <h4>{d.title}</h4>
                    <p className="scope">{d.text}</p>
                    <span className="more">Abrir demo →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            FAQ — sec--graphite
            ============================================================ */}
        <section
          id="faq"
          className="sec sec--graphite"
          data-section="ecommerce-faq"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">06</span>
                <span className="name">Dúvidas</span>
              </div>
              <h2 className="h-section">
                Antes de você <em>chamar a gente.</em>
              </h2>
              <p className="anno">
                As perguntas que mais recebemos. Se ficou outra dúvida, manda
                mensagem no WhatsApp.
              </p>
            </div>

            <div className="auth-grid">
              <div className="auth-copy">
                <p className="pull">
                  Respondemos <em>rápido</em> porque conhecemos cada detalhe da
                  sua loja.
                </p>
                <p>
                  Suporte humano não é só uma promessa. É o nosso modelo de
                  trabalho. Você fala com quem fez a sua loja.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-link"
                  data-label="ecommerce-faq-whatsapp"
                >
                  Mandar mensagem agora <ArrowSvg />
                </a>
              </div>

              <div className="faq-list">
                {faqs.map((item, i) => (
                  <details
                    key={item.q}
                    className="faq-item"
                    open={i === 0}
                  >
                    <summary>
                      <span>{item.q}</span>
                      <span className="faq-icon" aria-hidden="true">
                        <PlusSvg />
                      </span>
                    </summary>
                    <p className="faq-body">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            CTA FINAL — sec--dark
            ============================================================ */}
        <section className="sec sec--dark" data-section="ecommerce-cta">
          <div className="shell">
            <div className="cta-block">
              <div className="eye">
                <span className="pd" aria-hidden="true" />
                Atendimento aberto
              </div>

              <h2>
                Pronto para colocar <em>sua loja</em>{" "}
                <span className="acc">no ar?</span>
              </h2>

              <p>
                Escolha o plano, manda mensagem no WhatsApp e a gente começa
                em poucos minutos. Sem formulário, sem espera.
              </p>

              <div className="row-btns">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cta="primary"
                  data-label="ecommerce-cta-final"
                  className="btn btn-wa"
                >
                  Quero minha loja online
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
                <Link href="#planos" className="btn btn-ghost">
                  Ver planos
                </Link>
              </div>

              <div className="foot">
                <span>START a partir de R$37/mês</span>
                <span>Hospedagem inclusa</span>
                <span>Cancele quando quiser</span>
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

              <nav className="footer-col" aria-label="E-commerce">
                <h5>Loja Online</h5>
                <ul>
                  <li>
                    <Link href="#planos">Planos</Link>
                  </li>
                  <li>
                    <Link href="/e-commerce/demo/storefront">Demo Storefront</Link>
                  </li>
                  <li>
                    <Link href="/e-commerce/demo/dashboard">Demo Dashboard</Link>
                  </li>
                  <li>
                    <Link href="/loja-online">Loja Online</Link>
                  </li>
                </ul>
              </nav>

              <div className="footer-col">
                <h5>Contato</h5>
                <ul>
                  <li>
                    <a
                      href={WHATSAPP}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a href="mailto:oi@yamajistudio.com.br">E-mail</a>
                  </li>
                  <li>
                    <Link href="/">Página inicial</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <span>© 2025 Yamaji Studio. Todos os direitos reservados.</span>
              <span>Salvador, Bahia — Brasil</span>
            </div>
          </div>

          <div className="footer-mark" aria-hidden="true">
            Yamaji
          </div>
        </footer>
      </main>
    </>
  );
}
