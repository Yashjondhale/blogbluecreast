import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, Calendar, MessageSquare, ArrowLeft } from "lucide-react";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/sanity/dataService";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { TableOfContents } from "@/components/post/TableOfContents";
import { ReadingProgressBar } from "@/components/post/ReadingProgressBar";
import { SocialShare } from "@/components/post/SocialShare";
import { AuthorCard } from "@/components/post/AuthorCard";
import { PortableTextRenderer } from "@/components/post/PortableTextRenderer";
import { PostCard } from "@/components/post/PostCard";
import { NewsletterCTA } from "@/components/post/NewsletterCTA";
import { AdSlot } from "@/components/post/AdSlot";
import { formatDate, slugify } from "@/lib/utils";
import { SITE_URL } from "@/lib/constants";
import { TOCHeading } from "@/types";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const ogImageUrl = `${SITE_URL}/api/og?title=${encodeURIComponent(post.title)}&category=${encodeURIComponent(
    post.category.title
  )}`;

  return {
    title: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    alternates: {
      canonical: post.canonicalUrl || postUrl,
    },
    robots: {
      index: !post.noindex,
      follow: !post.noindex,
    },
    openGraph: {
      type: "article",
      url: postUrl,
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [`${SITE_URL}/author/${post.author.slug}`],
      section: post.category.title,
      tags: post.tags.map((t) => t.title),
      images: [
        {
          url: post.mainImage.url || ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.mainImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      images: [post.mainImage.url || ogImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(
    post.slug,
    post.category.slug,
    post.tags.map((t) => t.slug),
    3
  );

  // Extract H2 and H3 headings for the Table of Contents
  const headings: TOCHeading[] = [];
  post.body.forEach((block) => {
    if (block.style === "h2" || block.style === "h3") {
      const text = block.children?.map((c) => c.text).join("") || "";
      if (text) {
        headings.push({
          id: slugify(text),
          text,
          level: block.style === "h2" ? 2 : 3,
        });
      }
    }
  });

  return (
    <>
      <ReadingProgressBar />
      <ArticleJsonLd post={post} />

      <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: post.category.title, href: `/category/${post.category.slug}` },
            { label: post.title },
          ]}
        />

        {/* Post Header */}
        <header className="mx-auto max-w-4xl text-center mb-10">
          <Link
            href={`/category/${post.category.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#1E90FF] transition-colors hover:bg-blue-100 dark:bg-blue-950/60 dark:hover:bg-blue-900/60"
          >
            {post.category.title}
          </Link>

          <h1 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight dark:text-slate-100">
            {post.title}
          </h1>

          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
            {post.excerpt}
          </p>

          {/* Byline / Author Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 border-y border-slate-200/80 py-4 dark:border-slate-800/80 dark:text-slate-400">
            <Link
              href={`/author/${post.author.slug}`}
              className="flex items-center gap-2 font-medium text-slate-900 hover:text-[#1E90FF] dark:text-slate-100"
            >
              <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-slate-200 dark:ring-slate-700">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span>{post.author.name}</span>
            </Link>

            <span>&bull;</span>

            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              Published {formatDate(post.publishedAt)}
            </span>

            {post.updatedAt && (
              <>
                <span>&bull;</span>
                <span className="italic">
                  Updated {formatDate(post.updatedAt)}
                </span>
              </>
            )}

            <span>&bull;</span>

            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readingTime} min read
            </span>
          </div>

          {/* Social Share Bar Top */}
          <div className="mt-4 flex justify-center">
            <SocialShare title={post.title} slug={post.slug} />
          </div>
        </header>

        {/* Featured Main Image */}
        <div className="relative mx-auto max-w-5xl aspect-[16/9] overflow-hidden rounded-3xl bg-slate-100 mb-12 shadow-lg dark:bg-slate-800">
          <Image
            src={post.mainImage.url}
            alt={post.mainImage.alt}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
          {post.mainImage.caption && (
            <div className="absolute bottom-0 inset-x-0 bg-black/60 px-4 py-2 text-center text-xs text-slate-200 backdrop-blur-xs">
              {post.mainImage.caption}
            </div>
          )}
        </div>

        {/* Layout Grid: Content + Sidebar TOC */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Main Article Body (Col 1-8) */}
          <main className="lg:col-span-8">
            {/* Mobile collapsible TOC */}
            {headings.length > 0 && (
              <div className="mb-8 lg:hidden">
                <TableOfContents headings={headings} />
              </div>
            )}

            {/* Article Portable Text content */}
            <PortableTextRenderer blocks={post.body} />

            {/* Mid-Article Reserved Ad Slot */}
            <AdSlot slotId="article-bottom-slot" format="in-article" />

            {/* Tags Cloud */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
                <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase mr-3 dark:text-slate-400">
                  Tagged with:
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag.slug}
                      href={`/tag/${tag.slug}`}
                      className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-[#1E90FF] dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    >
                      #{tag.title}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Social Share Bar Bottom */}
            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 dark:border-slate-800/80 dark:bg-slate-900/50">
              <SocialShare title={post.title} slug={post.slug} />
            </div>

            {/* Author Bio Box */}
            <AuthorCard author={post.author} />

            {/* Discussion / Comments Placeholder */}
            <section
              aria-label="Community comments"
              className="my-12 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/50"
            >
              <div className="flex items-center gap-2 font-serif text-lg font-bold text-slate-900 dark:text-slate-100">
                <MessageSquare className="h-5 w-5 text-[#1E90FF]" />
                Join the Discussion
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                BlueCrest enforces a moderated, high-signal comment policy. Share your perspective, constructive critique, or technical observations.
              </p>
              <div className="mt-4 rounded-xl border border-dashed border-slate-200 p-6 text-center text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">
                Sign in with GitHub or Google to participate in community discussions.
              </div>
            </section>
          </main>

          {/* Sticky Sidebar (Col 9-12) */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Desktop Sticky Table of Contents */}
            {headings.length > 0 && (
              <div className="hidden lg:block sticky top-28">
                <TableOfContents headings={headings} />
                <AdSlot slotId="sidebar-ad-slot" format="sidebar" />
              </div>
            )}
          </aside>
        </div>

        {/* Related Posts Section (Internal Linking Engine) */}
        {relatedPosts.length > 0 && (
          <section aria-label="Related stories" className="mt-20 border-t border-slate-200/80 pt-12 dark:border-slate-800/80">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
                Recommended For You
              </span>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                Related Analyses in {post.category.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <PostCard key={rPost._id} post={rPost} />
              ))}
            </div>
          </section>
        )}

        {/* Bottom Newsletter CTA */}
        <div className="mt-16">
          <NewsletterCTA />
        </div>
      </article>
    </>
  );
}
