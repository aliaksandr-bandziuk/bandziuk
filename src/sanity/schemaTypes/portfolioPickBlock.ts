import { defineType, defineField, defineArrayMember } from "sanity";

// Portfolio cards chosen by hand for one landing page, with an honest line
// under the title saying why these projects are shown. Card tags come from
// each project (portfolio.cardTags, else its services). Unlike portfolioBlock
// (which always shows the four latest cases, see CLAUDE.md), this block
// renders exactly the projects picked here, as a slider: three cards per view
// on desktop with arrows, one card and dots on phones.
const portfolioPickBlock = defineType({
  name: "portfolioPickBlock",
  title: "Portfolio Pick Block (chosen projects)",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow", type: "string" }),
    defineField({ name: "title", title: "Title (H2)", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "subtitle",
      title: "Why these projects",
      type: "string",
      description: "One line. If none of the projects is from this industry, say what they have in common with it.",
    }),
    defineField({
      name: "items",
      title: "Projects",
      description: "Tags on each card come from the project itself (its Card tags field, else its services).",
      type: "array",
      validation: (Rule) => Rule.min(1).max(8),
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "portfolio" }],
          options: {
            filter: ({ document }) => ({
              filter: "language == $language",
              params: { language: (document as any).language },
            }),
          },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title: title || "Portfolio pick", subtitle: "Chosen projects" }),
  },
});

export default portfolioPickBlock;
