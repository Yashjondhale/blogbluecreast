"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import { YASH_EXPERIENCE_ITEMS } from "@/data/portfolioData";
import { MotionCard } from "./MotionComponents";

export function YashExperience() {
  return (
    <section id="yash-experience" className="mt-20 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
        <div>
          <span className="text-xs font-bold tracking-wider text-purple-600 dark:text-purple-400 uppercase flex items-center gap-1.5">
            <Briefcase className="h-3.5 w-3.5" />
            Track Record & Applied Research
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Work Experience & AI Leadership
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Enterprise data science at Altair Engineering, production AI engineering at Edunet, and developer community contributor at GDG.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {YASH_EXPERIENCE_ITEMS.map((item, idx) => (
          <MotionCard
            key={item.id}
            index={idx}
            className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs transition-all hover:border-purple-500/30 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/50"
          >
            <div>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-[11px] font-bold text-purple-700 dark:bg-purple-950/60 dark:text-purple-300">
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

              {/* Achievements */}
              <div className="mt-4 space-y-2">
                {item.achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <span className="text-purple-600 dark:text-purple-400 mt-0.5">•</span>
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
    </section>
  );
}
