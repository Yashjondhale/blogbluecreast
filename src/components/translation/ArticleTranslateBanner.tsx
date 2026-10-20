"use client";

import { useState, useEffect } from "react";
import { Languages, RotateCcw, Check, ChevronDown } from "lucide-react";
import {
  POPULAR_LANGUAGES,
  getCurrentLanguageCode,
  getLanguageByCode,
  changeLanguage,
} from "@/lib/languages";
import { LanguageSelector } from "./LanguageSelector";

interface ArticleTranslateBannerProps {
  className?: string;
}

export function ArticleTranslateBanner({ className = "" }: ArticleTranslateBannerProps) {
  const [currentCode, setCurrentCode] = useState("en");

  useEffect(() => {
    const sync = () => {
      setCurrentCode(getCurrentLanguageCode());
    };
    sync();

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ code: string }>;
      if (customEvent.detail?.code) {
        setCurrentCode(customEvent.detail.code);
      } else {
        sync();
      }
    };

    window.addEventListener("bluecreast_language_changed", handleCustomChange);
    return () => {
      window.removeEventListener("bluecreast_language_changed", handleCustomChange);
    };
  }, []);

  const activeLang = getLanguageByCode(currentCode);

  const handleSelect = (code: string) => {
    changeLanguage(code);
  };

  const handleReset = () => {
    changeLanguage("en");
  };

  return (
    <div
      className={`notranslate rounded-2xl border border-slate-200/80 bg-slate-50/70 p-3 sm:p-4 backdrop-blur-xs transition-colors dark:border-slate-800/80 dark:bg-slate-900/40 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {/* Left side: Context badge */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100/80 text-[#0B3D91] dark:bg-blue-950/80 dark:text-[#1E90FF]">
            <Languages className="h-4 w-4" />
          </div>

          <div>
            {currentCode !== "en" ? (
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Reading in {activeLang.nativeName} ({activeLang.name})</span>
              </div>
            ) : (
              <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Translate this article
              </div>
            )}
            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              {currentCode !== "en"
                ? "Full article & blog translated automatically"
                : "Choose your preferred language for instant reading"}
            </div>
          </div>
        </div>

        {/* Right side: Quick Language buttons */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {currentCode !== "en" ? (
            <button
              type="button"
              onClick={handleReset}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-2xs hover:border-[#1E90FF] hover:text-[#0B3D91] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-[#1E90FF] cursor-pointer"
            >
              <RotateCcw className="h-3 w-3 text-slate-400" />
              <span>Original (English)</span>
            </button>
          ) : (
            <>
              {POPULAR_LANGUAGES.slice(1, 6).map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleSelect(lang.code)}
                  className="inline-flex items-center gap-1 rounded-xl border border-slate-200/80 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-2xs transition-all hover:border-[#1E90FF] hover:bg-blue-50/50 hover:text-[#0B3D91] dark:border-slate-700/80 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-[#1E90FF] dark:hover:bg-slate-700 cursor-pointer"
                >
                  <span className="text-xs">{lang.flag}</span>
                  <span>{lang.nativeName}</span>
                </button>
              ))}
            </>
          )}

          {/* Full Language Selector Popover */}
          <LanguageSelector variant="compact" />
        </div>
      </div>
    </div>
  );
}
