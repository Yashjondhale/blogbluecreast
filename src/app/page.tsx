import Link from "next/link";
import { ArrowRight, Flame, Layers, Radio, Sparkles, TrendingUp } from "lucide-react";
import {
  getAllCategories,
  getBreakingNews,
  getFeaturedPosts,
  getLatestNews,
  getLatestPosts,
  getTrendingPosts,
} from "@/sanity/dataService";
import { HeroPost } from "@/components/post/HeroPost";
import { PostCard } from "@/components/post/PostCard";
import { NewsCard } from "@/components/news/NewsCard";
import { BreakingNewsTicker } from "@/components/news/BreakingNewsTicker";
import { NewsletterCTA } from "@/components/post/NewsletterCTA";
import { AdSlot } from "@/components/post/AdSlot";

export const revalidate = 60; // ISR revalidation every 60 seconds

export default async function HomePage() {
  const [featuredPosts, trendingPosts, latestPosts, categories, breakingNews, latestNews] =
    await Promise.all([
      getFeaturedPosts(),
      getTrendingPosts(4),
      getLatestPosts(6),
      getAllCategories(),
      getBreakingNews(),
      getLatestNews(3),
    ]);

  const heroPost = featuredPosts[0] || latestPosts[0];
  const secondaryLatest = latestPosts.filter((p) => p._id !== heroPost._id);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Live Breaking News Ticker */}
      <div className="mb-8">
        <BreakingNewsTicker news={breakingNews.length > 0 ? breakingNews : latestNews} />
      </div>

      {/* 1. Hero Featured Section */}
      <section aria-label="Featured Story" className="mb-14">
        {heroPost && <HeroPost post={heroPost} />}
      </section>

      {/* 2. Trending Strip */}
      <section aria-label="Trending Insights" className="mb-16">
        <div className="mb-6 flex items-center justify-between border-b border-slate-200/80 pb-4 dark:border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
              <Flame className="h-4 w-4" />
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              Trending Stories & Key Debates
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#1E90FF] hover:underline"
          >
            All Stories <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingPosts.map((post, idx) => (
            <div
              key={post._id}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/70 bg-white/70 p-5 shadow-2xs transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800/70 dark:bg-slate-900/40"
            >
              <div>
                <span className="font-serif text-2xl font-bold text-slate-300 dark:text-slate-700">
                  0{idx + 1}
                </span>
                <span className="ml-3 text-[11px] font-semibold uppercase tracking-wider text-[#1E90FF]">
                  {post.category.title}
                </span>
                <h3 className="mt-2 font-serif text-base font-bold leading-snug text-slate-900 group-hover:text-[#1E90FF] dark:text-slate-100">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{post.author.name}</span>
                <span>{post.readingTime}m read</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2.5 Daily News Wire Section */}
      <section aria-label="Daily News Wire" className="mb-16">
        <div className="mb-6 flex items-center justify-between border-b border-slate-200/80 pb-4 dark:border-slate-800/80">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-[#1E90FF]">
              <Radio className="h-4 w-4" />
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              Daily News Wire & Breaking Dispatches
            </h2>
          </div>
          <Link
            href="/news"
            className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#1E90FF] hover:underline"
          >
            Live News Desk <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestNews.map((newsItem) => (
            <NewsCard key={newsItem._id || newsItem.slug} news={newsItem} />
          ))}
        </div>
      </section>

      {/* 3. Category Quick Filter Chips */}
      <section aria-label="Browse By Category" className="mb-14">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Link
            href="/blog"
            className="flex items-center rounded-full bg-slate-900 px-4.5 py-2.5 min-h-[40px] text-xs font-semibold text-white whitespace-nowrap shadow-xs hover:bg-[#1E90FF] dark:bg-white dark:text-slate-950 dark:hover:bg-[#1E90FF] dark:hover:text-white"
          >
            All Niches
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4.5 py-2.5 min-h-[40px] text-xs font-medium text-slate-700 whitespace-nowrap transition-colors hover:border-[#1E90FF] hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-[#1E90FF]"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: cat.color || "#1E90FF" }}
              />
              {cat.title}
            </Link>
          ))}
        </div>
      </section>

      {/* CLS-safe Mid-page Ad Slot */}
      <AdSlot slotId="home-mid-banner" format="banner" />

      {/* 4. Latest Posts Grid */}
      <section aria-label="Latest Publications" className="mb-20">
        <div className="mb-8 flex items-center justify-between border-b border-slate-200/80 pb-4 dark:border-slate-800/80">
          <div>
            <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
              Fresh Off The Press
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
              Latest In-Depth Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-800 shadow-2xs hover:border-[#1E90FF] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            Explore Complete Archive
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondaryLatest.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#1E90FF] dark:bg-white dark:text-slate-950 dark:hover:bg-[#1E90FF] dark:hover:text-white"
          >
            <span>View All Articles & Paginated Archive</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 5. Editorial Newsletter CTA */}
      <section id="newsletter" aria-label="Newsletter">
        <NewsletterCTA />
      </section>
    </div>
  );
}
