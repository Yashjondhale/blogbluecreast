import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAllCategories, getCategoryBySlug, getPostsByCategory } from "@/sanity/dataService";
import { PostCard } from "@/components/post/PostCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SITE_URL } from "@/lib/constants";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params, searchParams }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { page = "1" } = await searchParams;
  const category = await getCategoryBySlug(slug);

  if (!category) return { title: "Category Not Found" };

  const canonicalUrl = `${SITE_URL}/category/${category.slug}${page !== "1" ? `?page=${page}` : ""}`;

  return {
    title: `${category.title} Articles & News - BlueCrest`,
    description: category.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${category.title} Articles & Insights - BlueCrest`,
      description: category.description,
      url: canonicalUrl,
    },
  };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params;
  const { page = "1" } = await searchParams;
  const currentPage = Math.max(1, parseInt(page, 10) || 1);
  const pageSize = 12;

  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const { posts, total, totalPages } = await getPostsByCategory(category.slug, currentPage, pageSize);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Breadcrumbs
        items={[
          { label: "Categories", href: "/blog" },
          { label: category.title },
        ]}
      />

      {/* Category Header */}
      <div className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-12 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
        <div className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: category.color || "#1E90FF" }}
          />
          <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
            Curated Category
          </span>
        </div>

        <h1 className="mt-3 font-serif text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
          {category.title}
        </h1>

        <p className="mt-3 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {category.description}
        </p>

        <div className="mt-6 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span>{total} published articles</span>
          <span>&bull;</span>
          <span>Updated daily</span>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="mt-12">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center py-12 text-slate-500">
            No posts found in this category yet.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-16 flex items-center justify-center gap-2">
          {currentPage > 1 && (
            <Link
              href={`/category/${category.slug}?page=${currentPage - 1}`}
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
              href={`/category/${category.slug}?page=${currentPage + 1}`}
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
