import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/site/NavBar";

export const metadata: Metadata = {
  title: "Sistemas para Negócios · Qual é o certo para você? | Yamaji Studio",
  description:
    "E-commerce, CRM para Clínicas, Plataforma Educacional ou Automação com IA. Encontre o sistema certo para o seu negócio.",
  alternates: { canonical: "/sistemas" },
};

const whatsMsg = encodeURIComponent(
  "Olá! Quero entender qual sistema da Yamaji faz mais sentido para o meu negócio."
);
const WHATSAPP = `https://wa.me/5571992258349?text=${whatsMsg}`;

const chartData = [30, 45, 55, 65, 78, 90, 100];

const tipos = [
  {
    tag: "Vender online",
    title: "E-commerce",
    text: "Para quem vende produtos físicos ou digitais e precisa de loja, carrinho, pagamento e gestão de estoque num só lugar.",
    href: "/e-commerce",
    destaques: [
      "Loja completa",
      "Checkout rápido",
      "Gestão de estoque",
      "Relatórios de venda",
    ],
  },
  {
    tag: "Clínicas e consultórios",
    title: "CRM para Clínicas",
    text: "Para médicos, dentistas e terapeutas que querem agenda online, prontuário digital e confirmações automáticas pelo WhatsApp.",
    href: "/crm-clinicas",
    destaques: [
      "Agenda online",
      "Prontuário digital",
      "Confirmação automática",
      "Compliance LGPD",
    ],
  },
  {
    tag: "Cursos e treinamentos",
    title: "Plataforma Educacional",
    text: "Para quem vende cursos, mentorias ou capacita equipes e precisa de área de membros, trilhas e emissão de certificados.",
    href: "/plataforma-educacional",
    destaques: [
      "Área de membros",
      "Trilhas de aprendizado",
      "Certificados",
      "Vídeo e materiais",
    ],
  },
  {
    tag: "Automação e IA",
    title: "Automação com IA",
    text: "Para negócios que recebem muitas mensagens e querem atender, qualificar e vender no WhatsApp e Instagram sem aumentar equipe.",
    href: "/automacao-ia",
    destaques: [
      "Bot no WhatsApp",
      "Qualificação automática",
      "Integração com CRM",
      "Atendimento 24h",
    ],
  },
];

const guia = [
  {
    n: "01",
    title: "Qual é o maior gargalo hoje?",
    text: "Vendas, atendimento, organização interna ou entrega de conteúdo? Esse é o ponto de partida.",
  },
  {
    n: "02",
    title: "Qual processo consome mais tempo?",
    text: "Agendamentos, respostas repetitivas, emissão de certificados, atualização de estoque?",
  },
  {
    n: "03",
    title: "O que faz o cliente desistir?",
    text: "Site lento, sem agendamento online, demora no atendimento, falta de acesso ao conteúdo comprado.",
  },
  {
    n: "04",
    title: "O que precisa existir para dobrar o volume?",
    text: "Se você crescer 2×, o que quebra primeiro? Essa resposta define qual sistema vem antes.",
  },
];

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Entendemos o negócio, os processos atuais e o que precisa mudar primeiro.",
    out: "Caminho definido",
  },
  {
    n: "02",
    title: "Proposta",
    text: "Apresentamos qual sistema resolve melhor, com escopo, prazo e investimento.",
    out: "Proposta clara",
  },
  {
    n: "03",
    title: "Implantação",
    text: "Configuramos, testamos e treinamos a equipe para operar com autonomia.",
    out: "Sistema no ar",
  },
  {
    n: "04",
    title: "Suporte contínuo",
    text: "Acompanhamos os primeiros 30 dias e mantemos planos de evolução disponíveis.",
    out: "Crescimento sustentado",
  },
];

const faqs = [
  {
    q: "Preciso contratar tudo de uma vez?",
    a: "Não. Você começa pelo que resolve o maior problema hoje e expande quando quiser. Os sistemas são modulares e crescem com o negócio.",
  },
  {
    q: "Vocês entregam o sistema pronto ou ensinam a usar plataformas?",
    a: "Entregamos tudo configurado e pronto para usar. Não somos revendedores de ferramenta: desenvolvemos e implantamos o sistema no seu negócio.",
  },
  {
    q: "E se meu negócio não se encaixar em nenhuma categoria?",
    a: "Fazemos um diagnóstico gratuito e desenhamos a solução certa. Vários clientes têm combinações de dois sistemas rodando juntos.",
  },
  {
    q: "Quanto tempo leva para estar no ar?",
    a: "Em média entre 2 e 6 semanas, dependendo do sistema. Trabalhamos com datas e entregas definidas desde o início.",
  },
  {
    q: "Tem suporte depois que o sistema for ao ar?",
    a: "Sim. Todo projeto inclui período de acompanhamento e planos mensais de suporte e evolução contínua.",
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
      <path
        d="M8 3v10M3 8h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Sistemas() {
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
        <section className="hero" data-section="sistemas-hero">
          <div className="shell">
            <div className="hero-grid">
              {/* Copy */}
              <div>
                <div className="hero-eye">
                  <span className="pill-dot" aria-hidden="true" />
                  Sistemas · Yamaji Studio
                </div>

                <h1>
                  Qual sistema faz sentido{" "}
                  <span className="acc">para o seu negócio?</span>
                </h1>

                <p className="hero-pitch">
                  Não existe sistema universal.{" "}
                  <strong>
                    Cada tipo de operação tem necessidades diferentes.
                  </strong>{" "}
                  Veja abaixo qual se encaixa no seu caso.
                </p>

                <div className="hero-cta">
                  <Link
                    href="#sistemas"
                    data-cta="primary"
                    data-label="sistemas-hero-ver"
                    className="btn btn-wa"
                  >
                    Ver os sistemas
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
                  </Link>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-ghost"
                  >
                    Falar com especialista
                  </a>
                </div>

                <div className="hero-trust">
                  <div className="avatars" aria-hidden="true">
                    <span className="av j">Y</span>
                    <span className="av">EC</span>
                    <span className="av">AI</span>
                  </div>
                  <p className="txt">
                    <strong>4 tipos de sistema no catálogo</strong>
                    <br />
                    Do diagnóstico ao ar em até 6 semanas.
                  </p>
                </div>
              </div>

              {/* Painéis visuais */}
              <div className="hero-show" aria-hidden="true">
                <div className="show big">
                  <div className="head">
                    <span>Sistemas implantados</span>
                    <span className="live">Ativo</span>
                  </div>
                  <div className="num">40+</div>
                  <div className="chart">
                    {chartData.map((h, i) => (
                      <div
                        key={i}
                        className={`bar${i === chartData.length - 1 ? " j" : ""}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="chart-x">
                    <span>2023</span>
                    <span>2024</span>
                    <span>2025</span>
                    <span>Hoje</span>
                  </div>
                  <p className="desc">Negócios ativos com sistemas Yamaji</p>
                </div>

                <div className="show accent">
                  <div className="head">
                    <span>Setores cobertos</span>
                    <span className="live">Catálogo</span>
                  </div>
                  <div className="num">
                    4<em>tipos</em>
                  </div>
                  <p className="desc">E-commerce, Clínicas, Educação, IA</p>
                </div>

                <div className="show team">
                  <div className="head">
                    <span>O que entregamos</span>
                  </div>
                  <div className="roles">
                    <span>E-commerce</span>
                    <span>Clínicas</span>
                    <span>Educação</span>
                    <span>Automação</span>
                    <span>API</span>
                    <span>Suporte</span>
                  </div>
                  <p className="desc" style={{ marginTop: "auto" }}>
                    Sistema configurado, documentado e entregue
                  </p>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="hero-creds">
              <span className="lbl">Nosso catálogo</span>
              <div className="stats">
                <div className="stat">
                  <span className="v">4</span>
                  <span className="l">Sistemas</span>
                </div>
                <div className="stat">
                  <span className="v">40+</span>
                  <span className="l">Negócios ativos</span>
                </div>
                <div className="stat">
                  <span className="v">
                    6<em>sem</em>
                  </span>
                  <span className="l">Até o ar</span>
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
            COMO ESCOLHER — sec--light
            ============================================================ */}
        <section
          id="como-escolher"
          className="sec sec--light"
          data-section="sistemas-como-escolher"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">01</span>
                <span className="name">Como escolher</span>
              </div>
              <h2 className="h-section">
                O sistema certo depende do que{" "}
                <em>você precisa resolver.</em>
              </h2>
              <p className="anno">
                Antes de escolher tecnologia, defina o problema. Cada sistema
                abaixo foi desenhado para um contexto específico.
              </p>
            </div>

            <div className="auth-grid">
              <div className="auth-copy">
                <p className="pull">
                  Tecnologia que não resolve um problema <em>real</em> é custo,
                  não investimento.
                </p>
                <p>
                  Por isso a gente começa com um diagnóstico: entender o
                  negócio antes de propor qualquer sistema. Depois você decide
                  com clareza, não com chute.
                </p>
                <p>
                  <strong>
                    4 perguntas que ajudam a encontrar o caminho certo:
                  </strong>
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-link"
                  data-label="sistemas-como-whatsapp"
                >
                  Quero fazer o diagnóstico gratuito
                  <ArrowSvg />
                </a>
              </div>

              <div className="pain-grid">
                {guia.map((g) => (
                  <article key={g.n} className="pain-card">
                    <span
                      className="pc-icon"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "13px",
                        fontWeight: 700,
                        color: "var(--acc)",
                      }}
                      aria-hidden="true"
                    >
                      {g.n}
                    </span>
                    <h4>{g.title}</h4>
                    <p>{g.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SISTEMAS — sec--graphite
            ============================================================ */}
        <section
          id="sistemas"
          className="sec sec--graphite"
          data-section="sistemas-catalogo"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">02</span>
                <span className="name">Sistemas disponíveis</span>
              </div>
              <h2 className="h-section">
                Escolha o que <em>serve para você.</em>
              </h2>
              <p className="anno">
                Cada sistema é entregue configurado e pronto para usar. Nada de
                tutorial do YouTube para colocar no ar.
              </p>
            </div>

            <div
              className="plans-grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              }}
            >
              {tipos.map((t) => (
                <article key={t.title} className="plan-card">
                  <span className="plan-label">{t.tag}</span>
                  <div style={{ margin: "var(--s-2) 0 var(--s-1)" }}>
                    <h4
                      style={{
                        fontSize: "20px",
                        fontFamily: "var(--font-display)",
                        color: "var(--t-0)",
                        lineHeight: 1.2,
                      }}
                    >
                      {t.title}
                    </h4>
                  </div>
                  <p className="plan-tagline">{t.text}</p>
                  <ul className="plan-features">
                    {t.destaques.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                  <Link
                    href={t.href}
                    data-cta="secondary"
                    data-label={`sistemas-tipo-${t.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="btn btn-ghost"
                    style={{ marginTop: "var(--s-2)", justifyContent: "center" }}
                  >
                    Ver solução
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
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            PROCESSO — sec--dark
            ============================================================ */}
        <section
          id="como-funciona"
          className="sec sec--dark"
          data-section="sistemas-processo"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">03</span>
                <span className="name">Processo</span>
              </div>
              <h2 className="h-section">
                Do diagnóstico ao sistema <em>rodando.</em>
              </h2>
              <p className="anno">
                Processo claro, com prazo definido e acompanhamento do início ao
                go-live. Sem surpresas no meio do caminho.
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
                data-label="sistemas-processo-whatsapp"
                className="btn btn-wa"
              >
                Começar pelo diagnóstico
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
            FAQ — sec--light
            ============================================================ */}
        <section
          id="faq"
          className="sec sec--light"
          data-section="sistemas-faq"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">04</span>
                <span className="name">Dúvidas</span>
              </div>
              <h2 className="h-section">
                Perguntas que todo cliente faz <em>antes de começar.</em>
              </h2>
              <p className="anno">
                Se ficou outra dúvida, manda mensagem no WhatsApp. Em 15
                minutos conseguimos indicar o caminho.
              </p>
            </div>

            <div className="auth-grid">
              <div className="auth-copy">
                <p className="pull">
                  Ainda com dúvida sobre <em>qual sistema</em> é o certo?
                </p>
                <p>
                  Fale com a gente. Em 15 minutos conseguimos indicar o caminho
                  mais direto para o seu caso. Diagnóstico gratuito, sem
                  compromisso.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-link"
                  data-label="sistemas-faq-whatsapp"
                >
                  Mandar mensagem agora <ArrowSvg />
                </a>
              </div>

              <div className="faq-list">
                {faqs.map((item, i) => (
                  <details key={item.q} className="faq-item" open={i === 0}>
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
        <section className="sec sec--dark" data-section="sistemas-cta">
          <div className="shell">
            <div className="cta-block">
              <div className="eye">
                <span className="pd" aria-hidden="true" />
                Diagnóstico gratuito
              </div>

              <h2>
                Ainda com dúvida sobre qual sistema{" "}
                <span className="acc">é o certo para você?</span>
              </h2>

              <p>
                Fale com a gente. Em 15 minutos conseguimos indicar o caminho
                mais direto para o seu caso.
              </p>

              <div className="row-btns">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cta="primary"
                  data-label="sistemas-cta-final"
                  className="btn btn-wa"
                >
                  Falar com especialista
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
                <Link href="#sistemas" className="btn btn-ghost">
                  Ver os sistemas
                </Link>
              </div>

              <div className="foot">
                <span>Diagnóstico gratuito</span>
                <span>Sem compromisso</span>
                <span>4 tipos de sistema</span>
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
                    <Link href="/sistemas">Sistemas</Link>
                  </li>
                </ul>
              </nav>

              <nav className="footer-col" aria-label="Nossos Sistemas">
                <h5>Nossos Sistemas</h5>
                <ul>
                  <li>
                    <Link href="/e-commerce">E-commerce</Link>
                  </li>
                  <li>
                    <Link href="/crm-clinicas">CRM para Clínicas</Link>
                  </li>
                  <li>
                    <Link href="/plataforma-educacional">
                      Plataforma Educacional
                    </Link>
                  </li>
                  <li>
                    <Link href="/automacao-ia">Automação com IA</Link>
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
              <span>Salvador, Bahia · Brasil</span>
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
