// scripts/apply-medical-links.cjs
//
// Run after the 15 medical, dental and veterinary pages (stage 2, groups 2 and
// 2b) are created with create-landing.cjs and deployed.
//
// 1. Services hubs (EN / PL / RU). The section is found by a page it already
//    lists, not by its title (PL/RU titles differ):
//    - SEO section (the one that lists SEO for construction companies):
//      EN dentist SEO, local SEO for dentists, SEO for doctors, medical SEO,
//      healthcare SEO, veterinary SEO; PL dentist SEO; RU dentist, medical and
//      veterinary SEO.
//    - Website section (the one that lists the dental clinic website):
//      EN dental, medical and veterinary website design; PL and RU website for
//      doctors and clinics.
// 2. One sentence at the end of the main text of existing pages, found by slug:
//    - dental clinic website EN / PL / RU → dentist SEO (+ local, design / doctors' site)
//    - veterinary clinic website EN / RU → veterinary SEO (+ design)
//    - PL Warsaw dental SEO → all-Poland dental SEO page
//    - PL Warsaw clinic SEO → website for doctors
//
// Idempotent; aborts on drafts; one transaction, one patch per change.
//
// Usage: node scripts/apply-medical-links.cjs           dry run
//        node scripts/apply-medical-links.cjs --apply   write

const path = require("path");
const crypto = require("crypto");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local"), quiet: true });

const APPLY = process.argv.includes("--apply");
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const key = () => crypto.randomBytes(6).toString("hex");
const plain = (b) => (b.children || []).map((c) => c.text).join("");
function para(...segments) {
  const markDefs = [];
  const children = segments.map((s) => {
    if (typeof s === "string") return { _type: "span", _key: key(), text: s, marks: [] };
    const mk = key();
    markDefs.push({ _type: "link", _key: mk, href: s[1] });
    return { _type: "span", _key: key(), text: s[0], marks: [mk] };
  });
  return { _type: "block", _key: key(), style: "normal", markDefs, children };
}
const id = (g, lang) => (lang === "en" ? `singlepage-${g}` : `singlepage-${g}.${lang}`);

const NEW = [
  ["dentist-seo", "en"], ["dentist-seo", "pl"], ["dentist-seo", "ru"], ["local-seo-for-dentists", "en"], ["dental-website-design", "en"],
  ["seo-for-doctors", "en"], ["healthcare-seo", "en"], ["medical-seo", "en"], ["medical-seo", "ru"],
  ["medical-website-design", "en"], ["medical-website-design", "pl"], ["medical-website-design", "ru"],
  ["veterinary-seo", "en"], ["veterinary-seo", "ru"], ["veterinary-website-design", "en"],
].map(([g, l]) => id(g, l));

// section = the hub block that already lists `marker`
const HUB = [
  { lang: "en", marker: "singlepage-seo-for-construction-companies", refs: ["dentist-seo", "local-seo-for-dentists", "seo-for-doctors", "medical-seo", "healthcare-seo", "veterinary-seo"].map((g) => id(g, "en")) },
  { lang: "en", marker: "singlepage-dental-clinic-website", refs: ["dental-website-design", "medical-website-design", "veterinary-website-design"].map((g) => id(g, "en")) },
  { lang: "pl", marker: "singlepage-seo-for-construction-companies.pl", refs: [id("dentist-seo", "pl")] },
  { lang: "pl", marker: "singlepage-dental-clinic-website.pl", refs: [id("medical-website-design", "pl")] },
  { lang: "ru", marker: "singlepage-seo-for-construction-companies.ru", refs: [id("dentist-seo", "ru"), id("medical-seo", "ru"), id("veterinary-seo", "ru")] },
  { lang: "ru", marker: "singlepage-dental-clinic-website.ru", refs: [id("medical-website-design", "ru")] },
];

const TEXT = [
  { lang: "en", slug: "dental-clinic-website",
    para: para("Being found by new patients is covered on the ", ["dentist SEO", "/dentist-seo"], " and ", ["local SEO for dentists", "/local-seo-for-dentists"], " pages; how the site looks and leads a patient to booking, on the ", ["dental website design", "/dental-website-design"], " page.") },
  { lang: "pl", slug: "strona-dla-gabinetu-stomatologicznego",
    para: para("O tym, jak pacjenci znajdują gabinet w Google, piszę na stronie ", ["pozycjonowanie strony gabinetu stomatologicznego", "/pl/pozycjonowanie-strony-gabinetu-stomatologicznego"], ", a o stronie dla lekarza innej specjalności — na stronie ", ["strona internetowa dla lekarza", "/pl/strona-internetowa-dla-lekarza"], ".") },
  { lang: "ru", slug: "sait-dlya-stomatologicheskoy-kliniki",
    para: para("Как пациенты находят стоматологию в поиске и на картах, описано на странице ", ["SEO-продвижение стоматологии", "/ru/seo-prodvizhenie-stomatologii"], "; сайт для клиники другого профиля — на странице ", ["сайт для клиники и врача", "/ru/sait-dlya-kliniki"], ".") },
  { lang: "en", slug: "veterinary-clinic-website",
    para: para("Being found by pet owners nearby is covered on the ", ["veterinary SEO", "/veterinary-seo"], " page; how the site looks and leads an owner to booking, on the ", ["veterinary website design", "/veterinary-website-design"], " page.") },
  { lang: "ru", slug: "sait-dlya-veterinarnoy-kliniki",
    para: para("Как владельцы животных находят клинику в поиске, на картах и в ответах ИИ, описано на странице ", ["продвижение ветеринарной клиники", "/ru/prodvizhenie-veterinarnoy-kliniki"], ".") },
  { lang: "pl", slug: "pozycjonowanie-strony-gabinetu-stomatologicznego-warszawa",
    para: para("Gabinety spoza Warszawy znajdą więcej na stronie ", ["pozycjonowanie strony gabinetu stomatologicznego", "/pl/pozycjonowanie-strony-gabinetu-stomatologicznego"], ".") },
  { lang: "pl", slug: "pozycjonowanie-strony-przychodni-warszawa",
    para: para("Jeśli przychodnia potrzebuje nowej strony, opisuję to na stronie ", ["strona internetowa dla lekarza", "/pl/strona-internetowa-dla-lekarza"], ".") },
];

async function main() {
  const exist = await client.fetch(`*[_id in $ids]._id`, { ids: NEW });
  if (exist.length !== NEW.length) {
    console.log(`Aborting — not in Sanity yet: ${NEW.filter((i) => !exist.includes(i)).join(", ")}`);
    process.exit(1);
  }
  const hubs = await client.fetch(
    `*[_type == "singlepage" && pageType == "servicesIndex" && !(_id in path("drafts.**"))]{
      _id, _rev, language, "blocks": contentBlocks[_type == "relatedServicesBlock"]{ _key, title, "refs": items[]._ref }
    }`,
  );
  const docs = [];
  for (const t of TEXT) {
    const d = await client.fetch(
      `*[_type == "singlepage" && language == $lang && slug[$lang].current == $s && !(_id in path("drafts.**"))][0]{_id, _rev, contentBlocks}`,
      { lang: t.lang, s: t.slug },
    );
    if (!d) throw new Error(`${t.lang} page «${t.slug}» not found`);
    t.doc = d; docs.push(d);
  }
  const touched = [...hubs.map((h) => h._id), ...docs.map((d) => d._id)];
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: touched.map((i) => `drafts.${i}`) });
  if (drafts.length) { console.log(`Aborting — drafts exist, publish or discard them first: ${drafts.join(", ")}`); process.exit(1); }

  const patches = [];
  for (const h of HUB) {
    const hub = hubs.find((x) => x.language === h.lang);
    if (!hub) throw new Error(`${h.lang} services hub not found`);
    const sec = hub.blocks.find((b) => (b.refs || []).includes(h.marker));
    if (!sec) throw new Error(`${h.lang} hub: no section lists ${h.marker}; sections: ${hub.blocks.map((b) => b.title).join(" | ")}`);
    const missing = h.refs.filter((r) => !(sec.refs || []).includes(r));
    if (!missing.length) { console.log(`skip  ${h.lang} hub «${sec.title}»: already lists all`); continue; }
    console.log(`add   ${h.lang} hub «${sec.title}»: ${missing.join(", ")}`);
    patches.push({ id: hub._id, rev: hub._rev, op: (p) => p.insert("after", `contentBlocks[_key=="${sec._key}"].items[-1]`, missing.map((r) => ({ _key: key(), _type: "reference", _ref: r }))) });
  }

  for (const t of TEXT) {
    const blocks = (t.doc.contentBlocks || []).filter((x) => x._type === "textContent");
    const b = blocks.find((x) => x.layout === "guide") || blocks[0];
    if (!b) throw new Error(`${t.lang} «${t.slug}»: no text block`);
    if ((b.content || []).some((x) => plain(x) === plain(t.para))) { console.log(`skip  ${t.lang} «${t.slug}»: sentence already there`); continue; }
    const last = b.content[b.content.length - 1];
    console.log(`\n${t.lang} «${t.slug}» (end of the main text, after «${plain(last).slice(0, 50)}…»):\n  ${plain(t.para)}`);
    patches.push({ id: t.doc._id, rev: t.doc._rev, op: (p) => p.insert("after", `contentBlocks[_key=="${b._key}"].content[_key=="${last._key}"]`, [t.para]) });
  }

  if (!patches.length) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${patches.length} change(s), nothing written. Add --apply to write.`);
  const tx = client.transaction();
  const seen = new Set();
  for (const p of patches) {
    const first = !seen.has(p.id); seen.add(p.id);
    tx.patch(p.id, (q) => p.op(first ? q.ifRevisionId(p.rev) : q));
  }
  await tx.commit();
  console.log(`\nWritten: ${[...seen].join(", ")}`);
  console.log("The webhook revalidates these pages.");
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
