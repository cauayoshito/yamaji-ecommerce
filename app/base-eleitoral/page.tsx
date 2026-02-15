import NavBar from "@/components/site/NavBar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Base Eleitoral Pro - Yamaji Studio",
  description:
    "Estrutura institucional para organizar apoiadores por bairro com captação, segmentação e controle operacional.",
};

export default function BaseEleitoralLandingPage() {
  return (
    <>
      <div className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1210]/80 backdrop-blur-xl">
        <NavBar />
      </div>

      <main className="relative bg-[#0b1210] pt-20 text-slate-200">
        <section className="relative container mx-auto grid min-h-[calc(100vh-80px)] items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:py-24">
          <div className="relative z-10 flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#13ecb6]/20 bg-[#13ecb6]/5 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#13ecb6]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#13ecb6]" />
              Estrutura Operacional
            </div>

            <h1 className="h1 leading-[0.95] text-white">
              Base <br />
              <span className="bg-gradient-to-r from-[#13ecb6] via-emerald-300 to-teal-400 bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(19,236,182,0.3)]">
                Eleitoral Pro
              </span>
            </h1>

            <div className="max-w-lg space-y-4">
              <h2 className="text-xl font-medium text-white lg:text-2xl">
                Organizacao estrategica de apoiadores para campanhas municipais.
              </h2>
              <p className="lead border-l-2 border-[#13ecb6]/30 pl-4 text-slate-400">
                Captacao inteligente. Base segmentada. Controle total.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  "LGPD-ready",
                  "Exportacao 1 clique",
                  "Segmentacao por bairro",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[#13ecb6]/20 bg-[#13ecb6]/5 px-3 py-1 text-xs font-medium text-[#13ecb6]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 pt-4 sm:w-auto sm:flex-row">
              <div className="flex flex-col items-center gap-2 sm:items-start">
                <Link
                  className="inline-flex items-center justify-center rounded-lg bg-[#13ecb6] px-8 py-4 font-bold text-[#0b1210] shadow-[0_0_30px_-5px_rgba(19,236,182,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1210]"
                  href="#contact"
                >
                  Solicitar apresentacao
                </Link>
                <p className="text-xs text-slate-500">
                  Sem compromisso • 15 min • Resposta no WhatsApp
                </p>
              </div>
              <Link
                className="group inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-transparent px-8 py-4 font-medium text-white transition-all duration-200 hover:border-[#13ecb6]/50 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1210]"
                href="/base-eleitoral/admin"
              >
                <span>Ver demo (30s)</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.75 10a.75.75 0 0 1 .75-.75h9.69L10.97 6.03a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H4.5a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:h-[600px]">
            <div className="absolute inset-0 translate-x-10 translate-y-10 rounded-full bg-[#13ecb6]/10 blur-[90px]" />

            <div className="relative w-full max-w-lg">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#13201d]/60 p-1 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                <div className="flex h-10 items-center gap-2 rounded-t-lg border-b border-white/5 bg-black/40 px-4">
                  <div className="h-3 w-3 rounded-full bg-red-500/50" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/50" />
                  <div className="h-3 w-3 rounded-full bg-green-500/50" />
                </div>

                <div className="space-y-6 rounded-b-lg bg-[#0c1311] p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { title: "Bairros", value: "42", sub: "Cobertura alta" },
                      { title: "Cadastros", value: "8.420", sub: "+120 hoje" },
                      { title: "Liderancas", value: "56", sub: "Ativas" },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="relative overflow-hidden rounded border border-white/5 bg-[#13201d] p-4"
                      >
                        <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {item.title}
                        </div>
                        <div className="mt-2 text-2xl font-bold text-white">
                          {item.value}
                        </div>
                        <div className="mt-1 text-[10px] text-[#13ecb6]">
                          {item.sub}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="h-44 w-full overflow-hidden rounded border border-white/5 bg-[#13201d] p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xs font-semibold uppercase text-slate-400">
                        Desempenho por Regiao
                      </h3>
                      <span className="text-slate-600">...</span>
                    </div>
                    <div className="flex h-[110px] items-end justify-between gap-2 px-4">
                      {[40, 60, 30, 80, 50].map((height, idx) => (
                        <div
                          key={height + idx}
                          className={
                            idx === 3
                              ? "w-full rounded-t bg-[#13ecb6] shadow-[0_0_15px_rgba(19,236,182,0.4)]"
                              : "w-full rounded-t bg-[#13ecb6]/50"
                          }
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 top-20 flex items-center gap-3 rounded-lg border border-[#13ecb6]/30 bg-[#13201d]/60 px-4 py-2 shadow-lg backdrop-blur-xl">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-[#13ecb6]/20 text-[#13ecb6]">
                  ok
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-slate-400">
                    Status
                  </div>
                  <div className="text-xs font-bold text-white">
                    Operacao ativa
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/5 bg-[#13201d] py-24">
          <div className="absolute inset-0 bg-[size:32px_32px] [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />
          <div className="container relative z-10 mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Improviso nao escala.{" "}
                <span className="text-[#13ecb6]">Estrutura escala.</span>
              </h2>
              <p className="mx-auto max-w-2xl text-slate-400">
                A diferenca entre perder contatos e construir uma base solida
                esta na ferramenta que voce utiliza.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-2xl border border-red-500/10 bg-[#0b1210] p-8">
                <h3 className="mb-6 text-xl font-bold text-white">Improviso</h3>
                <ul className="space-y-4 text-slate-400">
                  <li>Formularios isolados e desconectados</li>
                  <li>Planilhas manuais propensas a erro</li>
                  <li>Perda de dados em conversas de WhatsApp</li>
                  <li>Sem visao geografica da base</li>
                </ul>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-[#13ecb6]/20 bg-[#1a2c28] p-8 shadow-lg shadow-[#13ecb6]/5">
                <h3 className="mb-6 text-xl font-bold text-white">
                  Base Eleitoral Pro
                </h3>
                <ul className="space-y-4 text-slate-200">
                  <li>Captacao centralizada e automatica</li>
                  <li>Segmentacao inteligente por regiao</li>
                  <li>Historico completo de interacoes</li>
                  <li>Metricas em tempo real para decisao</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24">
          <div className="container mx-auto px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Controle real da base.
              </h2>
              <p className="text-slate-400">
                Funcionalidades desenhadas para a realidade da campanha.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Menos perda de contato", featured: false },
                { title: "Segmentacao por bairro", featured: true },
                { title: "Gestao de liderancas", featured: false },
                { title: "Seguranca de dados", featured: false },
                { title: "Relatorios inteligentes", featured: false },
                { title: "Exportacao facil", featured: false },
              ].map((item) => (
                <div
                  key={item.title}
                  className={
                    item.featured
                      ? "rounded-xl border border-[#13ecb6]/35 bg-[linear-gradient(135deg,rgba(19,236,182,0.12),rgba(19,236,182,0.04))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#13ecb6]/50 lg:col-span-2"
                      : "rounded-xl border border-white/5 bg-[#13201d] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#13ecb6]/30"
                  }
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-emerald-900/30 text-[#13ecb6]">
                    +
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    Estrutura padronizada para manter operacao com mais
                    previsibilidade.
                  </p>
                  {item.featured ? (
                    <p className="mt-3 text-xs font-medium text-[#13ecb6]">
                      Encontre foco por regiao em segundos
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="relative border-t border-white/5 bg-[#0c1613] py-24"
          id="sistema"
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center gap-16 lg:flex-row">
              <div className="lg:w-1/2">
                <h2 className="mb-6 text-3xl font-bold leading-tight text-white lg:text-5xl">
                  Voce nao apenas capta. <br />
                  <span className="text-slate-500">Voce acompanha.</span>
                </h2>
                <p className="mb-8 text-lg text-slate-400">
                  Um ecossistema completo para transformar apoiadores casuais em
                  eleitores fieis e multiplicadores.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Dashboard", "Gestao", "Segmentacao", "Exportacao"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-lg border border-white/5 bg-[#13201d] p-4"
                      >
                        <span className="text-[#13ecb6]">*</span>
                        <span className="font-medium text-white">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="relative lg:w-1/2">
                <div className="absolute inset-0 rounded-full bg-[#13ecb6]/20 blur-[100px]" />
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#13201d]/70 shadow-2xl backdrop-blur-xl">
                  <div className="aspect-[16/10] w-full bg-[linear-gradient(135deg,rgba(19,236,182,0.15),rgba(19,236,182,0.02))] p-6">
                    <div className="grid h-full grid-cols-2 gap-4">
                      <div className="rounded-lg border border-white/10 bg-black/20" />
                      <div className="rounded-lg border border-white/10 bg-black/20" />
                      <div className="col-span-2 rounded-lg border border-white/10 bg-black/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24" id="como-funciona">
          <div className="container mx-auto px-6">
            <div className="mb-20 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">
                Fluxo operacional
              </h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-[#13ecb6]" />
            </div>
            <div className="relative grid gap-8 md:grid-cols-4">
              <div className="absolute left-[10%] right-[10%] top-12 -z-10 hidden h-[2px] bg-gradient-to-r from-transparent via-[#13ecb6]/30 to-transparent md:block" />
              {[
                {
                  n: "01",
                  title: "Captacao",
                  text: "Entrada de dados via web e importacao.",
                },
                {
                  n: "02",
                  title: "Organizacao",
                  text: "Centralizacao e verificacao automatica.",
                },
                {
                  n: "03",
                  title: "Segmentacao",
                  text: "Filtros por bairro e perfil demografico.",
                },
                {
                  n: "04",
                  title: "Comunicacao",
                  text: "Disparos estrategicos e relacionamento.",
                },
              ].map((step) => (
                <div key={step.n} className="relative">
                  <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#0b1210] bg-[#13201d]">
                    <span className="text-3xl text-[#13ecb6]">*</span>
                    <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#13ecb6] text-sm font-bold text-[#0b1210]">
                      {step.n}
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="mb-2 text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-400">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24" id="apoiar">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1210] via-emerald-900/10 to-[#0b1210]" />
          <div className="container relative z-10 mx-auto px-6">
            <div className="mx-auto max-w-2xl rounded-2xl border border-[#13ecb6]/20 bg-[#13201d]/60 p-8 shadow-2xl backdrop-blur-xl md:p-12">
              <div className="mb-8 text-center">
                <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
                  Formulario de Apoio
                </h2>
                <p className="text-sm text-slate-400">
                  Seus dados serao usados exclusivamente para organizacao da
                  base.
                </p>
              </div>
              <form className="space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400">
                      Nome Completo
                    </label>
                    <input
                      className="w-full rounded-lg border border-white/10 bg-[#0b1210]/80 px-4 py-3 text-white placeholder-slate-700 focus:border-[#13ecb6] focus:outline-none"
                      placeholder="Digite seu nome"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400">
                      WhatsApp
                    </label>
                    <input
                      className="w-full rounded-lg border border-white/10 bg-[#0b1210]/80 px-4 py-3 text-white placeholder-slate-700 focus:border-[#13ecb6] focus:outline-none"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400">
                      Bairro
                    </label>
                    <select className="w-full rounded-lg border border-white/10 bg-[#0b1210]/80 px-4 py-3 text-white focus:border-[#13ecb6] focus:outline-none">
                      <option>Selecione</option>
                      <option>Centro</option>
                      <option>Zona Norte</option>
                      <option>Zona Sul</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-400">
                    Observacoes
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-white/10 bg-[#0b1210]/80 px-4 py-3 text-white placeholder-slate-700 focus:border-[#13ecb6] focus:outline-none"
                    placeholder="Mensagem opcional..."
                    rows={3}
                  />
                </div>
                <button
                  className="mt-4 w-full rounded-lg bg-[#13ecb6] py-4 text-lg font-bold text-[#0b1210]"
                  type="button"
                >
                  Quero apoiar
                </button>
                <p className="text-center text-xs text-slate-600">
                  Dados protegidos. Uso restrito e confidencial.
                </p>
              </form>
            </div>
          </div>
        </section>

        <section
          className="border-t border-white/5 bg-[#0d1613] py-24"
          id="demo"
        >
          <div className="container mx-auto px-6">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-white">
                  Visao Geral dos Modulos
                </h2>
                <p className="text-slate-400">
                  Interface intuitiva, desenhada para alta performance.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Landing Page",
                  desc: "Pagina publica para captacao de novos apoiadores.",
                  href: "/base-eleitoral",
                },
                {
                  title: "Painel",
                  desc: "Dashboard administrativo com metricas em tempo real.",
                  href: "/base-eleitoral/admin",
                },
                {
                  title: "Cadastro",
                  desc: "Interface interna para cadastro rapido de eleitores.",
                  href: "/base-eleitoral/admin",
                },
                {
                  title: "Exportacao",
                  desc: "Ferramentas para gerar relatorios e listas de contatos.",
                  href: "/base-eleitoral/admin",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-xl border border-white/5 bg-[#13201d] transition-all duration-300 hover:-translate-y-1 hover:border-[#13ecb6]/40"
                >
                  <div className="relative aspect-[4/3] bg-black/40">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="relative z-20 -mt-12 p-5">
                    <h3 className="mb-1 text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mb-4 h-8 text-xs text-slate-400">
                      {item.desc}
                    </p>
                    <ul className="mb-4 space-y-1 text-xs text-slate-400">
                      {[
                        "Acesso rapido",
                        "Interface limpa",
                        "Fluxo operacional",
                      ].map((point) => (
                        <li key={point} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#13ecb6]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      className="inline-flex w-full items-center justify-center gap-2 rounded border border-white/10 bg-white/5 py-2 text-center text-sm font-medium text-white transition-all hover:border-transparent hover:bg-[#13ecb6] hover:text-[#0b1210] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#13201d]"
                      href={item.href}
                    >
                      <span>Ver modulo</span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.75 10a.75.75 0 0 1 .75-.75h9.69L10.97 6.03a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H4.5a.75.75 0 0 1-.75-.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-24" id="contact">
          <div className="absolute inset-0 bg-[#13ecb6]/5" />
          <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#0b1210] to-transparent" />
          <div className="container relative z-10 mx-auto px-6 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Estruture sua base.
              <br />
              Organize sua operacao.
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-lg bg-[#13ecb6] px-8 py-4 font-bold text-[#0b1210] shadow-[0_0_30px_-5px_rgba(19,236,182,0.45)]"
                href={"/aplicar"}
              >
                Agendar apresentacao
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-4 font-medium text-white transition-all hover:bg-white/10"
                href={"https://wa.me/5571992258349"}
              >
                Falar com especialista
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#0b1210] py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-white/10 text-[10px] font-bold text-white">
              Y
            </div>
            <div>
              <p className="text-sm text-slate-500">© 2026 Yamaji Studio</p>
              <p className="text-xs text-slate-600">
                Base Eleitoral Pro e um produto Yamaji Studio
              </p>
            </div>
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link
              className="transition-colors hover:text-[#13ecb6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1210]"
              href="#"
            >
              Termos de Uso
            </Link>
            <Link
              className="transition-colors hover:text-[#13ecb6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1210]"
              href="#"
            >
              Politica de Privacidade
            </Link>
            <Link
              className="transition-colors hover:text-[#13ecb6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#13ecb6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1210]"
              href="#"
            >
              Suporte
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
