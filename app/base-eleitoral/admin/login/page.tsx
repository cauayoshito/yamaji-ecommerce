import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login | Base Eleitoral Pro",
  description: "Acesso administrativo da operacao Base Eleitoral Pro.",
};

export default function BaseEleitoralAdminLoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#10221d] font-display">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(19,236,182,0.08),transparent_60%)]" />
        <div className="absolute -left-[10%] -top-[20%] h-[50%] w-[50%] rounded-full bg-[#13ecb6]/5 blur-[120px]" />
        <div className="absolute -right-[10%] top-[60%] h-[40%] w-[40%] rounded-full bg-[#13ecb6]/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-4 w-full max-w-md p-6">
        <div className="group relative overflow-hidden rounded-2xl border border-[#13ecb6]/20 bg-[#10221d]/70 shadow-[0_0_40px_-10px_rgba(19,236,182,0.15)] ring-1 ring-white/5 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_0_50px_-10px_rgba(19,236,182,0.25)]">
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-[#13ecb6] to-transparent opacity-50" />

          <div className="p-8 sm:p-10">
            <div className="mb-10 text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#13ecb6]/20 bg-[#13ecb6]/10 text-[#13ecb6]">
                *
              </div>
              <h2 className="mb-1 text-2xl font-bold tracking-tight text-white/95">
                Acesso Administrativo
              </h2>
              <p className="text-sm font-medium tracking-wide text-[#13ecb6]/80">
                Area restrita da equipe.
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="ml-1 block text-sm font-medium text-gray-400" htmlFor="email">
                  Email
                </label>
                <input
                  className="block w-full rounded-lg border border-gray-700/50 bg-black/20 px-3 py-3 text-white placeholder-gray-600 transition-all duration-200 hover:border-gray-600 focus:border-[#13ecb6]/50 focus:outline-none focus:ring-2 focus:ring-[#13ecb6]/50"
                  id="email"
                  name="email"
                  placeholder="nome@baseeleitoral.com"
                  type="email"
                />
              </div>

              <div className="space-y-2">
                <label className="ml-1 block text-sm font-medium text-gray-400" htmlFor="password">
                  Senha
                </label>
                <input
                  className="block w-full rounded-lg border border-gray-700/50 bg-black/20 px-3 py-3 text-white placeholder-gray-600 transition-all duration-200 hover:border-gray-600 focus:border-[#13ecb6]/50 focus:outline-none focus:ring-2 focus:ring-[#13ecb6]/50"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type="password"
                />
              </div>

              <div className="pt-2">
                <button
                  className="w-full transform rounded-lg bg-gradient-to-r from-[#13ecb6] via-[#4afad2] to-[#13ecb6] bg-[length:200%_auto] px-4 py-3 text-sm font-bold uppercase tracking-wide text-[#0b1210] shadow-[0_0_20px_-5px_rgba(19,236,182,0.4)] transition-all duration-500 hover:-translate-y-0.5 hover:bg-[position:right_center]"
                  type="button"
                >
                  Entrar
                </button>
              </div>
            </form>

            <div className="mt-8 space-y-4 text-center">
              <div>
                <Link
                  className="inline-flex items-center justify-center gap-1 text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-white"
                  href="/base-eleitoral"
                >
                  Voltar para a landing
                </Link>
              </div>
              <div className="flex items-center justify-center gap-2 border-t border-white/5 pt-6 text-xs text-gray-600">
                <span>Acesso seguro com SSL.</span>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-10 left-1/2 h-20 w-3/4 -translate-x-1/2 bg-[#13ecb6]/20 blur-[50px]" />
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">© 2026 Yamaji Studio</p>
        </div>
      </div>
    </div>
  );
}

