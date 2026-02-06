import Image from "next/image";
import Link from "next/link";
import BackgroundGlow from "@/components/ui/BackgroundGlow";
import Badge from "@/components/ui/Badge";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import CountUp from "@/components/ui/CountUp";
import NavBar from "@/components/site/NavBar";
import Footer from "@/components/site/Footer";
import WhatsAppButton from "@/components/e-commerce/WhatsAppButton";
import { BarChart3, LayoutPanelTop, UserRound, Bell } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5571992258349";
const HERO_IMAGE = "/images/ecommerce.jpeg";

export default function CommercePage() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-50 rounded bg-black px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
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
          data-section="e-commerce-hero"
          className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#0A0A0B] pt-24 pb-16 md:pt-32 md:pb-24"
        >
          <BackgroundGlow />

          <Container className="relative z-10 min-w-0">
            <div className="grid grid-cols-1 gap-10 md:gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
              {/* Left */}
              <div className="min-w-0 space-y-7 md:space-y-8 text-center lg:text-left">
                <Reveal>
                  <Badge className="border-accent/20 bg-accent/10 text-accent">
                    Físico vs Online
                  </Badge>
                </Reveal>

                <Reveal delay={80}>
                  <div className="space-y-4">
                    <h1 className="h1 text-balance">
                      Sua loja vende enquanto você dorme ou só quando você abre
                      a porta?
                    </h1>
                    <p className="lead text-pretty">
                      Instale a Máquina de Vendas Online Yamaji e transforme sua
                      loja física em um negócio que vende todos os dias, mesmo
                      sem cliente passando na porta.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={160}>
                  <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
                    <WhatsAppButton
                      href={WHATSAPP_LINK}
                      label="ATIVAR MINHA MÁQUINA DE VENDAS"
                      trackLabel="Hero"
                      className="w-full sm:w-auto"
                    />
                  </div>
                </Reveal>

                <Reveal delay={240}>
                  <div className="grid grid-cols-1 gap-3 text-left text-sm text-muted sm:grid-cols-3 sm:gap-4">
                    {[
                      { value: 24, suffix: "h", label: "Vitrine ativa" },
                      { value: 2, suffix: " canais", label: "Loja + online" },
                      { value: 1, suffix: " operação", label: "Simples" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <div className="text-xl font-semibold text-fg">
                          <CountUp to={stat.value} />
                          {stat.suffix}
                        </div>
                        <p className="text-xs uppercase tracking-[0.2em] text-muted">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* Right */}
              <Reveal delay={120}>
                <div className="relative min-w-0 w-full">
                  <div className="absolute -inset-10 -z-10 rounded-full bg-accent/20 blur-[120px]" />

                  {/* Imagem com altura responsiva + crop bonito */}
                  <GlassCard className="relative overflow-hidden p-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent2/20" />
                    <div className="relative">
                      <Image
                        src={HERO_IMAGE}
                        alt="Comparação entre loja física e loja online"
                        width={1200}
                        height={1200}
                        priority
                        className={[
                          "w-full object-cover",
                          "max-h-[520px] md:max-h-[620px] lg:max-h-none",
                          "aspect-[4/3] sm:aspect-[16/10] lg:aspect-square",
                        ].join(" ")}
                      />
                    </div>
                  </GlassCard>

                  {/* Badges flutuantes: só aparecem em telas maiores */}
                  <div className="pointer-events-none absolute -bottom-6 -left-6 hidden md:block">
                    <GlassCard className="w-48 animate-yamajiFloat">
                      <p className="text-xs text-muted">Conversão média</p>
                      <p className="mt-2 text-lg font-semibold">+3.1x</p>
                    </GlassCard>
                  </div>

                  <div className="pointer-events-none absolute -right-6 top-10 hidden md:block">
                    <GlassCard className="w-44 animate-yamajiDrift">
                      <p className="text-xs text-muted">Vendas 24h</p>
                      <p className="mt-2 text-lg font-semibold">Ativas</p>
                    </GlassCard>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        <div className="px-6">
          <div className="divider" />
        </div>

        {/* COMPARAÇÃO */}
        <section
          id="comparacao"
          data-section="e-commerce-comparacao"
          className="section bg-[#0B0F14]"
        >
          <Container className="space-y-10 md:space-y-14">
            <SectionHeader
              eyebrow="Comparação"
              title="Loja física vs Loja online com Yamaji"
              description="Dois modelos. Um vende quando a porta abre. O outro vende todos os dias."
              align="center"
            />

            <div className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <GlassCard className="h-full">
                  <h3 className="text-xl font-semibold">Loja física</h3>
                  <ul className="mt-6 space-y-3 text-sm text-muted">
                    <li>Vendas limitadas ao horário de funcionamento.</li>
                    <li>Fluxo depende de pessoas passando na porta.</li>
                    <li>Custos fixos altos e pouca previsibilidade.</li>
                    <li>Estoque parado vira custo, não caixa.</li>
                    <li>Escala exige novo ponto e mais equipe.</li>
                  </ul>
                </GlassCard>
              </Reveal>

              <Reveal delay={120}>
                <GlassCard className="h-full border-accent/30">
                  <h3 className="text-xl font-semibold text-fg">
                    Loja online com Yamaji
                  </h3>
                  <ul className="mt-6 space-y-3 text-sm text-muted">
                    <li>Vitrine aberta 24h com venda automatizada.</li>
                    <li>Catálogo digital e pagamento fácil.</li>
                    <li>Campanhas direcionadas para quem compra.</li>
                    <li>Estoque parado vira dinheiro rápido.</li>
                    <li>Escala sem precisar de outro ponto físico.</li>
                  </ul>
                </GlassCard>
              </Reveal>
            </div>
          </Container>
        </section>

        <div className="px-6">
          <div className="divider" />
        </div>

        {/* BENEFÍCIOS */}
        <section
          id="beneficios"
          data-section="e-commerce-beneficios"
          className="section bg-[#0A0A0B]"
        >
          <Container className="space-y-10 md:space-y-14">
            <SectionHeader
              eyebrow="Benefícios"
              title="Por que donos de loja física escolhem o online"
              description="Resultados reais no caixa, no tempo e na tranquilidade."
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "Fim do dia morto",
                "Venda 24h",
                "Estoque parado vira dinheiro",
                "Cresça sem outro ponto",
                "Margem maior",
                "Segurança pra família",
              ].map((item, index) => (
                <Reveal key={item} delay={index * 60}>
                  <GlassCard className="h-full">
                    <h3 className="text-lg font-semibold">{item}</h3>
                    <p className="mt-3 text-sm text-muted">
                      Estrutura pensada para vender enquanto você toca a loja.
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

        {/* SISTEMA COMPLETO */}
        <section
          id="sistema-completo"
          data-section="e-commerce-sistema"
          className="section bg-[#0B0F14]"
        >
          <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-10">
              <SectionHeader
                eyebrow="Sistema completo"
                title="Você não apenas vende. Você acompanha tudo em tempo real."
                description="Dashboard e painéis inclusos para você ver vendas, pedidos e clientes sem planilhas e sem confusão."
              />

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Dashboard de Vendas",
                    text: "Faturamento, pedidos, produtos mais vendidos e desempenho do dia em tempo real.",
                    icon: BarChart3,
                  },
                  {
                    title: "Painel do Dono",
                    text: "Gerencie produtos, estoque, preços e pedidos em um só lugar.",
                    icon: LayoutPanelTop,
                  },
                  {
                    title: "Área do Cliente",
                    text: "Seu comprador acompanha pedidos, histórico e status de entrega.",
                    icon: UserRound,
                  },
                  {
                    title: "Notificações Instantâneas",
                    text: "Receba alerta no celular a cada venda e mudança de status.",
                    icon: Bell,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} delay={index * 60}>
                      <GlassCard className="h-full">
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-accent">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-lg font-semibold">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-sm text-muted">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </GlassCard>
                    </Reveal>
                  );
                })}
              </div>

              <p className="text-sm text-muted">
                Você não fica no escuro. Você enxerga o negócio funcionando.
              </p>
            </div>

            {/* Se você já tiver o preview do dashboard, coloca aqui.
               Se não tiver, deixa esse bloco vazio por enquanto. */}
          </Container>
        </section>

        <div className="px-6">
          <div className="divider" />
        </div>

        {/* DEMO */}
        <section
          id="demo"
          data-section="e-commerce-demo"
          className="section bg-[#0A0A0B]"
        >
          <Container className="space-y-10 md:space-y-14">
            <SectionHeader
              eyebrow="Demo"
              title="Veja a Demo Completa"
              description="Quer ver como fica na prática? Fluxo real de e-commerce: cliente acompanha pedidos, dono gerencia a operação e você vê o dashboard de vendas."
            />

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/e-commerce/demo/storefront"
                className="btn btn-primary w-full justify-center sm:w-auto"
              >
                Abrir Demo
              </Link>

              <Link
                href="/e-commerce/demo/dashboard"
                className="btn btn-secondary w-full justify-center sm:w-auto"
              >
                Ver Dashboard
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Storefront", href: "/e-commerce/demo/storefront" },
                { title: "Área do Cliente", href: "/e-commerce/demo/cliente" },
                { title: "Painel do Dono", href: "/e-commerce/demo/dono" },
                { title: "Dashboard", href: "/e-commerce/demo/dashboard" },
              ].map((item, index) => (
                <Reveal key={item.title} delay={index * 60}>
                  <GlassCard className="h-full">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted">
                      Visual premium com fluxo completo do sistema.
                    </p>
                    <Link
                      href={item.href}
                      className="mt-6 inline-flex text-sm font-semibold text-accent"
                    >
                      Abrir →
                    </Link>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA FINAL */}
        <section
          id="cta-final"
          data-section="e-commerce-cta"
          className="bg-[#0A0A0B] pb-24"
        >
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10 md:p-16">
              <BackgroundGlow />
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl font-semibold md:text-5xl">
                  Sua loja pronta para vender todo dia
                </h2>
                <p className="text-sm text-muted md:text-lg">
                  Ative agora sua Máquina de Vendas Online e comece a faturar
                  mesmo fora do horário.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <WhatsAppButton
                    href={WHATSAPP_LINK}
                    label="FALAR NO WHATSAPP AGORA"
                    trackLabel="FinalCTA"
                    className="w-full sm:w-auto"
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
