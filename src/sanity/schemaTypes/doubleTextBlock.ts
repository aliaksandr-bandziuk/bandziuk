import { defineType, defineField } from "sanity";

const doubleTextBlock = defineType({
  name: "doubleTextBlock",
  title: "Double Text Block",
  type: "object",
  fields: [
    defineField({
      name: "doubleTextBlockTitle",
      title: "Title of the block",
      type: "string",
    }),
    defineField({
      name: "leftContent",
      title: "Left Content",
      type: "object",
      fields: [
        defineField({
          name: "type",
          title: "Type",
          type: "string",
          options: {
            list: [
              { title: "Text", value: "text" },
              { title: "Image", value: "image" },
            ],
          },
        }),
        defineField({
          name: "blockContent",
          title: "Block Content",
          type: "blockContentWithStyle",
          hidden: ({ parent }) => parent?.type !== "text",
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          hidden: ({ parent }) => parent?.type !== "image",
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "rightContent",
      title: "Right Content",
      type: "object",
      fields: [
        defineField({
          name: "type",
          title: "Type",
          type: "string",
          options: {
            list: [
              { title: "Text", value: "text" },
              { title: "Image", value: "image" },
            ],
          },
        }),
        defineField({
          name: "blockContent",
          title: "Block Content",
          type: "blockContentWithStyle",
          hidden: ({ parent }) => parent?.type !== "text",
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          hidden: ({ parent }) => parent?.type !== "image",
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "variant",
      title: "Layout",
      type: "string",
      options: { list: [{ title: "Plain columns (default)", value: "plain" }, { title: "Two cards", value: "cards" }] },
      description: "«Two cards» gives each column the card background, border and the denser type used on the pricing page.",
    }),
    defineField({
      name: "tightTop",
      title: "No gap above",
      type: "boolean",
      description:
        "For a block that continues the section above it rather than starting a new one — it drops the section gap at the top.",
    }),
    defineField({
      name: "isDivider",
      title: "Is Divider",
      type: "boolean",
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
    defineField({
      name: "paddingTop",
      title: "Padding Top",
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
      name: "paddingBottom",
      title: "Padding Bottom",
      type: "string",
      options: {
        list: [
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
    }),
    // vertical alignment
    defineField({
      name: "verticalAlign",
      title: "Vertical Align",
      type: "string",
      options: {
        list: [
          { title: "Top", value: "top" },
          { title: "Center", value: "center" },
          { title: "Bottom", value: "bottom" },
        ],
      },
      initialValue: "top",
    }),
  ],
});

export default doubleTextBlock;
