import Link from "next/link";
import Navbar from "@/components/Navbar";

const steps = [
  {
    num: "01",
    title: "Monitor",
    desc: "Elastic MCP ingests real-time crowd density, traffic flow, surveillance feeds, and public event signals across the city.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Detect",
    desc: "Google Cloud Agent Builder performs multi-source reasoning to surface anomalies, detect emerging threats, and assess correlations.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Decide",
    desc: "The agent evaluates context, cross-references historical patterns, and determines the optimal escalation path using chain-of-thought reasoning.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Act",
    desc: "Automated response triggers — MongoDB MCP logs incidents, GitLab MCP creates issues, and responders are alerted in seconds.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Multi-Source Signal Ingestion",
    desc: "Crowd telemetry, traffic cameras, IoT sensors, social feeds — all unified through Elastic MCP.",
  },
  {
    title: "AI-Powered Threat Detection",
    desc: "Agent Builder uses chain-of-thought reasoning to identify patterns humans would miss in real time.",
  },
  {
    title: "Automated Severity Classification",
    desc: "Every incident is tagged High, Medium, or Low with confidence scores and supporting evidence.",
  },
  {
    title: "Full Audit Trail",
    desc: "Every decision, action, and data point is logged via MongoDB MCP for post-incident review.",
  },
  {
    title: "Instant Response Dispatch",
    desc: "GitLab MCP auto-creates issues, assigns teams, and tracks resolution — no manual handoffs.",
  },
  {
    title: "Scenario-Based Testing",
    desc: "Pre-built urban scenarios let you validate agent behavior under realistic conditions.",
  },
];

const techPartners = [
  { name: "Google Cloud", sub: "Agent Builder" },
  { name: "Elastic", sub: "MCP — Anomaly Detection" },
  { name: "MongoDB", sub: "MCP — Incident Storage" },
  { name: "GitLab", sub: "MCP — Issue Tracking" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center overflow-hidden px-4 text-center">
        {/* Background grid */}
        <div className="bg-grid absolute inset-0 opacity-30" />

        {/* Gradient orbs */}
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/8 blur-[100px]" />

        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600/10 to-cyan-600/10 px-4 py-1.5 ring-1 ring-blue-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-slate-300">
              Google Cloud Rapid Agent Hackathon — Elastic Partner Track
            </span>
          </div>

          <h1 className="mb-4 text-5xl font-black tracking-tight text-gradient sm:text-6xl lg:text-7xl">
            CityGuard AI
          </h1>
          <p className="mb-3 max-w-2xl text-xl font-medium text-slate-200 sm:text-2xl">
            Autonomous Urban Risk &amp; Incident Response Agent
          </p>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-slate-400">
            An AI-powered multi-step agent that monitors real-time urban
            signals, detects emerging risks, classifies severity, and triggers
            automated incident response — before situations escalate.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="group relative overflow-hidden rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              <span className="relative z-10">Open Live Dashboard</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <a
              href="https://github.com/rudra496/cityguardai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-surface-border bg-surface-card/50 px-7 py-3 text-sm font-semibold text-slate-300 transition-all hover:border-slate-500 hover:text-white"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-surface-border bg-surface/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
              Pipeline
            </p>
            <h2 className="text-3xl font-bold text-white">How It Works</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.num}
                className="card-hover rounded-xl border border-surface-border bg-surface-card p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400 ring-1 ring-blue-500/20">
                    {s.icon}
                  </div>
                  <span className="text-sm font-bold text-blue-400/50">
                    {s.num}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Flow arrows (desktop) */}
          <div className="mt-6 hidden items-center justify-center gap-2 text-slate-600 lg:flex">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-surface-border to-transparent" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-surface-border py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
              Capabilities
            </p>
            <h2 className="text-3xl font-bold text-white">
              Built for Real Urban Safety
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-hover rounded-xl border border-surface-border bg-surface-card p-5"
              >
                <h3 className="mb-2 text-sm font-semibold text-white">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-t border-surface-border bg-surface/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-16 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
              Integrations
            </p>
            <h2 className="text-3xl font-bold text-white">
              Powered By Industry Leaders
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techPartners.map((t) => (
              <div
                key={t.name}
                className="card-hover rounded-xl border border-surface-border bg-surface-card p-6 text-center"
              >
                <p className="text-lg font-bold text-white">{t.name}</p>
                <p className="mt-1 text-xs text-slate-500">{t.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-surface-border bg-surface-card p-6">
            <p className="mb-4 text-sm font-semibold text-white">Architecture</p>
            <pre className="overflow-x-auto text-xs leading-relaxed text-slate-400">
{`┌──────────────────────────────────────────────────────────┐
│                    CityGuard AI Agent                     │
│                                                          │
│  ┌──────────┐    ┌──────────┐    ┌───────────────────┐  │
│  │ Elastic   │───▶│  Agent   │───▶│ MongoDB + GitLab  │  │
│  │ MCP       │    │ Builder  │    │ MCP               │  │
│  │           │    │          │    │                   │  │
│  │ Ingest &  │    │ Reason & │    │ Log incidents &   │  │
│  │ Detect    │    │ Decide   │    │ Create issues     │  │
│  └──────────┘    └──────────┘    └───────────────────┘  │
│                                                          │
│  Monitor ──────▶ Detect ──────▶ Decide ──────▶ Act      │
└──────────────────────────────────────────────────────────┘`}
            </pre>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-surface-border py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="mb-4 text-3xl font-bold text-white">
            See It In Action
          </h2>
          <p className="mb-8 text-slate-400">
            Explore the interactive dashboard with three pre-built urban
            scenarios. Watch the AI agent reason through incidents in real time.
          </p>
          <Link
            href="/dashboard"
            className="group relative inline-flex overflow-hidden rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500"
          >
            <span className="relative z-10">Launch Dashboard</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-border py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span className="font-semibold text-slate-400">CityGuard AI</span>
            <span>— Google Cloud Rapid Agent Hackathon</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a
              href="https://github.com/rudra496/cityguardai"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
            <span>Built by Rudra Sarker</span>
          </div>
        </div>
      </footer>
    </>
  );
}
