import Container from "@/components/ui/Container";

const YOUTUBE_ID = "VIDEO_ID_AQUI";

export default function HeroVideoSection() {
  return (
    <section className="bg-[#0B0F14] pb-16 md:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 right-10 h-48 w-48 rounded-full bg-accent2/20 blur-[120px]" />
          <div className="relative aspect-video overflow-hidden rounded-2xl">
            <iframe
              className="h-full w-full pointer-events-none"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${YOUTUBE_ID}`}
              title="Yamaji Studio"
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/50" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,163,0.12),transparent_55%)]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
