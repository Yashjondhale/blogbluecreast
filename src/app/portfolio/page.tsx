import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowRight,
  Briefcase,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Microscope,
  Sparkles,
} from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";
import {
  EXPERIENCE_ITEMS,
  FLAGSHIP_PROJECTS,
  PORTFOLIO_HERO,
  RESEARCH_PUBLICATIONS,
} from "@/data/portfolioData";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioFilter } from "@/components/portfolio/PortfolioFilter";
import {
  MotionCard,
  MotionSection,
  MotionFadeIn,
} from "@/components/portfolio/MotionComponents";
import { LinkedinIcon } from "@/components/brand/SocialIcons";

export const metadata: Metadata = {
  title: "Yash Jondhale | Machine Learning Engineer, Published AI Researcher & GenAI Architect",
  description:
    "Explore production-grade GenAI architectures, LLM orchestration, RAG pipelines, published IJRTI legal AI research, and predictive data science microservices by Yash Jondhale.",
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
  openGraph: {
    title: "Yash Jondhale — AI/ML Engineer & Systems Architect Portfolio",
    description:
      "Production-grade GenAI systems, RAG microservices, published IJRTI legal intelligence research, and predictive modeling by Yash Jondhale.",
    url: `${SITE_URL}/portfolio`,
    siteName: "BlueCreast",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: `${SITE_URL}/yash-jondhale.jpg`,
        width: 1200,
        height: 1200,
        alt: "Yash Jondhale — Machine Learning Engineer & Published AI Researcher",
      },
    ],
  },
};

export default function PortfolioPage() {
  const paper = RESEARCH_PUBLICATIONS[0];

  // Structured Data (ProfilePage, Person, ScholarlyArticle, ItemList)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/portfolio#webpage`,
        "url": `${SITE_URL}/portfolio`,
        "name": "Yash Jondhale | AI/ML Portfolio & Case Studies",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          "name": "BlueCreast",
          "url": SITE_URL,
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#yash-jondhale`,
        "name": PORTFOLIO_HERO.name,
        "jobTitle": "Machine Learning Engineer & GenAI Systems Architect",
        "description": PORTFOLIO_HERO.subheadline,
        "image": `${SITE_URL}${PORTFOLIO_HERO.avatar}`,
        "url": `${SITE_URL}/portfolio`,
        "sameAs": [
          PORTFOLIO_HERO.socials.github,
          PORTFOLIO_HERO.socials.linkedin,
          "https://bluecreast.in/author/yash-jondhale",
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "Savitribai Phule Pune University (SPPU)",
        },
        "knowsAbout": [
          "Artificial Intelligence",
          "Large Language Models (LLM)",
          "Retrieval-Augmented Generation (RAG)",
          "FastAPI Microservices",
          "Computer Vision",
          "Predictive Modeling",
        ],
      },
      {
        "@type": "ScholarlyArticle",
        "@id": `${SITE_URL}/portfolio#paper-1`,
        "headline": paper.title,
        "name": paper.title,
        "description": paper.abstract,
        "inLanguage": "en",
        "author": {
          "@id": `${SITE_URL}/#yash-jondhale`,
        },
        "publisher": {
          "@type": "Organization",
          "name": paper.journal,
        },
        "isPartOf": {
          "@type": "PublicationIssue",
          "issueNumber": paper.issue,
          "isPartOf": {
            "@type": "PublicationVolume",
            "volumeNumber": paper.volume,
            "isPartOf": {
              "@type": "Periodical",
              "name": paper.journal,
              "issn": paper.issn,
            },
          },
        },
        "keywords": paper.keywords,
      },
      {
        "@type": "ItemList",
        "name": "Featured AI/ML Systems & Engineering Case Studies by Yash Jondhale",
        "itemListElement": FLAGSHIP_PROJECTS.map((proj, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "item": {
            "@type": "SoftwareApplication",
            "name": proj.title,
            "description": proj.summary,
            "applicationCategory": proj.category,
            "url": `${SITE_URL}/portfolio/${proj.slug}`,
          },
        })),
      },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Portfolio & Engineering Case Studies" }]} />

      {/* Hero Section with Framer Motion Entrance */}
      <PortfolioHero />

      {/* Case Studies & Category Filter Component with Tab Transitions */}
      <PortfolioFilter />

      {/* Dedicated Research Section (IJRTI Publication) with Scroll Motion */}
      <MotionSection id="research" className="mt-20 scroll-mt-24">
        <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-50/70 via-white to-white p-6 sm:p-10 lg:p-12 shadow-xs dark:border-amber-500/20 dark:from-amber-950/20 dark:via-slate-900/40 dark:to-slate-900/20">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 dark:bg-amber-950/80 dark:text-amber-300">
              <Microscope className="h-3.5 w-3.5" />
              Peer-Reviewed Academic Publication
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              ISSN: {paper.issn}
            </span>
          </div>

          <h2 className="mt-4 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
            {paper.title}
          </h2>

          <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600 dark:text-slate-400">
            <span className="font-semibold text-slate-900 dark:text-slate-200">
              Journal: {paper.journal}
            </span>
            <span>&bull;</span>
            <span>{paper.volume}, {paper.issue}</span>
            <span>&bull;</span>
            <span>{paper.date}</span>
            <span>&bull;</span>
            <span className="font-mono font-bold text-[#0B3D91] dark:text-[#1E90FF]">
              Paper ID: {paper.paperId}
            </span>
          </div>

          {/* Abstract */}
          <div className="mt-6 rounded-2xl border border-amber-200/60 bg-white/80 p-5 backdrop-blur-xs dark:border-slate-800 dark:bg-slate-900/60">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
              Publication Abstract
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {paper.abstract}
            </p>
          </div>

          {/* Keywords & Metrics */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {paper.metrics.map((m, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/70 bg-white p-3.5 shadow-2xs dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  {m.label}
                </div>
                <div className="mt-1 text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-amber-200/40 dark:border-slate-800">
            <div className="flex flex-wrap gap-1.5">
              {paper.keywords.map((kw) => (
                <span
                  key={kw}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {kw}
                </span>
              ))}
            </div>

            <a
              href={paper.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-amber-700 transition-colors"
            >
              <span>Verify Paper on IJRTI</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </MotionSection>

      {/* Experience & Community Leadership Timeline with Staggered Entrance */}
      <MotionSection id="experience" className="mt-20 scroll-mt-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
              Track Record & Career
            </span>
            <h2 className="mt-1 font-serif text-3xl font-bold text-slate-900 dark:text-slate-100">
              Work Experience & Technical Leadership
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Proven engineering experience spanning enterprise data science, applied AI research, and developer community leadership.
            </p>
          </div>

          <a
            href={PORTFOLIO_HERO.resumeUrl}
            download="Yash_Jondhale_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-4 py-2.5 text-xs font-bold text-slate-800 shadow-xs hover:border-[#1E90FF] hover:text-[#1E90FF] transition-all dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-[#38bdf8] shrink-0"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERIENCE_ITEMS.map((item, idx) => (
            <MotionCard
              key={item.id}
              index={idx}
              className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs transition-all hover:border-[#1E90FF]/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50"
            >
              <div>
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-[#1E90FF] dark:bg-blue-950/60 dark:text-blue-300">
                    <Briefcase className="h-3 w-3" />
                    {item.role}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {item.period}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-xl font-bold text-slate-900 dark:text-slate-100">
                  {item.organization}
                </h3>
                <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <MapPin className="h-3 w-3" />
                  <span>{item.location}</span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>

                {/* Key Achievements */}
                <div className="mt-4 space-y-2">
                  {item.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <span className="text-[#1E90FF] mt-0.5">•</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </MotionCard>
          ))}
        </div>
      </MotionSection>

      {/* High-Ticket Collaboration / Recruiting CTA Banner with Scroll Lift */}
      <MotionSection className="mt-20 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#0B3D91] via-blue-900 to-slate-950 p-8 sm:p-12 text-white shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-200">
              <Sparkles className="h-4 w-4" />
              Direct Engineering Engagement
            </span>
            <h3 className="mt-2 font-serif text-2xl sm:text-4xl font-bold leading-tight">
              Looking for a Production-Grade AI/ML Engineer or GenAI Consultant?
            </h3>
            <p className="mt-3 text-sm text-blue-100/90 leading-relaxed">
              Available for full-time Machine Learning roles, contract GenAI system architecture, RAG optimization, and AI microservice deployments. Let's discuss your technical roadmap.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={PORTFOLIO_HERO.resumeUrl}
              download="Yash_Jondhale_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md hover:bg-slate-100 transition-colors"
            >
              <Download className="h-4 w-4 text-[#0B3D91]" />
              <span>Download Resume</span>
            </a>
            <a
              href={PORTFOLIO_HERO.socials.email}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Yash Directly</span>
            </a>
            <a
              href={PORTFOLIO_HERO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
