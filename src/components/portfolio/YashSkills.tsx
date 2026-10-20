"use client";

import { motion } from "framer-motion";
import { Cpu, Server, Code, Wrench, Sparkles } from "lucide-react";
import { YASH_SKILLS_MATRIX } from "@/data/portfolioData";
import { MotionCard } from "./MotionComponents";

export function YashSkills() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "cpu":
        return <Cpu className="h-4 w-4 text-purple-500" />;
      case "server":
        return <Server className="h-4 w-4 text-indigo-500" />;
      case "code":
        return <Code className="h-4 w-4 text-blue-500" />;
      default:
        return <Wrench className="h-4 w-4 text-amber-500" />;
    }
  };

  return (
    <section id="yash-skills" className="mt-20 scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-800">
        <div>
          <span className="text-xs font-bold tracking-wider text-purple-600 dark:text-purple-400 uppercase flex items-center gap-1.5">
            <Cpu className="h-3.5 w-3.5" />
            Technical Capabilities
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            AI/ML & Engineering Skills Matrix
          </h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Validated technical competency across Large Language Models, Computer Vision, FastAPI microservices, and Predictive Modeling.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {YASH_SKILLS_MATRIX.map((cat, idx) => (
          <MotionCard
            key={cat.category}
            index={idx}
            className="rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-xs dark:border-slate-800 dark:bg-slate-900/50"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-500/10 dark:bg-purple-500/20">
                {getIcon(cat.icon)}
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-slate-100">
                {cat.category}
              </h3>
            </div>

            <div className="space-y-4">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-800 dark:text-slate-200">{skill.name}</span>
                    <span className="text-purple-600 dark:text-purple-400">{skill.level}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </MotionCard>
        ))}
      </div>
    </section>
  );
}
