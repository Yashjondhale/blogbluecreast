"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Terminal,
  Trophy,
} from "lucide-react";
import { PORTFOLIO_HERO } from "@/data/portfolioData";
import { GithubIcon, LinkedinIcon } from "@/components/brand/SocialIcons";

export function PortfolioHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative mt-4 mb-16 overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-white p-6 sm:p-10 lg:p-12 shadow-sm dark:border-slate-800 dark:from-slate-900/80 dark:via-slate-900/40 dark:to-slate-900/10"
    >
      {/* Background Ambient Glow Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl dark:bg-cyan-500/20"
      />

      <div className="relative flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
        {/* Left: Speaker Podium Portrait with Holographic Aura & Floating Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative shrink-0 flex flex-col items-center"
        >
          {/* Animated Glow Halo */}
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#0B3D91] via-[#1E90FF] to-cyan-400 opacity-60 blur-lg transition duration-700 group-hover:opacity-100 dark:opacity-70 animate-pulse" />

          {/* Photo Frame Container (Balanced 1:1 Aspect Ratio) */}
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-[360px] md:w-[360px] overflow-hidden rounded-3xl border-2 border-white/80 bg-slate-900 shadow-2xl ring-4 ring-[#1E90FF]/30 dark:border-slate-800">
            <Image
              src={PORTFOLIO_HERO.avatar}
              alt={PORTFOLIO_HERO.name}
              fill
              priority
              sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 360px"
              className="object-cover object-center transition-all duration-700 ease-out hover:scale-105"
            />
            {/* Subtle Gradient Overlay at bottom for badge contrast */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

            <div className="absolute bottom-3 left-3 right-3 text-white text-center">
              <p className="font-serif text-sm font-bold tracking-wide">
                Prathmesh Lohar
              </p>
              <p className="text-[11px] text-blue-200">
                Full Stack Web Developer &bull; SPPU B.E.
              </p>
            </div>
          </div>

          {/* Floating Top Badge: IIT Bombay Finalist */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="absolute -top-3 -left-3 sm:-left-5 inline-flex items-center gap-1.5 rounded-2xl border border-amber-300/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-amber-900 shadow-lg backdrop-blur-md dark:border-amber-700/60 dark:bg-slate-900/90 dark:text-amber-300"
          >
            <Trophy className="h-3.5 w-3.5 text-amber-500 fill-amber-400" />
            <span>Finalist @ IIT Bombay (NEC 2025)</span>
          </motion.div>

          {/* Floating Bottom Badge: GeeksforGeeks Award */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            whileHover={{ scale: 1.05 }}
            className="absolute -bottom-3 -right-3 sm:-right-4 inline-flex items-center gap-1.5 rounded-2xl border border-emerald-300/80 bg-white/95 px-3 py-1.5 text-xs font-bold text-emerald-900 shadow-lg backdrop-blur-md dark:border-emerald-700/60 dark:bg-slate-900/90 dark:text-emerald-300"
          >
            <Award className="h-3.5 w-3.5 text-emerald-500" />
            <span>GeeksforGeeks DSA Award</span>
          </motion.div>

          {/* Live Availability Ticker */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-3.5 py-1 text-xs font-bold text-emerald-800 shadow-xs dark:border-emerald-800/80 dark:bg-emerald-950/50 dark:text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Full Stack Web Dev Roles</span>
          </motion.div>
        </motion.div>

        {/* Right: Headlines, Credentials, Badges & CTAs */}
        <div className="flex-1 text-center lg:text-left">
          {/* Top Pill Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-3"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#1E90FF] dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/50">
              <Code2 className="h-3.5 w-3.5" />
              Full Stack Web Developer (MERN Stack)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <GraduationCap className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
              SPPU Engineering &bull; 7.40 CGPA
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
              <MapPin className="h-3.5 w-3.5 text-indigo-500" />
              Nashik, Maharashtra
            </span>
          </motion.div>

          {/* Main Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
              Prathmesh Lohar
            </h1>
            <p className="mt-2 text-lg sm:text-xl font-bold bg-gradient-to-r from-[#0B3D91] via-[#1E90FF] to-cyan-500 bg-clip-text text-transparent">
              Full Stack Web Developer &bull; MERN Specialist &bull; Java DSA
            </p>
          </motion.div>

          {/* Subheadline / Narrative Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl"
          >
            {PORTFOLIO_HERO.subheadline}
          </motion.p>

          {/* Quick Metrics Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl"
          >
            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-3 text-center shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Engineering
              </div>
              <div className="mt-0.5 text-sm sm:text-base font-extrabold text-[#0B3D91] dark:text-[#1E90FF]">
                7.40 CGPA
              </div>
              <div className="text-[10px] text-slate-500">SPPU (2022-26)</div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-3 text-center shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                IIT Bombay
              </div>
              <div className="mt-0.5 text-sm sm:text-base font-extrabold text-amber-600 dark:text-amber-400">
                NEC 2025
              </div>
              <div className="text-[10px] text-slate-500">National Finalist</div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-3 text-center shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                GWSWeb Intern
              </div>
              <div className="mt-0.5 text-sm sm:text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                PixelFlow
              </div>
              <div className="text-[10px] text-slate-500">Junior Web Dev</div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-3 text-center shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Algorithms
              </div>
              <div className="mt-0.5 text-sm sm:text-base font-extrabold text-indigo-600 dark:text-indigo-400">
                GFG Award
              </div>
              <div className="text-[10px] text-slate-500">DSA in Java</div>
            </div>
          </motion.div>

          {/* Quick Credibility Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2"
          >
            {PORTFOLIO_HERO.badges.map((badge, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-3 py-1 text-xs font-medium text-slate-800 shadow-2xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
              >
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
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
            {/* Download Resume Button */}
            <motion.a
              href={PORTFOLIO_HERO.resumeUrl}
              download="Prathmesh_Lohar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B3D91] via-[#1E90FF] to-blue-600 px-5 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/25 transition-all hover:shadow-lg hover:shadow-blue-500/35 cursor-pointer"
            >
              <Download className="h-4 w-4" />
              <span>Download Resume (PDF)</span>
            </motion.a>

            {/* Explore Projects Button */}
            <motion.a
              href="#case-studies"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-xs font-bold text-slate-800 shadow-xs transition-colors hover:bg-slate-100 hover:text-black dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            {/* Explore Skills Button */}
            <motion.a
              href="#skills-matrix"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50/60 px-4 py-3 text-xs font-bold text-indigo-900 transition-colors hover:bg-indigo-100 dark:border-indigo-800/80 dark:bg-indigo-950/40 dark:text-indigo-300 cursor-pointer"
            >
              <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              <span>Skills Matrix</span>
            </motion.a>

            {/* Social Channels & Contact */}
            <div className="flex items-center gap-2 pl-1 sm:pl-2">
              <motion.a
                href={PORTFOLIO_HERO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-black hover:text-black dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-white shadow-2xs"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </motion.a>

              <motion.a
                href={PORTFOLIO_HERO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0A66C2] hover:border-[#0A66C2] dark:border-slate-800 dark:bg-slate-900 shadow-2xs"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </motion.a>

              <motion.a
                href={PORTFOLIO_HERO.socials.email}
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 shadow-2xs"
                aria-label="Send Direct Email"
              >
                <Mail className="h-4 w-4" />
              </motion.a>

              <motion.a
                href={`tel:${PORTFOLIO_HERO.socials.phone.replace(/\s+/g, "")}`}
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-emerald-600 hover:border-emerald-500 dark:border-slate-800 dark:bg-slate-900 dark:text-emerald-400 shadow-2xs"
                aria-label="Call Prathmesh"
              >
                <Phone className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
