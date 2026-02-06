import { ShoppingBag, Heart, ArrowRight, ImageIcon } from "lucide-react";

const CATEGORIES = [
  "Todos",
  "Moda",
  "Acessórios",
  "Beleza",
  "Casa",
  "Lifestyle",
];

const PRODUCTS = [
  {
    name: "Relógio Aurora",
    price: "R$ 299",
    desc: "Minimalista, pulseira premium",
  },
  {
    name: "Fone Wave Pro",
    price: "R$ 189",
    desc: "Noise cancelling, sem fio",
  },
  {
    name: "Tablet WorkTab 12",
    price: "R$ 749",
    desc: "128GB, grafite",
  },
  {
    name: "Câmera Retro Mini",
    price: "R$ 120",
    desc: "Instantâneo, edição limitada",
  },
];

export default function CommerceDemoStorefront() {
  return (
    <main className="bg-[#0A0A0B] text-fg overflow-x-hidden">
      {/* Hero */}
      <section className="px-4 py-10 sm:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,163,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(91,45,255,0.25),_transparent_60%)] opacity-80" />
            <div className="relative grid gap-10 px-6 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-14 md:py-16">
              <div className="min-w-0 space-y-6">
                <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Storefront Yamaji
                </span>
                <h1 className="text-2xl font-semibold leading-tight md:text-4xl lg:text-5xl">
                  Sua vitrine online pronta para vender 24h
                </h1>
                <p className="text-sm text-muted md:text-base">
                  Experiência premium com navegação rápida, checkout simples e
                  visual que valoriza cada produto.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-accent2 px-6 py-4 text-sm font-semibold text-black sm:w-auto">
                    Ver ofertas
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-fg hover:bg-white/10 sm:w-auto">
                    Falar com vendedor
                  </button>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[1, 2].map((item) => (
                  <div
                    key={item}
                    className="flex h-40 flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-accent/10 text-center"
                  >
                    <ImageIcon className="h-6 w-6 text-accent" />
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
                      Imagem do produto
                    </p>
                  </div>
                ))}
                <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      Pedido em andamento
                    </p>
                    <p className="text-lg font-semibold">#2049 • R$ 428</p>
                  </div>
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
                    Pagamento aprovado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl overflow-x-auto border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            {CATEGORIES.map((label, index) => (
              <button
                key={label}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition ${
                  index === 0
                    ? "bg-accent text-black"
                    : "bg-white/5 text-muted hover:bg-white/10"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-4 pb-24 pt-10 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">
                Produtos em destaque
              </h2>
              <p className="text-sm text-muted">
                Seleção premium com margem alta e giro rápido.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="h-10 w-10 rounded-full border border-white/10 text-muted hover:bg-white/5">
                ‹
              </button>
              <button className="h-10 w-10 rounded-full border border-white/10 text-muted hover:bg-white/5">
                ›
              </button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <div
                key={product.name}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-accent/40 hover:shadow-[0_0_30px_rgba(0,255,163,0.2)]"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-accent/10 p-4">
                  <div className="flex h-32 flex-col items-center justify-center text-center">
                    <ImageIcon className="h-6 w-6 text-accent" />
                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
                      Imagem do produto
                    </p>
                  </div>
                  <button className="absolute bottom-3 left-1/2 w-[90%] -translate-x-1/2 rounded-lg border border-white/20 bg-white/10 py-2 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
                    Adicionar rápido
                  </button>
                  <button
                    className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/40 text-muted hover:text-accent"
                    aria-label="Favoritar"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold break-words">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted break-words">
                      {product.desc}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-accent">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-4 py-12 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-accent">
                <ShoppingBag className="h-4 w-4" />
              </div>
              <span className="text-lg font-semibold uppercase tracking-[0.2em]">
                Yamaji
              </span>
            </div>
            <p className="mt-3 text-xs text-muted">
              Vitrine premium para lojistas que querem controle total.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-muted">
            <button className="hover:text-fg">Suporte</button>
            <button className="hover:text-fg">Envio</button>
            <button className="hover:text-fg">Trocas</button>
            <button className="hover:text-fg">Privacidade</button>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-xs text-muted">
          © 2024 Yamaji E-commerce. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}

