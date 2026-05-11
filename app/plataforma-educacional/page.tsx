import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/site/NavBar";

export const metadata: Metadata = {
  title: "Plataforma Educacional · Yamaji Studio",
  description:
    "Sistema educacional para organizar trilhas, gerenciar alunos e operar matrículas com recorrência. Centralize aulas, progresso e comunicação em uma estrutura proprietária.",
  alternates: { canonical: "/plataforma-educacional" },
};

const whatsMsg = encodeURIComponent(
  "Olá! Vim pelo site da Yamaji Studio e quero saber mais sobre a Plataforma Educacional."
);
const WHATSAPP = `https://wa.me/5571992258349?text=${whatsMsg}`;
const DEMO_ROUTE = "/sistemas/plataforma-educacional/demo";

const pains = [
  { title: "Materiais espalhados em todo lugar", text: "Aulas no Drive, comunicados no WhatsApp, exercícios no e-mail. O aluno não sabe onde achar nada." },
  { title: "Progresso invisível", text: "Você não sabe quem acompanhou a aula, quem travou no módulo ou quem está em risco de desistir." },
  { title: "Gestão manual de turmas", text: "Matrículas em planilha, acessos dados à mão, cobranças controladas no celular. Tudo no braço." },
  { title: "Operação que não escala", text: "Funciona com 20 alunos. Com 100, vira caos. A estrutura que serviu no início bloqueia o crescimento." },
];

const solutions = [
  { n: "01", title: "Ambiente único para tudo", text: "Aulas, materiais, comunicados e exercícios em um só lugar. O aluno entra e encontra o que precisa, sem perguntar onde está." },
  { n: "02", title: "Visibilidade real da turma", text: "Painel com progresso por aluno e por turma. Você sabe quem avançou, quem travou e onde intervir antes de perder o aluno." },
  { n: "03", title: "Operação que escala", text: "Matrículas, acessos, recorrência e comunicação automatizados. De 20 para 200 alunos sem aumentar o trabalho manual." },
];

const steps = [
  { n: "01", title: "Matrícula", text: "O aluno se inscreve, paga e recebe acesso automático. Sem intervenção manual da coordenação." },
  { n: "02", title: "Acesso", text: "Ambiente organizado com trilhas por nível e módulos em sequência. O aluno sempre sabe o próximo passo." },
  { n: "03", title: "Acompanhamento", text: "Painel de progresso por turma com alertas automáticos para alunos em risco de evasão." },
  { n: "04", title: "Evolução", text: "Certificados automáticos, histórico completo e dados para você tomar decisões de conteúdo." },
];

const modulos = [
  { title: "Trilhas de aprendizagem", text: "Organize o conteúdo em módulos sequenciais por nível. O aluno avança no próprio ritmo com estrutura clara.", tag: "Conteúdo" },
  { title: "Painel de progresso", text: "Visão completa por turma e por aluno. Quem acessou, quem concluiu, quem travou em qual módulo.", tag: "Gestão" },
  { title: "Matrículas e recorrência", text: "Inscrição, pagamento recorrente e acesso automático. Sem planilha, sem processo manual.", tag: "Financeiro" },
  { title: "Comunicação institucional", text: "Avisos, atualizações e lembretes direto na plataforma. Sem depender de grupo de WhatsApp.", tag: "Comunicação" },
  { title: "Certificados automáticos", text: "Emitidos automaticamente ao concluir o curso. Personalizados com a identidade da sua escola.", tag: "Certificação" },
  { title: "Visão operacional", text: "Dashboard para a coordenação: ocupação por turma, receita recorrente e indicadores de retenção.", tag: "Analytics" },
];

const faqs = [
  { q: "A plataforma funciona para qualquer modelo de ensino?", a: "Sim. Funciona para cursos online, aulas presenciais com suporte digital, ensino híbrido e assinaturas de conteúdo. A estrutura se adapta ao modelo do seu negócio." },
  { q: "Preciso ter conhecimento técnico para usar?", a: "Não. A Yamaji configura tudo. Depois, a plataforma é intuitiva o suficiente para a coordenação usar sem depender de TI." },
  { q: "Posso migrar alunos que já tenho em outro sistema?", a: "Sim. Fazemos a migração dos dados existentes. Alunos, turmas e histórico podem ser importados sem perda de informação." },
  { q: "Em quanto tempo fica pronto?", a: "O primeiro ambiente básico fica pronto em 7 dias. Configurações mais completas com integrações levam de 2 a 4 semanas." },
  { q: "Tem limite de alunos ou turmas?", a: "Não. A plataforma foi desenhada para escalar. Você pode ter 50 ou 5.000 alunos sem trocar de sistema." },
  { q: "Qual o custo mensal?", a: "O valor varia conforme o escopo. Conversamos pelo WhatsApp, entendemos sua estrutura e apresentamos uma proposta clara." },
];

const alunosBars = [30, 38, 45, 52, 48, 60, 65, 72, 68, 80, 85, 92];

export default function PlataformaEducacionalPage() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-white">
        Ir para o conteúdo
      </a>
      <NavBar />
      <a href={WHATSAPP} target="_blank" rel="noreferrer noopener" aria-label="Falar no WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_24px_-4px_rgba(37,211,102,0.5)] transition duration-200 hover:scale-105 lg:hidden">
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
      </a>

      <main id="conteudo" className="home-v5 overflow-x-hidden pt-16 md:pt-[68px]">

        {/* HERO */}
        <section className="hero" data-section="edu-hero">
          <div className="shell">
            <div className="hero-grid">
              <div>
                <div className="hero-eye"><span className="pill-dot" aria-hidden="true" />Plataforma Educacional · Yamaji Studio</div>
                <h1>Sua escola com <em>estrutura real</em> <span className="acc">para crescer sem caos.</span></h1>
                <p className="hero-pitch">Sistema educacional para organizar trilhas, gerenciar alunos e operar matrículas com recorrência. <strong>Centralize aulas, progresso e comunicação</strong> em uma estrutura proprietária.</p>
                <div className="hero-cta">
                  <a href={WHATSAPP} target="_blank" rel="noreferrer noopener" data-cta="primary" data-label="edu-hero-whatsapp" className="btn btn-wa">
                    Quero conhecer a plataforma
                    <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                  <Link href={DEMO_ROUTE} className="btn btn-ghost">Ver demo</Link>
                </div>
                <div className="hero-trust">
                  <div className="avatars" aria-hidden="true"><span className="av j">Y</span><span className="av">ED</span><span className="av">SY</span></div>
                  <p className="txt"><strong>Sistema proprietário</strong><br />Configurado para a sua estrutura</p>
                </div>
              </div>
              <div className="hero-show" aria-hidden="true">
                <div className="show big">
                  <div className="head"><span>Alunos ativos / 12 meses</span><span className="live">Crescendo</span></div>
                  <div className="num">+207%</div>
                  <div className="chart">
                    {alunosBars.map((h, i) => (
                      <div key={i} className={`bar${i === alunosBars.length - 1 ? " j" : ""}`} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="chart-x"><span>Jan</span><span>Abr</span><span>Jul</span><span>Out</span></div>
                  <p className="desc">Crescimento de alunos ativos na plataforma</p>
                </div>
                <div className="show accent">
                  <div className="head"><span>Matrículas</span><span className="live">Automáticas</span></div>
                  <div className="num">47<em>este mês</em></div>
                  <p className="desc">Sem intervenção manual da coordenação</p>
                </div>
                <div className="show team">
                  <div className="head"><span>Módulos da plataforma</span></div>
                  <div className="roles"><span>Aulas</span><span>Trilhas</span><span>Painel</span><span>Matrículas</span><span>Certificados</span><span>Analytics</span></div>
                  <p className="desc" style={{ marginTop: "auto" }}>Tudo em um ambiente só</p>
                </div>
              </div>
            </div>
            <div className="hero-creds">
              <span className="lbl">Plataforma</span>
              <div className="stats">
                <div className="stat"><span className="v">7<em>d</em></span><span className="l">Para o primeiro ambiente</span></div>
                <div className="stat"><span className="v">∞</span><span className="l">Alunos e turmas</span></div>
                <div className="stat"><span className="v">100<em>%</em></span><span className="l">Self-service</span></div>
                <div className="stat"><span className="v">100<em>%</em></span><span className="l">Suporte humano</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section id="problema" className="sec sec--light" data-section="edu-problema">
          <div className="shell">
            <div className="sec-head">
              <div className="marker"><span className="num">01</span><span className="name">O problema</span></div>
              <h2 className="h-section">Conteúdo cresce. <em>A operação perde controle.</em></h2>
              <p className="anno">Sem arquitetura educacional, turmas e acompanhamento ficam fragmentados. O que funciona com 20 alunos trava com 100.</p>
            </div>
            <div className="auth-grid">
              <div className="auth-copy">
                <p className="pull">Ferramenta boa não é aquela que funciona no início. É a que acompanha o crescimento. <em>A Yamaji entrega estrutura que escala.</em></p>
                <p>Uma plataforma proprietária centraliza conteúdo, dá visibilidade do progresso e automatiza a operação para a coordenação focar no que importa: o aluno.</p>
              </div>
              <div className="pain-grid">
                {pains.map((p) => (
                  <article key={p.title} className="pain-card">
                    <span className="pain-x" aria-hidden="true">✕</span>
                    <h4>{p.title}</h4>
                    <p>{p.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="diferenciais" className="sec sec--graphite" data-section="edu-diferenciais">
          <div className="shell">
            <div className="sec-head">
              <div className="marker"><span className="num">02</span><span className="name">O que entrega</span></div>
              <h2 className="h-section">Uma plataforma para centralizar <em>aprendizado, progresso e controle.</em></h2>
              <p className="anno">Não é mais um LMS genérico. É uma estrutura construída para o seu modelo de ensino.</p>
            </div>
            <div className="value-grid">
              {solutions.map((s) => (
                <article key={s.n} className="value-card">
                  <span className="n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
            <p className="guarantee" style={{ marginTop: "3rem" }}>✓ Migração de dados inclusa. Setup em até 7 dias. Suporte humano contínuo.</p>
          </div>
        </section>

        {/* MÓDULOS */}
        <section id="modulos" className="sec sec--sand" data-section="edu-modulos">
          <div className="shell">
            <div className="sec-head">
              <div className="marker"><span className="num">03</span><span className="name">Funcionalidades</span></div>
              <h2 className="h-section">Tudo que sua escola precisa <em>em um ambiente só.</em></h2>
              <p className="anno">Cada módulo resolve uma parte real da operação educacional. Sem funcionalidade genérica que você nunca vai usar.</p>
            </div>
            <div className="svc-grid">
              {modulos.map((m) => (
                <article key={m.title} className="svc-card">
                  <span style={{ display:"inline-block", marginBottom:"0.75rem", padding:"0.2rem 0.65rem", borderRadius:"99px", border:"1px solid var(--acc)", color:"var(--acc)", fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>{m.tag}</span>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section id="fluxo" className="sec sec--dark" data-section="edu-fluxo">
          <div className="shell">
            <div className="sec-head">
              <div className="marker"><span className="num">04</span><span className="name">Como funciona</span></div>
              <h2 className="h-section">Uma operação educacional <em>simples de acompanhar e pronta para escala.</em></h2>
              <p className="anno">Etapas conectadas para garantir experiência consistente para o aluno e controle real para a coordenação.</p>
            </div>
            <div className="proc-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
              {steps.map((s) => (
                <article key={s.n} className="proc-card">
                  <span className="proc-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="sec sec--graphite" data-section="edu-faq">
          <div className="shell">
            <div className="auth-grid">
              <div className="auth-copy">
                <p className="eyebrow">Dúvidas</p>
                <h2 className="h-section">Perguntas sobre a <em>plataforma educacional.</em></h2>
                <p className="anno">O que as pessoas costumam perguntar antes de agendar uma apresentação.</p>
                <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", marginTop:"2rem" }}>
                  <a href={WHATSAPP} target="_blank" rel="noreferrer noopener" data-cta="primary" data-label="edu-faq-whatsapp" className="btn-primary">Falar com a equipe</a>
                  <Link href={DEMO_ROUTE} className="btn-secondary">Ver demo</Link>
                </div>
              </div>
              <div className="faq-list">
                {faqs.map((faq, i) => (
                  <details key={faq.q} className="faq-item" open={i === 0 ? true : undefined}>
                    <summary>{faq.q}<span className="faq-icon" aria-hidden="true">+</span></summary>
                    <div className="faq-body"><p>{faq.a}</p></div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="cta" className="sec sec--dark" data-section="edu-cta">
          <div className="shell">
            <div className="cta-block">
              <p className="eyebrow">Quer ver funcionando na prática?</p>
              <h2 className="h-cta">Sua escola com estrutura que <em>acompanha o crescimento.</em></h2>
              <p className="anno">Agende uma apresentação personalizada ou explore a demonstração completa da plataforma.</p>
              <div className="row-btns">
                <a href={WHATSAPP} target="_blank" rel="noreferrer noopener" data-cta="primary" data-label="edu-cta-final" className="btn-primary">Agendar apresentação</a>
                <Link href={DEMO_ROUTE} className="btn-secondary">Ver demo</Link>
              </div>
              <p className="cta-foot">Setup em menos de 7 dias · Migração inclusa · Suporte humano</p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="shell">
            <div className="footer-grid">
              <div className="footer-brand">
                <Link href="/"><span className="bmark" aria-hidden="true">Y</span>Yamaji Studio</Link>
                <p>Equipe de design, tecnologia e marketing para negócios que querem crescer com estrutura real e suporte humano.</p>
              </div>
              <nav className="footer-col" aria-label="Serviços">
                <h5>Serviços</h5>
                <ul>
                  <li><Link href="/sites-landing-pages">Sites & Landing Pages</Link></li>
                  <li><Link href="/e-commerce">E-commerce</Link></li>
                  <li><Link href="/social-marketing">Social Media</Link></li>
                  <li><Link href="/automacao-ia">IA & Automação</Link></li>
                  <li><Link href="/crm-clinicas">CRM</Link></li>
                  <li><Link href="/plataforma-educacional">Plataforma Educacional</Link></li>
                </ul>
              </nav>
              <nav className="footer-col" aria-label="Plataforma">
                <h5>Plataforma Educacional</h5>
                <ul>
                  <li><Link href="/plataforma-educacional">Trilhas de aprendizagem</Link></li>
                  <li><Link href="/plataforma-educacional">Painel de progresso</Link></li>
                  <li><Link href="/plataforma-educacional">Matrículas e recorrência</Link></li>
                  <li><Link href={DEMO_ROUTE}>Ver demonstração</Link></li>
                </ul>
              </nav>
              <div className="footer-col">
                <h5>Contato</h5>
                <ul>
                  <li><a href={WHATSAPP} target="_blank" rel="noreferrer noopener">WhatsApp</a></li>
                  <li><a href="mailto:oi@yamajistudio.com.br">E-mail</a></li>
                  <li><Link href="/">Página inicial</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© 2025 Yamaji Studio. Todos os direitos reservados.</span>
              <span>Salvador, Bahia — Brasil</span>
            </div>
          </div>
          <div className="footer-mark" aria-hidden="true">Yamaji</div>
        </footer>
      </main>
    </>
  );
}
