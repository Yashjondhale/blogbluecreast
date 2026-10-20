"use client";

import { useState, useEffect, useRef } from "react";
import {
  Languages,
  Search,
  Check,
  ChevronDown,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";
import {
  SUPPORTED_LANGUAGES,
  POPULAR_LANGUAGES,
  Language,
  getCurrentLanguageCode,
  getLanguageByCode,
  changeLanguage,
} from "@/lib/languages";

interface LanguageSelectorProps {
  variant?: "header" | "compact" | "banner";
  className?: string;
}

export function LanguageSelector({
  variant = "header",
  className = "",
}: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCode, setCurrentCode] = useState("en");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync current language on mount and whenever custom event fires
  useEffect(() => {
    const syncLang = () => {
      const code = getCurrentLanguageCode();
      setCurrentCode(code);
    };

    syncLang();

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ code: string }>;
      if (customEvent.detail?.code) {
        setCurrentCode(customEvent.detail.code);
      } else {
        syncLang();
      }
    };

    window.addEventListener("bluecreast_language_changed", handleCustomChange);
    return () => {
      window.removeEventListener("bluecreast_language_changed", handleCustomChange);
    };
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Auto-focus search input when opening
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const activeLanguage = getLanguageByCode(currentCode);

  const filteredLanguages = SUPPORTED_LANGUAGES.filter((lang) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    return (
      lang.name.toLowerCase().includes(query) ||
      lang.nativeName.toLowerCase().includes(query) ||
      lang.code.toLowerCase().includes(query)
    );
  });

  const handleSelectLanguage = (code: string) => {
    if (code === currentCode) {
      setIsOpen(false);
      return;
    }
    setIsLoading(true);
    changeLanguage(code);
    setIsOpen(false);
    // Timeout to reset loading in case page doesn't reload
    setTimeout(() => setIsLoading(false), 800);
  };

  const handleReset = () => {
    setIsLoading(true);
    changeLanguage("en");
    setIsOpen(false);
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <div className={`relative notranslate ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={`Translate Blog. Current language: ${activeLanguage.name}`}
        className={`group flex items-center gap-1.5 sm:gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-2.5 sm:px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-2xs transition-all hover:border-[#1E90FF] hover:bg-white dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-[#1E90FF] dark:hover:bg-slate-800 cursor-pointer ${
          currentCode !== "en"
            ? "border-[#1E90FF] bg-blue-50/50 text-[#0B3D91] dark:border-blue-500/50 dark:bg-blue-950/40 dark:text-blue-300"
            : ""
        }`}
      >
        <Languages className={`h-4 w-4 ${currentCode !== "en" ? "text-[#1E90FF]" : "text-slate-400 group-hover:text-[#1E90FF]"} transition-colors`} />
        
        <span className="flex items-center gap-1 text-xs">
          <span>{activeLanguage.flag}</span>
          <span className="font-bold tracking-wide uppercase">
            {activeLanguage.code.split("-")[0]}
          </span>
        </span>

        {currentCode !== "en" && (
          <span className="hidden md:inline-block max-w-[70px] truncate text-[11px] font-medium text-slate-500 dark:text-slate-400">
            {activeLanguage.nativeName}
          </span>
        )}

        <ChevronDown
          className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#1E90FF]" : "group-hover:text-slate-600 dark:group-hover:text-slate-300"
          }`}
        />
      </button>

      {/* Dropdown Popover */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Language selection"
          className="absolute right-0 top-full mt-2 w-80 sm:w-96 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/95 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[#1E90FF] dark:bg-blue-950/60">
                <Languages className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  Translate Blog
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Select your preferred language
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
              aria-label="Close language menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Quick Popular Languages Bar */}
          <div className="py-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                Popular Languages
              </span>
              {currentCode !== "en" && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center gap-1 text-[11px] font-semibold text-[#1E90FF] hover:underline"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset to English</span>
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {POPULAR_LANGUAGES.map((lang) => {
                const isActive = lang.code.toLowerCase() === currentCode.toLowerCase();
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelectLanguage(lang.code)}
                    className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium transition-all ${
                      isActive
                        ? "bg-[#0B3D91] text-white shadow-xs dark:bg-[#1E90FF] dark:text-slate-950 font-bold"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Input */}
          <div className="relative mb-2">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search all 28+ languages..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/80 py-2 pl-9 pr-8 text-xs text-slate-900 placeholder-slate-400 focus:border-[#1E90FF] focus:bg-white focus:outline-none dark:border-slate-800 dark:bg-slate-800/50 dark:text-white dark:placeholder-slate-500 dark:focus:border-[#1E90FF]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Scrollable Language List */}
          <div className="max-h-56 overflow-y-auto space-y-0.5 pr-1 divide-y divide-slate-100/50 dark:divide-slate-800/50">
            {filteredLanguages.length === 0 ? (
              <div className="py-6 text-center text-xs text-slate-400">
                No matching languages found
              </div>
            ) : (
              filteredLanguages.map((lang) => {
                const isActive =
                  lang.code.toLowerCase() === currentCode.toLowerCase();
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelectLanguage(lang.code)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition-colors ${
                      isActive
                        ? "bg-blue-50 text-[#0B3D91] dark:bg-blue-950/50 dark:text-blue-300 font-semibold"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/80"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">{lang.flag}</span>
                      <div>
                        <div className="text-xs font-semibold">
                          {lang.nativeName}
                        </div>
                        <div className="text-[10px] text-slate-400 dark:text-slate-500">
                          {lang.name}
                        </div>
                      </div>
                    </div>

                    {isActive && (
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1E90FF] text-white">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                    )}
                  </button>
                );
              })
            )}
          </div>

          {/* Footer status / helper */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Sparkles className="h-3 w-3 text-[#1E90FF]" />
              <span>Translates entire blog instantly</span>
            </span>

            {currentCode !== "en" ? (
              <button
                type="button"
                onClick={handleReset}
                className="font-medium text-[#1E90FF] hover:underline"
              >
                Reset to English
              </button>
            ) : (
              <span className="text-slate-400">Default: English</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
