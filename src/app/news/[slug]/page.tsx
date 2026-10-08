import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Clock, Newspaper, Radio, Share2, Tag } from "lucide-react";
import { getAllNews, getNewsBySlug } from "@/sanity/dataService";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SocialShare } from "@/components/post/SocialShare";
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

  const allNews = await getAllNews();
  const relatedNews = allNews.filter((n) => n.slug !== article.slug).slice(0, 3);
  const articleUrl = `${SITE_URL}/news/${article.slug}`;

  // JSON-LD NewsArticle structured data
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
      "name": article.author?.name || "BlueCrest Newsroom",
      "url": article.author ? `${SITE_URL}/author/${article.author.slug}` : SITE_URL,
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
    timeZoneName: "short",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Navigation / Breadcrumb */}
        <div className="mb-6 flex items-center justify-between">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Daily News", href: "/news" },
              { label: article.category },
            ]}
          />
          <Link
            href="/news"
            className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#1E90FF] dark:text-slate-400"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Newsroom
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {article.isBreaking && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white shadow-xs">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                BREAKING
              </span>
            )}
            <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-bold text-[#1E90FF] dark:bg-blue-950/60 dark:text-blue-400">
              {article.category}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {article.source || "BlueCrest Wire"}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 dark:text-slate-100">
            {article.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 border-y border-slate-200/80 py-3 dark:border-slate-800/80">
            {article.author && (
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Reported by {article.author.name}
                </span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <time dateTime={article.publishedAt}>{formattedDate}</time>
            </div>
            {article.readingTime && (
              <span>• {article.readingTime} min quick read</span>
            )}
          </div>
        </header>

        {/* Hero Image */}
        {article.mainImage && (
          <figure className="mb-8">
            <div className="relative aspect-16/9 w-full overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 shadow-md">
              <Image
                src={article.mainImage.url}
                alt={article.mainImage.alt || article.title}
                fill
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                className="object-cover"
              />
            </div>
            {article.mainImage.caption && (
              <figcaption className="mt-2 text-center text-xs text-slate-500 dark:text-slate-400">
                {article.mainImage.caption}
              </figcaption>
            )}
          </figure>
        )}

        {/* Quick Highlights Box */}
        {article.highlights && article.highlights.length > 0 && (
          <aside
            aria-label="Key Takeaways"
            className="mb-8 rounded-2xl border border-blue-500/20 bg-blue-50/50 p-6 dark:border-blue-500/30 dark:bg-blue-950/20"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B3D91] dark:text-[#1E90FF] mb-3">
              <Radio className="h-4 w-4" />
              Key Highlights & TL;DR
            </div>
            <ul className="space-y-2">
              {article.highlights.map((h, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#1E90FF] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Article Summary Lead */}
        <p className="font-serif text-lg sm:text-xl font-medium leading-relaxed text-slate-800 dark:text-slate-200 mb-6 border-l-4 border-[#1E90FF] pl-4">
          {article.summary}
        </p>

        {/* Main Body Content */}
        {article.content && (
          <div className="prose prose-slate dark:prose-invert max-w-none text-base leading-relaxed text-slate-700 dark:text-slate-300 mb-8">
            <p>{article.content}</p>
          </div>
        )}

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-200 dark:border-slate-800">
            <Tag className="h-4 w-4 text-slate-400" />
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Social Share */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
          <SocialShare title={article.title} url={articleUrl} />
        </div>

        {/* Related News Wire */}
        {relatedNews.length > 0 && (
          <section className="mt-14 pt-10 border-t border-slate-200 dark:border-slate-800">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-slate-100">
                More from Daily News Wire
              </h2>
              <Link
                href="/news"
                className="text-xs font-semibold text-[#1E90FF] hover:underline"
              >
                View All News &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((n) => (
                <div
                  key={n.slug}
                  className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-2xs dark:border-slate-800/80 dark:bg-slate-900/60"
                >
                  <span className="text-[10px] font-bold text-[#1E90FF] uppercase">
                    {n.category}
                  </span>
                  <h3 className="mt-1 font-serif text-sm font-bold text-slate-900 line-clamp-2 hover:text-[#1E90FF] dark:text-slate-100">
                    <Link href={`/news/${n.slug}`}>{n.title}</Link>
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 line-clamp-2 dark:text-slate-400">
                    {n.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
