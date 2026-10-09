import { Metadata } from "next";
import Link from "next/link";
import { Clock, Flame, Newspaper, Radio, Rss, Sparkles } from "lucide-react";
import { getAllNews, getBreakingNews } from "@/sanity/dataService";
import { BreakingNewsTicker } from "@/components/news/BreakingNewsTicker";
import { NewsCard } from "@/components/news/NewsCard";
import { NewsSubmitTip } from "@/components/news/NewsSubmitTip";
import { NewsletterCTA } from "@/components/post/NewsletterCTA";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CollectionPageJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

export const revalidate = 60; // 60s ISR for fast daily news updates

export const metadata: Metadata = {
  title: "Daily News Desk | Real-Time Tech, Market & Policy Wire | BlueCrest",
  description:
    "Daily breaking news, market movements, technological breakthroughs, and policy analyses updated continuously by the BlueCrest Editorial Wire.",
  alternates: {
    canonical: `${SITE_URL}/news`,
    types: {
      "application/rss+xml": `${SITE_URL}/news-sitemap.xml`,
    },
  },
  openGraph: {
    title: "Daily News Desk | BlueCrest Wire",
    description:
      "Daily breaking news, market movements, and technological breakthroughs updated continuously.",
    url: `${SITE_URL}/news`,
    siteName: "BlueCrest",
    locale: "en_IN",
    type: "website",
  },
};

export default async function NewsPage() {
  const [allNews, breakingNews] = await Promise.all([
    getAllNews(),
    getBreakingNews(),
  ]);

  const leadStory = allNews[0];
  const secondaryStories = allNews.slice(1);

  const categories = [
    "All",
    "Technology",
    "Markets & Finance",
    "Science & Health",
    "Startups & Business",
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <CollectionPageJsonLd
        title="Daily News Desk | BlueCrest Wire"
        description="Daily breaking news, market movements, technological breakthroughs, and policy analyses."
        url={`${SITE_URL}/news`}
        itemUrls={allNews.map((n) => `${SITE_URL}/news/${n.slug}`)}
      />
      {/* Breadcrumbs */}
      <div className="mb-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Daily News Desk" },
          ]}
        />
      </div>

      {/* Breaking News Live Bar */}
      <div className="mb-8">
        <BreakingNewsTicker news={breakingNews.length > 0 ? breakingNews : allNews.slice(0, 3)} />
      </div>

      {/* Header Section */}
      <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-slate-200/80 pb-6 dark:border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
            <Radio className="h-4 w-4 animate-pulse text-red-500" />
            <span>BlueCrest Daily Newsroom</span>
          </div>
          <h1 className="mt-1 font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Daily News & Live Wire
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Real-time reporting, daily market moves, tech disruptions, and policy updates published as they happen.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/studio"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-2xs hover:border-[#1E90FF] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            <span>Desk Login (Studio)</span>
          </Link>
          <Link
            href="/news-sitemap.xml"
            target="_blank"
            className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#1E90FF] dark:bg-white dark:text-slate-950 dark:hover:bg-[#1E90FF] dark:hover:text-white"
          >
            <Rss className="h-3.5 w-3.5" />
            <span>Google News Feed</span>
          </Link>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat, idx) => (
          <span
            key={cat}
            className={`rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
              idx === 0
                ? "bg-[#0B3D91] text-white dark:bg-[#1E90FF] dark:text-slate-950"
                : "border border-slate-200 bg-white text-slate-700 hover:border-[#1E90FF] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Lead Story */}
      {leadStory && (
        <section aria-label="Lead Story" className="mb-14">
          <NewsCard news={leadStory} featured />
        </section>
      )}

      {/* Main Grid: Latest Wire Stories */}
      <section aria-label="Daily Wire Grid" className="mb-16">
        <div className="mb-6 flex items-center justify-between border-b border-slate-200/80 pb-4 dark:border-slate-800/80">
          <div className="flex items-center gap-2">
            <Newspaper className="h-4 w-4 text-[#1E90FF]" />
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              Today&apos;s Wire & Reports
            </h2>

          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Updated continuously • Indian Standard Time (IST)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {secondaryStories.map((story) => (
            <NewsCard key={story._id || story.slug} news={story} />
          ))}
        </div>
      </section>

      {/* Submit Daily Tip / Formspree Section */}
      <section aria-label="Newsroom Submissions" className="mb-16">
        <NewsSubmitTip />
      </section>

      {/* Daily Briefing Newsletter Subscription */}
      <section aria-label="Daily Briefing">
        <NewsletterCTA />
      </section>
    </div>
  );
}
