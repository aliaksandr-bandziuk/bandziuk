// scripts/fix-llm-seo-temporary-chat.cjs
//
// Correction to the «LLM SEO» article (EN / PL / RU). It advised testing ChatGPT
// in a temporary chat to avoid memory. On 24 October 2026 ChatGPT's temporary chat
// itself states that it may use memory, plugins and custom instructions (the
// screenshot is in drafts/article-figures/shot-chatgpt-temporary-chat.png). The
// advice becomes: test logged out or in a separate account without memory.
//
// Replaces text inside spans only (links and bold are kept). Idempotent; aborts on
// drafts; one transaction, one patch per document.
//
// Usage: node scripts/fix-llm-seo-temporary-chat.cjs           dry run
//        node scripts/fix-llm-seo-temporary-chat.cjs --apply   write

const path = require("path");
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

const FIX = {
  "blog-llm-seo": [
    ["so test it in a temporary chat.", "so test it logged out or in a separate account without memory: as of October 2026, ChatGPT's temporary chat states that it may still use memory and custom instructions."],
    ["in temporary or logged-out sessions, so memory does not bias the answer.", "logged out or in a separate account without memory, so it does not bias the answer; ChatGPT's temporary chat may still use memory."],
  ],
  "blog-llm-seo.pl": [
    ["więc testujcie go w czacie tymczasowym.", "więc testujcie go bez logowania albo na osobnym koncie bez pamięci: w październiku 2026 roku czat tymczasowy ChatGPT informuje, że może korzystać z pamięci i instrukcji niestandardowych."],
    ["w czatach tymczasowych lub bez logowania, żeby pamięć nie zniekształcała odpowiedzi.", "bez logowania albo na osobnym koncie bez pamięci, żeby nie zniekształcała odpowiedzi; czat tymczasowy ChatGPT może nadal korzystać z pamięci."],
  ],
  "blog-llm-seo.ru": [
    ["поэтому проверяйте его во временном чате.", "поэтому проверяйте его без входа в аккаунт или в отдельном аккаунте без памяти: в октябре 2026 года временный чат ChatGPT предупреждает, что может использовать память и пользовательские инструкции."],
    ["во временных чатах или без входа в аккаунт, чтобы память не искажала ответ.", "без входа в аккаунт или в отдельном аккаунте без памяти, чтобы она не искажала ответ; временный чат ChatGPT может всё равно использовать память."],
  ],
};

(async () => {
  const ids = Object.keys(FIX);
  const drafts = await client.fetch(`*[_id in $ids]._id`, { ids: ids.map((i) => `drafts.${i}`) });
  if (drafts.length) { console.log(`Aborting — drafts exist: ${drafts.join(", ")}`); process.exit(1); }
  const docs = await client.fetch(`*[_id in $ids]{_id, _rev, contentBlocks}`, { ids });
  const tx = client.transaction();
  let n = 0;
  for (const id of ids) {
    const doc = docs.find((d) => d._id === id);
    if (!doc) throw new Error(`${id} not found`);
    const sets = {};
    for (const [from, to] of FIX[id]) {
      let hit = false;
      for (const b of (doc.contentBlocks || []).filter((x) => x._type === "textContent"))
        for (const blk of b.content || [])
          for (const sp of blk.children || []) {
            if (typeof sp.text !== "string") continue;
            if (sp.text.includes(to)) { hit = "done"; continue; }
            if (sp.text.includes(from)) {
              hit = true;
              sets[`contentBlocks[_key=="${b._key}"].content[_key=="${blk._key}"].children[_key=="${sp._key}"].text`] = sp.text.replace(from, to);
            }
          }
      console.log(`${id}: ${hit === "done" ? "already fixed" : hit ? "fix" : "NOT FOUND"} — «${from.slice(0, 50)}…»`);
      if (!hit) throw new Error(`${id}: text not found — check by hand`);
    }
    if (Object.keys(sets).length) { tx.patch(id, (p) => p.ifRevisionId(doc._rev).set(sets)); n++; }
  }
  if (!n) return console.log("\nNothing to do.");
  if (!APPLY) return console.log(`\nDry run — ${n} document(s) to change. Add --apply to write.`);
  await tx.commit();
  console.log("\nWritten. The webhook revalidates these pages.");
})().catch((e) => { console.error(e.message || e); process.exit(1); });
