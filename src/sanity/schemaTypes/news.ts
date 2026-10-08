import { defineArrayMember, defineField, defineType } from "sanity";

export const newsType = defineType({
  name: "news",
  title: "Daily News",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Headline",
      type: "string",
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
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
      initialValue: false,
    }),
    defineField({
      name: "summary",
      title: "Lead / TL;DR Summary",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    }),
    defineField({
      name: "highlights",
      title: "Bullet Highlights (Quick Facts)",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: "Quick bullet points for readers in a hurry",
    }),
    defineField({
      name: "newsCategory",
      title: "News Category",
      type: "string",
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
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "source",
      title: "Wire / News Source",
      type: "string",
      initialValue: "BlueCrest Newsroom",
    }),
    defineField({
      name: "sourceUrl",
      title: "Source Reference URL (Optional)",
      type: "url",
    }),
    defineField({
      name: "author",
      title: "Reporter / Desk Editor",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "mainImage",
      title: "Feature Image",
      type: "image",
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
