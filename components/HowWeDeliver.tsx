// components/HowWeDeliver.tsx
export default function HowWeDeliver() {
  return (
    <section id="como-entregamos" className="section scroll-mt-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="h2">Como entregamos resultado</h2>
          <p className="lead">
            Do diagnóstico à escala, com métricas claras e otimização contínua.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          <div className="card">
            <h3 className="h4">1) Diagnóstico</h3>
            <p className="muted">
              Analisamos oferta, público e funil. Definimos metas e KPIs.
            </p>
          </div>
          <div className="card">
            <h3 className="h4">2) Execução</h3>
            <p className="muted">
              Site rápido, criativos que vendem e automações com IA 24/7.
            </p>
          </div>
          <div className="card">
            <h3 className="h4">3) Escala</h3>
            <p className="muted">
              Otimização semanal, novas audiências e plano de crescimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
