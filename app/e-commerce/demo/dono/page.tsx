import Link from "next/link";
import {
  Search,
  TicketPercent,
  Plus,
  Bell,
  AlertTriangle,
  MoreHorizontal,
  TrendingUp,
  PlusCircle,
  TrendingDown,
} from "lucide-react";

const ORDERS = [
  {
    id: "#ORD-7721",
    initials: "RM",
    name: "Ricardo Mendes",
    time: "Hoje, 14:20",
    total: "R$ 450,00",
    status: "Processando",
    tone: "accent",
  },
  {
    id: "#ORD-7719",
    initials: "AS",
    name: "Ana Silva",
    time: "Hoje, 12:45",
    total: "R$ 1.280,50",
    status: "Enviado",
    tone: "blue",
  },
  {
    id: "#ORD-7718",
    initials: "JC",
    name: "Juliana Costa",
    time: "Ontem, 18:10",
    total: "R$ 89,90",
    status: "Entregue",
    tone: "muted",
  },
  {
    id: "#ORD-7715",
    initials: "PL",
    name: "Pedro Lucas",
    time: "Ontem, 15:30",
    total: "R$ 342,00",
    status: "Pendente",
    tone: "yellow",
  },
];

export default function CommerceDemoOwner() {
  return (
    <main className="bg-[#0A0A0B] text-fg">
      <section className="px-6 py-8">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Top tools */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-fg placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40"
                placeholder="Pesquisar pedidos, clientes..."
                type="text"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-fg hover:bg-white/10">
                <TicketPercent className="h-4 w-4" />
                Criar cupom
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent2 px-4 py-2 text-sm font-semibold text-black">
                <Plus className="h-4 w-4" />
                Adicionar produto
              </button>

              <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted hover:text-fg">
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
              </button>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold md:text-4xl">
              Painel do Dono
            </h1>
            <p className="text-sm text-muted md:text-base">
              Bem-vindo de volta. Aqui está o resumo das suas operações hoje.
            </p>
            <p className="text-sm text-accent">
              Hoje: 42 pedidos, R$ 3.840,00 em vendas e 5 alertas de estoque.
            </p>

            <div>
              <Link
                href="/e-commerce/demo/dashboard"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-black"
              >
                Ver Dashboard de Vendas
              </Link>
            </div>
          </div>

          {/* Alert */}
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20 text-red-300">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-fg">
                    Alerta de Estoque Baixo
                  </h2>
                  <p className="text-sm text-muted">
                    Existem{" "}
                    <span className="font-semibold text-red-300">5 itens</span>{" "}
                    com estoque crítico que precisam de reposição imediata.
                  </p>
                </div>
              </div>

              <button className="rounded-xl bg-red-500 px-5 py-2 text-sm font-semibold text-white hover:bg-red-600">
                Ver estoque
              </button>
            </div>
          </div>

          {/* Orders */}
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0F1511]">
            <div className="flex flex-col gap-3 border-b border-white/10 px-6 py-5 md:flex-row md:items-center md:justify-between">
              <h2 className="text-lg font-semibold text-fg">
                Pedidos Recentes
              </h2>
              <div className="flex gap-2">
                <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-muted hover:text-fg">
                  Filtrar
                </button>
                <button className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-muted hover:text-fg">
                  Exportar
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-[0.2em] text-muted">
                    <th className="px-6 py-4">ID Pedido</th>
                    <th className="px-6 py-4">Cliente</th>
                    <th className="px-6 py-4">Data</th>
                    <th className="px-6 py-4">Total</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Ações</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/5">
                  {ORDERS.map((order) => (
                    <tr key={order.id} className="hover:bg-white/5">
                      <td className="px-6 py-4 font-mono text-sm text-fg">
                        {order.id}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold text-fg">
                            {order.initials}
                          </div>
                          <span className="text-sm text-fg">{order.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-muted">{order.time}</td>
                      <td className="px-6 py-4 font-semibold text-fg">
                        {order.total}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[10px] font-semibold uppercase ${
                            order.tone === "accent"
                              ? "border-accent/30 bg-accent/10 text-accent"
                              : order.tone === "blue"
                              ? "border-blue-500/30 bg-blue-500/10 text-blue-300"
                              : order.tone === "yellow"
                              ? "border-yellow-500/30 bg-yellow-500/10 text-yellow-300"
                              : "border-white/20 bg-white/5 text-muted"
                          }`}
                        >
                          {order.tone === "accent" ? (
                            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                          ) : null}
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          className="text-muted hover:text-fg"
                          aria-label="Mais ações"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-4 md:flex-row md:items-center md:justify-between">
              <p className="text-xs text-muted">Mostrando 4 de 128 pedidos</p>
              <div className="flex gap-1">
                {["‹", "1", "2", "3", "›"].map((label, index) => (
                  <button
                    key={`${label}-${index}`}
                    className={`h-8 w-8 rounded border text-xs font-semibold ${
                      label === "1"
                        ? "border-accent bg-accent text-black"
                        : "border-white/10 text-muted hover:border-white/20 hover:text-fg"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#0F1511] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Vendas Hoje
              </p>
              <div className="mt-3 flex items-end gap-3">
                <h3 className="text-2xl font-semibold text-fg">R$ 3.840,00</h3>
                <span className="flex items-center gap-1 text-xs font-semibold text-accent">
                  +12% <TrendingUp className="h-3 w-3" />
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0F1511] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Pedidos Novos
              </p>
              <div className="mt-3 flex items-end gap-3">
                <h3 className="text-2xl font-semibold text-fg">42</h3>
                <span className="flex items-center gap-1 text-xs font-semibold text-accent">
                  +5 <PlusCircle className="h-3 w-3" />
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0F1511] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Taxa de Conversão
              </p>
              <div className="mt-3 flex items-end gap-3">
                <h3 className="text-2xl font-semibold text-fg">3.4%</h3>
                <span className="flex items-center gap-1 text-xs font-semibold text-muted">
                  -0.2% <TrendingDown className="h-3 w-3" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

