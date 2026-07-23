import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ecosystemSolutions } from "@/data/ecosystem";
import {
  GENERAL_WHATSAPP_LINK,
  WHATSAPP_DISPLAY_NUMBER,
} from "@/lib/contact";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#07080A]">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Ecossistema Yamaji — página inicial">
              <Image src="/images/logo-yamaji-aqua.png" alt="" width={34} height={34} className="h-8 w-8 object-contain" />
              <div>
                <p className="text-sm font-semibold text-white">Yamaji Studio</p>
                <p className="text-[9px] uppercase tracking-[0.16em] text-accent">Ecossistema Yamaji</p>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/42">
              Sites, sistemas, automação e IA construídos para a realidade de cada mercado.
            </p>
            <a href={GENERAL_WHATSAPP_LINK} target="_blank" rel="noreferrer noopener" data-cta="whatsapp" data-label="footer" className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-semibold text-white/75 transition hover:border-white/20 hover:text-white">
              Falar com a Yamaji →
            </a>
          </div>

          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/30">Soluções</p>
            <nav className="mt-4 space-y-3 text-sm text-white/52" aria-label="Soluções no rodapé">
              {ecosystemSolutions.map((solution) => (
                <Link key={solution.slug} href={`/${solution.slug}`} className="block transition hover:text-white">
                  {solution.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/30">Empresa</p>
            <nav className="mt-4 space-y-3 text-sm text-white/52" aria-label="Empresa no rodapé">
              <Link href="/cases" className="block transition hover:text-white">Cases</Link>
              <Link href="/#como-funciona" className="block transition hover:text-white">Como funciona</Link>
              <Link href="/sobre" className="block transition hover:text-white">Sobre</Link>
              <Link href="/aplicar" className="block transition hover:text-white">Contato</Link>
            </nav>
          </div>

          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/30">Contato</p>
            <div className="mt-4 space-y-3 text-sm text-white/52">
              <a href="mailto:yamaji.studio@gmail.com" className="block break-all transition hover:text-white">yamaji.studio@gmail.com</a>
              <a href={GENERAL_WHATSAPP_LINK} target="_blank" rel="noreferrer noopener" className="block transition hover:text-white">{WHATSAPP_DISPLAY_NUMBER}</a>
              <p>Salvador · Bahia · Brasil</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.06] pt-6 text-[11px] text-white/28 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Yamaji Studio. Todos os direitos reservados.</span>
          <span>Uma estrutura. Quatro soluções.</span>
        </div>
      </Container>
    </footer>
  );
}
