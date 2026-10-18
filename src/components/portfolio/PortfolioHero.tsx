"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Download,
  GraduationCap,
  Mail,
  Terminal,
} from "lucide-react";
import { PORTFOLIO_HERO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/brand/SocialIcons";

export function PortfolioHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="mt-6 mb-16 rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-white p-6 sm:p-10 lg:p-12 shadow-xs dark:border-slate-800 dark:from-slate-900/60 dark:via-slate-900/30 dark:to-slate-900/10"
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Portrait Image with subtle pulse entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative shrink-0"
        >
          <div className="relative h-44 w-44 sm:h-52 sm:w-52 overflow-hidden rounded-3xl ring-4 ring-[#1E90FF]/30 shadow-xl">
            <Image
              src={PORTFOLIO_HERO.avatar}
              alt={PORTFOLIO_HERO.name}
              fill
              priority
              sizes="(max-width: 640px) 176px, 208px"
              className="object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="absolute -bottom-3 -right-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-md"
          >
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
            Available for AI/ML Roles
          </motion.div>
        </motion.div>

        {/* Bio & Headlines */}
        <div className="flex-1 text-center lg:text-left">
          {/* Top Pill Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#1E90FF] dark:bg-blue-950/70 dark:text-blue-300">
              <Terminal className="h-3.5 w-3.5" />
              Founder & Lead AI Engineer
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <GraduationCap className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              SPPU Computer Engineering (8.34 CGPA)
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight"
          >
            {PORTFOLIO_HERO.headline}
          </motion.h1>

          {/* Subheadline Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-3xl"
          >
            {PORTFOLIO_HERO.subheadline}
          </motion.p>

          {/* Quick Credibility Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.44 }}
            className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
          >
            {PORTFOLIO_HERO.badges.map((badge, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-800 shadow-2xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                <span>{badge}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
          >
            <motion.a
              href={PORTFOLIO_HERO.resumeUrl}
              download="Yash_Jondhale_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B3D91] to-[#1E90FF] px-5 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:from-blue-800 hover:to-blue-600 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </motion.a>

            <motion.a
              href="#case-studies"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-800 shadow-xs transition-colors hover:bg-slate-100 hover:text-black dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 cursor-pointer"
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            <motion.a
              href="#research"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl border border-amber-300/80 bg-amber-50/60 px-5 py-3 text-xs font-bold text-amber-900 transition-colors hover:bg-amber-100 dark:border-amber-800/80 dark:bg-amber-950/40 dark:text-amber-300 cursor-pointer"
            >
              <BookOpen className="h-4 w-4" />
              <span>Read Published Research (IJRTI)</span>
            </motion.a>

            {/* Social Channels */}
            <div className="flex items-center gap-2 pl-2">
              <motion.a
                href={PORTFOLIO_HERO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-black hover:text-black dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={PORTFOLIO_HERO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0A66C2] hover:border-[#0A66C2] dark:border-slate-800 dark:bg-slate-900"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={PORTFOLIO_HERO.socials.email}
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                aria-label="Send Direct Email"
              >
                <Mail className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
