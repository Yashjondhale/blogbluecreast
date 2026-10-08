export interface Author {
  _id?: string;
  name: string;
  slug: string;
  bio: string;
  avatar: string;
  avatarAlt?: string;
  role?: string;
  expertise: string[];
  credentials?: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export interface Category {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  color?: string; // hex or tailwind badge style
  icon?: string;
}

export interface Tag {
  _id?: string;
  title: string;
  slug: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TableItem {
  headers: string[];
  rows: string[][];
}

export interface CalloutItem {
  tone?: "info" | "warning" | "success" | "tip";
  title?: string;
  text: string;
}

export interface CodeBlockItem {
  language: string;
  code: string;
  filename?: string;
}

export interface YouTubeEmbedItem {
  url: string;
  caption?: string;
}

export interface PortableTextBlock {
  _key: string;
  _type: string;
  style?: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
  children?: Array<{
    _key: string;
    _type: string;
    text: string;
    marks?: string[];
  }>;
  markDefs?: Array<{
    _key: string;
    _type: string;
    href?: string;
  }>;
  // Custom blocks
  callout?: CalloutItem;
  faq?: FAQItem[];
  codeBlock?: CodeBlockItem;
  table?: TableItem;
  youtube?: YouTubeEmbedItem;
  image?: {
    url: string;
    alt: string;
    caption?: string;
    width?: number;
    height?: number;
  };
}

export interface Post {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage: {
    url: string;
    alt: string;
    caption?: string;
    width?: number;
    height?: number;
  };
  body: PortableTextBlock[];
  category: Category;
  tags: Tag[];
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  seoTitle?: string;
  seoDescription?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  featured?: boolean;
  trending?: boolean;
  views?: number;
}

export interface SiteSettings {
  siteName: string;
  siteUrl: string;
  tagline: string;
  description: string;
  defaultOgImage: string;
  logo: string;
  email: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
    facebook: string;
    github: string;
    instagram: string;
    youtube: string;
  };
  analytics: {
    gaId?: string;
    plausibleDomain?: string;
  };
}

export interface TOCHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface NewsArticle {
  _id?: string;
  title: string;
  slug: string;
  summary: string;
  highlights?: string[];
  category: string;
  publishedAt: string;
  updatedAt?: string;
  source?: string;
  sourceUrl?: string;
  author?: Author;
  mainImage?: {
    url: string;
    alt: string;
    caption?: string;
  };
  body?: PortableTextBlock[];
  content?: string;
  isBreaking?: boolean;
  tags?: string[];
  readingTime?: number;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
