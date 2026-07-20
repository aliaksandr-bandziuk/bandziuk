import { defineType, defineField } from "sanity";

const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
      description:
        "Shown under the name on the byline and author card, e.g. \"Web Developer & SEO Consultant\". Translate per locale — this field is per-language, like the rest of this document.",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "bio",
      title: "Short Bio",
      type: "text",
      rows: 4,
      description:
        "1-2 sentences shown on the author card at the end of an article. Plain text, no formatting.",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Facebook", value: "facebook" },
                  { title: "WhatsApp", value: "whatsapp" },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: "platform", subtitle: "url" },
          },
        },
      ],
    }),
    defineField({
      name: "language",
      type: "string",
      initialValue: "id",
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "photo",
    },
  },
});

export default author;
