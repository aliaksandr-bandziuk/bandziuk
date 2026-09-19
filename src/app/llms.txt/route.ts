import groq from "groq";
import { client } from "@/sanity/sanity.client";
import { PERSON_NAME, SITE_URL, personNode, organizationNode } from "@/lib/schema/identity";

// /llms.txt (llmstxt.org): a Markdown map of the site for AI assistants and
// agents, built from the same Sanity content as the pages, so it cannot drift.
// English only, with pointers to the Polish and Russian versions. A path with
// a dot skips the proxy, so this static route answers directly.
export const revalidate = 86400;

type Doc = {
  path?: string;
  title?: string;
  description?: string;
};

const text = (v: unknown) => (typeof v === "string" ? v.replace(/\s+/g, " ").trim() : "");

async function singlePages(): Promise<Doc[]> {
  const items: { slug: string; parent?: string; title?: string; description?: string }[] =
    await client.fetch(groq`*[_type == "singlepage" && language == "en" && defined(slug.en.current)]{
      "slug": slug.en.current,
      "parent": parentPage->slug.en.current,
      "title": coalesce(seo.metaTitle, title),
      "description": coalesce(seo.metaDescription, excerpt)
    }`);
  // Same parent-chain walk as generateStaticParams: only pages whose chain
  // resolves are live, so nothing unreachable is listed.
  const paths: Record<string, string> = {};
  items.forEach((i) => { if (!i.parent) paths[i.slug] = `/${i.slug}`; });
  let added = true;
  while (added) {
    added = false;
    items.forEach((i) => {
      if (i.parent && paths[i.parent] && !paths[i.slug]) {
        paths[i.slug] = `${paths[i.parent]}/${i.slug}`;
        added = true;
      }
    });
  }
  return items
    .filter((i) => paths[i.slug])
    .map((i) => ({ path: paths[i.slug], title: text(i.title), description: text(i.description) }))
    .sort((a, b) => a.path!.localeCompare(b.path!));
}

async function collection(type: "blog" | "portfolio"): Promise<Doc[]> {
  const base = type === "blog" ? "/blog" : "/portfolio";
  const items: { slug: string; title?: string; description?: string }[] = await client.fetch(
    groq`*[_type == $type && language == "en" && defined(slug.en.current)] | order(publishedAt desc){
      "slug": slug.en.current,
      "title": coalesce(seo.metaTitle, title),
      "description": coalesce(seo.metaDescription, excerpt)
    }`,
    { type },
  );
  return items.map((i) => ({ path: `${base}/${i.slug}`, title: text(i.title), description: text(i.description) }));
}

const line = (d: Doc) =>
  `- [${d.title || d.path}](${SITE_URL}${d.path})${d.description ? `: ${d.description}` : ""}`;

export async function GET() {
  const [pages, posts, cases] = await Promise.all([singlePages(), collection("blog"), collection("portfolio")]);
  const services = pages.filter((p) => p.path!.startsWith("/services"));
  const other = pages.filter((p) => !p.path!.startsWith("/services"));

  const body = [
    `# ${PERSON_NAME} — SEO & Web Development`,
    "",
    `> ${text(personNode().description)}`,
    "",
    text(organizationNode().description),
    "",
    "The site is available in English (no prefix), Polish (/pl) and Russian (/ru). The pages below are the English versions; each page links to its translations.",
    "",
    "## Main pages",
    "",
    `- [Home](${SITE_URL}/): services, case studies, work process, reviews, FAQ and prices`,
    `- [Blog](${SITE_URL}/blog): articles on SEO, AI search visibility and web development`,
    `- [Portfolio](${SITE_URL}/portfolio): case studies with results`,
    `- [Polish version](${SITE_URL}/pl)`,
    `- [Russian version](${SITE_URL}/ru)`,
    "",
    "## Services",
    "",
    ...services.map(line),
    "",
    "## Case studies",
    "",
    ...cases.map(line),
    "",
    "## Blog",
    "",
    ...posts.map(line),
    "",
    "## Optional",
    "",
    ...other.map(line),
    `- [Sitemap](${SITE_URL}/sitemap.xml)`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
