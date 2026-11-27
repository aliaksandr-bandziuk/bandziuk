import { defineType, defineField, defineArrayMember } from "sanity";

// A short request form for landing pages: name, email and one line about the
// business. Sends to /api/email like the other forms; the referenced form
// document supplies the field labels, validation and agreement texts.
const quoteFormBlock = defineType({
  name: "quoteFormBlock",
  title: "Quote Form Block (short form)",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Title (H2)", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "subtitle", title: "Text under the title", type: "string" }),
    defineField({
      name: "contextLabel",
      title: "Label of the third field",
      type: "string",
      description: "e.g. “Restaurant name or current website”. Sent as the message.",
    }),
    defineField({ name: "contextPlaceholder", title: "Placeholder of the third field", type: "string" }),
    defineField({ name: "buttonText", title: "Button text", type: "string" }),
    defineField({ name: "note", title: "Small note under the button", type: "string" }),
    defineField({
      name: "formVariant",
      title: "Form variant (A/B test)",
      description:
        "Auto: half of the pages get the short form, half the quiz, decided by the page itself and stable. Pick one to pin it. A quiz without questions falls back to the short form.",
      type: "string",
      options: {
        list: [
          { title: "Auto (50/50 by page)", value: "auto" },
          { title: "Short form", value: "short" },
          { title: "Quiz: questions first, then contacts", value: "quiz" },
        ],
        layout: "radio",
      },
      initialValue: "auto",
    }),
    defineField({
      name: "quizQuestions",
      title: "Quiz questions",
      description: "Two questions with 2–5 short answers each, in the page's own terms (e.g. “What kind of place?” — Café, Restaurant, Bar). Fill them on every page: with Auto the quiz may be the one shown.",
      type: "array",
      validation: (Rule) => Rule.max(3),
      of: [
        defineArrayMember({
          name: "quizQuestion",
          type: "object",
          fields: [
            defineField({ name: "question", title: "Question", type: "string", validation: (Rule) => Rule.required() }),
            defineField({
              name: "options",
              title: "Answers",
              type: "array",
              of: [{ type: "string" }],
              validation: (Rule) => Rule.min(2).max(5),
            }),
          ],
          preview: { select: { title: "question" } },
        }),
      ],
    }),
    defineField({
      name: "returnsIntro",
      title: "Line above “What comes back”",
      type: "string",
      description: "Replaces the text under the title when the list below is filled.",
    }),
    defineField({
      name: "returns",
      title: "What comes back",
      description: "Up to 3 things the visitor gets in reply, each with a short line under it. Shown in the left column of the card.",
      type: "array",
      validation: (Rule) => Rule.max(3),
      of: [
        defineArrayMember({
          name: "quoteReturn",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "note", title: "Line under it", type: "string" }),
          ],
          preview: { select: { title: "title", subtitle: "note" } },
        }),
      ],
    }),
    defineField({
      name: "form",
      title: "Form texts",
      type: "reference",
      to: [{ type: "formStandardDocument" }],
      validation: (Rule) => Rule.required(),
      options: {
        filter: ({ document }) => ({
          filter: "language == $language",
          params: { language: (document as any).language },
        }),
      },
    }),
    defineField({
      name: "banded",
      title: "Background band",
      type: "boolean",
      description:
        "Leave empty for the default for this block type. Set it to place the block on the surface band or on the page background — used to keep long pages alternating.",
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Quote form", subtitle: "Short form" }),
  },
});

export default quoteFormBlock;
