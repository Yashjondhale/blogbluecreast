"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  Code2,
  ExternalLink,
  Layers,
  Sparkles,
  Terminal,
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

  const filteredProjects = FLAGSHIP_PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    if (project.category === activeCategory) return true;
    if (project.secondaryCategories?.includes(activeCategory)) return true;
    return false;
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
          <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase flex items-center gap-1.5">
            <Code2 className="h-3.5 w-3.5" />
            Featured Engineering Work
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Production Web Applications & Systems
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
          {filteredProjects.map((project, idx) => (
            <FlagshipProjectCard key={project.id} project={project} index={idx} />
          ))}

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-dashed border-slate-200 p-12 text-center dark:border-slate-800"
            >
              <p className="text-sm text-slate-500 dark:text-slate-400">
                No projects found in this category filter.
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function getSnippetForProject(slug: string) {
  if (slug === "pixelflow-dynamic-cms") {
    return {
      filename: "pixelFlowController.js",
      badge: "Express.js REST API",
      code: `// GWSWeb Client CMS Controller
router.post('/api/media/upload', async (req, res) => {
  const { title, description, tags, mediaUrl } = req.body;
  const entry = await MediaModel.create({
    title,
    description,
    tags,
    mediaUrl,
    author: req.user._id,
    createdAt: new Date()
  });
  return res.status(201).json({ success: true, entry });
});`,
    };
  }
  if (slug === "responsive-news-portal") {
    return {
      filename: "useNewsFeed.jsx",
      badge: "React + Cloudinary",
      code: `// Cloudinary AVIF/WebP Auto-Transform
export function NewsCard({ article }) {
  const optimizedImg = buildUrl(article.imageId, {
    transformations: { format: 'auto', quality: 'auto', width: 800 }
  });
  return (
    <article className="news-item">
      <img src={optimizedImg} alt={article.title} loading="lazy" />
      <h3>{article.headline}</h3>
    </article>
  );
}`,
    };
  }
  if (slug === "taskflow-pro-web-app") {
    return {
      filename: "taskStateManager.js",
      badge: "Offline Sync Engine",
      code: `// LocalStorage + Cloud Real-time Persistence
export function syncTasks(newTask) {
  const local = JSON.parse(localStorage.getItem('tasks') || '[]');
  const updated = [newTask, ...local];
  localStorage.setItem('tasks', JSON.stringify(updated));
  if (navigator.onLine) {
    firebaseDb.ref('tasks/' + newTask.id).set(newTask);
  }
}`,
    };
  }
  return {
    filename: "weatherService.js",
    badge: "OpenWeatherMap API",
    code: `// Real-Time Asynchronous Fetch
export async function getCityWeather(cityName) {
  const endpoint = \`https://api.openweathermap.org/data/2.5/weather?q=\${cityName}&units=metric&appid=\${API_KEY}\`;
  const response = await fetch(endpoint);
  if (!response.ok) throw new Error('City not found');
  const data = await response.json();
  return sanitizeWeatherData(data);
}`,
  };
}

function FlagshipProjectCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  const isEven = index % 2 === 0;
  const snippet = getSnippetForProject(project.slug);

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
        {/* Left / Content Info */}
        <div
          className={`p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
            isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"
          }`}
        >
          <div>
            {/* Header Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#1E90FF] dark:bg-blue-950/60 dark:text-blue-300">
                <Sparkles className="h-3 w-3" />
                {project.category}
              </span>
              {project.isFlagship && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                  <Award className="h-3 w-3" />
                  Featured Project
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#1E90FF] transition-colors">
              <Link href={`/portfolio/${project.slug}`}>{project.title}</Link>
            </h3>
            <p className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              {project.subtitle}
            </p>

            {/* Narrative Summary */}
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {project.summary}
            </p>

            {/* Key Metrics Dashboard */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-900/60">
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

            <a
              href="https://github.com/prathmeshlohar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <GithubIcon className="h-4 w-4" />
              <span>Source Code</span>
            </a>
          </div>
        </div>

        {/* Right / Visual Code Preview Side */}
        <div
          className={`relative bg-gradient-to-br from-slate-950 via-slate-900 to-[#0B3D91]/90 p-6 sm:p-8 flex flex-col justify-between text-white ${
            isEven ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"
          }`}
        >
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between text-xs text-blue-200/70 border-b border-white/10 pb-3">
              <span className="font-mono flex items-center gap-1.5 text-cyan-300">
                <Terminal className="h-3.5 w-3.5 text-[#1E90FF]" />
                {snippet.filename}
              </span>
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-300 border border-emerald-500/30">
                {snippet.badge}
              </span>
            </div>

            {/* Simulated Architecture Code Snippet */}
            <div className="rounded-xl bg-black/60 p-4 font-mono text-[11px] leading-relaxed text-blue-100/90 backdrop-blur-xs border border-white/5 overflow-x-auto">
              <pre className="text-slate-300 whitespace-pre">{snippet.code.trim()}</pre>
            </div>

            {/* Key Innovations */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">
                Engineering Highlights
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
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-200/80">
            <span className="font-medium text-slate-300">Lead: Prathmesh Lohar</span>
            <Link
              href={`/portfolio/${project.slug}`}
              className="inline-flex items-center gap-1 font-semibold text-cyan-300 hover:underline"
            >
              Full Case Study <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
