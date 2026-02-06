import Image from "next/image";
import Link from "next/link";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import IconBadge from "@/components/ui/IconBadge";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import Reveal from "@/components/ui/Reveal";
import ProgressiveHeroText from "@/components/ui/ProgressiveHeroText";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollNarrative from "@/components/sections/ScrollNarrative";
import Footer from "@/components/site/Footer";
import NavBar from "@/components/site/NavBar";
import TestimonialsCarousel from "@/components/site/TestimonialsCarousel";
import { solutions } from "@/data/solutions";
import DashboardPreview from "@/components/e-commerce/DashboardPreview";

export default function Page() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 bg-black text-white px-4 py-2 rounded"
      >
        Ir para o conteúdo
      </a>

      <NavBar />

      <main
        id="conteudo"
        className="bg-bg text-fg [--header-h:56px] md:[--header-h:72px] overflow-x-hidden"
      >
        {/* HERO */}
        <section
          id="hero"
          className="relative min-h-[100svh] overflow-hidden overflow-x-hidden bg-[#0A0A0B] pt-24 pb-10 md:pt-32 md:pb-20 flex items-center"
        >
          <BackgroundGlow />
          <Container className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center min-w-0">
            <div className="space-y-10 text-center lg:text-left">
              <Reveal>
                <Badge className="border-accent/20 bg-accent/10 text-accent">
                  Yamaji Studio • Estratégia + Produto + Growth
                </Badge>
              </Reveal>
              <Reveal delay={80}>
                <div>
                  <h1 className="h1">
                    <span className="block">
                      <span className="whitespace-nowrap">Transformamos</span>{" "}
                      sua <span className="whitespace-nowrap">presença</span>{" "}
                      digital
                    </span>
                    <span className="block">com websites, ads e IA</span>
                  </h1>
                  <ProgressiveHeroText
                    className="lead"
                    phrases={[
                      "Criamos experiências digitais que geram crescimento.",
                      "Design, tecnologia e IA trabalhando juntos.",
                      "Estratégia, produto e performance em um só lugar.",
                    ]}
                  />
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="flex flex-wrap justify-center gap-5 lg:justify-start">
                  <PrimaryButton href="/aplicar" label="Aplicar para Projeto" />
                  <SecondaryButton href="/#solucoes" label="Ver soluções" />
                </div>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap justify-center gap-3 text-xs text-muted lg:justify-start">
                  {[
                    "Sem compromisso",
                    "Resposta rápida",
                    "Plano estruturado",
                  ].map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="relative min-w-0 w-full">
                <div className="absolute -inset-10 -z-10 rounded-full bg-accent/25 blur-[120px]" />
                <GlassCard className="relative overflow-hidden p-0 w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent2/20" />
                  <div className="relative p-6 md:p-8">
                    <div className="flex items-center gap-3 text-xs text-muted">
                      <IconBadge className="h-8 w-8 text-accent">01</IconBadge>
                      Painel estratégico (placeholder)
                    </div>
                    <Image
                      src="/placeholders/dashboard.svg"
                      alt="Placeholder de dashboard premium"
                      width={520}
                      height={360}
                      className="mt-6 w-full rounded-2xl border border-white/10"
                      priority
                    />
                  </div>
                </GlassCard>
                <div className="absolute -bottom-6 -left-6 hidden md:block">
                  <GlassCard className="w-48 animate-yamajiFloat">
                    <p className="text-xs text-muted">Ativos conectados</p>
                    <p className="mt-2 text-lg font-semibold">+27%</p>
                  </GlassCard>
                </div>
                <div className="absolute -right-6 top-10 hidden md:block">
                  <GlassCard className="w-44 animate-yamajiDrift">
                    <p className="text-xs text-muted">Conversão</p>
                    <p className="mt-2 text-lg font-semibold">3.4x</p>
                  </GlassCard>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        <ScrollNarrative />

        {/* TRUST STRIP */}
        <section className="border-y border-white/5 bg-[#0B0F14] py-6">
          <Container className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="text-sm text-muted">
              Projetos entregues para negócios em crescimento e operação
              complexa.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted">
              <span>Health</span>
              <span>Fintech</span>
              <span>Retail</span>
              <span>Educação</span>
              <span>Hospitalidade</span>
            </div>
          </Container>
        </section>

        {/* SOLUÇÕES */}
        <section
          id="solucoes"
          className="section scroll-mt-[calc(var(--header-h)+8px)] bg-[#0E0B14]"
        >
          <Container className="space-y-10 md:space-y-14">
            <SectionHeader
              eyebrow="Soluções"
              title="Quatro pilares para operar como empresa tech"
              description="Estruturamos a presença digital com visão de produto, automação e dados."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {solutions.map((solution, index) => (
                <Reveal key={solution.slug} delay={index * 80}>
                  <GlassCard className="flex h-full flex-col gap-6 p-6 md:p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/50">
                    <IconBadge>{String(index + 1).padStart(2, "0")}</IconBadge>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-muted">{solution.subtitle}</p>
                      <ul className="space-y-2 text-sm text-muted">
                        {solution.bullets.map((item) => (
                          <li key={item}>{item}.</li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={`/solucoes/${solution.slug}`}
                      className="mt-auto text-sm font-semibold text-accent"
                    >
                      Saiba mais →
                    </Link>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        {/* SISTEMAS */}
        <section
          id="sistemas"
          className="section scroll-mt-[calc(var(--header-h)+8px)] bg-[#0A0A0B]"
        >
          <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <div className="space-y-6">
                <SectionHeader
                  eyebrow="Sistemas"
                  title="Sistemas que organizam operação e escalam resultados"
                  description="Plataformas sob medida para centralizar dados, automatizar rotinas e dar clareza ao time."
                  titleClassName="text-4xl md:text-6xl"
                />
                <ul className="space-y-3 text-sm text-muted">
                  {[
                    "Painel de leads e pipeline unificado",
                    "Automações de atendimento e follow-up",
                    "Relatórios e indicadores em tempo real",
                    "Gestão de usuários e permissões",
                  ].map((item) => (
                    <li key={item}>{item}.</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <DashboardPreview />
            </Reveal>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        <section className="section bg-[#0B0F14]">
          <Container className="space-y-12 md:space-y-16">
            <SectionHeader
              eyebrow="Valor"
              title="O que você ganha ao operar como empresa tech"
              description="Resultados que aparecem na rotina, no controle e na velocidade de decisão."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {["Produtividade", "Controle", "Escala"].map((item, index) => (
                <Reveal key={item} delay={index * 80}>
                  <GlassCard className="min-h-[180px]">
                    <h3 className="text-2xl font-semibold">{item}</h3>
                    <p className="mt-4 text-sm text-muted">
                      Mais clareza operacional com dados e processos integrados.
                    </p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        {/* PROCESSO */}
        <section
          id="processo"
          className="section scroll-mt-[calc(var(--header-h)+8px)] bg-[#0E0B14]"
        >
          <Container className="space-y-12 md:space-y-16">
            <SectionHeader
              eyebrow="Processo"
              title="Um método claro para decisões rápidas"
              description="Um fluxo editorial que conecta estratégia, execução e resultado."
            />
            <div className="grid gap-6 lg:grid-cols-[auto_1fr]">
              <div className="hidden w-10 items-start justify-center lg:flex">
                <div className="h-full w-px bg-gradient-to-b from-white/5 via-accent/50 to-white/5" />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Descoberta",
                    text: "Mapeamos operação, metas e gaps de dados.",
                  },
                  {
                    title: "Estilo",
                    text: "Construímos linguagem visual e narrativa premium.",
                  },
                  {
                    title: "Execução",
                    text: "Entrega modular com squads dedicados.",
                  },
                  {
                    title: "Resultados",
                    text: "Monitoramento contínuo e otimizações estratégicas.",
                  },
                ].map((step, index) => (
                  <Reveal key={step.title} delay={index * 80}>
                    <GlassCard className="relative">
                      <span className="absolute -top-3 left-6 rounded-full border border-white/20 bg-bg px-3 py-1 text-xs text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="mt-3 text-sm text-muted">{step.text}</p>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
            </div>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        {/* CASES */}
        <section id="cases" className="section bg-[#0A0A0B]">
          <Container className="space-y-12 md:space-y-16">
            <SectionHeader
              eyebrow="Cases"
              title="Projetos que combinam visão de produto e performance"
              description="Histórias estratégicas que transformaram operação, demanda e posicionamento."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  name: "Dieisson Vasques",
                  subtitle: "Do personal presencial à plataforma digital",
                  text: "Dieisson chegou buscando mais que um site. Queria transformar seu trabalho presencial em um produto digital escalável. A Yamaji criou uma plataforma no estilo Netflix, com vídeos, área de membros e estrutura de assinatura, abrindo novas fontes de receita e aumentando engajamento.",
                  image: "/images/dieisson.png",
                },
                {
                  name: "Plano de Saúde Bahia (Noely)",
                  subtitle: "Estrutura digital para múltiplos serviços",
                  text: "Noely já possuía um serviço forte, mas precisava organizar sua presença digital. A Yamaji desenvolveu páginas segmentadas para cada tipo de plano, integradas ao tráfego pago, conectando cada usuário ao serviço ideal.",
                  image: "/images/noely.png",
                },
                {
                  name: "Proprium Imóveis",
                  subtitle: "Presença digital para imobiliária",
                  text: "Projeto criado para organizar portfólio, serviços e contato em um único ambiente, facilitando navegação e fortalecendo a credibilidade da marca.",
                  image: "/images/proprium.png",
                },
                {
                  name: "Potter Team",
                  subtitle: "Autoridade e posicionamento esportivo",
                  text: "Site criado para apresentar equipe, serviços e posicionamento, fortalecendo a marca e facilitando novos contatos.",
                  image: "/images/potter.png",
                },
              ].map((item, index) => (
                <Reveal key={item.name} delay={index * 80}>
                  <GlassCard className="flex h-full flex-col gap-4 transition duration-300 hover:-translate-y-1 hover:border-accent/50">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                      <div className="relative aspect-video w-full">
                        <Image
                          src={item.image}
                          alt={`Projeto ${item.name}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-fg">
                        {item.name}
                      </h3>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
                        {item.subtitle}
                      </p>
                    </div>
                    <p className="text-sm text-muted">{item.text}</p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        {/* COMPARATIVO */}
        <section
          id="comparativo"
          className="section scroll-mt-[calc(var(--header-h)+8px)] bg-[#0B0F14]"
        >
          <Container>
            <SectionHeader
              eyebrow="Comparativo"
              title="Como comparamos"
              description="Diferenças claras entre um site comum e uma estrutura Yamaji."
            />
            <div className="mt-12 overflow-hidden rounded-2xl border border-white/5">
              <div className="grid grid-cols-3 bg-white/5 text-xs uppercase tracking-[0.2em] text-muted">
                <div className="p-6">Itens</div>
                <div className="p-6">Site comum</div>
                <div className="p-6">Yamaji Studio</div>
              </div>
              {[
                "Estratégia e posicionamento",
                "Design editorial premium",
                "Performance e SEO técnico",
                "Tracking e dados first-party",
                "Automação e integrações",
                "Suporte e evolução contínua",
              ].map((item) => (
                <div
                  key={item}
                  className="grid grid-cols-3 border-t border-white/5 text-sm text-muted"
                >
                  <div className="p-6 text-fg">{item}</div>
                  <div className="p-6">Pontual / superficial</div>
                  <div className="p-6 text-fg">Estruturado e estratégico</div>
                </div>
              ))}
            </div>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        {/* DEPOIMENTOS */}
        <section
          id="depoimentos"
          className="section scroll-mt-[calc(var(--header-h)+8px)] bg-[#0E0B14]"
        >
          <Container>
            <SectionHeader
              eyebrow="Depoimentos"
              title="Empresas que decidiram operar como tech"
              description="Experiências reais com foco em operação e crescimento."
            />
            <div className="mt-12">
              <TestimonialsCarousel />
            </div>
          </Container>
        </section>
        <div className="px-6">
          <div className="divider" />
        </div>

        {/* CTA FINAL */}
        <section id="cta" className="pb-24 bg-[#0A0A0B]">
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-10 md:p-16">
              <BackgroundGlow />
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl font-semibold md:text-5xl">
                  Pronto para juntar as ideias?
                </h2>
                <p className="text-sm text-muted md:text-lg">
                  Vamos desenhar uma estrutura digital que funcione como um
                  produto com performance, dados e automação.
                </p>
                <div className="flex flex-wrap gap-4">
                  <PrimaryButton href="/aplicar" label="Aplicar para Projeto" />
                  <SecondaryButton
                    href="https://wa.me/557199258349"
                    label="WhatsApp"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
