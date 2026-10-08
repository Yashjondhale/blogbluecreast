"use client";

import { useState } from "react";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

export function ServicesProposalForm() {
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
          formType: "Corporate Services Inquiry",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setResponseMsg("Thank you! Our partnerships team will review your specifications and schedule a brief discovery call within 24-48 business hours.");
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
        setResponseMsg(data?.errors?.[0]?.message || "Submission failed. Please reach out to us at partnerships@bluecreast.in directly.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Network connection error. Please try again.");
    }
  };

  return (
    <div id="proposal" className="max-w-3xl mx-auto rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-xl dark:border-slate-800 dark:bg-slate-900/60">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
          <Sparkles className="h-3.5 w-3.5" />
          Request a Proposal
        </span>
        <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
          Partner With the BlueCrest Desk
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Tell us about your campaign objectives, target audience, or research requirements.
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
            className="mt-6 rounded-xl bg-[#0B3D91] px-6 py-2.5 text-xs font-semibold text-white hover:bg-blue-800 dark:bg-[#1E90FF] dark:text-slate-950 cursor-pointer"
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
                <option value="Technical Benchmarking & Labs">Technical Benchmarking & Labs</option>
                <option value="Editorial Native Sponsorships">Editorial Native Sponsorships</option>
                <option value="Content Syndication & Licensing">Content Syndication & Licensing</option>
                <option value="Custom Executive Reports">Custom Executive Reports</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
              Estimated Budget Range
            </label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100"
            >
              <option value="$1,000 - $2,500">$1,000 - $2,500 (Pilot Campaign)</option>
              <option value="$2,500 - $5,000">$2,500 - $5,000 (Standard Research)</option>
              <option value="$5,000 - $15,000">$5,000 - $15,000 (Quarterly Whitepaper Lab)</option>
              <option value="$15,000+">$15,000+ (Annual Strategic Partnership)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-800 uppercase dark:text-slate-200">
              Project Details & Objectives *
            </label>
            <textarea
              rows={4}
              required
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="Outline your target deliverable, deadlines, and key metrics..."
              className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-100"
            />
          </div>

          {status === "error" && (
            <p className="text-xs text-rose-500 font-medium">{responseMsg}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B3D91] py-3.5 text-sm font-semibold text-white shadow-md hover:bg-blue-800 disabled:opacity-50 dark:bg-[#1E90FF] dark:text-slate-950 dark:hover:bg-blue-400 cursor-pointer"
          >
            {status === "loading" ? "Submitting Inquiry..." : "Submit Proposal Request"}
            <Send className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}
