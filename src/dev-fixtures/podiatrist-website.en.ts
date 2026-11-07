// Landing page fixture: podiatrist website design (EN), group
// «podiatrist-website». New page, create-landing.cjs.
//
// Why (07.11.2026). Measured in the 102-industry delta: «podiatrist website
// design» 40 and «web design for podiatrists» 40, both owner forms, 150 for
// the industry. See claude/industry-delta-2026-11-07.md.
//
// Cannibalisation check — the neighbours are /medical-website-design (doctors
// and clinics in general) and /dental-website-design. They already own:
// the clinic structure, doctor profiles, online booking in general, patient
// data in forms, multi-location clinics. NONE of that is repeated here.
//
// What is specific to a podiatry practice and carries this page: the word
// «podiatrist» names two different businesses depending on the country, so
// the site has to be built for the one you are; the visitor is usually in
// pain today, which makes the earliest slot the most valuable element on the
// first screen; prices are asked per procedure, not per consultation;
// before-and-after photographs are the decisive images and the hardest to
// publish well; diabetic foot brings referrals from other doctors; custom
// orthoses are two appointments rather than a product.
//
// Owner's rules: no medical promises, no outcome claims; design included in
// the build price; every page covers AI search; never say there are no
// clients from the visitor's industry.
import { p, h2, li, link, k } from "./pt";

export const podiatristWebsiteEn = {
  lang: "en",
  group: "podiatrist-website",
  slug: "podiatrist-website-design",
  title: "Podiatrist website design",
  heading:
    "Podiatrist website design: for the person whose foot hurts today and for the doctor who refers them",
  excerpt:
    "Websites for podiatry and foot clinics: the earliest free slot on the first screen, prices listed per procedure, before-and-after photographs published properly, and a page for diabetic foot patients and referring doctors. Design included, from €2,000.",
  seo: {
    metaTitle: "Podiatry Clinic Website Design and Build from €2,000",
    metaDescription:
      "Websites for podiatry clinics: earliest slot on the first screen, prices per procedure, before-and-after photos, diabetic foot page. From €2,000.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Podiatry and foot clinics", "From €2,000", "Answer within 1 working day"],
  heroPhonePoints: ["Earliest slot: tomorrow", "Ingrown nail", "Prices per procedure", "Book a visit"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Podiatry clinic website: procedure prices, before-and-after gallery, diabetic foot page, design included", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page for one procedure or for custom orthoses", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Redesign of a podiatry clinic website with rankings kept", price: 1000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What I build",
      title: "What a podiatry clinic website build covers",
      items: [
        { _key: k("o"), iconName: "clock", title: "The earliest free slot, visible at once", text: "One line your front desk can edit" },
        { _key: k("o"), iconName: "list-checks", title: "Prices listed per procedure", text: "Not one figure for a consultation" },
        { _key: k("o"), iconName: "image", title: "A before-and-after gallery that holds up", text: "Consent, context, no promises" },
        { _key: k("o"), iconName: "users", title: "A page for diabetic foot and referrals", text: "What you take and what you send on" },
        { _key: k("o"), iconName: "footprints", title: "Custom orthoses as two appointments", text: "Measurement, fitting, what it costs" },
        { _key: k("o"), iconName: "shield-check", title: "Hygiene and sterilisation shown plainly", text: "The question nobody asks out loud" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why a podiatry website depends on which kind of podiatrist you are"),
        p("I design and build websites for podiatry practices and foot clinics, and design comes with the build rather than on a separate invoice. The first decision is not visual: the word podiatrist names two different businesses. In the United States it is a physician with surgical training; across much of Europe it is a specialist in foot care working alongside doctors rather than as one. A site built for the wrong one of those two reads as either overreaching or underqualified, and both cost appointments."),
        p(
          "So the site states the profession, the training behind it and the limits of what the practice does, in the first paragraph rather than on an about page. If you run a general clinic with several specialties, the page you want is ",
          link("medical website design", "/medical-website-design"),
          " — the clinic structure and doctor profiles live there and are not repeated here.",
        ),

        h2("The first screen answers the person whose foot hurts today"),
        p("Most people reach a podiatry site in discomfort and with one question: can somebody look at this soon. An ingrown nail, a crack that will not heal, pain that made walking to work unpleasant this morning. Everything else on the site is secondary to that question, and a first screen built around the practice's philosophy loses to a competitor's that says «earliest slot: tomorrow, 11:40»."),
        li("the earliest free slot as one line the front desk can change in seconds, or an honest «we are booked into next week»;"),
        li("the two or three complaints people arrive with most often, as links straight to their own pages;"),
        li("a phone number that is tappable, because this visitor is standing up and holding the phone in one hand;"),
        li("whether you see children, diabetic patients and people who need a home visit — three questions that otherwise become three phone calls."),

        h2("Prices listed per procedure, not per consultation"),
        p("Podiatry is unusual among medical services in that visitors ask the price of a specific thing: nail correction, a partial nail plate removal, a wart treatment, custom orthoses, treatment of a diabetic foot ulcer. One figure for an appointment leaves them guessing and sends them to whoever published a table."),
        p("The site carries a procedure-level price list where each line names the procedure, says whether it covers one foot or both, and says what the follow-up visit costs. That is the page competitors most often leave out, and it is usually the second most visited page on the site after the home page."),

        h2("Before-and-after photographs: the decisive images on a podiatry site"),
        p("No amount of text persuades like a pair of photographs, and no part of a podiatry site is easier to get wrong. What makes a gallery work: written consent from the patient for publication, kept on file; identical framing, distance and light in both shots, because a flattering angle reads as a trick; a caption saying what was done and over how long; and no claim that the result is typical. Publish ten pairs that meet that standard rather than forty that do not."),

        h2("A page for diabetic foot patients and the doctors who refer them"),
        p("Diabetic foot care is where podiatry stops being cosmetic and starts being clinically serious, and it is where referrals come from: diabetologists, GPs, dermatologists, nurses in diabetes clinics. They need to know what you take, what you will not take, how fast you can see an urgent case and whether you write back after the visit."),
        p("Patients looking for the same page need the opposite tone: what the first visit involves, why regular appointments matter, and that an inspection today is better than a decision next month. Two audiences, one page, two blocks — and it is usually the page that brings the practice its steadiest work."),

        h2("Custom orthoses explained as two appointments, not one product"),
        p("Insoles are the most misunderstood thing a podiatry practice sells. People expect to walk in and buy them, and the actual path is a measurement visit, manufacture, a fitting visit and often an adjustment. A page that says so — with the total cost, the time between the visits and what happens if they do not feel right — removes the complaint that follows every order placed under the wrong expectation."),

        h2("Showing hygiene and sterilisation without turning the site into a brochure"),
        p("The unspoken fear in foot care is catching something. Nobody asks about sterilisation at the front desk, and everybody wonders. A short block with real photographs of the autoclave and the instrument packaging, and one sentence on what is single-use, does more for conversion than a paragraph about the practice's values."),

        h2("What a podiatrist website costs and how long it takes"),
        p(
          "A practice website starts at €2,000 with design included. A landing page for one procedure or for custom orthoses is €700–1,400. A redesign that keeps rankings starts at €1,000. A landing page takes two to three weeks, a full site four to six. The number of procedures with their own pages, the number of languages and how quickly photographs and consents are ready move both the price and the schedule. The figures are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: sites where the first contact and the price list decide",
      subtitle:
        "A psychotherapist's bilingual practice site in Milan, a consultant site built around a single expertise, a multilingual real estate platform with a catalogue and filters, an education agency site that grew from one country to ten, and a renovation company site with a premium look.",
      picks: [
        "psychotherapist-website-milan",
        "consultant-website-design-retail-analytics",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "seo-case-study-education-agency",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for your podiatry clinic website",
      subtitle: "I answer within one working day: what I would build, in which languages, and what it costs.",
      contextLabel: "Clinic name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of practice?", options: ["A single specialist", "A clinic with several specialists", "Podiatry inside a larger clinic", "Something else"] },
        { _key: k("z"), question: "Do you treat diabetic foot?", options: ["Yes, a large share", "Occasionally", "No", "We would like to"] },
        { _key: k("z"), question: "Do you make custom orthoses?", options: ["Yes, in house", "Yes, through a lab", "No", "Planning to"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("A podiatry clinic website that AI assistants can read (GEO, AEO)"),
        p("Patients now ask an assistant before they open a map: a podiatrist who treats diabetic foot, one who can see them this week, one who makes orthoses, one who speaks their language. The assistant answers from text it can read, and a clinic whose procedures live inside photographs, whose prices sit in a PDF and whose availability is only known by phone does not appear in that answer at all."),
        p(
          "What makes a clinic quotable is the same thing that makes it convenient for a human: procedures as text with their prices, the conditions you treat named plainly, opening hours and languages as data, the earliest slot in one maintained sentence. Bringing an existing site to that state is ",
          link("AI search readiness", "/services/ai-search-readiness"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Podiatrist website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a podiatrist website cost?", "From €2,000 with design included, €700–1,400 for a landing page covering one procedure or custom orthoses, from €1,000 for a redesign that keeps rankings. The number of procedures with their own pages, the number of languages and the readiness of photographs move the figure."],
          ["How is this different from a general medical clinic website?", "Three things: the visitor usually has pain today, so the earliest free slot outranks everything else on the first screen; prices are asked per procedure rather than per consultation; and before-and-after photographs carry the decision. A general clinic site is organised around specialties and doctors instead."],
          ["Should we publish a price list?", "Yes, at procedure level. It is the page competitors most often omit and usually the second most visited page on a podiatry site. Each line names the procedure, says whether it covers one foot or both, and gives the follow-up price."],
          ["Can we publish before-and-after photographs?", "With written consent from the patient, kept on file, identical framing and light in both shots, a caption saying what was done and over how long, and no claim that the result is typical. Ten pairs that meet that standard beat forty that do not."],
          ["Do you build the diabetic foot section?", "Yes, as one page serving two audiences: referring doctors, who need to know what you take and how fast, and patients, who need to know what the first visit involves. It is usually the page that brings the steadiest work."],
          ["Will patients be able to book online?", "Where it suits the practice. Some clinics want an open calendar; others want a request form their front desk triages, because an ingrown nail and a routine check are not the same slot. The site is built for whichever one you actually run."],
          ["Do you work with medical practices?", "Yes, and the method accounts for it: wording without outcome promises, a review step before publishing, careful handling of health data in forms, and a photograph workflow that keeps consent attached to the image."],
          ["We also do medical pedicure. Should that be on the same site?", "Yes, but as its own page with its own wording, because it is a different purchase made by a different person. Mixing it into the clinical pages makes the practice read as a salon to patients and as a salon to referring doctors, which costs both."],
          ["Can you redesign our site without losing search traffic?", "Yes. Every existing address is mapped, every changed one redirected, and pages that already bring patients keep their text instead of being rewritten for a new look."],
          ["Who owns the site?", "You do: the code, the domain, the hosting account, the content and every access credential. Nothing stays with me as leverage."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Ordering a podiatry clinic website: what to send me"),
        p("Tell me which procedures you want their own pages, whether you treat diabetic foot and take referrals, whether you make custom orthoses, what your price list looks like today, which languages your patients speak and whether you have photographs with consent. Send the current website link if there is one. I answer within one working day with what I would build and what it costs."),
      ],
    },
  ],
};
