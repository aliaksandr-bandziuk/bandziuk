// Landing page fixture: Law firm website design (EN), group
// «law-firm-website-design». New page.
// Semantic core: ref/lawyers.md / lawyers.csv, website / design group +
// BRIEF.md: website design for law firm / law firm website design / website
// design law firm 1,600 (H1, H2s) · website design for lawyer 1,600 · web
// design for lawyers 1,000 (H2, metaTitle) · lawyer website design / designs
// 1,000 (H2) · attorney website design / website design attorney 1,000 (H2) ·
// top law firm website design 320 + best law firm websites 320 + best law firm
// website design 170 + law firm website design examples (related) (H2,
// patterns only, no real firms named) · law firm website design company 210 +
// agency 140 + services 140 (H2) · law firm website design templates 110 /
// lawyer website templates 140 / law firm website design template (related)
// (H2) · family law attorney website design 90 + family lawyer website design
// 50 (H3) · immigration lawyer website design 20 + immigration attorney website
// design 20 (H3) · personal injury attorney website design 10, divorce attorney
// website design 10 (H3 / text) · small law firm website design 70 (cost H2
// text) · law firm website design cost 40 (cost H2).
// Intent: ref/intent-check-lawyers.md — «web design for lawyers» vs «law firm
// website design» 0 shared URLs, 2 shared domains; both SERPs are agencies
// (owdt, themodernfirm, hennessey, paperstreet, lawfirmsites) plus inspiration
// (dribbble, pinterest) → one page, both phrases in headings. «law firm website
// design» vs «law firm website development» 0 shared URLs → separate pages.
// This page = what clients see: first-screen trust, attorney photography
// instead of stock gavels, bio and practice-area page layouts, case results and
// reviews with disclaimers, mobile click-to-call, templates vs custom, patterns
// of the best law firm sites, design by practice (family, immigration,
// criminal / DUI, personal injury, business), AI-readable design choices.
// Design is sold with development; prices include both.
// NOT on this page: how the site is built — templates and data, intake
// integrations (Clio, MyCase, Lawmatics, CallRail), ADA build details, hosting
// and ownership, WordPress vs Next.js (/lawyer-website-development); law firm
// SEO (/seo-for-law-firms); Google Business Profile, directories, reviews
// strategy (/local-seo-for-lawyers); personal injury SEO (/personal-injury-seo).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const lawFirmWebsiteDesignEn = {
  lang: "en",
  group: "law-firm-website-design",
  slug: "law-firm-website-design",
  title: "Law firm website design",
  heading: "Law Firm Website Design",
  excerpt:
    "I design law firm websites and build them myself: a first screen that shows the attorney, the practice and the phone number, bio and practice-area layouts, case results with their disclaimers and click-to-call on every phone screen.",
  seo: {
    metaTitle: "Web Design for Lawyers and Attorneys | Bandziuk",
    metaDescription:
      "Law firm website design with the build included: real attorney photos, practice and bio pages, case results with disclaimers, click-to-call. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Meet the attorneys", "Practice areas", "Free consultation", "Tap to call"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple law firm website, design and build", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Law firm website with practice-area and attorney bio designs, case results with disclaimers, consultation requests, click-to-call and local SEO setup, design and build", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with law firm website design",
      items: [
        { _key: k("o"), iconName: "image", title: "Attorney photography, not stock gavels", text: "A shot list for portraits and office scenes" },
        { _key: k("o"), iconName: "layers", title: "Bio and practice-area page layouts", text: "Each lawyer and each matter on its own page" },
        { _key: k("o"), iconName: "shield-check", title: "Case results and reviews with disclaimers", text: "The disclaimer sits next to the result" },
        { _key: k("o"), iconName: "phone", title: "Click-to-call on every phone screen", text: "Call, text or request a consultation in one tap" },
        { _key: k("o"), iconName: "message-circle", title: "Layouts that work in two languages", text: "Spanish, Polish or the language your clients speak" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Names, admissions and practices as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple law firm website", value: "700–1,400 €", note: "design and build" },
        { _key: k("r"), label: "Practice and bio designs, case results, click-to-call, local SEO", value: "from 2,000 €", note: "design and build", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: websites I have designed and built",
      subtitle:
        "A premium-looking site for a renovation and investment company, a 3D laser scanning and BIM company’s rebuild, an education agency in ten countries and several languages, a car repair shop and a tyre-storage landing page. On a law firm site I bring the same approach: one clear action per screen, layouts drawn for a phone first and a visual style that fits the business rather than a template.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your law firm website design",
      subtitle: "I reply within one business day with a plan for the home, practice-area and attorney pages and a fixed price.",
      contextLabel: "Firm name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What is the firm’s main practice?", options: ["Family or divorce", "Immigration", "Criminal or DUI", "Personal injury", "Business or other"] },
        { _key: k("z"), question: "What should the new design fix first?", options: ["It looks dated", "Few calls from the site", "It is hard to use on a phone", "New firm, no site yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design law firm websites and build them myself, so design and development come from one person at one price. Someone looking for a lawyer is usually worried — about a divorce, a visa, an arrest, an injury, a dispute with a business partner. They open two or three firms’ sites on a phone and decide within seconds which one feels safe to call. Web design for lawyers is mostly about those seconds."),

        h2("Law firm website design: what a potential client checks in the first seconds"),
        p("The first screen of a law firm site answers four questions before the visitor scrolls:"),
        li("which matters the firm handles and where — “Divorce and custody lawyers in [county]”, not “Justice. Integrity. Results.”"),
        li("who the lawyer is — a real photo of the attorney or the team, with names"),
        li("how to reach the firm now — the phone number, the hours and a consultation button"),
        li("why this firm — years in practice, languages spoken, a review score, in one line"),
        p("Everything else goes below. A slider rotating three slogans hides all four answers on a phone."),

        h2("Web design for lawyers without stock gavels: attorney photography and a calm style"),
        p("Gavels, scales of justice, marble columns and handshakes appear on so many law firm sites that visitors no longer notice them, and they say nothing about you. A design built on your own photos — attorneys at work, in a meeting, outside the courthouse your clients know — makes the firm recognizable and the attorney familiar before the first call."),
        p("Before the photo session I send a shot list: portraits in the same light and framing for every attorney, a few working scenes, the office entrance so clients can find it. The rest of the style follows the practice: restrained colors, sober type, generous white space and text large enough to read without zooming. Serious does not have to mean navy and gold; a family firm can look warmer than a corporate one."),

        h2("Attorney website design: the bio page layout clients read before calling"),
        p("For many clients, choosing a firm means choosing a person, and bio pages are among the most visited on a law firm site. The layout follows the order of the client’s questions:"),
        ol("A portrait, the attorney’s name, role and practice areas."),
        ol("One paragraph in plain language: who they help and with what."),
        ol("Bar admissions, courts, education and languages as a short list."),
        ol("Representative matters, articles or talks, with any disclaimer your state requires."),
        ol("A consultation button and a direct phone line or email, if the firm allows it."),
        p("Long CV-style biographies with every award move below these, where readers who want them still find them."),

        h2("Lawyer website design for practice-area pages"),
        p("A practice-area page is read by someone trying to understand their own situation. The layout leads them from the problem to a call:"),
        li("a heading that names the matter in the client’s words and the place"),
        li("a short answer to “can you help me with this”, then the process step by step"),
        li("what the first consultation involves and whether it is free or paid"),
        li("the attorneys who handle these matters, with photos"),
        li("questions clients ask, answered briefly, and a consultation request at the end"),
        p(
          "All practice pages share one design system, so a new matter page your team adds looks like the rest. How the templates, intake and hosting are built is covered on the ",
          link("lawyer website development", "/lawyer-website-development"),
          " page.",
        ),

        h2("Designing case results and client reviews with the required disclaimers"),
        p("Case results and reviews persuade, which is exactly why bar rules regulate them. Some states require a statement that past results do not guarantee a similar outcome, some restrict testimonials or prescribe wording, and no result may create unjustified expectations. The design shows the proof and its limits together:"),
        li("each result as a short card — the type of matter and the outcome, without client names"),
        li("the disclaimer on the card or directly under the group of results, in readable type, not behind a footer link"),
        li("reviews taken from your Google profile or a legal directory, with the platform named, instead of unattributed quotes"),
        li("a layout that still holds together if a state rule makes you remove a section"),
        p("Check your state bar’s rules before publishing results or testimonials; in England and Wales the SRA’s rules apply."),

        h2("Mobile click-to-call and consultation requests in law firm web design"),
        p("Many legal clients call, and they call from a phone: after an arrest at night, an accident on the road, a court letter in the mailbox. On a phone, a fixed bar at the bottom of every screen holds three actions — call, text or WhatsApp, and request a consultation. The hours show next to the number, and outside them the bar can switch to a callback request so the client is not lost to the next firm."),
        p("The consultation request takes two short steps, the type of matter and then a name and phone number. A one-line note beside the button tells the visitor to keep confidential details for the conversation, because the request alone does not make the firm their lawyer."),

        h2("Law firm website design templates or a custom design"),
        p("Law firm website templates — WordPress themes, Squarespace and Webflow layouts for lawyers — look polished in their demos because the demos use professional photos and invented attorneys. With a real firm’s content the same gaps appear: one practice page for everything, a team grid instead of bio pages, no place for a disclaimer next to a result, and a contact form with an open message box."),
        p("A template is a reasonable start for a new solo practice with one or two practice areas and a small budget. A custom design pays off when the firm has several attorneys and practices, competes for clients in search, or needs a second language. Leaving a template later usually means building the site again."),

        h2("Best law firm website design: patterns that top law firm websites share"),
        p("Lists of the best law firm websites mix national firms with small local practices. Set the budgets aside, and the same patterns repeat:"),
        li("a first screen with the practice, the place, real people and a phone number"),
        li("navigation by the client’s problem, not by the firm’s internal departments"),
        li("attorney bios that read like an introduction, not a résumé"),
        li("results and reviews close to the call to action, each with its disclaimer"),
        li("one accent color reserved for buttons"),
        li("contrast and type sizes that pass accessibility checks"),
        p("Law firm website design examples on inspiration sites usually show only the home page. Look at a practice page and a bio page as well — that is where clients make up their minds."),

        h2("Law firm website design by practice area"),
        h3("Family law attorney website design"),
        p("Visitors are going through a divorce or a custody dispute. Warm, calm photography, plain language, a visible word on discretion and separate pages for divorce, custody, support and mediation."),
        h3("Immigration lawyer website design"),
        p("Clients often read in another language and want to know the attorney speaks it. A language switch on the first screen with language names rather than flags, WhatsApp next to the phone, and a page per visa or status type."),
        h3("Criminal defense and DUI lawyer website design"),
        p("Calls come at night and under pressure. The phone number dominates the screen, the hours say when someone answers, and pages explain what happens after an arrest in plain steps."),
        h3("Personal injury attorney website design"),
        p(
          "Contingency-fee messaging stays near every button, with the cost disclosure your state requires; results carry their disclaimers; case-type pages lead to a fast intake. Competition in this market is covered on the ",
          link("personal injury SEO", "/personal-injury-seo"),
          " page.",
        ),
        h3("Business lawyer website design"),
        p("Owners and in-house counsel read on a desktop as often as on a phone. Industry and service pages, bios that list the kinds of transactions handled, and dated articles count for more than emotional photography."),

        h2("A law firm website design that ChatGPT and Google AI Overviews can read"),
        p("Design choices decide whether AI assistants can see the facts. A practice list drawn into an image, credentials inside a slider or a PDF résumé, an address shown only on an embedded map stay invisible to ChatGPT, Perplexity and Google’s AI Overviews. The design keeps them as page text: names, bar admissions, languages, practice areas, offices and hours, with the author and the review date shown on every article, a signal Google expects on legal pages."),
        p(
          "Getting cited in those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Being found in Google and on the map is covered on the ",
          link("law firm SEO", "/seo-for-law-firms"),
          " and ",
          link("local SEO for lawyers", "/local-seo-for-lawyers"),
          " pages.",
        ),

        h2("Law firm website design company or one designer-developer"),
        p("A law firm website design company splits the work between an account manager, a designer and developers, and many legal marketing agencies tie the design to a monthly contract. I do the structure, the design and the build myself, so the person who draws the bio page also builds it."),
        ol("Brief. You send the practice areas, the attorneys, the current site, photos and sites you like."),
        ol("Phone-first structure. The home, a practice page and a bio page are laid out and agreed."),
        ol("Visual design. Those three pages are designed in full; the others follow the system."),
        ol("Build and launch. The design becomes a fast, accessible site your team can edit."),
        p(
          "A new design for an existing site keeps its addresses and rankings through the ",
          link("website redesign", "/services/website-redesign-services"),
          " process.",
        ),

        h2("How much law firm website design costs"),
        p("Design is not sold separately: the price covers design and development."),
        li("A simple law firm website: 700–1,400 €."),
        li("A site with practice-area and bio page designs, case results with disclaimers, consultation requests, mobile click-to-call and local SEO setup: from 2,000 €."),
        p(
          "Small law firm website design usually starts with the simple version and grows into the full one without a redesign. All ranges are on the ",
          link("pricing", "/pricing"),
          " page; other professional and local businesses will find the same approach on the ",
          link("small business website design", "/small-business-website-design"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Law firm website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does law firm website design cost?", "The price covers design and development together: 700–1,400 € for a simple law firm site, from 2,000 € for a site with practice-area and bio page designs, case results with disclaimers, consultation requests and local SEO setup. I quote a fixed price after a short description of the firm."],
          ["Do you design law firm websites without building them?", "No. Design and build are one job. How the call bar, the consultation steps and the disclaimers behave on a phone is settled while building, and a design delivered as pictures loses most of that."],
          ["Do we need a professional photo shoot of our attorneys?", "It is worth it: real portraits do more for trust than any layout decision. A half-day session with a local photographer, following my shot list, is usually enough. Until then, consistent phone portraits taken in daylight work better than stock images."],
          ["Can we show case results and client reviews on the site?", "In most US states, yes, within limits: results must not mislead and often need a disclaimer, and some states restrict testimonials. The design gives every result and review a place for its disclaimer. Check your state bar’s rules first; in England and Wales the SRA’s rules apply."],
          ["Is a law firm website template enough for a small firm?", "For a new solo practice with one or two practice areas, it can be. Once the firm has several attorneys, several practices or a second language, a template’s single practice page and team grid start to hold it back, and a custom design pays off."],
          ["Can the design work in English and Spanish, or in other languages?", "Yes. Layouts are drawn for the longest language you publish in, the language switch sits on the first screen, and each version shows the attorneys who speak that language."],
          ["How do you work with a US, UK or Canadian law firm from Poland?", "Remotely and in English: design reviews on video calls late in my working day in Warsaw, when it is morning on the US East Coast and the UK office is still open, with comments in a shared design file in between. Contracts and invoices are in euros."],
          ["Will a new design help the firm appear in ChatGPT answers?", "Design alone does not put a firm into AI answers, but it can keep it out: facts hidden in images, sliders and PDFs cannot be read. The design keeps them as text with structured data, and the ongoing visibility work is part of my SEO and GEO service."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order law firm website design: what to send me"),
        p(
          "Send a link to the firm’s current site (or just its name), the main practice areas, the number of attorneys and a few law firm sites you like or dislike. Attorney photos, if you have them, help me show a first screen that looks like your firm. I will reply with a plan for the home, practice-area and bio pages and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
