"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Radio } from "lucide-react";
import { NewsArticle } from "@/types";

interface BreakingNewsTickerProps {
  news: NewsArticle[];
}

export function BreakingNewsTicker({ news }: BreakingNewsTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (news.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [news.length]);

  if (!news || news.length === 0) return null;

  const current = news[currentIndex];

  // Helper for humanized time
  const formatTimeAgo = (dateStr: string) => {
    try {
      const now = new Date();
      const past = new Date(dateStr);
      const diffMs = now.getTime() - past.getTime();
      const diffMins = Math.floor(diffMs / (1000 * 60));
      if (diffMins < 60) return `${Math.max(1, diffMins)}m ago`;
      const diffHours = Math.floor(diffMins / 60);
      if (diffHours < 24) return `${diffHours}h ago`;
      const diffDays = Math.floor(diffHours / 24);
      return `${diffDays}d ago`;
    } catch {
      return "Recent";
    }
  };

  return (
    <div
      aria-label="Breaking News Alert Ticker"
      className="relative flex items-center overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-r from-red-500/10 via-slate-50 to-blue-50/40 p-2 sm:p-2.5 shadow-2xs backdrop-blur-xs dark:from-red-950/20 dark:via-slate-900/60 dark:to-blue-950/20 dark:border-red-500/30"
    >
      {/* Live Badge */}
      <div className="flex shrink-0 items-center gap-2 rounded-xl bg-red-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-xs">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
        </span>
        <Radio className="h-3.5 w-3.5 hidden sm:inline" />
        <span>LIVE NEWS</span>
      </div>

      {/* Headline & Category */}
      <div className="ml-3 flex flex-1 items-center min-w-0 pr-2">
        <span className="hidden md:inline-flex shrink-0 items-center rounded-md bg-slate-200/70 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300 mr-2.5">
          {current.category}
        </span>
        <Link
          href={`/news/${current.slug}`}
          className="truncate text-xs sm:text-sm font-semibold text-slate-900 hover:text-[#1E90FF] dark:text-slate-100 transition-colors"
        >
          {current.title}
        </Link>
        <span className="ml-2 shrink-0 text-[11px] text-slate-500 dark:text-slate-400">
          • {formatTimeAgo(current.publishedAt)}
        </span>
      </div>

      {/* Nav Controls */}
      <div className="flex items-center gap-1 shrink-0 pl-1">
        <button
          type="button"
          onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + news.length) % news.length)
          }
          aria-label="Previous breaking news headline"
          className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        <button
          type="button"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % news.length)}
          aria-label="Next breaking news headline"
          className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
        <Link
          href="/news"
          className="ml-2 hidden sm:inline-flex items-center rounded-lg bg-slate-900 px-2.5 py-1 text-[11px] font-semibold text-white hover:bg-[#1E90FF] dark:bg-white dark:text-slate-950 dark:hover:bg-[#1E90FF] dark:hover:text-white"
        >
          All News
        </Link>
      </div>
    </div>
  );
}
