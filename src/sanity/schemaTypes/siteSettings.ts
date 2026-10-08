import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "general", title: "General & Branding", default: true },
    { name: "seo", title: "Global SEO & Verification" },
    { name: "social", title: "Social Profiles" },
    { name: "analytics", title: "Analytics" },
  ],
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      group: "general",
      initialValue: "BlueCrest",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "general",
      initialValue: "Insightful Journalism, Tech Trends, and Modern Living",
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
      group: "general",
      initialValue: "editorial@bluecreast.in",
    }),
    // SEO Group
    defineField({
      name: "description",
      title: "Default Meta Description (SEO)",
      type: "text",
      group: "seo",
      rows: 3,
      description: "Default fallback meta description used across all pages when no specific description is set. Recommended: 140-160 characters.",
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default Social Share Image (Open Graph)",
      type: "image",
      group: "seo",
      options: { hotspot: true },
      description: "Default preview image when pages or the homepage are shared on Twitter/X, LinkedIn, WhatsApp, or Facebook (1200x630 recommended).",
    }),
    defineField({
      name: "googleVerificationToken",
      title: "Google Search Console Verification Token",
      type: "string",
      group: "seo",
      description: "Verification token from Google Search Console (e.g. google-site-verification code).",
    }),
    defineField({
      name: "bingVerificationToken",
      title: "Bing Webmaster Verification Token",
      type: "string",
      group: "seo",
      description: "msvalidate.01 token from Bing Webmaster Tools.",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      group: "social",
      fields: [
        { name: "twitter", type: "url", title: "X (Twitter)" },
        { name: "linkedin", type: "url", title: "LinkedIn" },
        { name: "facebook", type: "url", title: "Facebook" },
        { name: "github", type: "url", title: "GitHub" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "youtube", type: "url", title: "YouTube" },
      ],
    }),
    defineField({
      name: "analytics",
      title: "Analytics Settings",
      type: "object",
      group: "analytics",
      fields: [
        { name: "gaId", type: "string", title: "Google Analytics 4 Measurement ID (G-XXXXX)" },
        { name: "plausibleDomain", type: "string", title: "Plausible Domain" },
      ],
    }),
  ],
});
