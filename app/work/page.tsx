// app/work/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { APPLY_ROUTE } from "@/lib/routes";
import WorkGrid from "@/components/WorkGrid"; // ⬅️ componente cliente

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="pt-32 md:pt-40">
        <section className="container section">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="h1">Projetos</h1>
            <p className="lead">
              Alguns trabalhos que representam nossa abordagem: clareza,
              estética e conversão.
            </p>
          </div>

          {/* grid + filtros (client component) */}
          <WorkGrid />

          <div className="mt-12 text-center">
            <a
              href={APPLY_ROUTE}
              className="btn bg-accent/15 border-accent/40 text-accent hover:bg-accent/25"
            >
              Quero um projeto com esse nível
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
