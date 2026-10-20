"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft } from "lucide-react";
import {
  PORTFOLIO_HERO,
  FLAGSHIP_PROJECTS,
  SKILLS_MATRIX,
  KEY_ACHIEVEMENTS,
  EXPERIENCE_ITEMS,
} from "@/data/portfolioData";

interface TerminalHistoryEntry {
  command: string;
  output: React.ReactNode;
}

const COMMAND_HINTS = [
  "help",
  "about",
  "skills",
  "projects",
  "achievements",
  "experience",
  "education",
  "contact",
  "clear",
];

export function PortfolioTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalHistoryEntry[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-2 text-xs text-blue-200/90 leading-relaxed">
          <p className="font-mono text-cyan-300 font-bold">
            &gt; Welcome to Prathmesh Lohar&apos;s Interactive Shell [v2.5.0]
          </p>
          <p className="text-slate-300">
            Full Stack Web Developer &bull; MERN Specialist &bull; Finalist @ IIT Bombay NEC 2025
          </p>
          <p className="text-amber-300/90">
            Tip: Click any command pill below or type in the terminal and press Enter.
          </p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const raw = cmdStr.trim().toLowerCase();
    if (!raw) return;

    let output: React.ReactNode;

    switch (raw) {
      case "help":
        output = (
          <div className="space-y-1 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-bold">Available Commands:</p>
            <p><span className="text-emerald-400 font-bold">about</span> - Brief bio, engineering background & focus</p>
            <p><span className="text-emerald-400 font-bold">skills</span> - Full MERN stack, Java DSA & tool proficiencies</p>
            <p><span className="text-emerald-400 font-bold">projects</span> - Production MERN apps, news portals & APIs</p>
            <p><span className="text-emerald-400 font-bold">achievements</span> - IIT Bombay NEC 2025 finalist & GFG award</p>
            <p><span className="text-emerald-400 font-bold">experience</span> - GWSWeb internship & leadership positions</p>
            <p><span className="text-emerald-400 font-bold">education</span> - SPPU engineering degree & grades</p>
            <p><span className="text-emerald-400 font-bold">contact</span> - Phone, email, LinkedIn & GitHub links</p>
            <p><span className="text-emerald-400 font-bold">clear</span> - Clear the terminal screen</p>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
            <p className="text-cyan-300 font-bold">👤 Profile: {PORTFOLIO_HERO.name}</p>
            <p>{PORTFOLIO_HERO.subheadline}</p>
            <p className="text-slate-400">
              📍 Location: {PORTFOLIO_HERO.education.location} &bull; University: {PORTFOLIO_HERO.education.university}
            </p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-bold">⚡ Technical Skills Matrix:</p>
            {SKILLS_MATRIX.map((cat, idx) => (
              <div key={idx} className="pl-2">
                <span className="text-amber-300 font-semibold">{cat.category}: </span>
                <span className="text-slate-200">{cat.skills.map(s => s.name).join(", ")}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-3 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-bold">🚀 Production Projects:</p>
            {FLAGSHIP_PROJECTS.map((proj) => (
              <div key={proj.id} className="rounded-lg bg-slate-900/60 p-2.5 border border-slate-800">
                <div className="font-bold text-emerald-400">{proj.title}</div>
                <div className="text-[11px] text-slate-400">{proj.subtitle}</div>
                <div className="text-[10px] text-cyan-300 mt-1">Stack: {proj.techStack.join(" | ")}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "achievements":
        output = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-bold">🏆 National Honors & Awards:</p>
            {KEY_ACHIEVEMENTS.map((ach, idx) => (
              <div key={idx} className="pl-2 border-l-2 border-amber-400/80 py-0.5">
                <div className="font-bold text-amber-300">{ach.title}</div>
                <div className="text-[11px] text-slate-400">{ach.organization} &bull; {ach.date}</div>
                <div className="text-[11px] text-slate-300 mt-0.5">{ach.description}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-bold">💼 Industry & Leadership Track Record:</p>
            {EXPERIENCE_ITEMS.slice(0, 4).map((exp) => (
              <div key={exp.id} className="pl-2 border-l-2 border-blue-400/80 py-0.5">
                <div className="font-bold text-blue-300">{exp.role} @ {exp.organization}</div>
                <div className="text-[10px] text-slate-400">{exp.period} &bull; {exp.location}</div>
                <div className="text-[11px] text-slate-300 mt-0.5">{exp.description}</div>
              </div>
            ))}
          </div>
        );
        break;

      case "education":
        output = (
          <div className="space-y-2 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-bold">🎓 Education Journey:</p>
            <div className="pl-2">
              <div className="font-bold text-emerald-300">{PORTFOLIO_HERO.education.degree}</div>
              <div className="text-[11px] text-slate-300">{PORTFOLIO_HERO.education.institution}</div>
              <div className="text-[11px] text-amber-300">
                Score: {PORTFOLIO_HERO.education.cgpa} &bull; {PORTFOLIO_HERO.education.status}
              </div>
            </div>
            {PORTFOLIO_HERO.secondaryEducation.map((sec, idx) => (
              <div key={idx} className="pl-2 pt-1 border-t border-slate-800">
                <div className="font-bold text-slate-200">{sec.level}</div>
                <div className="text-[11px] text-slate-400">{sec.school} &bull; {sec.location}</div>
                <div className="text-[11px] text-emerald-400">Score: {sec.score} ({sec.year})</div>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1.5 text-xs font-mono text-slate-300">
            <p className="text-cyan-300 font-bold">📫 Contact Channels:</p>
            <p>Phone: <a href={`tel:${PORTFOLIO_HERO.socials.phone}`} className="text-emerald-400 hover:underline">{PORTFOLIO_HERO.socials.phone}</a></p>
            <p>Email: <a href={PORTFOLIO_HERO.socials.email} className="text-cyan-400 hover:underline">{PORTFOLIO_HERO.socials.rawEmail}</a></p>
            <p>LinkedIn: <a href={PORTFOLIO_HERO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{PORTFOLIO_HERO.socials.linkedin}</a></p>
            <p>GitHub: <a href={PORTFOLIO_HERO.socials.github} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">{PORTFOLIO_HERO.socials.github}</a></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        output = (
          <div className="text-xs font-mono text-rose-400">
            Command not found: &quot;{raw}&quot;. Type <span className="text-amber-300 font-bold">help</span> to view all commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: raw, output }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      executeCommand(inputVal);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="mt-16 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-1.5">
            <TerminalIcon className="h-3.5 w-3.5 text-blue-400" />
            prathmesh@terminal: ~ (zsh)
          </span>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400/90">
          <Sparkles className="h-3 w-3" />
          <span>Interactive Shell</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="max-h-[380px] min-h-[260px] overflow-y-auto p-4 sm:p-6 font-mono text-xs scrollbar-thin scrollbar-thumb-slate-800"
      >
        {history.map((entry, idx) => (
          <div key={idx} className="mb-4 space-y-1.5">
            {entry.command && (
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400 font-bold">prathmesh@ggsf:~$</span>
                <span className="text-white font-semibold">{entry.command}</span>
              </div>
            )}
            <div className="pl-4">{entry.output}</div>
          </div>
        ))}

        {/* Active Input Line */}
        <div className="flex items-center gap-2 text-slate-400 pt-1">
          <span className="text-emerald-400 font-bold shrink-0">prathmesh@ggsf:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (e.g. skills, projects, achievements, contact)..."
            className="w-full bg-transparent text-white outline-none placeholder:text-slate-600 font-mono text-xs"
          />
          <CornerDownLeft className="h-3.5 w-3.5 text-slate-600 shrink-0" />
        </div>

        <div ref={terminalEndRef} />
      </div>

      {/* Quick Action Command Pills Footer */}
      <div className="border-t border-slate-800 bg-slate-900/60 p-3 sm:px-6 flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-wider mr-1">
          Quick Run:
        </span>
        {COMMAND_HINTS.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => executeCommand(cmd)}
            className="rounded-lg border border-slate-800 bg-slate-800/80 px-2.5 py-1 text-[11px] font-mono font-medium text-slate-300 transition-colors hover:border-[#1E90FF] hover:bg-[#1E90FF]/20 hover:text-cyan-300 cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
