import Link from "next/link";
import {
  Bell,
  PackageCheck,
  Package,
  Truck,
  Home,
  Plus,
  Pencil,
  CreditCard,
  Settings,
  MessageCircle,
} from "lucide-react";

export default function CommerceDemoCliente() {
  return (
    <main className="bg-[#0A0A0B] text-fg overflow-x-hidden">
      <section className="px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Header */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0 space-y-2">
              <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                Área do Cliente
              </h1>
              <p className="text-sm text-muted md:text-base">
                Olá, <span className="text-fg font-medium">Hiroshi Yamaji</span>.
                Você acompanha tudo em tempo real.
              </p>
            </div>
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_18px_rgba(0,255,163,0.35)] sm:w-auto">
              <MessageCircle className="h-4 w-4" />
              Suporte / WhatsApp
            </button>
          </div>

          {/* Order Tracking */}
          <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-lg font-semibold">
                  Acompanhamento do Pedido #88219
                </h2>
                <p className="text-sm text-muted">
                  Previsão de entrega:{" "}
                  <span className="text-accent">Amanhã, 14 de Outubro</span>
                </p>
              </div>
              <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Em trânsito
              </span>
            </div>

            <div className="relative overflow-x-auto -mx-4 sm:mx-0">
              <div className="relative min-w-[560px] px-4 sm:px-0">
                <div className="absolute top-5 left-0 h-1 w-full rounded-full bg-white/10" />
                <div className="absolute top-5 left-0 h-1 w-[66%] rounded-full bg-accent shadow-[0_0_8px_rgba(0,255,163,0.6)]" />
                <div className="relative flex justify-between gap-4">
                  {[
                    {
                      label: "Pedido recebido",
                      time: "12 Out, 10:30",
                      icon: PackageCheck,
                    },
                    {
                      label: "Separando",
                      time: "12 Out, 14:15",
                      icon: Package,
                    },
                    {
                      label: "Enviado",
                      time: "Em trânsito",
                      icon: Truck,
                      active: true,
                    },
                    {
                      label: "Entregue",
                      time: "Aguardando",
                      icon: Home,
                      muted: true,
                    },
                  ].map((step) => {
                    const Icon = step.icon;
                    return (
                      <div
                        key={step.label}
                        className="flex flex-1 flex-col items-center text-center"
                      >
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-full text-background-dark transition ${
                            step.muted
                              ? "border-2 border-white/20 bg-white/5 text-white/40"
                              : "bg-accent text-black shadow-[0_0_12px_rgba(0,255,163,0.5)]"
                          }`}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <div className="mt-4">
                          <p
                            className={`text-sm font-semibold ${
                              step.muted ? "text-muted" : "text-fg"
                            }`}
                          >
                            {step.label}
                          </p>
                          <p
                            className={`text-xs ${
                              step.active ? "text-accent" : "text-muted"
                            }`}
                          >
                            {step.time}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Content Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Orders */}
            <div className="lg:col-span-2 space-y-4 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Histórico de Pedidos</h3>
                <button className="text-sm font-semibold text-accent hover:underline">
                  Ver todos
                </button>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="overflow-x-auto -mx-4 sm:mx-0">
                  <table className="w-full min-w-[720px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-[0.2em] text-muted">
                        <th className="px-6 py-4">ID do Pedido</th>
                        <th className="px-6 py-4 hidden sm:table-cell">Data</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        {
                          id: "#88219",
                          date: "12/10/2023",
                          status: "Processando",
                          tone: "blue",
                          total: "R$ 1.250,00",
                        },
                        {
                          id: "#87902",
                          date: "05/10/2023",
                          status: "Entregue",
                          tone: "accent",
                          total: "R$ 490,00",
                        },
                        {
                          id: "#87541",
                          date: "28/09/2023",
                          status: "Entregue",
                          tone: "accent",
                          total: "R$ 2.890,00",
                        },
                        {
                          id: "#87120",
                          date: "15/09/2023",
                          status: "Cancelado",
                          tone: "red",
                          total: "R$ 120,50",
                        },
                      ].map((row) => (
                        <tr key={row.id} className="hover:bg-white/5">
                          <td className="px-6 py-4 font-medium text-fg">
                            {row.id}
                          </td>
                          <td className="px-6 py-4 text-muted hidden sm:table-cell">
                            {row.date}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                                row.tone === "blue"
                                  ? "border-blue-500/30 bg-blue-500/10 text-blue-300"
                                  : row.tone === "red"
                                  ? "border-red-500/30 bg-red-500/10 text-red-300"
                                  : "border-accent/30 bg-accent/10 text-accent"
                              }`}
                            >
                              {row.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right font-semibold text-fg">
                            {row.total}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Side Column */}
            <div className="space-y-8 min-w-0">
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Endereços</h3>
                  <button
                    className="text-muted hover:text-accent"
                    aria-label="Adicionar endereço"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 space-y-4">
                  <div className="relative rounded-xl border border-accent/30 bg-white/5 p-4">
                    <button
                      className="absolute right-3 top-3 text-muted hover:text-fg"
                      aria-label="Editar endereço"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      Principal
                    </span>
                    <p className="mt-2 text-sm font-semibold text-fg">
                      Escritório Central
                    </p>
                    <p className="text-xs text-muted">
                      Av. Paulista, 1000 - Bela Vista
                    </p>
                    <p className="text-xs text-muted">
                      São Paulo, SP - 01310-100
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 opacity-70 hover:opacity-100">
                    <p className="text-sm font-semibold text-fg">
                      Depósito Norte
                    </p>
                    <p className="text-xs text-muted">
                      Rua dos Operários, 45 - Industrial
                    </p>
                    <p className="text-xs text-muted">
                      Joinville, SC - 89200-000
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Métodos de Pagamento</h3>
                  <button
                    className="text-muted hover:text-accent"
                    aria-label="Configurar pagamentos"
                  >
                    <Settings className="h-5 w-5" />
                  </button>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 space-y-3">
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-zinc-800 text-white">
                        <CreditCard className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-fg">
                          Visa Final 4421
                        </p>
                        <p className="text-xs text-muted">Expira em 12/28</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted">•••</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded bg-accent/20 text-xs font-bold text-accent">
                        PIX
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-fg">
                          Chave Aleatória
                        </p>
                        <p className="text-xs text-muted">****-****-****</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted">•••</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-muted">
                  Perfil
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-accent2/40 text-sm font-semibold text-fg">
                    HY
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-fg break-words">
                      Hiroshi Yamaji
                    </p>
                    <p className="text-xs text-muted">Cliente premium</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comfort Block */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-fg">
                  Tudo sob controle, sem planilhas.
                </h3>
                <p className="text-sm text-muted">
                  Cliente acompanha pedidos. Você acompanha vendas. Tudo em tempo
                  real.
                </p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  href="/e-commerce/demo/dono"
                  className="inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-fg hover:bg-white/10 sm:w-auto"
                >
                  Ver Painel do Dono
                </Link>
                <Link
                  href="/e-commerce/demo/dashboard"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-black sm:w-auto"
                >
                  Ver Dashboard
                </Link>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-white/10 py-10 text-center text-xs text-muted">
            © Yamaji Studio • Demonstração Yamaji E-commerce
          </footer>
        </div>
      </section>
    </main>
  );
}


