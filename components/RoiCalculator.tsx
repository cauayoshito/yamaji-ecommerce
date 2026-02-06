"use client";

import { useState } from "react";

export default function RoiCalculator() {
  const [visitors, setVisitors] = useState("");
  const [ticket, setTicket] = useState("");
  const [conversion, setConversion] = useState(2); // % base de site ruim
  const [calc, setCalc] = useState<number | null>(null);

  const handleCalc = () => {
    const v = parseInt(visitors) || 0;
    const t = parseFloat(ticket) || 0;
    // simulação: site ruim converte 2%, Yamaji tripé converte 5%
    const leadsAtual = v * (conversion / 100);
    const leadsNovo = v * (5 / 100);
    const diff = (leadsNovo - leadsAtual) * t;
    setCalc(diff);
  };

  return (
    <section className="bg-bg">
      <div className="container py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="h2">Quanto você deixa na mesa?</h2>
          <p className="lead">
            Simule o impacto de um{" "}
            <span className="text-accent">site rápido</span>,{" "}
            <span className="text-accent2">ads inteligentes</span> e{" "}
            <span className="text-fg">IA 24/7</span>.
          </p>
        </div>

        <div className="mt-8 mx-auto max-w-lg rounded-xl border border-white/10 bg-black/40 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-muted">Visitantes/mês</label>
              <input
                type="number"
                value={visitors}
                onChange={(e) => setVisitors(e.target.value)}
                className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-fg placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="ex: 1000"
              />
            </div>
            <div>
              <label className="text-sm text-muted">Ticket médio (R$)</label>
              <input
                type="number"
                value={ticket}
                onChange={(e) => setTicket(e.target.value)}
                className="mt-1 w-full rounded-md border border-white/10 bg-black/30 px-3 py-2 text-sm text-fg placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="ex: 150"
              />
            </div>
          </div>

          <button
            onClick={handleCalc}
            className="btn btn-primary mt-6 w-full justify-center"
          >
            Calcular ROI
          </button>

          {calc !== null && (
            <div className="mt-6 rounded-lg bg-black/30 p-4 text-center">
              <p className="text-sm text-muted">Você pode estar perdendo até</p>
              <p className="mt-1 text-2xl font-display text-accent">
                R$ {calc.toLocaleString("pt-BR")}
              </p>
              <p className="mt-2 text-sm text-muted">
                em vendas todo mês sem um tripé Yamaji performando.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
