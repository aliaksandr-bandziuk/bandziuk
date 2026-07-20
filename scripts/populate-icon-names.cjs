// scripts/populate-icon-names.cjs
//
// One-off content migration for the Icons stage: assigns `iconName` to
// existing documents/array-items across homepage, footer, and singlepage
// content blocks (stepsBlock/gridBlock/contactMethodsBlock/serviceFeature).
// Existing `icon` image fields are left untouched — they remain the
// fallback if iconName is ever cleared.
//
// Usage:
//   node scripts/populate-icon-names.cjs             — print mapping table only (dry run)
//   node scripts/populate-icon-names.cjs --apply      — print table, then patch via Sanity client

const path = require("path");
const { createClient } = require("@sanity/client");
require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2025-08-04",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const APPLY = process.argv.includes("--apply");

// ─── serviceFeature icon library (15 docs, no locale variants) ────────────
const SERVICE_FEATURE_ICON_MAP = {
  "7babcba1-ea84-410e-b7f7-63c6059c58aa": "users", // Feature 01 — direct collaboration / transparent process
  "9983978d-e60a-4e6e-8338-1f28c3848dfe": "gauge", // Feature 02 — Core Web Vitals
  "923f60bd-5c53-496d-b777-7c27a0fa6991": "code", // Feature 03 — custom dev / technical complexity
  "b899fe88-5b28-4f45-91a8-6e7d87869437": "search", // Feature 04 — SEO / performance (mixed, SEO dominant)
  "92927324-6423-4b03-a904-56bea2243855": "settings", // Feature 05 — maintainability / UX / AI search
  "558146a2-796e-4773-969e-860e0d9db2f0": "zap", // Feature 06 — JS rendering / payments
  "a0d0934f-55f9-43cc-8a24-892c9474c5a1": "layers", // Feature 07 — structure / keyword research / local SEO
  "995c7982-272e-45d8-b0a2-b1f27f9ec693": "target", // Feature 08 — strategy / demand / market analysis
  "5055fb52-2944-4000-a837-68ed07c0f25b": "sparkles", // Feature 09 — AI-search readiness / integrations
  "41aae7d3-0859-4617-a323-c54f8dec5b33": "database", // Feature 10 — CRM & database integration
  "0e3fdb0a-f0aa-49d5-832c-0d2d7896d28c": "plug", // Feature 11 — custom API development
  "b36cc1c4-d2f0-404c-aa60-671aceb3fa9e": "shield-check", // Feature 12 — security / reliability
  "3567d5b9-75a3-4c42-9986-06ae3c4d6b2e": "file-text", // Feature 13 — reporting / modern stack / AI monitoring
  "044d7909-f835-4b26-96a6-faadb758e0df": "rocket", // Feature 14 — speed / booking / mobile-first
  "da45eada-e63a-42e6-8b03-866a629f5e6e": "layout", // Feature 15 — responsive mobile-first design
};

// ─── homepage (shared _keys across en/pl/ru documents) ────────────────────
const SERVICE_ITEMS_ICON_MAP = {
  b86121d803ec: "code", // Website Development
  "354e6605eddf": "plug", // CMS Integration & API Work
  daeee4522739: "search", // SEO Strategy & Optimization
  "03cdde7a6a06": "layout", // Landing Pages Development
  "3619bdc43510": "sparkles", // AI SEO & GEO Optimization
  "183d542fbec9": "gauge", // Performance & Code Audit
};

const PROBLEM_ITEMS_ICON_MAP = {
  "6073f8b342b5": "target", // looks fine but no leads
  "8f5a004488623d2fac51347df369131a": "gauge", // page builder, slow
  "7e106dc9ef1c345aae6524e8326d27b6": "search", // invisible in Google/AI
  "8426ebe2472cc3e9aaf5e7c2e07e240c": "trending-up", // SEO done, no results
  d1be82ffa2f109d9ea6baebc45382174: "layout", // Figma design, no developer
  "29d956cbe890096a9370fb1ca5826f7d": "users", // developer slow/gone
  "3634c4ededf732f27cd07285c8f0947f": "message-circle", // freelancers overpromised
  d38ecf3a02c5222d6eda034f7582e561: "file-text", // live but no analytics/funnel
};

const STEP_ITEMS_ICON_MAP = {
  "2d2051fabc88": "target", // 01 Understanding the Goal
  "7a17d917f7f1": "search", // 02 Auditing What's There
  "9df29ff068d0": "layout", // 03 Building the Right Strategy
  "3c24fcdf8225": "wrench", // 04 Implementation
  "320a93e9de26": "gauge", // 05 Measuring & Optimizing
  "5a79d4589a3f": "rocket", // 06 Growing Further
};

// ─── footer social links (matched by label — keys differ per locale) ──────
const SOCIAL_LABEL_ICON_MAP = {
  whatsapp: "whatsapp",
  facebook: "facebook",
  linkedin: "linkedin",
};

// ─── singlepage content blocks — shared-key templates ──────────────────────
const GRID_2C7D_ICON_MAP = {
  // block _key "2c7dcffcd789" — the ~50-page "What You Get" template
  "7d3574015939": "trending-up",
  e654be6ce7f9: "layers",
  "136ca6018909": "zap",
  f8b3c37ab413: "sparkles",
  c43dd10df408: "target",
  "6aa2869ca992": "rocket",
  "7310750ac823": "map-pin",
};

const GRID_D68D_ICON_MAP = {
  // block _key "d68d6dcd92b2" — About page "My expertise" (en/pl/ru)
  f906cdcd6b62: "gauge",
  "78d5ca12a425": "search",
  d747d82ebad8: "code",
  "10cf8da35df6": "layout",
  "8dafc74fb82c": "globe",
  feaa0842414c: "server",
};

const CONTACT_METHODS_ICON_MAP = {
  // block _key "882914b91820" — Contact page's 4 methods (en/pl/ru)
  "4d8edf060e7d": "whatsapp",
  dc1402eacbf9: "mail",
  "8d77b05742e5": "phone",
  "81ff5cc45980": "linkedin",
};

// ─── singlepage groups with per-locale-unique keys — matched by title text ─
// (property-developer, psychologists-therapists, real-estate-agency: each
// cloned from a template but re-keyed per locale, so _key can't be used)
const TITLE_ICON_MAP = {
  // property-developer gridBlock
  "Full project & unit catalog": "database",
  "Pełny katalog inwestycji i mieszkań": "database",
  "Полный каталог проектов и объектов": "database",
  "Smart filters": "settings",
  "Inteligentne filtry": "settings",
  "Умные фильтры": "settings",
  "CRM integration": "plug",
  "Integracja CRM": "plug",
  "Интеграция CRM": "plug",
  "Multilingual for international buyers": "globe",
  "Wielojęzyczność dla kupujących z zagranicy": "globe",
  "Мультиязычность для иностранных покупателей": "globe",
  "Tuned for lead generation": "target",
  "Nastawiona na generowanie leadów": "target",
  "Настройка на лидогенерацию": "target",
  "Analytics, speed and SEO": "trending-up",
  "Analityka, szybkość i SEO": "trending-up",
  "Аналитика, скорость и SEO": "trending-up",

  // property-developer / psychologists-therapists / real-estate-agency stepsBlock (shared generic pattern)
  "Discuss the task": "message-circle",
  "Omówienie zadania": "message-circle",
  "Обсуждаем задачу": "message-circle",
  "Обсуждение задачи": "message-circle",
  "Design the structure": "layout",
  "Projektowanie struktury": "layout",
  "Проектируем структуру": "layout",
  "Проектирую структуру": "layout",
  "Build and integrate": "wrench",
  "Realizacja i integracja": "wrench",
  "Разрабатываю и интегрирую": "wrench",
  "Build and optimize": "wrench",
  "Realizacja i optymalizacja": "wrench",
  "Разрабатываю и оптимизирую": "wrench",
  "Launch and optimize": "rocket",
  "Wdrożenie i optymalizacja": "rocket",
  "Запускаю и оптимизирую": "rocket",
  "Launch and support": "rocket",
  "Wdrożenie i wsparcie": "rocket",
  "Запускаю и поддерживаю": "rocket",

  // psychologists-therapists gridBlock
  "Trust-building presentation": "shield-check",
  "Prezentacja budująca zaufanie": "shield-check",
  "Подача, формирующая доверие": "shield-check",
  "Easy booking": "check",
  "Łatwe umawianie wizyt": "check",
  "Удобная запись": "check",
  "SEO, AEO & GEO ready": "search",
  "Gotowość pod SEO, AEO i GEO": "search",
  "Готовность к SEO, AEO и GEO": "search",
  "Fast and accessible": "gauge",
  "Szybka i dostępna": "gauge",
  "Быстрый и доступный": "gauge",
  "Blog for organic growth": "file-text",
  "Blog dla wzrostu organicznego": "file-text",
  "Блог для органического роста": "file-text",
  "Mobile-first, multilingual": "globe",
  "Mobile-first, wielojęzyczność": "globe",
  "Mobile-first, мультиязычность": "globe",

  // real-estate-agency gridBlock
  "Property catalog with smart filters": "database",
  "Katalog ofert z inteligentnymi filtrami": "database",
  "Каталог объектов с умными фильтрами": "database",
  Multilingual: "globe",
  "Wielojęzyczność": "globe",
  "Мультиязычность": "globe",
  "Analytics and pixels": "trending-up",
  "Analityka i piksele": "trending-up",
  "Аналитика и пиксели": "trending-up",
  "Speed and SEO": "gauge",
  "Szybkość i SEO": "gauge",
  "Скорость и SEO": "gauge",
};

function resolveIcon(byKeyMap, key, title) {
  if (byKeyMap[key]) return byKeyMap[key];
  if (title && TITLE_ICON_MAP[title.trim()]) return TITLE_ICON_MAP[title.trim()];
  return null;
}

async function main() {
  const summary = { patched: 0, skipped: 0, failed: 0, byType: {} };
  const rows = []; // for the printed table
  const patches = new Map(); // docId -> { setFields }

  function queuePatch(docId, fieldPath, iconName) {
    if (!patches.has(docId)) patches.set(docId, {});
    patches.get(docId)[fieldPath] = iconName;
  }

  function record(type, docId, lang, key, title, iconName) {
    rows.push({ type, docId, lang, key, title, iconName: iconName || "(no match)" });
    if (iconName) {
      summary.byType[type] = (summary.byType[type] || 0) + 1;
    } else {
      summary.skipped += 1;
    }
  }

  // 1. serviceFeature library
  const serviceFeatures = await client.fetch(`*[_type == "serviceFeature"]{_id, title}`);
  for (const sf of serviceFeatures) {
    const icon = SERVICE_FEATURE_ICON_MAP[sf._id] || null;
    record("serviceFeature", sf._id, "-", sf._id, sf.title, icon);
    if (icon) queuePatch(sf._id, "iconName", icon);
  }

  // 2. homepage
  const homepages = await client.fetch(`*[_type == "homepage"]{
    _id, language,
    "services": servicesSection.serviceItems[]{_key, title},
    "problems": problemsSection.problemsItems[]{_key, problem},
    "steps": processSection.stepItems[]{_key, title}
  }`);
  for (const h of homepages) {
    (h.services || []).forEach((item) => {
      const icon = SERVICE_ITEMS_ICON_MAP[item._key] || null;
      record("homepage.services", h._id, h.language, item._key, item.title, icon);
      if (icon) queuePatch(h._id, `servicesSection.serviceItems[_key=="${item._key}"].iconName`, icon);
    });
    (h.problems || []).forEach((item) => {
      const icon = PROBLEM_ITEMS_ICON_MAP[item._key] || null;
      record("homepage.problems", h._id, h.language, item._key, item.problem, icon);
      if (icon) queuePatch(h._id, `problemsSection.problemsItems[_key=="${item._key}"].iconName`, icon);
    });
    (h.steps || []).forEach((item) => {
      const icon = STEP_ITEMS_ICON_MAP[item._key] || null;
      record("homepage.steps", h._id, h.language, item._key, item.title, icon);
      if (icon) queuePatch(h._id, `processSection.stepItems[_key=="${item._key}"].iconName`, icon);
    });
  }

  // 3. footer social links (matched by label)
  const footers = await client.fetch(`*[_type == "footer"]{
    _id, language,
    "socialLinks": contactsSection.socialLinks[]{_key, label}
  }`);
  for (const f of footers) {
    (f.socialLinks || []).forEach((item) => {
      const norm = (item.label || "").trim().toLowerCase();
      const icon = SOCIAL_LABEL_ICON_MAP[norm] || null;
      record("footer.socialLinks", f._id, f.language, item._key, item.label, icon);
      if (icon) queuePatch(f._id, `contactsSection.socialLinks[_key=="${item._key}"].iconName`, icon);
    });
  }

  // 4. singlepage blocks
  const singlepages = await client.fetch(`*[_type == "singlepage" && count(contentBlocks[_type in ["stepsBlock","gridBlock","contactMethodsBlock"]]) > 0]{
    _id, title, language,
    "blocks": contentBlocks[_type in ["stepsBlock","gridBlock","contactMethodsBlock"]]{
      _key, _type,
      "steps": steps[]{_key, title},
      "items": items[]{_key, title},
      "contacts": contacts[]{_key, title}
    }
  }`);
  for (const sp of singlepages) {
    for (const block of sp.blocks) {
      if (block._type === "gridBlock") {
        const map = block._key === "2c7dcffcd789" ? GRID_2C7D_ICON_MAP : block._key === "d68d6dcd92b2" ? GRID_D68D_ICON_MAP : {};
        (block.items || []).forEach((item) => {
          const icon = resolveIcon(map, item._key, item.title);
          record(`singlepage.gridBlock(${block._key})`, sp._id, sp.language, item._key, item.title, icon);
          if (icon) {
            queuePatch(
              sp._id,
              `contentBlocks[_key=="${block._key}"].items[_key=="${item._key}"].iconName`,
              icon
            );
          }
        });
      } else if (block._type === "stepsBlock") {
        (block.steps || []).forEach((item) => {
          const icon = resolveIcon({}, item._key, item.title);
          record(`singlepage.stepsBlock(${block._key})`, sp._id, sp.language, item._key, item.title, icon);
          if (icon) {
            queuePatch(
              sp._id,
              `contentBlocks[_key=="${block._key}"].steps[_key=="${item._key}"].iconName`,
              icon
            );
          }
        });
      } else if (block._type === "contactMethodsBlock") {
        const map = block._key === "882914b91820" ? CONTACT_METHODS_ICON_MAP : {};
        (block.contacts || []).forEach((item) => {
          const icon = resolveIcon(map, item._key, item.title);
          record(`singlepage.contactMethodsBlock(${block._key})`, sp._id, sp.language, item._key, item.title, icon);
          if (icon) {
            queuePatch(
              sp._id,
              `contentBlocks[_key=="${block._key}"].contacts[_key=="${item._key}"].iconName`,
              icon
            );
          }
        });
      }
    }
  }

  // ─── print condensed mapping table (group by type + icon, not every row) ──
  console.log("=== PROPOSED ICON MAPPING (condensed by type) ===\n");
  const byType = {};
  rows.forEach((r) => {
    byType[r.type] = byType[r.type] || [];
    byType[r.type].push(r);
  });
  for (const [type, items] of Object.entries(byType)) {
    console.log(`--- ${type} (${items.length} item-occurrences) ---`);
    const seen = new Set();
    items.forEach((r) => {
      const dedupeKey = `${r.key}|${r.title}|${r.iconName}`;
      if (seen.has(dedupeKey)) return;
      seen.add(dedupeKey);
      console.log(`  [${r.key}] "${r.title}" -> ${r.iconName}`);
    });
  }

  // ─── duplicate check within same rendered group (type+docId+lang) ─────────
  console.log("\n=== DUPLICATE CHECK (same icon twice within one rendered group) ===");
  const groups = {};
  rows.forEach((r) => {
    if (r.iconName === "(no match)") return;
    const gKey = `${r.type}::${r.docId}`;
    groups[gKey] = groups[gKey] || [];
    groups[gKey].push(r.iconName);
  });
  let dupFound = false;
  for (const [gKey, icons] of Object.entries(groups)) {
    const counts = {};
    icons.forEach((i) => (counts[i] = (counts[i] || 0) + 1));
    const dups = Object.entries(counts).filter(([, c]) => c > 1);
    if (dups.length) {
      dupFound = true;
      console.log(`  DUPLICATE in ${gKey}: ${dups.map(([i, c]) => `${i}x${c}`).join(", ")}`);
    }
  }
  if (!dupFound) console.log("  none found");

  console.log(`\n=== TOTALS ===`);
  console.log(`Rows with a match: ${rows.filter((r) => r.iconName !== "(no match)").length}`);
  console.log(`Rows with NO match (left as-is, image fallback stays active): ${rows.filter((r) => r.iconName === "(no match)").length}`);
  console.log(`Documents queued for patch: ${patches.size}`);

  if (!APPLY) {
    console.log("\nDry run only (no --apply flag) — nothing was written.");
    return;
  }

  console.log("\n=== APPLYING PATCHES ===");
  let patched = 0;
  let failed = 0;
  for (const [docId, fields] of patches.entries()) {
    try {
      await client.patch(docId).set(fields).commit({ autoGenerateArrayKeys: false });
      patched += 1;
      console.log(`OK    ${docId} (${Object.keys(fields).length} fields)`);
    } catch (err) {
      failed += 1;
      console.log(`FAIL  ${docId}: ${err.message.split("\n")[0]}`);
    }
  }
  console.log(`\n=== PATCH SUMMARY ===`);
  console.log(`Patched: ${patched}`);
  console.log(`Failed: ${failed}`);
  console.log(`Skipped (no icon rule matched, ${rows.filter((r) => r.iconName === "(no match)").length} item-occurrences): left untouched, image fallback remains active`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
