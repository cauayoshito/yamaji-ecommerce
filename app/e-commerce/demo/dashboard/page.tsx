import type { ReactNode } from "react";
import Link from "next/link";
import {
  Search,
  Bell,
  HelpCircle,
  Calendar,
  Download,
  TrendingUp,
  TrendingDown,
  ImageIcon,
} from "lucide-react";

const TOP_PRODUCTS = [
  {
    name: "Tênis CloudRunner X",
    meta: "Calçados • Ref: 20412",
    sales: "1.240",
    price: "R$ 299,00",
    revenue: "R$ 370.760",
    trend: "+24%",
    trendTone: "up",
  },
  {
    name: "T-Shirt Organic Cotton",
    meta: "Roupas • Ref: 10220",
    sales: "890",
    price: "R$ 89,00",
    revenue: "R$ 79.210",
    trend: "+12%",
    trendTone: "up",
  },
  {
    name: "Carteira Minimalist Leather",
    meta: "Acessórios • Ref: 45019",
    sales: "450",
    price: "R$ 149,00",
    revenue: "R$ 67.050",
    trend: "-5%",
    trendTone: "down",
  },
] as const;

function Card({
  title,
  value,
  icon,
  delta,
  deltaTone = "up",
  helper,
}: {
  title: string;
  value: string;
  icon: ReactNode;
  delta: string;
  deltaTone?: "up" | "down";
  helper: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0F1511] p-5 sm:p-6 transition-colors hover:border-accent/40">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-medium text-muted">{title}</p>
          <h3 className="mt-1 text-2xl font-semibold text-fg sm:text-3xl">
            {value}
          </h3>
        </div>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
          {icon}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
        <span
          className={`inline-flex items-center gap-1 text-sm font-semibold ${
            deltaTone === "up" ? "text-accent" : "text-red-400"
          }`}
        >
          {deltaTone === "up" ? (
            <TrendingUp className="h-4 w-4" />
          ) : (
            <TrendingDown className="h-4 w-4" />
          )}
          {delta}
        </span>
        <span className="text-xs text-muted">{helper}</span>
      </div>
    </div>
  );
}

function ProductCard({
  name,
  meta,
  sales,
  price,
  revenue,
  trend,
  trendTone,
}: (typeof TOP_PRODUCTS)[number]) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-accent/10">
          <ImageIcon className="h-5 w-5 text-accent" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-fg break-words">{name}</p>
          <p className="mt-1 text-[10px] text-muted">{meta}</p>

          <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                Vendas
              </p>
              <p className="mt-1 text-sm font-semibold text-fg">{sales}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                Preço
              </p>
              <p className="mt-1 text-sm font-semibold text-fg">{price}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                Receita
              </p>
              <p className="mt-1 text-sm font-semibold text-fg">{revenue}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/40 px-3 py-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                Tendência
              </p>
              <span
                className={`mt-1 inline-flex items-center gap-1 text-sm font-semibold ${
                  trendTone === "up" ? "text-accent" : "text-red-400"
                }`}
              >
                {trendTone === "up" ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                {trend}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CommerceDemoDashboard() {
  return (
    <main className="min-h-dvh bg-[#0A0A0B] text-fg overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-white/10 bg-[#0F1511]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-8">
          <div className="relative w-full lg:max-w-xl">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-fg placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40"
              placeholder="Buscar pedidos, produtos ou ferramentas..."
              type="text"
            />
          </div>

          <div className="flex w-full items-center justify-between gap-3 lg:w-auto lg:justify-end">
            <div className="flex items-center gap-3">
              <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted hover:text-fg">
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
              </button>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted hover:text-fg">
                <HelpCircle className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden text-xs font-semibold uppercase tracking-wider text-muted sm:inline">
                Status:
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] font-bold text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                LOJA ONLINE
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto w-full max-w-[1400px] space-y-8 px-4 py-8 sm:px-6 lg:px-8">
        {/* Top section */}
        <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              Painel de Vendas
            </h1>
            <p className="mt-1 text-sm text-muted sm:text-base">
              Visão geral do desempenho da sua loja hoje.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-fg hover:bg-white/10 sm:w-auto">
              <Calendar className="h-4 w-4" />
              Últimos 7 dias
            </button>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-fg hover:bg-white/10 sm:w-auto">
              <Download className="h-4 w-4" />
              Relatório
            </button>
          </div>
        </section>

        {/* KPI cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Vendas hoje"
            value="R$ 12.450,00"
            icon={<span className="text-sm font-black">R$</span>}
            delta="12.5%"
            deltaTone="up"
            helper="vs ontem (R$ 11.066)"
          />
          <Card
            title="Ticket Médio"
            value="R$ 215,00"
            icon={<span className="text-sm font-black">%</span>}
            delta="2.1%"
            deltaTone="down"
            helper="vs semana anterior"
          />
          <Card
            title="Conversão"
            value="3.8%"
            icon={<span className="text-sm font-black">%</span>}
            delta="0.5%"
            deltaTone="up"
            helper="vs média do setor"
          />
        </div>

        {/* Charts row */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Weekly revenue */}
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-[#0F1511] p-5 sm:p-6 md:p-8 overflow-hidden">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-fg">
                  Receita Semanal
                </h2>
                <p className="text-sm text-muted">
                  Performance de vendas nos últimos 7 dias
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(13,242,89,0.5)]" />
                  <span className="font-medium text-muted">Esta semana</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="font-medium text-muted">Média anterior</span>
                </div>
              </div>
            </div>

            <div className="relative mt-6 h-[220px] w-full sm:h-[260px] md:h-[320px]">
              <svg
                className="h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 1000 300"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1="0%"
                    x2="0%"
                    y1="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#0df259" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#0df259" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <path
                  d="M0,220 L166,180 L333,240 L500,100 L666,150 L833,60 L1000,90 L1000,300 L0,300 Z"
                  fill="url(#chartGradient)"
                />
                <path
                  d="M0,220 L166,180 L333,240 L500,100 L666,150 L833,60 L1000,90"
                  fill="none"
                  stroke="#0df259"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(13,242,89,0.4))",
                  }}
                />
                <path
                  d="M0,250 L166,240 L333,260 L500,210 L666,230 L833,180 L1000,190"
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeDasharray="8,8"
                  strokeWidth="2"
                />

                <g className="fill-[rgba(255,255,255,0.45)] text-[14px] font-medium">
                  <text x="0" y="290">
                    Seg
                  </text>
                  <text x="166" y="290" textAnchor="middle">
                    Ter
                  </text>
                  <text x="333" y="290" textAnchor="middle">
                    Qua
                  </text>
                  <text x="500" y="290" textAnchor="middle">
                    Qui
                  </text>
                  <text x="666" y="290" textAnchor="middle">
                    Sex
                  </text>
                  <text x="833" y="290" textAnchor="middle">
                    Sáb
                  </text>
                  <text x="1000" y="290" textAnchor="end">
                    Dom
                  </text>
                </g>
              </svg>

              {/* Tooltip: estático no mobile, posicionado no desktop */}
              <div className="mt-4 rounded-xl border border-white/10 bg-black/60 px-3 py-2 text-[10px] text-white sm:absolute sm:left-[70%] sm:top-[60px] sm:-translate-x-1/2 sm:-translate-y-full">
                <p className="font-semibold">R$ 18.230,00</p>
                <p className="opacity-70">Melhor dia (Sáb)</p>
              </div>
            </div>
          </div>

          {/* Channels */}
          <div className="rounded-2xl border border-white/10 bg-[#0F1511] p-5 sm:p-6 md:p-8">
            <h2 className="mb-6 text-lg font-semibold text-fg">
              Canais de Venda
            </h2>

            <div className="flex flex-col items-center justify-center gap-6">
              <div className="relative h-44 w-44 sm:h-48 sm:w-48">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="rgba(255,255,255,0.10)"
                    strokeWidth="12"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#0df259"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="100"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#8b5cf6"
                    strokeWidth="12"
                    strokeDasharray="251.2"
                    strokeDashoffset="200"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-semibold text-fg">2.4k</span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted">
                    Acessos
                  </span>
                </div>
              </div>

              <div className="w-full space-y-3">
                {[
                  {
                    name: "WhatsApp",
                    pct: "60%",
                    meta: "1.4k vendas",
                    dot: "bg-accent",
                  },
                  {
                    name: "Instagram",
                    pct: "30%",
                    meta: "720 vendas",
                    dot: "bg-purple-500",
                  },
                  {
                    name: "Outros",
                    pct: "10%",
                    meta: "240 vendas",
                    dot: "bg-white/30",
                  },
                ].map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-3 w-3 rounded-full ${row.dot}`} />
                      <span className="text-sm font-semibold text-fg">
                        {row.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-fg">{row.pct}</p>
                      <p className="text-[10px] text-muted">{row.meta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Top products */}
        <div className="rounded-2xl border border-white/10 bg-[#0F1511] p-5 sm:p-6 md:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold text-fg">Produtos em Alta</h2>
            <Link
              className="text-sm font-semibold text-accent hover:underline"
              href="/e-commerce/demo/dono"
            >
              Ver estoque completo
            </Link>
          </div>

          {/* Mobile: cards */}
          <div className="grid gap-4 md:hidden">
            {TOP_PRODUCTS.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>

          {/* Desktop/tablet: table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full min-w-[820px] text-left">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-[0.2em] text-muted">
                  <th className="pb-4">Produto</th>
                  <th className="pb-4 text-center">Vendas</th>
                  <th className="pb-4 text-center">Preço</th>
                  <th className="pb-4 text-center">Receita</th>
                  <th className="pb-4 text-right">Tendência</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-white/5">
                {TOP_PRODUCTS.map((p) => (
                  <tr key={p.name}>
                    <td className="py-5">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-accent/10">
                          <ImageIcon className="h-5 w-5 text-accent" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-fg break-words">
                            {p.name}
                          </p>
                          <p className="text-[10px] text-muted">{p.meta}</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-5 text-center text-sm font-semibold text-fg">
                      {p.sales}
                    </td>
                    <td className="py-5 text-center text-sm text-fg">
                      {p.price}
                    </td>
                    <td className="py-5 text-center text-sm font-semibold text-fg">
                      {p.revenue}
                    </td>
                    <td className="py-5 text-right">
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-semibold ${
                          p.trendTone === "up" ? "text-accent" : "text-red-400"
                        }`}
                      >
                        {p.trendTone === "up" ? (
                          <TrendingUp className="h-4 w-4" />
                        ) : (
                          <TrendingDown className="h-4 w-4" />
                        )}
                        {p.trend}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <footer className="border-t border-white/10 py-8 text-center">
          <p className="text-xs text-muted">
            © 2024 Yamaji E-commerce. Versão 2.4.0-premium. Desenvolvido para
            alta performance.
          </p>
        </footer>
      </div>
    </main>
  );
}
