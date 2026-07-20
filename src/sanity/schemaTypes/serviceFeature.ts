import { defineType, defineField } from "sanity";
import { ICON_NAME_OPTIONS } from "./iconOptions";

export default defineType({
  name: "serviceFeature",
  title: "Service Feature",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "iconName",
      title: "Icon (Lucide/brand name)",
      type: "string",
      description:
        "Optional. When set, renders a Lucide/brand icon instead of the image above.",
      options: {
        list: ICON_NAME_OPTIONS,
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
