// Landing page fixture: Plumbing website design (EN), group «trades».
// Semantic core: ref/trades.csv + trades.md, plumbing group: plumbing website
// design 480, website design for plumbers 390, plumbing website template 110;
// related: Plumbing website design template, plumbing website template free
// 20, best plumbing website design 20, plumbing website design inspiration 10,
// plumbing company website design 10.
// Intent: ref/intent-check-trades.md — «plumbing website design» top-10:
// hookagency, workiz, webmarketers, dribbble, pinterest, housecallpro, webfx,
// linknow → agencies, inspiration boards and templates. 0 shared URLs with
// «website for plumbers» and «plumber website» → separate from the development
// page. 0 shared URLs with «electrician website design».
// This page = what the visitor sees and does: two visitor types, first screen,
// sticky call button, trust signals, van and team photos, service page layout,
// booking widget placement, color and readability, templates vs custom.
// Not here: structure, integrations, speed, ownership, builders, migration
// (/website-for-plumbers); SEO (/seo-for-plumbers, /local-seo-for-plumbers).
// Owner’s rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const plumbingWebsiteDesignEn = {
  lang: "en",
  group: "plumbing-website-design",
  slug: "plumbing-website-design",
  title: "Plumbing website design",
  heading: "Plumbing Website Design",
  excerpt:
    "I design and build websites for plumbers and plumbing companies: a call button that stays on screen, upfront prices, license and reviews right next to it, and photos of your own vans — laid out for a customer with water on the floor.",
  seo: {
    metaTitle: "Website Design for Plumbers: Calls and Trust | Bandziuk",
    metaDescription:
      "Plumbing website design for emergencies and planned jobs: sticky call button, upfront prices, license and reviews, real van photos. Design + build from 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Call now · 24/7", "Licensed · Insured", "Upfront pricing", "Book online"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple plumbing website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Plumbing website with emergency, service and area pages, online booking and local SEO, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with plumbing website design",
      items: [
        { _key: k("o"), iconName: "phone", title: "A call button that never leaves the screen", text: "Tap-to-call from any page, with your real hours" },
        { _key: k("o"), iconName: "message-circle", title: "Two paths: call now or book later", text: "Emergencies and planned jobs never share one button" },
        { _key: k("o"), iconName: "shield-check", title: "License, insurance and guarantees by the button", text: "What a customer checks before letting a plumber in" },
        { _key: k("o"), iconName: "image", title: "Your vans and plumbers, not stock models", text: "A shot list your team can follow on a phone" },
        { _key: k("o"), iconName: "file-text", title: "Service pages laid out from problem to call", text: "Price range, options, real jobs, short answers" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Prices, license and areas as text, not pictures" },
      ],
      prices: [
        { _key: k("r"), label: "Simple plumbing website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Emergency, service and area pages, booking, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: local-service websites I have designed",
      subtitle:
        "No plumbing clients among them — these are the nearest local-service projects: a car repair shop and a wheel-repair workshop whose customers call or book, a tyre storage page built around one action, and a renovation company and an architecture studio shown through real project photos.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your plumbing website design",
      subtitle: "I reply within one business day with a proposed layout for the first screen, an emergency page and a service page, and a fixed price.",
      contextLabel: "Business name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What brings most of your calls?", options: ["Emergencies", "Planned jobs", "About half and half"] },
        { _key: k("z"), question: "Do you have photos of your vans and team?", options: ["Yes, plenty", "A few", "Not yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design websites for plumbers and plumbing companies and build them myself, so design and build come from one person at one price. Plumbing website design is about what a customer sees and does in the first seconds on your site — usually on a phone, sometimes with water spreading across the floor. Everything on the page is arranged to lead to one of two actions: a call now or a booked visit later."),

        h2("Plumbing website design for two visitors: the emergency and the planned job"),
        p("The same site is opened by two very different people. One has a burst pipe or a sewer backup and wants a plumber at the door within the hour. This person does not read; they scan and tap the first phone number that looks right. The other is planning a water heater replacement or new bathroom fixtures and is comparing companies on price, reviews and how professional they look. This person reads."),
        p("Good plumbing website design serves both without making either one wait:"),
        li("the emergency visitor sees a phone number and whether you are available now, without scrolling"),
        li("the planning visitor finds a clear list of services, prices or ranges and a way to choose a time"),
        li("the two actions look different — a strong call button for urgent help, a quieter one for booking — so nobody has to think which is theirs"),

        h2("Website design for plumbers: what the first screen shows on a phone"),
        p("The first screen of a phone is small, and on a plumbing site it carries four things and nothing else:"),
        li("what you do and where, in plain words: “Plumbers in [your town] — emergency and scheduled repairs”"),
        li("the phone number, large, with your hours or “24/7” if that is true"),
        li("one line of proof: licensed and insured, review score, years in business"),
        li("a photo of your own van or one of your plumbers"),
        p("Slogans, sliders and welcome paragraphs move further down or disappear. A visitor in a hurry should be able to call without reading a single sentence."),

        h2("A sticky call button in plumbing website design"),
        p("On every page the call button stays fixed at the bottom of the phone screen, where the thumb already is. It dials the number on a tap; it does not open a contact page. Next to it sits a second, smaller button — book online, or send a text — for the visitor who would rather not talk. On a desktop the number sits in the top right corner of the header, where people look for it."),
        p("The label matters as much as the position. “Call now — a plumber answers 24/7” is right only if someone really picks up at 3 a.m. If calls after hours go to voicemail, the button says when you call back. A promise the phone does not keep costs more than it brings."),

        h2("Trust signals on a plumbing website: licensed, insured, upfront pricing, guarantees, reviews"),
        p("A plumber comes into the house, sometimes when nobody else is home, and the final bill is not known when the customer calls. Visitors look for reasons to believe you are safe and fair. The design places those reasons near every call button, not in the footer:"),
        li("license number and insurance, written out so they can be checked"),
        li("upfront or flat-rate pricing explained in one sentence: the price is agreed before work starts"),
        li("a guarantee in plain words — on parts, on labor, on cleaning up after the job"),
        li("a review score with two or three recent reviews that name the job: a drain, a water heater, a leak"),
        li("badges such as Google Screened or a trade association membership — only those you really hold"),

        h2("Photos of your vans and plumbers instead of stock images on a plumbing website"),
        p("A stock photo of a smiling model holding a wrench is recognized at once and says nothing about you. Your own van with the logo, a plumber in your uniform at a real job, a neat water heater installation, a cleaned-up crawl space — these show that the company exists and cares about its work. They also help the customer recognize the van that pulls up outside and the person who knocks."),
        p("Phone photos are enough if they are taken in daylight and the same way each time. I give your team a short shot list: each van, each plumber, before and after of typical jobs, and the shop or warehouse if you have one."),

        h2("Layout of a plumbing service page: from the problem to the call"),
        p("A service page — say, water heater replacement — follows the order in which the visitor thinks:"),
        ol("The problem in their words: “No hot water? Water heater leaking?”, with the call button."),
        ol("What you do about it and how soon you can come."),
        ol("The price or range, and what changes it."),
        ol("The options — repair or replace, tank or tankless — one sentence each."),
        ol("Two or three photos from real jobs and a review that mentions this service."),
        ol("The questions customers ask on the phone, answered briefly."),
        ol("Booking or a second call button at the end."),
        p("Emergency pages are shorter: a few steps to limit the damage, then the call. Planned-job pages are longer and finish with booking."),
        p(
          "How these pages are organized by service and town, connected to your software and kept fast is covered on the ",
          link("websites for plumbers", "/website-for-plumbers"),
          " page.",
        ),

        h2("Where the booking widget goes in plumbing website design"),
        p("Online booking from ServiceTitan, Housecall Pro, Jobber or a similar tool helps only if people see it at the moment they decide. Hidden on a separate “Book” page, it is found by few. In the design it appears:"),
        li("as the second button in the sticky bar on phones"),
        li("at the end of every planned-job service page"),
        li("never on emergency pages, where it would suggest that a burst pipe can wait until Thursday"),
        p("The widget is styled to match the site as far as the tool allows, so the customer does not feel they have landed on another company’s form."),

        h2("Color, contrast and text size of a plumbing website for a visitor under stress"),
        p("Someone with water on the kitchen floor reads badly and taps fast. The design is checked for that:"),
        li("body text at 16 pixels or larger, short headings, one idea per line"),
        li("text and background contrast that meets the WCAG accessibility guidelines"),
        li("one strong accent color kept only for the call button, so it is never confused with decoration"),
        li("large tap targets with space between them, so a wet thumb does not hit the wrong link"),
        p("Blue and white are common on plumbing sites because they suggest clean water; they work as long as the call button stands out against them. Your van and uniform colors carry the brand, but the button color is chosen for visibility first."),

        h2("Plumbing website templates or a custom plumbing website design"),
        p("A plumbing website template, free or paid, looks good in the demo: perfect photos, invented reviews, a 24/7 banner. With a real company’s content the gaps appear — no place for emergency pages, one page for all services, a contact form instead of a call button, booking squeezed into a sidebar. A search for a plumbing website design template, or inspiration boards on Dribbble and Pinterest, will show attractive screens, but they are made to be admired, not tested with real customers and real calls."),
        p("A template is a fair start for a one-van business. A custom design is worth it when you take emergency calls, sell several services, cover several towns or pay for ads that land on the site. Moving off a template later usually means designing from the beginning."),

        h2("Plumbing website design that ChatGPT and Google AI Overviews can read"),
        p("More customers ask ChatGPT, Perplexity or Google’s AI Overviews to suggest a plumber or explain a repair before calling anyone. Assistants work from text, not pictures. A design that keeps licenses, guarantees, prices and service areas inside images and badges hides them; the same facts set as real text, with structured data for the business and its services, can be read and repeated."),
        p(
          "Getting into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Being found in Google search and on the map is covered on the ",
          link("SEO for plumbers", "/seo-for-plumbers"),
          " and ",
          link("local SEO for plumbers", "/local-seo-for-plumbers"),
          " pages.",
        ),

        h2("How the plumbing website design process works"),
        ol("Brief. You send your services, towns, hours, license and insurance details, reviews and photos of your vans and team."),
        ol("Phone layouts. I design the first screen, an emergency page and a planned-job service page on a phone screen and agree them with you."),
        ol("Full design. The other pages follow the same system; desktop versions are adapted from the phone ones."),
        ol("Build. The approved design is built into a fast site you can edit, with calls and booking connected."),
        p(
          "If you already have a website and want a new look without losing your Google positions, the ",
          link("website redesign", "/services/website-redesign-services"),
          " process keeps addresses and redirects in place. Businesses that offer more than plumbing will find more on the ",
          link("contractor website design", "/contractor-website-design"),
          " and ",
          link("websites for contractors", "/website-for-contractors"),
          " pages.",
        ),

        h2("How much plumbing website design costs"),
        p("Design is part of building the site, and the price covers both."),
        li("A simple plumbing website: 700–1,400 €."),
        li("A plumbing website with emergency, service and area pages, online booking, trust signals on every page and local search optimization: from 2,000 €."),
        p(
          "Send a short description of the business, your services and the towns you cover, and I will prepare a fixed quote. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Plumbing website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does plumbing website design cost?", "Design is included in the price of the website: 700–1,400 € for a simple plumbing site, from 2,000 € for a site with emergency, service and area pages, online booking and local search optimization. After a short description of the business I give a fixed quote."],
          ["How long does website design for plumbers take?", "The phone layouts of the first screen, an emergency page and a service page are usually ready within one to two weeks of the brief. The whole site, designed and built, typically takes three to five weeks."],
          ["Can I use a plumbing website template instead of a custom design?", "Yes, for a small business starting out. A template becomes a limit once you need emergency pages, a page per service and town, and a call button that stays on screen. Changing later usually means starting again."],
          ["Can I design my plumbing website myself?", "You can, with a builder and a template. The hard part is not the look but the decisions: what goes on the first screen, where the call and booking buttons sit, how prices and guarantees are worded. Those are what this work is paid for."],
          ["Are phone photos of our vans and team good enough?", "Usually yes, if they are taken in daylight, from the same angles and without clutter. I send a short shot list. Your own van and plumbers convince more than any stock photo."],
          ["Should the call button say “24/7” if nobody answers at night?", "No. The button shows the hours you really answer, or says when you call back. A 24/7 promise that ends in voicemail loses the customer and often brings a bad review."],
          ["Can you redesign our plumbing website without losing Google rankings?", "Yes. Every existing address is mapped to its new page and redirected, and structured data is carried over before the new design goes live, so the positions the site already has are kept."],
          ["Do you work with plumbing companies outside Poland?", "Yes. Design and development are done remotely, in English, Polish or Russian. The site is set up for your country: phone formats, units, license details and the review platforms your customers use."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order plumbing website design: what to send me"),
        p(
          "Send the business name, a link to your current website or Google profile, the services you offer, the towns you cover and the hours you answer the phone. A few photos of your vans, team and recent jobs help me show you a first screen that looks like your company. I will reply with a proposed layout and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
