<div align="center">

# CityGuard AI

### Autonomous Urban Risk & Incident Response Agent

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=flat-square)](https://rudra496.github.io/cityguardai/dashboard/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square)](https://nextjs.org/)
[![Google Cloud](https://img.shields.io/badge/Google_Cloud-Agent_Build-4285F4?style=flat-square)](https://cloud.google.com/)
[![Elastic](https://img.shields.io/badge/Elastic-MCP-005571?style=flat-square)](https://www.elastic.co/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222?style=flat-square)](https://pages.github.com/)

<!-- ![CityGuard AI Dashboard](./docs/screenshot.png) -->

**Google Cloud Rapid Agent Hackathon — Elastic Partner Track**

[Launch Dashboard](https://rudra496.github.io/cityguardai/dashboard/) · [View Source](https://github.com/rudra496/cityguardai) · [Author Portfolio](https://rudra496.github.io/site/)

</div>

---

## Overview

CityGuard AI is an AI-powered multi-step agent that monitors real-time urban signals — crowd density, traffic flow, surveillance anomalies, and event feeds — to detect emerging risks, classify severity, and trigger automated incident response workflows.

Built for the **Google Cloud Rapid Agent Hackathon (Elastic Partner Track)** by **Rudra Sarker**, a 3rd-year Industrial & Production Engineering student at **SUST** (Shahjalal University of Science and Technology), Sylhet, Bangladesh.

The agent follows a **Monitor → Detect → Decide → Act** pipeline:
- **Google Cloud Agent Builder** — reasoning, correlation, and decision-making
- **Elastic MCP** — real-time anomaly detection and signal ingestion
- **MongoDB MCP** — incident logging and full audit trails
- **GitLab MCP** — automated issue creation and response team dispatch

---

## Features

- **Multi-Source Signal Ingestion** — Crowd telemetry, traffic cameras, IoT sensors unified through Elastic MCP
- **AI-Powered Threat Detection** — Agent Builder uses chain-of-thought reasoning to identify patterns in real time
- **Automated Severity Classification** — Every incident tagged High / Medium / Low with evidence and confidence scores
- **Progressive Agent Reasoning** — Watch the agent think step-by-step with animated timeline in the dashboard
- **Interactive City Map** — Visual zone risk grid with real-time severity coloring and pulse animations for high-risk areas
- **Full Audit Trail** — Every decision and action logged via MongoDB MCP for post-incident review
- **Instant Response Dispatch** — GitLab MCP auto-creates issues, assigns response teams, tracks SLA
- **3 Realistic Scenarios** — World Cup Stadium (78K crowd), Mall Weekend (fire + security), Downtown Rush Hour (signal gridlock)
- **Zero-Config Static Deploy** — Builds to pure HTML/CSS/JS, deploys on GitHub Pages with no server required

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router), React 18, TypeScript |
| Styling | Tailwind CSS (custom dark theme, animations, glow effects) |
| Build | Static HTML export (`next export`) |
| Deployment | GitHub Pages via GitHub Actions |
| Agent Framework | Google Cloud Agent Builder |
| Anomaly Detection | Elastic MCP |
| Incident Storage | MongoDB MCP |
| Issue Tracking | GitLab MCP |

---

## Architecture

```
┌──────────────────────────────────────────────────────────┐
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
└──────────────────────────────────────────────────────────┘
```

### Agent Pipeline

1. **Monitor** — Elastic MCP ingests real-time crowd, traffic, and surveillance feeds. Anomalies and threshold breaches trigger the agent.
2. **Detect** — Agent Builder reasons over multi-source data to surface anomalies, calculate correlations, and classify risk severity.
3. **Decide** — The agent evaluates context, cross-references historical patterns, and determines the optimal escalation path using chain-of-thought reasoning.
4. **Act** — MongoDB MCP logs the incident with full sensor data. GitLab MCP creates issues and assigns teams. Responders are notified via webhooks.

### Demo Mode

This demo uses client-side mock data structured identically to production pipeline output. The dashboard is fully interactive — select a scenario, click **Run Scenario**, and watch the agent reason through incidents in real time with progressive step-by-step reveal animation.

All data is structured for drop-in replacement with real Google Cloud Agent Builder and Elastic MCP integrations.

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** (comes with Node)

### Installation

```bash
git clone https://github.com/rudra496/cityguardai.git
cd cityguardai
npm install
npm run dev
```

Open [http://localhost:3000/cityguardai/](http://localhost:3000/cityguardai/) to view the landing page. Navigate to the Dashboard to run scenarios.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production static build (outputs to `./out`) |
| `npm run start` | Preview production build locally |

No environment variables required — all data is self-contained and mocked.

---

## Deployment

### GitHub Pages (automatic)

The project includes a GitHub Actions workflow that auto-deploys on every push to `main`:

1. Push the repo to `github.com/rudra496/cityguardai`
2. Go to **Settings → Pages → Source → GitHub Actions**
3. The workflow builds and deploys automatically
4. Live at `https://rudra496.github.io/cityguardai/`

### Custom Domain

If using a custom domain, remove `basePath` from `next.config.mjs` and configure the domain in GitHub Pages settings.

### Any Static Host

```bash
npm run build
# Upload the ./out directory to any static host (Netlify, Cloudflare Pages, etc.)
```

---

## Project Structure

```
cityguardai/
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions → GitHub Pages
├── app/
│   ├── globals.css             # Tailwind + animations + dark theme
│   ├── layout.tsx              # Root layout + full SEO metadata + JSON-LD
│   ├── page.tsx                # Landing page (hero, features, architecture, CTA)
│   └── dashboard/
│       └── page.tsx            # Interactive 3-panel dashboard
├── components/
│   ├── Navbar.tsx              # Sticky nav with Elastic Track badge
│   ├── StatsBar.tsx            # Summary metric cards
│   ├── IncidentList.tsx        # Animated incident cards with severity
│   ├── CityMap.tsx             # 3×3 zone risk grid with pulse effects
│   └── AgentLog.tsx            # Step-by-step reasoning timeline
├── lib/
│   └── scenarios.ts            # Type definitions + 3 full mock scenarios
├── public/
│   ├── robots.txt              # Search engine crawl rules
│   └── sitemap.xml             # Sitemap for SEO
├── package.json
├── tsconfig.json
├── next.config.mjs             # Static export + GitHub Pages basePath
├── tailwind.config.ts          # Custom theme + animations
├── postcss.config.mjs
├── README.md
└── LICENSE
```

---

## SEO & Performance

- Full OpenGraph and Twitter Card meta tags for social sharing
- JSON-LD structured data (SoftwareApplication schema)
- XML sitemap and robots.txt included
- Static export = zero server cold starts = instant load
- Tailwind CSS purged = minimal CSS bundle

---

## About the Author

<table>
<tr>
<td width="120">

**Rudra Sarker**

</td>
<td>

3rd-year Industrial & Production Engineering student at **Shahjalal University of Science and Technology (SUST)**, Sylhet, Bangladesh.

AI developer and hackathon builder with projects spanning **assistive technology** (SightlineAI — AI smart goggles for the blind, MIT Solve 2026 applicant), **STEM education** (ScienceLab 3D — 40+ interactive experiments), **mental health** (MindWell), and **sign language accessibility** (Team SignTalk — award-winning smart glove).

Currently participating in **Google Gen AI Academy APAC Cohort 2** and the **Google Cloud Rapid Agent Hackathon**.

</td>
</tr>
</table>

**Links:**
- Portfolio: [rudra496.github.io/site](https://rudra496.github.io/site/)
- GitHub: [github.com/rudra496](https://github.com/rudra496)
- Google Skills Profile: [skills.google](https://www.skills.google/public_profiles/ef0923da-68a6-4eee-97ad-6e2a37650e9d)
- SightlineAI: [rudra496.github.io/sightlineai](https://rudra496.github.io/sightlineai/)

---

## License

MIT — see [LICENSE](./LICENSE).

---

<div align="center">

Built by [**Rudra Sarker**](https://rudra496.github.io/site/) for the **Google Cloud Rapid Agent Hackathon**

[Launch Demo](https://rudra496.github.io/cityguardai/dashboard/) · [View Code](https://github.com/rudra496/cityguardai) · [Author Portfolio](https://rudra496.github.io/site/)

</div>
