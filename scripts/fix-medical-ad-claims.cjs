// scripts/fix-medical-ad-claims.cjs
//
// Two corrections to the medical landing pages, checked against primary sources
// on 30.10.2026 (findings in claude/medical-ad-claims.md):
//
// 1. Polish advertising law. The pages sourced the restriction to the Kodeks
//    Etyki Lekarskiej and to the ustawa o zawodach lekarza i lekarza dentysty.
//    Neither holds: the KEL's blanket ban (old art. 63) was replaced on
//    1.01.2025 by art. 71, which PERMITS informing about offered services, and
//    the ustawa o zawodach lekarza has no advertising provision at all. The
//    live restriction is art. 14 ust. 1 ustawy o dzialalnosci lecznicej --
//    content and form of public information about services may not have the
//    features of advertising -- binding every "podmiot wykonujacy dzialalnosc
//    lecznicza", a single practice included, detailed by uchwala NRL 29/11/VI
//    of 16.12.2011 and backed by art. 147a para 2 kodeksu wykroczen.
//
// 2. The Italian case study cited "article 40" of the psychologists' code as
//    forbidding promised outcomes, patient testimonials, discounts and free
//    consultations. Art. 40 (Pubblicita professionale) contains none of those
//    four; it bars conduct aimed at soliciting clients and expressly allows
//    publishing prices. Discounts and tied free consultations are excluded by
//    the CNOP opinion of 11.10.2024 under art. 1 ust. 525 legge 145/2018, not
//    by the code article. The citation is dropped; the behaviour stays.
//
// Every fragment carries the number of strings it must match dataset-wide. A
// wrong count writes nothing. After the edits the script rescans the whole
// dataset for the old wording and refuses to write if any of it survives --
// the fixtures in src/dev-fixtures were patched the same way, so a survivor
// here means a page was edited in Sanity after it was created.
//
// Usage: node scripts/fix-medical-ad-claims.cjs           dry run
//        node scripts/fix-medical-ad-claims.cjs --apply   write

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

const TYPES = ["singlepage", "blog", "portfolio", "homepage"];

// [old fragment, replacement, how many strings it must match across the dataset]
const EDITS = [
  // med-spa-website-design.en.ts
  ["wording that article 40 of the Italian psychologists’ code of conduct forbids", "wording his profession’s advertising rules make risky", 1],
  // orthodontist-website-design.en.ts
  ["works under article 40 of the Italian psychologists’ code of conduct, so", "works under Italian rules on advertising health services, so", 1],
  // plastic-surgeon-website-design.en.ts
  ["anything the Italian psychologists’ code of conduct forbids in article 40:", "anything Italian rules on advertising health services make risky:", 1],
  // seo-for-dermatologists.en.ts
  ["wording that article 40 of the Italian psychologists’ code of conduct rules out;", "wording that Italian rules on advertising health services make risky;", 1],
  // seo-for-plastic-surgeons.en.ts
  ["breaks article 40 of the Italian psychologists’ code of conduct, such as", "breaks Italian rules on advertising health services, such as", 1],
  // seo-for-therapists.en.ts
  ["works under article 40 of the Italian psychologists’ code of conduct, which rules out", "works under Italian rules on advertising health services, which rule out", 1],
  // website-for-psychologists-therapists.en.ts
  ["wording forbidden by article 40 of the Italian psychologists’ code of conduct:", "wording Italian rules on advertising health services make risky:", 1],
  // med-spa-website-design.pl.ts
  ["Włoscy psycholodzy podlegają artykułowi 40 swojego kodeksu etyki, dlatego panel tej strony sam podświetla zakazane zwroty:", "Włoskie zasady reklamy usług medycznych są surowe, dlatego panel tej strony sam podświetla ryzykowne zwroty:", 1],
  // orthodontist-website-design.pl.ts
  ["Giuseppe, psychoterapeuta z Mediolanu, podlega artykułowi 40 włoskiego kodeksu etyki psychologów.", "Giuseppe, psychoterapeutę z Mediolanu, wiążą włoskie zasady reklamy usług medycznych.", 1],
  // plastic-surgeon-website-design.pl.ts
  ["sformułowania, których zabrania artykuł 40 włoskiego kodeksu etyki psychologów:", "sformułowania ryzykowne w świetle włoskich zasad reklamy usług medycznych:", 1],
  // seo-for-plastic-surgeons.pl.ts
  ["przed sformułowaniami zakazanymi przez artykuł 40 włoskiego kodeksu etyki psychologów.", "przed sformułowaniami ryzykownymi w świetle włoskich zasad reklamy usług medycznych.", 1],
  // seo-for-therapists.pl.ts
  ["Giuseppe, psychoterapeuta z Mediolanu, pracuje pod artykułem 40 włoskiego kodeksu etyki psychologów, który zakazuje dokładnie tych rzeczy.", "Giuseppe, psychoterapeutę z Mediolanu, wiążą włoskie zasady reklamy usług medycznych, które obejmują dokładnie te rzeczy.", 1],
  // seo-for-chiropractors.pl.ts, seo-for-dermatologists.pl.ts, website-for-psychologists-therapists.pl.ts
  ["zakazane przez artykuł 40 włoskiego kodeksu etyki psychologów", "ryzykowne w świetle włoskich zasad reklamy usług medycznych", 3],
  // med-spa-website-design.ru.ts
  ["Итальянских психологов связывает статья 40 их этического кодекса, и админка сама подсвечивает запретное", "Итальянские правила рекламы медицинских услуг строги, и админка сама подсвечивает рискованное", 1],
  // orthodontist-website-design.ru.ts
  ["Джузеппе, психотерапевт из Милана, работает по статье 40 итальянского кодекса этики психологов.", "Джузеппе, психотерапевта из Милана, связывают итальянские правила рекламы медицинских услуг.", 1],
  // plastic-surgeon-website-design.ru.ts
  ["то, что запрещает статья 40 итальянского этического кодекса психологов:", "то, что рискованно по итальянским правилам рекламы медицинских услуг:", 1],
  // seo-for-plastic-surgeons.ru.ts
  ["о формулировках, которые запрещает статья 40 итальянского этического кодекса психологов.", "о формулировках, рискованных по итальянским правилам рекламы медицинских услуг.", 1],
  // seo-for-therapists.ru.ts
  ["Джузеппе работает по статье 40 итальянского этического кодекса психологов, которая запрещает обещать", "Джузеппе связывают итальянские правила рекламы медицинских услуг, по которым рискованно обещать", 1],
  // seo-for-dermatologists.ru.ts
  ["запрещённые статьёй 40 итальянского кодекса этики психологов", "рискованные по итальянским правилам рекламы медицинских услуг", 1],
  // website-for-psychologists-therapists.ru.ts
  ["запрещённые статьёй 40 итальянского этического кодекса психологов", "рискованные по итальянским правилам рекламы медицинских услуг", 1],
  // dentist-seo.pl.ts
  ["Informacja, nie reklama: pozycjonowanie gabinetu stomatologicznego a zakaz reklamy lekarzy dentystów", "Informacja bez cech reklamy: pozycjonowanie strony gabinetu stomatologicznego a przepisy dla lekarzy dentystów", 1],
  // dentist-seo.pl.ts
  ["Ustawa o zawodach lekarza i lekarza dentysty oraz Kodeks Etyki Lekarskiej pozwalają lekarzom dentystom informować o swoich usługach, ale nie reklamować ich. Podobna zasada obejmuje placówki medyczne.", "Treść i forma informacji o udzielanych świadczeniach nie mogą mieć cech reklamy — tak brzmi art. 14 ust. 1 ustawy o działalności leczniczej, a przepis wiąże każdy podmiot wykonujący działalność leczniczą, więc i praktykę jednego dentysty, i przychodnię. Kodeks Etyki Lekarskiej od 1 stycznia 2025 roku nie zakazuje już reklamy wprost: art. 71 pozwala lekarzowi posługiwać się informacją o oferowanych usługach, jeśli jest zgodna z zasadami etyki. Granicę wyznaczają więc ustawa i uchwała Naczelnej Rady Lekarskiej nr 29/11/VI z 16 grudnia 2011 roku, która wylicza, co wolno podać do publicznej wiadomości.", 1],
  // dentist-seo.pl.ts
  ["sprzęt, godziny, adres, sposób zapisu i warunki leczenia. Nie powinna obiecywać efektów", "sprzęt, godziny, adres, sposób zapisu i warunki leczenia. Ceny i sposób płatności uchwała dopuszcza właśnie na własnej stronie praktyki — i to jeden z mocniejszych argumentów za tym, żeby strona była. Nie powinna obiecywać efektów", 1],
  // dentist-seo.pl.ts
  ["Piszę podstrony tak, żeby były informacją, a nie zachętą. Nie udzielam porad prawnych;", "Piszę podstrony tak, żeby były informacją, a nie zachętą. Ma to znaczenie także dlatego, że art. 71 Kodeksu Etyki Lekarskiej czyni lekarza odpowiedzialnym za informację opublikowaną w jego imieniu przez osoby trzecie — a więc i przez wykonawcę strony. Nie udzielam porad prawnych;", 1],
  // dentist-seo.pl.ts
  ["Pozycjonowanie strony gabinetu stomatologicznego zgodne z zakazem reklamy:", "Pozycjonowanie strony gabinetu stomatologicznego bez cech reklamy:", 1],
  // dentist-seo.pl.ts
  ["Zakaz reklamy dotyczy każdego z tych kanałów, nie tylko strony.", "Zasada informacji bez cech reklamy dotyczy każdego z tych kanałów, nie tylko strony.", 1],
  // medical-website-design.pl.ts
  ["Ustawa o zawodach lekarza i lekarza dentysty oraz Kodeks Etyki Lekarskiej pozwalają lekarzowi informować o swojej działalności, ale nie pozwalają się reklamować. Podobny warunek przepisy stawiają placówkom medycznym.", "Treść i forma informacji o udzielanych świadczeniach nie mogą mieć cech reklamy — to art. 14 ust. 1 ustawy o działalności leczniczej, wiążący każdy podmiot wykonujący działalność leczniczą, od praktyki jednego lekarza do przychodni. Kodeks Etyki Lekarskiej mówi o tym od 1 stycznia 2025 roku inaczej niż wcześniej: art. 71 pozwala lekarzowi posługiwać się informacją o oferowanych usługach, jeśli jest zgodna z zasadami etyki, i jednocześnie czyni go odpowiedzialnym za to, co publikują w jego imieniu osoby trzecie.", 1],
  // medical-website-design.pl.ts
  ["Opinie pacjentów publikowane na własnej stronie łatwo uznać za element reklamy, dlatego zwykle odsyłam do niezależnych profili.", "Opinie pacjentów to osobna sprawa: uchwała Naczelnej Rady Lekarskiej nr 29/11/VI z 16 grudnia 2011 roku wylicza, co wolno podać do publicznej wiadomości, i opinii na tej liście nie ma — za to wprost dopuszcza ceny i sposób płatności na stronie praktyki. Dlatego ceny podaję wprost, a po opinie odsyłam do niezależnych profili.", 1],
  // medical-website-design.pl.ts
  ["Przepisy i Kodeks Etyki Lekarskiej pozwalają lekarzowi informować o usługach, a nie je reklamować.", "Przepisy pozwalają lekarzowi informować o usługach, ale treść i forma tej informacji nie mogą mieć cech reklamy.", 1],
  // med-spa-seo.pl.ts
  ["Lekarz w Polsce może informować o swojej działalności, ale nie może się reklamować, a podobny warunek przepisy stawiają placówkom wykonującym działalność leczniczą. Do tego reklama leków na receptę kierowana do pacjentów jest zakazana, a reklama wyrobów medycznych przeznaczonych dla profesjonalistów — ograniczona.", "Treść i forma informacji o udzielanych świadczeniach nie mogą mieć cech reklamy — art. 14 ust. 1 ustawy o działalności leczniczej wiąże tu i lekarza prowadzącego praktykę, i klinikę jako podmiot wykonujący działalność leczniczą. Do tego reklama leków na receptę kierowana do pacjentów jest zakazana, a reklamy wyrobów medycznych przeznaczonych dla użytkowników innych niż laicy nie wolno kierować do publicznej wiadomości.", 1],
  // med-spa-seo.pl.ts
  ["Lekarz i placówka lecznicza mogą informować o usługach, a nie je reklamować, a reklama leków na receptę kierowana do pacjentów jest zakazana.", "Lekarz i placówka lecznicza mogą informować o usługach, ale treść i forma tej informacji nie mogą mieć cech reklamy (art. 14 ust. 1 ustawy o działalności leczniczej), a reklama leków na receptę kierowana do pacjentów jest zakazana.", 1],
  // seo-for-plastic-surgeons.pl.ts
  ["Pozycjonowanie kliniki chirurgii plastycznej a zakaz reklamy lekarzy", "Pozycjonowanie strony chirurga plastycznego a przepisy o informacji bez cech reklamy", 1],
  // seo-for-plastic-surgeons.pl.ts
  ["obowiązuje go ta sama zasada co innych lekarzy w Polsce: wolno informować o swojej działalności, nie wolno jej reklamować. Podobnie jest z placówkami medycznymi.", "obowiązuje go ta sama zasada co innych lekarzy w Polsce: treść i forma informacji o świadczeniach nie mogą mieć cech reklamy (art. 14 ust. 1 ustawy o działalności leczniczej). Ten sam przepis wiąże klinikę jako podmiot wykonujący działalność leczniczą.", 1],
  // seo-for-orthodontists.pl.ts
  ["Pozycjonowanie strony gabinetu ortodontycznego a zakaz reklamy lekarzy dentystów", "Pozycjonowanie strony gabinetu ortodontycznego a przepisy o informacji bez cech reklamy", 1],
  // seo-for-orthodontists.pl.ts
  ["jego strona podlega tym samym ograniczeniom co strona każdego dentysty: ma przekazywać rzeczową informację, a nie zachęcać jak reklama.", "jego strona podlega tym samym ograniczeniom co strona każdego dentysty: treść i forma informacji o świadczeniach nie mogą mieć cech reklamy (art. 14 ust. 1 ustawy o działalności leczniczej).", 1],
  // orthodontist-website-design.pl.ts
  ["Ortodonta jako lekarz dentysta nie może się reklamować, a to wpływa na sam projekt, nie tylko na teksty.", "Informacja o świadczeniach ortodonty nie może mieć cech reklamy, a to wpływa na sam projekt, nie tylko na teksty.", 1],
  // optometry-seo.pl.ts
  ["Lekarz okulista w Polsce może informować o swoich usługach, ale nie może ich reklamować;", "Informacja o świadczeniach lekarza okulisty nie może mieć cech reklamy (art. 14 ust. 1 ustawy o działalności leczniczej);", 1],
  // optometry-seo.pl.ts
  ["Lekarzy okulistów obowiązuje zakaz reklamy, a zasady dla optometrystów warto sprawdzić na bieżąco", "Informacja o świadczeniach lekarza okulisty nie może mieć cech reklamy, a zasady dla optometrystów warto sprawdzić na bieżąco", 1],
  // optometrist-website-design.pl.ts
  ["Lekarza okulistę obowiązuje zakaz reklamy, a zasady dla optometrystów warto sprawdzić na bieżąco.", "Informacja o świadczeniach lekarza okulisty nie może mieć cech reklamy, a zasady dla optometrystów warto sprawdzić na bieżąco.", 1],

  // portfolio case study: Giuseppe (en/pl/ru), not covered by the fixtures
  ["is restricted by article 40 of the professional code of conduct: no promised outcomes, no patient testimonials, no discounts, no \"free consultation\".", "is tightly restricted, so his texts avoid promised outcomes, patient testimonials, discounts and a \"free consultation\".", 1],
  ["A deontology check for article 40 built into the CMS", "A deontology check built into the CMS", 1],
  ["A CMS that checks texts against article 40 of the professional code", "A CMS that checks texts against the profession’s advertising rules", 1],
  ["Article 40 of the Italian psychologists' code of conduct restricts advertising. A psychotherapist may not promise outcomes, publish patient testimonials, offer discounts or a \"free consultation\", or push urgency.", "Italian rules on advertising health services restrict what a psychotherapist may say. His pages carry no promised outcomes, no patient testimonials, no discounts, no \"free consultation\" and no pressure of urgency.", 1],
  ["includes a chapter on deontology that cites article 40.", "includes a chapter on deontology and the advertising rules.", 1],
  ["Reklamę psychologów we Włoszech ogranicza natomiast artykuł 40 kodeksu deontologicznego: nie wolno obiecywać efektów, publikować opinii pacjentów, dawać rabatów ani proponować „bezpłatnej konsultacji”.", "Reklamę psychologów we Włoszech ściśle zaś ograniczają przepisy, dlatego teksty obywają się bez obietnic efektów, opinii pacjentów, rabatów i „bezpłatnej konsultacji”.", 1],
  ["Artykuł 40 kodeksu włoskich psychologów ogranicza reklamę. Psychoterapeuta nie może obiecywać efektów, publikować opinii pacjentów, oferować rabatów, „bezpłatnej konsultacji” ani wywoływać presji czasu.", "Włoskie zasady reklamy usług medycznych ograniczają to, co psychoterapeuta może napisać. Jego podstrony obywają się bez obietnic efektów, opinii pacjentów, rabatów, „bezpłatnej konsultacji” i presji czasu.", 1],
  ["А рекламу психологов в Италии ограничивает статья 40 деонтологического кодекса: нельзя обещать результат, публиковать отзывы пациентов, давать скидки и предлагать «бесплатную консультацию».", "А рекламу психологов в Италии правила ограничивают жёстко, поэтому тексты обходятся без обещаний результата, отзывов пациентов, скидок и «бесплатной консультации».", 1],
  ["Проверка текстов на соответствие статье 40 деонтологического кодекса прямо в админке", "Проверка текстов на соответствие правилам рекламы прямо в админке", 1],
  ["Админка сайта: проверка текстов по статье 40 деонтологического кодекса", "Админка сайта: проверка текстов по правилам рекламы медицинских услуг", 1],
  ["Статья 40 деонтологического кодекса итальянских психологов ограничивает рекламу. Психотерапевт не может обещать результат, публиковать отзывы пациентов, предлагать скидки, «бесплатную консультацию» или давить срочностью.", "Итальянские правила рекламы медицинских услуг ограничивают то, что психотерапевт может написать. Его страницы обходятся без обещаний результата, отзывов пациентов, скидок, «бесплатной консультации» и давления срочностью.", 1],
];
// Strings allowed to keep the old wording. The ban on advertising by Polish
// attorneys really did exist until 2023, and the attorney article describes
// its end (uchwala NRA 93/2023), so "zakaz reklamy" there is a fact about the
// past, not a stale claim. Checked 29.10.2026.
const ALLOW = [{ label: "zakaz reklamy", id: /^blog-attorney-seo/ }];
const allowed = (label, id) => ALLOW.some((a) => a.label === label && a.id.test(id));


// Anything matching these must be gone once the edits are in.
const LEFTOVERS = [
  ["artykul 40 / article 40 / statya 40", /(artyku\u0142|artyku\u0142owi|artyku\u0142em|article|\u0441\u0442\u0430\u0442\u044c\u044f|\u0441\u0442\u0430\u0442\u044c\u0435|\u0441\u0442\u0430\u0442\u044c\u0451\u0439)\s+40\b/i],
  ["zakaz reklamy", /zakaz(?:em|u)?\s+reklamy/i],
  ["nie moze sie reklamowac", /nie\s+(?:mo\u017ce|wolno|pozwalaj\u0105)\s*(?:si\u0119|jej|ich|je)?\s*reklamowa\u0107/i],
  ["ustawa o zawodach lekarza", /zawodach lekarza/i],
];

const clone = (v) => JSON.parse(JSON.stringify(v));

// Walk every string in the document, whatever the field or block type.
function mapStrings(node, fn) {
  if (typeof node === "string") return fn(node);
  if (Array.isArray(node)) return node.map((x) => mapStrings(x, fn));
  if (node && typeof node === "object") {
    const out = {};
    for (const k of Object.keys(node)) out[k] = mapStrings(node[k], fn);
    return out;
  }
  return node;
}

async function main() {
  const docs = await client.fetch(
    `*[_type in $types && !(_id in path("drafts.**"))]`,
    { types: TYPES },
  );
  console.log(`scanned ${docs.length} published document(s)\n`);

  // --dump prints every string that still carries the old wording, in full and
  // verbatim, so a fragment can be copied from it without guessing at where a
  // sentence starts. Read-only; nothing is written.
  if (process.argv.includes("--dump")) {
    const seen = new Set();
    for (const [label, rx] of LEFTOVERS) {
      for (const d of docs) {
        mapStrings(d, (s) => {
          if (!rx.test(s)) return s;
          const key = d._id + "\u0000" + s;
          if (seen.has(key)) return s;
          seen.add(key);
          console.log(`[${label}] ${d.language || "--"} ${d._type} ${d._id}`);
          console.log(JSON.stringify(s));
          console.log("");
          return s;
        });
      }
    }
    console.log(`${seen.size} string(s) carry the old wording.`);
    return;
  }

  const counts = EDITS.map(() => 0);
  const touched = new Map(); // _id -> { doc, next }

  for (const doc of docs) {
    let changed = false;
    // One pass over every string in the document, applying all fragments to it.
    const next = mapStrings(clone(doc), (s) => {
      let out = s;
      EDITS.forEach(([oldText, newText], i) => {
        if (!out.includes(oldText)) return;
        counts[i] += out.split(oldText).length - 1;
        out = out.split(oldText).join(newText);
        changed = true;
      });
      return out;
    });
    if (changed) touched.set(doc._id, { doc, next });
  }

  // A fragment matching nothing means one of two very different things: the
  // edit was already applied, or the fragment is wrong. Telling them apart is
  // what makes a second run readable -- count the REPLACEMENT too and say
  // "done" when it is already in place, instead of crying BAD over success.
  // Raw strings, NOT JSON.stringify of the documents: serializing turns a
  // double quote into \" and a replacement containing "free consultation"
  // then never matches, which reported two applied fragments as failures.
  const alreadyParts = [];
  for (const d of docs) mapStrings(d, (s) => (alreadyParts.push(s), s));
  const already = alreadyParts.join("\u0000");
  let bad = false;
  let done = 0;
  EDITS.forEach(([oldText, newText, expect], i) => {
    const got = counts[i];
    if (got === expect) {
      console.log(`ok    ${got}/${expect}  ${oldText.slice(0, 74)}`);
      return;
    }
    if (got === 0 && already.split(newText).length - 1 >= expect) {
      done++;
      console.log(`done  already applied  ${oldText.slice(0, 74)}`);
      return;
    }
    bad = true;
    console.log(`BAD   ${got}/${expect}  ${oldText.slice(0, 74)}`);
  });
  if (done) console.log(`\n${done} of ${EDITS.length} fragment(s) were already applied by an earlier run.`);

  console.log(`\ndocuments to change: ${touched.size}`);
  for (const { doc } of touched.values()) {
    const slug = doc.slug?.[doc.language]?.current || doc.slug?.current || doc._id;
    console.log(`  ${doc.language || "--"}  ${doc._type}  ${slug}`);
  }

  // A draft would be published over our change later, so stop.
  for (const id of touched.keys()) {
    const d = await client.fetch(`*[_id == $id][0]._id`, { id: `drafts.${id}` });
    if (d) { console.log(`\nAborting -- a draft exists for ${id}; publish or discard it first.`); process.exit(1); }
  }

  // Self-rescan on the post-edit text of the WHOLE dataset, not just the pages
  // we touched: the old wording must not survive anywhere.
  const after = docs.map((d) => (touched.get(d._id)?.next) ?? d);
  const survivors = [];
  for (const [label, rx] of LEFTOVERS) {
    for (const d of after) {
      mapStrings(d, (s) => {
        const m = s.match(rx);
        if (m && !allowed(label, d._id)) {
          const i = Math.max(0, m.index - 60);
          survivors.push({ label, type: d._type, lang: d.language, id: d._id, ctx: s.slice(i, m.index + m[0].length + 60) });
        }
        return s;
      });
    }
  }
  if (survivors.length) {
    console.log(`\nold wording still present in ${survivors.length} string(s):`);
    for (const s of survivors) console.log(`  [${s.label}] ${s.lang} ${s.type} ${s.id}\n      ...${s.ctx}...`);
  } else {
    console.log("\nself-rescan: none of the old wording survives.");
  }

  if (bad || survivors.length) {
    console.log("\nNot writing: fix the fragments above first.");
    process.exit(1);
  }
  if (!touched.size) {
    return console.log(
      done === EDITS.length
        ? "\nNothing to do: every fragment is already applied."
        : "\nNothing to do.",
    );
  }
  if (!APPLY) return console.log(`\nDry run -- ${touched.size} document(s), nothing written. Add --apply to write.`);

  const tx = client.transaction();
  for (const { doc, next } of touched.values()) {
    const set = {};
    for (const k of Object.keys(next)) {
      if (k.startsWith("_") && k !== "_type") continue;
      if (JSON.stringify(next[k]) !== JSON.stringify(doc[k])) set[k] = next[k];
    }
    tx.patch(doc._id, (p) => p.ifRevisionId(doc._rev).set(set));
  }
  await tx.commit();
  console.log(`\nWritten: ${touched.size} document(s)`);
  console.log("The webhook revalidates these pages.");
}

main().catch((err) => { console.error(err.message || err); process.exit(1); });
