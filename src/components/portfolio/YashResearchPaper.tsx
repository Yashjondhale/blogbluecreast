"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { RESEARCH_PUBLICATIONS } from "@/data/portfolioData";

export function YashResearchPaper() {
  const paper = RESEARCH_PUBLICATIONS[0];
  if (!paper) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      id="research"
      className="mt-20 scroll-mt-24"
    >
      <div className="rounded-3xl border border-amber-300/40 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-slate-900/10 p-6 sm:p-10 dark:border-amber-600/30 dark:from-amber-950/20 dark:via-slate-900/60 dark:to-slate-900/30 shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-800 dark:bg-amber-400/20 dark:text-amber-300">
            <BookOpen className="h-3.5 w-3.5" />
            Peer-Reviewed Academic Publication
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {paper.date} &bull; {paper.volume}, {paper.issue}
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 leading-snug">
          {paper.title}
        </h3>

        <div className="mt-2 text-xs font-bold text-amber-700 dark:text-amber-400">
          Published in {paper.journal} (ISSN: {paper.issn})
        </div>

        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          {paper.abstract}
        </p>

        {/* Verification Metrics Grid */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {paper.metrics.map((m, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200/70 bg-white/80 p-3 shadow-2xs dark:border-slate-800 dark:bg-slate-900/80"
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

          {paper.paperUrl && (
            <a
              href={paper.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-amber-700 transition-colors"
            >
              <span>Verify Paper on IJRTI</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.section>
  );
}
