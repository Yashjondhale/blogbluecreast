"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  CheckCircle2,
  Cpu,
  Download,
  GraduationCap,
  Mail,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/brand/SocialIcons";
import { YASH_PORTFOLIO_HERO } from "@/data/portfolioData";

export function YashPortfolioHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative mt-4 mb-16 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-b from-purple-50/50 via-white to-white p-6 sm:p-10 lg:p-12 shadow-sm dark:border-slate-800 dark:from-purple-950/20 dark:via-slate-900/40 dark:to-slate-900/10"
    >
      {/* Background Ambient Glow Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20"
      />

      <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        {/* Left: Portrait Frame with Holographic Purple Halo & Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative shrink-0 flex flex-col items-center"
        >
          {/* Animated Glow Halo */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#0B3D91] via-purple-600 to-indigo-400 opacity-60 blur-lg transition duration-700 animate-pulse" />

          {/* Photo Frame Container */}
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-[340px] md:w-[340px] overflow-hidden rounded-3xl border-2 border-white/80 bg-slate-900 shadow-2xl ring-4 ring-purple-500/30 dark:border-slate-800">
            <Image
              src={YASH_PORTFOLIO_HERO.avatar}
              alt={YASH_PORTFOLIO_HERO.name}
              fill
              priority
              sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 340px"
              className="object-cover object-top transition-all duration-700 ease-out hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 text-white text-center">
              <p className="font-serif text-sm font-bold tracking-wide">
                Yash Jondhale
              </p>
              <p className="text-[11px] text-purple-200">
                AI/ML Engineer &bull; SPPU Distinction (8.34)
              </p>
            </div>
          </div>

          {/* Floating Top Badge: Published in IJRTI */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="absolute -top-3 -left-3 sm:-left-5 inline-flex items-center gap-1.5 rounded-2xl border border-purple-300/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-purple-900 shadow-lg backdrop-blur-md dark:border-purple-700/60 dark:bg-slate-900/90 dark:text-purple-300"
          >
            <BookOpen className="h-3.5 w-3.5 text-purple-600" />
            <span>Published in IJRTI Journal</span>
          </motion.div>

          {/* Floating Bottom Badge: Ex-Altair & Edunet */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-3 -right-3 sm:-right-4 inline-flex items-center gap-1.5 rounded-2xl border border-blue-300/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-blue-900 shadow-lg backdrop-blur-md dark:border-blue-700/60 dark:bg-slate-900/90 dark:text-blue-300"
          >
            <Briefcase className="h-3.5 w-3.5 text-blue-600" />
            <span>Ex-Intern @ Altair & Edunet</span>
          </motion.div>
        </motion.div>

        {/* Right: Headlines & Bio */}
        <div className="flex-1 text-center lg:text-left">
          {/* Top Pill Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3.5 py-1 text-xs font-bold text-purple-700 dark:bg-purple-950/70 dark:text-purple-300">
              <Cpu className="h-3.5 w-3.5" />
              Founder & Lead AI Engineer
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <GraduationCap className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
              SPPU Computer Engineering (8.34 CGPA Distinction)
            </span>
          </motion.div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
            {YASH_PORTFOLIO_HERO.headline}
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl">
            {YASH_PORTFOLIO_HERO.subheadline}
          </p>

          {/* Quick Credibility Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
            {YASH_PORTFOLIO_HERO.badges.map((badge, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-800 shadow-2xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-purple-500" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
            <a
              href={YASH_PORTFOLIO_HERO.resumeUrl}
              download="Yash_Jondhale_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-purple-700 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <a
              href={YASH_PORTFOLIO_HERO.socials.email}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <Mail className="h-4 w-4 text-purple-600" />
              <span>Contact Yash</span>
            </a>

            <a
              href={YASH_PORTFOLIO_HERO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              <span>GitHub</span>
            </a>

            <a
              href={YASH_PORTFOLIO_HERO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 shadow-2xs hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <LinkedinIcon className="h-4 w-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
