const logos = [
  "Anipet",
  "Proprium",
  "Dieisson Adv.",
  "CRM Clínicas",
  "Academy+",
  "Noely",
  "Potter Studio",
];

export default function LogosStrip() {
  return (
    <section
      aria-label="Empresas atendidas pela Yamaji Studio"
      className="relative border-y border-white/[0.06] bg-[#0A0C11]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0C11] to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0C11] to-transparent"
      />

      <div className="mx-auto max-w-container px-6 py-16">
        <p className="mb-12 text-center text-[11px] font-medium uppercase tracking-[0.24em] text-white/40">
          Empresas que já operam com Yamaji
        </p>

        <ul className="grid grid-cols-2 items-center gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {logos.map((logo) => (
            <li
              key={logo}
              className="flex items-center justify-center text-[15px] font-semibold tracking-tight text-white/35 transition duration-300 hover:text-white/80"
            >
              {logo}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
