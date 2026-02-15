// components/IntegrationsStrip.tsx

type Item = {
  src: string;
  label: string;
  w: number; // largura p/ equalizar footprint
};

const items: Item[] = [
  { src: "/images/meta.svg", label: "Meta Ads", w: 84 },
  { src: "/images/google-ads-icon.svg", label: "Google Ads", w: 96 },
  { src: "/images/ga4.svg", label: "GA4", w: 64 },
  { src: "/images/n8n-color.svg", label: "n8n", w: 72 },
  { src: "/images/whatsapp.svg", label: "WhatsApp", w: 84 },
  { src: "/images/instagram-2016-5.svg", label: "Instagram", w: 84 },
];

// componente que “tinta” o svg mono usando mask (fica aqua no dark)
function MonoLogo({ src, label, w }: Item) {
  return (
    <div
      role="img"
      aria-label={label}
      title={label}
      className="h-6 md:h-7 bg-accent opacity-70 transition hover:opacity-100"
      style={{
        width: w,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

export default function IntegrationsStrip() {
  return (
    <section className="bg-bg/80">
      <div className="mx-auto max-w-container px-6">
        {/* linha superior */}
        <div className="mx-auto h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* logos */}
        <div className="flex flex-wrap items-center justify-center gap-7 py-8">
          {items.map((it) => (
            <MonoLogo key={it.label} {...it} />
          ))}
        </div>

        {/* linha inferior */}
        <div className="mx-auto h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}
