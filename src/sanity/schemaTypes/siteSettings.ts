import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "BlueCrest",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "Insightful Journalism, Tech Trends, and Modern Living",
    }),
    defineField({
      name: "description",
      title: "Default Meta Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default Open Graph Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
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
      fields: [
        { name: "gaId", type: "string", title: "Google Analytics 4 Measurement ID (G-XXXXX)" },
        { name: "plausibleDomain", type: "string", title: "Plausible Domain" },
      ],
    }),
  ],
});
