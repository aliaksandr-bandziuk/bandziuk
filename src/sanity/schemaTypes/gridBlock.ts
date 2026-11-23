import { defineType, defineField, defineArrayMember } from "sanity";
import { ICON_NAME_OPTIONS } from "./iconOptions";

const gridBlock = defineType({
  name: "gridBlock",
  title: "Grid Block",
  type: "object", // Change to object
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Icon",
              type: "image",
              fields: [
                {
                  name: "alt",
                  title: "Alt Text",
                  type: "string",
                },
              ],
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
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "string",
            }),
            // defineField({
            //   name: "linkLabel",
            //   title: "Link Label",
            //   type: "string",
            // }),
            // defineField({
            //   name: "linkDestination",
            //   title: "Link Destination",
            //   type: "string",
            // }),
          ],
        }),
      ],
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      description: "Small label above the heading.",
    }),
    defineField({
      name: "align",
      title: "Heading alignment",
      type: "string",
      options: { list: ["center", "left"] },
      description: "Centre is the default. Left is used on pages whose other sections are left-aligned.",
    }),
    defineField({
      name: "variant",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Cards with icons (default)", value: "cards" },
          { title: "Dense answer cards, no icons", value: "answers" },
          { title: "Numbered rows, two columns", value: "numbered" },
        ],
      },
      description:
        "«Answers» and «numbered» are the pricing-page layouts: left-aligned, denser, built for reading rather than for a landing.",
    }),
    defineField({
      name: "tightTop",
      title: "No gap above",
      type: "boolean",
      description:
        "For a block that continues the section above it rather than starting a new one — it drops the section gap at the top.",
    }),
    defineField({
      name: "banded",
      title: "Background band",
      type: "boolean",
      description:
        "Leave empty for the default for this block type. Set it to place the block on the surface band or on the page background — used to keep long pages alternating.",
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

export default gridBlock;
