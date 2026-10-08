"use client";

import { useState } from "react";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

export function CareersApplicationForm() {
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
        setResponseMsg("Thank you for applying. Our editorial board reviews applications weekly and will reach out if your background matches our openings.");
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
        setResponseMsg(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Network connection error. Please try again.");
    }
  };

  return (
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
            className="mt-6 rounded-xl bg-[#0B3D91] px-6 py-2.5 text-xs font-semibold text-white hover:bg-blue-800 dark:bg-[#1E90FF] dark:text-slate-950 cursor-pointer"
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
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B3D91] py-3.5 text-sm font-semibold text-white shadow-md hover:bg-blue-800 disabled:opacity-50 dark:bg-[#1E90FF] dark:text-slate-950 dark:hover:bg-blue-400 cursor-pointer"
          >
            {status === "loading" ? "Submitting Application..." : "Submit Job Application"}
            <Send className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}
