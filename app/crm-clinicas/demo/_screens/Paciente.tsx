import {
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileImage,
  Flag,
  ImagePlus,
  Mail,
  MessageCircle,
  Phone,
  Search,
  TrendingUp,
} from "lucide-react";

export default function PacienteScreen() {
  return (
    <div className="flex min-h-[760px] overflow-hidden rounded-2xl border border-white/10 bg-[#10221d]">
      <aside className="w-full max-w-[380px] border-r border-white/10 bg-[#152e27]">
        <div className="border-b border-white/10 p-8">
          <div className="mb-4 flex justify-end">
            <button className="text-white/45 transition hover:text-white">•••</button>
          </div>
          <div className="mx-auto mb-4 w-fit">
            <div className="h-28 w-28 rounded-full bg-gradient-to-br from-[#13ecb6]/50 to-transparent p-1">
              <div className="flex h-full w-full items-center justify-center rounded-full border-4 border-[#152e27] bg-[#10221d] text-2xl font-bold text-white">
                AS
              </div>
            </div>
          </div>
          <h2 className="text-center text-xl font-bold text-white">Ana Silva</h2>
          <p className="mb-4 text-center text-sm font-medium text-[#13ecb6]">Yamaji ID: #4928</p>
          <div className="mb-6 flex justify-center gap-3">
            {[Phone, MessageCircle, Mail].map((Icon, idx) => (
              <button
                key={idx}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition hover:bg-[#13ecb6] hover:text-[#10221d]"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d1c18]/70 p-4">
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#13ecb6]/10 blur-2xl" />
            <div className="mb-2 flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/45">AI Retention Score</p>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">92</span>
                  <span className="text-sm text-white/45">/100</span>
                </div>
              </div>
              <span className="inline-flex items-center rounded-full bg-[#13ecb6]/10 px-2 py-1 text-xs text-[#13ecb6]">
                <TrendingUp className="mr-1 h-3.5 w-3.5" />
                +20pts
              </span>
            </div>
            <div className="mb-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[92%] rounded-full bg-[#13ecb6]" />
            </div>
            <p className="text-xs text-white/45">High probability of return. Last visit 12 days ago.</p>
          </div>
        </div>

        <div className="space-y-6 p-6">
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.15em] text-white/45">Patient Details</h3>
            <div className="space-y-2 text-sm">
              {[
                ["Age / Gender", "34 y.o / Female"],
                ["Occupation", "Architect"],
                ["City", "São Paulo, SP"],
                ["First Visit", "Aug 14, 2023"],
              ].map((row) => (
                <div key={row[0]} className="flex items-center justify-between border-b border-white/10 py-2">
                  <span className="text-white/55">{row[0]}</span>
                  <span className="text-white">{row[1]}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-white/45">Financial Overview</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/10 bg-[#0d1c18]/60 p-3">
                <p className="text-[10px] uppercase tracking-wide text-white/45">LTV Estimado</p>
                <p className="text-lg font-bold text-white">R$ 14.8k</p>
                <p className="mt-1 text-[10px] text-green-400">+12% vs avg</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#0d1c18]/60 p-3">
                <p className="text-[10px] uppercase tracking-wide text-white/45">Ticket Médio</p>
                <p className="text-lg font-bold text-white">R$ 1.250</p>
                <p className="mt-1 text-[10px] text-white/45">Total: 12 visits</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <section className="flex min-w-0 flex-1 flex-col bg-[#10221d]">
        <header className="flex flex-col gap-4 border-b border-white/10 bg-[#10221d]/95 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-purple-500/25 bg-purple-500/20 px-3 py-1 text-xs text-purple-300">
              Retorno
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/25 bg-amber-500/20 px-3 py-1 text-xs text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Priority: High
            </span>
            <span className="rounded-full border border-blue-500/25 bg-blue-500/20 px-3 py-1 text-xs text-blue-300">
              Origin: Instagram
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/40" />
              <input
                className="w-64 rounded-lg border border-white/15 bg-[#152e27] py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/35"
                placeholder="Search history..."
              />
            </div>
            <button className="rounded-lg p-2 text-white/50 transition hover:bg-white/5 hover:text-white">
              <BarChart3 className="h-4 w-4" />
            </button>
          </div>
        </header>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-8 overflow-auto p-6 lg:grid-cols-3">
          <div className="relative space-y-8 lg:col-span-2">
            <div className="border-b border-white/10">
              <div className="flex flex-wrap gap-6">
                <button className="inline-flex items-center gap-2 border-b-2 border-[#13ecb6] pb-3 text-sm font-medium text-[#13ecb6]">
                  <Clock3 className="h-4 w-4" /> Timeline
                </button>
                <button className="inline-flex items-center gap-2 border-b-2 border-transparent pb-3 text-sm text-white/50 transition hover:text-white">
                  <CheckCircle2 className="h-4 w-4" /> Consultations
                </button>
                <button className="inline-flex items-center gap-2 border-b-2 border-transparent pb-3 text-sm text-white/50 transition hover:text-white">
                  <CalendarDays className="h-4 w-4" /> Financials
                </button>
              </div>
            </div>

            <div className="relative pl-12 before:absolute before:bottom-0 before:left-[23px] before:top-0 before:w-0.5 before:bg-[#1e3f36]">
              {[
                {
                  date: "Today, 10:30 AM",
                  ago: "2h ago",
                  title: "Completed Physiotherapy Session 3/10",
                  text: "Patient reported significant improvement in lumbar mobility.",
                  status: "Completed",
                  active: true,
                },
                {
                  date: "Yesterday, 14:00 PM",
                  title: "Appointment Reminder Sent",
                  text: "Automated System via API",
                },
                {
                  date: "Oct 12, 2023",
                  title: "Budget Approved: Facial Harmonization",
                  text: "Botox (3 regions) + Skinbooster. Payment method: Credit Card (3x).",
                },
                {
                  date: "Aug 14, 2023",
                  title: "Patient created via Instagram Lead Form",
                  text: "",
                },
              ].map((item, idx) => (
                <div key={item.title} className="relative mb-8">
                  <div className="absolute -left-[39px] top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#1e3f36] bg-[#152e27]">
                    {idx === 0 ? <span className="h-2 w-2 animate-pulse rounded-full bg-[#13ecb6]" /> : <Flag className="h-3 w-3 text-white/45" />}
                  </div>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className={idx === 0 ? "text-sm font-semibold text-[#13ecb6]" : "text-sm font-semibold text-white"}>
                      {item.date}
                    </span>
                    {item.ago ? <span className="text-xs text-white/45">{item.ago}</span> : null}
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#152e27] p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <h4 className="font-medium text-white">{item.title}</h4>
                      {item.status ? (
                        <span className="rounded bg-green-500/10 px-2 py-1 text-xs text-green-400">{item.status}</span>
                      ) : null}
                    </div>
                    {item.text ? <p className="text-sm text-white/60">{item.text}</p> : null}
                    {idx === 0 ? (
                      <div className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#0d1c18] p-2 pr-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-white/10">
                          <FileImage className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-white">Posture_Analysis.jpg</span>
                          <span className="text-[10px] text-white/45">2.4 MB</span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#152e27] p-5">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Pinned Note</h3>
              <div className="mb-4 rounded-xl border border-yellow-500/10 bg-yellow-500/5 p-3">
                <p className="text-sm text-yellow-200/80">
                  Patient has sensitivity to lidocaine. Use alternative anesthetic.
                </p>
              </div>
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-white">Next Steps</h3>
              <div className="space-y-2 text-sm text-white/75">
                <label className="flex items-start gap-3 rounded-lg p-2 transition hover:bg-white/5">
                  <input type="checkbox" className="mt-1 rounded border-white/20 bg-[#0d1c18] text-[#13ecb6]" />
                  Send post-op care PDF
                </label>
                <label className="flex items-start gap-3 rounded-lg p-2 transition hover:bg-white/5">
                  <input type="checkbox" className="mt-1 rounded border-white/20 bg-[#0d1c18] text-[#13ecb6]" />
                  Schedule return for Oct 30
                </label>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#152e27] p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold uppercase tracking-wide text-white">Gallery</h3>
                <button className="text-xs text-[#13ecb6] transition hover:underline">View All</button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="aspect-square rounded-lg border border-white/10 bg-[#0d1c18] opacity-80 transition hover:opacity-100"
                  />
                ))}
                <button className="flex aspect-square items-center justify-center rounded-lg border border-white/10 bg-[#0d1c18] text-white/45 transition hover:bg-white/5 hover:text-white">
                  <ImagePlus className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
