"use client";

import { motion } from "framer-motion";
import { Download, Mail, Sparkles } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/brand/SocialIcons";
import { YASH_PORTFOLIO_HERO } from "@/data/portfolioData";
import { YashPortfolioHero } from "./YashPortfolioHero";
import { PortfolioFilter } from "./PortfolioFilter";
import { YashResearchPaper } from "./YashResearchPaper";
import { YashSkills } from "./YashSkills";
import { YashExperience } from "./YashExperience";
import { MotionSection } from "./MotionComponents";

export function YashPortfolioShowcase() {
  return (
    <div className="space-y-16">
      {/* 1. Yash Hero */}
      <YashPortfolioHero />

      {/* 2. Featured AI Systems & Case Studies */}
      <PortfolioFilter
        initialAuthorFilter="yash"
        showAuthorToggle={false}
        title="Production AI Systems & Case Studies"
        subtitle="RAG decision support, real-time computer vision telemetry, desktop automation, and predictive modeling."
        badgeText="AI & Machine Learning Engineering"
      />

      {/* 3. Peer-Reviewed Academic Research Paper */}
      <YashResearchPaper />

      {/* 4. Technical Skills Matrix */}
      <YashSkills />

      {/* 5. Career & Applied Research Experience */}
      <YashExperience />

      {/* 6. Direct AI Engagement & Hiring Banner */}
      <MotionSection className="mt-20 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-950 via-slate-950 to-slate-900 p-8 sm:p-12 text-white shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-purple-300">
              <Sparkles className="h-4 w-4" />
              Direct AI/ML Engineering Engagement
            </span>
            <h3 className="mt-2 font-serif text-2xl sm:text-4xl font-bold leading-tight">
              Looking for a Production-Grade AI/ML Engineer or GenAI Consultant?
            </h3>
            <p className="mt-3 text-sm text-purple-100/90 leading-relaxed">
              Available for full-time Machine Learning roles, contract GenAI system architecture, RAG optimization, and AI microservice deployments. Let&apos;s discuss your technical roadmap.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-purple-200">
              <span>📍 Nashik / Pune, Maharashtra</span>
              <span>&bull;</span>
              <span>✉️ {YASH_PORTFOLIO_HERO.socials.rawEmail}</span>
              <span>&bull;</span>
              <span>🎓 SPPU B.E. Distinction (8.34 CGPA)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={YASH_PORTFOLIO_HERO.resumeUrl}
              download="Yash_Jondhale_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-500 px-6 py-3.5 text-xs font-bold text-white shadow-md hover:bg-purple-600 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </a>
            <a
              href={YASH_PORTFOLIO_HERO.socials.email}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Yash Directly</span>
            </a>
            <a
              href={YASH_PORTFOLIO_HERO.socials.linkedin}
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
