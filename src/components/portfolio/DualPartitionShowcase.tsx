"use client";

import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  GraduationCap,
  Mail,
  Phone,
  Sparkles,
  Terminal,
  Trophy,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand/SocialIcons";
import {
  PRATHMESH_PORTFOLIO_HERO,
  YASH_PORTFOLIO_HERO,
} from "@/data/portfolioData";
import { PortfolioFilter } from "./PortfolioFilter";
import { PortfolioTerminal } from "./PortfolioTerminal";
import { YashResearchPaper } from "./YashResearchPaper";
import { PortfolioHonors } from "./PortfolioHonors";

export function DualPartitionShowcase() {
  return (
    <div className="space-y-20">
      {/* 1. All Projects Unified Filter Grid */}
      <PortfolioFilter
        showAuthorToggle={true}
        initialAuthorFilter="all"
        title="Unified Engineering Showcase & Case Studies"
        subtitle="Filter and explore all 12 production web applications, AI/ML models, and computer vision systems across both engineers."
      />

      {/* 2. Side-by-Side Spotlight: Research & National Honors Partition */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Partition: Yash Jondhale's Peer-Reviewed Research */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-700 dark:bg-purple-400/10 dark:text-purple-300">
                <Cpu className="h-3.5 w-3.5" />
                Yash Jondhale Spotlight
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
              Published AI & Legal Informatics Research
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Peer-reviewed statutory retrieval architecture in the International Journal of Recent Technology and Engineering.
            </p>
          </div>
          <div className="mt-4">
            <YashResearchPaper />
          </div>
        </div>

        {/* Right Partition: Prathmesh Lohar's National Honors */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                <Code2 className="h-3.5 w-3.5" />
                Prathmesh Lohar Spotlight
              </span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
              National Pedigree & Algorithmic Honors
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              National finalist standing in IIT Bombay NEC 2025 and algorithm excellence award by GeeksforGeeks.
            </p>
          </div>
          <div className="mt-4">
            <PortfolioHonors />
          </div>
        </div>
      </div>

      {/* 3. Interactive Shell & CLI Playground */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1E90FF]">
            Live Terminal Simulation
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Interactive Engineering Shell
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Type commands like &apos;help&apos;, &apos;projects&apos;, &apos;skills&apos;, &apos;awards&apos;, or &apos;contact&apos; to explore credentials directly from the command line.
          </p>
        </div>
        <PortfolioTerminal />
      </div>

      {/* 4. Dual Recruiter & Collaboration Split Partition Banner */}
      <section className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 sm:p-12 text-white shadow-2xl dark:border-slate-800">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Engineering Talent & Project Inquiries
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-4xl font-bold text-white">
            Hire or Collaborate with Our Technical Leads
          </h2>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Whether you need a high-velocity Full-Stack MERN developer or a specialized AI/ML systems architect, connect directly with our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Box 1: Prathmesh Lohar */}
          <div className="rounded-2xl border border-cyan-500/30 bg-white/5 p-6 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Full Stack & MERN Roles
                </span>
                <span className="text-[11px] font-semibold text-emerald-400">
                  Available Now
                </span>
              </div>
              <h3 className="mt-2 font-serif text-xl sm:text-2xl font-bold text-white">
                Prathmesh Lohar
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-blue-100/80">
                Proficient in React.js, Node.js, Express, MongoDB, Java DSA, and REST backends. National Finalist at IIT Bombay NEC 2025 with production CMS experience at GWSWeb.
              </p>

              <div className="mt-4 space-y-1.5 text-xs text-blue-200">
                <p>📍 Nashik, Maharashtra</p>
                <p>📞 {PRATHMESH_PORTFOLIO_HERO.socials.phone}</p>
                <p>✉️ {PRATHMESH_PORTFOLIO_HERO.socials.rawEmail}</p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2.5">
              <a
                href={PRATHMESH_PORTFOLIO_HERO.resumeUrl}
                download="Prathmesh_Lohar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-cyan-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-md hover:bg-cyan-300 transition-colors"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Resume (PDF)</span>
              </a>
              <a
                href={PRATHMESH_PORTFOLIO_HERO.socials.email}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Email</span>
              </a>
              <a
                href={`tel:${PRATHMESH_PORTFOLIO_HERO.socials.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-4 py-2 text-xs font-bold text-emerald-300 hover:bg-emerald-500/30 transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call</span>
              </a>
              <a
                href={PRATHMESH_PORTFOLIO_HERO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Box 2: Yash Jondhale */}
          <div className="rounded-2xl border border-purple-500/30 bg-white/5 p-6 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-300">
                  AI/ML & GenAI Roles
                </span>
                <span className="text-[11px] font-semibold text-emerald-400">
                  Available for Hire
                </span>
              </div>
              <h3 className="mt-2 font-serif text-xl sm:text-2xl font-bold text-white">
                Yash Jondhale
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-purple-100/80">
                Specializing in LLM Orchestration, RAG, Computer Vision (OpenCV), and FastAPI microservices. Published author in IJRTI with enterprise internship at Altair Engineering.
              </p>

              <div className="mt-4 space-y-1.5 text-xs text-purple-200">
                <p>📍 Nashik / Pune, Maharashtra</p>
                <p>🎓 SPPU Distinction (8.34 CGPA)</p>
                <p>✉️ {YASH_PORTFOLIO_HERO.socials.rawEmail}</p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2.5">
              <a
                href={YASH_PORTFOLIO_HERO.resumeUrl}
                download="Yash_Jondhale_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-purple-500 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-purple-600 transition-colors"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Resume (PDF)</span>
              </a>
              <a
                href={YASH_PORTFOLIO_HERO.socials.email}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Email</span>
              </a>
              <a
                href={YASH_PORTFOLIO_HERO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={YASH_PORTFOLIO_HERO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold text-white hover:bg-white/20 transition-colors"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
