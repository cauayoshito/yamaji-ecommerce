import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/site/NavBar";

export const metadata: Metadata = {
  title: "Social Media e Marketing · Yamaji Studio",
  description:
    "Criação de posts, stories e criativos para anúncios. Calendário editorial, copywriting e relatório mensal. Presença consistente no Instagram sem você precisar lembrar de postar.",
  alternates: { canonical: "/social-marketing" },
};

const whatsMsg = encodeURIComponent(
  "Olá! Vim pelo site da Yamaji Studio e quero saber mais sobre Social Media e Marketing."
);
const WHATSAPP = `https://wa.me/5571992258349?text=${whatsMsg}`;

const pains = [
  { title: "Post irregular demais", text: "Quando tem tempo posta, quando não tem some por semanas. O algoritmo penaliza e o alcance cai." },
  { title: "Arte com cara de template", text: "Canva pronto sem identidade. Seu concorrente usa o mesmo modelo e o cliente não diferencia." },
  { title: "Sem estratégia", text: "Posta o que lembra. Sem calendário, sem objetivo, sem análise. Muito esforço para pouco resultado." },
  { title: "Anúncio que não converte", text: "Impulsionou mas não gerou venda. Faltou criativo, copy e segmentação pensados para converter." },
];

const solutions = [
  { n: "01", title: "Identidade visual consistente", text: "Artes com a cara da sua marca, não de um template genérico. Layout padronizado que o cliente reconhece de longe." },
  { n: "02", title: "Conteúdo com propósito", text: "Cada post tem um objetivo: engajar, educar ou converter. Calendário editorial planejado mês a mês." },
  { n: "03", title: "Copy que vende", text: "Escrevemos todas as legendas com o tom de voz da sua marca. Sem você precisar pensar no que escrever." },
];

const steps = [
  { n: "01", title: "Diagnóstico da marca", text: "Analisamos perfil atual, concorrentes e público. Definimos tom de voz, paleta e identidade visual." },
  { n: "02", title: "Calendário do mês", text: "Planejamos temas, formatos e datas. Você aprova o plano antes das artes serem criadas." },
  { n: "03", title: "Criação e aprovação", text: "Produzimos posts, stories e criativos. Tudo passa pela sua aprovação antes de ir ao ar." },
  { n: "04", title: "Publicação e relatório", text: "Publicamos ou entregamos o calendário pronto. Relatório mensal com alcance e engajamento." },
];

const servicos = [
  { title: "Posts para Instagram", text: "Artes com identidade visual da sua marca. Layout consistente, tipografia limpa e mensagem clara.", tag: "Feed" },
  { title: "Stories e Reels", text: "Conteúdo para engajar e manter presença diária. Enquetes, bastidores e chamadas de ação.", tag: "Engajamento" },
  { title: "Criativos para anúncios", text: "Peças para Meta Ads com copy e visual otimizados para conversão. Variações para teste A/B.", tag: "Tráfego pago" },
  { title: "Calendário editorial", text: "Planejamento mensal com temas, datas estratégicas e pautas alinhadas ao seu produto.", tag: "Estratégia" },
  { title: "Copywriting de legendas", text: "Escrevemos todas as legendas com o tom de voz da sua marca. Você só aprova.", tag: "Copy" },
  { title: "Relatório mensal", text: "Acompanhamento de alcance, engajamento e resultados. Ajustamos a estratégia mês a mês.", tag: "Análise" },
];

const faqs = [
  { q: "Vocês publicam na minha conta ou eu publico?", a: "As duas opções são possíveis. Podemos gerenciar as publicações com acesso à sua conta ou entregar os arquivos com o calendário pronto para você mesmo postar." },
  { q: "Como funciona o processo de aprovação?", a: "Tudo passa pela sua aprovação antes de ir ao ar. Enviamos para revisão via WhatsApp. Sem surpresa no feed." },
  { q: "Quanto tempo leva para começar?", a: "Após briefing e aprovação de identidade visual, o primeiro lote de posts fica pronto em até 5 dias úteis." },
  { q: "Criam os textos das legendas também?", a: "Sim. Copywriting de todas as legendas está incluído. Escrevemos com o tom de voz da sua marca." },
  { q: "Fazem anúncios pagos também?", a: "Criamos os criativos e copy para anúncios no Meta Ads. O gerenciamento da verba pode ser contratado separadamente." },
  { q: "E se eu não gostar das artes?", a: "Incluímos rodadas de revisão até a aprovação. Ajustamos cores, layout e texto até representar a sua marca." },
];

const engagementBars = [40, 52, 48, 65, 58, 72, 68, 80, 76, 88, 84, 95];

export default function SocialMarketingPage() {
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
        <section className="hero" data-section="social-hero">
          <div className="shell">
            <div className="hero-grid">
              <div>
                <div className="hero-eye"><span className="pill-dot" aria-hidden="true" />Social Media e Marketing · Yamaji Studio</div>
                <h1>Seu Instagram com <em>presença consistente</em> <span className="acc">e visual que vende.</span></h1>
                <p className="hero-pitch">Criação de artes, posts, stories e criativos para anúncios. <strong>Calendário editorial, copywriting</strong> e relatório mensal. A Yamaji cuida da presença, você foca no negócio.</p>
                <div className="hero-cta">
                  <a href={WHATSAPP} target="_blank" rel="noreferrer noopener" data-cta="primary" data-label="social-hero-whatsapp" className="btn btn-wa">
                    Quero presença consistente
                    <svg className="arr" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                  <Link href="/" className="btn btn-ghost">Ver outros serviços</Link>
                </div>
                <div className="hero-trust">
                  <div className="avatars" aria-hidden="true"><span className="av j">Y</span><span className="av">MK</span><span className="av">DS</span></div>
                  <p className="txt"><strong>Design + estratégia + copy</strong><br />Tudo em uma equipe só</p>
                </div>
              </div>
              <div className="hero-show" aria-hidden="true">
                <div className="show big">
                  <div className="head"><span>Engajamento / 12 semanas</span><span className="live">Crescendo</span></div>
                  <div className="num">+138%</div>
                  <div className="chart">
                    {engagementBars.map((h, i) => (
                      <div key={i} className={`bar${i === engagementBars.length - 1 ? " j" : ""}`} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="chart-x"><span>Jan</span><span>Mar</span><span>Mai</span><span>Jun</span></div>
                  <p className="desc">Crescimento de engajamento no Instagram</p>
                </div>
                <div className="show accent">
                  <div className="head"><span>Entrega mensal</span><span className="live">Ativo</span></div>
                  <div className="num">16<em>posts</em></div>
                  <p className="desc">Posts + stories + criativos este mês</p>
                </div>
                <div className="show team">
                  <div className="head"><span>Formatos incluídos</span></div>
                  <div className="roles"><span>Feed</span><span>Stories</span><span>Reels</span><span>Criativos</span><span>Legendas</span><span>Calendário</span></div>
                  <p className="desc" style={{ marginTop: "auto" }}>Aprovação prévia em tudo</p>
                </div>
              </div>
            </div>
            <div className="hero-creds">
              <span className="lbl">Social</span>
              <div className="stats">
                <div className="stat"><span className="v">16</span><span className="l">Posts por mês</span></div>
                <div className="stat"><span className="v">100<em>%</em></span><span className="l">Aprovação prévia</span></div>
                <div className="stat"><span className="v">5<em>d</em></span><span className="l">Primeira entrega</span></div>
                <div className="stat"><span className="v">1<em>x</em></span><span className="l">Relatório mensal</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEMA */}
        <section id="problema" className="sec sec--light" data-section="social-problema">
          <div className="shell">
            <div className="sec-head">
              <div className="marker"><span className="num">01</span><span className="name">O problema</span></div>
              <h2 className="h-section">Postar de vez em quando <em>não constrói presença digital.</em></h2>
              <p className="anno">Consistência é o que diferencia quem vende pelo Instagram de quem apenas tem um perfil.</p>
            </div>
            <div className="auth-grid">
              <div className="auth-copy">
                <p className="pull">Algoritmo premia quem aparece com regularidade. Feed bagunçado afasta cliente antes de ver o produto. <em>A Yamaji resolve o problema da raiz.</em></p>
                <p>Criamos, planejamos e entregamos conteúdo com identidade e estratégia. Você aprova e o Instagram trabalha por você.</p>
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
        <section id="diferenciais" className="sec sec--graphite" data-section="social-diferenciais">
          <div className="shell">
            <div className="sec-head">
              <div className="marker"><span className="num">02</span><span className="name">O que fazemos</span></div>
              <h2 className="h-section">Criação, estratégia e consistência <em>para suas redes sociais.</em></h2>
              <p className="anno">Não é só post bonito. É conteúdo com propósito, identidade visual da sua marca e objetivo claro.</p>
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
            <p className="guarantee" style={{ marginTop: "3rem" }}>✓ Aprovação prévia em todo conteúdo. Nada vai ao ar sem você validar.</p>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="sec sec--sand" data-section="social-servicos">
          <div className="shell">
            <div className="sec-head">
              <div className="marker"><span className="num">03</span><span className="name">Formatos</span></div>
              <h2 className="h-section">O que está incluído <em>no plano mensal.</em></h2>
              <p className="anno">Entregas claras, sem surpresa no escopo. Você sabe exatamente o que vai receber.</p>
            </div>
            <div className="svc-grid">
              {servicos.map((s) => (
                <article key={s.title} className="svc-card">
                  <span style={{ display:"inline-block", marginBottom:"0.75rem", padding:"0.2rem 0.65rem", borderRadius:"99px", border:"1px solid var(--acc)", color:"var(--acc)", fontSize:"0.65rem", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase" }}>{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="sec sec--dark" data-section="social-processo">
          <div className="shell">
            <div className="sec-head">
              <div className="marker"><span className="num">04</span><span className="name">Como funciona</span></div>
              <h2 className="h-section">Do diagnóstico ao feed com <em>identidade consistente.</em></h2>
              <p className="anno">Processo simples, com aprovação em cada etapa. Você nunca é surpreendido.</p>
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
        <section id="faq" className="sec sec--graphite" data-section="social-faq">
          <div className="shell">
            <div className="auth-grid">
              <div className="auth-copy">
                <p className="eyebrow">Dúvidas</p>
                <h2 className="h-section">Perguntas sobre <em>Social Media.</em></h2>
                <p className="anno">O que as pessoas costumam perguntar antes de começar.</p>
                <a href={WHATSAPP} target="_blank" rel="noreferrer noopener" data-cta="primary" data-label="social-faq-whatsapp" className="btn-primary" style={{ marginTop:"2rem", display:"inline-flex" }}>Falar com a equipe</a>
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
        <section id="cta" className="sec sec--dark" data-section="social-cta">
          <div className="shell">
            <div className="cta-block">
              <p className="eyebrow">Presença que converte</p>
              <h2 className="h-cta">Feed consistente, visual que vende <em>e conteúdo com estratégia.</em></h2>
              <p className="anno">A Yamaji cuida da criação, do calendário e da identidade visual das suas redes. Você aprova e foca no que só você pode fazer no seu negócio.</p>
              <div className="row-btns">
                <a href={WHATSAPP} target="_blank" rel="noreferrer noopener" data-cta="primary" data-label="social-cta-final" className="btn-primary">Quero conversar</a>
                <Link href="/" className="btn-secondary">Ver todos os serviços</Link>
              </div>
              <p className="cta-foot">Diagnóstico sem compromisso · Proposta mensal clara · Suporte humano</p>
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
              <nav className="footer-col" aria-label="Social Media">
                <h5>Social Media</h5>
                <ul>
                  <li><Link href="/social-marketing">Posts para Instagram</Link></li>
                  <li><Link href="/social-marketing">Stories e Reels</Link></li>
                  <li><Link href="/social-marketing">Criativos para anúncios</Link></li>
                  <li><Link href="/social-marketing">Calendário editorial</Link></li>
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
