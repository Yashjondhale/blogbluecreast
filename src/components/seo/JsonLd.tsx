import { Author, NewsArticle, Post } from "@/types";
import { DEFAULT_SITE_SETTINGS, SITE_URL } from "@/lib/constants";

export function WebsiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: DEFAULT_SITE_SETTINGS.siteName,
    url: SITE_URL,
    description: DEFAULT_SITE_SETTINGS.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-IN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: DEFAULT_SITE_SETTINGS.siteName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    email: DEFAULT_SITE_SETTINGS.email,
    sameAs: Object.values(DEFAULT_SITE_SETTINGS.socialLinks).filter(Boolean),
    publishingPrinciples: `${SITE_URL}/editorial-policy`,
    correctionsPolicy: `${SITE_URL}/editorial-policy`,
    diversityPolicy: `${SITE_URL}/about`,
    ethicsPolicy: `${SITE_URL}/editorial-policy`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleJsonLd({ post }: { post: Post }) {
  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const faqs = post.body?.find((b) => b._type === "faqBlock")?.faq || [];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.seoTitle || post.title,
    description: post.seoDescription || post.excerpt,
    url: postUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    image: [post.mainImage.url],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: `${SITE_URL}/author/${post.author.slug}`,
      jobTitle: post.author.role,
      description: post.author.bio,
      sameAs: post.author.socials
        ? Object.values(post.author.socials).filter(Boolean)
        : [],
    },
    publisher: {
      "@type": "Organization",
      name: DEFAULT_SITE_SETTINGS.siteName,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`,
      },
    },
    articleSection: post.category.title,
    keywords: post.tags?.map((t) => t.title).join(", ") || "",
    wordCount: (post.readingTime || 5) * 220,
    inLanguage: "en-IN",
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}

export function NewsArticleJsonLd({ article }: { article: NewsArticle }) {
  const articleUrl = `${SITE_URL}/news/${article.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.summary,
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    image: [article.mainImage?.url || `${SITE_URL}/api/og?title=${encodeURIComponent(article.title)}`],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: article.author ? {
      "@type": "Person",
      name: article.author.name,
      url: `${SITE_URL}/author/${article.author.slug}`,
      jobTitle: article.author.role,
    } : {
      "@type": "Organization",
      name: `${DEFAULT_SITE_SETTINGS.siteName} Wire Desk`,
      url: SITE_URL,
    },
    publisher: {
      "@type": "NewsMediaOrganization",
      name: DEFAULT_SITE_SETTINGS.siteName,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`,
      },
    },
    articleSection: article.category,
    keywords: article.tags?.join(", ") || "",
    inLanguage: "en-IN",
    dateline: "New Delhi, India",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AuthorJsonLd({ author }: { author: Author }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: author.name,
      url: `${SITE_URL}/author/${author.slug}`,
      image: author.avatar,
      jobTitle: author.role,
      description: author.bio,
      worksFor: {
        "@type": "Organization",
        name: DEFAULT_SITE_SETTINGS.siteName,
      },
      knowsAbout: author.expertise,
      sameAs: author.socials
        ? Object.values(author.socials).filter(Boolean)
        : [],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CollectionPageJsonLd({
  title,
  description,
  url,
  itemUrls,
}: {
  title: string;
  description: string;
  url: string;
  itemUrls: string[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: itemUrls.map((itemUrl, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: itemUrl,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ContactPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact BlueCrest Editorial & Press",
    description: "Submit editorial pitches, press releases, corrections, and partnerships.",
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: DEFAULT_SITE_SETTINGS.siteName,
      url: SITE_URL,
      email: DEFAULT_SITE_SETTINGS.email,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Editorial Desk",
          email: "editorial@bluecreast.in",
          availableLanguage: ["English", "Hindi"],
        },
        {
          "@type": "ContactPoint",
          contactType: "Partnerships & Syndication",
          email: "partnerships@bluecreast.in",
          availableLanguage: ["English"],
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function AboutPageJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About BlueCrest",
    description: "Independent multi-niche publication built on empirical research, technical precision, and verified practitioner expertise.",
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "NewsMediaOrganization",
      name: DEFAULT_SITE_SETTINGS.siteName,
      url: SITE_URL,
      foundingDate: "2024",
      publishingPrinciples: `${SITE_URL}/editorial-policy`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

