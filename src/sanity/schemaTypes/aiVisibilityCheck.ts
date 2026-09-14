import { defineField, defineType } from "sanity";

/**
 * One run of the free AI visibility checker (/tools/ai-visibility-checker).
 * Written by /api/ai-check, never by hand: the API counts these documents to
 * enforce its daily limits, so editing or duplicating one changes who gets
 * blocked. Every field is read-only for that reason. Each document is also a
 * lead: someone who has just seen what assistants say about their company.
 */
export default defineType({
  name: "aiVisibilityCheck",
  title: "AI visibility checks",
  type: "document",
  readOnly: true,
  fields: [
    defineField({ name: "createdAt", title: "Created", type: "datetime" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["running", "done", "failed"] },
    }),
    defineField({ name: "company", title: "Company", type: "string" }),
    defineField({ name: "domain", title: "Website", type: "string" }),
    defineField({ name: "service", title: "Service", type: "string" }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "lang", title: "Language", type: "string" }),
    defineField({
      name: "ipHash",
      title: "IP hash",
      description: "Salted SHA-256 of the visitor IP, used only for rate limiting.",
      type: "string",
    }),
    defineField({ name: "cost", title: "DataForSEO cost, USD", type: "number" }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "object",
      fields: [
        defineField({ name: "recommendationAsked", type: "number" }),
        defineField({ name: "recommended", type: "number" }),
        defineField({ name: "aboutAsked", type: "number" }),
        defineField({ name: "recognised", type: "number" }),
        defineField({ name: "answered", type: "number" }),
        defineField({ name: "siteCited", type: "number" }),
        defineField({ name: "failed", type: "number" }),
      ],
    }),
    defineField({
      name: "answers",
      title: "Answers",
      type: "array",
      of: [
        {
          type: "object",
          name: "aiCheckAnswer",
          fields: [
            defineField({ name: "engine", type: "string" }),
            defineField({ name: "kind", type: "string" }),
            defineField({ name: "prompt", type: "text" }),
            defineField({ name: "named", type: "boolean" }),
            defineField({ name: "siteCited", type: "boolean" }),
            defineField({ name: "noInformation", type: "boolean" }),
            defineField({ name: "excerpt", type: "text" }),
            defineField({ name: "sources", type: "array", of: [{ type: "string" }] }),
            defineField({ name: "error", type: "string" }),
          ],
          preview: {
            select: { engine: "engine", kind: "kind", named: "named" },
            prepare: ({ engine, kind, named }: { engine?: string; kind?: string; named?: boolean }) => ({
              title: `${engine ?? "?"} · ${kind ?? "?"}`,
              subtitle: named ? "named" : "not named",
            }),
          },
        },
      ],
    }),
  ],
  orderings: [
    { title: "Newest first", name: "createdAtDesc", by: [{ field: "createdAt", direction: "desc" }] },
  ],
  preview: {
    select: { company: "company", email: "email", createdAt: "createdAt", status: "status" },
    prepare: ({ company, email, createdAt, status }: { company?: string; email?: string; createdAt?: string; status?: string }) => ({
      title: company || "Unnamed check",
      subtitle: [email, createdAt?.slice(0, 10), status].filter(Boolean).join(" · "),
    }),
  },
});
