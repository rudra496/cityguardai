import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://rudra496.github.io/cityguardai";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: [NE4MzR6NIdQYAoPS52dBxjRxvB8TWUTt4aGM2Uachik, "2h0hS6xG91EuQjYI1FZAHqQHxFmu7l70BmcSz62ZLmc"],
  },
    title: {
    default: "CityGuard AI — Autonomous Urban Risk & Incident Response Agent",
    template: "%s | CityGuard AI",
  },
  description:
    "AI-powered multi-step agent built with Google Cloud Agent Builder and Elastic MCP. Monitors real-time urban signals, detects risks, classifies severity, and triggers automated incident response workflows.",
  keywords: [
    "AI agent",
    "urban safety",
    "incident response",
    "Google Cloud",
    "Elastic MCP",
    "hackathon",
    "smart city",
    "crowd management",
    "risk detection",
    "CityGuard AI",
    "Rudra Sarker",
  ],
  authors: [{ name: "Rudra Sarker", url: "https://rudra496.github.io/site/" }],
  creator: "Rudra Sarker",
  publisher: "Rudra Sarker",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CityGuard AI",
    title: "CityGuard AI — Autonomous Urban Risk & Incident Response Agent",
    description:
      "AI-powered multi-step agent that monitors real-time urban signals, detects risks, and triggers automated incident response. Built with Google Cloud Agent Builder and Elastic MCP.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "CityGuard AI Dashboard — Urban Risk Monitoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CityGuard AI — Autonomous Urban Risk & Incident Response",
    description:
      "AI agent that monitors urban signals, detects risks, and triggers automated response. Google Cloud Hackathon — Elastic Track.",
    images: [`${siteUrl}/og-image.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CityGuard AI",
    description:
      "Autonomous Urban Risk & Incident Response Agent built with Google Cloud Agent Builder and Elastic MCP.",
    applicationCategory: "GovernmentApplication",
    operatingSystem: "Web",
    author: {
      "@type": "Person",
      name: "Rudra Sarker",
      url: "https://rudra496.github.io/site/",
      jobTitle: "Engineering Student & AI Developer",
      affiliation: {
        "@type": "EducationalOrganization",
        name: "Shahjalal University of Science and Technology (SUST)",
      },
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: siteUrl,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script defer src="https://analytics.129-159-229-170.sslip.io/script.js" data-website-id="4c707f81-6b7b-44da-acf6-6f907ce562e0"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/cityguardai/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
