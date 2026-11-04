// Landing page fixture: SEO for auto repair shops (EN), group «auto-repair-seo».
// Rebuild of an existing old-template page under the same address
// /seo-for-auto-repair-shop — applied with replace-landing.cjs.
//
// Semantic core: research/pseo/core.csv (stage 1) — «seo for auto repair shops»
// 390, assigned to this page. «website for auto repair shops» has no measured
// volume and belongs to /garage-and-auto-repair-website anyway.
//
// What the old page had wrong: the key phrase in the H1 and in three of six
// H2s, copy interchangeable with any other niche, a reviewsFullBlock the owner
// decided to drop, and the old template's hardcoded blocks.
//
// Key angle: the car is already off the road, so the query is make + part +
// symptom, the map pack decides before the site, and one «services» page
// answers none of it. Owner's rule: every SEO page covers AI search.
//
// NOT on this page: building the site (/garage-and-auto-repair-website).
import { p, h2, li, link, k } from "./pt";

export const autoRepairSeoEn = {
  lang: "en",
  group: "auto-repair-seo",
  slug: "seo-for-auto-repair-shop",
  title: "SEO for Auto Repair Shops",
  heading: "SEO for auto repair shops: calls from drivers whose car is already off the road",
  excerpt:
    "I do SEO for auto repair shops and garages, including GEO and AEO — being named in ChatGPT, Perplexity and AI Overviews. A page per repair, a Google Business Profile that works with the site, and prices a driver can actually see. Whoever runs the audit also writes the fixes.",
  seo: {
    metaTitle: "Auto repair shop SEO and GEO — found in Google and by AI",
    metaDescription:
      "SEO for auto repair shops: a page per repair, a Google Business Profile that wins the map pack, real prices, plus GEO and AEO for AI answers.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per repair", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Clutch replacement Golf", "Transmission repair near me", "Diagnostics today", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for an auto repair shop: site, Google Business Profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a repair shop: repair pages, prices, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for an auto repair shop", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What SEO for an auto repair shop includes",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for every repair", text: "Clutch, transmission, diagnostics, suspension, bodywork" },
        { _key: k("o"), iconName: "map-pin", title: "A Google Business Profile that works", text: "Category, services, real bay photos, hours, phone" },
        { _key: k("o"), iconName: "file-text", title: "Price ranges instead of «call us»", text: "A range and what moves it, on every repair page" },
        { _key: k("o"), iconName: "search", title: "Keywords by repair and by make", text: "Real search volumes, not assumptions about demand" },
        { _key: k("o"), iconName: "sparkles", title: "GEO and AEO for AI answers", text: "ChatGPT, Perplexity and Google's AI Overviews" },
        { _key: k("o"), iconName: "trending-up", title: "Reporting in calls and bookings", text: "Not positions alone, but enquiries" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why searches for an auto repair shop work differently from other local services"),
        p("A driver almost never chooses calmly. The car is already off the road, or it started making a noise nobody wants to drive on. So the search is urgent and very specific: not «car repair» but make plus part plus symptom — «clutch replacement Golf», «suspension noise Focus», «P0171 code what to do»."),
        p("Two things follow. The driver will not read your site; they will open two or three tabs and call whoever answered fastest. And a single «our services» page answers none of those searches, so it does not appear for them."),
        p("There is a second audience that behaves nothing like the first: scheduled maintenance, pre-purchase inspections, getting a car ready to sell. They search ahead, compare and read. One page written to serve both usually loses both."),

        h2("The map pack decides before your website does"),
        p("On urgent searches most people never reach the regular results: the decision happens in the map pack, on distance, rating and whether you are open now. At that moment the site is not a showroom, it is confirmation — people open it to check that you do the specific repair and roughly what it costs."),
        p("So local SEO here starts with the Google Business Profile, not the copy: the right primary category, services with descriptions, real photos of the bays and the lifts, hours, and a phone somebody answers. And I will say plainly what cannot be fixed: distance is not optimisable. If you are out of town and a competitor is round the corner, «auto repair near me» goes to the competitor whatever anyone does. Repair-specific and make-specific searches depend on distance far less — and that is where there is something to win."),

        h2("A page for every repair instead of one services list"),
        p("The main SEO work on a garage site is turning the service list into separate pages. Clutch replacement, transmission repair, diagnostics, wheel alignment, suspension work, bodywork — different searches, different volumes, different questions, each needing its own page."),
        p("On that page a driver should find what they would otherwise ask on the phone: how long it takes, whether the car stays overnight, what is included, what the price depends on, what warranty applies and what happens if the fault comes back. That is the content — not «quality repairs on modern equipment», but answers."),
        p("If you specialise in certain makes, those get pages too: «transmission repair» and «transmission repair Passat» behave differently, and the second is usually less competitive with a warmer customer."),

        h2("Price is the first question and most shop sites refuse to answer it"),
        p("«Call for pricing» is the most expensive line on a repair shop website. Somebody with a broken car will not ring five places to learn the ballpark; they will ring the one that showed a range."),
        p("So repair pages carry a range and an explanation of what moves it: the scope of work, OEM part or aftermarket, the condition of neighbouring components that is only visible once it is apart. Say whether diagnostics is charged and whether it comes off the repair bill."),
        p("A price list as a PDF or an image does not count: neither search engines nor AI assistants read text inside pictures."),

        h2("Tyre season is two short windows a year, and preparing for them takes longer than they last"),
        p("Seasonal tyre work produces two demand spikes a year and both are short. The problem is that a page published during the rush will not rank during that rush: search needs time to crawl it and judge it."),
        p("So seasonal pages are prepared ahead and not deleted afterwards — the URL lives all year and gains weight before the next window. The same goes for tyre storage, which is a subscription in all but name and brings a customer who comes back for servicing."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: service businesses whose search visibility I worked on",
      subtitle:
        "The first case is an auto repair company — what was changed on the site and why. The rest are local service businesses needing the same work: pages for specific jobs, a strong map profile, and reporting in calls rather than positions.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("How long it takes before the calls change"),
        p("The first movement in visibility usually shows after about six weeks — new pages starting to collect impressions on long-tail searches. The growth the work is for builds over three to six months, and it is not slower because of effort but because search needs time to crawl pages and accumulate data on them."),
        p("Anyone promising calls in two weeks is promising something they do not control."),

        h2("Who auto repair SEO suits and who it does not"),
        p("SEO for an auto repair shop suits:"),
        li("shops with a steady service list and their own address;"),
        li("owners willing to show at least a price range;"),
        li("shops where somebody answers the phone in working hours;"),
        li("owners who can wait three to six months."),
        p("And it does not suit:"),
        li("one-off or temporary operations;"),
        li("owners committed to «call for pricing»;"),
        li("shops with nobody to handle calls and forms;"),
        li("owners who need customers this week."),
        p("The last line is not a formality. If you need work in the bays this week, the honest answer is paid ads, not SEO, and I do not run campaigns."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for SEO on your auto repair shop",
      subtitle:
        "I reply within one working day: what I would fix first on the site and in the Google Business Profile, and at what monthly price.",
      contextLabel: "Shop name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where do customers come from now?", options: ["Maps and search", "Word of mouth", "Paid ads", "Not sure"] },
        { _key: k("z"), question: "What does the site have today?", options: ["One services page", "A page per repair", "Prices shown", "No site yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Auto repair shops in ChatGPT and AI Overviews: what GEO and AEO mean"),
        p("Drivers increasingly ask an assistant directly: «where can I get a transmission rebuilt in this city», «how much is a timing belt», «what does code P0420 mean». ChatGPT, Perplexity and Google's AI Overviews answer and name specific shops — taken not from advertising but from text they can read and restate."),
        p("Two related jobs sit behind that. GEO (Generative Engine Optimization) is about being mentioned in generative answers, and mentioned correctly. AEO (Answer Engine Optimization) is about the page giving a direct answer in its opening sentences, because that is what gets quoted. Classic SEO does not go away: it decides your position in Google, while GEO and AEO decide whether you are named when the customer asks instead of searching."),
        p("In practice: a direct answer at the top of each section, facts instead of adjectives, structured data that matches the text, and content readable without running scripts. Plus measurement on a fixed set of questions before and after — otherwise AI visibility is just talk."),
        p(
          "More on each of those separately: ",
          link("AI SEO services", "/services/ai-seo-services"),
          ", ",
          link("ChatGPT SEO", "/services/chatgpt-seo-services"),
          ", ",
          link("AI visibility audit", "/services/ai-visibility-audit"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for auto repair shops: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How long does SEO for an auto repair shop take?", "First movement after about six weeks, steady growth over three to six months. That is how search works, not how fast the work is done."],
          ["What is the difference between SEO, GEO and AEO?", "SEO decides your position in Google. GEO is about generative models naming your business. AEO is about the page answering directly so an assistant can quote it. Different jobs, same website, and they reinforce each other."],
          ["How do you get an auto repair shop mentioned by ChatGPT?", "Through text the assistant can read and restate: concrete facts about services, prices and conditions, direct answers at the top of sections, structured data. There is no advertising slot in ChatGPT — there are sources it draws answers from."],
          ["Does SEO work for a two-bay shop?", "Often better than for a large one. Repair-specific and make-specific searches are less competitive, and a small shop can genuinely own them because it really does that work."],
          ["What if the shop is out of town?", "Stop fighting for «near me» — distance wins those. Take repair, component and make searches where distance matters less, and the specific areas people actually drive from."],
          ["Do we need to show prices if they depend on the car?", "A range and an explanation of what moves it. No price filters out more customers than a high price does."],
          ["Can we skip the Google Business Profile?", "On urgent local searches, almost not: the decision happens in the map pack. The profile and the site work as a pair; separately each loses part of the calls."],
          ["How is this different from running ads?", "Ads bring calls immediately and stop with the budget. SEO builds over months and keeps working afterwards. I do the second and do not run campaigns."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your auto repair shop: what to send me"),
        p(
          "Send the website address, a link to your Google Business Profile, the repairs you want more enquiries for, and the town. I will reply with what I would fix first and at what monthly price. No website yet? Then the starting point is different: ",
          link("garage and auto repair website design", "/garage-and-auto-repair-website"),
          ".",
        ),
      ],
    },
  ],
};
