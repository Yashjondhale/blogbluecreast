import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock, Share2 } from "lucide-react";
import { NewsArticle } from "@/types";

interface NewsCardProps {
  news: NewsArticle;
  featured?: boolean;
}

export function NewsCard({ news, featured = false }: NewsCardProps) {
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

  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/60">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {news.mainImage && (
            <div className="relative aspect-16/10 lg:aspect-auto lg:col-span-7 overflow-hidden bg-slate-100 dark:bg-slate-800">
              <Image
                src={news.mainImage.url}
                alt={news.mainImage.alt || news.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
              {news.isBreaking && (
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  BREAKING STORY
                </div>
              )}
            </div>
          )}

          <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
            <div>
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-blue-50 px-2.5 py-1 text-xs font-bold text-[#1E90FF] dark:bg-blue-950/60 dark:text-blue-400">
                  {news.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                  <Clock className="h-3.5 w-3.5" />
                  {formatTimeAgo(news.publishedAt)}
                </span>
              </div>

              <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-bold leading-tight text-slate-900 group-hover:text-[#1E90FF] dark:text-slate-100 transition-colors">
                <Link href={`/news/${news.slug}`}>{news.title}</Link>
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {news.summary}
              </p>

              {news.highlights && news.highlights.length > 0 && (
                <div className="mt-4 rounded-xl bg-slate-50 p-4 border border-slate-100 dark:bg-slate-800/40 dark:border-slate-800">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Key Highlights
                  </div>
                  <ul className="space-y-1.5">
                    {news.highlights.slice(0, 3).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {news.source || "BlueCrest Newsroom"}
              </span>
              <Link
                href={`/news/${news.slug}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-[#1E90FF] hover:underline"
              >
                Full Story <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60">
      <div>
        {news.mainImage && (
          <div className="relative mb-4 aspect-16/9 w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
            <Image
              src={news.mainImage.url}
              alt={news.mainImage.alt || news.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {news.isBreaking && (
              <span className="absolute top-2.5 left-2.5 rounded-full bg-red-600 px-2.5 py-0.5 text-[10px] font-bold text-white shadow-xs">
                BREAKING
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between gap-2 text-xs">
          <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[11px] font-bold text-[#1E90FF] dark:bg-blue-950/60 dark:text-blue-400">
            {news.category}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
            <Clock className="h-3 w-3" />
            {formatTimeAgo(news.publishedAt)}
          </span>
        </div>

        <h3 className="mt-2.5 font-serif text-lg font-bold leading-snug text-slate-900 group-hover:text-[#1E90FF] dark:text-slate-100 transition-colors">
          <Link href={`/news/${news.slug}`}>{news.title}</Link>
        </h3>

        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
          {news.summary}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
        <span>{news.source || "BlueCrest Wire"}</span>
        <Link
          href={`/news/${news.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-[#1E90FF] hover:underline"
        >
          Read <ArrowUpRight className="h-3 w-3" />
        </Link>
      </div>
    </article>
  );
}
