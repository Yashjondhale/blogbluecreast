"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Code2,
  Cpu,
  Download,
  GraduationCap,
  Layers,
  Sparkles,
  Terminal,
  Trophy,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/brand/SocialIcons";
import {
  PRATHMESH_PORTFOLIO_HERO,
  YASH_PORTFOLIO_HERO,
} from "@/data/portfolioData";

export type PortfolioViewMode = "dual" | "prathmesh" | "yash";

interface DualPortfolioHeaderProps {
  viewMode: PortfolioViewMode;
  onSelectViewMode: (mode: PortfolioViewMode) => void;
}

export function DualPortfolioHeader({
  viewMode,
  onSelectViewMode,
}: DualPortfolioHeaderProps) {
  return (
    <div className="relative mb-12">
      {/* Top Banner Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1E90FF] dark:bg-blue-400/10 dark:text-cyan-300">
          <Sparkles className="h-3.5 w-3.5" />
          BlueCreast Engineering & Innovation Portfolios
        </span>
        <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Technical Showcases & Portfolios
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
          Click any profile photo or card area below to view their dedicated engineering portfolio, case studies, and achievements.
        </p>

        {/* View Switcher Segmented Control */}
        <div className="mt-7 inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl border border-slate-200/80 bg-slate-100/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80 shadow-xs">
          <button
            type="button"
            onClick={() => onSelectViewMode("dual")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
              viewMode === "dual"
                ? "bg-white text-slate-950 shadow-md dark:bg-slate-800 dark:text-white"
                : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            }`}
          >
            <Layers className="h-3.5 w-3.5 text-[#1E90FF]" />
            <span>Dual Partition Grid (Both Profiles)</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectViewMode("prathmesh")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
              viewMode === "prathmesh"
                ? "bg-[#0B3D91] text-white shadow-md dark:bg-[#1E90FF] dark:text-slate-950"
                : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            }`}
          >
            <Code2 className="h-3.5 w-3.5 text-cyan-400" />
            <span>Prathmesh Lohar (Full Stack & MERN)</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectViewMode("yash")}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
              viewMode === "yash"
                ? "bg-[#0B3D91] text-white shadow-md dark:bg-[#1E90FF] dark:text-slate-950"
                : "text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
            }`}
          >
            <Cpu className="h-3.5 w-3.5 text-purple-400" />
            <span>Yash Jondhale (AI/ML & GenAI)</span>
          </button>
        </div>
      </motion.div>

      {/* 2-Column Split Partition Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Partition Card 1: Prathmesh Lohar (Entire Card & Photo Clickable) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onClick={() => onSelectViewMode("prathmesh")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelectViewMode("prathmesh");
            }
          }}
          aria-label="Click to open Prathmesh Lohar's Portfolio"
          className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 cursor-pointer text-left ${
            viewMode === "prathmesh"
              ? "border-[#1E90FF] bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/30 shadow-xl ring-2 ring-[#1E90FF]/40 dark:border-[#1E90FF] dark:from-slate-900/90 dark:via-slate-900/70 dark:to-blue-950/30"
              : "border-slate-200/80 bg-white hover:border-[#1E90FF]/60 hover:shadow-xl hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-[#1E90FF]/40"
          } p-6 sm:p-8 flex flex-col justify-between`}
        >
          {/* Subtle gradient accent badge */}
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-bold text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-300">
              <Code2 className="h-3.5 w-3.5" />
              Full Stack Engineering Showcase
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Hire
              </span>
              <span className="hidden sm:inline-flex items-center gap-0.5 text-[11px] font-bold text-[#1E90FF] group-hover:translate-x-0.5 transition-transform">
                Open <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            {/* Avatar Frame with Aura - Clickable with Hover Lift */}
            <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-2xl ring-4 ring-cyan-500/20 shadow-md group-hover:ring-cyan-500/60 transition-all duration-300">
              <Image
                src={PRATHMESH_PORTFOLIO_HERO.avatar}
                alt={PRATHMESH_PORTFOLIO_HERO.name}
                fill
                sizes="(max-width: 640px) 112px, 128px"
                className="object-cover transition-transform duration-500 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors" />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h2 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-[#1E90FF] transition-colors dark:text-slate-100 dark:group-hover:text-cyan-300">
                  {PRATHMESH_PORTFOLIO_HERO.name}
                </h2>
                <ArrowUpRight className="h-4 w-4 text-[#1E90FF] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-xs font-semibold text-[#1E90FF] mt-0.5">
                {PRATHMESH_PORTFOLIO_HERO.shortRole}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                {PRATHMESH_PORTFOLIO_HERO.subheadline}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold text-amber-700 dark:bg-amber-400/10 dark:text-amber-300">
                  <Trophy className="h-3 w-3" />
                  IIT Bombay NEC 2025 Finalist
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <Award className="h-3 w-3" />
                  GFG DSA Award
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                  <Briefcase className="h-3 w-3" />
                  Ex-GWSWeb Intern
                </span>
              </div>
            </div>
          </div>

          {/* Quick Action Footer */}
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-[#0B3D91] px-4 py-2 text-xs font-bold text-white shadow-xs transition-colors group-hover:bg-blue-800 dark:bg-[#1E90FF] dark:text-slate-950 dark:group-hover:bg-blue-400">
              <span>View Prathmesh&apos;s Portfolio</span>
              <Terminal className="h-3.5 w-3.5" />
            </span>

            {/* Individual External Links (stopPropagation so card click doesn't conflict) */}
            <div
              className="flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={PRATHMESH_PORTFOLIO_HERO.resumeUrl}
                download="Prathmesh_Lohar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Download Resume"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
              >
                <Download className="h-3.5 w-3.5" />
              </a>
              <a
                href={PRATHMESH_PORTFOLIO_HERO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
              >
                <GithubIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={PRATHMESH_PORTFOLIO_HERO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white dark:bg-[#0A66C2]/20 dark:text-[#38bdf8]"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Partition Card 2: Yash Jondhale (Entire Card & Photo Clickable) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onClick={() => onSelectViewMode("yash")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelectViewMode("yash");
            }
          }}
          aria-label="Click to open Yash Jondhale's AI Portfolio"
          className={`group relative overflow-hidden rounded-3xl border transition-all duration-300 cursor-pointer text-left ${
            viewMode === "yash"
              ? "border-purple-500 bg-gradient-to-br from-purple-50/80 via-white to-blue-50/30 shadow-xl ring-2 ring-purple-500/40 dark:border-purple-400 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-purple-950/30"
              : "border-slate-200/80 bg-white hover:border-purple-500/60 hover:shadow-xl hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-purple-500/40"
          } p-6 sm:p-8 flex flex-col justify-between`}
        >
          {/* Subtle gradient accent badge */}
          <div className="flex items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-bold text-purple-600 dark:bg-purple-400/10 dark:text-purple-300">
              <Cpu className="h-3.5 w-3.5" />
              AI/ML & GenAI Systems Showcase
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for AI Roles
              </span>
              <span className="hidden sm:inline-flex items-center gap-0.5 text-[11px] font-bold text-purple-600 dark:text-purple-400 group-hover:translate-x-0.5 transition-transform">
                Open <ArrowUpRight className="h-3 w-3" />
              </span>
            </div>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row items-center sm:items-start gap-5">
            {/* Avatar Frame with Aura - Clickable with Hover Lift */}
            <div className="relative h-28 w-28 sm:h-32 sm:w-32 shrink-0 overflow-hidden rounded-2xl ring-4 ring-purple-500/20 shadow-md group-hover:ring-purple-500/60 transition-all duration-300">
              <Image
                src={YASH_PORTFOLIO_HERO.avatar}
                alt={YASH_PORTFOLIO_HERO.name}
                fill
                sizes="(max-width: 640px) 112px, 128px"
                className="object-cover transition-transform duration-500 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors" />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h2 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors dark:text-slate-100 dark:group-hover:text-purple-300">
                  {YASH_PORTFOLIO_HERO.name}
                </h2>
                <ArrowUpRight className="h-4 w-4 text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                {YASH_PORTFOLIO_HERO.shortRole}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                {YASH_PORTFOLIO_HERO.subheadline}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                <span className="inline-flex items-center gap-1 rounded-md bg-purple-500/10 px-2 py-0.5 text-[10px] font-bold text-purple-700 dark:bg-purple-400/10 dark:text-purple-300">
                  <BookOpen className="h-3 w-3" />
                  Published in IJRTI
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-400/10 dark:text-blue-300">
                  <GraduationCap className="h-3 w-3" />
                  SPPU Distinction (8.34)
                </span>
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">
                  <Briefcase className="h-3 w-3" />
                  Ex-Altair & Edunet
                </span>
              </div>
            </div>
          </div>

          {/* Quick Action Footer */}
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-purple-600 px-4 py-2 text-xs font-bold text-white shadow-xs transition-colors group-hover:bg-purple-700 dark:bg-purple-500 dark:text-slate-950 dark:group-hover:bg-purple-400">
              <span>View Yash&apos;s Portfolio</span>
              <Cpu className="h-3.5 w-3.5" />
            </span>

            {/* Individual External Links (stopPropagation so card click doesn't conflict) */}
            <div
              className="flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <a
                href={YASH_PORTFOLIO_HERO.resumeUrl}
                download="Yash_Jondhale_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Download Resume"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
              >
                <Download className="h-3.5 w-3.5" />
              </a>
              <a
                href={YASH_PORTFOLIO_HERO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
              >
                <GithubIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href={YASH_PORTFOLIO_HERO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white dark:bg-[#0A66C2]/20 dark:text-[#38bdf8]"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
