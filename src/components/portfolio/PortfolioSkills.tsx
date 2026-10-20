"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Server,
  Cpu,
  Wrench,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { SKILLS_MATRIX } from "@/data/portfolioData";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "Front-End Engineering": <Code2 className="h-4 w-4 text-cyan-500" />,
  "Back-End & Databases": <Server className="h-4 w-4 text-emerald-500" />,
  "Programming Languages & DSA": <Cpu className="h-4 w-4 text-indigo-500" />,
  "Tools, Libraries & Cloud": <Wrench className="h-4 w-4 text-amber-500" />,
};

export function PortfolioSkills() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories = ["All", ...SKILLS_MATRIX.map((c) => c.category)];

  const displayedGroups =
    activeTab === "All"
      ? SKILLS_MATRIX
      : SKILLS_MATRIX.filter((c) => c.category === activeTab);

  return (
    <section id="skills-matrix" className="mt-20 scroll-mt-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800"
      >
        <div>
          <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Verified Technical Capabilities
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Skills Matrix & Engineering Competencies
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Proficiencies across Full Stack MERN development, Java Data Structures & Algorithms, and modern cloud deployment.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveTab(cat)}
                className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0B3D91] text-white shadow-sm dark:bg-[#1E90FF] dark:text-slate-950"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* Grid of Skill Categories */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {displayedGroups.map((group, gIdx) => (
            <motion.div
              key={group.category}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, delay: gIdx * 0.05 }}
              className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs dark:border-slate-800 dark:bg-slate-900/50 hover:shadow-md transition-shadow"
            >
              {/* Card Header */}
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800">
                  {CATEGORY_ICONS[group.category] || <Layers className="h-4 w-4" />}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-slate-100">
                    {group.category}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {group.skills.length} core technologies
                  </p>
                </div>
              </div>

              {/* Skills Progress List */}
              <div className="mt-5 space-y-4">
                {group.skills.map((skill, sIdx) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-medium text-slate-400">
                          {skill.level}
                        </span>
                        <span className="font-mono text-xs font-bold text-[#0B3D91] dark:text-[#1E90FF]">
                          {skill.proficiency}%
                        </span>
                      </div>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: sIdx * 0.07, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-[#0B3D91] via-[#1E90FF] to-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
