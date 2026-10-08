"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, Mail, Sparkles, X } from "lucide-react";
import { FORMSPREE_ENDPOINT } from "@/lib/constants";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  const [email, setEmail] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([
    "Technology & AI",
    "Markets & Finance",
  ]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("topics", selectedTopics.join(", "));
      formData.append("_subject", "BlueCrest VIP Newsletter Subscription");
      formData.append("_source", "Website Header Subscribe Modal");

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        setMessage("You're subscribed! Welcome to the BlueCrest Executive Briefing.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Subscription failed. Please verify your email and try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network connection issue. Please retry in a few moments.");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Subscribe to BlueCrest Newsletter"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xl transition-all duration-200 dark:border-slate-800 dark:bg-slate-900 animate-in zoom-in-95">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close subscription popup"
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header Badge & Title */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10 text-[#1E90FF]">
            <Mail className="h-4 w-4" />
          </div>
          <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
            BlueCrest Daily Briefing
          </span>
        </div>

        <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
          Stay Ahead of What Matters
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Get high-signal editorial breakdowns, daily market intelligence, and curated longreads delivered straight to your inbox. Free forever. No spam.
        </p>

        {status === "success" ? (
          <div className="mt-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 mb-3">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-slate-100">
              Welcome to BlueCrest!
            </h4>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
              {message}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 inline-flex items-center rounded-xl bg-[#0B3D91] px-6 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-blue-800 dark:bg-[#1E90FF] dark:text-slate-950 dark:hover:bg-blue-400"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

            {/* Topic Preferences */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Select your preferred topics:
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Technology & AI",
                  "Markets & Finance",
                  "Health & Science",
                  "Daily News Wire",
                ].map((topic) => {
                  const isSelected = selectedTopics.includes(topic);
                  return (
                    <button
                      type="button"
                      key={topic}
                      onClick={() => toggleTopic(topic)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                        isSelected
                          ? "bg-[#0B3D91] text-white dark:bg-[#1E90FF] dark:text-slate-950"
                          : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      {isSelected ? "✓ " : "+ "}
                      {topic}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="modal-subscribe-email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Your Work or Personal Email
              </label>
              <div className="relative">
                <input
                  id="modal-subscribe-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#1E90FF] focus:outline-hidden focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white"
                />
              </div>
            </div>

            {status === "error" && (
              <div className="text-xs text-rose-500 font-medium">{message}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0B3D91] to-[#1E90FF] py-3.5 text-sm font-bold text-white shadow-lg transition-transform active:scale-[0.99] hover:opacity-95 disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Subscribe Free
                </>
              )}
            </button>

            <p className="text-center text-[11px] text-slate-400">
              By subscribing, you agree to our{" "}
              <a href="/privacy-policy" className="underline hover:text-slate-600 dark:hover:text-slate-300">
                Privacy Policy
              </a>
              . Unsubscribe anytime with 1-click.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
