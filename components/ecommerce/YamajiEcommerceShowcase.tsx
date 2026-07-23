"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  CreditCard,
  Heart,
  LayoutDashboard,
  Package,
  Search,
  ShoppingBag,
  Sparkles,
  Store,
  TicketPercent,
  Truck,
  UserRound,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Mode = "cliente" | "gestao";
type FlowStep = {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  result: string;
};

const customerSteps: FlowStep[] = [
  {
    id: "vitrine",
    number: "01",
    label: "Vitrine",
    title: "A marca chama atenção antes do primeiro clique.",
    description:
      "O visitante chega por Instagram, anúncio ou Google e encontra campanha, categorias, novidades e produtos em destaque.",
    points: ["Hero responsivo", "Categorias, busca e filtros", "Novidades e mais vendidos"],
    result: "A pessoa entende a proposta da marca e encontra o produto sem depender do WhatsApp.",
  },
  {
    id: "produto",
    number: "02",
    label: "Produto",
    title: "Informação clara transforma interesse em decisão.",
    description:
      "Fotos, preço, variações, disponibilidade, parcelamento e prazo aparecem no momento certo.",
    points: ["Galeria e descrição", "Variações e estoque", "Frete por CEP e relacionados"],
    result: "A compra avança com menos dúvida e menos risco de pedido incorreto.",
  },
  {
    id: "carrinho",
    number: "03",
    label: "Carrinho",
    title: "O pedido continua simples, mesmo com vários itens.",
    description:
      "Cor, tamanho, quantidade, desconto e subtotal permanecem organizados durante toda a revisão.",
    points: ["Resumo das escolhas", "Quantidade editável", "Total atualizado automaticamente"],
    result: "Menos abandono por confusão e uma revisão rápida no celular.",
  },
  {
    id: "checkout",
    number: "04",
    label: "Checkout",
    title: "Dados, entrega e desconto reunidos em um fluxo curto.",
    description:
      "O checkout coleta somente o necessário, preenche o endereço pelo CEP e oferece entrega ou retirada.",
    points: ["Dados da cliente", "Entrega ou retirada", "Cupom validado pelo sistema"],
    result: "O pedido chega completo e pronto para a operação processar.",
  },
  {
    id: "pagamento",
    number: "05",
    label: "Pagamento",
    title: "A venda é confirmada dentro da própria experiência.",
    description:
      "Pix e cartão ficam conectados ao pedido, com total e estoque revalidados antes da confirmação.",
    points: ["Pix com QR Code", "Cartão e parcelamento", "Validação no servidor"],
    result: "A equipe não precisa enviar chave Pix nem conferir comprovante manualmente.",
  },
  {
    id: "poscompra",
    number: "06",
    label: "Pós-compra",
    title: "A confiança continua depois do pagamento.",
    description:
      "A cliente acompanha o pedido, consulta o histórico e recebe uma experiência organizada até a entrega.",
    points: ["Confirmação do pedido", "Área da cliente", "Status de envio e entrega"],
    result: "Menos mensagens repetitivas e mais segurança para comprar novamente.",
  },
];

const managementSteps: FlowStep[] = [
  {
    id: "visao-geral",
    number: "01",
    label: "Visão geral",
    title: "A operação começa com uma visão clara do dia.",
    description:
      "Vendas, pedidos, ticket médio, clientes e alertas aparecem juntos para orientar as prioridades.",
    points: ["Faturamento", "Pedidos e ticket médio", "Alertas operacionais"],
    result: "O dono sabe onde agir antes de abrir planilhas ou procurar mensagens.",
  },
  {
    id: "pedidos",
    number: "02",
    label: "Pedidos",
    title: "Cada venda entra em uma fila de trabalho.",
    description:
      "Pagamento, separação, envio, retirada e entrega são acompanhados em um único lugar.",
    points: ["Status por pedido", "Dados da cliente", "Itens, pagamento e entrega"],
    result: "Nenhuma venda fica perdida entre conversas e anotações.",
  },
  {
    id: "catalogo",
    number: "03",
    label: "Catálogo",
    title: "O painel alimenta a vitrine em tempo real.",
    description:
      "Produtos, fotos, preços, categorias, variações e estoque são gerenciados sem alterar código.",
    points: ["Cadastro de produtos", "Estoque por variação", "Destaque, oculto e esgotado"],
    result: "A equipe atualiza a loja sem depender de um desenvolvedor para cada mudança.",
  },
  {
    id: "clientes",
    number: "04",
    label: "Clientes",
    title: "A loja constrói uma base própria de relacionamento.",
    description:
      "Cadastro, histórico e recorrência ajudam a atender com contexto e criar campanhas melhores.",
    points: ["Histórico de compras", "Pedidos por cliente", "Sinais de recorrência"],
    result: "A marca deixa de conhecer o cliente apenas pela conversa do WhatsApp.",
  },
  {
    id: "financeiro",
    number: "05",
    label: "Financeiro",
    title: "Os números nascem das vendas realmente pagas.",
    description:
      "Receita, formas de pagamento e desempenho de produtos são calculados a partir dos pedidos confirmados.",
    points: ["Receita por período", "Formas de pagamento", "Produtos mais rentáveis"],
    result: "A gestão acompanha dados reais, não estimativas soltas.",
  },
  {
    id: "crescimento",
    number: "06",
    label: "Crescimento",
    title: "Campanhas e automações evoluem com a operação.",
    description:
      "Cupons, frete, produtos em alta e recorrência viram ferramentas para vender mais e melhor.",
    points: ["Cupons e campanhas", "Regras de frete", "Mais vendidos e automações"],
    result: "O e-commerce cresce sem precisar ser reconstruído a cada nova estratégia.",
  },
];

const products = [
  ["Aura Mini Bag", "R$ 189"],
  ["Pulse One", "R$ 249"],
  ["Frame Essential", "R$ 159"],
  ["Wave Headset", "R$ 329"],
];

export default function YamajiEcommerceShowcase() {
  const [mode, setMode] = useState<Mode>("cliente");
  const [activeId, setActiveId] = useState(customerSteps[0].id);
  const steps = mode === "cliente" ? customerSteps : managementSteps;
  const active = useMemo(
    () => steps.find((step) => step.id === activeId) ?? steps[0],
    [activeId, steps]
  );

  function changeMode(next: Mode) {
    setMode(next);
    setActiveId(next === "cliente" ? customerSteps[0].id : managementSteps[0].id);
  }

  return (
    <div className="min-w-0 bg-[#08090B]">
      <section className="relative overflow-hidden border-b border-white/[0.07] bg-[#08090B]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(94,234,212,.18),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(129,140,248,.17),transparent_34%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl min-w-0 gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:py-24">
          <div className="min-w-0">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#5EEAD4]/25 bg-[#5EEAD4]/[0.08] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5EEAD4]">
              <Sparkles className="h-3.5 w-3.5" /> Yamaji E-commerce
            </div>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.55rem,11vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-white">
              Uma loja não termina na vitrine.
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-white/58 sm:text-lg">
              Uma demonstração autoral da Yamaji que conecta descoberta, produto, pagamento, pós-compra e gestão em um único fluxo.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#fluxo" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#5EEAD4] px-6 text-sm font-bold text-[#07110F] transition hover:-translate-y-0.5">
                Explorar o fluxo <ArrowRight className="h-4 w-4" />
              </a>
              <Link href="/e-commerce" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-bold text-white">
                Conhecer a solução
              </Link>
            </div>
          </div>
          <StorefrontHeroPreview />
        </div>
      </section>

      <section id="fluxo" className="border-b border-white/[0.07] py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl min-w-0 px-4 sm:px-6">
          <div className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5EEAD4]">Jornada detalhada</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                Veja o que o cliente vive e o que a empresa controla.
              </h2>
            </div>
            <div className="grid w-full grid-cols-2 rounded-2xl border border-white/10 bg-white/[0.03] p-1 lg:w-auto">
              <ModeButton active={mode === "cliente"} onClick={() => changeMode("cliente")}><UserRound className="h-4 w-4" /> Cliente</ModeButton>
              <ModeButton active={mode === "gestao"} onClick={() => changeMode("gestao")}><LayoutDashboard className="h-4 w-4" /> Gestão</ModeButton>
            </div>
          </div>

          <div className="mt-10 grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((step) => (
              <button key={step.id} type="button" onClick={() => setActiveId(step.id)} className={cn(
                "min-w-0 rounded-2xl border p-3 text-left transition sm:p-4",
                active.id === step.id
                  ? "border-[#5EEAD4]/50 bg-[#5EEAD4]/10 text-white"
                  : "border-white/[0.08] bg-white/[0.025] text-white/45 hover:border-white/20 hover:text-white/75"
              )}>
                <span className="font-mono text-[9px] text-[#5EEAD4]">{step.number}</span>
                <span className="mt-2 block truncate text-xs font-semibold sm:text-sm">{step.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-6 grid min-w-0 gap-6 rounded-[1.75rem] border border-white/[0.09] bg-[#0C0F13] p-4 sm:p-6 lg:grid-cols-[0.82fr_1.18fr] lg:p-8">
            <div className="min-w-0 lg:py-3">
              <span className="inline-flex rounded-full bg-[#818CF8]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#A5B4FC]">
                {mode === "cliente" ? "Experiência de compra" : "Operação da loja"}
              </span>
              <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">{active.title}</h3>
              <p className="mt-5 text-[15px] leading-relaxed text-white/55 sm:text-base">{active.description}</p>
              <ul className="mt-7 space-y-3">
                {active.points.map((point) => (
                  <li key={point} className="flex min-w-0 items-start gap-3 text-sm text-white/70">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#5EEAD4]/10 text-[#5EEAD4]"><Check className="h-3 w-3" /></span>
                    <span className="min-w-0">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-[#5EEAD4]/15 bg-[#5EEAD4]/[0.06] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#5EEAD4]">Resultado no negócio</p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{active.result}</p>
              </div>
            </div>
            <FlowPreview id={active.id} mode={mode} />
          </div>
        </div>
      </section>

      <section className="bg-[#0A0C10] py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5EEAD4]">Estrutura modular</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Uma base autoral que se adapta à identidade e à operação de cada negócio.</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/50 sm:text-base">Visual, produtos, pagamento, frete e regras comerciais mudam. O motor continua preparado para evoluir.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Store, "Marca e campanha", "Identidade, tipografia, campanhas e coleções personalizadas."],
              [ShoppingBag, "Compra completa", "Catálogo, produto, carrinho, checkout e pós-compra conectados."],
              [Boxes, "Operação própria", "Produtos, estoque, pedidos, clientes, cupons e frete em um painel."],
              [BarChart3, "Evolução contínua", "Dados orientam campanhas, melhorias e novas automações."],
            ].map(([Icon, title, text]) => {
              const CardIcon = Icon as typeof Store;
              return (
                <article key={String(title)} className="min-w-0 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#818CF8]/12 text-[#A5B4FC]"><CardIcon className="h-5 w-5" /></span>
                  <h3 className="mt-6 text-lg font-semibold text-white">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/45">{String(text)}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-12 flex min-w-0 flex-col gap-6 rounded-[1.75rem] border border-[#5EEAD4]/15 bg-[linear-gradient(135deg,rgba(94,234,212,.14),rgba(129,140,248,.13),rgba(8,9,11,.9))] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5EEAD4]">Seu negócio dentro deste fluxo</p>
              <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">A Yamaji transforma esta estrutura em uma loja com a cara e a rotina da sua empresa.</h2>
            </div>
            <Link href="/aplicar" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#5EEAD4] px-6 text-sm font-bold text-[#07110F]">
              Planejar meu e-commerce <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ModeButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return <button type="button" onClick={onClick} className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition", active ? "bg-[#5EEAD4] text-[#07110F]" : "text-white/45 hover:text-white")}>{children}</button>;
}

function StorefrontHeroPreview() {
  return (
    <div className="min-w-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0D1117] shadow-[0_30px_90px_-45px_rgba(94,234,212,.45)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-white">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#5EEAD4] text-xs font-black text-[#07110F]">Y</span>
          <div><p className="font-semibold leading-none">Yamaji E-commerce</p><p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-white/40">Storefront demonstrativo</p></div>
        </div>
        <div className="flex items-center gap-3 text-white/50"><Search className="h-4 w-4" /><Heart className="h-4 w-4" /><ShoppingBag className="h-4 w-4" /></div>
      </div>
      <div className="relative min-h-[280px] overflow-hidden bg-[radial-gradient(circle_at_75%_25%,rgba(129,140,248,.35),transparent_32%),radial-gradient(circle_at_20%_70%,rgba(94,234,212,.23),transparent_36%),#0A0D12] p-6 sm:min-h-[350px] sm:p-8">
        <div className="absolute right-7 top-8 grid h-44 w-32 rotate-3 place-items-center rounded-[2rem] border border-white/10 bg-white/[0.06] text-center text-white shadow-2xl sm:right-14 sm:h-56 sm:w-40"><span className="px-4 text-2xl font-semibold">nova experiência</span></div>
        <div className="relative max-w-[58%] text-white">
          <span className="rounded-full border border-[#5EEAD4]/25 bg-[#5EEAD4]/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#5EEAD4]">Campanha da marca</span>
          <h2 className="mt-4 text-3xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl">Produtos com presença.</h2>
          <p className="mt-4 text-xs leading-relaxed text-white/55 sm:text-sm">Vitrine, compra, relacionamento e gestão conectados.</p>
          <span className="mt-5 inline-flex rounded-full bg-[#5EEAD4] px-4 py-2 text-[10px] font-bold text-[#07110F]">Explorar coleção</span>
        </div>
      </div>
      <div className="grid grid-cols-3 border-t border-white/10 bg-[#0D1117] text-center text-[8px] font-semibold uppercase tracking-[0.08em] text-white/45 sm:text-[9px]">
        <span className="border-r border-white/10 px-2 py-3">Frete inteligente</span><span className="border-r border-white/10 px-2 py-3">Cupons e CRM</span><span className="px-2 py-3">Pix e cartão</span>
      </div>
    </div>
  );
}

function FlowPreview({ id, mode }: { id: string; mode: Mode }) {
  if (mode === "gestao") return <ManagementPreview id={id} />;
  if (id === "produto") return <ProductPreview />;
  if (id === "carrinho") return <CartPreview />;
  if (id === "checkout") return <CheckoutPreview />;
  if (id === "pagamento") return <PaymentPreview />;
  if (id === "poscompra") return <AccountPreview />;
  return <CatalogPreview />;
}

function BrowserFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="w-full min-w-0 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#F4F7FA] text-[#101820] shadow-[0_28px_70px_-38px_rgba(0,0,0,.9)]">
      <div className="flex min-w-0 items-center gap-2 border-b border-[#101820]/10 bg-white px-4 py-3">
        <div className="flex shrink-0 gap-1.5"><span className="h-2 w-2 rounded-full bg-[#101820]/15" /><span className="h-2 w-2 rounded-full bg-[#101820]/10" /><span className="h-2 w-2 rounded-full bg-[#101820]/5" /></div>
        <span className="min-w-0 flex-1 truncate text-center text-[9px] font-semibold uppercase tracking-[0.14em] text-[#101820]/45">{title}</span>
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function CatalogPreview() {
  return (
    <BrowserFrame title="Yamaji E-commerce: vitrine">
      <div className="bg-[linear-gradient(135deg,#111827,#16243A)] px-4 py-7 text-white sm:px-6"><span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#5EEAD4]">Nova coleção</span><h4 className="mt-2 max-w-xs text-3xl font-semibold leading-none">Design que vira desejo.</h4><button className="mt-4 rounded-full bg-[#5EEAD4] px-4 py-2 text-[9px] font-bold text-[#07110F]">Ver novidades</button></div>
      <div className="p-4 sm:p-5"><div className="flex gap-2 overflow-hidden">{["Todos", "Lifestyle", "Tech", "Acessórios"].map((item, index) => <span key={item} className={cn("shrink-0 rounded-full px-3 py-1.5 text-[9px] font-semibold", index === 0 ? "bg-[#101820] text-white" : "border border-[#101820]/10 bg-white")}>{item}</span>)}</div><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">{products.map(([name, price], index) => <div key={name} className="min-w-0 rounded-xl border border-[#101820]/10 bg-white p-2.5"><div className={cn("h-24 rounded-lg", index % 2 ? "bg-gradient-to-br from-[#818CF8]/30 to-[#111827]" : "bg-gradient-to-br from-[#5EEAD4]/40 to-[#16243A]")} /><p className="mt-2 truncate text-[9px] font-semibold">{name}</p><p className="text-[9px] text-[#4F46E5]">{price}</p></div>)}</div></div>
    </BrowserFrame>
  );
}

function ProductPreview() {
  return <BrowserFrame title="Yamaji E-commerce: produto"><div className="grid min-w-0 gap-4 p-4 sm:grid-cols-[0.9fr_1.1fr] sm:p-5"><div className="min-h-[250px] rounded-2xl bg-gradient-to-br from-[#5EEAD4]/35 via-[#818CF8]/25 to-[#111827]" /><div className="min-w-0"><span className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#101820]/45">Lifestyle</span><h4 className="mt-2 text-2xl font-semibold">Aura Mini Bag</h4><p className="mt-3 text-xl font-bold">R$ 189,00</p><p className="text-[10px] text-[#101820]/55">3x de R$ 63,00 sem juros</p><p className="mt-5 text-[9px] font-bold">Cor</p><div className="mt-2 flex gap-2">{["Aqua", "Índigo", "Grafite"].map((color, index) => <span key={color} className={cn("rounded-full px-3 py-2 text-[8px] font-bold", index === 0 ? "bg-[#101820] text-white" : "border border-[#101820]/15 bg-white")}>{color}</span>)}</div><div className="mt-4 rounded-xl border border-[#101820]/10 bg-white p-3"><div className="flex items-center gap-2 text-[9px] font-semibold"><Truck className="h-3.5 w-3.5 text-[#4F46E5]" /> Calcular frete e prazo</div></div><button className="mt-4 w-full rounded-full bg-[#101820] py-3 text-[10px] font-bold text-white">Adicionar à sacola</button></div></div></BrowserFrame>;
}

function CartPreview() {
  return <BrowserFrame title="Yamaji E-commerce: sacola"><div className="grid gap-5 p-4 sm:grid-cols-[1.2fr_0.8fr] sm:p-5"><div className="space-y-3">{products.slice(0, 2).map(([name, price], index) => <div key={name} className="flex min-w-0 gap-3 rounded-xl border border-[#101820]/10 bg-white p-3"><div className={cn("h-16 w-14 shrink-0 rounded-lg", index ? "bg-[#818CF8]/30" : "bg-[#5EEAD4]/35")} /><div className="min-w-0 flex-1"><p className="truncate text-[10px] font-semibold">{name}</p><p className="text-[9px] text-[#101820]/45">Aqua • Único</p><div className="mt-3 inline-flex rounded-full border border-[#101820]/10 px-3 py-1 text-[9px]">− &nbsp; 1 &nbsp; +</div></div><span className="text-[10px] font-bold">{price}</span></div>)}</div><div className="rounded-xl border border-[#101820]/10 bg-white p-4"><p className="font-semibold">Resumo</p><div className="mt-4 space-y-2 text-[10px] text-[#101820]/60"><div className="flex justify-between"><span>Subtotal</span><span>R$ 438,00</span></div><div className="flex justify-between"><span>Entrega</span><span>No checkout</span></div></div><div className="mt-4 flex justify-between border-t border-[#101820]/10 pt-4 font-bold"><span>Total</span><span>R$ 438,00</span></div><button className="mt-5 w-full rounded-full bg-[#101820] py-3 text-[10px] font-bold text-white">Continuar</button></div></div></BrowserFrame>;
}

function CheckoutPreview() {
  return <BrowserFrame title="Yamaji E-commerce: checkout"><div className="grid gap-4 p-4 sm:grid-cols-[1.15fr_0.85fr] sm:p-5"><div className="space-y-3"><PreviewSection title="Seus dados"><div className="grid grid-cols-2 gap-2"><Field label="Nome" /><Field label="WhatsApp" /><Field label="CEP" /><Field label="Cidade" /></div></PreviewSection><PreviewSection title="Como quer receber?"><div className="grid grid-cols-2 gap-2"><Choice active icon={<Truck className="h-4 w-4" />} label="Entrega" detail="2 a 4 dias" /><Choice icon={<Store className="h-4 w-4" />} label="Retirada" detail="Grátis" /></div></PreviewSection></div><div className="rounded-xl border border-[#101820]/10 bg-white p-4"><p className="font-semibold">Resumo do pedido</p><div className="mt-4 flex items-center justify-between rounded-lg bg-[#F4F7FA] p-3 text-[10px]"><span>2 produtos</span><span className="font-bold">R$ 438,00</span></div><div className="mt-3 flex items-center gap-2 rounded-lg border border-[#101820]/10 p-3 text-[9px]"><TicketPercent className="h-4 w-4 text-[#4F46E5]" /> Cupom de desconto</div><button className="mt-5 w-full rounded-full bg-[#101820] py-3 text-[10px] font-bold text-white">Ir para pagamento</button></div></div></BrowserFrame>;
}

function PaymentPreview() {
  return <BrowserFrame title="Yamaji E-commerce: pagamento"><div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5"><Choice active icon={<CreditCard className="h-5 w-5" />} label="Pix" detail="Aprovação imediata" large /><Choice icon={<CreditCard className="h-5 w-5" />} label="Cartão" detail="Parcelamento configurável" large /><div className="rounded-2xl border border-[#4F46E5]/20 bg-[#818CF8]/10 p-5 text-center sm:col-span-2"><div className="mx-auto grid h-28 w-28 grid-cols-5 gap-1 rounded-lg bg-white p-3 shadow-sm">{Array.from({ length: 25 }).map((_, index) => <span key={index} className={cn("rounded-[2px]", index % 3 === 0 || index % 7 === 0 ? "bg-[#101820]" : "bg-[#101820]/10")} />)}</div><p className="mt-4 text-sm font-semibold">Pagamento aguardando confirmação</p><button className="mt-3 rounded-full bg-[#101820] px-5 py-2 text-[9px] font-bold text-white">Copiar código Pix</button></div></div></BrowserFrame>;
}

function AccountPreview() {
  return <BrowserFrame title="Yamaji E-commerce: minha conta"><div className="p-4 sm:p-5"><div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#5EEAD4]/20 to-[#818CF8]/20 p-4"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#101820] text-white"><UserRound className="h-5 w-5" /></span><div><p className="text-sm font-semibold">Olá, Marina</p><p className="text-[9px] text-[#101820]/55">Acompanhe seus pedidos</p></div></div><div className="mt-4 space-y-3">{[["#2048", "Pagamento aprovado", "Separando seu pedido"], ["#2012", "Entregue", "Pedido finalizado"]].map(([order, status, detail], index) => <div key={order} className="flex min-w-0 items-center gap-3 rounded-xl border border-[#101820]/10 bg-white p-4"><span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-full", index ? "bg-[#101820]/5" : "bg-[#5EEAD4]/20 text-[#0F766E]")}><Package className="h-4 w-4" /></span><div className="min-w-0 flex-1"><p className="text-[10px] font-bold">Pedido {order}</p><p className="truncate text-[9px] text-[#101820]/50">{detail}</p></div><span className="rounded-full bg-[#818CF8]/12 px-3 py-1 text-[8px] font-bold text-[#4338CA]">{status}</span></div>)}</div></div></BrowserFrame>;
}

function ManagementPreview({ id }: { id: string }) {
  const titles: Record<string, string> = { "visao-geral": "Visão geral", pedidos: "Pedidos", catalogo: "Produtos e estoque", clientes: "Clientes", financeiro: "Financeiro", crescimento: "Crescimento" };
  const icons: Record<string, typeof LayoutDashboard> = { "visao-geral": LayoutDashboard, pedidos: ShoppingBag, catalogo: Package, clientes: Users, financeiro: BarChart3, crescimento: TicketPercent };
  const ActiveIcon = icons[id] ?? LayoutDashboard;
  return <BrowserFrame title={`Yamaji Commerce Admin: ${titles[id] ?? "Painel"}`}><div className="grid min-h-[390px] grid-cols-[68px_1fr] sm:grid-cols-[150px_1fr]"><aside className="border-r border-[#101820]/10 bg-[#111827] p-2.5 text-white sm:p-3"><div className="mb-5 flex items-center gap-2 px-1"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#5EEAD4] text-[10px] font-black text-[#07110F]">Y</span><span className="hidden text-[10px] font-bold sm:block">Yamaji Admin</span></div><div className="space-y-1.5">{[[LayoutDashboard, "Visão"], [ShoppingBag, "Pedidos"], [Package, "Produtos"], [Users, "Clientes"], [BarChart3, "Financeiro"], [TicketPercent, "Crescimento"]].map(([Icon, label]) => { const ItemIcon = Icon as typeof LayoutDashboard; const selected = titles[id]?.startsWith(String(label)) || (id === "crescimento" && label === "Crescimento"); return <div key={String(label)} className={cn("flex items-center gap-2 rounded-lg px-2 py-2 text-[9px] font-semibold", selected ? "bg-[#5EEAD4] text-[#07110F]" : "text-white/45")}><ItemIcon className="h-4 w-4 shrink-0" /><span className="hidden sm:block">{String(label)}</span></div>; })}</div></aside><div className="min-w-0 p-3 sm:p-5"><div className="flex min-w-0 items-center justify-between gap-3"><div className="min-w-0"><p className="text-[8px] uppercase tracking-[0.14em] text-[#101820]/40">Painel da loja</p><h4 className="truncate text-xl font-semibold sm:text-2xl">{titles[id]}</h4></div><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#818CF8]/15 text-[#4F46E5]"><ActiveIcon className="h-5 w-5" /></span></div><AdminContent id={id} /></div></div></BrowserFrame>;
}

function AdminContent({ id }: { id: string }) {
  if (id === "pedidos") return <SimpleTable headers={["Pedido", "Cliente", "Status", "Total"]} rows={[["#2048", "Marina Alves", "Pago", "R$ 438"], ["#2047", "Ana Lima", "Separando", "R$ 249"], ["#2046", "Júlia Reis", "Enviado", "R$ 159"]]} />;
  if (id === "catalogo") return <SimpleTable headers={["Produto", "Variações", "Estoque", "Preço"]} rows={[["Aura Mini Bag", "3 cores", "12", "R$ 189"], ["Pulse One", "2 cores", "8", "R$ 249"], ["Wave Headset", "3 cores", "5", "R$ 329"]]} />;
  if (id === "clientes") return <SimpleTable headers={["Cliente", "Pedidos", "Última compra", "Total"]} rows={[["Marina Alves", "4", "Hoje", "R$ 919"], ["Ana Lima", "2", "Ontem", "R$ 408"], ["Júlia Reis", "3", "12 jul", "R$ 737"]]} />;
  if (id === "financeiro") return <FinancialContent />;
  if (id === "crescimento") return <GrowthContent />;
  return <OverviewContent />;
}

function OverviewContent() { return <div className="mt-5"><div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{[["Faturamento", "R$ 18.420"], ["Pedidos", "84"], ["Ticket médio", "R$ 219"], ["Clientes", "68"]].map(([label, value]) => <div key={label} className="rounded-xl border border-[#101820]/10 bg-white p-3"><p className="text-[8px] text-[#101820]/45">{label}</p><p className="mt-1 text-sm font-bold sm:text-base">{value}</p></div>)}</div><ChartBars /></div>; }
function FinancialContent() { return <div className="mt-5"><div className="grid grid-cols-2 gap-2"><div className="rounded-xl border border-[#101820]/10 bg-white p-4"><p className="text-[8px] text-[#101820]/45">Receita paga</p><p className="mt-1 text-xl font-bold">R$ 18.420</p></div><div className="rounded-xl border border-[#101820]/10 bg-white p-4"><p className="text-[8px] text-[#101820]/45">A receber</p><p className="mt-1 text-xl font-bold">R$ 2.880</p></div></div><ChartBars /></div>; }
function ChartBars() { return <div className="mt-4 flex h-40 items-end gap-2 rounded-xl border border-[#101820]/10 bg-white p-4">{[35, 55, 42, 68, 58, 82, 72, 94].map((height, index) => <span key={index} style={{ height: `${height}%` }} className="min-w-0 flex-1 rounded-t-md bg-gradient-to-t from-[#4F46E5] to-[#5EEAD4]" />)}</div>; }
function GrowthContent() { return <div className="mt-5 grid gap-3 sm:grid-cols-2">{[[TicketPercent, "Cupom PRIMEIRA10", "28 usos"], [Truck, "Frete estratégico", "34 pedidos"], [BarChart3, "Acessórios em alta", "+42%"], [Users, "Clientes recorrentes", "38%"]].map(([Icon, title, value]) => { const GrowthIcon = Icon as typeof TicketPercent; return <div key={String(title)} className="flex items-center gap-3 rounded-xl border border-[#101820]/10 bg-white p-4"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#818CF8]/15 text-[#4F46E5]"><GrowthIcon className="h-4 w-4" /></span><div className="min-w-0"><p className="truncate text-[10px] font-bold">{String(title)}</p><p className="text-[9px] text-[#101820]/45">{String(value)}</p></div></div>; })}</div>; }

function SimpleTable({ headers, rows }: { headers: string[]; rows: string[][] }) { return <div className="mt-5 min-w-0 overflow-hidden rounded-xl border border-[#101820]/10 bg-white"><div className="grid grid-cols-4 border-b border-[#101820]/10 bg-[#F4F7FA] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.08em] text-[#101820]/40">{headers.map((header) => <span key={header} className="truncate">{header}</span>)}</div>{rows.map((row) => <div key={row[0]} className="grid grid-cols-4 border-b border-[#101820]/5 px-3 py-3 text-[8px] last:border-0 sm:text-[9px]">{row.map((cell, index) => <span key={`${row[0]}-${index}`} className={cn("truncate", index === 2 && "text-[#4F46E5]")}>{cell}</span>)}</div>)}</div>; }
function PreviewSection({ title, children }: { title: string; children: ReactNode }) { return <div className="rounded-xl border border-[#101820]/10 bg-white p-4"><p className="mb-3 text-[10px] font-bold">{title}</p>{children}</div>; }
function Field({ label }: { label: string }) { return <div className="rounded-lg border border-[#101820]/10 bg-[#F4F7FA] px-3 py-2 text-[8px] text-[#101820]/40">{label}</div>; }
function Choice({ icon, label, detail, active = false, large = false }: { icon: ReactNode; label: string; detail: string; active?: boolean; large?: boolean }) { return <div className={cn("rounded-xl border p-3", large && "p-5", active ? "border-[#4F46E5] bg-[#818CF8]/10" : "border-[#101820]/10 bg-white")}><div className="flex items-center gap-2 text-[#4F46E5]">{icon}<span className="text-[10px] font-bold text-[#101820]">{label}</span></div><p className="mt-2 text-[8px] text-[#101820]/45">{detail}</p></div>; }
