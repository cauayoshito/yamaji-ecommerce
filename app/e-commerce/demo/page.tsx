import Link from "next/link";

const DEMO_ROUTES = [
  {
    title: "Storefront",
    desc: "Vitrine premium com produtos e checkout otimizado.",
    href: "/e-commerce/demo/storefront",
  },
  {
    title: "Área do Cliente",
    desc: "Acompanhamento de pedidos e histórico em tempo real.",
    href: "/e-commerce/demo/cliente",
  },
  {
    title: "Painel do Dono",
    desc: "Gestão de pedidos, estoque e operação diária.",
    href: "/e-commerce/demo/dono",
  },
  {
    title: "Dashboard de Vendas",
    desc: "KPIs, canais e relatórios visuais para decisão rápida.",
    href: "/e-commerce/demo/dashboard",
  },
] as const;

export default function CommerceDemoLanding() {
  return (
    <section className="bg-[#0A0A0B] text-fg">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F14] p-8 md:p-12">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#0df259]/20 blur-[120px]" />
          <div className="relative space-y-4">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#0df259]">
              Demo Yamaji E-commerce
            </span>

            <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              Veja a experiência completa do Yamaji E-commerce
            </h1>

            <p className="text-sm text-muted md:text-base">
              Uma demo premium com vitrine, área do cliente, painel do dono e
              dashboard de vendas.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/e-commerce"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-fg hover:bg-white/10"
              >
                Voltar para o E-commerce
              </Link>

              <Link
                href="/e-commerce/demo/storefront"
                className="inline-flex items-center justify-center rounded-2xl bg-[#0df259] px-6 py-3 text-sm font-semibold text-black hover:brightness-110"
              >
                Abrir Storefront
              </Link>
            </div>
          </div>
        </div>

        {/* Tour */}
        <div className="mt-12 space-y-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold md:text-2xl">Tour da Demo</h2>
            <p className="text-sm text-muted">
              Explore cada etapa do sistema completo.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DEMO_ROUTES.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#0df259]/40 hover:bg-white/5"
              >
                <h3 className="text-base font-semibold text-fg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
                <span className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-[#0df259]">
                  Abrir -&gt;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
