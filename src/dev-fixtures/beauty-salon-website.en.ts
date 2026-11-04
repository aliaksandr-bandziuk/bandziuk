// Landing page fixture: beauty salon website design (EN), group
// «beauty-salon-website». Rebuild of the existing old-template page under the
// same address /website-development-for-beauty-professionals/beauty-salon-website
// — replace-landing.cjs. The page is nested under the beauty hub; the nesting
// is kept.
//
// Semantic core: research/pseo/core.csv — «website for beauty salons» 320 (en),
// «сайт для салона красоты» 40 (ru), PL zero. The head query of the cluster's
// website family belongs to THIS page, not to its parent hub: the hub has no
// query assigned in the core at all. See claude/thin-pages-plan.md.
//
// Разведение: the hairdressing, spa, makeup-artist and med-spa pages are
// already on the new template. This page is the multi-service salon and routes
// the others away by link. intent-check-creative-leisure.md measured «website
// for hair salons» against «beauty salon website» — 0 shared results out of 10,
// so they are separate pages.
//
// Kept in substance from the old page: service pages carry price AND duration,
// team profiles with photographs and specialities, a gallery of real work,
// booking with calendar sync, Google Business setup, guidance on photography,
// analytics from day one, mobile-first.
//
// Dropped: the old template's hardcoded blocks, the reviewsFullBlock (owner's
// decision of 25.10.2026), the ✔/❌ table, and two headings the 02.11 audit
// flagged — «Strategy Logic — Why It Matters:» (one of the four remaining
// colon fragments from the 30.10 audit, a heading that starts a sentence) and
// «Conclusion», already replaced by «What a good website does for a beauty
// salon» and kept here as a proper heading.
import { p, h2, h3, li, link, k } from "./pt";

export const beautySalonWebsiteEn = {
  lang: "en",
  group: "beauty-salon-website",
  slug: "beauty-salon-website",
  title: "Beauty Salon Website Design",
  heading: "Beauty salon website design: a site that books the appointment, not a brochure",
  excerpt:
    "I design and build websites for beauty salons: a page per treatment with price and duration, a booking form connected to the system your front desk already uses, team profiles, real photographs of your rooms, and the technical base search and AI assistants need. I do it myself, from structure to code.",
  seo: {
    metaTitle: "Beauty salon website design — scope, cost and timeline",
    metaDescription:
      "Beauty salon website design: a page per treatment with price and duration, online booking, team profiles, speed on a phone. Websites from €2,000.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per treatment", "Websites from €2,000", "Reply in 1 working day"],
  heroPhonePoints: ["Book with Anna, Friday 18:00", "Balayage from €120", "Lash lift, 60 min", "Price list"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Single-service landing page for a salon", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Full salon website: treatment pages, prices, team, online booking", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Redesign of an existing salon website, keeping its rankings", price: 1000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What a beauty salon website build includes",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for every treatment", text: "With the price, the duration and who performs it" },
        { _key: k("o"), iconName: "calendar", title: "Booking connected to your own system", text: "The same calendar the front desk already works in" },
        { _key: k("o"), iconName: "users", title: "Team profiles", text: "Photograph, speciality, work, and a direct booking link" },
        { _key: k("o"), iconName: "image", title: "A gallery of your actual work", text: "Compressed properly, so it does not slow the site down" },
        { _key: k("o"), iconName: "zap", title: "Speed on a phone", text: "Next.js, light images, no unnecessary scripts" },
        { _key: k("o"), iconName: "sparkles", title: "Structure AI assistants can read", text: "Prices as text and markup that matches it" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("What a client checks on a salon website before booking"),
        p("A salon site is opened with one treatment already in mind and a decision to make in about a minute. Four questions decide it: do you do this exact thing, what does it cost, who will do it, and is there a slot when I need one."),
        p("A site that answers those four in a minute wins against a prettier one that hides them behind a contact form. That is why the structure follows the questions and not the sections agencies default to — «about the salon», «our philosophy» and «why choose us» are read last, if at all."),

        h2("A page per treatment, with the price and the duration on it"),
        p("The backbone of a salon site is separate pages for the work rather than one list: colour and balayage, cuts, lash extensions and lifts, brows, manicure and gel, pedicure, facials and peels, laser, waxing."),
        p("Each one carries the price or a «from» price, how long it takes, who performs it, how long the result lasts, whether preparation or a patch test is needed, and what aftercare looks like. This is also the content that lets the page be found at all: a two-line description is not something search or an assistant can work with."),
        p("A price list as a photographed sheet or an Instagram screenshot does not count. Neither search engines nor AI assistants read text inside images, so a salon whose prices exist only as a picture is invisible to both."),

        h2("Online booking: connecting the system your front desk already uses"),
        p("The booking question is not «which widget» but «where does the front desk actually look». A site that books into a second system nobody watches creates double bookings, and that costs more than no booking at all."),
        p("So the form or the button connects to the calendar or the salon system already in use, and it sits on every treatment page rather than only in the menu. Where bookings run through Booksy or a similar platform, the site links straight into the right treatment instead of dropping the client on its home screen. And the page says what happens next — who confirms, and how soon."),

        h2("The team page: people are usually the reason clients come back"),
        p("In this business the client books a person as much as a treatment, and a site that lists «our professional team» without names throws that away."),
        p("Each specialist gets a photograph, what they do, how long they have been doing it, examples of their work and a booking link to them specifically. It helps the client choose, it gives new specialists a way to fill their first weeks, and it produces pages that rank for a name people already search for."),

        h2("Photographs of your own rooms instead of stock images"),
        p("A stock model with perfect hair reads as «not our salon». Real photographs of the interior, the chairs, the equipment and the actual work build more trust than any text about quality."),
        h3("What is worth photographing before the build starts"),
        li("the interior, in daylight, without people in frame;"),
        li("each treatment room or station separately;"),
        li("the work itself: before and after, same light, same angle;"),
        li("the team, in a consistent style rather than whatever each person sent."),
        p("The same photographs feed the Google Business Profile, where they are often seen before the site is opened and sometimes instead of it. I advise on the style and on what is missing rather than leaving that to chance."),

        h2("Speed on a phone, in the conditions where the site is actually opened"),
        p("Salon sites are opened on phones, often between other things, frequently on a weak connection. A gallery of uncompressed photographs and a video header in those conditions mean the visitor leaves before finding the price."),
        p("So I build on Next.js with properly compressed images and without unnecessary scripts, and put the price, the booking button and the phone number where nobody has to scroll to reach them."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: local service businesses I have built for",
      subtitle:
        "What these cases have in common with a salon: a client who decides on a phone, in minutes, by price and distance. A landing page with secured video access, a premium renovation site, SEO and UX for an auto repair company, a WordPress rebuild, and a tyre storage landing page with editable SEO.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("What a beauty salon website costs and what is included"),
        p(
          "A single-service landing page runs €700–1,400. A full salon site with treatment pages, prices, team profiles and online booking starts at €2,000. A redesign of an existing site that keeps its rankings starts at €1,000. Design is included, never a separate line. The full price list is on the ",
          link("pricing page", "/pricing"),
          ".",
        ),

        h2("How long building a salon website takes"),
        p("A landing page takes two to three weeks. A full salon site with treatment pages, team profiles and booking takes three to six weeks. Additional languages extend that, and I give the figure before we start rather than during."),
        p("What usually stretches a build is not the code but the material: photographs, the treatment list with prices and durations, and who on your side signs off on the text. If some of it does not exist, I help put it together."),

        h2("Analytics from the first day, not added later"),
        p("Google Analytics and Search Console are set up as part of the build, with the booking button and the phone tap counted as events. Without that, three months later there is no way to tell whether the site is working, and the conversation turns into opinions about the design."),

        h2("What stays with you after launch"),
        li("the code, the domain, the content and the CMS logins are yours from day one;"),
        li("prices and the treatment list are edited by you, without a developer;"),
        li("the site does not live on my hosting account and exports are not blocked;"),
        li("the project can be handed to another developer at any point;"),
        li("the work runs on a contract with a fixed scope, timeline and stages."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for your salon website",
      subtitle:
        "I reply within one working day: what I would build, in what scope and at what price.",
      contextLabel: "Salon name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What exists today?", options: ["No website", "An old website", "Only Instagram", "Only a Google profile"] },
        { _key: k("z"), question: "What is needed first?", options: ["Online booking", "Treatment pages", "Prices on the site", "All of it"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("A salon website that AI assistants can read"),
        p("Clients increasingly ask ChatGPT, Perplexity or Google's AI Overviews before they open a booking app: which salon near them does a particular treatment, how much it costs, whether anyone is open on Saturday evening. The assistant answers from text it can read and restate, so the structure of the site decides whether your salon appears in that answer at all."),
        p("In practice: every treatment as text with its price and duration, BeautySalon and Service markup that matches the visible text, the same name, hours and treatment names on the site, the Google Business Profile and Booksy, and short answers to what clients ask at the desk. This is built in during development, because adding it later costs more than doing it at the start."),
        p(
          "How it is done on a site that already exists is a separate job: ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Beauty salon website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a website for a beauty salon cost?", "A landing page €700–1,400, a full salon site from €2,000, a redesign from €1,000. The price depends on the number of treatment pages, the booking integration and how many languages are needed, not on the treatments themselves."],
          ["How long does it take to build?", "Three to six weeks for a full site with treatment pages and booking; two to three weeks for a landing page. The timeline depends mostly on how quickly photographs and the price list are supplied and approved."],
          ["Do we need a website if we have Instagram and Booksy?", "Instagram holds the clients who already know you and Booksy takes the booking, but neither answers «how much is balayage on dark hair» in a way Google or an AI assistant can read. The site does that, and it is the only one of the three that belongs to you."],
          ["Can the booking form connect to our salon system?", "Yes. The button or form connects to the calendar or system the front desk already uses, so bookings land where somebody actually looks rather than in a second system nobody watches."],
          ["Can we edit prices ourselves?", "Yes, and that is the point. Prices, durations, the treatment list and the team page are edited in the CMS without a developer, because in this business they change often."],
          ["Do you build on website builders?", "No. Builders limit structure and speed, and moving off one later is harder than building on Next.js or WordPress in the first place."],
          ["What do you need from us to start?", "A treatment list with prices and durations, photographs of the interior and of the work, who is on the team, and which booking system you use. The rest we assemble as we go."],
          ["Who owns the site after launch?", "You do: the code, the domain, the content and the CMS logins. The site does not live on my hosting, exports are not blocked, and it can be handed to another developer at any time."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("What a good website does for a beauty salon"),
        p("It answers the four questions a client has before booking, it takes the booking into the system your front desk already watches, and it keeps working at eleven at night when nobody is at the desk. That is the whole claim — no more than that, and it is enough to be worth building properly."),

        h2("Hairdressing, spa or promoting an existing site: the pages next to this one"),
        p(
          "A hair salon or barbershop has its own demand and its own page: ",
          link("hair salon website design", "/hair-salon-website-design"),
          ". For a day spa it is ",
          link("spa website design", "/spa-website-design"),
          ". If the site exists and the problem is bookings from search, that is a different job: ",
          link("SEO for beauty salons", "/seo-for-beauty-salons"),
          ".",
        ),

        h2("Order a salon website: what to send me"),
        p("Send the treatment list with prices and durations, photographs of the interior and of the work, who is on the team, and which booking system you use. I will reply with what I would build, in what scope and at what price."),
      ],
    },
  ],
};
