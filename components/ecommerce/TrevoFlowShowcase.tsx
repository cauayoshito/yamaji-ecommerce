"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  ChevronRight,
  CreditCard,
  Heart,
  LayoutDashboard,
  Package,
  Search,
  ShoppingBag,
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
    title: "A marca chama atenção antes do produto.",
    description:
      "A cliente entra por Instagram, anúncio ou Google e encontra uma loja com campanha, categorias, novidades e mais vendidos.",
    points: [
      "Hero de campanha responsivo",
      "Categorias e busca rápida",
      "Novidades, favoritos e mais vendidos",
    ],
    result: "A visitante entende a marca e encontra o que procura sem depender do WhatsApp.",
  },
  {
    id: "produto",
    number: "02",
    label: "Produto",
    title: "A decisão acontece com informação clara.",
    description:
      "Fotos, variações, estoque, parcelamento e cálculo de entrega aparecem no momento certo, reduzindo dúvidas antes da compra.",
    points: [
      "Galeria e descrição do produto",
      "Tamanho, cor e estoque por variação",
      "Frete por CEP e produtos relacionados",
    ],
    result: "A cliente escolhe a variação correta e avança com mais segurança.",
  },
  {
    id: "carrinho",
    number: "03",
    label: "Carrinho",
    title: "O pedido continua simples mesmo com várias peças.",
    description:
      "O carrinho preserva cor, tamanho, quantidade e subtotal, deixando a revisão do pedido rápida no celular.",
    points: [
      "Resumo das variações escolhidas",
      "Alteração de quantidade",
      "Subtotal atualizado automaticamente",
    ],
    result: "Menos abandono por confusão e menos pedido errado para a equipe corrigir.",
  },
  {
    id: "checkout",
    number: "04",
    label: "Checkout",
    title: "O checkout organiza entrega, dados e desconto.",
    description:
      "A cliente informa os dados, usa o CEP para preencher o endereço, escolhe retirada ou entrega e aplica o cupom quando disponível.",
    points: [
      "Dados pré-preenchidos para cliente logada",
      "Entrega ou retirada na loja",
      "Cupom validado pelo sistema",
    ],
    result: "O pedido chega completo, com endereço e forma de entrega já definidos.",
  },
  {
    id: "pagamento",
    number: "05",
    label: "Pagamento",
    title: "Pix e cartão fecham a venda dentro do fluxo.",
    description:
      "O pagamento é conectado ao pedido, com valor recalculado no servidor e confirmação antes de liberar a venda.",
    points: [
      "Pix com QR Code e copia e cola",
      "Cartão com parcelamento configurável",
      "Validação de estoque e total no backend",
    ],
    result: "A loja não depende de mandar chave Pix e conferir comprovante manualmente.",
  },
  {
    id: "poscompra",
    number: "06",
    label: "Pós-compra",
    title: "A relação continua depois do pagamento.",
    description:
      "A cliente acompanha pedidos, consulta o histórico e volta à loja com uma experiência mais organizada.",
    points: [
      "Confirmação do pedido",
      "Área da cliente e histórico",
      "Status de pagamento, envio e entrega",
    ],
    result: "Menos mensagens perguntando pelo pedido e mais confiança para comprar novamente.",
  },
];

const managementSteps: FlowStep[] = [
  {
    id: "visao-geral",
    number: "01",
    label: "Visão geral",
    title: "O dono abre o painel e enxerga a operação.",
    description:
      "Indicadores resumem vendas, pedidos, clientes e produtos para que a decisão não dependa de várias planilhas.",
    points: ["Faturamento e pedidos", "Ticket médio", "Alertas da operação"],
    result: "O negócio começa o dia sabendo onde precisa agir.",
  },
  {
    id: "pedidos",
    number: "02",
    label: "Pedidos",
    title: "Cada venda entra em uma fila de trabalho.",
    description:
      "A equipe acompanha pagamento, separação, envio, retirada e entrega em uma visão centralizada.",
    points: ["Status por pedido", "Dados da cliente", "Itens, pagamento e entrega"],
    result: "Menos pedido perdido entre mensagens e mais clareza para a equipe.",
  },
  {
    id: "catalogo",
    number: "03",
    label: "Catálogo",
    title: "Produtos e estoque conversam com a vitrine.",
    description:
      "A dona cadastra produto, categoria, preço, fotos, variações e disponibilidade sem alterar o código da loja.",
    points: ["Cadastro de produtos", "Estoque por tamanho e cor", "Produto novo, oculto ou esgotado"],
    result: "Toda atualização do painel aparece na experiência da cliente.",
  },
  {
    id: "clientes",
    number: "04",
    label: "Clientes",
    title: "A loja constrói uma base própria de relacionamento.",
    description:
      "Histórico de compra, contato e recorrência ajudam a criar campanhas melhores e atender com contexto.",
    points: ["Cadastro e histórico", "Pedidos por cliente", "Sinais de recorrência"],
    result: "A loja deixa de conhecer a cliente apenas pela conversa do WhatsApp.",
  },
  {
    id: "financeiro",
    number: "05",
    label: "Financeiro",
    title: "O faturamento nasce dos pedidos realmente pagos.",
    description:
      "Relatórios consideram apenas pedidos capturados, separando tentativa, pagamento, envio e entrega.",
    points: ["Receita por período", "Formas de pagamento", "Produtos mais rentáveis"],
    result: "A gestão acompanha números reais em vez de estimativas soltas.",
  },
  {
    id: "crescimento",
    number: "06",
    label: "Crescimento",
    title: "Cupons, frete e mais vendidos viram ferramentas comerciais.",
    description:
      "A operação ajusta campanhas, regiões de entrega, incentivos de primeira compra e produtos em destaque pelo painel.",
    points: ["Cupons e campanhas", "Regras de frete", "Mais vendidos e oportunidades"],
    result: "O e-commerce evolui com a estratégia da loja sem precisar recomeçar do zero.",
  },
];

const products = [
  ["Body Essencial", "R$ 69,90"],
  ["Saia Camurça", "R$ 65,00"],
  ["Vestido Vinho", "R$ 70,00"],
  ["Short Courino", "R$ 70,00"],
];

export default function TrevoFlowShowcase() {
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
    <div className="min-w-0">
      <section className="border-b border-white/[0.07] bg-[#F3EEE4] text-[#0B3D22]">
        <div className="mx-auto grid w-full max-w-7xl min-w-0 gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24">
          <div className="min-w-0">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#0B3D22]/15 bg-white/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em]">
              <span className="h-2 w-2 rounded-full bg-[#1F8A4C]" />
              Case demonstrativo: Trevo Modas
            </div>
            <h1 className="mt-6 max-w-3xl text-[clamp(2.55rem,11vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
              Uma loja não termina na vitrine.
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#0B3D22]/70 sm:text-lg">
              A Yamaji conecta descoberta, produto, pagamento, pós-compra e gestão em uma experiência única. A Trevo funciona aqui como base visual para mostrar o fluxo inteiro.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#fluxo"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1F8A4C] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5"
              >
                Explorar o fluxo
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/e-commerce"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0B3D22]/20 bg-white/50 px-6 text-sm font-bold"
              >
                Conhecer a solução Yamaji
              </Link>
            </div>
          </div>

          <StorefrontHeroPreview />
        </div>
      </section>

      <section id="fluxo" className="border-b border-white/[0.07] bg-[#080A0D] py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl min-w-0 px-4 sm:px-6">
          <div className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5EEAD4]">
                Jornada detalhada
              </p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-5xl">
                Veja o que a cliente vive e o que a loja controla.
              </h2>
            </div>

            <div className="grid w-full grid-cols-2 rounded-2xl border border-white/10 bg-white/[0.03] p-1 lg:w-auto">
              <ModeButton active={mode === "cliente"} onClick={() => changeMode("cliente")}>
                <UserRound className="h-4 w-4" /> Cliente
              </ModeButton>
              <ModeButton active={mode === "gestao"} onClick={() => changeMode("gestao")}>
                <LayoutDashboard className="h-4 w-4" /> Gestão
              </ModeButton>
            </div>
          </div>

          <div className="mt-10 grid min-w-0 grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {steps.map((step) => (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveId(step.id)}
                className={cn(
                  "min-w-0 rounded-2xl border p-3 text-left transition sm:p-4",
                  active.id === step.id
                    ? "border-[#5EEAD4]/50 bg-[#5EEAD4]/10 text-white"
                    : "border-white/[0.08] bg-white/[0.025] text-white/45 hover:border-white/20 hover:text-white/75"
                )}
              >
                <span className="font-mono text-[9px] text-[#5EEAD4]">{step.number}</span>
                <span className="mt-2 block truncate text-xs font-semibold sm:text-sm">
                  {step.label}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-6 grid min-w-0 gap-6 rounded-[1.75rem] border border-white/[0.09] bg-[#0C0F13] p-4 sm:p-6 lg:grid-cols-[0.82fr_1.18fr] lg:p-8">
            <div className="min-w-0 lg:py-3">
              <span className="inline-flex rounded-full bg-[#5EEAD4]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#5EEAD4]">
                {mode === "cliente" ? "Experiência de compra" : "Operação da loja"}
              </span>
              <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                {active.title}
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-white/55 sm:text-base">
                {active.description}
              </p>

              <ul className="mt-7 space-y-3">
                {active.points.map((point) => (
                  <li key={point} className="flex min-w-0 items-start gap-3 text-sm text-white/70">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#1F8A4C]/20 text-[#5EEAD4]">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="min-w-0">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-[#5EEAD4]/15 bg-[#5EEAD4]/[0.06] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#5EEAD4]">
                  Resultado no negócio
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{active.result}</p>
              </div>
            </div>

            <div className="min-w-0">
              <FlowPreview id={active.id} mode={mode} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B0E12] py-16 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5EEAD4]">
              Template comercial Yamaji
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
              A mesma estrutura pode vestir outra marca sem perder o motor.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/50 sm:text-base">
              A identidade, os produtos, as regras de pagamento e a operação mudam. A base de experiência e gestão continua pronta para evoluir.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Store, "Marca e campanha", "Hero, cores, tipografia e coleções moldados para cada cliente."],
              [ShoppingBag, "Compra completa", "Catálogo, produto, carrinho, checkout e pós-compra conectados."],
              [Boxes, "Operação própria", "Produtos, estoque, pedidos, clientes, cupons e frete em um painel."],
              [BarChart3, "Evolução contínua", "Dados da loja orientam campanhas, melhorias e novas automações."],
            ].map(([Icon, title, text]) => {
              const CardIcon = Icon as typeof Store;
              return (
                <article key={String(title)} className="min-w-0 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#1F8A4C]/15 text-[#5EEAD4]">
                    <CardIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold text-white">{String(title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/45">{String(text)}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 flex min-w-0 flex-col gap-6 rounded-[1.75rem] border border-white/[0.09] bg-gradient-to-br from-[#103E2A] to-[#08150F] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8EF2D5]">
                Seu negócio dentro deste fluxo
              </p>
              <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-[-0.035em] text-white sm:text-4xl">
                A Yamaji transforma esta base em uma loja com a cara e a rotina da sua empresa.
              </h2>
            </div>
            <Link
              href="/aplicar"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#5EEAD4] px-6 text-sm font-bold text-[#07110D]"
            >
              Planejar meu e-commerce
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition",
        active ? "bg-[#5EEAD4] text-[#07110D]" : "text-white/45 hover:text-white"
      )}
    >
      {children}
    </button>
  );
}

function StorefrontHeroPreview() {
  return (
    <div className="min-w-0 overflow-hidden rounded-[1.75rem] border border-[#0B3D22]/15 bg-white shadow-[0_30px_90px_-45px_rgba(11,61,34,.45)]">
      <div className="flex items-center justify-between border-b border-[#0B3D22]/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#1F8A4C] text-xs font-bold text-white">T</span>
          <div>
            <p className="font-semibold leading-none">Trevo Modas</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-[#0B3D22]/50">Loja online</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-[#0B3D22]/60">
          <Search className="h-4 w-4" />
          <Heart className="h-4 w-4" />
          <ShoppingBag className="h-4 w-4" />
        </div>
      </div>
      <div className="relative min-h-[260px] overflow-hidden bg-[#E9DDCF] p-6 sm:min-h-[340px] sm:p-8">
        <div className="absolute -right-12 bottom-[-42%] h-72 w-72 rounded-full bg-[#1F8A4C]/20 sm:h-96 sm:w-96" />
        <div className="absolute right-8 top-8 grid h-44 w-32 rotate-3 place-items-center rounded-[2rem] bg-[#0B3D22] text-center text-white shadow-2xl sm:right-14 sm:h-56 sm:w-40">
          <span className="px-4 font-serif text-3xl italic">nova coleção</span>
        </div>
        <div className="relative max-w-[55%]">
          <span className="rounded-full bg-white/70 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em]">Campanha da marca</span>
          <h2 className="mt-4 text-3xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl">Vista-se para brilhar.</h2>
          <p className="mt-4 text-xs leading-relaxed text-[#0B3D22]/65 sm:text-sm">Moda feminina com vitrine, compra e gestão conectadas.</p>
          <span className="mt-5 inline-flex rounded-full bg-[#1F8A4C] px-4 py-2 text-[10px] font-bold text-white">Comprar novidades</span>
        </div>
      </div>
      <div className="grid grid-cols-3 border-t border-[#0B3D22]/10 bg-[#FAF8F3] text-center text-[9px] font-semibold uppercase tracking-[0.1em] text-[#0B3D22]/55">
        <span className="border-r border-[#0B3D22]/10 px-2 py-3">Retirada grátis</span>
        <span className="border-r border-[#0B3D22]/10 px-2 py-3">Cupom inicial</span>
        <span className="px-2 py-3">Cartão e Pix</span>
      </div>
    </div>
  );
}

function FlowPreview({ id, mode }: { id: string; mode: Mode }) {
  if (mode === "gestao") return <ManagementPreview id={id} />;

  switch (id) {
    case "produto":
      return <ProductPreview />;
    case "carrinho":
      return <CartPreview />;
    case "checkout":
      return <CheckoutPreview />;
    case "pagamento":
      return <PaymentPreview />;
    case "poscompra":
      return <AccountPreview />;
    default:
      return <CatalogPreview />;
  }
}

function BrowserFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="w-full min-w-0 overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#F8F5EF] text-[#10251A] shadow-[0_28px_70px_-38px_rgba(0,0,0,.9)]">
      <div className="flex min-w-0 items-center gap-2 border-b border-[#10251A]/10 bg-white px-4 py-3">
        <div className="flex shrink-0 gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#10251A]/15" />
          <span className="h-2 w-2 rounded-full bg-[#10251A]/10" />
          <span className="h-2 w-2 rounded-full bg-[#10251A]/5" />
        </div>
        <span className="min-w-0 flex-1 truncate text-center text-[9px] font-semibold uppercase tracking-[0.14em] text-[#10251A]/45">{title}</span>
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

function CatalogPreview() {
  return (
    <BrowserFrame title="Trevo Modas: vitrine">
      <div className="bg-[#E9DDCF] px-4 py-7 sm:px-6">
        <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#1F8A4C]">Nova coleção</span>
        <h4 className="mt-2 max-w-xs text-3xl font-semibold leading-none">Peças para o seu estilo.</h4>
        <button className="mt-4 rounded-full bg-[#1F8A4C] px-4 py-2 text-[9px] font-bold text-white">Ver novidades</button>
      </div>
      <div className="p-4 sm:p-5">
        <div className="flex gap-2 overflow-hidden">
          {["Todos", "Bodies", "Saias", "Vestidos"].map((item, index) => (
            <span key={item} className={cn("shrink-0 rounded-full px-3 py-1.5 text-[9px] font-semibold", index === 0 ? "bg-[#1F8A4C] text-white" : "border border-[#10251A]/10 bg-white")}>{item}</span>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {products.map(([name, price], index) => (
            <div key={name} className="min-w-0 rounded-xl border border-[#10251A]/10 bg-white p-2.5">
              <div className={cn("h-24 rounded-lg", index % 2 ? "bg-[#D9C4B4]" : "bg-[#B7C8B8]")} />
              <p className="mt-2 truncate text-[9px] font-semibold">{name}</p>
              <p className="text-[9px] text-[#1F8A4C]">{price}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function ProductPreview() {
  return (
    <BrowserFrame title="Trevo Modas: produto">
      <div className="grid min-w-0 gap-4 p-4 sm:grid-cols-[0.9fr_1.1fr] sm:p-5">
        <div className="min-h-[250px] rounded-2xl bg-gradient-to-br from-[#D9C4B4] to-[#F0E5DA]" />
        <div className="min-w-0">
          <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-[#10251A]/45">Vestidos</span>
          <h4 className="mt-2 text-2xl font-semibold">Vestido Suplex Vinho</h4>
          <p className="mt-3 text-xl font-bold">R$ 70,00</p>
          <p className="text-[10px] text-[#10251A]/55">3x de R$ 23,33 sem juros</p>
          <p className="mt-5 text-[9px] font-bold">Tamanho</p>
          <div className="mt-2 flex gap-2">{["P", "M", "G"].map((size, index) => <span key={size} className={cn("grid h-8 w-8 place-items-center rounded-full text-[9px] font-bold", index === 1 ? "bg-[#1F8A4C] text-white" : "border border-[#10251A]/15 bg-white")}>{size}</span>)}</div>
          <div className="mt-4 rounded-xl border border-[#10251A]/10 bg-white p-3">
            <div className="flex items-center gap-2 text-[9px] font-semibold"><Truck className="h-3.5 w-3.5 text-[#1F8A4C]" /> Calcular frete e prazo</div>
          </div>
          <button className="mt-4 w-full rounded-full bg-[#1F8A4C] py-3 text-[10px] font-bold text-white">Adicionar à sacola</button>
        </div>
      </div>
    </BrowserFrame>
  );
}

function CartPreview() {
  return (
    <BrowserFrame title="Trevo Modas: sacola">
      <div className="grid gap-5 p-4 sm:grid-cols-[1.2fr_0.8fr] sm:p-5">
        <div className="space-y-3">
          {products.slice(0, 2).map(([name, price], index) => (
            <div key={name} className="flex min-w-0 gap-3 rounded-xl border border-[#10251A]/10 bg-white p-3">
              <div className={cn("h-16 w-14 shrink-0 rounded-lg", index ? "bg-[#D9C4B4]" : "bg-[#B7C8B8]")} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] font-semibold">{name}</p>
                <p className="text-[9px] text-[#10251A]/45">M • Vinho</p>
                <div className="mt-3 inline-flex rounded-full border border-[#10251A]/10 px-3 py-1 text-[9px]">− &nbsp; 1 &nbsp; +</div>
              </div>
              <span className="text-[10px] font-bold">{price}</span>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-[#10251A]/10 bg-white p-4">
          <p className="font-semibold">Resumo</p>
          <div className="mt-4 space-y-2 text-[10px] text-[#10251A]/60">
            <div className="flex justify-between"><span>Subtotal</span><span>R$ 134,90</span></div>
            <div className="flex justify-between"><span>Entrega</span><span>Calculada no checkout</span></div>
          </div>
          <div className="mt-4 flex justify-between border-t border-[#10251A]/10 pt-4 font-bold"><span>Total</span><span>R$ 134,90</span></div>
          <button className="mt-5 w-full rounded-full bg-[#1F8A4C] py-3 text-[10px] font-bold text-white">Continuar para o checkout</button>
        </div>
      </div>
    </BrowserFrame>
  );
}

function CheckoutPreview() {
  return (
    <BrowserFrame title="Trevo Modas: checkout">
      <div className="grid gap-4 p-4 sm:grid-cols-[1.15fr_0.85fr] sm:p-5">
        <div className="space-y-3">
          <PreviewSection title="Seus dados">
            <div className="grid grid-cols-2 gap-2"><Field label="Nome" /><Field label="WhatsApp" /><Field label="CEP" /><Field label="Cidade" /></div>
          </PreviewSection>
          <PreviewSection title="Como quer receber?">
            <div className="grid grid-cols-2 gap-2"><Choice active icon={<Truck className="h-4 w-4" />} label="Entrega" detail="2 a 4 dias" /><Choice icon={<Store className="h-4 w-4" />} label="Retirada" detail="Grátis" /></div>
          </PreviewSection>
        </div>
        <div className="rounded-xl border border-[#10251A]/10 bg-white p-4">
          <p className="font-semibold">Resumo do pedido</p>
          <div className="mt-4 flex items-center justify-between rounded-lg bg-[#F8F5EF] p-3 text-[10px]"><span>2 produtos</span><span className="font-bold">R$ 134,90</span></div>
          <div className="mt-3 flex items-center gap-2 rounded-lg border border-[#10251A]/10 p-3 text-[9px]"><TicketPercent className="h-4 w-4 text-[#1F8A4C]" /> Cupom de desconto</div>
          <button className="mt-5 w-full rounded-full bg-[#1F8A4C] py-3 text-[10px] font-bold text-white">Ir para o pagamento</button>
        </div>
      </div>
    </BrowserFrame>
  );
}

function PaymentPreview() {
  return (
    <BrowserFrame title="Trevo Modas: pagamento">
      <div className="grid gap-4 p-4 sm:grid-cols-2 sm:p-5">
        <Choice active icon={<CreditCard className="h-5 w-5" />} label="Pix" detail="Aprovação imediata" large />
        <Choice icon={<CreditCard className="h-5 w-5" />} label="Cartão" detail="Até 3x sem juros" large />
        <div className="sm:col-span-2 rounded-2xl border border-[#1F8A4C]/20 bg-[#1F8A4C]/5 p-5 text-center">
          <div className="mx-auto grid h-28 w-28 grid-cols-5 gap-1 rounded-lg bg-white p-3 shadow-sm">
            {Array.from({ length: 25 }).map((_, index) => <span key={index} className={cn("rounded-[2px]", index % 3 === 0 || index % 7 === 0 ? "bg-[#10251A]" : "bg-[#10251A]/10")} />)}
          </div>
          <p className="mt-4 text-sm font-semibold">Pagamento aguardando confirmação</p>
          <button className="mt-3 rounded-full bg-[#1F8A4C] px-5 py-2 text-[9px] font-bold text-white">Copiar código Pix</button>
        </div>
      </div>
    </BrowserFrame>
  );
}

function AccountPreview() {
  return (
    <BrowserFrame title="Trevo Modas: minha conta">
      <div className="p-4 sm:p-5">
        <div className="flex items-center gap-3 rounded-xl bg-[#E9DDCF] p-4">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#1F8A4C] text-white"><UserRound className="h-5 w-5" /></span>
          <div><p className="text-sm font-semibold">Olá, Marina</p><p className="text-[9px] text-[#10251A]/55">Acompanhe seus pedidos</p></div>
        </div>
        <div className="mt-4 space-y-3">
          {[
            ["#1048", "Pagamento aprovado", "Separando seu pedido"],
            ["#1012", "Entregue", "Pedido finalizado"],
          ].map(([order, status, detail], index) => (
            <div key={order} className="flex min-w-0 items-center gap-3 rounded-xl border border-[#10251A]/10 bg-white p-4">
              <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-full", index ? "bg-[#10251A]/5" : "bg-[#1F8A4C]/10 text-[#1F8A4C]")}><Package className="h-4 w-4" /></span>
              <div className="min-w-0 flex-1"><p className="text-[10px] font-bold">Pedido {order}</p><p className="truncate text-[9px] text-[#10251A]/50">{detail}</p></div>
              <span className="rounded-full bg-[#1F8A4C]/10 px-3 py-1 text-[8px] font-bold text-[#1F8A4C]">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

function ManagementPreview({ id }: { id: string }) {
  const titleById: Record<string, string> = {
    "visao-geral": "Visão geral",
    pedidos: "Pedidos",
    catalogo: "Produtos e estoque",
    clientes: "Clientes",
    financeiro: "Financeiro",
    crescimento: "Crescimento",
  };

  const iconById: Record<string, typeof LayoutDashboard> = {
    "visao-geral": LayoutDashboard,
    pedidos: ShoppingBag,
    catalogo: Package,
    clientes: Users,
    financeiro: BarChart3,
    crescimento: TicketPercent,
  };
  const ActiveIcon = iconById[id] ?? LayoutDashboard;

  return (
    <BrowserFrame title={`Trevo Admin: ${titleById[id] ?? "Painel"}`}>
      <div className="grid min-h-[390px] grid-cols-[68px_1fr] sm:grid-cols-[150px_1fr]">
        <aside className="border-r border-[#10251A]/10 bg-[#F2EEE6] p-2.5 sm:p-3">
          <div className="mb-5 flex items-center gap-2 px-1">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#1F8A4C] text-[10px] font-bold text-white">T</span>
            <span className="hidden text-[10px] font-bold sm:block">Trevo Admin</span>
          </div>
          <div className="space-y-1.5">
            {[
              [LayoutDashboard, "Visão"],
              [ShoppingBag, "Pedidos"],
              [Package, "Produtos"],
              [Users, "Clientes"],
              [BarChart3, "Financeiro"],
              [TicketPercent, "Cupons"],
            ].map(([Icon, label]) => {
              const ItemIcon = Icon as typeof LayoutDashboard;
              const selected = titleById[id]?.startsWith(String(label)) || (id === "crescimento" && label === "Cupons");
              return (
                <div key={String(label)} className={cn("flex items-center gap-2 rounded-lg px-2 py-2 text-[9px] font-semibold", selected ? "bg-[#1F8A4C] text-white" : "text-[#10251A]/45")}>
                  <ItemIcon className="h-4 w-4 shrink-0" /><span className="hidden sm:block">{String(label)}</span>
                </div>
              );
            })}
          </div>
        </aside>
        <div className="min-w-0 p-3 sm:p-5">
          <div className="flex min-w-0 items-center justify-between gap-3">
            <div className="min-w-0"><p className="text-[8px] uppercase tracking-[0.14em] text-[#10251A]/40">Painel da loja</p><h4 className="truncate text-xl font-semibold sm:text-2xl">{titleById[id]}</h4></div>
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#1F8A4C]/10 text-[#1F8A4C]"><ActiveIcon className="h-5 w-5" /></span>
          </div>
          <AdminContent id={id} />
        </div>
      </div>
    </BrowserFrame>
  );
}

function AdminContent({ id }: { id: string }) {
  if (id === "pedidos") return <SimpleTable headers={["Pedido", "Cliente", "Status", "Total"]} rows={[["#1048", "Marina Alves", "Pago", "R$ 134,90"], ["#1047", "Ana Lima", "Separando", "R$ 70,00"], ["#1046", "Júlia Reis", "Enviado", "R$ 165,00"]]} />;
  if (id === "catalogo") return <SimpleTable headers={["Produto", "Variações", "Estoque", "Preço"]} rows={[["Vestido vinho", "P, M, G", "12", "R$ 70"], ["Body essencial", "U", "8", "R$ 69,90"], ["Saia camurça", "P, M, G", "5", "R$ 65"]]} />;
  if (id === "clientes") return <SimpleTable headers={["Cliente", "Pedidos", "Última compra", "Total"]} rows={[["Marina Alves", "4", "Hoje", "R$ 419"], ["Ana Lima", "2", "Ontem", "R$ 165"], ["Júlia Reis", "3", "12 jul", "R$ 284"]]} />;
  if (id === "financeiro") return <ChartContent />;
  if (id === "crescimento") return <GrowthContent />;
  return <OverviewContent />;
}

function OverviewContent() {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[["Faturamento", "R$ 8.420"], ["Pedidos", "64"], ["Ticket médio", "R$ 131"], ["Clientes", "48"]].map(([label, value]) => (
          <div key={label} className="rounded-xl border border-[#10251A]/10 bg-white p-3"><p className="text-[8px] text-[#10251A]/45">{label}</p><p className="mt-1 text-sm font-bold sm:text-base">{value}</p></div>
        ))}
      </div>
      <ChartBars />
    </div>
  );
}

function ChartContent() {
  return <div className="mt-5"><div className="grid grid-cols-2 gap-2"><div className="rounded-xl border border-[#10251A]/10 bg-white p-4"><p className="text-[8px] text-[#10251A]/45">Receita paga</p><p className="mt-1 text-xl font-bold">R$ 8.420</p></div><div className="rounded-xl border border-[#10251A]/10 bg-white p-4"><p className="text-[8px] text-[#10251A]/45">A receber</p><p className="mt-1 text-xl font-bold">R$ 1.280</p></div></div><ChartBars /></div>;
}

function ChartBars() {
  return <div className="mt-4 flex h-40 items-end gap-2 rounded-xl border border-[#10251A]/10 bg-white p-4">{[35, 55, 42, 68, 58, 82, 72, 94].map((height, index) => <span key={index} style={{ height: `${height}%` }} className="min-w-0 flex-1 rounded-t-md bg-[#1F8A4C]/70" />)}</div>;
}

function GrowthContent() {
  return <div className="mt-5 grid gap-3 sm:grid-cols-2">{[[TicketPercent, "Cupom BEMVINDA10", "18 usos"], [Truck, "Retirada em Salvador", "24 pedidos"], [BarChart3, "Vestidos em alta", "+32%"], [Users, "Clientes recorrentes", "38%"]].map(([Icon, title, value]) => { const GrowthIcon = Icon as typeof TicketPercent; return <div key={String(title)} className="flex items-center gap-3 rounded-xl border border-[#10251A]/10 bg-white p-4"><span className="grid h-9 w-9 place-items-center rounded-lg bg-[#1F8A4C]/10 text-[#1F8A4C]"><GrowthIcon className="h-4 w-4" /></span><div className="min-w-0"><p className="truncate text-[10px] font-bold">{String(title)}</p><p className="text-[9px] text-[#10251A]/45">{String(value)}</p></div></div>; })}</div>;
}

function SimpleTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="mt-5 min-w-0 overflow-hidden rounded-xl border border-[#10251A]/10 bg-white">
      <div className="grid grid-cols-4 border-b border-[#10251A]/10 bg-[#F8F5EF] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.08em] text-[#10251A]/40">{headers.map((header) => <span key={header} className="truncate">{header}</span>)}</div>
      {rows.map((row) => <div key={row[0]} className="grid grid-cols-4 border-b border-[#10251A]/5 px-3 py-3 text-[8px] last:border-0 sm:text-[9px]">{row.map((cell, index) => <span key={`${row[0]}-${index}`} className={cn("truncate", index === 2 && "text-[#1F8A4C]")}>{cell}</span>)}</div>)}
    </div>
  );
}

function PreviewSection({ title, children }: { title: string; children: ReactNode }) {
  return <div className="rounded-xl border border-[#10251A]/10 bg-white p-4"><p className="mb-3 text-[10px] font-bold">{title}</p>{children}</div>;
}

function Field({ label }: { label: string }) {
  return <div className="rounded-lg border border-[#10251A]/10 bg-[#F8F5EF] px-3 py-2 text-[8px] text-[#10251A]/40">{label}</div>;
}

function Choice({ icon, label, detail, active = false, large = false }: { icon: ReactNode; label: string; detail: string; active?: boolean; large?: boolean }) {
  return <div className={cn("rounded-xl border p-3", large && "p-5", active ? "border-[#1F8A4C] bg-[#1F8A4C]/5" : "border-[#10251A]/10 bg-white")}><div className="flex items-center gap-2 text-[#1F8A4C]">{icon}<span className="text-[10px] font-bold text-[#10251A]">{label}</span></div><p className="mt-2 text-[8px] text-[#10251A]/45">{detail}</p></div>;
}
