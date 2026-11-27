import { defineType, defineField } from "sanity";

const textContent = defineType({
  name: "textContent",
  title: "Text Content Block",
  type: "object",
  fields: [
    defineField({
      name: "content",
      title: "Content Editor",
      type: "contentBlock",
    }),
    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      description:
        "Guide: long text split into sections by H2. Desktop shows a contents list beside the text; phones show the first section open and the rest collapsed (the text stays in the page for search engines).",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Guide (contents + collapsible sections)", value: "guide" },
          { title: "Chapters (H2 on the left, pinned while its chapter is read)", value: "chapters" },
        ],
        layout: "radio",
      },
      initialValue: "default",
    }),
    defineField({
      name: "backgroundColor",
      title: "Background Color",
      type: "string",
    }),
    defineField({
      name: "paddingVertical",
      title: "Vertical Padding",
      type: "string",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
    }),
    defineField({
      name: "paddingHorizontal",
      title: "Horizontal Padding",
      type: "string",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
    }),
    defineField({
      name: "eyebrow",
      title: "Eyebrow",
      type: "string",
      description: "Small label above the first heading. Used on the pricing page to keep the sections labelled.",
    }),
    defineField({
      name: "compact",
      title: "Compact typography",
      type: "boolean",
      description:
        "Smaller headings and a document-like rhythm instead of the landing scale. Used on long reading pages such as pricing.",
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
          { title: "None", value: "none" },
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
          { title: "None", value: "none" },
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
    }),
    defineField({
      name: "textAlign",
      title: "Text Alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
      },
      initialValue: "left",
    }),
    defineField({
      name: "textColor",
      title: "Text Color",
      type: "string",
    }),
    defineField({
      name: "backgroundFull",
      title: "Background Full",
      type: "string",
    }),
  ],
});

export default textContent;
