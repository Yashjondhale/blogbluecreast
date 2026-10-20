"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Cpu,
  ExternalLink,
  Eye,
  FileText,
  Layers,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "@/components/brand/SocialIcons";
import {
  COMPACT_PROJECTS,
  FLAGSHIP_PROJECTS,
  PORTFOLIO_CATEGORIES,
  PortfolioCategory,
  PortfolioProject,
} from "@/data/portfolioData";

export function PortfolioFilter() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All");

  const filteredFlagship = FLAGSHIP_PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    if (project.category === activeCategory) return true;
    if (project.secondaryCategories?.includes(activeCategory)) return true;
    return false;
  });

  const filteredCompact = COMPACT_PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="case-studies" className="scroll-mt-24">
      {/* Category Filter Tabs Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 pb-5 dark:border-slate-800"
      >
        <div>
          <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
            Production Implementations
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Featured AI Systems & Case Studies
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {PORTFOLIO_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0B3D91] text-white shadow-sm dark:bg-[#1E90FF] dark:text-slate-950"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                {category}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Flagship Projects Grid with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-8 space-y-10"
        >
          {filteredFlagship.map((project, idx) => (
            <FlagshipProjectCard key={project.id} project={project} index={idx} />
          ))}

          {filteredFlagship.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-dashed border-slate-200 p-12 text-center dark:border-slate-800"
            >
              <p className="text-sm text-slate-500 dark:text-slate-400">
                No flagship case studies found in this category filter.
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Compact Additional Projects Grid */}
      {filteredCompact.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-16"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                Specialized Machine Learning Models
              </span>
              <h3 className="mt-1 font-serif text-xl font-bold text-slate-900 dark:text-slate-100">
                Additional Engineering & ML Pipelines
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredCompact.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(idx * 0.08, 0.3),
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-2xs transition-all hover:border-[#1E90FF]/40 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/40"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-0.5 text-[10px] font-bold text-[#1E90FF] dark:bg-blue-950/50 dark:text-blue-300">
                      {project.category}
                    </span>
                    <a
                      href="https://github.com/Yashjondhale"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-slate-900 dark:hover:text-white"
                      aria-label="GitHub Repo"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  </div>

                  <h4 className="mt-3 font-serif text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#1E90FF] transition-colors">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.summary}
                  </p>

                  {/* Metrics */}
                  <div className="mt-4 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 dark:border-slate-800/80">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-[10px] font-medium text-slate-400">{m.label}</div>
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-200">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}

function FlagshipProjectCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: Math.min(index * 0.08, 0.25),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-xs transition-all hover:border-[#1E90FF]/30 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left / Top: Content Info */}
        <div className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"}`}>
          <div>
            {/* Header Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#1E90FF] dark:bg-blue-950/60 dark:text-blue-300">
                <Sparkles className="h-3 w-3" />
                {project.category}
              </span>
              {project.secondaryCategories?.map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-950/50 dark:text-amber-300"
                >
                  <Award className="h-3 w-3" />
                  {cat}
                </span>
              ))}
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#1E90FF] transition-colors">
              <Link href={`/portfolio/${project.slug}`}>
                {project.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              {project.subtitle}
            </p>

            {/* Narrative Summary */}
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.summary}
            </p>

            {/* Key Metrics Dashboard */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/60">
              {project.metrics.map((metric, mIdx) => (
                <div key={mIdx}>
                  <div className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                    {metric.label}
                  </div>
                  <div className="mt-0.5 text-xs sm:text-sm font-bold text-[#0B3D91] dark:text-[#1E90FF]">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-6 flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-200/70 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
            <Link
              href={`/portfolio/${project.slug}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0B3D91] px-5 py-2.5 text-xs font-bold text-white shadow-xs transition-colors hover:bg-blue-800 dark:bg-[#1E90FF] dark:text-slate-950 dark:hover:bg-blue-400"
            >
              <span>Explore Case Study</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            {project.caseStudy?.githubUrl && (
              <a
                href={project.caseStudy.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <GithubIcon className="h-4 w-4" />
                <span>Source Code</span>
              </a>
            )}

            {project.caseStudy?.paperUrl && (
              <a
                href={project.caseStudy.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-amber-200/80 bg-amber-50/50 px-4 py-2.5 text-xs font-semibold text-amber-800 hover:bg-amber-100 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-300"
              >
                <FileText className="h-4 w-4" />
                <span>Published Research (IJRTI)</span>
              </a>
            )}
          </div>
        </div>

        {/* Right / Visual Preview Side */}
        <div className={`relative bg-gradient-to-br from-slate-900 via-slate-800 to-[#0B3D91] p-8 flex flex-col justify-between text-white ${isEven ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"}`}>
          {/* Subtle Ambient Code Accent */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-blue-200/70 border-b border-white/10 pb-3">
              <span className="font-mono flex items-center gap-1.5">
                <Cpu className="h-3.5 w-3.5 text-[#1E90FF]" />
                production_service.py
              </span>
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-300">
                Active Microservice
              </span>
            </div>

            {/* Simulated Architecture Terminal Snippet */}
            <div className="rounded-xl bg-black/40 p-4 font-mono text-[11px] leading-relaxed text-blue-100/90 backdrop-blur-xs border border-white/5 overflow-hidden">
              <div className="text-slate-400"># Engineering Architecture Summary</div>
              <div className="text-cyan-300 mt-1">class {project.slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("")}Engine:</div>
              <div className="pl-4 text-emerald-300">def __init__(self, config):</div>
              <div className="pl-8 text-slate-300">self.model = load_embeddings()</div>
              <div className="pl-8 text-slate-300">self.retriever = HybridVectorRAG()</div>
              <div className="pl-8 text-slate-300">self.latency_sla = 850_ms</div>
              <div className="pl-4 text-emerald-300 mt-1">async def predict_stream(payload):</div>
              <div className="pl-8 text-purple-300">return await orchestrate_lpu(payload)</div>
            </div>

            {/* Key Engineering Impact Points */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">
                Core Highlights
              </span>
              <ul className="mt-2 space-y-1.5 text-xs text-blue-100/80">
                {project.caseStudy?.keyInnovations.slice(0, 3).map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#1E90FF] mt-0.5">•</span>
                    <span className="line-clamp-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-200/80">
            <span>Author: Yash Jondhale</span>
            <Link
              href={`/portfolio/${project.slug}`}
              className="inline-flex items-center gap-1 font-semibold text-[#1E90FF] hover:underline"
            >
              Detailed Specs <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
