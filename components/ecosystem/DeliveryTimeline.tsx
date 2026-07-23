import { deliverySteps } from "@/data/ecosystem";

export default function DeliveryTimeline() {
  return (
    <ol className="relative grid gap-4 md:grid-cols-5">
      <div
        className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent md:block"
        aria-hidden="true"
      />
      {deliverySteps.map((step) => (
        <li
          key={step.number}
          className="relative rounded-2xl border border-white/[0.08] bg-[#0D1015] p-5 md:border-0 md:bg-transparent md:px-3 md:text-center"
        >
          <span className="relative z-10 inline-grid h-12 w-12 place-items-center rounded-full border border-accent/25 bg-[#0B1113] font-mono text-[11px] font-semibold text-accent shadow-[0_0_30px_-10px_rgba(94,234,212,.5)]">
            {step.number}
          </span>
          <h3 className="mt-4 text-sm font-semibold text-white">{step.title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-white/42">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
