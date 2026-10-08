import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Compass,
  FileCheck2,
  Globe,
  HeartHandshake,
  Lightbulb,
  Microscope,
  Radio,
  Scale,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { getAllAuthors } from "@/sanity/dataService";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About BlueCrest | Our Vision, Mission & Peer-Reviewed Editorial Standards",
  description:
    "Discover BlueCrest's founding vision, journalistic mission, E-E-A-T peer-review framework, and the credentialed technologists, financial analysts, and physicians behind our reporting.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About BlueCrest | Vision, Mission & Editorial Standards",
    description:
      "Independent, multi-niche publication built on empirical research, technical precision, and verified practitioner expertise.",
    url: `${SITE_URL}/about`,
    siteName: "BlueCrest",
    locale: "en_IN",
    type: "website",
  },
};

export default async function AboutPage() {
  const authors = await getAllAuthors();

  const coreValues = [
    {
      icon: Microscope,
      title: "Radical Technical Rigor",
      desc: "We don't summarize press releases. We run code in production environments, benchmark hardware on real workbenches, backtest financial spreadsheets, and read raw clinical trials before drafting a sentence.",
      color: "bg-blue-50 text-[#1E90FF] dark:bg-blue-950/60",
    },
    {
      icon: Scale,
      title: "Uncompromising Editorial Independence",
      desc: "Commercial sponsors, advertisers, and investors have zero editorial oversight over our coverage. Every product verdict and stock market analysis is rendered with absolute objectivity.",
      color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60",
    },
    {
      icon: Award,
      title: "Practitioner-Led E-E-A-T Credentials",
      desc: "Every guide is written or clinically audited by domain practitioners — PhD engineers, CFA charterholders, and medical doctors who practice the disciplines they report on.",
      color: "bg-amber-50 text-amber-600 dark:bg-amber-950/60",
    },
    {
      icon: Zap,
      title: "Reader Respect & High-Signal Output",
      desc: "Your attention is sacred. We enforce a strict ban on clickbait headlines, endless fluff, intrusive full-screen popups, and unverified speculative gossip.",
      color: "bg-purple-50 text-purple-600 dark:bg-purple-950/60",
    },
  ];

  const reviewSteps = [
    {
      num: "01",
      title: "Empirical Investigation",
      desc: "Our journalists begin with primary source research: SEC/SEBI filings, peer-reviewed PubMed trials, or Git commit histories.",
    },
    {
      num: "02",
      title: "Benchmarking & Modeling",
      desc: "Technical benchmarks and financial scenarios are executed in isolated testbeds to ensure reproducibility.",
    },
    {
      num: "03",
      title: "Domain Peer Review",
      desc: "A credentialed subject-matter specialist audits mathematical formulas, legal compliance, and technical accuracy.",
    },
    {
      num: "04",
      title: "Semantic & SEO Optimization",
      desc: "Articles receive structured Schema.org JSON-LD markup and accessible formatting for human and AI clarity.",
    },
    {
      num: "05",
      title: "Living Knowledge Revalidation",
      desc: "Articles are continually updated as tax laws evolve, AI models update, and clinical consensuses shift.",
    },
  ];

  const impactStats = [
    { value: "250K+", label: "Monthly High-Intent Readers" },
    { value: "99.8%", label: "Verified Fact-Checking Accuracy" },
    { value: "100%", label: "Practitioner-Reviewed Desk" },
    { value: "0", label: "Sponsored Coverage Compromises" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <div className="mb-6">
        <Breadcrumbs items={[{ label: "About BlueCrest" }]} />
      </div>

      {/* Hero Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#1E90FF] dark:bg-blue-950/60 dark:text-blue-400">
          <Sparkles className="h-3.5 w-3.5" />
          The BlueCrest Manifesto
        </div>
        <h1 className="mt-4 font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
          Clarity, Truth, and Depth in an Era of Digital Noise.
        </h1>
        <p className="mt-6 text-base sm:text-xl leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          BlueCrest was founded with a singular conviction: modern general-interest publishing should never sacrifice intellectual rigor, empirical evidence, or craftsmanship for cheap viral clicks.
        </p>
      </div>

      {/* Vision & Mission Cards */}
      <section aria-label="Vision and Mission" className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-50/70 via-white to-slate-50 p-8 sm:p-10 shadow-sm dark:border-blue-500/30 dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B3D91] text-white shadow-md dark:bg-[#1E90FF] dark:text-slate-950">
                <Compass className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
                  Our North Star
                </span>
                <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Our Vision
                </h2>
              </div>
            </div>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              To build the premier global reference publication where curious minds, senior engineers, ambitious investors, and leaders turn when they need absolute truth. We envision an internet where journalism enriches human intellect rather than exploiting cognitive biases.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span className="rounded-lg bg-white/80 px-2.5 py-1 border border-slate-200 dark:bg-slate-800 dark:border-slate-700">✓ Intellectual Honesty</span>
              <span className="rounded-lg bg-white/80 px-2.5 py-1 border border-slate-200 dark:bg-slate-800 dark:border-slate-700">✓ Long-Horizon Thinking</span>
              <span className="rounded-lg bg-white/80 px-2.5 py-1 border border-slate-200 dark:bg-slate-800 dark:border-slate-700">✓ Global Relevance</span>
            </div>
          </div>

          {/* Mission */}
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 p-8 sm:p-10 shadow-sm dark:border-emerald-500/30 dark:from-slate-900 dark:via-emerald-950/20 dark:to-slate-900">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md">
                <Lightbulb className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                  Daily Execution
                </span>
                <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
                  Our Mission
                </h2>
              </div>
            </div>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              To democratize cutting-edge engineering architectures, wealth-preservation principles, and preventive clinical science through crystal-clear prose, reproducible benchmarks, and beautiful interactive design — completely free of corporate spin.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
              <span className="rounded-lg bg-white/80 px-2.5 py-1 border border-slate-200 dark:bg-slate-800 dark:border-slate-700">✓ Reproducible Benchmarks</span>
              <span className="rounded-lg bg-white/80 px-2.5 py-1 border border-slate-200 dark:bg-slate-800 dark:border-slate-700">✓ Peer-Reviewed Medicine</span>
              <span className="rounded-lg bg-white/80 px-2.5 py-1 border border-slate-200 dark:bg-slate-800 dark:border-slate-700">✓ Actionable Insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section aria-label="Key Impact Metrics" className="mb-20">
        <div className="rounded-3xl border border-slate-200/80 bg-slate-900 p-8 sm:p-12 text-white shadow-xl dark:border-slate-800">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
            {impactStats.map((stat, idx) => (
              <div key={idx} className={idx > 0 ? "pt-6 lg:pt-0" : ""}>
                <div className="font-serif text-3xl sm:text-5xl font-extrabold text-[#1E90FF]">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs sm:text-sm font-medium text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section aria-label="Core Editorial Values" className="mb-20">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
            Guiding Philosophy
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 dark:text-slate-100">
            Our Core Values & Principles
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            The immutable commitments that guide every editorial decision at BlueCrest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="group rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs transition-all hover:border-[#1E90FF] hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${val.color} mb-5`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#1E90FF] transition-colors">
                  {val.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5-Step Editorial Lifecycle */}
      <section aria-label="Fact-Checking Process" className="mb-20">
        <div className="rounded-3xl border border-slate-200/80 bg-slate-50/70 p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-900/40">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
              Quality Assurance
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 dark:text-slate-100">
              The 5-Step Verification Lifecycle
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              How a manuscript moves from empirical research to published publication on bluecreast.in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {reviewSteps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="font-mono text-xs font-bold text-[#1E90FF]">
                  {step.num}
                </div>
                <h4 className="mt-2 font-serif text-base font-bold text-slate-900 dark:text-slate-100">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Editorial Board (Masthead) */}
      <section id="team" aria-label="Editorial Board" className="mb-20">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
            The Masthead
          </span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-slate-900 dark:text-slate-100">
            Our Senior Editorial Board
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Meet the domain specialists who lead research, code testing, and medical audits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {authors.map((author) => (
            <div
              key={author._id}
              className="group rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100 mb-5 dark:bg-slate-800">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-slate-100">
                <Link href={`/author/${author.slug}`} className="hover:text-[#1E90FF] transition-colors">
                  {author.name}
                </Link>
              </h3>
              <p className="text-xs font-semibold text-[#1E90FF] mt-1">
                {author.role}
              </p>
              <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {author.bio}
              </p>
              {author.credentials && (
                <div className="mt-4 border-t border-slate-100 pt-3 text-[11px] font-medium text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  {author.credentials}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Work With Us / Careers Banner */}
      <section aria-label="Join Our Team" className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#0B3D91] to-blue-900 p-8 sm:p-12 text-white shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-200">
              <Users className="h-4 w-4" />
              We Are Growing
            </span>
            <h3 className="mt-2 font-serif text-2xl sm:text-4xl font-bold">
              Want to Write, Build, or Research With Us?
            </h3>
            <p className="mt-3 text-sm text-blue-100/90 leading-relaxed">
              We are actively looking for exceptional software architects, financial analysts, clinical researchers, and full-stack engineers to join our distributed editorial desk.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/careers"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md hover:bg-slate-100 transition-colors"
            >
              <span>Explore Open Roles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-colors"
            >
              <span>Contact Editorial Desk</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
