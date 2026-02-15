import { BarChart3, MapPinned, TrendingUp, Users2 } from "lucide-react";
import { kpis } from "./data";

const icons = [Users2, TrendingUp, MapPinned, BarChart3];

export default function KpiGrid() {
  return (
    <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {kpis.map((card, index) => {
        const Icon = icons[index];

        return (
          <div
            key={card.title}
            className="relative overflow-hidden rounded-xl border border-accent/10 bg-[#142c26]/70 p-6 shadow-lg backdrop-blur"
          >
            <div className="pointer-events-none absolute right-0 top-0 p-4 opacity-10">
              <Icon className="h-10 w-10 text-accent" aria-hidden="true" />
            </div>

            <dt className="truncate text-sm font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {card.title}
            </dt>
            <dd className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
              {card.value}
            </dd>
            <div className="mt-2 flex items-baseline text-sm">
              <span className="font-semibold text-accent">{card.foot}</span>
              <span className="ml-2 text-slate-500 dark:text-slate-500">{card.sub}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
