"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Building2,
  GraduationCap,
} from "lucide-react";
import { CERTIFICATIONS, KEY_ACHIEVEMENTS } from "@/data/portfolioData";

export function PortfolioHonors() {
  return (
    <section id="honors" className="mt-20 scroll-mt-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800"
      >
        <div>
          <span className="text-xs font-bold tracking-wider text-amber-600 dark:text-amber-400 uppercase flex items-center gap-1.5">
            <Trophy className="h-3.5 w-3.5 fill-amber-400" />
            Competitive Excellence & Recognition
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Key Achievements & Industry Certifications
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            National finalist honors at IIT Bombay, algorithm awards from GeeksforGeeks, and verified enterprise certifications.
          </p>
        </div>
      </motion.div>

      {/* Main National Achievements Spotlight Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: IIT Bombay NEC 2025 */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-3xl border border-amber-300/80 bg-gradient-to-br from-amber-50/80 via-white to-white p-6 sm:p-8 shadow-sm dark:border-amber-700/50 dark:from-amber-950/20 dark:via-slate-900/40 dark:to-slate-900/20"
        >
          {/* Subtle Decorative Aura */}
          <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-amber-400/10 blur-2xl" />

          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900 dark:bg-amber-950/80 dark:text-amber-300">
              <Trophy className="h-3.5 w-3.5 fill-amber-400 text-amber-500" />
              National Finalist
            </span>
            <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
              NEC 2025
            </span>
          </div>

          <h3 className="mt-4 font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 leading-snug">
            IIT Bombay — National Entrepreneurship Challenge 2025
          </h3>

          <p className="mt-1 text-xs font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5" />
            Represented IEDC Cell &bull; Indian Institute of Technology, Bombay
          </p>

          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            Selected as a prestigious National Finalist in NEC 2025 organized by IIT Bombay, representing the college IEDC Cell. Competed with top engineering institutions across India in strategic innovation, enterprise viability, and pitch execution.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-amber-200/60 dark:border-slate-800">
            <span className="rounded-lg bg-amber-100/80 px-2.5 py-1 text-[11px] font-semibold text-amber-900 dark:bg-amber-950/70 dark:text-amber-300">
              IIT Bombay Finalist
            </span>
            <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              IEDC Cell Representative
            </span>
            <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              National Level
            </span>
          </div>
        </motion.div>

        {/* Card 2: GeeksforGeeks Award */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -4 }}
          className="relative overflow-hidden rounded-3xl border border-emerald-300/80 bg-gradient-to-br from-emerald-50/80 via-white to-white p-6 sm:p-8 shadow-sm dark:border-emerald-700/50 dark:from-emerald-950/20 dark:via-slate-900/40 dark:to-slate-900/20"
        >
          {/* Subtle Decorative Aura */}
          <div className="absolute -top-12 -right-12 h-36 w-36 rounded-full bg-emerald-400/10 blur-2xl" />

          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-300">
              <Award className="h-3.5 w-3.5 text-emerald-600" />
              DSA Excellence Award
            </span>
            <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
              2024
            </span>
          </div>

          <h3 className="mt-4 font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 leading-snug">
            GeeksforGeeks Problem Solving & Algorithms Award
          </h3>

          <p className="mt-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Algorithm Mastery & Data Structures in Java
          </p>

          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            Awarded for demonstrated problem-solving abilities, algorithmic speed, and consistent performance across competitive programming challenges involving trees, graphs, dynamic programming, and data structures.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-emerald-200/60 dark:border-slate-800">
            <span className="rounded-lg bg-emerald-100/80 px-2.5 py-1 text-[11px] font-semibold text-emerald-900 dark:bg-emerald-950/70 dark:text-emerald-300">
              Java DSA
            </span>
            <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              Algorithmic Optimization
            </span>
            <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              GeeksforGeeks
            </span>
          </div>
        </motion.div>
      </div>

      {/* Verified Certifications Strip */}
      <div className="mt-8">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
          Industry Certifications & Professional Training
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -2 }}
              className="flex items-start justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-[#1E90FF] dark:bg-blue-950/50 dark:text-blue-300">
                    <ShieldCheck className="h-3 w-3" />
                    {cert.badge}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">{cert.date}</span>
                </div>
                <h5 className="font-serif text-base font-bold text-slate-900 dark:text-slate-100">
                  {cert.title}
                </h5>
                <p className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Issuer: {cert.issuer}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {cert.skills}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
