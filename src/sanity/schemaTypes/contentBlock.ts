import { defineArrayMember, defineType, defineField } from "sanity";

export default defineType({
  name: "contentBlock",
  title: "Content Block",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    // A code block, kept as text rather than an image. The site's own rule is
    // that anything a machine might quote — formulas, tables, and now code —
    // stays text; before this there was no way to show code in an article at all.
    defineArrayMember({
      type: "object",
      name: "codeBlock",
      title: "Code",
      fields: [
        defineField({
          name: "language",
          title: "Language",
          type: "string",
          options: {
            list: [
              { title: "TypeScript", value: "ts" },
              { title: "JavaScript", value: "js" },
              { title: "Markdown", value: "markdown" },
              { title: "HTML", value: "html" },
              { title: "JSON", value: "json" },
              { title: "Bash", value: "bash" },
              { title: "Plain text", value: "text" },
            ],
          },
          initialValue: "text",
        }),
        defineField({ name: "code", title: "Code", type: "text", rows: 12 }),
      ],
      preview: {
        select: { code: "code", language: "language" },
        prepare: ({ code, language }: { code?: string; language?: string }) => ({
          title: String(code ?? "").slice(0, 60).trim() || "Code",
          subtitle: language ?? "text",
        }),
      },
    }),
    // A fragment of the work itself shown inside a chapter of a long service
    // text (2026-11): the visitor's path, an audit row, a code change, a phone
    // with contact buttons, a checkout, a form before and after, GA4 events.
    // The words live in the component, per language, so an editor only picks
    // which fragment goes where.
    defineArrayMember({
      type: "object",
      name: "pageSnippet",
      title: "Snippet (fragment of the work)",
      fields: [
        defineField({
          name: "kind",
          title: "Which fragment",
          type: "string",
          options: {
            list: [
              { title: "Visitor's path: entry → offer → form → request", value: "funnel" },
              { title: "Audit report: problem, cost, effort", value: "auditReport" },
              { title: "Code change of a contact form", value: "codeDiff" },
              { title: "Phone: Call / WhatsApp / Route + ready WhatsApp message", value: "localPhone" },
              { title: "Shop checkout: Paczkomat, BLIK, invoice", value: "checkout" },
              { title: "Contact form before and after", value: "formBeforeAfter" },
              { title: "Key events in Google Analytics 4", value: "ga4Events" },
              { title: "Short request form (a band between two chapters)", value: "shortForm" },
            ],
          },
          validation: (Rule) => Rule.required(),
        }),
      ],
      preview: {
        select: { kind: "kind" },
        prepare: ({ kind }: { kind?: string }) => ({ title: `Snippet: ${kind ?? "—"}` }),
      },
    }),
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
        defineField({
          name: "caption",
          title: "Caption",
          type: "contentBlock",
          description: "Optional caption shown below the image",
        }),
      ],
    }),
  ],
});
