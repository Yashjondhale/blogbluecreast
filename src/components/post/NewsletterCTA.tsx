"use client";

import { useState } from "react";
import { CheckCircle2, Mail, Send } from "lucide-react";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

export function NewsletterCTA({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      // Submit directly to user's Formspree endpoint with metadata
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          formType: "Newsletter Subscription",
          source: "The BlueCrest Dispatch",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Thank you! You've been subscribed to The BlueCrest Dispatch.");
        setEmail("");
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setMessage(data?.errors?.[0]?.message || "Subscription could not be processed. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("A network error occurred. Please check your connection and retry.");
    }
  };

  return (
    <section
      aria-label="Newsletter Subscription"
      className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B3D91] via-[#082d6b] to-[#041635] p-8 sm:p-12 text-white shadow-xl ${
        className || ""
      }`}
    >
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-200 backdrop-blur-md">
          <Mail className="h-3.5 w-3.5" />
          The BlueCrest Dispatch
        </div>

        <h3 className="mt-4 font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white">
          Sharp analysis delivered to your inbox every Sunday morning.
        </h3>

        <p className="mt-3 text-sm sm:text-base text-blue-100/90 leading-relaxed">
          Join 25,000+ engineers, founders, and curious minds. Curated deep-dives across tech, financial independence, and high-performance living. Zero spam, unsubscribe anytime.
        </p>

        {status === "success" ? (
          <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-emerald-500/20 p-4 text-emerald-200 backdrop-blur-sm border border-emerald-500/30">
            <CheckCircle2 className="h-5 w-5 text-emerald-300 flex-shrink-0" />
            <p className="text-sm font-medium">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <div className="relative flex-1">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full rounded-xl bg-white/10 px-4 py-3.5 text-sm text-white placeholder-blue-200/60 border border-white/20 backdrop-blur-md focus:border-[#1E90FF] focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/40"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1E90FF] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-500 disabled:opacity-50"
            >
              {status === "loading" ? "Joining..." : "Subscribe Free"}
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-xs text-rose-300">{message}</p>
        )}

        <p className="mt-4 text-[11px] text-blue-200/60">
          Double opt-in compliant. Protected by India DPDP Act and GDPR standards.
        </p>
      </div>

      {/* Background ambient lighting */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#1E90FF]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#00D2FF]/20 blur-3xl pointer-events-none" />
    </section>
  );
}
