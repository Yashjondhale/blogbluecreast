import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Globe,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";
import {
  ALL_PORTFOLIO_PROJECTS,
  PRATHMESH_PORTFOLIO_HERO,
  YASH_PORTFOLIO_HERO,
  getProjectBySlug,
} from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/brand/SocialIcons";
import {
  MotionSection,
  MotionFadeIn,
  MotionCard,
} from "@/components/portfolio/MotionComponents";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_PORTFOLIO_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Case Study Not Found" };

  const isYash = project.author === "yash";
  const authorHero = isYash ? YASH_PORTFOLIO_HERO : PRATHMESH_PORTFOLIO_HERO;

  return {
    title: `${project.title} | Case Study by ${project.authorName}`,
    description: project.subtitle,
    alternates: {
      canonical: `${SITE_URL}/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Engineering Case Study`,
      description: project.summary,
      url: `${SITE_URL}/portfolio/${project.slug}`,
      siteName: "BlueCreast",
      type: "article",
      images: [
        {
          url: `${SITE_URL}${authorHero.avatar}`,
          width: 1200,
          height: 1200,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const currentIndex = ALL_PORTFOLIO_PROJECTS.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) notFound();

  const project = ALL_PORTFOLIO_PROJECTS[currentIndex];
  const caseStudy = project.caseStudy;
  const isYash = project.author === "yash";
  const authorHero = isYash ? YASH_PORTFOLIO_HERO : PRATHMESH_PORTFOLIO_HERO;

  const prevProject =
    currentIndex > 0 ? ALL_PORTFOLIO_PROJECTS[currentIndex - 1] : null;
  const nextProject =
    currentIndex < ALL_PORTFOLIO_PROJECTS.length - 1
      ? ALL_PORTFOLIO_PROJECTS[currentIndex + 1]
      : null;

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.summary,
    "applicationCategory": project.category,
    "operatingSystem": "Web, Cross-Platform",
    "author": {
      "@type": "Person",
      "name": project.authorName,
      "url": `${SITE_URL}/portfolio?profile=${project.author}`,
    },
    "url": `${SITE_URL}/portfolio/${project.slug}`,
  };

  return (
    <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: "Portfolio", href: `/portfolio?profile=${project.author}` },
          { label: project.title },
        ]}
      />

      {/* Back Button */}
      <div className="mt-6">
        <Link
          href={`/portfolio?profile=${project.author}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#1E90FF] transition-colors dark:text-slate-400"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to {project.authorName}&apos;s Portfolio</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <MotionFadeIn className="mt-6 border-b border-slate-200 pb-10 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold ${
              isYash
                ? "bg-purple-50 text-purple-700 dark:bg-purple-950/70 dark:text-purple-300"
                : "bg-blue-50 text-[#1E90FF] dark:bg-blue-950/70 dark:text-blue-300"
            }`}
          >
            {isYash ? <Cpu className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
            {project.category}
          </span>
          {project.isFlagship && (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
              <Award className="h-3 w-3" />
              Flagship Project
            </span>
          )}
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
          {project.title}
        </h1>

        <p className="mt-4 text-lg sm:text-xl font-medium leading-relaxed text-slate-600 dark:text-slate-300">
          {project.subtitle}
        </p>

        {/* Author Byline */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-3">
            <Link
              href={`/portfolio?profile=${project.author}`}
              className={`relative h-12 w-12 overflow-hidden rounded-full ring-2 ${
                isYash ? "ring-purple-500/40" : "ring-[#1E90FF]/40"
              }`}
            >
              <Image
                src={authorHero.avatar}
                alt={authorHero.name}
                fill
                sizes="48px"
                className="object-cover object-top"
              />
            </Link>
            <div>
              <Link
                href={`/portfolio?profile=${project.author}`}
                className="text-sm font-bold text-slate-900 hover:text-[#1E90FF] transition-colors dark:text-slate-100"
              >
                {project.authorName}
              </Link>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {authorHero.shortRole} &bull; {authorHero.education.university}
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub Repo</span>
              </a>
            )}

            {caseStudy?.liveDemoUrl && (
              <a
                href={caseStudy.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold text-[#0B3D91] shadow-2xs hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-950/50 dark:text-blue-300"
              >
                <Globe className="h-4 w-4" />
                <span>Live Project</span>
              </a>
            )}

            {caseStudy?.paperUrl && (
              <a
                href={caseStudy.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-bold text-amber-800 shadow-2xs hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-300"
              >
                <ExternalLink className="h-4 w-4" />
                <span>IJRTI Paper</span>
              </a>
            )}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-4 sm:p-6 dark:border-slate-800 dark:bg-slate-900/50">
          {project.metrics.map((m, idx) => (
            <div key={idx}>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                {m.label}
              </div>
              <div
                className={`mt-1 text-sm sm:text-base font-bold ${
                  isYash
                    ? "text-purple-700 dark:text-purple-300"
                    : "text-[#0B3D91] dark:text-[#1E90FF]"
                }`}
              >
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </MotionFadeIn>

      {/* Main Case Study Body */}
      <div className="mt-12 space-y-16">
        {/* 1. Problem Statement */}
        {caseStudy?.problemStatement && (
          <MotionSection aria-labelledby="problem-heading">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500">
              <span>01 &bull; Challenge & Context</span>
            </div>
            <h2
              id="problem-heading"
              className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100"
            >
              The Problem Statement
            </h2>
            <div className="mt-4 rounded-2xl border-l-4 border-rose-500 bg-rose-50/50 p-6 text-sm sm:text-base leading-relaxed text-slate-700 dark:bg-rose-950/20 dark:text-slate-300">
              {caseStudy.problemStatement}
            </div>
          </MotionSection>
        )}

        {/* 2. Solution Architecture */}
        {caseStudy?.solutionArchitecture && (
          <MotionSection aria-labelledby="solution-heading">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E90FF]">
              <span>02 &bull; Engineering Design</span>
            </div>
            <h2
              id="solution-heading"
              className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100"
            >
              Solution Architecture & Implementation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {caseStudy.solutionArchitecture}
            </p>

            {/* ASCII System Architecture Diagram (if present) */}
            {caseStudy.asciiDiagram && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-5 font-mono text-[11px] leading-tight text-emerald-400 shadow-xl overflow-x-auto">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-800 text-slate-400 text-xs">
                  <Terminal className="h-3.5 w-3.5 text-[#1E90FF]" />
                  <span>Architecture Pipeline Map</span>
                </div>
                <pre className="whitespace-pre">{caseStudy.asciiDiagram.trim()}</pre>
              </div>
            )}
          </MotionSection>
        )}

        {/* 3. Key Innovations */}
        {caseStudy?.keyInnovations && caseStudy.keyInnovations.length > 0 && (
          <MotionSection aria-labelledby="innovations-heading">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <span>03 &bull; Core Innovations</span>
            </div>
            <h2
              id="innovations-heading"
              className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100"
            >
              Key Engineering Innovations
            </h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.keyInnovations.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs dark:border-slate-800 dark:bg-slate-900/40"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </MotionSection>
        )}

        {/* 4. Benchmarks & Empirical Impact */}
        {caseStudy?.benchmarks && caseStudy.benchmarks.length > 0 && (
          <MotionSection aria-labelledby="benchmarks-heading">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              <span>04 &bull; Verified Metrics</span>
            </div>
            <h2
              id="benchmarks-heading"
              className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100"
            >
              Performance Benchmarks & Empirical Impact
            </h2>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs dark:border-slate-800 dark:bg-slate-900/60">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/50">
                    <th className="p-3.5 font-bold text-slate-700 dark:text-slate-300">
                      Metric
                    </th>
                    <th className="p-3.5 font-bold text-slate-700 dark:text-slate-300">
                      Before / Baseline
                    </th>
                    <th className="p-3.5 font-bold text-slate-700 dark:text-slate-300">
                      Engineered
                    </th>
                    <th className="p-3.5 font-bold text-emerald-600 dark:text-emerald-400">
                      Net Impact
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {caseStudy.benchmarks.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="p-3.5 font-medium text-slate-900 dark:text-slate-100">
                        {row.metric}
                      </td>
                      <td className="p-3.5 text-slate-500 dark:text-slate-400">
                        {row.before}
                      </td>
                      <td className="p-3.5 font-semibold text-slate-900 dark:text-slate-100">
                        {row.after}
                      </td>
                      <td className="p-3.5 font-bold text-emerald-600 dark:text-emerald-400">
                        {row.impact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </MotionSection>
        )}

        {/* 5. Detailed Tech Stack Breakdown */}
        {caseStudy?.techStackDetailed && (
          <MotionSection aria-labelledby="stack-heading">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
              <span>05 &bull; Technical Breakdown</span>
            </div>
            <h2
              id="stack-heading"
              className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100"
            >
              Technology Stack Architecture
            </h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.techStackDetailed.map((cat, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs dark:border-slate-800 dark:bg-slate-900/40"
                >
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#1E90FF]">
                    {cat.category}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cat.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </MotionSection>
        )}
      </div>

      {/* Navigation Pagination */}
      <MotionFadeIn className="mt-16 border-t border-slate-200 pt-8 dark:border-slate-800">
        <nav
          aria-label="Case study navigation"
          className="flex items-center justify-between gap-4"
        >
          {prevProject ? (
            <Link
              href={`/portfolio/${prevProject.slug}`}
              className="group flex flex-col items-start text-left"
            >
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1 group-hover:text-[#1E90FF]">
                <ArrowLeft className="h-3 w-3" /> Previous Case Study
              </span>
              <span className="mt-1 font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#1E90FF]">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/portfolio/${nextProject.slug}`}
              className="group flex flex-col items-end text-right"
            >
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1 group-hover:text-[#1E90FF]">
                Next Case Study <ArrowRight className="h-3 w-3" />
              </span>
              <span className="mt-1 font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#1E90FF]">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </MotionFadeIn>

      {/* Direct Contact Footer for respective author */}
      <MotionSection
        className={`mt-16 rounded-3xl p-8 sm:p-10 text-white shadow-xl ${
          isYash
            ? "border border-purple-500/30 bg-gradient-to-br from-purple-950 via-slate-950 to-slate-900"
            : "border border-blue-500/20 bg-gradient-to-br from-[#0B3D91] via-blue-950 to-slate-950"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
              Technical Collaboration
            </span>
            <h3 className="mt-1 font-serif text-2xl font-bold">
              {isYash
                ? "Looking for an AI/ML Engineer or GenAI Consultant?"
                : "Looking for a Driven Full Stack MERN Developer?"}
            </h3>
            <p className="mt-2 text-sm text-blue-100/90 leading-relaxed max-w-xl">
              {isYash
                ? "Yash Jondhale delivers production-ready RAG pipelines, FastAPI microservices, and computer vision systems. Available for machine learning roles and enterprise AI advisory."
                : "Prathmesh Lohar delivers end-to-end web applications with modular React architecture, responsive design, and robust RESTful backends. Available for full stack engineering roles."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={authorHero.resumeUrl}
              download={`${project.authorName.replace(/\s+/g, "_")}_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-slate-950 hover:bg-slate-100 transition-colors shadow-md"
            >
              <Download className="h-4 w-4 text-[#0B3D91]" />
              <span>Download Resume</span>
            </a>
            <a
              href={authorHero.socials.email}
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold text-white hover:bg-white/20 transition-colors"
            >
              Contact Directly
            </a>
            <a
              href={authorHero.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold text-white hover:bg-white/20 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </MotionSection>
    </article>
  );
}
