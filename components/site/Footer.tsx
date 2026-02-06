import Link from "next/link";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import { APPLY_ROUTE } from "@/lib/routes";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Yamaji Studio</h3>
            <p className="text-sm text-muted">
              Estrutura digital premium para empresas que querem operar como
              tech. Sistemas, automações, presença e growth conectados.
            </p>
          </div>
          <div className="space-y-3 text-sm text-muted">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Navegação
            </p>
            <Link href="/cases" className="block hover:text-fg">
              Cases
            </Link>
            <Link href="/sobre" className="block hover:text-fg">
              Sobre
            </Link>
            <Link href={APPLY_ROUTE} className="block hover:text-fg">
              Contato
            </Link>
          </div>
          <div className="space-y-3 text-sm text-muted">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Soluções
            </p>
            <Link href="/solucoes/sistemas" className="block hover:text-fg">
              Sistemas & Plataformas
            </Link>
            <Link href="/solucoes/automacao" className="block hover:text-fg">
              Automação & Integrações
            </Link>
            <Link href="/solucoes/presenca" className="block hover:text-fg">
              Presença Digital
            </Link>
            <Link href="/solucoes/growth" className="block hover:text-fg">
              Growth & Ads
            </Link>
          </div>
        </div>
        <Divider className="my-8" />
        <div className="flex flex-col items-start justify-between gap-4 text-xs text-muted md:flex-row">
          <span>© 2024 Yamaji Studio. Todos os direitos reservados.</span>
          <span>Salvador • Brasil</span>
        </div>
      </Container>
    </footer>
  );
}
