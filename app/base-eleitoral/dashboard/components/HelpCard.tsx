import Link from "next/link";

export default function HelpCard() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-accent/20 bg-gradient-to-br from-[#0d1b17] to-[#10221d] p-6">
      <div className="relative z-10">
        <h4 className="mb-2 font-medium text-white">Precisa de ajuda?</h4>
        <p className="mb-4 text-sm text-slate-400">
          Acesse a central de ajuda para tutoriais sobre importacao de dados.
        </p>
        <Link className="text-sm font-medium text-accent hover:underline" href="#">
          Ir para suporte -&gt;
        </Link>
      </div>
      <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-accent/10 blur-xl" />
    </div>
  );
}
