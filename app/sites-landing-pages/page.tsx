import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/site/NavBar";

export const metadata: Metadata = {
  title: "Sites e Landing Pages · Yamaji Studio",
  description: "Site institucional, landing page de venda ou página de captação. Design premium, SEO técnico, performance real e suporte humano. Do briefing ao go-live em até 15 dias.",
  alternates: { canonical: "/sites-landing-pages" },
};

const WHATSAPP = `https://wa.me/5571992258349?text=${encodeURIComponent("Olá! Vim pelo site da Yamaji Studio e quero saber mais sobre criação de site ou landing page.")}`;

const pains = [
  { title: "Site que ninguém encontra", text: "Sem estrutura de SEO, o Google não ranqueia. Você investe no site mas não aparece nas buscas." },
  { title: "Visual genérico demais", text: "Template de Wix ou Hostinger que qualquer concorrente usa. Seu negócio merece identidade própria." },
  { title: "Carrega devagar", text: "Site pesado afasta visitante antes de ver sua oferta. Google também penaliza páginas lentas." },
  { title: "Não converte", text: "Tem visita mas não tem contato. Falta CTA, prova social e fluxo de conversão pensado para vender." },
];
const solutions = [
  { n: "01", title: "SEO técnico desde o início", text: "Headings, meta tags, sitemap, velocidade e schema configurados antes do go-live. Google encontra do primeiro dia." },
  { n: "02", title: "Performance acima de 90", text: "Score real no PageSpeed. Carrega em menos de 2s em qualquer conexão. Nada de imagem gigante ou script desnecessário." },
  { n: "03", title: "Design para converter", text: "Cada seção tem um propósito: apresentar, provar e direcionar. Layout com identidade da sua marca, não de template pronto." },
];
const steps = [
  { n: "01", title: "Briefing", text: "Entendemos o negócio, público, concorrentes e objetivo principal da página." },
  { n: "02", title: "Design", text: "Criamos o layout com identidade visual da sua marca. Você aprova antes do desenvolvimento." },
  { n: "03", title: "Desenvolvimento", text: "Construímos com Next.js. Performance, SEO e responsividade nativos, sem plugin que pesa." },
  { n: "04", title: "Go-live", text: "Publicamos, configuramos domínio, HTTPS e Analytics. Você acompanha tudo funcionando." },
];
const tipos = [
  { title: "Site Institucional", text: "Presença profissional no Google. Apresenta sua empresa, serviços e facilita o contato.", tag: "Mais procurado" },
  { title: "Landing Page de Venda", text: "Página focada em um único produto ou oferta. Ideal para campanhas pagas e lançamentos.", tag: null },
  { title: "Página de Captação", text: "Formulário + proposta de valor para capturar leads qualificados antes de fechar.", tag: null },
  { title: "Site com CMS", text: "Você atualiza textos e fotos sem programador. Autonomia total no conteúdo.", tag: null },
  { title: "Landing Page de Evento", text: "Página de inscrição para cursos, palestras e lançamentos com prazo definido.", tag: null },
  { title: "Página de Portfólio", text: "Mostre seu trabalho com visual que diferencia. Para criativos, agências e freelancers.", tag: null },
];
const faqs = [
  { q: "Em quanto tempo fica pronto?", a: "Sites institucionais ficam prontos em 7 a 10 dias úteis. Landing pages em até 5 dias. Projetos com CMS ou integrações levam de 15 a 20 dias." },
  { q: "Preciso ter domínio e hospedagem antes?", a: "Não. A Yamaji cuida de todo o processo técnico. Você só precisa decidir o nome do domínio." },
  { q: "Consigo atualizar o site depois?", a: "Depende do escopo. Projetos com CMS permitem atualizar conteúdo sem programador. Ajustes menores entram no suporte padrão via WhatsApp." },
  { q: "O site aparece no Google?", a: "Fazemos toda a configuração técnica de SEO. O ranqueamento orgânico depende do tempo, conteúdo e concorrência, mas a base técnica estará correta desde o primeiro dia." },
  { q: "Posso pedir ajustes depois de pronto?", a: "Sim. O primeiro mês pós-entrega inclui suporte para ajustes de conteúdo sem custo extra." },
  { q: "Qual o investimento?", a: "Varia conforme escopo e complexidade. Conversamos pelo WhatsApp, entendemos sua necessidade e apresentamos uma proposta clara, sem surpresa." },
];
const perfScores = [72, 78, 80, 84, 89, 92, 95, 97, 98, 100];
const WA = <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>;

const tagStyle = { display:"inline-block", marginBottom:"0.75rem", padding:"0.2rem 0.65rem", borderRadius:"99px", border:"1px solid var(--acc)", color:"var(--acc)", fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" as const };

export default function SitesLandingPagesPage() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-white">Ir para o conteúdo</a>
      <NavBar />
      <a href={WHATSAPP} target="_blank" rel="noreferrer noopener" aria-label="Falar no WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_24px_-4px_rgba(37,211,102,0.5)] transition duration-200 hover:scale-105 lg:hidden">{WA}</a>
      <main id="conteudo" className="home-v5 overflow-x-hidden pt-16 md:pt-[68px]">

        <section className="hero" data-section="sites-hero">
          <div className="shell">
            <div className="hero-grid">
              <div>
                <div className="hero-eye"><span className="pill-dot" aria-hidden="true" />Sites e Landing Pages · Salvador, BA</div>
                <h1>Sua empresa no Google <em>em até 15 dias.</em> <span className="acc">Com visual que vende.</span></h1>
                <p className="hero-pitch">Site institucional, landing page ou página de captação. <strong>SEO técnico, performance real</strong> e design com identidade da sua marca, do briefing ao go-live.</p>
                <div className="hero-cta">
                  <a href={WHATSAPP} target="_blank" rel="noreferrer noopener" data-cta="primary" data-label="sites-hero-whatsapp" className="btn btn-wa">Quero meu site <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
                  <Link href="/" className="btn btn-ghost">Ver outros serviços</Link>
                </div>
                <div className="hero-trust">
                  <div className="avatars" aria-hidden="true"><span className="av j">Y</span><span className="av">UX</span><span className="av">DS</span></div>
                  <p className="txt"><strong>Design + desenvolvimento</strong><br />Não é template. É o seu jeito</p>
                </div>
              </div>
              <div className="hero-show" aria-hidden="true">
                <div className="show big">
                  <div className="head"><span>PageSpeed Score</span><span className="live">Produção</span></div>
                  <div className="num">100</div>
                  <div className="chart">{perfScores.map((h, i) => <div key={i} className={`bar${i === perfScores.length - 1 ? " j" : ""}`} style={{ height: `${h}%` }} />)}</div>
                  <div className="chart-x"><span>Perf</span><span>SEO</span><span>A11y</span><span>Best</span></div>
                  <p className="desc">Score Lighthouse, projeto institucional</p>
                </div>
                <div className="show accent">
                  <div className="head"><span>Indexação</span><span className="live">Ativa</span></div>
                  <div className="num">#1<em>posição</em></div>
                  <p className="desc">Ranqueado em palavra-chave do nicho</p>
                </div>
                <div className="show team">
                  <div className="head"><span>Incluso em todo projeto</span></div>
                  <div className="roles"><span>SEO</span><span>Mobile</span><span>HTTPS</span><span>Next.js</span><span>Analytics</span><span>Suporte</span></div>
                  <p className="desc" style={{ marginTop:"auto" }}>Hospedagem e domínio configurados</p>
                </div>
              </div>
            </div>
            <div className="hero-creds">
              <span className="lbl">Sites</span>
              <div className="stats">
                <div className="stat"><span className="v">7<em>d</em></span><span className="l">Para o primeiro go-live</span></div>
                <div className="stat"><span className="v">100</span><span className="l">Score PageSpeed</span></div>
                <div className="stat"><span className="v">SEO</span><span className="l">Técnico incluso</span></div>
                <div className="stat"><span className="v">100<em>%</em></span><span className="l">Mobile-first</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="problema" className="sec sec--light" data-section="sites-problema">
          <div className="shell">
            <div className="sec-head">
              <div className="marker"><span className="num">01</span><span className="name">O problema</span></div>
              <h2 className="h-section">Ter um site não é suficiente. <em>O site precisa trabalhar por você.</em></h2>
              <p className="anno">A maioria dos sites de pequenos negócios não aparece no Google, carrega devagar e não converte visitante em cliente.</p>
            </div>
            <div className="auth-grid">
              <div className="auth-copy">
                <p className="pull">Site bonito que ninguém encontra é cartão de visita guardado na gaveta. <em>A Yamaji entrega estrutura, não só visual.</em></p>
                <p>Cada projeto começa com SEO técnico configurado, performance validada e layout desenhado para transformar visita em contato.</p>
              </div>
              <div className="pain-grid">
                {pains.map((p) => <article key={p.title} className="pain-card"><span className="pain-x" aria-hidden="true">✕</span><h4>{p.title}</h4><p>{p.text}</p></article>)}
              </div>
            </div>
          </div>
        </section>

        <section id="diferenciais" className="sec sec--graphite" data-section="sites-diferenciais">
          <div className="shell">
            <div className="sec-head">
              <div className="marker"><span className="num">02</span><span className="name">Por que Yamaji</span></div>
              <h2 className="h-section">O que diferencia um site da Yamaji <em>de um template pronto.</em></h2>
              <p className="anno">Não entregamos apenas código. Entregamos estrutura digital que trabalha pelo seu negócio.</p>
            </div>
            <div className="value-grid">
              {solutions.map((s) => <article key={s.n} className="value-card"><span className="n">{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}
            </div>
            <p className="guarantee" style={{ marginTop:"3rem" }}>✓ Prazo claro antes de começar. Proposta sem surpresa. Suporte humano direto no WhatsApp.</p>
          </div>
        </section>

        <section id="tipos" className="sec sec--sand" data-section="sites-tipos">
          <div className="shell">
            <div className="sec-head">
              <div className="marker"><span className="num">03</span><span className="name">Formatos</span></div>
              <h2 className="h-section">Escolha o formato ideal <em>para o seu momento.</em></h2>
              <p className="anno">Cada negócio tem uma necessidade diferente. A Yamaji indica o melhor ponto de partida.</p>
            </div>
            <div className="svc-grid">
              {tipos.map((t) => (
                <article key={t.title} className="svc-card">
                  {t.tag && <span style={tagStyle}>{t.tag}</span>}
                  <h3>{t.title}</h3><p>{t.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="processo" className="sec sec--dark" data-section="sites-processo">
          <div className="shell">
            <div className="sec-head">
              <div className="marker"><span className="num">04</span><span className="name">Como funciona</span></div>
              <h2 className="h-section">Do briefing ao site no ar <em>em menos de 2 semanas.</em></h2>
              <p className="anno">Processo organizado, sem empurrar responsabilidade para o cliente. Você aprova cada etapa.</p>
            </div>
            <div className="proc-grid" style={{ gridTemplateColumns:"repeat(2, 1fr)" }}>
              {steps.map((s) => <article key={s.n} className="proc-card"><span className="proc-n">{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="faq" className="sec sec--graphite" data-section="sites-faq">
          <div className="shell">
            <div className="auth-grid">
              <div className="auth-copy">
                <p className="eyebrow">Dúvidas</p>
                <h2 className="h-section">Perguntas sobre sites <em>e landing pages.</em></h2>
                <p className="anno">O que as pessoas costumam perguntar antes de contratar esse serviço.</p>
                <a href={WHATSAPP} target="_blank" rel="noreferrer noopener" data-cta="primary" data-label="sites-faq-whatsapp" className="btn-primary" style={{ marginTop:"2rem", display:"inline-flex" }}>Falar com a equipe</a>
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

        <section id="cta" className="sec sec--dark" data-section="sites-cta">
          <div className="shell">
            <div className="cta-block">
              <p className="eyebrow">Seu negócio no digital</p>
              <h2 className="h-cta">Seu site no ar em até <em>15 dias.</em></h2>
              <p className="anno">Design premium, SEO técnico, performance real e suporte humano. A Yamaji entrega do briefing ao go-live sem surpresa no orçamento.</p>
              <div className="row-btns">
                <a href={WHATSAPP} target="_blank" rel="noreferrer noopener" data-cta="primary" data-label="sites-cta-final" className="btn-primary">Quero conversar</a>
                <Link href="/" className="btn-secondary">Ver todos os serviços</Link>
              </div>
              <p className="cta-foot">Briefing sem compromisso · Proposta em até 24h · Suporte humano</p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="shell">
            <div className="footer-grid">
              <div className="footer-brand">
                <Link href="/"><span className="bmark" aria-hidden="true">Y</span>Yamaji Studio</Link>
                <p>Equipe de design, tecnologia e marketing para negócios que querem crescer com estrutura real e suporte humano.</p>
              </div>
              <nav className="footer-col" aria-label="Serviços"><h5>Serviços</h5><ul>
                <li><Link href="/sites-landing-pages">Sites & Landing Pages</Link></li>
                <li><Link href="/e-commerce">E-commerce</Link></li>
                <li><Link href="/social-marketing">Social Media</Link></li>
                <li><Link href="/automacao-ia">IA & Automação</Link></li>
                <li><Link href="/crm-clinicas">CRM</Link></li>
                <li><Link href="/plataforma-educacional">Plataforma Educacional</Link></li>
              </ul></nav>
              <nav className="footer-col" aria-label="Projetos web"><h5>Projetos web</h5><ul>
                <li><Link href="/sites-landing-pages">Site institucional</Link></li>
                <li><Link href="/sites-landing-pages">Landing page</Link></li>
                <li><Link href="/sites-landing-pages">Página de captação</Link></li>
                <li><Link href="/sites-landing-pages">Site com CMS</Link></li>
              </ul></nav>
              <div className="footer-col"><h5>Contato</h5><ul>
                <li><a href={WHATSAPP} target="_blank" rel="noreferrer noopener">WhatsApp</a></li>
                <li><a href="mailto:oi@yamajistudio.com.br">E-mail</a></li>
                <li><Link href="/">Página inicial</Link></li>
              </ul></div>
            </div>
            <div className="footer-bottom"><span>© 2025 Yamaji Studio. Todos os direitos reservados.</span><span>Salvador, Bahia — Brasil</span></div>
          </div>
          <div className="footer-mark" aria-hidden="true">Yamaji</div>
        </footer>
      </main>
    </>
  );
}
