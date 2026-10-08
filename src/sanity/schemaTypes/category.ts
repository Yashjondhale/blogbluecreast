import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "color",
      title: "Accent Color (Hex)",
      type: "string",
      placeholder: "#0B3D91",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Meta Title (Overrides Category Title)",
      type: "string",
      description: "Custom title for search engines (e.g. 'Technology News & Distributed Systems Guides | BlueCrest')",
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Meta Description",
      type: "text",
      rows: 2,
      description: "Custom description for category search snippets (140-160 characters recommended).",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});
