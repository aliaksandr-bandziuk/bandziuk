// /schemaTypes/serviceFeaturesBlock.ts
import { defineType, defineField, defineArrayMember } from "sanity";

const serviceFeaturesBlock = defineType({
  name: "serviceFeaturesBlock",
  title: "Service Features Block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        defineArrayMember({
          name: "serviceFeatureItem",
          type: "object",
          fields: [
            defineField({
              name: "feature",
              title: "Icon (pick from library)",
              type: "reference",
              to: [{ type: "serviceFeature" }],
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: "title",
              media: "feature.image",
              subtitle: "feature.title",
            },
            prepare({ title, media, subtitle }) {
              return { title, media, subtitle };
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(3).max(12),
    }),

    defineField({
      name: "marginTop",
      title: "Margin top",
      type: "string",
      options: { list: ["small", "medium", "large"] },
    }),

    defineField({
      name: "marginBottom",
      title: "Margin bottom",
      type: "string",
      options: { list: ["small", "medium", "large"] },
    }),
  ],

  preview: {
    select: { title: "title", count: "features.length" },
    prepare: ({ title, count }) => ({
      title: title || "Service Features",
      subtitle: `${count || 0} items`,
    }),
  },
});

export default serviceFeaturesBlock;
