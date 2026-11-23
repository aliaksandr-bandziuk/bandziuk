import { defineType, defineField, defineArrayMember } from "sanity";

// Interactive price picker for the pricing pages (2026-11).
//
// It does not calculate anything. Every figure it can show is written here by
// hand and already appears elsewhere on the site; a visitor's answers only
// decide WHICH of those options is highlighted and which sentences about what
// moves the figure are listed beside it. That keeps the owner's rule intact —
// no price exists on the site that was not stated deliberately.
//
// Shape: the block holds TRACKS (one tab each: ongoing SEO, AI search
// visibility, building a website). A track has its own options and its own
// questions, because the three purchases have nothing in common. Each choice
// names the option ids it picks and, optionally, one sentence it adds to
// «what moves it». The component unions the picks of the selected choices.
//
// The component renders every track and every option on the server, so the
// whole price list is in the HTML whether or not JavaScript runs. The browser
// only decides what is on screen.
const choiceMember = defineArrayMember({
  type: "object",
  name: "pickerChoice",
  fields: [
    defineField({ name: "label", title: "Answer", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "picks",
      title: "Options this answer selects",
      type: "array",
      of: [{ type: "string" }],
      description: "Option ids from the same track. Leave empty if this answer only adds a sentence below.",
    }),
    defineField({ name: "push", title: "Sentence for «what moves it»", type: "text", rows: 2 }),
  ],
  preview: { select: { title: "label", subtitle: "push" } },
});

const questionMember = defineArrayMember({
  type: "object",
  name: "pickerQuestion",
  fields: [
    defineField({ name: "id", title: "Id", type: "string", validation: (r) => r.required() }),
    defineField({ name: "label", title: "Question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "choices", title: "Answers", type: "array", of: [choiceMember], validation: (r) => r.required().min(2) }),
  ],
  preview: { select: { title: "label" } },
});

const optionMember = defineArrayMember({
  type: "object",
  name: "pickerOption",
  fields: [
    defineField({ name: "id", title: "Id", type: "string", description: "Referenced by the answers", validation: (r) => r.required() }),
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "price", title: "Price", type: "string", description: "Exactly as it appears elsewhere on the site", validation: (r) => r.required() }),
    defineField({ name: "term", title: "Term or timeline", type: "string" }),
    defineField({ name: "includes", title: "What it covers", type: "array", of: [{ type: "string" }] }),
  ],
  preview: { select: { title: "name", subtitle: "price" } },
});

export default defineType({
  name: "pricePickerBlock",
  title: "Price picker",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Heading", type: "string", validation: (r) => r.required() }),
    defineField({ name: "intro", title: "Intro line", type: "text", rows: 2 }),

    defineField({
      name: "tracks",
      title: "Tracks (one tab each)",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "pickerTrack",
          fields: [
            defineField({
              name: "id",
              title: "Id",
              type: "string",
              description:
                "Also the URL fragment for this tab, so /pricing#seo opens it. Lower case, no spaces, unique on the page.",
              validation: (r) =>
                r
                  .required()
                  .regex(/^[a-z0-9-]+$/, { name: "lower case letters, digits and hyphens" }),
            }),
            defineField({ name: "label", title: "Tab label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "heading", title: "Heading inside the tab", type: "string", validation: (r) => r.required() }),
            defineField({ name: "lead", title: "Line under the heading", type: "text", rows: 3 }),
            defineField({ name: "options", title: "Options that can be recommended", type: "array", of: [optionMember], validation: (r) => r.required().min(1) }),
            defineField({ name: "questions", title: "Questions", type: "array", of: [questionMember], validation: (r) => r.required().min(1) }),
            defineField({ name: "linkLabel", title: "Link to the service page", type: "string" }),
            defineField({ name: "linkHref", title: "Link destination", type: "string" }),
          ],
          preview: {
            select: { title: "label", options: "options" },
            prepare({ title, options }) {
              const n = Array.isArray(options) ? options.length : 0;
              return { title: title || "Track", subtitle: `${n} options` };
            },
          },
        }),
      ],
      validation: (r) => r.required().min(1),
    }),

    defineField({ name: "coversLabel", title: "Label above «what it covers»", type: "string" }),
    defineField({ name: "movesLabel", title: "Label above «what moves it»", type: "string" }),
    defineField({ name: "noPushText", title: "Text when nothing moves the figure", type: "string" }),
    defineField({ name: "ctaLabel", title: "Button text", type: "string" }),
    defineField({ name: "ctaHref", title: "Button link", type: "string", description: "Usually the anchor of the form on the same page" }),
    defineField({ name: "disclaimer", title: "Disclaimer under the result", type: "text", rows: 3 }),
    defineField({ name: "marginTop", title: "Margin top", type: "string", options: { list: ["small", "medium", "large"] } }),
    defineField({ name: "marginBottom", title: "Margin bottom", type: "string", options: { list: ["small", "medium", "large"] } }),
  ],
  preview: {
    select: { title: "title", tracks: "tracks" },
    prepare({ title, tracks }) {
      const n = Array.isArray(tracks) ? tracks.length : 0;
      return { title: title || "Price picker", subtitle: `${n} tracks` };
    },
  },
});
