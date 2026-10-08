"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Newspaper, Send } from "lucide-react";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

export function NewsSubmitTip() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Tip received! Our desk editors review incoming wire tips every 30 minutes.");
        form.reset();
      } else {
        setStatus("error");
        setMessage("Submission issue. Please email tips directly to editorial@bluecreast.in");
      }
    } catch {
      setStatus("error");
      setMessage("Connection error. Please retry or contact editorial@bluecreast.in");
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 to-blue-950 p-6 sm:p-8 text-white shadow-xl dark:border-slate-800">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-[#1E90FF]">
          <Newspaper className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold">Submit a Daily News Tip or Release</h3>
          <p className="text-xs text-slate-300">
            Journalists, PR reps, and whistleblowers: share verified scoops directly with our newsroom.
          </p>
        </div>
      </div>

      {status === "success" ? (
        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-4 text-emerald-200">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
          <span className="text-xs">{message}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
          <input type="hidden" name="_subject" value="BlueCrest Daily News Desk Tip Submission" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label htmlFor="tip-name" className="block text-xs font-semibold text-slate-300 mb-1">
                Your Name / Organization (Optional)
              </label>
              <input
                id="tip-name"
                name="name"
                type="text"
                placeholder="Anonymous or Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-[#1E90FF] focus:outline-hidden"
              />
            </div>
            <div>
              <label htmlFor="tip-email" className="block text-xs font-semibold text-slate-300 mb-1">
                Contact Email or Secure Channel
              </label>
              <input
                id="tip-email"
                name="email"
                type="email"
                required
                placeholder="reporter@org.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-[#1E90FF] focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-1">
              <label htmlFor="tip-category" className="block text-xs font-semibold text-slate-300 mb-1">
                Beat / Topic
              </label>
              <select
                id="tip-category"
                name="category"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-3 py-2.5 text-xs text-white focus:border-[#1E90FF] focus:outline-hidden"
              >
                <option value="Technology">Technology & AI</option>
                <option value="Markets">Markets & Economy</option>
                <option value="Startups">Startups & Funding</option>
                <option value="Policy">Policy & Governance</option>
                <option value="Science">Science & Energy</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="tip-headline" className="block text-xs font-semibold text-slate-300 mb-1">
                Proposed Headline / Subject
              </label>
              <input
                id="tip-headline"
                name="headline"
                type="text"
                required
                placeholder="E.g., Breakthrough in solid state battery tests"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-[#1E90FF] focus:outline-hidden"
              />
            </div>
          </div>

          <div>
            <label htmlFor="tip-details" className="block text-xs font-semibold text-slate-300 mb-1">
              News Details, Verification Links & Press Materials
            </label>
            <textarea
              id="tip-details"
              name="details"
              rows={3}
              required
              placeholder="Provide background, links to documents, or release timing..."
              className="w-full rounded-xl border border-white/10 bg-white/5 p-3.5 text-xs text-white placeholder-slate-400 focus:border-[#1E90FF] focus:outline-hidden resize-none"
            />
          </div>

          {status === "error" && (
            <div className="text-xs text-rose-300">{message}</div>
          )}

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-slate-400">
              ⚡ Sanity CMS Studio editors can also upload directly via <code className="text-blue-300">/studio</code>
            </span>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-xl bg-[#1E90FF] px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-blue-600 disabled:opacity-50 transition-colors"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  Send to Newsroom
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
