import {
  ArrowRight,
  Camera,
  ChevronDown,
  Leaf,
  Lightbulb,
  Plus,
  UserRound,
} from "lucide-react";

export default function SegurancaScreen() {
  return (
    <div className="relative min-h-[760px] overflow-hidden rounded-2xl border border-white/10 bg-[#102220]">
      <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />

      <div className="relative z-10 mx-auto max-w-2xl px-4 py-10">
        <div className="overflow-hidden rounded-lg border border-white/10 bg-[#162e2b]/95 shadow-2xl">
          <div className="border-b border-white/10 bg-[#0d1c1a]/60 p-8">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h1 className="mb-2 text-2xl font-bold text-white tracking-tight">Configure sua clínica</h1>
                <p className="text-sm font-medium text-white/50">Passo 1 de 3: Cadastre sua equipe</p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#13ecb6]/20 text-[#13ecb6]">
                <Leaf className="h-5 w-5" />
              </div>
            </div>

            <ol className="flex items-center">
              <li className="relative pr-8 sm:pr-20">
                <div className="absolute inset-0 flex items-center">
                  <div className="h-0.5 w-full bg-[#13ecb6]/20" />
                </div>
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#13ecb6] bg-[#13ecb6] text-[#102220]">
                  <UserRound className="h-4 w-4" />
                </span>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-[#13ecb6]">
                  Profissionais
                </span>
              </li>
              {["2", "3"].map((n, idx) => (
                <li key={n} className={idx === 0 ? "relative pr-8 sm:pr-20" : "relative"}>
                  {idx === 0 ? (
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-0.5 w-full bg-white/10" />
                    </div>
                  ) : null}
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/20 bg-[#162e2b] text-xs font-semibold text-white/50">
                    {n}
                  </span>
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white/50">
                    {n === "2" ? "Serviços" : "Horários"}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h2 className="mb-1 text-lg font-semibold text-white">Quem trabalha com você?</h2>
              <p className="text-sm text-white/55">
                Adicione os profissionais que atendem na sua clínica para gerenciar suas agendas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border border-white/10 bg-[#0d1c1a]/30 p-5 focus-within:border-[#13ecb6]/50">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white/50">Nome do Profissional</label>
                    <input
                      className="w-full rounded-lg border border-white/10 bg-[#162e2b] px-3 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#13ecb6] focus:outline-none"
                      placeholder="Ex: Dra. Juliana Costa"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-white/50">Especialidade</label>
                    <div className="relative">
                      <select className="w-full appearance-none rounded-lg border border-white/10 bg-[#162e2b] px-3 py-2.5 text-sm text-white focus:border-[#13ecb6] focus:outline-none">
                        <option>Selecione...</option>
                        <option>Fisioterapia</option>
                        <option>Dermatologia</option>
                        <option>Estética Facial</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-2 top-2.5 h-4 w-4 text-white/50" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#162e2b] text-white/50">
                    <Camera className="h-4 w-4" />
                  </span>
                  <button className="text-sm font-medium text-[#13ecb6] transition hover:text-[#13ecb6]/80">
                    Adicionar foto (opcional)
                  </button>
                  <div className="flex-1" />
                  <button className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10">
                    <Plus className="h-4 w-4" />
                    Adicionar à lista
                  </button>
                </div>
              </div>

              <button className="group flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-white/20 py-3 text-sm text-white/55 transition hover:border-[#13ecb6]/40 hover:bg-[#13ecb6]/5 hover:text-[#13ecb6]">
                <Plus className="h-4 w-4 transition group-hover:scale-110" />
                Cadastrar outro profissional
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 bg-[#0d1c1a]/60 px-8 py-5">
            <button className="text-sm font-medium text-white/50 transition hover:text-white">Pular configuração</button>
            <div className="flex gap-3">
              <button className="rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/5">
                Voltar
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg bg-[#13ecb6] px-6 py-2.5 text-sm font-semibold text-[#102220] transition hover:bg-[#13ecb6]/90">
                Próximo passo
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-4 flex max-w-lg items-start gap-3 rounded-lg border border-[#13ecb6]/20 bg-[#13ecb6]/10 p-4">
          <Lightbulb className="mt-0.5 h-4 w-4 text-[#13ecb6]" />
          <p className="text-sm text-[#13ecb6]/90">
            <span className="font-bold">Dica:</span> Você pode configurar as permissões de acesso para
            cada profissional mais tarde nas configurações do sistema.
          </p>
        </div>
      </div>
    </div>
  );
}
