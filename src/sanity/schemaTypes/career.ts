import { defineField, defineType } from "sanity";

export const careerType = defineType({
  name: "career",
  title: "Careers & Open Roles",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Employment Type & Location",
      type: "string",
      initialValue: "Full-Time • 100% Remote (India / Worldwide)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "exp",
      title: "Prerequisite / Experience Required",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desc",
      title: "Role Description & Responsibilities",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      options: {
        list: [
          "Editorial & Journalism",
          "Technology & Engineering",
          "Medical & Clinical Review",
          "Financial Markets & Analysis",
          "Growth & Design",
        ],
      },
      initialValue: "Editorial & Journalism",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "isActive",
      title: "Currently Hiring (Active)",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "type",
      isActive: "isActive",
    },
    prepare({ title, subtitle, isActive }) {
      return {
        title: `${isActive === false ? "[INACTIVE] " : ""}${title}`,
        subtitle,
      };
    },
  },
});
