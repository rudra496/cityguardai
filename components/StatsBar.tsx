import type { Incident } from "@/lib/scenarios";

interface StatsBarProps {
  incidents: Incident[];
}

export default function StatsBar({ incidents }: StatsBarProps) {
  const total = incidents.length;
  const high = incidents.filter((i) => i.severity === "High").length;
  const monitoring = incidents.filter((i) => i.status === "Monitoring").length;
  const escalated = incidents.filter((i) => i.status === "Escalated").length;

  const stats = [
    {
      label: "Total Incidents",
      value: total,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      ring: "ring-blue-500/20",
    },
    {
      label: "High Severity",
      value: high,
      color: "text-red-400",
      bg: "bg-red-500/10",
      ring: "ring-red-500/20",
    },
    {
      label: "Escalated",
      value: escalated,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      ring: "ring-orange-500/20",
    },
    {
      label: "Monitoring",
      value: monitoring,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      ring: "ring-amber-500/20",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className={`rounded-lg border border-surface-border ${s.bg} p-3 ring-1 ${s.ring}`}
        >
          <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
            {s.label}
          </p>
          <p className={`mt-1 text-2xl font-bold ${s.color}`}>{s.value}</p>
        </div>
      ))}
    </div>
  );
}
