import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { ChevronLeft, ChevronRight, Tag as TagIcon } from "lucide-react";
import { getAllTags, getPostsByTag } from "@/sanity/dataService";
import { PostCard } from "@/components/post/PostCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { CollectionPageJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/constants";

interface TagPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params, searchParams }: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { page = "1" } = await searchParams;
  const tags = await getAllTags();
  const tag = tags.find((t) => t.slug === slug);

  if (!tag) return { title: "Tag Not Found" };

  return {
    title: `Articles Tagged #${tag.title} (Page ${page}) - BlueCrest`,
    description: `Read all articles and discussions tagged #${tag.title} on BlueCrest.`,
    alternates: {
      canonical: `${SITE_URL}/tag/${tag.slug}${page !== "1" ? `?page=${page}` : ""}`,
    },
  };
}

export default async function TagPage({ params, searchParams }: TagPageProps) {
  const { slug } = await params;
  const { page = "1" } = await searchParams;
  const currentPage = Math.max(1, parseInt(page, 10) || 1);
  const pageSize = 12;

  const tags = await getAllTags();
  const tag = tags.find((t) => t.slug === slug);
  if (!tag) notFound();

  const { posts, total, totalPages } = await getPostsByTag(tag.slug, currentPage, pageSize);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <CollectionPageJsonLd
        title={`Articles Tagged #${tag.title} - BlueCrest`}
        description={`Read all articles and discussions tagged #${tag.title} on BlueCrest.`}
        url={`${SITE_URL}/tag/${tag.slug}`}
        itemUrls={posts.map((p) => `${SITE_URL}/blog/${p.slug}`)}
      />
      <Breadcrumbs
        items={[
          { label: "Tags", href: "/blog" },
          { label: `#${tag.title}` },
        ]}
      />

      <div className="border-b border-slate-200/80 pb-8 dark:border-slate-800/80">
        <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
          <TagIcon className="h-4 w-4" />
          Topic Index
        </div>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100">
          #{tag.title}
        </h1>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          {total} published articles categorized under this topic.
        </p>
      </div>

      <div className="mt-10">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center py-12 text-slate-500">
            No articles found tagged with #{tag.title}.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-16 flex items-center justify-center gap-2">
          {currentPage > 1 && (
            <Link
              href={`/tag/${tag.slug}?page=${currentPage - 1}`}
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
              href={`/tag/${tag.slug}?page=${currentPage + 1}`}
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
