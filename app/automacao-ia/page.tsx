import NavBar from "@/components/site/NavBar";
export const metadata = { title: "Automação com IA | Yamaji Digital", description: "Atenda, qualifique e venda 24h por dia com automações inteligentes e IA aplicada ao seu negócio." };
const WA = encodeURIComponent("Olá! Quero saber mais sobre Automação com IA para o meu negócio.");
const WA_URL = `https://wa.me/5511999999999?text=${WA}`;
const tagStyle = { display:"inline-block", background:"rgba(255,255,255,0.15)", borderRadius:6, padding:"2px 10px", fontSize:13, marginRight:6, marginBottom:4 };
const PAINS = [
  { t:"Atendimento lento e caro", d:"Equipe sobrecarregada respondendo sempre as mesmas perguntas e perdendo leads por demora." },
  { t:"Processos manuais que travam o crescimento", d:"Fluxos de aprovação, cobranças e follow-ups feitos no braço consomem tempo que poderia ir para o cliente." },
  { t:"Dados dispersos, decisões no escuro", d:"Sem integração entre canais você não sabe de onde vem o lead nem o que ele fez antes de comprar." },
  { t:"Escalabilidade impossível sem contratar", d:"Para dobrar o volume de atendimento hoje você precisaria dobrar a equipe. Com IA, não." },
];
const SOLUTIONS = [
  { n:"01", t:"Atendimento automático multicanal", d:"Bot com IA real no WhatsApp, Instagram e e-mail: qualifica leads, responde dúvidas e agenda — sem humano no loop." },
  { n:"02", t:"Fluxos internos inteligentes", d:"Aprovações, cobranças recorrentes, notificações e relatórios disparados automaticamente no momento certo." },
  { n:"03", t:"Escala sem contratar", d:"Volume 10× maior de interações sem aumentar headcount — IA assume o que é repetitivo, time foca no estratégico." },
];
const SOLUCOES = [
  { tag:"Atendimento", t:"Bot IA para WhatsApp e Instagram", d:"Responde, qualifica e transfere para humano só quando precisa." },
  { tag:"Automação", t:"Fluxos de cobrança e follow-up", d:"Régua automática de mensagens por status do cliente." },
  { tag:"Integração", t:"CRM + calendário + planilha", d:"Dados sincronizados entre ferramentas sem digitação manual." },
  { tag:"Interno", t:"Aprovações e notificações", d:"Fluxos internos que rodam sozinhos e notificam quem precisa." },
  { tag:"BI", t:"Dashboard em tempo real", d:"Métricas de atendimento, conversão e SLA num só painel." },
  { tag:"Treinamento", t:"Onboarding da equipe", d:"Documentação e capacitação para sua equipe operar os fluxos." },
];
const STEPS = [
  { n:"01", t:"Diagnóstico", d:"Mapeamos seus canais, volumes e gargalos atuais." },
  { n:"02", t:"Configuração", d:"Construímos os fluxos e treinamos o modelo no seu contexto." },
  { n:"03", t:"Go-live", d:"Ativamos em ambiente de testes, ajustamos e publicamos." },
  { n:"04", t:"Ajuste contínuo", d:"Monitoramento de métricas e melhoria iterativa mês a mês." },
];
const FAQS = [
  { q:"Preciso saber programar?", a:"Não. Entregamos tudo configurado e documentado. Sua equipe só opera a interface." },
  { q:"Quanto tempo para ir ao ar?", a:"Entre 2 e 4 semanas dependendo da complexidade dos fluxos." },
  { q:"O bot parece robótico?", a:"Usamos LLMs de última geração. As respostas são naturais e adaptadas ao tom da sua marca." },
  { q:"E se o cliente quiser falar com humano?", a:"Há gatilho de transferência inteligente: o bot passa o contexto completo para o atendente." },
  { q:"Funciona com meu sistema atual?", a:"Integramos via API com a maioria dos CRMs, ERPs e plataformas de e-commerce do mercado." },
  { q:"Qual é o custo de manutenção?", a:"Planos mensais de suporte e melhoria contínua disponíveis após o go-live." },
];
export default function AutomacaoIA() {
  return (
    <div className="home-v5">
      <NavBar />
      {/* HERO */}
      <section className="sec sec--dark">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="badge-pill">Automação &amp; IA</span>
            <h1>Seu negócio atendendo, qualificando e vendendo <em>24h por dia</em></h1>
            <p className="hero-sub">Automatize WhatsApp, e-mail e processos internos com IA real — sem contratar mais, sem perder leads.</p>
            <div className="row-btns">
              <a href={WA_URL} target="_blank" rel="noopener" className="btn btn--primary">Quero automatizar agora</a>
              <a href="#solucoes" className="btn btn--ghost">Ver soluções</a>
            </div>
          </div>
          <div className="hero-show">
            <div className="show big">
              <p className="show-label">Atendimentos automáticos</p>
              <div style={{display:"flex",alignItems:"flex-end",gap:6,margin:"12px 0"}}>
                {[40,52,61,70,80,95,100].map((h,i)=>(
                  <div key={i} style={{flex:1,height:h*1.1,background:i===6?"#7c3aed":"rgba(124,58,237,0.35)",borderRadius:"4px 4px 0 0"}} />
                ))}
              </div>
              <p className="show-metric">+171% <span>em 90 dias</span></p>
            </div>
            <div className="show accent">
              <p className="show-label">Disponibilidade</p>
              <p className="show-big">24h/dia</p>
              <p className="show-sub">7 dias por semana</p>
            </div>
            <div className="show team">
              <p className="show-label">Canais integrados</p>
              <div>
                {["WhatsApp","Instagram","E-mail","Agenda","Cobrança","Notif"].map(t=>(
                  <span key={t} style={tagStyle}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* PAINS */}
      <section className="sec sec--light">
        <div className="auth-grid">
          <div className="auth-copy">
            <p className="section-eyebrow">O problema</p>
            <h2>Por que o crescimento trava sem automação</h2>
            <p>Cada processo manual custa tempo, dinheiro e oportunidades. E o concorrente que automatizou já saiu na frente.</p>
          </div>
          <div className="pain-grid">
            {PAINS.map(p=>(
              <div key={p.t} className="pain-card">
                <span className="pain-icon">✕</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SOLUTIONS */}
      <section className="sec sec--graphite">
        <div className="container">
          <p className="section-eyebrow">Nossa abordagem</p>
          <h2>Automação que realmente funciona</h2>
          <div className="value-grid">
            {SOLUTIONS.map(s=>(
              <div key={s.n} className="value-card">
                <span className="value-num">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SOLUCOES */}
      <section id="solucoes" className="sec sec--sand">
        <div className="container">
          <p className="section-eyebrow">Soluções</p>
          <h2>O que entregamos</h2>
          <div className="svc-grid">
            {SOLUCOES.map(s=>(
              <div key={s.t} className="svc-card">
                <span className="svc-tag">{s.tag}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PROCESS */}
      <section className="sec sec--light">
        <div className="auth-grid">
          <div className="auth-copy">
            <p className="section-eyebrow">Como funciona</p>
            <h2>Do diagnóstico ao go-live em até 4 semanas</h2>
            <p>Um processo estruturado para garantir que cada automação seja relevante, testada e documentada.</p>
          </div>
          <div className="proc-grid" style={{gridTemplateColumns:"repeat(2,1fr)"}}>
            {STEPS.map(s=>(
              <div key={s.n} className="proc-card">
                <span className="proc-num">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="sec sec--graphite">
        <div className="auth-grid">
          <div className="auth-copy">
            <p className="section-eyebrow">Dúvidas frequentes</p>
            <h2>Tudo que você precisa saber antes de automatizar</h2>
          </div>
          <div className="faq-list">
            {FAQS.map((f,i)=>(
              <details key={f.q} className="faq-item" open={i===0}>
                <summary><span>{f.q}</span><span className="faq-icon">▾</span></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="sec sec--dark">
        <div className="cta-block">
          <h2 className="h-cta">Seu negócio pronto para atender, qualificar e vender <em>24h por dia</em></h2>
          <p className="cta-sub">Comece com um diagnóstico gratuito e veja onde a automação gera mais resultado para você.</p>
          <div className="row-btns">
            <a href={WA_URL} target="_blank" rel="noopener" className="btn btn--primary">Falar com especialista</a>
          </div>
          <p className="cta-foot">Sem fidelidade. Sem setup oculto. Resultado mensurável.</p>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo">Yamaji<em>.</em></span>
            <p>Estratégia digital orientada a resultado.</p>
            <a href={WA_URL} target="_blank" rel="noopener" className="btn btn--primary" style={{marginTop:16}}>Falar no WhatsApp</a>
          </div>
          <div className="footer-col">
            <p className="footer-heading">Serviços</p>
            <a href="/e-commerce">E-commerce</a>
            <a href="/sites-landing-pages">Sites &amp; Landing Pages</a>
            <a href="/social-marketing">Social &amp; Marketing</a>
            <a href="/automacao-ia">Automação com IA</a>
            <a href="/plataforma-educacional">Plataforma Educacional</a>
            <a href="/crm-clinicas">CRM para Clínicas</a>
          </div>
          <div className="footer-col">
            <p className="footer-heading">Empresa</p>
            <a href="/sobre">Sobre</a>
            <a href="/cases">Cases</a>
            <a href="/blog">Blog</a>
            <a href="/contato">Contato</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} Yamaji Digital. Todos os direitos reservados.</p>
          <div className="footer-mark">Yamaji</div>
        </div>
      </footer>
      {/* WHATSAPP FAB */}
      <a href={WA_URL} target="_blank" rel="noopener" className="whatsapp-fab lg:hidden" aria-label="WhatsApp">
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#25D366"/><path d="M23.5 8.5A10.44 10.44 0 0 0 16 5.5C10.2 5.5 5.5 10.2 5.5 16c0 1.86.49 3.67 1.42 5.27L5.5 26.5l5.37-1.41A10.44 10.44 0 0 0 16 26.5c5.8 0 10.5-4.7 10.5-10.5 0-2.8-1.09-5.43-3-7.5zm-7.5 16.15a8.66 8.66 0 0 1-4.42-1.21l-.32-.19-3.19.84.85-3.1-.2-.32A8.68 8.68 0 1 1 16 24.65zm4.77-6.5c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.66.85-.81 1.02-.15.17-.3.19-.56.06a7.1 7.1 0 0 1-2.09-1.29 7.8 7.8 0 0 1-1.45-1.8c-.15-.26 0-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.5-.43-.43-.58-.44h-.5c-.17 0-.45.06-.69.32-.24.26-.9.88-.9 2.14s.92 2.48 1.05 2.65c.13.17 1.81 2.76 4.38 3.87.61.26 1.09.42 1.46.54.61.19 1.17.17 1.61.1.49-.07 1.54-.63 1.76-1.24.22-.6.22-1.12.15-1.23-.06-.11-.24-.17-.5-.3z" fill="#fff"/></svg>
      </a>
    </div>
  );
}
