import type { MapZone } from "@/lib/scenarios";

const riskStyles: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  High: {
    bg: "bg-red-500/20",
    border: "border-red-500/40",
    text: "text-red-400",
    dot: "bg-red-500",
  },
  Medium: {
    bg: "bg-amber-500/15",
    border: "border-amber-500/30",
    text: "text-amber-400",
    dot: "bg-amber-500",
  },
  Low: {
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    text: "text-green-400",
    dot: "bg-green-500",
  },
};

export default function CityMap({
  zones,
  visible,
}: {
  zones: MapZone[];
  visible: boolean;
}) {
  if (zones.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 py-12 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800">
          <svg className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
          </svg>
        </div>
        <p className="text-sm text-slate-500">No map data</p>
        <p className="text-xs text-slate-600">Run a scenario to see zones</p>
      </div>
    );
  }

  return (
    <div className="relative flex h-full flex-col">
      {/* Legend */}
      <div className="mb-3 flex items-center gap-5 text-[11px]">
        <span className="flex items-center gap-1.5 text-slate-400">
          <span className="h-2 w-2 rounded-sm bg-red-500/70" /> High
        </span>
        <span className="flex items-center gap-1.5 text-slate-400">
          <span className="h-2 w-2 rounded-sm bg-amber-500/70" /> Medium
        </span>
        <span className="flex items-center gap-1.5 text-slate-400">
          <span className="h-2 w-2 rounded-sm bg-green-500/70" /> Low
        </span>
      </div>

      {/* 3x3 Zone Grid */}
      <div className="grid flex-1 grid-cols-3 grid-rows-3 gap-2">
        {zones.map((zone, i) => {
          const style = riskStyles[zone.riskLevel];
          return (
            <div
              key={zone.id}
              className={`flex flex-col items-center justify-center rounded-lg border p-2 transition-all duration-500 ${style.bg} ${style.border} ${
                visible && zone.riskLevel === "High" ? "animate-pulse-glow" : ""
              } ${visible ? "opacity-100" : "opacity-40"}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="mb-0.5 text-[9px] font-bold uppercase tracking-widest text-slate-500">
                {zone.id.replace("z", "Z")}
              </span>
              <span className="text-center text-[11px] font-medium leading-tight text-white">
                {zone.label}
              </span>
              <div className="mt-1 flex items-center gap-1">
                <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                <span className={`text-[10px] font-semibold ${style.text}`}>
                  {zone.riskLevel}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
