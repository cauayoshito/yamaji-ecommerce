import NavBar from "@/components/site/NavBar";
export const metadata = { title: "CRM para Clínicas | Yamaji Digital", description: "Gestão completa de agenda, prontuário e relacionamento para clínicas e consultórios. LGPD, RBAC e auditoria incluídos." };
const DEMO_ROUTE = "/crm-clinicas/demo";
const WA = encodeURIComponent("Olá! Quero conhecer o CRM para Clínicas da Yamaji Digital.");
const WA_URL = `https://wa.me/5511999999999?text=${WA}`;
const tagStyle = { display:"inline-block", background:"rgba(255,255,255,0.15)", borderRadius:6, padding:"2px 10px", fontSize:13, marginRight:6, marginBottom:4 };
const PAINS = [
  { t:"Agenda com buracos e faltas sem aviso", d:"Confirmações manuais pelo WhatsApp não escalam. Cada falta é receita perdida e tempo desperdiçado." },
  { t:"Prontuário em papel ou planilha solta", d:"Histórico espalhado em cadernos e arquivos impossibilita um atendimento de qualidade e aumenta risco de erro." },
  { t:"LGPD e compliance ignorados", d:"Dados de pacientes sem controle de acesso, sem log de auditoria e sem consentimento expõem a clínica a multas sérias." },
  { t:"Nenhuma visão do negócio em tempo real", d:"Sem dashboard de ocupação, inadimplência e NPS você toma decisões no escuro e perde oportunidades de crescimento." },
];
const SOLUTIONS = [
  { n:"01", t:"Controle de acesso por perfil (RBAC)", d:"Cada colaborador acessa só o que precisa: recepcionista vê agenda, médico vê prontuário, gestor vê tudo." },
  { n:"02", t:"Auditoria completa", d:"Log imutável de quem acessou, editou ou exportou qualquer dado — conformidade LGPD de ponta a ponta." },
  { n:"03", t:"Dashboard de gestão", d:"Ocupação da agenda, receita, inadimplência e NPS em tempo real. Decisões baseadas em dados, não em intuição." },
];
const MODULOS = [
  { tag:"Agenda", t:"Agendamento online e confirmação automática", d:"Link público para o paciente agendar e lembretes automáticos por WhatsApp." },
  { tag:"CRM", t:"Histórico completo do paciente", d:"Prontuário, anamnese, documentos e linha do tempo de atendimentos num só lugar." },
  { tag:"RBAC", t:"Perfis de acesso granulares", d:"Permissões por papel: recepção, clínico, especialista, gestor e TI." },
  { tag:"Audit", t:"Log de auditoria imutável", d:"Registro de todas as ações com timestamp, IP e usuário para compliance LGPD." },
  { tag:"BI", t:"Painel de gestão em tempo real", d:"KPIs de ocupação, receita, faltas, NPS e satisfação atualizados ao minuto." },
  { tag:"API", t:"Integrações via API", d:"Conecte com seu sistema de faturamento, convênios e ferramentas já utilizadas." },
];
const STEPS = [
  { n:"01", t:"Levantamento", d:"Mapeamos fluxos atuais, perfis de usuário e integrações necessárias." },
  { n:"02", t:"Configuração", d:"Parametrizamos agenda, prontuário, RBAC e relatórios conforme sua especialidade." },
  { n:"03", t:"Migração de dados", d:"Importamos histórico existente com validação de integridade e backup." },
  { n:"04", t:"Treinamento &amp; go-live", d:"Capacitamos a equipe e acompanhamos os primeiros 30 dias de operação." },
];
const FAQS = [
  { q:"O sistema é validado para uso em saúde?", a:"Sim. Seguimos as diretrizes do CFM para prontuário eletrônico e a LGPD para dados sensíveis de saúde." },
  { q:"Quantos usuários posso ter?", a:"Ilimitados. Cada usuário tem perfil próprio com permissões definidas pelo gestor da clínica." },
  { q:"Posso migrar meu histórico atual?", a:"Sim. Realizamos a importação de planilhas, sistemas legados e até prontuários em papel (digitalização inclusa no plano completo)." },
  { q:"E se o paciente cancelar pelo link?", a:"O slot é liberado automaticamente e você pode configurar oferta imediata para lista de espera." },
  { q:"Tem app mobile para os médicos?", a:"Sim, PWA responsivo acessível de qualquer dispositivo sem instalação." },
  { q:"Como funciona o suporte?", a:"Suporte via WhatsApp e e-mail em horário comercial, com SLA de 4h para incidentes críticos." },
];
export default function CrmClinicas() {
  return (
    <div className="home-v5">
      <NavBar />
      {/* HERO */}
      <section className="sec sec--dark">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="badge-pill">CRM para Clínicas</span>
            <h1>Agenda cheia, prontuário organizado e <em>compliance total</em></h1>
            <p className="hero-sub">Gestão completa para clínicas e consultórios: agendamento, CRM, RBAC e auditoria LGPD num só sistema.</p>
            <div className="row-btns">
              <a href={DEMO_ROUTE} className="btn btn--primary">Ver demonstração</a>
              <a href={WA_URL} target="_blank" rel="noopener" className="btn btn--ghost">Falar no WhatsApp</a>
            </div>
          </div>
          <div className="hero-show">
            <div className="show big">
              <p className="show-label">Ocupação da agenda</p>
              <div style={{display:"flex",alignItems:"flex-end",gap:6,margin:"12px 0"}}>
                {[45,55,60,65,72,80,88].map((h,i)=>(
                  <div key={i} style={{flex:1,height:h*1.2,background:i===6?"#7c3aed":"rgba(124,58,237,0.35)",borderRadius:"4px 4px 0 0"}} />
                ))}
              </div>
              <p className="show-metric">+73% <span>em 6 meses</span></p>
            </div>
            <div className="show accent">
              <p className="show-label">Compliance LGPD</p>
              <p className="show-big">98/100</p>
              <p className="show-sub">score de conformidade</p>
            </div>
            <div className="show team">
              <p className="show-label">Módulos incluídos</p>
              <div>
                {["Agenda","CRM","RBAC","Audit","BI","API"].map(t=>(
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
            <h2>O que acontece sem um CRM de saúde adequado</h2>
            <p>Clínicas que operam sem sistema perdem receita, exposição legal e a confiança dos pacientes.</p>
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
          <h2>Segurança, controle e visibilidade de negócio</h2>
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
      {/* MODULOS */}
      <section className="sec sec--sand">
        <div className="container">
          <p className="section-eyebrow">Módulos</p>
          <h2>Tudo que sua clínica precisa</h2>
          <div className="svc-grid">
            {MODULOS.map(m=>(
              <div key={m.t} className="svc-card">
                <span className="svc-tag">{m.tag}</span>
                <h3>{m.t}</h3>
                <p>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PROCESS */}
      <section className="sec sec--light">
        <div className="auth-grid">
          <div className="auth-copy">
            <p className="section-eyebrow">Implantação</p>
            <h2>Do contrato ao go-live sem interromper a clínica</h2>
            <p>Processo estruturado para garantir adoção rápida pela equipe e continuidade total do atendimento.</p>
          </div>
          <div className="proc-grid" style={{gridTemplateColumns:"repeat(2,1fr)"}}>
            {STEPS.map(s=>(
              <div key={s.n} className="proc-card">
                <span className="proc-num">{s.n}</span>
                <h3 dangerouslySetInnerHTML={{__html:s.t}} />
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
            <h2>Perguntas que toda clínica faz antes de contratar</h2>
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
          <h2 className="h-cta">Sua clínica com <em>agenda cheia</em> e compliance garantido</h2>
          <p className="cta-sub">Veja uma demonstração ao vivo e entenda como o sistema se adapta à sua especialidade.</p>
          <div className="row-btns">
            <a href={DEMO_ROUTE} className="btn btn--primary">Agendar demonstração</a>
            <a href={WA_URL} target="_blank" rel="noopener" className="btn btn--ghost">Falar no WhatsApp</a>
          </div>
          <p className="cta-foot">Implementação assistida. Suporte incluso no primeiro mês.</p>
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
