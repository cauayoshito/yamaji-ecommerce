export default function StatCard({
  number,
  description,
}: {
  number: string;
  description: string;
}) {
  return (
    <div className="card border-white/20 bg-white/[0.06]">
      <div className="text-4xl font-extrabold text-accent">{number}</div>
      <div className="mt-1 text-muted">{description}</div>
    </div>
  );
}
