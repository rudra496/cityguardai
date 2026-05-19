"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isDashboard = pathname === "/dashboard";

  return (
    <nav className="sticky top-0 z-50 border-b border-surface-border bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/20 ring-1 ring-blue-500/30">
            <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-white">
            CityGuard AI
          </span>
          <span className="hidden rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-400 ring-1 ring-blue-500/20 sm:inline-block">
            Elastic Track
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-5">
          <Link
            href="/"
            className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${
              isHome ? "bg-white/5 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`rounded-md px-2.5 py-1.5 text-sm transition-colors ${
              isDashboard ? "bg-white/5 text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            Dashboard
          </Link>
          <a
            href="https://github.com/rudra496/cityguardai"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md px-2.5 py-1.5 text-sm text-slate-400 transition-colors hover:text-white sm:block"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
