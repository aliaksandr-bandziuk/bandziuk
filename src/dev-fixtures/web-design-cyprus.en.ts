// Page fixture: web design in Cyprus (EN), group «web-design-cyprus».
// New page, create-landing.cjs.
//
// Why (06.11.2026). Search Console, 90 days, design-worded Cyprus queries:
//   website design cyprus 388 (61.6) · web design cyprus 306 (50.4) ·
//   web design in cyprus 264 (59.4) · website design in cyprus 169 (59.4) ·
//   web design services cyprus 60 (43.4) · cyprus web design 50 (61.2)
// About 1240 impressions, all answered by /web-development-cyprus from
// positions 43-62 — the fifth and sixth page of results. No page on the site
// carries the word design for Cyprus at all.
//
// The owner's rule: development, design and SEO are three services bought by
// three different people and belong on three different pages.
//
// The second owner's rule shapes the spine: web design is NOT sold separately,
// it comes with the build and sits inside its price. So this page catches the
// design searcher and tells them plainly what they are buying — a design that
// someone will actually build — instead of pretending to sell mockups.
//
// Nothing here repeats /web-development-cyprus (island, cities, what a site
// includes) or /web-development-limassol (companies based in Limassol).
//
// The Cyprus work is real and sits in the portfolio: a multilingual real
// estate platform. Nothing beyond that is claimed.
import { p, h2, li, link, k } from "./pt";

export const webDesignCyprusEn = {
  lang: "en",
  group: "web-design-cyprus",
  slug: "web-design-cyprus",
  title: "Web design in Cyprus",
  heading: "Web design in Cyprus: a design made to be built, not just presented",
  excerpt:
    "I design and build websites for companies in Cyprus. Design is part of the build rather than a separate invoice, because a design nobody can build is worth nothing. English, Greek and Russian on one layout, speed kept on the phone, from €2,000.",
  seo: {
    metaTitle: "Web Design in Cyprus: Design Built In, from €2,000",
    metaDescription:
      "Web design for companies in Cyprus: layouts made to be built, English, Greek and Russian on one page, speed kept on mobile. Design included, from €2,000.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design included in the build", "Websites from €2,000", "Answer within 1 working day"],
  heroPhonePoints: ["Services", "Request a quote", "English · Ελληνικά · Русский", "Call"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Website for a Cyprus company, design included", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page designed and built for one service", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Redesign of an existing Cyprus website", price: 1000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What I do",
      title: "What web design covers on a Cyprus project",
      items: [
        { _key: k("o"), iconName: "palette", title: "Design and build together", text: "One person decides and ships it" },
        { _key: k("o"), iconName: "languages", title: "Layouts for three languages", text: "English, Greek and Russian in one design" },
        { _key: k("o"), iconName: "smartphone", title: "Phone first, not phone later", text: "Checked where the traffic actually is" },
        { _key: k("o"), iconName: "image", title: "Photography plan", text: "What to shoot and what to leave out" },
        { _key: k("o"), iconName: "refresh-cw", title: "Redesign of an existing site", text: "New look, rankings kept" },
        { _key: k("o"), iconName: "eye", title: "Trust on the page", text: "People, office, licences, real work" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("What a Cyprus company is buying when it searches for web design"),
        p("I design websites for companies in Cyprus, and the design comes with the build rather than on its own invoice. That is worth saying first, because the word design is used for two very different purchases. One is a picture of a website: screens in Figma, a palette, a font pairing, delivered as a file. The other is a website that looks the way it was meant to look once it is live, on a phone, in three languages, with real photographs and real text in it."),
        p("The first purchase is the one that strands companies. The pictures are approved, everyone is pleased, and then a developer quotes to build them and the quote is larger than the design was. Parts get cut, the live site drifts from the file, and nobody is responsible for the gap because each side delivered what was agreed."),
        p("So on my projects design and build are one job with one person answerable for both. There is no separate design line in the price, and there is no handover where the result can go wrong."),

        h2("Why a design file is not the thing that earns"),
        p("A design decides the order in which a visitor meets your business: what is seen before scrolling, what a service page promises, where the price appears, what the form asks for and how many taps separate reading from enquiring. Those are commercial decisions wearing visual clothes, and they are made well only by someone who knows what the finished page has to do in search and on a phone."),
        p("A layout that is drawn without those constraints tends to fail in predictable ways: a photograph that takes a second and a half to appear on mobile data, a headline that no one searches for, a menu that hides the pages that bring enquiries, a form asking for eight fields when two would do."),

        h2("Designing for English, Greek and Russian on one site"),
        p("A Cyprus website usually carries two or three languages, and that is a design problem before it is a translation problem. The same button is wider in Russian, the same heading wraps to three lines in Greek, Latin and Greek letterforms sit at different heights, and a nav that fits in English pushes into a second row elsewhere."),
        li("the layout is tested in the longest language rather than the shortest, so nothing breaks when the content arrives;"),
        li("the language switch sits where a multilingual visitor looks for it, and leads to the matching page rather than the home page;"),
        li("the type is chosen from families that actually carry Greek and Cyrillic, not patched with a fallback that changes shape mid-sentence."),

        h2("Design that survives the phone"),
        p("Most of the visitors a Cyprus business gets arrive on a phone, often outdoors and on mobile data. The mockup does not show that: in a design file every image is already loaded and every shadow is free. On the live page a full-width hero photograph, three webfonts and a slider cost seconds, and seconds cost enquiries."),
        p("What I do about it is unglamorous. Images are sized and formatted for the slot they sit in, typefaces are limited to what the design really uses, and the layout is checked on the templates that carry the business — service pages, not only the home page. The look survives; the weight does not."),

        h2("Photography and what to shoot for a Cyprus website"),
        p("Design fails more often on pictures than on layout. Stock photographs of generic offices read as a company that has nothing of its own to show, and in a market where buyers check you before they call, that is expensive. A short shot list fixed before the design starts usually covers it: the team as they actually look, the premises, the work finished, and two or three details that only your business has."),
        p("Where photographs do not exist yet, the design is built so the page still works without them, and so they can be dropped in later without redrawing anything."),

        h2("Redesign in Cyprus: changing the look without losing the rankings"),
        p("A redesign is where a good-looking site most often costs its owner traffic. The protection is dull and it is design work as much as development: keeping the addresses, keeping the text that earned, carrying over the structured data, and resisting the urge to delete pages because they do not fit the new grid."),
        p(
          "The step-by-step version is on the ",
          link("website redesign", "/services/website-redesign-services"),
          " page, and the island-wide service page is ",
          link("web development in Cyprus", "/web-development-cyprus"),
          ".",
        ),

        h2("What a designed and built website costs in Cyprus"),
        p(
          "A company website with design included starts at €2,000. A single-service landing page is €700–1,400. A redesign that keeps the rankings starts at €1,000. Design never appears as a separate line, because I do not sell drawings I am not going to build. What moves the price is the number of service pages, the number of languages, whether the site connects to a system you already run, and whether the photographs and text exist. The numbers are on the ",
          link("pricing", "/pricing"),
          " page and in ",
          link("how much a website costs in Cyprus", "/blog/website-development-cost-in-cyprus"),
          ".",
        ),

        h2("How a design gets approved without three months of rounds"),
        p("Design stalls when nobody is allowed to decide. The arrangement that works: one person on your side signs off, we agree the structure before anything is drawn, and the first thing you see is the page that matters commercially rather than the home page. Two rounds of changes are normal and included; the third usually means the structure was never agreed, and that is a conversation rather than another round."),

        h2("How long design and build take"),
        p("A landing page takes two to three weeks, a company website four to six, a site with a catalogue or a client area is quoted separately. What stretches it is almost never the drawing — it is content and decisions: who approves the wording, which services get their own page, which languages are needed, whether the photographs exist."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: how these designs look once they are built",
      subtitle:
        "A multilingual real estate platform in Cyprus with a catalogue and filters, a renovation and investment company site with a premium look, an education agency site that grew from one country to ten, a multilingual student services site, and a consultant site built around a single expertise.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "renovation-and-investment-website-with-premium-design",
        "seo-case-study-education-agency",
        "full-multilingual-website-development-and-seo-for-student-services",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for your website design in Cyprus",
      subtitle: "I answer within one working day: what I would design and build, in which languages, and what it costs.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you need?", options: ["A new website", "A redesign of the current one", "A landing page", "Not decided yet"] },
        { _key: k("z"), question: "Do you have photographs and text?", options: ["Both ready", "Some of it", "Neither yet", "Not sure"] },
        { _key: k("z"), question: "Which languages?", options: ["English only", "English and Greek", "English and Russian", "Three or more"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Getting a designed Cyprus site read by AI assistants (GEO, AEO)"),
        p("A design can quietly hide a business from the assistants people now ask first. Services set in images, prices inside a PDF, a portfolio that loads only after a script runs, an address that appears as part of a picture — all of it looks fine to a visitor and is invisible to ChatGPT, Perplexity or Google's AI overviews. They answer from text they can read and from sources that agree with each other."),
        p(
          "So the design keeps services, prices and the address as text, structured data that matches what is visible, and content that is present before any script executes. Bringing an existing site to that state is its own job: ",
          link("AI search readiness", "/services/ai-search-readiness"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Web design in Cyprus: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Can I buy just the design?", "No, and the reason is practical rather than commercial: a design that nobody is committed to building is where projects lose money. Design comes with the build and sits inside its price, so one person answers for how the live page looks."],
          ["How much does web design in Cyprus cost?", "It is part of the website price: from €2,000 for a company site, €700–1,400 for a single-service landing page, from €1,000 for a redesign that keeps the rankings. The number of pages, the number of languages and any integration move the figure."],
          ["Will the design be unique or a template?", "Designed for your business, not bought as a theme. That matters most on the pages that sell: the service page and the form are shaped around what you offer and what a buyer here needs to see before enquiring."],
          ["What if we already have a brand book?", "Then the design follows it — colours, typefaces, logo rules — and I tell you where the brand book and the web collide, which happens most often with contrast, type sizes on phones and photography."],
          ["Can you redesign only part of the site?", "Yes. A common version is redesigning the pages that earn, keeping the rest, so the budget goes where the enquiries come from. Addresses stay as they are and nothing is lost in search."],
          ["Do you work with companies in Cyprus directly?", "Yes, and remotely, which is how design work runs anyway: layouts, comments and approvals travel over the internet. Calls are scheduled in your time."],
          ["Do you have work from Cyprus to show?", "Yes — a multilingual real estate platform, the case in the portfolio above: a catalogue with filters, four language versions and search visibility built without bought links. I can walk you through the design decisions in it."],
          ["Who writes the text for the design?", "I can, you can, or we split it. Design and text are decided together rather than in sequence, because a layout drawn around placeholder text falls apart when the real wording arrives."],
          ["Will I be able to change the design myself later?", "Content, prices, people and pages are yours to change in the content system. Changing the design itself is a separate piece of work, and the build is set up so it can be done without rewriting the site."],
          ["Who owns the design files?", "You do, along with the code, the domain and every access credential. Nothing stays with me as leverage."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Starting a website design in Cyprus: what to send me"),
        p("Tell me what the company does, who the website has to convince, which languages your buyers use, and what exists now — a link if there is a site, nothing if there is not. Say whether photographs and text exist. I answer within one working day with what I would design and build, in which languages, and what it costs."),
      ],
    },
  ],
};
