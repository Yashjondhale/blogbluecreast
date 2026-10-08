import { defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Editorial Role / Title",
      type: "string",
      placeholder: "Senior Technology Editor",
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().min(20),
    }),
    defineField({
      name: "expertise",
      title: "Areas of Expertise (E-E-A-T)",
      type: "array",
      of: [{ type: "string" }],
      description: "List core subjects (e.g., Cloud Architecture, AI, Personal Finance)",
    }),
    defineField({
      name: "credentials",
      title: "Credentials & Education",
      type: "string",
      description: "e.g., M.Sc Computer Science, Ex-AWS Solutions Architect",
    }),
    defineField({
      name: "socials",
      title: "Social Profiles",
      type: "object",
      fields: [
        { name: "twitter", type: "url", title: "X (Twitter) URL" },
        { name: "linkedin", type: "url", title: "LinkedIn URL" },
        { name: "github", type: "url", title: "GitHub URL" },
        { name: "website", type: "url", title: "Personal Website" },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "avatar",
    },
  },
});
