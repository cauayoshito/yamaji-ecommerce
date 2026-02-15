import Link from "next/link";

export default function DashboardPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 rounded-full bg-accent/20 blur-[120px]" />
      <div className="rounded-2xl border border-white/10 bg-[#0F1511] p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Dashboard de Vendas
            </p>
            <p className="mt-2 text-2xl font-semibold text-fg">R$ 12.480</p>
          </div>
          <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            +18%
          </span>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Pedidos", value: "42" },
            { label: "Ticket", value: "R$ 215" },
            { label: "Conversao", value: "3.8%" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-fg">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 overflow-hidden">
          <svg
            className="h-28 w-full"
            viewBox="0 0 300 80"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 L50,40 L100,55 L150,20 L200,35 L250,15 L300,30"
              fill="none"
              stroke="#0df259"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0,60 L50,40 L100,55 L150,20 L200,35 L250,15 L300,30 L300,80 L0,80 Z"
              fill="rgba(13,242,89,0.12)"
            />
          </svg>
          <div className="mt-3 flex items-center justify-between text-xs text-muted">
            <span>Seg</span>
            <span>Qua</span>
            <span>Sex</span>
            <span>Dom</span>
          </div>
        </div>

        <Link
          href="/e-commerce/demo/dashboard"
          className="mt-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-black"
        >
          Ver demo
        </Link>
      </div>
    </div>
  );
}

