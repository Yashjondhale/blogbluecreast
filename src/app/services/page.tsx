"use client";

import { useState } from "react";
import { 
  BarChart3, 
  BookOpen, 
  CheckCircle2, 
  Code2, 
  FileText, 
  Headphones, 
  Send, 
  ShieldCheck, 
  Sparkles, 
  Zap 
} from "lucide-react";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    serviceType: "Sponsored Research & Whitepapers",
    budget: "$2,000 - $5,000",
    details: "",
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
          formType: "Services & Partnerships Inquiry",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setResponseMsg("Thank you for your inquiry. Our commercial editorial team will contact you within 24 hours.");
        setFormData({
          name: "",
          email: "",
          company: "",
          serviceType: "Sponsored Research & Whitepapers",
          budget: "$2,000 - $5,000",
          details: "",
          _gotcha: "",
        });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setResponseMsg(data?.errors?.[0]?.message || "Failed to submit inquiry. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Network connection error. Please try again.");
    }
  };

  const services = [
    {
      icon: <FileText className="h-6 w-6 text-[#1E90FF]" />,
      title: "Sponsored Research & Whitepapers",
      desc: "Comprehensive benchmark studies, cloud economics analyses, and industry whitepapers researched with academic rigor by verified PhDs and Staff Engineers.",
      deliverables: ["15-30 Page PDF Report", "Executive Summary", "Interactive Web Visualizations", "BlueCrest Co-Branding"],
    },
    {
      icon: <Code2 className="h-6 w-6 text-purple-600" />,
      title: "Technical Writing & Developer Docs",
      desc: "Turn complex distributed architectures, SDKs, and APIs into elegant, reproducible guides with working code snippets and diagrams.",
      deliverables: ["Full Architecture Teardowns", "GitHub Runnable Repos", "SEO-Engineered Tutorials", "Interactive Demos"],
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-emerald-600" />,
      title: "Sponsored Analyses & Case Studies",
      desc: "Tell your product's technical success story through data-backed reporting rather than shallow PR fluff. Read by 25,000+ technology leaders.",
      deliverables: ["Editorial Feature Article", "Newsletter Spotlight Placement", "Social Distribution (X/LinkedIn)", "Permanent Archive"],
    },
    {
      icon: <BookOpen className="h-6 w-6 text-orange-600" />,
      title: "Content Syndication & Licensing",
      desc: "License BlueCrest's award-winning essays, clinical sleep protocols, and Indian equity market explainers for your enterprise portal.",
      deliverables: ["Full Reprint Rights", "Editorial Attribution Badges", "Custom Localized Translations", "Quarterly Retainers"],
    },
    {
      icon: <Zap className="h-6 w-6 text-amber-500" />,
      title: "Technical SEO & Publishing Advisory",
      desc: "Stuck behind Google Helpful Content updates? We audit content quality, author E-E-A-T signals, Schema.org graph structures, and Core Web Vitals.",
      deliverables: ["Full E-E-A-T Quality Audit", "JSON-LD Knowledge Graph Plan", "CWV Performance Roadmap", "Editorial Governance Playbook"],
    },
    {
      icon: <Headphones className="h-6 w-6 text-sky-500" />,
      title: "Newsletter & Media Sponsorships",
      desc: "Place your brand directly in front of targeted decision-makers in The BlueCrest Dispatch, our curated Sunday morning newsletter.",
      deliverables: ["Exclusive Primary Sponsor Slot", "Guaranteed 42%+ Open Rates", "Zero Ad-Blocker Interference", "Post-Campaign Telemetry"],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      <Breadcrumbs items={[{ label: "Services & Studio" }]} />

      {/* Hero Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
          BlueCrest Commercial Desk
        </span>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
          Editorial Rigor for Modern Technology & Finance Leaders.
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          We partner with innovative technology companies, financial institutions, and research labs to produce authoritative publications that build enduring credibility.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 dark:bg-slate-800 dark:border-slate-700">
                {s.icon}
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-slate-900 dark:text-slate-100">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {s.desc}
              </p>
            </div>

            <div className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-800">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider dark:text-slate-400">
                Key Deliverables:
              </span>
              <ul className="mt-2.5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                {s.deliverables.map((del, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Request a Quote / Inquiry Form */}
      <div id="inquiry" className="max-w-4xl mx-auto rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-xl dark:border-slate-800 dark:bg-slate-900/60">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
            <Sparkles className="h-3.5 w-3.5" />
            Partner With Us
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Request a Proposal or Rate Card
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Tell us about your project, timeline, and objectives. We will get back to you with custom options within 24 hours.
          </p>
        </div>

        {status === "success" ? (
          <div className="py-12 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-4 font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
              Proposal Request Received
            </h3>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
              {responseMsg}
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-xl bg-[#0B3D91] px-6 py-2.5 text-xs font-semibold text-white hover:bg-blue-800 dark:bg-[#1E90FF] dark:text-slate-950"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="_gotcha"
              value={formData._gotcha}
              onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ananya Roy"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ananya@company.com"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Acme Cloud Corp"
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
                  Service of Interest
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100"
                >
                  <option value="Sponsored Research & Whitepapers">Sponsored Research & Whitepapers</option>
                  <option value="Technical Writing & Developer Docs">Technical Writing & Developer Docs</option>
                  <option value="Sponsored Feature Article">Sponsored Feature Article</option>
                  <option value="Content Syndication & Licensing">Content Syndication & Licensing</option>
                  <option value="Technical SEO & Publishing Advisory">Technical SEO & Publishing Advisory</option>
                  <option value="Newsletter Sponsorship">The BlueCrest Dispatch Newsletter Sponsorship</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
                Project Scope & Requirements
              </label>
              <textarea
                rows={4}
                required
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Share your primary goal, target audience, estimated deliverables, or questions..."
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
              {status === "loading" ? "Submitting Inquiry..." : "Submit Proposal Request"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
