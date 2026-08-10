import { defineType, defineField } from "sanity";

const landingCtaBlock = defineType({
  name: "landingCtaBlock",
  title: "Landing CTA Block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      description:
        "Optional. Falls back to the shared default image (Site Defaults) when empty.",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "marginTop",
      title: "Margin Top",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
    }),
    defineField({
      name: "marginBottom",
      title: "Margin Bottom",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
    }),
  ],
});

export default landingCtaBlock;
