import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
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
      type: "localizedSlug",
    }),
    defineField({
      name: "language",
      type: "string",
      initialValue: "id",
      readOnly: true,
    }),
  ],
});
