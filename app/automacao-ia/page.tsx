import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/site/NavBar";

export const metadata: Metadata = {
  title: "Automação com IA · Atendimento 24h | Yamaji Studio",
  description:
    "Automatize WhatsApp, e-mail e processos internos com IA real. Atenda, qualifique e venda 24h por dia sem contratar mais.",
  alternates: { canonical: "/automacao-ia" },
};

const whatsMsg = encodeURIComponent(
  "Olá! Vim pelo site da Yamaji Studio e quero saber mais sobre Automação com IA."
);
const WHATSAPP = `https://wa.me/5571992258349?text=${whatsMsg}`;

const chartData = [40, 52, 61, 70, 80, 95, 100];

const pains = [
  {
    title: "Atendimento lento e caro",
    text: "Equipe sobrecarregada respondendo sempre as mesmas perguntas e perdendo leads por demora.",
  },
  {
    title: "Processos manuais que travam",
    text: "Fluxos de aprovação, cobranças e follow-ups feitos no braço consomem tempo que poderia ir para o cliente.",
  },
  {
    title: "Dados dispersos, decisões no escuro",
    text: "Sem integração entre canais você não sabe de onde vem o lead nem o que ele fez antes de comprar.",
  },
  {
    title: "Escala impossível sem contratar",
    text: "Para dobrar o volume de atendimento hoje você precisaria dobrar a equipe. Com IA, não.",
  },
];

const solutions = [
  {
    n: "01",
    title: "Atendimento automático multicanal",
    text: "Bot com IA real no WhatsApp, Instagram e e-mail: qualifica leads, responde dúvidas e agenda sem precisar de humano no loop.",
  },
  {
    n: "02",
    title: "Fluxos internos inteligentes",
    text: "Aprovações, cobranças recorrentes, notificações e relatórios disparados automaticamente no momento certo.",
  },
  {
    n: "03",
    title: "Escala sem contratar",
    text: "Volume 10× maior de interações sem aumentar headcount. A IA assume o que é repetitivo para o time focar no estratégico.",
  },
];

const solucoes = [
  {
    tag: "Atendimento",
    title: "Bot IA para WhatsApp e Instagram",
    text: "Responde, qualifica e transfere para humano só quando precisa.",
  },
  {
    tag: "Automação",
    title: "Fluxos de cobrança e follow-up",
    text: "Régua automática de mensagens por status do cliente.",
  },
  {
    tag: "Integração",
    title: "CRM, calendário e planilha",
    text: "Dados sincronizados entre ferramentas sem digitação manual.",
  },
  {
    tag: "Interno",
    title: "Aprovações e notificações",
    text: "Fluxos internos que rodam sozinhos e notificam quem precisa.",
  },
  {
    tag: "BI",
    title: "Dashboard em tempo real",
    text: "Métricas de atendimento, conversão e SLA num só painel.",
  },
  {
    tag: "Treinamento",
    title: "Onboarding da equipe",
    text: "Documentação e capacitação para sua equipe operar os fluxos.",
  },
];

const steps = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Mapeamos seus canais, volumes e gargalos atuais.",
    out: "Mapa de automação",
  },
  {
    n: "02",
    title: "Configuração",
    text: "Construímos os fluxos e treinamos o modelo no seu contexto.",
    out: "Fluxos prontos",
  },
  {
    n: "03",
    title: "Go-live",
    text: "Ativamos em ambiente de testes, ajustamos e publicamos.",
    out: "Sistema ativo",
  },
  {
    n: "04",
    title: "Ajuste contínuo",
    text: "Monitoramento de métricas e melhoria iterativa mês a mês.",
    out: "Resultado crescendo",
  },
];

const faqs = [
  {
    q: "Preciso saber programar?",
    a: "Não. Entregamos tudo configurado e documentado. Sua equipe só opera a interface.",
  },
  {
    q: "Quanto tempo para ir ao ar?",
    a: "Entre 2 e 4 semanas dependendo da complexidade dos fluxos.",
  },
  {
    q: "O bot parece robótico?",
    a: "Usamos LLMs de última geração. As respostas são naturais e adaptadas ao tom da sua marca.",
  },
  {
    q: "E se o cliente quiser falar com humano?",
    a: "Há gatilho de transferência inteligente: o bot passa o contexto completo para o atendente.",
  },
  {
    q: "Funciona com meu sistema atual?",
    a: "Integramos via API com a maioria dos CRMs, ERPs e plataformas de e-commerce do mercado.",
  },
  {
    q: "Qual é o custo de manutenção?",
    a: "Planos mensais de suporte e melhoria contínua disponíveis após o go-live.",
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

export default function AutomacaoIA() {
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
        <section className="hero" data-section="automacao-hero">
          <div className="shell">
            <div className="hero-grid">
              {/* Copy */}
              <div>
                <div className="hero-eye">
                  <span className="pill-dot" aria-hidden="true" />
                  Automação & IA · Yamaji Studio
                </div>

                <h1>
                  Seu negócio atendendo, qualificando e vendendo{" "}
                  <span className="acc">24h por dia.</span>
                </h1>

                <p className="hero-pitch">
                  Automatize WhatsApp, e-mail e processos internos com IA real.{" "}
                  <strong>Sem contratar mais, sem perder leads.</strong>
                </p>

                <div className="hero-cta">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer noopener"
                    data-cta="primary"
                    data-label="automacao-hero-whatsapp"
                    className="btn btn-wa"
                  >
                    Quero automatizar agora
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
                  <Link href="#solucoes" className="btn btn-ghost">
                    Ver soluções
                  </Link>
                </div>

                <div className="hero-trust">
                  <div className="avatars" aria-hidden="true">
                    <span className="av j">Y</span>
                    <span className="av">AI</span>
                    <span className="av">IA</span>
                  </div>
                  <p className="txt">
                    <strong>IA real aplicada ao negócio</strong>
                    <br />
                    Fluxos testados, documentados e com suporte.
                  </p>
                </div>
              </div>

              {/* Painéis visuais */}
              <div className="hero-show" aria-hidden="true">
                <div className="show big">
                  <div className="head">
                    <span>Atendimentos automáticos</span>
                    <span className="live">Ativo</span>
                  </div>
                  <div className="num">+171%</div>
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
                    <span>Sem. 1</span>
                    <span>Sem. 3</span>
                    <span>Sem. 6</span>
                    <span>Sem. 9</span>
                  </div>
                  <p className="desc">Crescimento em 90 dias com bot IA no WhatsApp</p>
                </div>

                <div className="show accent">
                  <div className="head">
                    <span>Disponibilidade</span>
                    <span className="live">On</span>
                  </div>
                  <div className="num">
                    24h<em>/dia</em>
                  </div>
                  <p className="desc">7 dias por semana, sem pausas</p>
                </div>

                <div className="show team">
                  <div className="head">
                    <span>Canais integrados</span>
                  </div>
                  <div className="roles">
                    <span>WhatsApp</span>
                    <span>Instagram</span>
                    <span>E-mail</span>
                    <span>Agenda</span>
                    <span>Cobrança</span>
                    <span>Notif</span>
                  </div>
                  <p className="desc" style={{ marginTop: "auto" }}>
                    Tudo integrado num só fluxo
                  </p>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="hero-creds">
              <span className="lbl">Resultados</span>
              <div className="stats">
                <div className="stat">
                  <span className="v">24h</span>
                  <span className="l">Disponível</span>
                </div>
                <div className="stat">
                  <span className="v">+171%</span>
                  <span className="l">Atendimentos</span>
                </div>
                <div className="stat">
                  <span className="v">
                    4<em>sem</em>
                  </span>
                  <span className="l">Até o ar</span>
                </div>
                <div className="stat">
                  <span className="v">
                    10<em>×</em>
                  </span>
                  <span className="l">Mais volume</span>
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
          data-section="automacao-problema"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">01</span>
                <span className="name">O problema</span>
              </div>
              <h2 className="h-section">
                Por que o crescimento <em>trava</em> sem automação?
              </h2>
              <p className="anno">
                Cada processo manual custa tempo, dinheiro e oportunidades. O
                concorrente que automatizou já saiu na frente.
              </p>
            </div>

            <div className="auth-grid">
              <div className="auth-copy">
                <p className="pull">
                  Atendimento manual <em>não escala.</em> Chega uma hora que
                  você precisa escolher entre crescer ou manter qualidade.
                </p>
                <p>
                  Com IA, você não precisa escolher. O bot cuida do volume, o
                  time cuida do relacionamento. Cada lead qualificado, cada
                  follow-up no tempo certo.
                </p>
                <p>
                  <strong>
                    A automação certa libera sua equipe para o que só humano
                    faz.
                  </strong>
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-link"
                  data-label="automacao-problema-whatsapp"
                >
                  Quero automatizar meu negócio
                  <ArrowSvg />
                </a>
              </div>

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
            ABORDAGEM — sec--graphite
            ============================================================ */}
        <section
          id="diferenciais"
          className="sec sec--graphite"
          data-section="automacao-diferenciais"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">02</span>
                <span className="name">Nossa abordagem</span>
              </div>
              <h2 className="h-section">
                Automação que <em>realmente funciona.</em>
              </h2>
              <p className="anno">
                Não é só ligar um bot. É entender o seu processo e construir
                fluxos que geram resultado mensurável.
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
                  Volume 10× maior. Custo de equipe igual.
                </strong>{" "}
                A IA escala o que é repetitivo para o time focar no estratégico.
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-link"
                data-label="automacao-diferenciais-whatsapp"
              >
                Falar com a equipe <ArrowSvg />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            SOLUÇÕES — sec--sand
            ============================================================ */}
        <section
          id="solucoes"
          className="sec sec--sand"
          data-section="automacao-solucoes"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">03</span>
                <span className="name">Soluções</span>
              </div>
              <h2 className="h-section">
                O que <em>entregamos</em> para o seu negócio.
              </h2>
              <p className="anno">
                Cada solução é configurada para o seu contexto. Nada genérico,
                nada que não gere resultado.
              </p>
            </div>

            <div className="projects-grid">
              {solucoes.map((s) => (
                <article
                  key={s.title}
                  className="project std"
                  style={{ textDecoration: "none" }}
                >
                  <div className="body" style={{ padding: "var(--s-3)" }}>
                    <div className="meta">
                      <span>{s.tag}</span>
                      <span className="acc">Incluso</span>
                    </div>
                    <h4>{s.title}</h4>
                    <p className="scope">{s.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            COMO FUNCIONA — sec--dark
            ============================================================ */}
        <section
          id="como-funciona"
          className="sec sec--dark"
          data-section="automacao-como"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">04</span>
                <span className="name">Processo</span>
              </div>
              <h2 className="h-section">
                Do diagnóstico ao ar <em>em até 4 semanas.</em>
              </h2>
              <p className="anno">
                Processo estruturado para garantir que cada automação seja
                relevante, testada e documentada.
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
                    <em>{s.title}</em>
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
                data-label="automacao-como-whatsapp"
                className="btn btn-wa"
              >
                Começar diagnóstico gratuito
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
            FAQ — sec--graphite
            ============================================================ */}
        <section
          id="faq"
          className="sec sec--graphite"
          data-section="automacao-faq"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">05</span>
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
                  Respondemos <em>rápido</em> porque entendemos automação de
                  negócio de ponta a ponta.
                </p>
                <p>
                  Suporte humano não é só uma promessa. Você fala com quem
                  configurou o seu fluxo.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-link"
                  data-label="automacao-faq-whatsapp"
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
        <section className="sec sec--dark" data-section="automacao-cta">
          <div className="shell">
            <div className="cta-block">
              <div className="eye">
                <span className="pd" aria-hidden="true" />
                Diagnóstico gratuito
              </div>

              <h2>
                Pronto para atender, qualificar e vender{" "}
                <span className="acc">24h por dia?</span>
              </h2>

              <p>
                Comece com um diagnóstico gratuito e veja onde a automação gera
                mais resultado para você. Sem formulário, sem espera.
              </p>

              <div className="row-btns">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer noopener"
                  data-cta="primary"
                  data-label="automacao-cta-final"
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
                <Link href="#solucoes" className="btn btn-ghost">
                  Ver soluções
                </Link>
              </div>

              <div className="foot">
                <span>Diagnóstico gratuito</span>
                <span>Sem fidelidade</span>
                <span>Resultado mensurável</span>
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

              <nav className="footer-col" aria-label="Automação IA">
                <h5>Automação IA</h5>
                <ul>
                  <li>
                    <Link href="#solucoes">Soluções</Link>
                  </li>
                  <li>
                    <Link href="#como-funciona">Como funciona</Link>
                  </li>
                  <li>
                    <Link href="#faq">Dúvidas frequentes</Link>
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
