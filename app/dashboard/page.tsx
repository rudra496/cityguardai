"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Navbar from "@/components/Navbar";
import StatsBar from "@/components/StatsBar";
import IncidentList from "@/components/IncidentList";
import CityMap from "@/components/CityMap";
import AgentLog from "@/components/AgentLog";
import {
  scenarios,
  scenarioOptions,
  type ScenarioId,
  type ScenarioData,
} from "@/lib/scenarios";

export default function DashboardPage() {
  const [selected, setSelected] = useState<ScenarioId>("world_cup_stadium");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ScenarioData | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Step-by-step reveal state
  const [visibleSteps, setVisibleSteps] = useState(0);
  const [visibleIncidents, setVisibleIncidents] = useState(0);
  const [mapVisible, setMapVisible] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetReveal = useCallback(() => {
    setVisibleSteps(0);
    setVisibleIncidents(0);
    setMapVisible(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Progressive reveal after scenario load
  useEffect(() => {
    if (!data) return;

    // Phase 1: Show incidents one by one (fast)
    let incCount = 0;
    const incInterval = setInterval(() => {
      incCount++;
      setVisibleIncidents(incCount);
      if (incCount >= data.incidents.length) clearInterval(incInterval);
    }, 150);

    // Phase 2: Show map after a short delay
    const mapTimer = setTimeout(() => setMapVisible(true), 300);

    // Phase 3: Show agent steps one by one (slower for drama)
    let stepCount = 0;
    const stepTimer = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        stepCount++;
        setVisibleSteps(stepCount);
        if (stepCount >= data.agentSteps.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
      }, 600);
    }, 400);

    return () => {
      clearInterval(incInterval);
      clearTimeout(mapTimer);
      clearTimeout(stepTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [data]);

  async function runScenario() {
    resetReveal();
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      const result = scenarios[selected];
      if (!result) throw new Error("Scenario not found");
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  // Summary for top status bar
  const highCount = data?.incidents.filter((i) => i.severity === "High").length ?? 0;
  const totalSteps = data?.agentSteps.length ?? 0;

  return (
    <>
      <Navbar />
      <main className="relative mx-auto max-w-[1600px] px-4 py-5">
        {/* Top Control Bar */}
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-wrap items-end gap-3">
            <div>
              <label
                htmlFor="scenario"
                className="mb-1.5 block text-[11px] font-medium uppercase tracking-wider text-slate-500"
              >
                Scenario
              </label>
              <select
                id="scenario"
                value={selected}
                onChange={(e) => setSelected(e.target.value as ScenarioId)}
                className="rounded-lg border border-surface-border bg-surface-card px-3 py-2.5 text-sm text-white outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
              >
                {scenarioOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.emoji} — {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={runScenario}
              disabled={loading}
              className="relative overflow-hidden rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Agent Running…
                </span>
              ) : (
                "Run Scenario"
              )}
            </button>
          </div>

          {/* Status indicators */}
          <div className="flex items-center gap-4">
            {data && (
              <>
                <div className="flex items-center gap-2 rounded-full bg-surface-card px-3 py-1.5 ring-1 ring-surface-border">
                  <span className={`h-2 w-2 rounded-full ${loading ? "bg-amber-400 animate-pulse" : "bg-green-400"}`} />
                  <span className="text-xs font-medium text-slate-300">
                    {data.scenario}
                  </span>
                </div>
                {highCount > 0 && (
                  <div className="flex items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1.5 ring-1 ring-red-500/20">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-medium text-red-400">
                      {highCount} High Severity
                    </span>
                  </div>
                )}
                {visibleSteps > 0 && (
                  <div className="rounded-full bg-surface-card px-3 py-1.5 text-xs font-medium text-slate-400 ring-1 ring-surface-border">
                    Step {Math.min(visibleSteps, totalSteps)}/{totalSteps}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Scenario description */}
        {data && (
          <div className="mb-5 rounded-lg border border-surface-border bg-surface-card/50 px-4 py-3 animate-fade-in opacity-0">
            <p className="text-xs leading-relaxed text-slate-400">
              <span className="font-semibold text-slate-300">Context:</span>{" "}
              {data.description}
            </p>
          </div>
        )}

        {error && (
          <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Stats row */}
        {data && (
          <div className="mb-5 animate-fade-in opacity-0">
            <StatsBar incidents={data.incidents} />
          </div>
        )}

        {/* Three-panel layout */}
        <div className="grid gap-4 lg:grid-cols-[300px_1fr_300px]">
          {/* Left: Incidents */}
          <div className="flex flex-col rounded-xl border border-surface-border bg-surface-card/40">
            <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Incidents
              </h2>
              {data && (
                <span className="text-[10px] font-medium text-slate-600">
                  {visibleIncidents}/{data.incidents.length}
                </span>
              )}
            </div>
            <div
              className="flex-1 overflow-y-auto p-3 scrollbar-thin"
              style={{ maxHeight: "calc(100vh - 20rem)" }}
            >
              <IncidentList
                incidents={data?.incidents ?? []}
                visibleCount={visibleIncidents}
              />
            </div>
          </div>

          {/* Center: City Map */}
          <div className="relative flex flex-col overflow-hidden rounded-xl border border-surface-border bg-surface-card/40">
            <div className="border-b border-surface-border px-4 py-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                City Map — Risk Zones
              </h2>
            </div>
            <div className="flex-1 p-4 scan-overlay">
              <CityMap zones={data?.mapZones ?? []} visible={mapVisible} />
            </div>
          </div>

          {/* Right: Agent Log */}
          <div className="flex flex-col rounded-xl border border-surface-border bg-surface-card/40">
            <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Agent Reasoning
              </h2>
              {data && visibleSteps > 0 && (
                <span className="flex items-center gap-1.5 text-[10px] font-medium">
                  {visibleSteps < totalSteps ? (
                    <>
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
                      <span className="text-blue-400">Running</span>
                    </>
                  ) : (
                    <span className="text-green-400">Complete</span>
                  )}
                </span>
              )}
            </div>
            <div
              className="flex-1 overflow-y-auto p-4 scrollbar-thin"
              style={{ maxHeight: "calc(100vh - 20rem)" }}
            >
              <AgentLog
                steps={data?.agentSteps ?? []}
                visibleCount={visibleSteps}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
