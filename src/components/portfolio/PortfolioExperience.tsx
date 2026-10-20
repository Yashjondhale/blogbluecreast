"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Users,
  GraduationCap,
  MapPin,
  Calendar,
  Sparkles,
  Download,
  CheckCircle2,
  Building,
  School,
} from "lucide-react";
import { EXPERIENCE_ITEMS, PORTFOLIO_HERO } from "@/data/portfolioData";

export function PortfolioExperience() {
  const [activeTab, setActiveTab] = useState<"experience" | "leadership" | "education">("experience");

  const internshipItems = EXPERIENCE_ITEMS.filter((i) => i.type === "Internship" || i.type === "Certification & Training");
  const leadershipItems = EXPERIENCE_ITEMS.filter((i) => i.type === "Leadership & Community");

  return (
    <section id="experience" className="mt-20 scroll-mt-24">
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
            <Briefcase className="h-3.5 w-3.5" />
            Career & Community Journey
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Work Experience, Leadership & Education
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            From MERN development at GWSWeb and GDG volunteering to B.E. at SPPU and heading AI events.
          </p>
        </div>

        {/* View Switcher Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("experience")}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "experience"
                ? "bg-[#0B3D91] text-white shadow-sm dark:bg-[#1E90FF] dark:text-slate-950"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            <Briefcase className="h-3.5 w-3.5" />
            <span>Work & Internships</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("leadership")}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "leadership"
                ? "bg-[#0B3D91] text-white shadow-sm dark:bg-[#1E90FF] dark:text-slate-950"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            <Users className="h-3.5 w-3.5" />
            <span>Leadership & GDG</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("education")}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
              activeTab === "education"
                ? "bg-[#0B3D91] text-white shadow-sm dark:bg-[#1E90FF] dark:text-slate-950"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Academic Background</span>
          </button>
        </div>
      </motion.div>

      {/* Tab Contents */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {activeTab === "experience" && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {internshipItems.map((item, idx) => (
                <ExperienceCard key={item.id} item={item} index={idx} />
              ))}
            </motion.div>
          )}

          {activeTab === "leadership" && (
            <motion.div
              key="leadership"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {leadershipItems.map((item, idx) => (
                <ExperienceCard key={item.id} item={item} index={idx} />
              ))}
            </motion.div>
          )}

          {activeTab === "education" && (
            <motion.div
              key="education"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* College Degree Spotlight */}
              <div className="rounded-3xl border border-blue-200/80 bg-gradient-to-br from-blue-50/70 via-white to-white p-6 sm:p-8 shadow-sm dark:border-blue-900/40 dark:from-blue-950/20 dark:via-slate-900/50 dark:to-slate-900/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-900 dark:bg-blue-950/80 dark:text-blue-300">
                      <GraduationCap className="h-3.5 w-3.5" />
                      Undergraduate Degree
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      7.40 CGPA
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {PORTFOLIO_HERO.education.status}
                  </span>
                </div>

                <h3 className="mt-4 font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {PORTFOLIO_HERO.education.degree}
                </h3>
                <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {PORTFOLIO_HERO.education.institution}
                </p>
                <p className="text-xs text-[#0B3D91] dark:text-[#1E90FF] font-medium mt-0.5">
                  Affiliated with {PORTFOLIO_HERO.education.university} &bull; {PORTFOLIO_HERO.education.location}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                  Rigorous engineering curriculum centered on Data Structures and Algorithms (Java), Object-Oriented Software Design, Database Management Systems, Web Technologies, and Computer Networks. Active contributor to student cells and department websites.
                </p>
              </div>

              {/* Secondary Education Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {PORTFOLIO_HERO.secondaryEducation.map((sec, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs dark:border-slate-800 dark:bg-slate-900/60"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1E90FF]">
                        {sec.level}
                      </span>
                      <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                        {sec.score}
                      </span>
                    </div>

                    <h4 className="mt-3 font-serif text-lg font-bold text-slate-900 dark:text-slate-100">
                      {sec.school}
                    </h4>

                    <div className="mt-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {sec.location}
                      </span>
                      <span className="font-mono">Year: {sec.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function ExperienceCard({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs dark:border-slate-800 dark:bg-slate-900/50 hover:shadow-md transition-all"
    >
      <div>
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-[#1E90FF] dark:bg-blue-950/60 dark:text-blue-300">
            <Briefcase className="h-3 w-3" />
            {item.badge || item.type}
          </span>
          <span className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400">
            {item.period}
          </span>
        </div>

        <h3 className="mt-4 font-serif text-xl font-bold text-slate-900 dark:text-slate-100">
          {item.role}
        </h3>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
          <span>{item.organization}</span>
          <span>&bull;</span>
          <span className="flex items-center gap-0.5 text-slate-500 dark:text-slate-400">
            <MapPin className="h-3 w-3" />
            {item.location}
          </span>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
          {item.description}
        </p>

        {/* Achievements bullet list */}
        <div className="mt-4 space-y-1.5">
          {item.achievements.map((ach: string, aIdx: number) => (
            <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
              <span className="text-[#1E90FF] mt-0.5 font-bold">•</span>
              <span>{ach}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills pills */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
        {item.skills.map((skill: string) => (
          <span
            key={skill}
            className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
