import Link from "next/link";

export default function CommerceDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-fg">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0A0A0B]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            href="/e-commerce"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-accent"
          >
            Yamaji E-commerce Demo
          </Link>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <Link
              href="/e-commerce/demo"
              className="text-muted hover:text-fg"
            >
              Ver Demo (Visao Geral)
            </Link>
            <Link
              href="/e-commerce/demo/storefront"
              className="text-muted hover:text-fg"
            >
              Storefront
            </Link>
            <Link
              href="/e-commerce/demo/cliente"
              className="text-muted hover:text-fg"
            >
              Cliente
            </Link>
            <Link
              href="/e-commerce/demo/dono"
              className="text-muted hover:text-fg"
            >
              Dono
            </Link>
            <Link
              href="/e-commerce/demo/dashboard"
              className="text-muted hover:text-fg"
            >
              Dashboard
            </Link>
          </nav>

          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-fg">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-48 rounded-2xl border border-white/10 bg-[#0A0A0B] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
              <div className="flex flex-col gap-2 text-sm">
                <Link
                  href="/e-commerce/demo"
                  className="rounded-lg px-3 py-2 text-muted hover:bg-white/5 hover:text-fg"
                >
                  Ver Demo (Visao Geral)
                </Link>
                <Link
                  href="/e-commerce/demo/storefront"
                  className="rounded-lg px-3 py-2 text-muted hover:bg-white/5 hover:text-fg"
                >
                  Storefront
                </Link>
                <Link
                  href="/e-commerce/demo/cliente"
                  className="rounded-lg px-3 py-2 text-muted hover:bg-white/5 hover:text-fg"
                >
                  Cliente
                </Link>
                <Link
                  href="/e-commerce/demo/dono"
                  className="rounded-lg px-3 py-2 text-muted hover:bg-white/5 hover:text-fg"
                >
                  Dono
                </Link>
                <Link
                  href="/e-commerce/demo/dashboard"
                  className="rounded-lg px-3 py-2 text-muted hover:bg-white/5 hover:text-fg"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </details>
        </div>
      </header>

      <main className="pt-16">{children}</main>
    </div>
  );
}

