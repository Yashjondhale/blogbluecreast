import { Metadata } from "next";
import { Award, Globe, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CareersApplicationForm } from "./CareersApplicationForm";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers & Fellowships | Join BlueCrest Newsroom",
  description:
    "Explore open editorial, engineering, and research fellowships at BlueCrest. Fully remote, high-trust journalism team built on verified E-E-A-T standards.",
  alternates: {
    canonical: `${SITE_URL}/careers`,
  },
  openGraph: {
    title: "Careers at BlueCrest | Remote Journalism & Engineering Fellowships",
    description:
      "Join our distributed newsroom. We're hiring technology editors, financial analysts, clinical health reviewers, and full-stack engineers.",
    url: `${SITE_URL}/careers`,
    type: "website",
  },
};

const openRoles = [
  {
    title: "Senior Technology Editor (AI & Distributed Systems)",
    type: "Full-Time &bull; 100% Remote (India / Worldwide)",
    exp: "5+ years in engineering journalism or technical architecture",
    desc: "Lead our generative AI, GPU computing, and software infrastructure coverage. Benchmark frontier models, write runnable code examples, and interview senior architects.",
  },
  {
    title: "Investigative Financial Journalist (Indian Equity & Macro)",
    type: "Full-Time &bull; 100% Remote (India)",
    exp: "CFA, CA, or 4+ years covering SEBI regulations, capital markets & fintech",
    desc: "Demystify equity mutual funds, sovereign gold, RBI monetary policy, and personal tax-loss harvesting for an audience of 100,000+ ambitious Indian investors.",
  },
  {
    title: "Medical & Preventive Health Reviewer",
    type: "Part-Time / Advisory &bull; Remote",
    exp: "MD, MBBS, or PhD in Human Physiology / Biochemistry",
    desc: "Fact-check and clinical-audit all longevity, sleep architecture, and metabolic conditioning essays. Ensure 100% fidelity with current peer-reviewed research.",
  },
  {
    title: "Senior Full-Stack & Technical SEO Engineer",
    type: "Full-Time &bull; Remote",
    exp: "Next.js 15, TypeScript, Tailwind, Core Web Vitals, Schema.org Graph",
    desc: "Own the digital experience and crawler discoverability of bluecreast.in. Optimize Core Web Vitals to sub-1.5s LCP, build interactive calculators, and scale serverless infrastructure.",
  },
];

export default function CareersPage() {
  const jobsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: openRoles.map((role, idx) => ({
      "@type": "JobPosting",
      position: idx + 1,
      title: role.title,
      description: role.desc,
      employmentType: role.type.includes("Full-Time") ? "FULL_TIME" : "PART_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: "BlueCrest",
        sameAs: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
      },
      jobLocationType: "TELECOMMUTE",
      applicantLocationRequirements: {
        "@type": "Country",
        name: "India",
      },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobsJsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Careers & Fellowships" }]} />

      {/* Hero Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
          Work With BlueCrest
        </span>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
          Build the Gold Standard of Modern Independent Journalism.
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          We are a fully distributed, high-trust editorial team. We prize original inquiry, verified E-E-A-T credentials, and clear writing over sensationalism and clickbait.
        </p>

        {/* Quick Vision & Mission summary banner */}
        <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-50/50 p-6 text-left dark:border-blue-500/30 dark:bg-blue-950/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E90FF]">
                Our Vision
              </span>
              <p className="mt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                To build the world&apos;s most trusted multi-niche publication where journalism elevates human intellect rather than farming outrage.
              </p>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Our Mission
              </span>
              <p className="mt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                To deliver reproducible engineering guides, actionable wealth strategies, and clinically verified health research — 100% independent.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-blue-200/50 dark:border-blue-900/50 text-right">
            <a href="/about" className="text-xs font-semibold text-[#1E90FF] hover:underline">
              Read our full Manifesto & Editorial Standards &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Values & Perks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#1E90FF] dark:bg-blue-950/60">
            <Globe className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-serif text-lg font-bold text-slate-900 dark:text-slate-100">
            100% Remote & Autonomous
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Work from anywhere in India or the world. We value deep work blocks, clear asynchronous communication, and zero useless meetings.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60">
            <Award className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-serif text-lg font-bold text-slate-900 dark:text-slate-100">
            Competitive Pay & Authorship
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Competitive monthly retainers, equipment stipends, and prominent author bylines indexed on Google with full E-E-A-T credentials.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/60">
            <Zap className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-serif text-lg font-bold text-slate-900 dark:text-slate-100">
            Research & Book Stipends
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Full reimbursement for academic journals, clinical research databases, software dev tools, and benchmark hardware.
          </p>
        </div>
      </div>

      {/* Open Roles Section */}
      <section className="mb-20">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
            Active Openings
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Open Positions & Fellowships
          </h2>
        </div>

        <div className="space-y-4">
          {openRoles.map((role, rIdx) => (
            <div
              key={rIdx}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all hover:border-[#1E90FF] dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-slate-100">
                  {role.title}
                </h3>
                <span
                  className="inline-block text-xs font-semibold text-[#1E90FF]"
                  dangerouslySetInnerHTML={{ __html: role.type }}
                />
              </div>

              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                <strong>Prerequisite:</strong> {role.exp}
              </p>

              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form Client Component */}
      <CareersApplicationForm />
    </div>
  );
}
