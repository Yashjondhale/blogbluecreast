import { Author, Post } from "@/types";
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
    "@type": "Organization",
    name: DEFAULT_SITE_SETTINGS.siteName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    email: DEFAULT_SITE_SETTINGS.email,
    sameAs: Object.values(DEFAULT_SITE_SETTINGS.socialLinks),
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
    keywords: post.tags.map((t) => t.title).join(", "),
    wordCount: post.readingTime * 220,
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

export function AuthorJsonLd({ author }: { author: Author }) {
  const schema = {
    "@context": "https://schema.org",
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
