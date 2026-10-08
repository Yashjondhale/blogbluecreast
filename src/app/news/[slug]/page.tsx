import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Clock,
  Newspaper,
  Radio,
  Share2,
  Sparkles,
  Tag,
} from "lucide-react";
import { getAllAuthors, getAllNews, getNewsBySlug } from "@/sanity/dataService";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ReadingProgressBar } from "@/components/post/ReadingProgressBar";
import { AuthorCard } from "@/components/post/AuthorCard";
import { SocialShare } from "@/components/post/SocialShare";
import { AdSlot } from "@/components/post/AdSlot";
import { NewsletterCTA } from "@/components/post/NewsletterCTA";
import { SITE_URL } from "@/lib/constants";

interface NewsPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const all = await getAllNews();
  return all.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) return {};

  const url = `${SITE_URL}/news/${article.slug}`;
  const ogImage = article.mainImage?.url || `${SITE_URL}/og-default.png`;

  return {
    title: `${article.title} | BlueCrest News`,
    description: article.summary,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url,
      siteName: "BlueCrest",
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [ogImage],
    },
  };
}

export default async function NewsArticlePage({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = await getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  const [allNews, authors] = await Promise.all([
    getAllNews(),
    getAllAuthors(),
  ]);

  const relatedNews = allNews.filter((n) => n.slug !== article.slug).slice(0, 3);
  const articleUrl = `${SITE_URL}/news/${article.slug}`;
  const author = article.author || authors[0];

  // Structured JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.summary,
    "image": article.mainImage ? [article.mainImage.url] : undefined,
    "datePublished": article.publishedAt,
    "dateModified": article.updatedAt || article.publishedAt,
    "author": {
      "@type": "Person",
      "name": author.name,
      "url": `${SITE_URL}/author/${author.slug}`,
    },
    "publisher": {
      "@type": "NewsMediaOrganization",
      "name": "BlueCrest",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.svg`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  const formattedDate = new Date(article.publishedAt).toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <ReadingProgressBar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Full-Width Outer Container (Same as /blog/[slug]) */}
      <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Daily News", href: "/news" },
              { label: article.category },
            ]}
          />
          <Link
            href="/news"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#1E90FF] dark:text-slate-400"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Newsroom
          </Link>
        </div>

        {/* Post Header (Centered, matching /blog/[slug]) */}
        <header className="mx-auto max-w-4xl text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            {article.isBreaking && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3.5 py-1 text-xs font-bold text-white shadow-xs">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                BREAKING
              </span>
            )}
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#1E90FF] transition-colors hover:bg-blue-100 dark:bg-blue-950/60 dark:hover:bg-blue-900/60"
            >
              {article.category}
            </Link>
          </div>

          <h1 className="font-serif text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight dark:text-slate-100">
            {article.title}
          </h1>

          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-slate-600 dark:text-slate-300">
            {article.summary}
          </p>

          {/* Byline / Author Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 border-y border-slate-200/80 py-4 dark:border-slate-800/80 dark:text-slate-400">
            <Link
              href={`/author/${author.slug}`}
              className="flex items-center gap-2 font-medium text-slate-900 hover:text-[#1E90FF] dark:text-slate-100"
            >
              <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-slate-200 dark:ring-slate-700">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span>Reported by {author.name}</span>
            </Link>

            <span>&bull;</span>

            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              Published {formattedDate} IST
            </span>

            <span>&bull;</span>

            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {article.readingTime || 3} min read
            </span>

            <span>&bull;</span>

            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {article.source || "BlueCrest Wire"}
            </span>
          </div>

          {/* Social Share Bar Top */}
          <div className="mt-4 flex justify-center">
            <SocialShare title={article.title} url={articleUrl} />
          </div>
        </header>

        {/* Featured Main Image (Identical to /blog/[slug] max-w-5xl) */}
        {article.mainImage && (
          <div className="relative mx-auto max-w-5xl aspect-16/9 overflow-hidden rounded-3xl bg-slate-100 mb-12 shadow-lg dark:bg-slate-800">
            <Image
              src={article.mainImage.url}
              alt={article.mainImage.alt || article.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
            {article.mainImage.caption && (
              <div className="absolute bottom-0 inset-x-0 bg-black/60 px-4 py-2 text-center text-xs text-slate-200 backdrop-blur-xs">
                {article.mainImage.caption}
              </div>
            )}
          </div>
        )}

        {/* Layout Grid: Content (Col 1-8) + Sidebar (Col 9-12) - max-w-6xl */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Main Article Body */}
          <main className="lg:col-span-8">
            {/* Quick Highlights Box */}
            {article.highlights && article.highlights.length > 0 && (
              <aside
                aria-label="Key Highlights"
                className="mb-8 rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-50/60 to-slate-50 p-6 sm:p-8 dark:border-blue-500/30 dark:from-blue-950/20 dark:to-slate-900"
              >
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B3D91] dark:text-[#1E90FF] mb-4">
                  <Radio className="h-4 w-4 animate-pulse text-red-500" />
                  Key Highlights & Executive TL;DR
                </div>
                <ul className="space-y-3">
                  {article.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-800 dark:text-slate-200 leading-snug"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#1E90FF] shrink-0 mt-1" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            {/* Article Content / Body */}
            <div className="prose prose-slate lg:prose-lg dark:prose-invert max-w-none text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              <p className="font-serif text-xl sm:text-2xl font-medium leading-relaxed text-slate-900 dark:text-slate-100 border-l-4 border-[#1E90FF] pl-4 py-1 mb-6">
                {article.summary}
              </p>

              {article.content && (
                <div className="space-y-4">
                  <p>{article.content}</p>
                </div>
              )}
            </div>

            {/* Mid-Article Reserved Ad Slot */}
            <div className="mt-8">
              <AdSlot slotId="news-article-slot" format="in-article" />
            </div>

            {/* Tags Cloud */}
            {article.tags && article.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
                <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase mr-3 dark:text-slate-400">
                  Tags:
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {article.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Social Share */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              <SocialShare title={article.title} url={articleUrl} />
            </div>
          </main>

          {/* Sticky Sidebar (Col 9-12) */}
          <aside className="hidden lg:block lg:col-span-4 space-y-8">
            {/* Author Profile Card */}
            <div className="sticky top-24 space-y-8">
              <AuthorCard author={author} />

              {/* Wire Updates Widget */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900/60">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E90FF] mb-4">
                  <Newspaper className="h-4 w-4" />
                  Live Wire Updates
                </div>
                <div className="space-y-4">
                  {relatedNews.slice(0, 3).map((item) => (
                    <div key={item.slug} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0 dark:border-slate-800">
                      <span className="text-[10px] font-bold text-[#1E90FF] uppercase">
                        {item.category}
                      </span>
                      <h4 className="mt-1 font-serif text-xs font-bold text-slate-900 hover:text-[#1E90FF] dark:text-slate-100 leading-snug">
                        <Link href={`/news/${item.slug}`}>{item.title}</Link>
                      </h4>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
                  <Link
                    href="/news"
                    className="text-xs font-bold text-[#1E90FF] hover:underline"
                  >
                    View Full News Wire &rarr;
                  </Link>
                </div>
              </div>

              {/* Sidebar Ad Slot */}
              <AdSlot slotId="news-sidebar-slot" format="sidebar" />
            </div>
          </aside>
        </div>

        {/* Related News Wire Grid */}
        {relatedNews.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-200/80 dark:border-slate-800/80 max-w-6xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold tracking-wider text-[#1E90FF] uppercase">
                  More From Today
                </span>
                <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                  Related Wire Reports
                </h2>
              </div>
              <Link
                href="/news"
                className="text-xs font-bold text-[#1E90FF] hover:underline"
              >
                All News Wire &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedNews.map((n) => (
                <div
                  key={n.slug}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/60"
                >
                  <span className="text-[10px] font-bold text-[#1E90FF] uppercase">
                    {n.category}
                  </span>
                  <h3 className="mt-2 font-serif text-base font-bold text-slate-900 hover:text-[#1E90FF] dark:text-slate-100">
                    <Link href={`/news/${n.slug}`}>{n.title}</Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 line-clamp-3 dark:text-slate-400">
                    {n.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Full-Width Newsletter CTA */}
        <section className="mt-16 max-w-6xl mx-auto">
          <NewsletterCTA />
        </section>
      </article>
    </>
  );
}
