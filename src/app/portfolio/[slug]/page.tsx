import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  Cpu,
  Download,
  ExternalLink,
  FileText,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";
import { FLAGSHIP_PROJECTS, PORTFOLIO_HERO } from "@/data/portfolioData";
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
  return FLAGSHIP_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = FLAGSHIP_PROJECTS.find((p) => p.slug === slug);

  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} | AI Case Study by Yash Jondhale`,
    description: project.subtitle,
    alternates: {
      canonical: `${SITE_URL}/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — AI Architecture Case Study`,
      description: project.summary,
      url: `${SITE_URL}/portfolio/${project.slug}`,
      siteName: "BlueCreast",
      type: "article",
      images: [
        {
          url: `${SITE_URL}/yash-jondhale.jpg`,
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
  const currentIndex = FLAGSHIP_PROJECTS.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) notFound();

  const project = FLAGSHIP_PROJECTS[currentIndex];
  const caseStudy = project.caseStudy;

  const prevProject = currentIndex > 0 ? FLAGSHIP_PROJECTS[currentIndex - 1] : null;
  const nextProject =
    currentIndex < FLAGSHIP_PROJECTS.length - 1 ? FLAGSHIP_PROJECTS[currentIndex + 1] : null;

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": project.title,
    "description": project.summary,
    "applicationCategory": project.category,
    "operatingSystem": "Linux, Cloud, Docker",
    "author": {
      "@type": "Person",
      "name": "Yash Jondhale",
      "url": `${SITE_URL}/portfolio`,
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
          { label: "Portfolio", href: "/portfolio" },
          { label: project.title },
        ]}
      />

      {/* Back Button */}
      <div className="mt-6">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#1E90FF] transition-colors dark:text-slate-400"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Case Studies</span>
        </Link>
      </div>

      {/* Case Study Header with MotionFadeIn */}
      <MotionFadeIn className="mt-6 border-b border-slate-200 pb-10 dark:border-slate-800">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#1E90FF] dark:bg-blue-950/70 dark:text-blue-300">
            <Sparkles className="h-3.5 w-3.5" />
            {project.category}
          </span>
          {project.secondaryCategories?.map((cat) => (
            <span
              key={cat}
              className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-950/50 dark:text-amber-300"
            >
              <Award className="h-3 w-3" />
              {cat}
            </span>
          ))}
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
              href="/portfolio"
              className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-[#1E90FF]/30"
            >
              <Image
                src={PORTFOLIO_HERO.avatar}
                alt={PORTFOLIO_HERO.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </Link>
            <div>
              <Link
                href="/portfolio"
                className="text-sm font-bold text-slate-900 hover:text-[#1E90FF] transition-colors dark:text-slate-100"
              >
                {PORTFOLIO_HERO.name}
              </Link>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Machine Learning Engineer & Systems Architect
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2.5">
            {caseStudy?.githubUrl && (
              <a
                href={caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub Repo</span>
              </a>
            )}

            {caseStudy?.paperUrl && (
              <a
                href={caseStudy.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-amber-300/80 bg-amber-50 px-4 py-2 text-xs font-bold text-amber-900 shadow-2xs hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-200"
              >
                <FileText className="h-4 w-4" />
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
              <div className="mt-1 text-sm sm:text-base font-bold text-[#0B3D91] dark:text-[#1E90FF]">
                {m.value}
              </div>
            </div>
          ))}
        </div>
      </MotionFadeIn>

      {/* Main Case Study Body */}
      <div className="mt-12 space-y-16">
        {/* 1. Problem Statement */}
        <MotionSection aria-labelledby="problem-heading">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-500">
            <span>01 &bull; Challenge</span>
          </div>
          <h2
            id="problem-heading"
            className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100"
          >
            The Problem Statement
          </h2>
          <div className="mt-4 rounded-2xl border-l-4 border-rose-500 bg-rose-50/50 p-6 text-sm sm:text-base leading-relaxed text-slate-700 dark:bg-rose-950/20 dark:text-slate-300">
            {caseStudy?.problemStatement}
          </div>
        </MotionSection>

        {/* 2. Solution Architecture */}
        <MotionSection aria-labelledby="solution-heading">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E90FF]">
            <span>02 &bull; Engineering Design</span>
          </div>
          <h2
            id="solution-heading"
            className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100"
          >
            Solution Architecture & Data Flow
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {caseStudy?.solutionArchitecture}
          </p>

          {/* ASCII Architecture Flowchart */}
          {caseStudy?.asciiDiagram && (
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-5 shadow-xl">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3 mb-4">
                <span className="font-mono flex items-center gap-2">
                  <Terminal className="h-3.5 w-3.5 text-[#1E90FF]" />
                  Architecture Diagram (Data Pipeline & Microservices)
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                  Production Flow
                </span>
              </div>
              <pre className="font-mono text-[11px] sm:text-xs leading-relaxed text-blue-200/90 whitespace-pre">
                {caseStudy.asciiDiagram.trim()}
              </pre>
            </div>
          )}
        </MotionSection>

        {/* 3. Key Engineering Innovations */}
        {caseStudy?.keyInnovations && (
          <MotionSection aria-labelledby="innovations-heading">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-500">
              <span>03 &bull; Innovations</span>
            </div>
            <h2
              id="innovations-heading"
              className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100"
            >
              Key Technical Breakthroughs
            </h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseStudy.keyInnovations.map((item, idx) => {
                const parts = item.split(":");
                const title = parts.length > 1 ? parts[0] : `Innovation ${idx + 1}`;
                const desc = parts.length > 1 ? parts.slice(1).join(":") : item;

                return (
                  <MotionCard
                    key={idx}
                    index={idx}
                    className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs dark:border-slate-800 dark:bg-slate-900/60"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-[#0B3D91] dark:text-[#1E90FF]">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                      <span>{title}</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {desc.trim()}
                    </p>
                  </MotionCard>
                );
              })}
            </div>
          </MotionSection>
        )}

        {/* 4. Empirical Benchmarks & Impact */}
        {caseStudy?.benchmarks && (
          <MotionSection aria-labelledby="benchmarks-heading">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-500">
              <span>04 &bull; Validation</span>
            </div>
            <h2
              id="benchmarks-heading"
              className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100"
            >
              Empirical Benchmarks & Production Impact
            </h2>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm dark:divide-slate-800">
                <thead className="bg-slate-50 font-semibold text-slate-900 dark:bg-slate-800/80 dark:text-slate-100">
                  <tr>
                    <th className="px-5 py-3.5">Metric / Dimension</th>
                    <th className="px-5 py-3.5">Baseline / Manual</th>
                    <th className="px-5 py-3.5">System Output</th>
                    <th className="px-5 py-3.5">Observed Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/60 bg-white dark:divide-slate-800/60 dark:bg-slate-900/40">
                  {caseStudy.benchmarks.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30"
                    >
                      <td className="px-5 py-3.5 font-medium text-slate-900 dark:text-slate-200">
                        {row.metric}
                      </td>
                      <td className="px-5 py-3.5 text-slate-500 line-through dark:text-slate-400">
                        {row.before}
                      </td>
                      <td className="px-5 py-3.5 font-bold text-[#0B3D91] dark:text-[#1E90FF]">
                        {row.after}
                      </td>
                      <td className="px-5 py-3.5 font-semibold text-emerald-600 dark:text-emerald-400">
                        {row.impact}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </MotionSection>
        )}

        {/* 5. Detailed Tech Stack */}
        {caseStudy?.techStackDetailed && (
          <MotionSection aria-labelledby="tech-heading">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
              <span>05 &bull; Specifications</span>
            </div>
            <h2
              id="tech-heading"
              className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100"
            >
              Technology Stack Breakdown
            </h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {caseStudy.techStackDetailed.map((group, gIdx) => (
                <div
                  key={gIdx}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs dark:border-slate-800 dark:bg-slate-900/40"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {group.category}
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {group.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-800 dark:bg-slate-800 dark:text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </MotionSection>
        )}
      </div>

      {/* Next / Previous Project Navigation */}
      <MotionFadeIn>
        <nav
          aria-label="Case Study Navigation"
          className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4"
        >
          {prevProject ? (
            <Link
              href={`/portfolio/${prevProject.slug}`}
              className="group flex flex-col items-start"
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

      {/* Recruiter / Collaboration CTA Footer */}
      <MotionSection className="mt-16 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#0B3D91] to-slate-950 p-8 sm:p-10 text-white shadow-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-bold">
              Interested in implementing a similar architecture?
            </h3>
            <p className="mt-2 text-sm text-blue-100/90 leading-relaxed max-w-xl">
              Yash Jondhale designs production GenAI pipelines, RAG systems, and custom ML microservices with measurable latency and accuracy guarantees.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={PORTFOLIO_HERO.resumeUrl}
              download="Yash_Jondhale_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-xs font-bold text-slate-950 hover:bg-slate-100 transition-colors shadow-md"
            >
              <Download className="h-4 w-4 text-[#0B3D91]" />
              <span>Download Resume</span>
            </a>
            <a
              href={PORTFOLIO_HERO.socials.email}
              className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold text-white hover:bg-white/20 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href={PORTFOLIO_HERO.socials.linkedin}
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
