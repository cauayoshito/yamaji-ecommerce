import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Download,
  Filter,
  Info,
  Lock,
  MoreHorizontal,
  RefreshCcw,
  Search,
  Settings,
  XCircle,
} from "lucide-react";

export default function AgendaScreen() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Activity Logs & Audit Trail
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-white/55">
            Monitor system access, track user actions, and ensure HIPAA compliance across your
            organization.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#162e27] px-4 py-2 text-sm text-white/75 transition hover:bg-white/5">
            <Settings className="h-4 w-4" />
            Configure Log Rules
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-[#13ecb6]/40 bg-transparent px-4 py-2 text-sm text-[#13ecb6] transition hover:bg-[#13ecb6]/10">
            <Download className="h-4 w-4" />
            Export CSV Report
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          ["Total Events (24h)", "2,845", "+12%"],
          ["Critical Actions", "14", "Low"],
          ["Failed Logins", "3", "Attention"],
          ["Active Users", "42", "Now"],
        ].map((card) => (
          <div key={card[0]} className="rounded-lg border border-white/10 bg-[#162e27] p-4 shadow-sm">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/45">{card[0]}</h3>
              <span className="rounded bg-[#13ecb6]/10 px-2 py-0.5 text-xs font-medium text-[#13ecb6]">
                {card[2]}
              </span>
            </div>
            <p className="font-mono text-2xl font-bold text-white">{card[1]}</p>
          </div>
        ))}
      </div>

      <div className="rounded-t-xl border border-white/10 bg-[#162e27] p-4">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/40" />
              <input
                className="w-full rounded-lg border border-white/15 bg-[#10221d] py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/40 focus:border-[#13ecb6] focus:outline-none"
                placeholder="Search IP, User, Action..."
              />
            </div>
            {["Last 7 Days", "All Users", "Action Type"].map((f) => (
              <button
                key={f}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#10221d] px-3 py-2.5 text-sm text-white/70 transition hover:border-[#13ecb6]/50"
              >
                {f === "Last 7 Days" ? <CalendarDays className="h-4 w-4 text-white/45" /> : null}
                {f === "All Users" ? <Search className="h-4 w-4 text-white/45" /> : null}
                {f === "Action Type" ? <Filter className="h-4 w-4 text-white/45" /> : null}
                {f}
                <ChevronDown className="h-3.5 w-3.5 text-white/45" />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-lg p-2 text-white/50 transition hover:bg-white/5 hover:text-white">
              <RefreshCcw className="h-4 w-4" />
            </button>
            <div className="flex rounded-lg border border-white/15 bg-[#10221d] p-1 text-xs">
              <button className="rounded bg-[#162e27] px-3 py-1 font-semibold text-[#13ecb6]">List</button>
              <button className="px-3 py-1 text-white/50 transition hover:text-white">Grid</button>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-b-xl border-x border-b border-white/10 bg-[#162e27] shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px] text-left">
            <thead>
              <tr className="border-b border-white/10 bg-[#10221d]">
                {["", "User", "Action", "Target / Patient", "Date & Time", "IP Address", "Status", ""].map(
                  (h, i) => (
                    <th
                      key={`${h}-${i}`}
                      className={[
                        "px-6 py-4 text-xs uppercase tracking-wider text-white/45",
                        i === 6 ? "text-center" : "",
                        i === 4 || i === 5 ? "text-right" : "",
                      ].join(" ")}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-sm">
              {[
                {
                  user: "Sarah Jensen",
                  role: "Administrator",
                  action: "Accessed Financials",
                  target: "Report: Q3 Revenue",
                  date: "2023-10-24 14:32:05",
                  ip: "192.168.1.45",
                  status: "Success",
                },
                {
                  user: "Dr. Mark Lee",
                  role: "Physiotherapist",
                  action: "Edited Patient Record",
                  target: "P-8821 (A. Silva)",
                  date: "2023-10-24 14:15:22",
                  ip: "10.0.0.12",
                  status: "Success",
                },
                {
                  user: "Unknown User",
                  role: "Suspicious Activity",
                  action: "Failed Login",
                  target: "System: Portal Auth",
                  date: "2023-10-24 13:12:00",
                  ip: "210.45.12.99",
                  status: "Failed",
                  critical: true,
                },
                {
                  user: "Emily Chen",
                  role: "Nurse Practitioner",
                  action: "Updated Treatment",
                  target: "P-9002 (K. West)",
                  date: "2023-10-24 12:55:40",
                  ip: "192.168.1.33",
                  status: "Success",
                },
              ].map((row) => (
                <tr key={`${row.user}-${row.date}`} className={row.critical ? "bg-red-500/5" : "hover:bg-[#13ecb6]/5"}>
                  <td className="px-6 py-3">
                    <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-[#10221d] text-[#13ecb6]" />
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                        {row.user
                          .split(" ")
                          .slice(0, 2)
                          .map((p) => p[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-medium text-white">{row.user}</div>
                        <div className="text-xs text-white/45">{row.role}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <span className="inline-flex items-center gap-2 rounded border border-white/10 bg-[#10221d] px-2.5 py-1 text-xs text-white/70">
                      {row.action === "Failed Login" ? <Lock className="h-3.5 w-3.5 text-red-400" /> : <span className="h-1.5 w-1.5 rounded-full bg-[#13ecb6]" />}
                      {row.action}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-white/70">{row.target}</td>
                  <td className="px-6 py-3 text-right font-mono text-xs text-white/50">{row.date}</td>
                  <td className="px-6 py-3 text-right font-mono text-xs text-white/45">{row.ip}</td>
                  <td className="px-6 py-3 text-center">
                    {row.status === "Failed" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 text-xs text-red-400">
                        <XCircle className="h-3.5 w-3.5" />
                        Failed
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#13ecb6]/25 bg-[#13ecb6]/10 px-2.5 py-0.5 text-xs text-[#13ecb6]">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Success
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3 text-right">
                    <button className="text-white/45 transition hover:text-white">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 bg-[#10221d] px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-white/45">
            Showing <span className="text-white">1</span> to <span className="text-white">10</span> of{" "}
            <span className="text-white">2,845</span> entries
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="hidden text-xs text-white/45 sm:inline">Rows per page:</span>
              <select className="rounded border border-white/15 bg-[#162e27] px-2 py-1 text-xs text-white">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </div>
            <div className="flex overflow-hidden rounded-lg border border-white/15 text-xs">
              <button className="border-r border-white/15 bg-[#162e27] px-3 py-1 text-white/50">Previous</button>
              <button className="border-r border-[#13ecb6] bg-[#13ecb6] px-3 py-1 text-[#10221d]">1</button>
              <button className="border-r border-white/15 bg-[#162e27] px-3 py-1 text-white/60">2</button>
              <button className="bg-[#162e27] px-3 py-1 text-white/50">Next</button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-white/40">
        © 2023 MedAudit Pro Inc. HIPAA Compliant System. Data retained for 7 years.
      </p>
    </div>
  );
}
