"use client";

import { useState } from "react";
import { CheckCircle2, Send, Sparkles } from "lucide-react";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Editorial Pitch",
    message: "",
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
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _gotcha: formData._gotcha,
          formType: "Contact Desk Inquiry",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setResponseMsg("Thank you for reaching out. An editor will review your inquiry within 24-48 hours.");
        setFormData({ name: "", email: "", subject: "Editorial Pitch", message: "", _gotcha: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setResponseMsg(data?.errors?.[0]?.message || "Failed to deliver message. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Network connection error. Please try again.");
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800/80 dark:bg-slate-900/60">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-5 w-5 text-[#1E90FF]" />
        <h2 className="font-serif text-xl font-bold text-slate-900 dark:text-slate-100">
          Send a Direct Dispatch
        </h2>
      </div>

      {status === "success" ? (
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-800 dark:text-emerald-200">
          <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-500 mb-3" />
          <h3 className="text-lg font-bold">Message Transmitted</h3>
          <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-300">{responseMsg}</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-5 inline-block rounded-lg bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            Send Another Dispatch
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="_gotcha"
            value={formData._gotcha}
            onChange={(e) => setFormData({ ...formData, _gotcha: e.target.value })}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Elena Rostova"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
              Work / Academic Email *
            </label>
            <input
              type="email"
              required
              placeholder="elena@institution.org"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
              Inquiry Subject *
            </label>
            <select
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            >
              <option value="Editorial Pitch">Story Pitch / Commentary Proposal</option>
              <option value="Technical Correction">Fact-Check / Technical Correction</option>
              <option value="Syndication & Licensing">Content Syndication / Rights Licensing</option>
              <option value="Press Inquiries">Media Briefing / Interview Request</option>
              <option value="Sponsored Whitepaper">Research Whitepaper / Sponsored Lab</option>
              <option value="General Feedback">General Reader Correspondence</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
              Message & Context *
            </label>
            <textarea
              required
              rows={5}
              placeholder="Provide specific background, relevant citations, or details about your inquiry..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:border-[#1E90FF] focus:bg-white focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 resize-y"
            />
          </div>

          {status === "error" && (
            <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-700 dark:text-red-300">
              {responseMsg}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B3D91] to-[#1E90FF] py-3 text-sm font-semibold text-white shadow-md hover:opacity-95 disabled:opacity-50 transition-all cursor-pointer"
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Transmitting...
              </span>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Submit to Editorial Desk
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
