import { Metadata } from "next";
import {
  BarChart3,
  BookOpen,
  CheckCircle2,
  Code2,
  FileText,
  Headphones,
  Zap,
} from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ServicesProposalForm } from "./ServicesProposalForm";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Commercial Editorial & Research Services | BlueCrest Studio",
  description:
    "Partner with BlueCrest for sponsored technical whitepapers, architectural benchmarking, content licensing, and native editorial placements.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "BlueCrest Editorial & Research Services",
    description:
      "Sponsored research whitepapers, architecture teardowns, executive licensing, and technical advisory for enterprise leaders.",
    url: `${SITE_URL}/services`,
    type: "website",
  },
};

const services = [
  {
    icon: <FileText className="h-6 w-6 text-[#1E90FF]" />,
    title: "Sponsored Research & Whitepapers",
    desc: "Comprehensive benchmark studies, cloud economics analyses, and industry whitepapers researched with academic rigor by verified PhDs and Staff Engineers.",
    deliverables: ["15-30 Page PDF Report", "Executive Summary", "Interactive Web Visualizations", "BlueCrest Co-Branding"],
  },
  {
    icon: <Code2 className="h-6 w-6 text-purple-600" />,
    title: "Technical Writing & Developer Docs",
    desc: "Turn complex distributed architectures, SDKs, and APIs into elegant, reproducible guides with working code snippets and diagrams.",
    deliverables: ["Full Architecture Teardowns", "GitHub Runnable Repos", "SEO-Engineered Tutorials", "Interactive Demos"],
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-emerald-600" />,
    title: "Sponsored Analyses & Case Studies",
    desc: "Tell your product's technical success story through data-backed reporting rather than shallow PR fluff. Read by 25,000+ technology leaders.",
    deliverables: ["Editorial Feature Article", "Newsletter Spotlight Placement", "Social Distribution (X/LinkedIn)", "Permanent Archive"],
  },
  {
    icon: <BookOpen className="h-6 w-6 text-orange-600" />,
    title: "Content Syndication & Licensing",
    desc: "License BlueCrest's award-winning essays, clinical sleep protocols, and Indian equity market explainers for your enterprise portal.",
    deliverables: ["Full Reprint Rights", "Editorial Attribution Badges", "Custom Localized Translations", "Quarterly Retainers"],
  },
  {
    icon: <Zap className="h-6 w-6 text-amber-500" />,
    title: "Technical SEO & Publishing Advisory",
    desc: "Stuck behind Google Helpful Content updates? We audit content quality, author E-E-A-T signals, Schema.org graph structures, and Core Web Vitals.",
    deliverables: ["Full E-E-A-T Quality Audit", "JSON-LD Knowledge Graph Plan", "CWV Performance Roadmap", "Editorial Governance Playbook"],
  },
  {
    icon: <Headphones className="h-6 w-6 text-sky-500" />,
    title: "Newsletter & Media Sponsorships",
    desc: "Place your brand directly in front of targeted decision-makers in The BlueCrest Dispatch, our curated Sunday morning newsletter.",
    deliverables: ["Exclusive Primary Sponsor Slot", "Guaranteed 42%+ Open Rates", "Zero Ad-Blocker Interference", "Post-Campaign Telemetry"],
  },
];

export default function ServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Editorial Research and Publishing Services",
    provider: {
      "@type": "Organization",
      name: "BlueCrest",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.svg`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "BlueCrest Publishing Services",
      itemListElement: services.map((s, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.desc,
        },
        position: idx + 1,
      })),
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Services & Studio" }]} />

      {/* Hero Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
          BlueCrest Commercial Desk
        </span>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
          Editorial Rigor for Modern Technology & Finance Leaders.
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          We partner with innovative technology companies, financial institutions, and research labs to produce authoritative publications that build enduring credibility.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
                {s.icon}
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-slate-900 dark:text-slate-100">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {s.desc}
              </p>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-800">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider dark:text-slate-400">
                Key Deliverables:
              </span>
              <ul className="mt-2.5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                {s.deliverables.map((del, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Inquiry Form Client Component */}
      <ServicesProposalForm />
    </div>
  );
}
