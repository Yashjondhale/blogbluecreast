"use client";

import { useState } from "react";
import { 
  Award, 
  Briefcase, 
  CheckCircle2, 
  Clock, 
  Globe, 
  GraduationCap, 
  HeartHandshake, 
  Send, 
  Sparkles, 
  Zap 
} from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Senior Technology Editor (AI & Systems)",
    portfolio: "",
    coverLetter: "",
    _gotcha: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType: "Job Application",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setResponseMsg("Thank you for your application! Our managing editor will review your writing samples within 3-5 business days.");
        setFormData({
          name: "",
          email: "",
          role: "Senior Technology Editor (AI & Systems)",
          portfolio: "",
          coverLetter: "",
          _gotcha: "",
        });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setResponseMsg(data?.errors?.[0]?.message || "Submission failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Network error. Please try again.");
    }
  };

  const openRoles = [
    {
      title: "Senior Technology Editor (AI & Distributed Systems)",
      type: "Full-Time &bull; 100% Remote (India / Worldwide)",
      exp: "5+ years in engineering journalism or technical architecture",
      desc: "Lead our generative AI, GPU computing, and software infrastructure coverage. You will benchmark frontier models, write runnable code examples, and interview senior architects.",
    },
    {
      title: "Investigative Financial Journalist (Indian Equity & Macro)",
      type: "Full-Time &bull; 100% Remote (India)",
      exp: "CFA, CA, or 4+ years covering SEBI regulations, capital markets & fintech",
      desc: "Demystify equity mutual funds, sovereign gold, RBI monetary policy, and personal tax-loss harvesting for an audience of 100,000+ ambitious Indian investors.",
    },
    {
      title: "Medical & Preventive Health Reviewer",
      type: "Part-Time / Advisory &bull; Remote",
      exp: "MD, MBBS, or PhD in Human Physiology / Biochemistry",
      desc: "Fact-check and clinical-audit all longevity, sleep architecture, and metabolic conditioning essays. Ensure 100% fidelity with current peer-reviewed research.",
    },
    {
      title: "Senior Full-Stack & Technical SEO Engineer",
      type: "Full-Time &bull; Remote",
      exp: "Next.js 15, TypeScript, Tailwind, Core Web Vitals, Schema.org Graph",
      desc: "Own the digital experience and crawler discoverability of bluecreast.in. Optimize Core Web Vitals to sub-1.5s LCP, build interactive calculators, and scale serverless infrastructure.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: "Careers & Fellowships" }]} />

      {/* Hero Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
          Work With BlueCrest
        </span>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
          Build the Gold Standard of Modern Independent Journalism.
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          We are a fully distributed, high-trust editorial team. We prize original inquiry, verified E-E-A-T credentials, and clear writing over sensationalism and clickbait.
        </p>

        {/* Quick Vision & Mission summary banner */}
        <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-50/50 p-6 text-left dark:border-blue-500/30 dark:bg-blue-950/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E90FF]">
                Our Vision
              </span>
              <p className="mt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                To build the world&apos;s most trusted multi-niche publication where journalism elevates human intellect rather than farming outrage.
              </p>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Our Mission
              </span>
              <p className="mt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                To deliver reproducible engineering guides, actionable wealth strategies, and clinically verified health research — 100% independent.
              </p>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-blue-200/50 dark:border-blue-900/50 text-right">
            <a href="/about" className="text-xs font-semibold text-[#1E90FF] hover:underline">
              Read our full Manifesto & Editorial Standards &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Values & Perks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#1E90FF] dark:bg-blue-950/60">
            <Globe className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-serif text-lg font-bold text-slate-900 dark:text-slate-100">
            100% Remote & Autonomous
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Work from anywhere in India or the world. We value deep work blocks, clear asynchronous communication, and zero useless meetings.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60">
            <Award className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-serif text-lg font-bold text-slate-900 dark:text-slate-100">
            Competitive Pay & Authorship
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Competitive monthly retainers, equipment stipends, and prominent author bylines indexed on Google with full E-E-A-T credentials.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/60">
            <Zap className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-serif text-lg font-bold text-slate-900 dark:text-slate-100">
            Research & Book Stipends
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Full reimbursement for academic journals, clinical research databases, software dev tools, and benchmark hardware.
          </p>
        </div>
      </div>

      {/* Open Roles Section */}
      <section className="mb-20">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
            Active Openings
          </span>
          <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Open Positions & Fellowships
          </h2>
        </div>

        <div className="space-y-4">
          {openRoles.map((role, rIdx) => (
            <div
              key={rIdx}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all hover:border-[#1E90FF] dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-slate-100">
                  {role.title}
                </h3>
                <span
                  className="inline-block text-xs font-semibold text-[#1E90FF]"
                  dangerouslySetInnerHTML={{ __html: role.type }}
                />
              </div>

              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                <strong>Prerequisite:</strong> {role.exp}
              </p>

              <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <div id="apply" className="max-w-3xl mx-auto rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-xl dark:border-slate-800 dark:bg-slate-900/60">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            Apply Now
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Submit Your Application or Pitch
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Have published work or code repos? Share your best links and tell us what you want to write or build.
          </p>
        </div>

        {status === "success" ? (
          <div className="py-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-4 font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
              Application Received
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              {responseMsg}
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-xl bg-[#0B3D91] px-6 py-2.5 text-xs font-semibold text-white hover:bg-blue-800 dark:bg-[#1E90FF] dark:text-slate-950"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="_gotcha"
              value={formData._gotcha}
              onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rohan Nair"
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rohan@domain.com"
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
                Target Role
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100"
              >
                <option value="Senior Technology Editor (AI & Systems)">Senior Technology Editor (AI & Systems)</option>
                <option value="Investigative Financial Journalist">Investigative Financial Journalist</option>
                <option value="Medical & Preventive Health Reviewer">Medical & Preventive Health Reviewer</option>
                <option value="Senior Full-Stack & Technical SEO Engineer">Senior Full-Stack & Technical SEO Engineer</option>
                <option value="General Contributing Writer / Pitch">General Contributing Writer / Pitch</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
                Portfolio URL / LinkedIn / GitHub *
              </label>
              <input
                type="url"
                required
                value={formData.portfolio}
                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                placeholder="https://yourportfolio.com or https://linkedin.com/in/..."
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
                Why BlueCrest? (Brief Pitch or Introduction) *
              </label>
              <textarea
                rows={4}
                required
                value={formData.coverLetter}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                placeholder="Share 2-3 links to your best writing or code, and why you want to publish on BlueCrest..."
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100"
              />
            </div>

            {status === "error" && (
              <p className="text-xs text-rose-500 font-medium">{responseMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B3D91] py-3.5 text-sm font-semibold text-white shadow-md hover:bg-blue-800 disabled:opacity-50 dark:bg-[#1E90FF] dark:text-slate-950 dark:hover:bg-blue-400"
            >
              {status === "loading" ? "Submitting Application..." : "Submit Job Application"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
