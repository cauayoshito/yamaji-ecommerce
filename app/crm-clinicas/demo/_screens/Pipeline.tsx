import {
  Bell,
  CheckCircle2,
  Filter,
  LayoutDashboard,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Shield,
  Stethoscope,
  UserCog,
  Users,
  Wallet,
} from "lucide-react";

function Toggle({ checked }: { checked?: boolean }) {
  return (
    <span
      className={[
        "relative inline-flex h-6 w-11 items-center rounded-full border transition",
        checked ? "border-[#13ecb6]/40 bg-[#13ecb6]" : "border-white/20 bg-zinc-700",
      ].join(" ")}
    >
      <span
        className={[
          "inline-block h-5 w-5 transform rounded-full bg-white transition",
          checked ? "translate-x-5" : "translate-x-0.5",
        ].join(" ")}
      />
    </span>
  );
}

export default function PipelineScreen() {
  return (
    <div className="flex min-h-[720px] overflow-hidden rounded-2xl border border-white/10 bg-[#10221d]">
      <aside className="hidden w-16 flex-col border-r border-white/10 bg-[#162e27]/30 pt-6 md:flex lg:w-64">
        <nav className="flex-1 space-y-1 px-4">
          {[
            { label: "Dashboard", icon: LayoutDashboard },
            { label: "Agenda", icon: Stethoscope },
            { label: "Pacientes", icon: Users },
            { label: "Users & Permissions", icon: UserCog, active: true },
            { label: "Financeiro", icon: Wallet },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href="#"
                className={[
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition",
                  item.active
                    ? "bg-[#13ecb6]/10 text-[#13ecb6]"
                    : "text-white/55 hover:bg-[#13ecb6]/10 hover:text-[#13ecb6]",
                ].join(" ")}
              >
                <Icon className="h-5 w-5" />
                <span className="hidden lg:block">{item.label}</span>
              </a>
            );
          })}
        </nav>
        <div className="border-t border-white/10 p-4">
          <div className="hidden rounded-lg border border-white/10 bg-[#10221d] p-3 lg:block">
            <p className="font-mono text-xs text-white/45">Instance ID: yc-prod-88291x</p>
          </div>
        </div>
      </aside>

      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex flex-col gap-4 p-6 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Team Members</h2>
              <p className="mt-1 text-sm text-white/55">
                Manage access and roles for your clinic staff.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg bg-[#13ecb6] px-5 py-2.5 text-sm font-semibold text-[#10221d] shadow-lg shadow-[#13ecb6]/20 transition hover:bg-[#13ecb6]/90">
              <Plus className="h-4 w-4" />
              Add New User
            </button>
          </div>

          <div className="flex gap-3 px-6 pb-4">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/40" />
              <input
                className="w-full rounded-lg border border-white/15 bg-[#162e27] py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/35 focus:border-[#13ecb6] focus:outline-none"
                placeholder="Search by name or email..."
              />
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#162e27] px-4 py-2.5 text-sm text-white/70 transition hover:border-[#13ecb6]">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>

          <div className="flex-1 overflow-auto px-6 pb-6">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#162e27]">
              <table className="w-full min-w-[760px] text-left">
                <thead>
                  <tr className="border-b border-white/10 bg-[#162e27]/70">
                    {["User", "Role", "Status", "Last Login"].map((h) => (
                      <th key={h} className="px-6 py-4 text-xs uppercase tracking-wider text-white/45">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-sm">
                  {[
                    {
                      name: "Sarah Silva",
                      email: "sarah.silva@yamaji.clinic",
                      role: "Recepção",
                      login: "2 mins ago",
                    },
                    {
                      name: "João Santos",
                      email: "joao.financeiro@yamaji.clinic",
                      role: "Financeiro",
                      login: "Yesterday",
                      selected: true,
                    },
                    {
                      name: "Dr. Pedro Costa",
                      email: "pedro.costa@yamaji.clinic",
                      role: "Profissional",
                      login: "3 days ago",
                    },
                    {
                      name: "Dr. Akira Yamaji",
                      email: "akira@yamaji.clinic",
                      role: "Admin",
                      login: "Now",
                    },
                  ].map((row) => (
                    <tr
                      key={row.email}
                      className={
                        row.selected
                          ? "border-l-4 border-[#13ecb6] bg-[#13ecb6]/10"
                          : "hover:bg-[#13ecb6]/5"
                      }
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                            {row.name
                              .split(" ")
                              .slice(0, 2)
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div>
                            <p className="font-medium text-white">{row.name}</p>
                            <p className="text-xs text-white/45">{row.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/75">
                          {row.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white/70">Active</td>
                      <td className="px-6 py-4 text-right text-white/50">{row.login}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <aside className="w-full border-l border-white/10 bg-[#162e27] lg:w-96">
          <div className="border-b border-white/10 p-6">
            <div className="mb-6 flex items-start justify-between">
              <h3 className="text-lg font-bold text-white">Permissions</h3>
              <div className="flex gap-2">
                <button className="rounded-lg p-1.5 text-white/45 transition hover:bg-white/5 hover:text-white">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
                <button className="rounded-lg p-1.5 text-white/45 transition hover:bg-white/5 hover:text-white">
                  <Bell className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white">
                JS
              </div>
              <h4 className="text-xl font-bold text-white">João Santos</h4>
              <select className="mt-3 w-48 rounded-lg border border-white/15 bg-[#10221d] px-3 py-2 text-sm text-white focus:border-[#13ecb6] focus:outline-none">
                <option>Recepção</option>
                <option>Financeiro</option>
                <option>Profissional</option>
                <option>Admin</option>
              </select>
            </div>
          </div>

          <div className="space-y-8 p-6">
            {[
              {
                title: "Clinical Access",
                icon: Stethoscope,
                items: [
                  { name: "Ver Agenda", desc: "Can view clinic schedule", on: true },
                  { name: "Editar Paciente", desc: "Modify patient records", on: false },
                ],
              },
              {
                title: "Financial",
                icon: Wallet,
                items: [
                  { name: "Acessar Financeiro", desc: "Full access to dashboard", on: true },
                  { name: "Emitir Nota Fiscal", desc: "Issue invoices", on: true },
                ],
              },
              {
                title: "System & Security",
                icon: Shield,
                items: [{ name: "Auditoria", desc: "View system logs", on: false }],
              },
            ].map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="space-y-4 border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                  <h5 className="flex items-center gap-2 text-xs uppercase tracking-wider text-white/45">
                    <Icon className="h-4 w-4" />
                    {group.title}
                  </h5>
                  {group.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="pr-4">
                        <p className="text-sm font-medium text-white">{item.name}</p>
                        <p className="mt-0.5 text-xs text-white/45">{item.desc}</p>
                      </div>
                      <Toggle checked={item.on} />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>

          <div className="border-t border-white/10 bg-[#10221d]/60 p-6">
            <button className="w-full rounded-lg bg-[#13ecb6] px-4 py-3 text-sm font-bold text-[#10221d] transition hover:bg-[#13ecb6]/90">
              Save Changes
            </button>
            <p className="mt-3 text-center text-xs text-white/45">Last edited by You, 2 mins ago</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
