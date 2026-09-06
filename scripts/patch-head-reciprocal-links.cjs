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

const crypto = require("crypto");
function key() { return crypto.randomBytes(6).toString("hex"); }

// [headDocId, textContentBlockKey, hrefToChild, beforeText, anchorText]
const PATCHES = [
  ["6d8ed7b1-9fac-49b9-b25f-632f52e94ae3", "5b90845ff9dc", "/pl/oferty/pozycjonowanie-strony-salonu-kosmetycznego-warszawa",
    "Prowadzisz salon konkretnie w Warszawie? ", "Zobacz podejście dopasowane do konkurencji na poziomie dzielnicy."],
  ["79ec90f6-dd97-4c3d-8378-83a4512cc676", "5b90845ff9dc", "/ru/uslugi/prodvizhenie-saita-salona-krasoty-varshava",
    "Ведёте салон именно в Варшаве? ", "Смотрите подход, учитывающий конкуренцию на уровне района."],
  ["55f6003b-f543-4591-8bea-d1a327144c73", "d42b37ca5ef1", "/pl/oferty/pozycjonowanie-strony-warsztatu-samochodowego-warszawa",
    "Prowadzisz warsztat konkretnie w Warszawie? ", "Zobacz podejście dopasowane do pilnych, lokalnych zapytań."],
  ["4238514d-8c66-4766-8b78-71675a466b7a", "d42b37ca5ef1", "/ru/uslugi/prodvizhenie-saita-avtoservisa-varshava",
    "Ведёте автосервис именно в Варшаве? ", "Смотрите подход, учитывающий срочные локальные запросы."],
  ["1c9c94f6-3eb3-4f2a-8e8e-7e7ce88ce196", "5b90845ff9dc", "/pl/oferty/pozycjonowanie-strony-kancelarii-prawnej-warszawa",
    "Prowadzisz kancelarię konkretnie w Warszawie? ", "Zobacz podejście uwzględniające specyfikę stołecznego rynku."],
  ["84798707-8328-4ca5-ad3f-6e4f17c95664", "5b90845ff9dc", "/ru/uslugi/prodvizhenie-saita-yurista-varshava",
    "Ведёте юридическую практику именно в Варшаве? ", "Смотрите подход, учитывающий специфику столичного рынка."],
];

async function main() {
  for (const [docId, blockKey, href, before, anchor] of PATCHES) {
    const defKey = key();
    const newBlock = {
      _key: key(),
      _type: "block",
      style: "normal",
      markDefs: [{ _key: defKey, _type: "link", href }],
      children: [
        { _key: key(), _type: "span", marks: [], text: before },
        { _key: key(), _type: "span", marks: [defKey], text: anchor },
      ],
    };
    await client
      .patch(docId)
      .insert("after", `contentBlocks[_key=="${blockKey}"].content[-1]`, [newBlock])
      .commit();
    console.log(`Patched ${docId}`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
