import { defineArrayMember, defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Commercial Services",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "badge",
      title: "Category / Tag Badge",
      type: "string",
      initialValue: "Editorial Solution",
    }),
    defineField({
      name: "description",
      title: "Summary Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "priceEstimate",
      title: "Starting Price / Retainer Note",
      type: "string",
      initialValue: "Custom Retainer / Starting from ₹40,000",
    }),
    defineField({
      name: "features",
      title: "Included Features & Deliverables",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "badge",
    },
  },
});
