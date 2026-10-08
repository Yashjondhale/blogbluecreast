"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (choice: "all" | "necessary") => {
    localStorage.setItem("cookie_consent", choice);
    setIsVisible(false);

    if (choice === "all") {
      // Dispatch custom event for analytics script loaders
      window.dispatchEvent(new CustomEvent("analytics_consent_granted"));
    }
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 right-4 left-4 z-50 mx-auto max-w-xl animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-2xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#1E90FF] dark:bg-blue-950/50">
            <Cookie className="h-5 w-5" />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="flex items-center gap-1.5 text-sm font-bold text-slate-900 dark:text-slate-100">
                <ShieldCheck className="h-4 w-4 text-[#1E90FF]" />
                Your Privacy & Cookie Choices
              </h4>
              <button
                type="button"
                onClick={() => handleConsent("necessary")}
                aria-label="Close cookie banner"
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              BlueCrest respects your privacy under the Digital Personal Data Protection Act (DPDP) and GDPR. We use cookies and privacy-respecting telemetry solely to optimize reading experience and analyze readership metrics.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => handleConsent("all")}
                className="rounded-lg bg-[#0B3D91] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-blue-800 dark:bg-[#1E90FF] dark:text-slate-950 dark:hover:bg-blue-400"
              >
                Accept All Cookies
              </button>
              <button
                type="button"
                onClick={() => handleConsent("necessary")}
                className="rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                Essential Only
              </button>
              <Link
                href="/privacy-policy"
                className="text-xs text-slate-500 underline underline-offset-2 hover:text-[#1E90FF] dark:text-slate-400"
              >
                Cookie & Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
