import { defineArrayMember, defineField, defineType } from "sanity";

export const newsType = defineType({
  name: "news",
  title: "Daily News",
  type: "document",
  groups: [
    { name: "content", title: "Content & Headline", default: true },
    { name: "wire", title: "Wire Metadata" },
    { name: "seo", title: "SEO & Google News" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Headline",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isBreaking",
      title: "Breaking News Alert",
      description: "Display in top ticker and breaking news banner",
      type: "boolean",
      group: "wire",
      initialValue: false,
    }),
    defineField({
      name: "summary",
      title: "Lead / TL;DR Summary",
      type: "text",
      group: "content",
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "highlights",
      title: "Bullet Highlights (Quick Facts)",
      type: "array",
      group: "content",
      of: [defineArrayMember({ type: "string" })],
      description: "Quick bullet points for readers in a hurry",
    }),
    defineField({
      name: "newsCategory",
      title: "News Category",
      type: "string",
      group: "wire",
      options: {
        list: [
          { title: "Technology & AI", value: "Technology" },
          { title: "Markets & Economy", value: "Markets & Finance" },
          { title: "Policy & Governance", value: "Policy & World" },
          { title: "Science & Health", value: "Science & Health" },
          { title: "Startups & Business", value: "Startups & Business" },
        ],
      },
      initialValue: "Technology",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      group: "wire",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "source",
      title: "Wire / News Source",
      type: "string",
      group: "wire",
      initialValue: "BlueCrest Newsroom",
    }),
    defineField({
      name: "sourceUrl",
      title: "Source Reference URL (Optional)",
      type: "url",
      group: "wire",
    }),
    defineField({
      name: "author",
      title: "Reporter / Desk Editor",
      type: "reference",
      group: "wire",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "mainImage",
      title: "Feature Image",
      type: "image",
      group: "content",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text (for SEO)",
        },
        {
          name: "caption",
          type: "string",
          title: "Image Caption & Photo Credit",
        },
      ],
    }),
    defineField({
      name: "body",
      title: "Article Content",
      type: "array",
      group: "content",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
        }),
      ],
    }),
    // SEO & Google News Group
    defineField({
      name: "seoTitle",
      title: "SEO Meta Title (Overrides Headline)",
      type: "string",
      group: "seo",
      description: "Recommended: 50-60 characters for Google News and Search.",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Meta Description",
      type: "text",
      group: "seo",
      rows: 2,
      description: "Recommended: 140-160 characters for search result snippets.",
    }),
    defineField({
      name: "canonicalUrl",
      title: "Custom Canonical URL (Optional)",
      type: "url",
      group: "seo",
      description: "Set only if syndicated from an external agency (e.g. Reuters, PTI, Bloomberg).",
    }),
    defineField({
      name: "tags",
      title: "Google News Keywords",
      type: "array",
      group: "seo",
      of: [{ type: "string" }],
      description: "Keywords indexed in the Google News Sitemap XML.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      isBreaking: "isBreaking",
      category: "newsCategory",
    },
    prepare({ title, author, media, isBreaking, category }) {
      return {
        title: `${isBreaking ? "🔴 [BREAKING] " : ""}${title}`,
        subtitle: `${category || "News"} | by ${author || "News Desk"}`,
        media,
      };
    },
  },
});
