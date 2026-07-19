import { Check, Clock3, QrCode, Search, ShoppingBag, UserRound } from "lucide-react";
import type { EcosystemSolution, SegmentSlug } from "@/data/ecosystem";
import { cn } from "@/lib/utils";
import DeviceFrame from "./DeviceFrame";

type Props = {
  solution: EcosystemSolution;
  compact?: boolean;
  className?: string;
};

export default function SolutionMockup({ solution, compact = false, className }: Props) {
  return (
    <div
      className={cn(
        "ecosystem-mockup relative isolate overflow-hidden rounded-[1.75rem] border border-white/[0.09] bg-[#090C10]",
        compact ? "min-h-[250px] p-4" : "min-h-[430px] p-5 sm:p-7",
        className
      )}
      style={{
        "--segment-accent": solution.accent,
        "--segment-soft": solution.accentSoft,
      } as React.CSSProperties}
      role="img"
      aria-label={`Demonstração da experiência ${solution.name}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(circle at 72% 18%, var(--segment-soft), transparent 34%), linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)",
          backgroundSize: "auto, 28px 28px, 28px 28px",
        }}
      />

      <div className="relative z-10 mb-4 flex items-center justify-between">
        <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.16em] text-white/45">
          Demonstração da experiência
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-white/35">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--segment-accent)] motion-safe:animate-pulse" />
          fluxo ativo
        </span>
      </div>

      {solution.slug === "studio" && <StudioMockup compact={compact} />}
      {solution.slug === "eats" && <EatsMockup compact={compact} />}
      {solution.slug === "fit" && <FitMockup compact={compact} />}
      {solution.slug === "legal" && <LegalMockup compact={compact} />}
    </div>
  );
}

function StudioMockup({ compact }: { compact: boolean }) {
  return (
    <div className="relative z-10 grid items-end gap-3 sm:grid-cols-[0.72fr_1.28fr] sm:gap-4">
      <DeviceFrame label="Loja mobile" kind="phone" className={cn("relative z-20 w-[62%] justify-self-center sm:w-auto", compact ? "h-[178px]" : "h-[326px]")}> 
        <div className="space-y-3 p-3">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold text-white">NOVA</span>
            <ShoppingBag className="h-3 w-3 text-white/50" />
          </div>
          <div className={cn("rounded-lg bg-gradient-to-br from-[#1d2628] to-[#101417]", compact ? "h-12" : "h-24")} />
          <div>
            <p className="text-[9px] text-white/40">Coleção essencial</p>
            <p className="text-[11px] font-medium text-white">Bolsa Minimal</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-semibold text-[var(--segment-accent)]">R$ 189</span>
            <span className="rounded-full bg-[var(--segment-accent)] px-2 py-1 text-[8px] font-bold text-black">Comprar</span>
          </div>
        </div>
      </DeviceFrame>

      <DeviceFrame label="Painel de pedidos" className={cn(compact ? "h-[158px]" : "h-[286px]")}> 
        <div className="p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[9px] text-white/35">Pedidos de hoje</p>
              <p className="text-sm font-semibold text-white">Operação</p>
            </div>
            <span className="rounded-md bg-[var(--segment-soft)] px-2 py-1 text-[8px] text-[var(--segment-accent)]">ao vivo</span>
          </div>
          <div className="space-y-2">
            {[
              ["#1048", "Novo pedido", "R$ 189"],
              ["#1047", "Separando", "R$ 242"],
              ["#1046", "Pronto", "R$ 96"],
            ].slice(0, compact ? 2 : 3).map(([id, status, value], index) => (
              <div key={id} className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.025] p-2.5">
                <span className={cn("h-2 w-2 rounded-full", index === 0 ? "bg-[var(--segment-accent)] motion-safe:animate-pulse" : "bg-white/15")} />
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-medium text-white">{id}</p>
                  <p className="truncate text-[8px] text-white/35">{status}</p>
                </div>
                <span className="text-[9px] text-white/60">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </DeviceFrame>
    </div>
  );
}

function EatsMockup({ compact }: { compact: boolean }) {
  return (
    <div className="relative z-10 grid items-center gap-3 sm:grid-cols-[0.82fr_1.18fr] sm:gap-4">
      <DeviceFrame label="Cardápio da mesa" kind="phone" className={cn("relative z-20 w-[62%] justify-self-center sm:w-auto", compact ? "h-[180px]" : "h-[330px]")}> 
        <div className="space-y-3 p-3">
          <div className="flex items-center gap-2">
            <QrCode className="h-4 w-4 text-[var(--segment-accent)]" />
            <div>
              <p className="text-[9px] text-white/35">Mesa 08</p>
              <p className="text-[11px] font-semibold text-white">Seu cardápio</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.025] px-2 py-1.5">
            <Search className="h-3 w-3 text-white/25" />
            <span className="text-[8px] text-white/25">Buscar no cardápio</span>
          </div>
          {[
            ["Burger da casa", "R$ 34"],
            ["Batata crocante", "R$ 18"],
          ].slice(0, compact ? 1 : 2).map(([name, price]) => (
            <div key={name} className="flex gap-2 rounded-lg border border-white/[0.06] p-2">
              <div className="h-9 w-9 rounded-md bg-gradient-to-br from-amber-500/30 to-red-500/10" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[9px] font-medium text-white">{name}</p>
                <p className="text-[9px] text-[var(--segment-accent)]">{price}</p>
              </div>
              <span className="self-center rounded-full border border-white/10 px-1.5 text-[10px] text-white/60">+</span>
            </div>
          ))}
        </div>
      </DeviceFrame>

      <DeviceFrame label="Fila de produção" className={cn(compact ? "h-[160px]" : "h-[278px]")}> 
        <div className="p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[9px] text-white/35">Cozinha</p>
              <p className="text-sm font-semibold text-white">Pedidos em preparo</p>
            </div>
            <Clock3 className="h-4 w-4 text-[var(--segment-accent)]" />
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            {[
              ["Mesa 08", "2 itens", "12:42"],
              ["Delivery 31", "3 itens", "12:44"],
            ].map(([title, items, time], index) => (
              <div key={title} className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-[9px] font-semibold text-white">{title}</span>
                  <span className={cn("h-1.5 w-1.5 rounded-full", index === 0 ? "bg-[var(--segment-accent)] motion-safe:animate-pulse" : "bg-white/20")} />
                </div>
                <p className="text-[8px] text-white/35">{items}</p>
                <p className="text-[9px] text-white/60">Recebido {time}</p>
              </div>
            ))}
          </div>
        </div>
      </DeviceFrame>
    </div>
  );
}

function FitMockup({ compact }: { compact: boolean }) {
  return (
    <div className="relative z-10 grid gap-3 sm:grid-cols-[1.15fr_0.85fr] sm:gap-4">
      <DeviceFrame label="Gestão de alunos" className={cn(compact ? "h-[165px]" : "h-[292px]")}> 
        <div className="p-3 sm:p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[9px] text-white/35">Hoje na academia</p>
              <p className="text-sm font-semibold text-white">Alunos ativos</p>
            </div>
            <span className="rounded-lg bg-[var(--segment-soft)] px-2 py-1 text-[9px] text-[var(--segment-accent)]">+ matrícula</span>
          </div>
          <div className="space-y-2">
            {[
              ["Marina Alves", "Plano Essencial", "check-in agora"],
              ["Lucas Freitas", "Plano Performance", "ativo"],
              ["Ana Lima", "Plano Essencial", "ativo"],
            ].slice(0, compact ? 2 : 3).map(([name, plan, status], index) => (
              <div key={name} className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.025] p-2.5">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white/[0.05] text-[9px] text-white/60">{name.charAt(0)}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[9px] font-medium text-white">{name}</p>
                  <p className="truncate text-[8px] text-white/35">{plan}</p>
                </div>
                <span className={cn("text-[8px]", index === 0 ? "text-[var(--segment-accent)]" : "text-white/35")}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </DeviceFrame>

      <DeviceFrame label="Carteirinha digital" kind="phone" className={cn("sm:mt-10", compact ? "hidden sm:block sm:h-[150px]" : "h-[245px]")}> 
        <div className="flex h-full flex-col items-center justify-center p-4 text-center">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--segment-soft)] text-[var(--segment-accent)]">
            <UserRound className="h-5 w-5" />
          </span>
          <p className="mt-3 text-[11px] font-semibold text-white">Marina Alves</p>
          <p className="text-[8px] text-white/35">Plano Essencial</p>
          <span className="mt-4 flex items-center gap-1 rounded-full bg-[var(--segment-accent)] px-3 py-1.5 text-[8px] font-semibold text-[#08090B]">
            <Check className="h-3 w-3" /> Check-in confirmado
          </span>
        </div>
      </DeviceFrame>
    </div>
  );
}

function LegalMockup({ compact }: { compact: boolean }) {
  return (
    <div className="relative z-10 grid gap-3 sm:grid-cols-[0.92fr_1.08fr] sm:gap-4">
      <DeviceFrame label="Entrada de contato" className={cn(compact ? "h-[158px]" : "h-[265px]")}> 
        <div className="p-3 sm:p-4">
          <div className="mb-3">
            <p className="text-[9px] text-white/35">Novo atendimento</p>
            <p className="text-sm font-semibold text-white">Triagem inicial</p>
          </div>
          <div className="space-y-2">
            <Field label="Nome" value="Rafael Souza" />
            <Field label="Assunto" value="Orientação contratual" />
            {!compact && <Field label="Canal" value="Formulário do site" />}
          </div>
          <span className="mt-3 inline-flex rounded-md bg-[var(--segment-accent)] px-3 py-1.5 text-[8px] font-semibold text-black">Enviar para triagem</span>
        </div>
      </DeviceFrame>

      <DeviceFrame label="Fluxo de atendimento" className={cn("sm:mt-8", compact ? "h-[168px]" : "h-[286px]")}> 
        <div className="p-3 sm:p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[9px] text-white/35">Relacionamento</p>
              <p className="text-sm font-semibold text-white">Próximas ações</p>
            </div>
            <span className="text-[9px] text-[var(--segment-accent)]">4 novos</span>
          </div>
          <div className="space-y-2">
            {[
              ["Rafael Souza", "Triagem recebida", "Agora"],
              ["Carla Menezes", "Retorno agendado", "14:30"],
              ["João Ribeiro", "Documentos solicitados", "Amanhã"],
            ].slice(0, compact ? 2 : 3).map(([name, action, time], index) => (
              <div key={name} className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.025] p-2.5">
                <span className={cn("h-2 w-2 rounded-full", index === 0 ? "bg-[var(--segment-accent)] motion-safe:animate-pulse" : "bg-white/15")} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[9px] font-medium text-white">{name}</p>
                  <p className="truncate text-[8px] text-white/35">{action}</p>
                </div>
                <span className="text-[8px] text-white/35">{time}</span>
              </div>
            ))}
          </div>
        </div>
      </DeviceFrame>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2">
      <p className="text-[7px] uppercase tracking-[0.12em] text-white/25">{label}</p>
      <p className="truncate text-[9px] text-white/65">{value}</p>
    </div>
  );
}

export function MiniFlow({ segment }: { segment: SegmentSlug }) {
  const labels: Record<SegmentSlug, string[]> = {
    studio: ["Loja", "Pedido", "Gestão"],
    eats: ["QR", "Pedido", "Cozinha"],
    fit: ["Plano", "Matrícula", "Aluno"],
    legal: ["Contato", "Triagem", "Retorno"],
  };

  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      {labels[segment].map((label, index) => (
        <div key={label} className="contents">
          <span className="rounded-md border border-white/10 bg-black/20 px-2 py-1 text-[8px] text-white/55">{label}</span>
          {index < labels[segment].length - 1 && <span className="text-[9px] text-[var(--segment-accent)]">→</span>}
        </div>
      ))}
    </div>
  );
}
