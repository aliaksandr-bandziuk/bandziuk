// Task 2/3 merge: fold business-website-development's unique "strategic process" framing
// into the core Website Development service page (all 3 locales), before the old page is
// redirected and removed. Content sourced verbatim from the backed-up docs in drafts/.
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

function block(text, style = "normal") {
  return {
    _key: Math.random().toString(16).slice(2, 14),
    _type: "block",
    style,
    markDefs: [],
    children: [{ _key: Math.random().toString(16).slice(2, 14), _type: "span", marks: [], text }],
  };
}

const CONTENT = {
  "8701994a-d9ba-4230-84b5-2e491b87cb61": {
    heading: "Every project starts with strategy",
    paragraphs: [
      "Building a business website without a clear strategy usually leads to a predictable result: the site exists, but it doesn't move the needle on growth.",
      "Before building anything, I define the role the website plays in your sales process, how users should move through it, where and why conversion decisions happen, and how it will scale as the business grows. Sites built this way tend to produce results faster, need fewer redesigns, and stay effective as the business evolves.",
    ],
  },
  "b35e57c9-9cce-4ebd-ab05-5121ffa38fef": {
    heading: "Każdy projekt zaczyna się od strategii",
    paragraphs: [
      "Brak strategii przy tworzeniu strony internetowej dla firmy zazwyczaj kończy się tym, że strona „jest”, ale nie spełnia swojej roli.",
      "Dlatego cały proces zaczynam od określenia, jaką funkcję strona ma pełnić w procesie sprzedaży, jakie decyzje podejmuje użytkownik, które elementy mają największy wpływ na konwersję i jak strona będzie rozwijana w przyszłości. Dzięki temu powstaje strona, która jest spójna, logiczna i gotowa na długoterminowy rozwój.",
    ],
  },
  "21d6001f-5181-4249-aef2-5ed9425bf81d": {
    heading: "Каждый проект начинается со стратегии",
    paragraphs: [
      "Создание сайта для бизнеса без стратегии почти всегда приводит к одинаковому результату: сайт существует, но не влияет на рост компании.",
      "Поэтому при разработке сайта под ключ я заранее определяю, какие элементы должны работать на результат — заявки, обращения или обращения из органического трафика. Сайты, разработанные со стратегией, в среднем получают больше целевых обращений уже в первые месяцы, быстрее выходят в рост по SEO за счёт правильной структуры и требуют меньше доработок в будущем.",
    ],
  },
};

async function main() {
  for (const [id, c] of Object.entries(CONTENT)) {
    const doc = await client.fetch(`*[_id == $id][0]{_id, contentBlocks}`, { id });
    const newBlock = {
      _key: Math.random().toString(16).slice(2, 14),
      _type: "textContent",
      textAlign: "left",
      content: [block(c.heading, "h2"), block(""), block(c.paragraphs[0]), block(""), block(c.paragraphs[1])],
    };
    const newContentBlocks = [...doc.contentBlocks];
    newContentBlocks.splice(2, 0, newBlock); // insert after intro textContent[1], before tableBlock
    console.log(`${APPLY ? "PATCHING" : "WOULD PATCH"} ${id} — inserting at index 2, new length ${newContentBlocks.length}`);
    if (APPLY) {
      await client.patch(id).set({ contentBlocks: newContentBlocks }).commit();
      console.log(`  PATCHED ${id}`);
    }
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
