import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/site/NavBar";

export const metadata: Metadata = {
  title: "CRM para Clínicas · Agenda e Compliance LGPD | Yamaji Studio",
  description:
    "Gestão completa para clínicas e consultórios: agendamento online, prontuário digital, RBAC e auditoria LGPD num só sistema.",
  alternates: { canonical: "/crm-clinicas" },
};

const DEMO_ROUTE = "/crm-clinicas/demo";
const whatsMsg = encodeURIComponent(
  "Olá! Vim pelo site da Yamaji Studio e quero conhecer o CRM para Clínicas."
);
const WHATSAPP = `https://wa.me/5571992258349?text=${whatsMsg}`;

const chartData = [45, 55, 60, 65, 72, 80, 88];

const pains = [
  {
    title: "Agenda com buracos e faltas sem aviso",
    text: "Confirmações manuais pelo WhatsApp não escalam. Cada falta é receita perdida e tempo desperdiçado.",
  },
  {
    title: "Prontuário em papel ou planilha solta",
    text: "Histórico espalhado em cadernos e arquivos impossibilita um atendimento de qualidade e aumenta risco de erro.",
  },
  {
    title: "LGPD e compliance ignorados",
    text: "Dados de pacientes sem controle de acesso, sem log de auditoria e sem consentimento expõem a clínica a multas sérias.",
  },
  {
    title: "Nenhuma visão do negócio em tempo real",
    text: "Sem dashboard de ocupação, inadimplência e NPS você toma decisões no escuro e perde oportunidades de crescimento.",
  },
];

const solutions = [
  {
    n: "01",
    title: "Controle de acesso por perfil",
    text: "Cada colaborador acessa só o que precisa: recepcionista vê agenda, médico vê prontuário, gestor vê tudo.",
  },
  {
    n: "02",
    title: "Auditoria completa",
    text: "Log imutável de quem acessou, editou ou exportou qualquer dado, com conformidade LGPD total.",
  },
  {
    n: "03",
    title: "Dashboard de gestão",
    text: "Ocupação da agenda, receita, inadimplência e NPS em tempo real. Decisões baseadas em dados, não em intuição.",
  },
];

const modulos = [
  {
    tag: "Agenda",
    title: "Agendamento online e confirmação automática",
    text: "Link público para o paciente agendar e lembretes automáticos por WhatsApp.",
  },
  {
    tag: "CRM",
    title: "Histórico completo do paciente",
    text: "Prontuário, anamnese, documentos e linha do tempo de atendimentos num só lugar.",
  },
  {
    tag: "RBAC",
    title: "Perfis de acesso granulares",
    text: "Permissões por papel: recepção, clínico, especialista, gestor e TI.",
  },
  {
    tag: "Audit",
    title: "Log de auditoria imutável",
    text: "Registro de todas as ações com timestamp, IP e usuário para compliance LGPD.",
  },
  {
    tag: "BI",
    title: "Painel de gestão em tempo real",
    text: "KPIs de ocupação, receita, faltas, NPS e satisfação atualizados ao minuto.",
  },
  {
    tag: "API",
    title: "Integrações via API",
    text: "Conecte com seu sistema de faturamento, convênios e ferramentas já utilizadas.",
  },
];

const steps = [
  {
    n: "01",
    title: "Levantamento",
    text: "Mapeamos fluxos atuais, perfis de usuário e integrações necessárias.",
    out: "Escopo definido",
  },
  {
    n: "02",
    title: "Configuração",
    text: "Parametrizamos agenda, prontuário, RBAC e relatórios conforme sua especialidade.",
    out: "Sistema configurado",
  },
  {
    n: "03",
    title: "Migração de dados",
    text: "Importamos histórico existente com validação de integridade e backup.",
    out: "Dados migrados",
  },
  {
    n: "04",
    title: "Treinamento e go-live",
    text: "Capacitamos a equipe e acompanhamos os primeiros 30 dias de operação.",
    out: "Clínica no ar",
  },
];

const faqs = [
  {
    q: "O sistema é validado para uso em saúde?",
    a: "Sim. Seguimos as diretrizes do CFM para prontuário eletrônico e a LGPD para dados sensíveis de saúde.",
  },
  {
    q: "Quantos usuários posso ter?",
    a: "Ilimitados. Cada usuário tem perfil próprio com permissões definidas pelo gestor da clínica.",
  },
  {
    q: "Posso migrar meu histórico atual?",
    a: "Sim. Realizamos a importação de planilhas, sistemas legados e até prontuários em papel (digitalização inclusa no plano completo).",
  },
  {
    q: "E se o paciente cancelar pelo link?",
    a: "O slot é liberado automaticamente e você pode configurar oferta imediata para lista de espera.",
  },
  {
    q: "Tem app mobile para os médicos?",
    a: "Sim, PWA responsivo acessível de qualquer dispositivo sem instalação.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Suporte via WhatsApp e e-mail em horário comercial, com SLA de 4h para incidentes críticos.",
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

export default function CrmClinicas() {
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
        <section className="hero" data-section="crm-hero">
          <div className="shell">
            <div className="hero-grid">
              {/* Copy */}
              <div>
                <div className="hero-eye">
                  <span className="pill-dot" aria-hidden="true" />
                  CRM para Clínicas · Yamaji Studio
                </div>

                <h1>
                  Agenda cheia, prontuário organizado e{" "}
                  <span className="acc">compliance total.</span>
                </h1>

                <p className="hero-pitch">
                  Gestão completa para clínicas e consultórios:{" "}
                  <strong>agendamento, CRM, RBAC e auditoria LGPD</strong> num
                  só sistema.
                </p>

                <div className="hero-cta">
                  <a
                    href={DEMO_ROUTE}
                    data-cta="primary"
                    data-label="crm-hero-demo"
                    className="btn btn-wa"
                  >
                    Ver demonstração
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
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-ghost"
                  >
                    Falar no WhatsApp
                  </a>
                </div>

                <div className="hero-trust">
                  <div className="avatars" aria-hidden="true">
                    <span className="av j">Y</span>
                    <span className="av">MD</span>
                    <span className="av">CL</span>
                  </div>
                  <p className="txt">
                    <strong>Sistema validado CFM e LGPD</strong>
                    <br />
                    Clínicas com agenda cheia em 6 meses.
                  </p>
                </div>
              </div>

              {/* Painéis visuais */}
              <div className="hero-show" aria-hidden="true">
                <div className="show big">
                  <div className="head">
                    <span>Ocupação da agenda</span>
                    <span className="live">Ativo</span>
                  </div>
                  <div className="num">+73%</div>
                  <div className="chart">
                    {chartData.map((h, i) => (
                      <div
                        key={i}
                        className={`bar${i === chartData.length - 1 ? " j" : ""}`}
                        style={{ height: `${Math.round((h / 88) * 100)}%` }}
                      />
                    ))}
                  </div>
                  <div className="chart-x">
                    <span>Jan</span>
                    <span>Fev</span>
                    <span>Abr</span>
                    <span>Jun</span>
                  </div>
                  <p className="desc">Crescimento de ocupação em 6 meses</p>
                </div>

                <div className="show accent">
                  <div className="head">
                    <span>Compliance LGPD</span>
                    <span className="live">Score</span>
                  </div>
                  <div className="num">
                    98<em>/100</em>
                  </div>
                  <p className="desc">Auditoria e log imutável incluídos</p>
                </div>

                <div className="show team">
                  <div className="head">
                    <span>Módulos incluídos</span>
                  </div>
                  <div className="roles">
                    <span>Agenda</span>
                    <span>CRM</span>
                    <span>RBAC</span>
                    <span>Audit</span>
                    <span>BI</span>
                    <span>API</span>
                  </div>
                  <p className="desc" style={{ marginTop: "auto" }}>
                    Tudo num só sistema integrado
                  </p>
                </div>
              </div>
            </div>

            {/* Stats bar */}
            <div className="hero-creds">
              <span className="lbl">Resultados</span>
              <div className="stats">
                <div className="stat">
                  <span className="v">+73%</span>
                  <span className="l">Ocupação</span>
                </div>
                <div className="stat">
                  <span className="v">98/100</span>
                  <span className="l">LGPD score</span>
                </div>
                <div className="stat">
                  <span className="v">
                    0<em>h</em>
                  </span>
                  <span className="l">Fila de suporte</span>
                </div>
                <div className="stat">
                  <span className="v">
                    24<em>h</em>
                  </span>
                  <span className="l">Agenda online</span>
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
          data-section="crm-problema"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">01</span>
                <span className="name">O problema</span>
              </div>
              <h2 className="h-section">
                O que acontece sem um CRM de saúde <em>adequado?</em>
              </h2>
              <p className="anno">
                Clínicas que operam sem sistema perdem receita, exposição legal
                e a confiança dos pacientes.
              </p>
            </div>

            <div className="auth-grid">
              <div className="auth-copy">
                <p className="pull">
                  Agenda gerenciada no WhatsApp <em>não é gestão.</em> É risco
                  de receita e conformidade.
                </p>
                <p>
                  Cada falta sem aviso custa uma consulta. Cada dado sem
                  controle de acesso é uma multa LGPD esperando acontecer. Cada
                  decisão sem dashboard é chute no escuro.
                </p>
                <p>
                  <strong>
                    A Yamaji entrega o sistema, implanta e fica do seu lado no
                    primeiro mês.
                  </strong>
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-link"
                  data-label="crm-problema-whatsapp"
                >
                  Quero organizar minha clínica
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
          data-section="crm-diferenciais"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">02</span>
                <span className="name">Nossa abordagem</span>
              </div>
              <h2 className="h-section">
                Segurança, controle e <em>visibilidade de negócio.</em>
              </h2>
              <p className="anno">
                Não é só um sistema de agendamento. É gestão completa com
                conformidade legal e dados em tempo real.
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
                  Implantação assistida. Sem surpresas.
                </strong>{" "}
                A equipe da Yamaji acompanha o go-live e os primeiros 30 dias
                de operação.
              </p>
              <a
                href={DEMO_ROUTE}
                className="btn-link"
                data-label="crm-diferenciais-demo"
              >
                Ver demonstração <ArrowSvg />
              </a>
            </div>
          </div>
        </section>

        {/* ============================================================
            MÓDULOS — sec--sand
            ============================================================ */}
        <section
          id="modulos"
          className="sec sec--sand"
          data-section="crm-modulos"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">03</span>
                <span className="name">Módulos</span>
              </div>
              <h2 className="h-section">
                Tudo que sua <em>clínica precisa.</em>
              </h2>
              <p className="anno">
                Cada módulo se integra ao próximo. Comece pelo essencial e
                expanda conforme a clínica cresce.
              </p>
            </div>

            <div className="projects-grid">
              {modulos.map((m) => (
                <article key={m.title} className="project std">
                  <div className="body" style={{ padding: "var(--s-3)" }}>
                    <div className="meta">
                      <span>{m.tag}</span>
                      <span className="acc">Incluso</span>
                    </div>
                    <h4>{m.title}</h4>
                    <p className="scope">{m.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            IMPLANTAÇÃO — sec--dark
            ============================================================ */}
        <section
          id="como-funciona"
          className="sec sec--dark"
          data-section="crm-como"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">04</span>
                <span className="name">Implantação</span>
              </div>
              <h2 className="h-section">
                Do contrato ao go-live <em>sem interromper a clínica.</em>
              </h2>
              <p className="anno">
                Processo estruturado para garantir adoção rápida pela equipe e
                continuidade total do atendimento.
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
                href={DEMO_ROUTE}
                data-cta="primary"
                data-label="crm-como-demo"
                className="btn btn-wa"
              >
                Agendar demonstração
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
          data-section="crm-faq"
        >
          <div className="shell">
            <div className="sec-head">
              <div className="marker">
                <span className="num">05</span>
                <span className="name">Dúvidas</span>
              </div>
              <h2 className="h-section">
                Perguntas que toda clínica faz <em>antes de contratar.</em>
              </h2>
              <p className="anno">
                As perguntas que mais recebemos. Se ficou outra dúvida, manda
                mensagem no WhatsApp.
              </p>
            </div>

            <div className="auth-grid">
              <div className="auth-copy">
                <p className="pull">
                  Respondemos <em>rápido</em> porque conhecemos cada detalhe do
                  sistema de saúde.
                </p>
                <p>
                  Você fala com quem implantou o sistema na sua clínica. Suporte
                  humano do início ao fim.
                </p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn-link"
                  data-label="crm-faq-whatsapp"
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
        <section className="sec sec--dark" data-section="crm-cta">
          <div className="shell">
            <div className="cta-block">
              <div className="eye">
                <span className="pd" aria-hidden="true" />
                Demonstração disponível
              </div>

              <h2>
                Sua clínica com <em>agenda cheia</em>{" "}
                <span className="acc">e compliance garantido.</span>
              </h2>

              <p>
                Veja uma demonstração ao vivo e entenda como o sistema se adapta
                à sua especialidade.
              </p>

              <div className="row-btns">
                <a
                  href={DEMO_ROUTE}
                  data-cta="primary"
                  data-label="crm-cta-final"
                  className="btn btn-wa"
                >
                  Agendar demonstração
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
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-ghost"
                >
                  Falar no WhatsApp
                </a>
              </div>

              <div className="foot">
                <span>Implementação assistida</span>
                <span>Suporte incluso no primeiro mês</span>
                <span>LGPD compliance</span>
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

              <nav className="footer-col" aria-label="CRM Clínicas">
                <h5>CRM para Clínicas</h5>
                <ul>
                  <li>
                    <Link href={DEMO_ROUTE}>Demo do Sistema</Link>
                  </li>
                  <li>
                    <Link href="#modulos">Módulos</Link>
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
