import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  const REF = "ref=footer";
  const WHATS = {
    phone: "5571992358249",
    text: "Oi%2C%20vi%20o%20site%20da%20Yamaji%20e%20quero%20entender%20como%20voc%C3%AAs%20podem%20me%20ajudar%20a%20vender%20todos%20os%20dias.",
    utm: "utm_source=site&utm_medium=cta&utm_campaign=footer",
  };
  const waLink = `https://wa.me/${WHATS.phone}?text=${WHATS.text}&${WHATS.utm}`;

  return (
    <footer
      className="border-t border-white/10 bg-[#0A0E13]"
      aria-labelledby="footer-title"
    >
      <div className="mx-auto max-w-7xl px-4 py-12">
        <h2 id="footer-title" className="sr-only">
          Rodapé
        </h2>

        {/* Topo: logo + prova social + ações rápidas */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-yamaji-aqua.png"
              alt="Logo Yamaji Studio"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
            <span className="font-semibold text-lg">
              Yamaji<span className="text-teal-400">Studio</span>
            </span>
          </div>

          {/* Prova social */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-white/70">
            <span className="rounded-full border border-yellow-300/30 bg-yellow-400/10 px-2.5 py-1 text-yellow-200">
              ★ 5,0 • +30 negócios locais
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
              SLA &lt; 2 min
            </span>
          </div>

          {/* Ações rápidas */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-teal-400/95 hover:bg-teal-400 px-4 py-2 text-sm font-semibold text-[#0B0F14] shadow-lg shadow-teal-400/10 transition focus-visible:ring-2 focus-visible:ring-teal-300"
            >
              💬 Falar no WhatsApp
            </a>
            <a
              href={`/?${REF}#cta`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition focus-visible:ring-2 focus-visible:ring-teal-300"
            >
              Diagnosticar meu site
            </a>
          </div>
        </div>

        {/* Colunas */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-sm text-white/70">
          <div>
            <h3 className="font-semibold text-white">Serviços</h3>
            <ul className="mt-3 space-y-2">
              <li>Sites que vendem</li>
              <li>Anúncios que trazem clientes</li>
              <li>IA que responde 24/7</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Recursos</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="hover:text-white" href={`/?${REF}#cases`}>
                  Cases e prints
                </a>
              </li>
              <li>
                <a className="hover:text-white" href={`/?${REF}#comparativo`}>
                  Por que escolher a Yamaji
                </a>
              </li>
              <li>
                <a className="hover:text-white" href={`/?${REF}#garantias`}>
                  Garantias
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Empresa</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a className="hover:text-white" href="/sobre">
                  Sobre nós
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/privacidade">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="/termos">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Contato</h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="mailto:yamaji.studio@gmail.com"
                  className="hover:text-white"
                >
                  yamaji.studio@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5571992358249"
                  className="hover:text-white"
                >
                  +55 71 99235-8249
                </a>{" "}
                | Salvador — BA
              </li>
              <li>Atendimento: Seg–Sáb • 08h–20h</li>
              <li>
                <a
                  href="https://instagram.com/yamajistudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {year} Yamaji Studio — Todos os direitos reservados.
      </div>
    </footer>
  );
}
