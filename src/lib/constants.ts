import { SiteSettings } from "@/types";

export const SITE_URL = "https://bluecreast.in";
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/myekwpoo";

export const DEFAULT_SITE_SETTINGS: SiteSettings = {
  siteName: "BlueCrest",
  siteUrl: SITE_URL,
  tagline: "Insightful Journalism, Tech Trends, and Modern Living",
  description:
    "BlueCrest is a premier multi-niche publication delivering expert analysis, practical how-to guides, and in-depth explainers across technology, finance, health, lifestyle, and global business.",
  defaultOgImage: `${SITE_URL}/og-default.png`,
  logo: "/logo.svg",
  email: "contact@bluecreast.in",
  socialLinks: {
    twitter: "https://twitter.com/bluecreast_in",
    linkedin: "https://linkedin.com/company/bluecreast",
    facebook: "https://facebook.com/bluecreast",
    github: "https://github.com/bluecreast",
    instagram: "https://instagram.com/bluecreast.in",
    youtube: "https://youtube.com/@bluecreast",
  },
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX",
    plausibleDomain: "bluecreast.in",
  },
};

export const PRIMARY_CATEGORIES = [
  {
    title: "Technology",
    slug: "technology",
    description: "AI, cloud computing, cybersecurity, software engineering, and hardware reviews.",
    color: "#0B3D91",
    accent: "#1E90FF",
  },
  {
    title: "Finance",
    slug: "finance",
    description: "Personal finance, Indian equity markets, fintech innovations, and wealth building.",
    color: "#0F766E",
    accent: "#14B8A6",
  },
  {
    title: "Health & Wellness",
    slug: "health",
    description: "Evidence-backed fitness, mental health, nutrition, and longevity research.",
    color: "#15803D",
    accent: "#22C55E",
  },
  {
    title: "Lifestyle & Travel",
    slug: "lifestyle",
    description: "Mindful living, travel guides, home design, and cultural explorations.",
    color: "#7E22CE",
    accent: "#A855F7",
  },
  {
    title: "Business & Education",
    slug: "business",
    description: "Startup playbooks, career growth, executive insights, and continuous learning.",
    color: "#C2410C",
    accent: "#F97316",
  },
];

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/blog" },
  { label: "News", href: "/news" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  categories: [
    { label: "Technology", href: "/category/technology" },
    { label: "Finance & Wealth", href: "/category/finance" },
    { label: "Health & Nutrition", href: "/category/health" },
    { label: "Lifestyle & Travel", href: "/category/lifestyle" },
    { label: "Business & Startups", href: "/category/business" },
  ],
  company: [
    { label: "Daily News Desk", href: "/news" },
    { label: "About BlueCrest", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Careers (We're Hiring)", href: "/careers" },
    { label: "Editorial Policy", href: "/editorial-policy" },
    { label: "Our Authors & Team", href: "/about#team" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Cookie Preferences", href: "#cookies" },
  ],
  feeds: [
    { label: "Daily News Wire", href: "/news" },
    { label: "RSS Feed", href: "/rss.xml" },
    { label: "XML Sitemap", href: "/sitemap.xml" },
    { label: "Google News Feed", href: "/news-sitemap.xml" },
    { label: "LLMs Index", href: "/llms.txt" },
  ],
};
