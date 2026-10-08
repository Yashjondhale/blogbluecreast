import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(120),
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
      name: "excerpt",
      title: "Excerpt / Summary",
      type: "text",
      rows: 3,
      description: "Brief hook for index cards and meta descriptions (120-160 chars recommended)",
      validation: (Rule) => Rule.required().min(30).max(250),
    }),
    defineField({
      name: "mainImage",
      title: "Featured Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text (Mandatory for SEO & Accessibility)",
          validation: (Rule) => Rule.required().error("Descriptive alt text is required for Google SEO and WCAG."),
        },
        {
          name: "caption",
          type: "string",
          title: "Image Caption / Attribution",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Primary Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    }),
    defineField({
      name: "author",
      title: "Author (E-E-A-T)",
      type: "reference",
      to: [{ type: "author" }],
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
      name: "updatedAt",
      title: "Last Updated At",
      type: "datetime",
    }),
    defineField({
      name: "readingTime",
      title: "Estimated Reading Time (minutes)",
      type: "number",
      description: "Estimated reading time in minutes (calculated automatically if left blank)",
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage Hero",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "trending",
      title: "Mark as Trending",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "body",
      title: "Post Body (Portable Text)",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Heading 4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
              { title: "Underline", value: "underline" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "URL Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ["http", "https", "mailto", "tel"],
                      }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
        // Callout Object
        {
          name: "callout",
          title: "Editorial Callout Box",
          type: "object",
          fields: [
            {
              name: "tone",
              title: "Tone",
              type: "string",
              options: {
                list: [
                  { title: "Info (Blue)", value: "info" },
                  { title: "Tip (Green)", value: "tip" },
                  { title: "Warning (Amber)", value: "warning" },
                ],
              },
              initialValue: "info",
            },
            { name: "title", title: "Callout Title", type: "string" },
            { name: "text", title: "Message Content", type: "text", rows: 3 },
          ],
        },
        // Code Block
        {
          name: "codeBlock",
          title: "Code Snippet",
          type: "object",
          fields: [
            { name: "language", title: "Language", type: "string", initialValue: "typescript" },
            { name: "filename", title: "File Name (Optional)", type: "string" },
            { name: "code", title: "Code", type: "text", rows: 6 },
          ],
        },
        // Table Object
        {
          name: "table",
          title: "Data Table",
          type: "object",
          fields: [
            {
              name: "headers",
              title: "Header Columns",
              type: "array",
              of: [{ type: "string" }],
            },
            {
              name: "rows",
              title: "Rows",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "cells",
                      title: "Row Cells",
                      type: "array",
                      of: [{ type: "string" }],
                    },
                  ],
                },
              ],
            },
          ],
        },
        // YouTube Embed
        {
          name: "youtube",
          title: "YouTube Video Embed",
          type: "object",
          fields: [
            { name: "url", title: "YouTube Video URL", type: "url" },
            { name: "caption", title: "Video Caption", type: "string" },
          ],
        },
        // FAQ Block for FAQPage Schema
        {
          name: "faqBlock",
          title: "FAQ Section (Automatic FAQPage Schema)",
          type: "object",
          fields: [
            {
              name: "faqs",
              title: "Questions & Answers",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "question", title: "Question", type: "string" },
                    { name: "answer", title: "Answer", type: "text", rows: 3 },
                  ],
                },
              ],
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    // SEO Fields Group
    defineField({
      name: "seoTitle",
      title: "SEO Meta Title (Overrides Post Title)",
      type: "string",
      description: "Optimal length: 50-60 characters",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Meta Description",
      type: "text",
      rows: 2,
      description: "Optimal length: 140-160 characters",
    }),
    defineField({
      name: "canonicalUrl",
      title: "Custom Canonical URL (Optional)",
      type: "url",
      description: "Leave empty to automatically use the post's permalink on bluecreast.in",
    }),
    defineField({
      name: "noindex",
      title: "Noindex (Hide from Google Search)",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      publishedAt: "publishedAt",
    },
    prepare({ title, author, media, publishedAt }) {
      return {
        title,
        subtitle: `${author ? `By ${author}` : "No author"} • ${publishedAt ? new Date(publishedAt).toLocaleDateString() : "Draft"}`,
        media,
      };
    },
  },
});
