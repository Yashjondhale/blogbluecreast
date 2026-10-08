import { Metadata } from "next";
import { Search as SearchIcon } from "lucide-react";
import { searchPosts } from "@/sanity/dataService";
import { PostCard } from "@/components/post/PostCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Search Articles & Topics - BlueCrest",
  description: "Search BlueCrest's archive of technology, finance, health, and lifestyle articles.",
  robots: {
    index: false,
    follow: true,
  },
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = query ? await searchPosts(query) : [];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "Search" }]} />

      {/* Search Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
          Site-Wide Search
        </span>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
          Find Topics, Articles & Guides
        </h1>

        <form action="/search" method="GET" className="mt-8 flex gap-2">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="search"
              name="q"
              defaultValue={query}
              placeholder="Search by keywords (e.g. AI, Mutual Funds, Sleep, Nomad)..."
              autoFocus
              className="w-full rounded-2xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-900 shadow-sm focus:border-[#1E90FF] focus:outline-none focus:ring-2 focus:ring-[#1E90FF]/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
            />
          </div>
          <button
            type="submit"
            className="rounded-2xl bg-[#0B3D91] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 dark:bg-[#1E90FF] dark:text-slate-950 dark:hover:bg-blue-400"
          >
            Search
          </button>
        </form>

        {query && (
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Found {results.length} results for &quot;<span className="font-semibold text-slate-800 dark:text-slate-200">{query}</span>&quot;
          </p>
        )}
      </div>

      {/* Results Grid */}
      {query ? (
        results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 p-12 text-center dark:border-slate-800">
            <h3 className="font-serif text-lg font-bold text-slate-700 dark:text-slate-300">
              No matching articles found
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try searching for broader terms like &quot;tech&quot;, &quot;finance&quot;, &quot;sleep&quot;, or &quot;startup&quot;.
            </p>
          </div>
        )
      ) : null}
    </div>
  );
}
