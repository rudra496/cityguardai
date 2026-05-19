import type { Incident } from "@/lib/scenarios";

const severityBadge: Record<string, string> = {
  High: "bg-red-500/15 text-red-400 ring-red-500/30",
  Medium: "bg-amber-500/15 text-amber-400 ring-amber-500/30",
  Low: "bg-green-500/15 text-green-400 ring-green-500/30",
};

const severityDot: Record<string, string> = {
  High: "bg-red-500 shadow-red-500/50",
  Medium: "bg-amber-500 shadow-amber-500/50",
  Low: "bg-green-500 shadow-green-500/50",
};

const statusColor: Record<string, string> = {
  Escalated: "text-red-400",
  Monitoring: "text-amber-400",
  Resolved: "text-green-400",
};

export default function IncidentList({
  incidents,
  visibleCount,
}: {
  incidents: Incident[];
  visibleCount: number;
}) {
  if (incidents.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 py-12 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
          <svg className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
        </div>
        <p className="text-sm text-slate-500">No incidents yet</p>
        <p className="text-xs text-slate-600">Run a scenario to populate</p>
      </div>
    );
  }

  const visible = incidents.slice(0, visibleCount);

  return (
    <div className="space-y-2 overflow-y-auto scrollbar-thin pr-1">
      {visible.map((inc, i) => (
        <div
          key={inc.id}
          className="animate-slide-up rounded-lg border border-surface-border bg-surface-card/60 p-3 opacity-0 card-hover"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span
                className={`h-2 w-2 shrink-0 rounded-full shadow-sm ${severityDot[inc.severity]}`}
              />
              <span className="truncate text-sm font-semibold text-white">
                {inc.type}
              </span>
            </div>
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${severityBadge[inc.severity]}`}
            >
              {inc.severity}
            </span>
          </div>
          <p className="mb-1 text-[11px] font-medium text-slate-500">
            {inc.location}
          </p>
          <p className="mb-2 text-xs leading-relaxed text-slate-400">
            {inc.description}
          </p>
          <div className="flex items-center justify-between border-t border-surface-border pt-2 text-[11px]">
            <span className={`font-semibold ${statusColor[inc.status] ?? "text-slate-400"}`}>
              {inc.status}
            </span>
            <span className="font-mono text-slate-600">
              {new Date(inc.timestamp).toLocaleTimeString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
