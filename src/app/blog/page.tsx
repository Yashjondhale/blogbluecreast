import Link from "next/link";
import { Metadata } from "next";
import { ChevronLeft, ChevronRight, Filter, Search } from "lucide-react";
import { getAllCategories, getPaginatedPosts } from "@/sanity/dataService";
import { PostCard } from "@/components/post/PostCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

interface BlogArchiveProps {
  searchParams: Promise<{ page?: string; category?: string }>;
}

export async function generateMetadata({ searchParams }: BlogArchiveProps): Promise<Metadata> {
  const { page = "1", category } = await searchParams;
  const canonicalUrl = category
    ? `${SITE_URL}/blog?category=${category}&page=${page}`
    : `${SITE_URL}/blog?page=${page}`;

  return {
    title: category
      ? `All Articles in ${category} (Page ${page})`
      : `Complete Editorial Archive (Page ${page})`,
    description:
      "Explore the complete BlueCrest publication catalog. Investigative reporting and practical frameworks across technology, personal finance, health, and modern culture.",
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function BlogArchivePage({ searchParams }: BlogArchiveProps) {
  const { page = "1", category } = await searchParams;
  const currentPage = Math.max(1, parseInt(page, 10) || 1);
  const pageSize = 12;

  const [categories, { posts, total, totalPages }] = await Promise.all([
    getAllCategories(),
    getPaginatedPosts(currentPage, pageSize, category),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs items={[{ label: "All Articles" }]} />

      {/* Header */}
      <div className="border-b border-slate-200/80 pb-8 dark:border-slate-800/80">
        <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
          The Full Archive
        </span>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
          Articles & Investigations
        </h1>
        <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400">
          Browse through {total} peer-reviewed analyses, explainers, and long-form essays across technology, markets, medicine, and global trade.
        </p>

        {/* Category Filter Chips */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          <Link
            href="/blog"
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
              !category
                ? "bg-[#0B3D91] text-white shadow-xs dark:bg-[#1E90FF] dark:text-slate-950"
                : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            All Categories ({total})
          </Link>

          {categories.map((cat) => {
            const isSelected = category === cat.slug;
            return (
              <Link
                key={cat.slug}
                href={`/blog?category=${cat.slug}`}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[#0B3D91] text-white shadow-xs dark:bg-[#1E90FF] dark:text-slate-950"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: cat.color || "#1E90FF" }}
                />
                {cat.title}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="mt-10">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 p-12 text-center dark:border-slate-800">
            <h3 className="font-serif text-lg font-bold text-slate-700 dark:text-slate-300">
              No articles found in this category
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Try selecting another category or clear the active filter.
            </p>
            <Link
              href="/blog"
              className="mt-4 inline-block rounded-xl bg-blue-600 px-4 py-2 text-xs font-semibold text-white"
            >
              Clear Filter
            </Link>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-16 flex items-center justify-center gap-2">
          {currentPage > 1 && (
            <Link
              href={`/blog?${category ? `category=${category}&` : ""}page=${currentPage - 1}`}
              className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Link>
          )}

          <div className="flex items-center space-x-1 px-3 text-xs font-medium text-slate-500">
            Page {currentPage} of {totalPages}
          </div>

          {currentPage < totalPages && (
            <Link
              href={`/blog?${category ? `category=${category}&` : ""}page=${currentPage + 1}`}
              className="flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
