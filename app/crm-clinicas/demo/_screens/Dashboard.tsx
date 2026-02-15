import {
  Bell,
  CalendarPlus2,
  ChevronDown,
  Check,
  CircleDashed,
  DollarSign,
  Plus,
  Search,
  TrendingUp,
  UserPlus,
  Users,
} from "lucide-react";

export default function DashboardScreen() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Visão Geral</h2>
          <p className="mt-1 text-sm text-white/55">
            Bem-vindo de volta. Análise em tempo real da performance clínica.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#121214] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5">
            <UserPlus className="h-4 w-4 text-[#13ecb6]" />
            Novo Paciente
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-[#13ecb6] px-4 py-2 text-sm font-semibold text-black shadow-[0_0_20px_-8px_rgba(19,236,182,0.35)] transition hover:bg-[#13ecb6]/90">
            <CalendarPlus2 className="h-4 w-4" />
            Agendar Horário
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Agendamentos hoje",
            value: "14",
            badge: "+12% vs mês ant.",
            meta: "Ocupação: 85%",
            progress: 85,
            icon: CalendarPlus2,
            tone: "emerald",
          },
          {
            title: "CAC Estimado",
            value: "R$ 42,50",
            badge: "Estável",
            meta: "Target ideal: < R$ 50,00",
            progress: 70,
            icon: TrendingUp,
            tone: "blue",
          },
          {
            title: "Receita Recorrente Prevista",
            value: "R$ 28.4k",
            badge: "+8.5%",
            meta: "Baseado em pacotes ativos",
            progress: 78,
            icon: DollarSign,
            tone: "purple",
          },
          {
            title: "Taxa de Retorno 30d",
            value: "68%",
            badge: "2.1%",
            meta: "No-show reduction: -18%",
            progress: 68,
            icon: CircleDashed,
            tone: "orange",
          },
        ].map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#121214] shadow-lg shadow-black/20 transition hover:border-[#13ecb6]/40"
            >
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-white/5 p-2.5">
                    <Icon className="h-5 w-5 text-[#13ecb6]" />
                  </div>
                  <span className="rounded bg-[#13ecb6]/10 px-2 py-0.5 text-xs font-medium text-[#13ecb6]">
                    {card.badge}
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="truncate text-sm font-medium text-white/55">{card.title}</h3>
                  <p className="mt-1 text-2xl font-bold tracking-tight text-white">{card.value}</p>
                </div>
              </div>
              <div className="border-t border-white/5 bg-white/5 px-5 py-2.5">
                <div className="flex items-center justify-between text-xs text-white/50">
                  <span>{card.meta}</span>
                  <span className="h-1.5 w-16 overflow-hidden rounded-full bg-white/10">
                    <span className="block h-full rounded-full bg-[#13ecb6]" style={{ width: `${card.progress}%` }} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-[#121214] p-6 shadow-lg shadow-black/20 xl:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Receita por Canal</h3>
              <p className="mt-1 text-sm text-white/50">
                Atribuição de receita baseada na origem do lead
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="rounded-lg p-1.5 text-white/50 transition hover:bg-white/5 hover:text-white">
                <Bell className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#0A0A0B] p-2 text-xs text-white/70">
                Últimos 30 dias
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="flex h-64 items-end justify-between gap-4 px-2">
            {[
              { label: "Google Ads", share: "42%", h: 85, val: "R$ 15.2k" },
              { label: "Instagram", share: "28%", h: 68, val: "R$ 8.9k" },
              { label: "Indicação", share: "15%", h: 52, val: "R$ 5.4k" },
              { label: "Parcerias", share: "10%", h: 36, val: "R$ 3.1k" },
              { label: "Outros", share: "5%", h: 28, val: "R$ 1.8k" },
            ].map((bar) => (
              <div key={bar.label} className="group flex flex-1 flex-col justify-end">
                <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-t bg-[#0A0A0B]">
                  <div
                    className="relative rounded-t bg-[#13ecb6]/20 transition-all group-hover:bg-[#13ecb6]/30"
                    style={{ height: `${bar.h}%` }}
                  >
                    <div className="absolute bottom-0 h-[88%] w-full rounded-t bg-[#13ecb6]/75" />
                  </div>
                  <div className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded border border-white/10 bg-[#0A0A0B] px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
                    {bar.val}
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs font-medium text-white">{bar.label}</p>
                  <p className="text-[10px] text-white/45">{bar.share}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#121214] shadow-lg shadow-black/20">
          <div className="flex items-center justify-between border-b border-white/10 bg-white/5 p-6">
            <div>
              <h3 className="text-lg font-semibold text-white">Hot Leads</h3>
              <p className="mt-1 text-xs text-white/45">Alta propensão de fechamento</p>
            </div>
            <button className="rounded border border-[#13ecb6]/25 bg-[#13ecb6]/10 px-2 py-1 text-xs text-[#13ecb6]">
              Ver pipeline
            </button>
          </div>
          <ul className="divide-y divide-white/10">
            {[
              { initials: "AS", name: "Ana Silva", info: "Interesse: Botox Full Face", score: "98", label: "Há 2h" },
              { initials: "CR", name: "Carlos Ruiz", info: "Recorrente: Fisioterapia", score: "85", label: "Ontem" },
              { initials: "MJ", name: "Maria Julia", info: "Avaliação: Pilates", score: "72", label: "Há 3d" },
              { initials: "RL", name: "Ricardo Lima", info: "Retorno: Harmonização", score: "VIP", label: "Há 4h" },
            ].map((lead) => (
              <li key={lead.name} className="group cursor-pointer border-l-2 border-transparent p-4 transition hover:border-[#13ecb6] hover:bg-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-gradient-to-tr from-zinc-800 to-zinc-700 text-xs font-semibold text-white">
                      {lead.initials}
                      {lead.score === "98" ? (
                        <span className="absolute -bottom-1 -right-1 rounded-full border border-[#121214] bg-[#13ecb6] p-0.5">
                          <Check className="h-2.5 w-2.5 text-black" />
                        </span>
                      ) : null}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white transition group-hover:text-[#13ecb6]">{lead.name}</p>
                      <p className="text-xs text-white/45">{lead.info}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="rounded border border-[#13ecb6]/25 bg-[#13ecb6]/10 px-2 py-0.5 text-[10px] font-bold text-[#13ecb6]">
                      SCORE {lead.score}
                    </span>
                    <span className="mt-1 text-[10px] text-white/45">{lead.label}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs text-white/50">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <span className="font-semibold text-white">System Status:</span> Operational • v2.4.0
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Multi-tenant", icon: Users },
              { label: "RBAC", icon: Check },
              { label: "Audit Logs", icon: Bell },
              { label: "SLA 99.9%", icon: TrendingUp },
            ].map((chip) => {
              const Icon = chip.icon;
              return (
                <span
                  key={chip.label}
                  className="inline-flex items-center rounded-full border border-white/10 bg-[#121214] px-2.5 py-1 text-xs text-white/55"
                >
                  <Icon className="mr-1.5 h-3.5 w-3.5 text-[#13ecb6]" />
                  {chip.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
