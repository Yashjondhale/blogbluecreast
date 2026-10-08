import Link from "next/link";
import { ArrowLeft, Compass, Search } from "lucide-react";
import { getTrendingPosts } from "@/sanity/dataService";
import { PostCard } from "@/components/post/PostCard";

export default async function NotFound() {
  const trending = await getTrendingPosts(3);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1E90FF] dark:bg-blue-950/60">
          <Compass className="h-4 w-4" />
          Error 404 &bull; Page Relocated
        </div>

        <h1 className="mt-4 font-serif text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-slate-100">
          Story Not Found
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
          The page or analysis you requested may have moved or been updated. Try searching our archive or explore our trending investigative reports below.
        </p>

        {/* Search Bar */}
        <form action="/search" method="GET" className="mt-8 flex gap-2 max-w-md mx-auto">
          <input
            type="search"
            name="q"
            placeholder="Search all articles..."
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-[#1E90FF] focus:outline-none dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
          />
          <button
            type="submit"
            className="rounded-xl bg-[#0B3D91] px-5 py-3 text-xs font-semibold text-white hover:bg-blue-800 dark:bg-[#1E90FF] dark:text-slate-950"
          >
            Search
          </button>
        </form>

        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E90FF] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to BlueCrest Homepage
          </Link>
        </div>
      </div>

      {/* Popular / Trending Suggestions */}
      <div className="mt-20 border-t border-slate-200/80 pt-12 dark:border-slate-800/80">
        <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">
          Popular Investigations You Might Enjoy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trending.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
