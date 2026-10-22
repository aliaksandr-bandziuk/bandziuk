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
