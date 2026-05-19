import type { AgentStep } from "@/lib/scenarios";

const toolStyles: Record<string, string> = {
  "Elastic MCP": "text-blue-400 bg-blue-500/10 ring-blue-500/20",
  "Agent Reasoning": "text-purple-400 bg-purple-500/10 ring-purple-500/20",
  "GitLab MCP": "text-orange-400 bg-orange-500/10 ring-orange-500/20",
  "MongoDB MCP": "text-emerald-400 bg-emerald-500/10 ring-emerald-500/20",
};

export default function AgentLog({
  steps,
  visibleCount,
}: {
  steps: AgentStep[];
  visibleCount: number;
}) {
  if (steps.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 py-12 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
          <svg className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
        </div>
        <p className="text-sm text-slate-500">Agent idle</p>
        <p className="text-xs text-slate-600">Steps appear as agent reasons</p>
      </div>
    );
  }

  const visible = steps.slice(0, visibleCount);
  const isRunning = visibleCount < steps.length;

  return (
    <div className="space-y-0 overflow-y-auto scrollbar-thin pr-1">
      {visible.map((s, i) => {
        const isLast = i === visible.length - 1;
        return (
          <div key={s.step} className="relative flex gap-3 pb-4">
            {/* Timeline connector */}
            {!isLast && (
              <div className="absolute left-[11px] top-6 h-full w-px bg-surface-border" />
            )}

            {/* Step number */}
            <div
              className={`relative z-10 mt-0.5 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full ${
                isLast && isRunning
                  ? "bg-blue-500/30 ring-1 ring-blue-400/60 animate-pulse"
                  : "bg-blue-600/20 ring-1 ring-blue-500/40"
              }`}
            >
              <span className="text-[10px] font-bold text-blue-400">
                {s.step}
              </span>
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1 animate-slide-up opacity-0" style={{ animationDelay: "50ms" }}>
              <p className="mb-1 text-xs font-medium leading-snug text-white">
                {s.action}
              </p>
              <span
                className={`mb-1.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ring-1 ${
                  toolStyles[s.tool] ?? "bg-slate-700 text-slate-300 ring-slate-600"
                }`}
              >
                {s.tool}
              </span>
              <p className="text-[11px] leading-relaxed text-slate-400">
                {s.result}
              </p>
            </div>
          </div>
        );
      })}

      {/* Running indicator */}
      {isRunning && (
        <div className="flex items-center gap-2 py-2 pl-1">
          <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
          <span className="text-xs text-blue-400">Agent reasoning…</span>
        </div>
      )}
    </div>
  );
}
