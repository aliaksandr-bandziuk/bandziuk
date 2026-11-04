// Landing page fixture: SEO for pharmacies (EN), group «pharmacy-seo».
// NEW page — create-landing.cjs, root level.
//
// Why it exists (04.11.2026). Measured: «pharmacy seo» 150, taken as the
// LOCAL/community pharmacy half of the term. The SERP splits in two:
// community pharmacy (Pharmacy Mentor, Digital Pharmacist, HiPharmacist,
// Pharmacy Media) and pharma manufacturing (Indegene, Capptoo, The
// MedWriters). This page takes the first and says so in its opening section.
// No paired website page in any language.
//
// LEGAL BASIS — checked against the statute text on 04.11.2026, not against
// articles about it, per the rule in claude/medical-ad-claims.md.
//   Art. 94a ust. 1 Prawa farmaceutycznego: «Zabroniona jest reklama aptek i
//   punktów aptecznych oraz ich działalności. Nie stanowi reklamy informacja
//   o lokalizacji i godzinach pracy apteki lub punktu aptecznego.»
//   Supervision: wojewódzki inspektor farmaceutyczny (ust. 2), who orders the
//   advertising stopped (ust. 3) with immediate enforceability (ust. 4).
//   Penalty today: up to 50 000 zł (art. 129b ust. 1).
// A pharmacy is NOT a «podmiot wykonujący działalność leczniczą», so art. 14
// ustawy o działalności leczniczej — the norm behind the site's doctor and
// clinic pages — does not apply here. Different statute, stricter rule. That
// is also why this page does not cannibalise /medical-seo, /healthcare-seo,
// /seo-for-doctors or /dentist-seo.
//   AMENDMENT IN FLIGHT: a law lifting the total ban passed the Sejm
//   18.09.2026, was amended by the Senate 13.10.2026, the Senate amendments
//   were accepted 22.10.2026, and the bill went to the President 23.10.2026
//   (21 days to decide; in force 14 days after publication). It raises the
//   ceiling from 50 000 zł to up to 1 000 000 zł, charged separately per
//   pharmacy. Written so the page stays true either side of that date.
//
// The angle: this is a page whose main value is saying what cannot legally be
// done — the same move as declining streaming work on the musician page and
// declining a retainer to a full nursery on the daycare page.
//
// Not legal advice, and the page says so explicitly.
import { p, h2, h3, li, link, k } from "./pt";

export const pharmacySeoEn = {
  lang: "en",
  group: "pharmacy-seo",
  slug: "seo-for-pharmacies",
  title: "SEO for Pharmacies Within Advertising Restrictions",
  heading: "SEO for a pharmacy: how to be found in markets where advertising a pharmacy is restricted or banned",
  excerpt:
    "Most of what agencies sell to pharmacies is illegal in some markets. In Poland advertising a pharmacy is prohibited outright today, and the law is mid-replacement. The work that remains is being findable rather than advertised — and it is substantial. Audit from €250.",
  seo: {
    metaTitle: "Pharmacy SEO — audit from €250",
    metaDescription:
      "SEO for pharmacies where advertising is restricted: what the rules allow, duty hours and «open now» searches, Google profile, AI answers. Audit €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Within the advertising rules", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["«Pharmacy open now» searches", "Night and duty hours", "Location and hours, done properly", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a pharmacy, including what the advertising rules permit", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off work: location and hours, duty roster, Google profile, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a pharmacy or pharmacy chain", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a pharmacy actually consists of",
      items: [
        { _key: k("o"), iconName: "shield-check", title: "First, what your market permits", text: "Checked before anything is written" },
        { _key: k("o"), iconName: "map-pin", title: "Location and opening hours, done properly", text: "The part that is allowed almost everywhere" },
        { _key: k("o"), iconName: "activity", title: "Night and duty hours, kept current", text: "The most urgent search in the sector" },
        { _key: k("o"), iconName: "gauge", title: "Technical state of the site", text: "Speed, structure, how it is read" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Pharmacy open now near me»" },
        { _key: k("o"), iconName: "file-text", title: "A written note of what was excluded", text: "And which rule excluded it" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Which pharmacies this page is for, and what it deliberately leaves out"),
        p("This page is about community pharmacies — a dispensary serving the people who live and work nearby. It is not about pharmaceutical manufacturing or distribution, which shares the word and almost nothing else: that is a business-to-business market with its own regulations, its own buyers and a completely different kind of website."),
        p(
          "If you run a clinic or a practice rather than a pharmacy, the governing rules are different and the pages for that are ",
          link("medical SEO", "/medical-seo"),
          " and ",
          link("SEO for doctors", "/seo-for-doctors"),
          ". The distinction is not cosmetic: a pharmacy is not a healthcare provider in the legal sense used by those rules, and the norm that applies to it is stricter.",
        ),

        h2("Why the advertising rules decide this work before a single keyword is looked at"),
        p("In most of Europe a pharmacy cannot advertise itself the way a shop can, and in several markets it cannot advertise itself at all. That is not a detail to be managed later; it decides what the website is allowed to contain, and therefore what the work can consist of. An agency that sells a pharmacy the standard package — promotional landing pages, offers, product promotions, review campaigns — is selling something that in some markets carries an order to take it down and a fine."),
        p("So the first thing I do on a pharmacy is not keyword research. It is establishing which regime applies where you operate, what the published exceptions are, and what is left. That usually turns out to be less than the owner was promised by somebody else and more than the owner feared, because being findable and advertising are not the same activity, and search rewards the first."),
        p("This page describes rules as they stood when it was written and is not legal advice. I am not a lawyer, and for a pharmacy the stakes are high enough that the final word on a borderline page should come from one, or from the supervising inspectorate."),

        h3("Poland: advertising a pharmacy is prohibited today, and the law is being replaced"),
        p("Poland has one of the strictest regimes in the European Union. Article 94a of the Pharmaceutical Law states that advertising of pharmacies and pharmacy points, and of their activity, is prohibited, and that information about the location and opening hours of a pharmacy does not constitute advertising. That exception is the whole of it — two items. Supervision sits with the voivodeship pharmaceutical inspector, who orders the advertising stopped by a decision that is immediately enforceable, and the penalty today runs to fifty thousand złoty."),
        p("That regime is in the middle of being replaced. A law lifting the total ban passed the Sejm in September 2026, was amended by the Senate in October, and went to the President on 23 October 2026 for a decision within twenty-one days; it takes effect fourteen days after publication. The replacement is not simply a liberalisation: the penalty ceiling rises from fifty thousand złoty to a million, and where a breach covers several pharmacies, a separate fine applies to each one."),
        p("The practical consequence for anyone commissioning work on a Polish pharmacy right now is that the answer depends on the date the page goes live, and the cost of getting it wrong is going up twentyfold. This is a reason to check the position on the day rather than to rely on what an agency wrote in a blog post last spring — including what is written here, which I will keep current but which is dated by definition."),

        h2("What remains legal and still works: being findable rather than advertised"),
        p("Strip out everything promotional and a surprising amount is left, because the searches that bring somebody to a pharmacy are not persuadable. Nobody is talked into needing a dispensary. They need one now, near where they are standing, that is open, and the pharmacy that answers those three things first gets the visit."),
        li("the location, written as an address a search engine and a map can both read, with the entrance described;"),
        li("the opening hours, accurate, including the days and weeks you are closed;"),
        li("duty and night hours, which change on a roster and go stale faster than anything else on the site;"),
        li("accessibility, parking and which languages are spoken at the counter;"),
        li("and the technical state of the site, which no advertising rule touches at all."),
        p("Nothing in that list is promotion. All of it is information somebody is actively searching for, and most pharmacy websites get at least half of it wrong — most often the hours, which is the single most consequential field on the entire site."),

        h3("«Pharmacy open now» and the duty roster, the most urgent search in the sector"),
        p("The largest and most valuable pharmacy search is someone standing in the street at nine in the evening looking for somewhere open. It is answered almost entirely from opening hours and location data — the two things explicitly permitted even under the strictest regime — and it is won or lost on whether those are correct in every place they appear."),
        p("Duty rosters are where this falls apart. A pharmacy on night duty one week in six has hours that differ from its published ones on exactly the nights when demand is highest, and a site showing the standard hours sends that person elsewhere. Getting the roster onto the site and into the map profile, in a form that updates rather than rots, is the highest-value piece of work available to most pharmacies and is entirely inside the exception."),

        h3("Prescription medicines cannot be advertised to the public, in any market in the European Union"),
        p("Separately from whether the pharmacy itself may advertise, advertising prescription-only medicines to the public is prohibited across the European Union. That rules out product pages, promotions and content built around prescription products, whatever the pharmacy's own regime permits, and it is the mistake I see most often on pharmacy sites built by general web agencies."),
        p("Non-prescription products are advertisable but regulated, with requirements about what claims may be made and how the product is described. The safe default for a community pharmacy's website is to describe services and availability rather than to promote products, and to treat any product content as something to clear before publishing."),

        h2("Services and specialisms, where the market permits mentioning them"),
        p("Many pharmacies do considerably more than dispense: vaccinations, blood-pressure and other measurements, medication reviews, compounding, equipment hire, dressings. Where the local regime permits describing the services offered, these are worth their own pages, because each is a distinct search made by somebody who does not know which pharmacy near them does it."),
        p("Where the regime does not — and Poland today is the clearest case, with an exception covering only location and hours — the honest answer is that those pages cannot go up yet, and that the work worth paying for is the permitted material plus the technical state of the site. I would rather tell a pharmacy owner that in the first conversation than build a set of service pages that an inspector orders taken down."),
        p(
          "The map profile and local search groundwork is on the ",
          link("local SEO page", "/services/local-seo-services"),
          ", and if you want the position on your own site established before committing to anything, that is the ",
          link("SEO audit", "/services/seo-audit"),
          ".",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: regulated and local businesses whose visibility I have run",
      subtitle:
        "The first is a psychotherapist's site in Italy, where what may be published is limited by professional rules — the closest case to a pharmacy. The rest are businesses needing accurate location data and pages for specific services: an architecture practice rebuilt and scanned for search problems, a car service business, a renovation and investment firm, and an education agency taken from one country to ten.",
      picks: [
        "psychotherapist-website-milan",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
        "seo-case-study-education-agency",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your pharmacy",
      subtitle: "Send the site and I reply within one working day: what the rules allow in your market, what is wrong now, and what I would do first.",
      contextLabel: "Pharmacy name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where is the pharmacy?", options: ["Poland", "Elsewhere in the EU", "Outside the EU", "Several countries"] },
        { _key: k("z"), question: "How many locations?", options: ["One", "Two to five", "More than five", "Part of a chain"] },
        { _key: k("z"), question: "Do you take night or duty shifts?", options: ["Yes, on a roster", "No", "Extended hours only", "Not sure"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when somebody asks ChatGPT for an open pharmacy (GEO, AEO)"),
        p("«Which pharmacy near me is open now» is a question people increasingly put to an assistant rather than a map, and for a pharmacy it is unusually important, because the answer is built from exactly the two facts the rules permit you to publish: where you are and when you are open. There is nothing promotional to argue about — the assistant either has current, consistent hours for you or it does not, and if it does not it names a competitor."),
        p(
          "Getting a site into a state where that data is readable is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants state the wrong hours, an old address or a branch you closed, that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          " — which for a pharmacy is not a marketing problem but somebody arriving at a locked door at eleven at night.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for pharmacies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Is SEO for a pharmacy even legal?", "Being findable is not advertising, and that distinction is what the work rests on. In Poland today the statute prohibits advertising a pharmacy and its activity, while stating that information about location and opening hours is not advertising. So accurate location data, correct hours, a working duty roster and a technically sound site are all available. Promotional pages and offers are not. Which side a specific page falls on is sometimes genuinely unclear, and that is a question for a lawyer rather than for me."],
          ["How much does it cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. For a single pharmacy the audit plus one-off work is usually the right size, because the permitted surface is small and does not need monthly content. A chain with many branches and rosters is the case where ongoing work earns its keep."],
          ["What changes with the new Polish law?", "It lifts the total ban and replaces it with narrower restrictions, and it raises the penalty ceiling from fifty thousand złoty to up to a million, applied separately to each pharmacy covered by a breach. As this page was written the bill was with the President, with a twenty-one-day decision window and entry into force fourteen days after publication. Before acting on any of it, check where the law stands on that day — mine included."],
          ["Can we write a blog about health topics?", "In many markets yes, and it is often the most useful thing a pharmacy can publish. Two cautions: content built around prescription medicines runs into the European ban on advertising them to the public regardless of your own regime, and in a market where advertising the pharmacy's activity is prohibited, content that functions as promotion for the pharmacy can be treated as advertising whatever it is labelled."],
          ["Do reviews and the Google profile matter?", "The profile matters enormously, because it is where the location and hours live and where the «open now» search is answered. Soliciting reviews is a different matter and is exactly the kind of activity that can be read as promotion in a restrictive market, so I would not run a review campaign for a Polish pharmacy without legal advice."],
          ["What is the first thing you would fix?", "The hours, in every place they appear, including the duty roster. It sounds trivial and it is the highest-value change on most pharmacy sites: it is permitted everywhere, it answers the largest search in the sector, and when it is wrong somebody drives to a closed door."],
          ["How long before it shows?", "First movement after about a month and a half, growth on a three to six month horizon. For a pharmacy the map results usually move faster than that once the data is correct and consistent, because the fix is a data problem rather than a content one."],
          ["Will you tell me if there is nothing you can legally do?", "Yes, and I would rather do it in the first email than after an invoice. If your market's rules leave only the permitted information and your site already has it right, the work is an audit and the technical state, not a retainer."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a pharmacy: what to send me"),
        p("Send the site, say which country the pharmacy operates in and how many locations there are, and tell me whether you take night or duty shifts. I reply within one working day with what your market's rules appear to allow, what is wrong on the site now — starting with the hours — and what I would do first. If the honest answer is that very little may be published, I will say that and tell you what is still worth fixing."),
      ],
    },
  ],
};
