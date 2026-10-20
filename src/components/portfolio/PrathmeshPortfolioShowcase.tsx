"use client";

import { Download, Mail, Phone, Sparkles } from "lucide-react";
import { LinkedinIcon } from "@/components/brand/SocialIcons";
import { PRATHMESH_PORTFOLIO_HERO } from "@/data/portfolioData";
import { PortfolioHero } from "./PortfolioHero";
import { PortfolioTerminal } from "./PortfolioTerminal";
import { PortfolioFilter } from "./PortfolioFilter";
import { PortfolioHonors } from "./PortfolioHonors";
import { PortfolioSkills } from "./PortfolioSkills";
import { PortfolioExperience } from "./PortfolioExperience";
import { MotionSection } from "./MotionComponents";

export function PrathmeshPortfolioShowcase() {
  return (
    <div className="space-y-16">
      {/* 1. Hero Section with Podium Photo & Holographic Aura */}
      <PortfolioHero />

      {/* 2. Interactive Terminal / CLI Playground */}
      <PortfolioTerminal />

      {/* 3. Featured Production Projects & Filter */}
      <PortfolioFilter
        initialAuthorFilter="prathmesh"
        showAuthorToggle={false}
        title="Production Web Applications & Systems"
        subtitle="MERN architectures, responsive CMS platforms, and live meteorological engines built by Prathmesh Lohar."
        badgeText="Web Engineering & Full Stack"
      />

      {/* 4. National Honors & Key Achievements (IIT Bombay NEC 2025 & GFG) */}
      <PortfolioHonors />

      {/* 5. Animated Skills Matrix */}
      <PortfolioSkills />

      {/* 6. Work Experience, Leadership & Education */}
      <PortfolioExperience />

      {/* 7. Direct Recruiter & Collaboration CTA Banner */}
      <MotionSection className="mt-24 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-[#0B3D91] via-blue-950 to-slate-950 p-8 sm:p-12 text-white shadow-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
              <Sparkles className="h-4 w-4" />
              Direct Engineering Hiring & Engagement
            </span>
            <h3 className="mt-2 font-serif text-2xl sm:text-4xl font-bold leading-tight">
              Looking for a Driven Full Stack Developer or MERN Engineer?
            </h3>
            <p className="mt-3 text-sm text-blue-100/90 leading-relaxed">
              Prathmesh Lohar brings proven internship experience from GWSWeb, algorithmic excellence from GeeksforGeeks, and national innovation pedigree from IIT Bombay NEC 2025. Available for Full Stack Web Developer roles, frontend engineering, and backend API integration.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-blue-200">
              <span>📞 {PRATHMESH_PORTFOLIO_HERO.socials.phone}</span>
              <span>&bull;</span>
              <span>✉️ {PRATHMESH_PORTFOLIO_HERO.socials.rawEmail}</span>
              <span>&bull;</span>
              <span>📍 Nashik, Maharashtra</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={PRATHMESH_PORTFOLIO_HERO.resumeUrl}
              download="Prathmesh_Lohar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs font-bold text-slate-950 shadow-md hover:bg-slate-100 transition-colors"
            >
              <Download className="h-4 w-4 text-[#0B3D91]" />
              <span>Download Resume</span>
            </a>

            <a
              href={PRATHMESH_PORTFOLIO_HERO.socials.email}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Email Prathmesh</span>
            </a>

            <a
              href={`tel:${PRATHMESH_PORTFOLIO_HERO.socials.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-500/20 px-6 py-3.5 text-xs font-bold text-emerald-300 hover:bg-emerald-500/30 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>Call Directly</span>
            </a>

            <a
              href={PRATHMESH_PORTFOLIO_HERO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-xs font-bold text-white hover:bg-white/20 transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}
