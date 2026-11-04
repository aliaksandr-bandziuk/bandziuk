// Landing page fixture: Garage and auto repair website design (EN), group
// «auto-repair-website». Rebuild of an existing old-template page under the
// same address /garage-and-auto-repair-website — replace-landing.cjs.
//
// Semantic core: research/pseo/core.csv (stage 1) — «website for auto repair
// shops» has no measured volume; «seo for auto repair shops» 390 belongs to
// /seo-for-auto-repair-shop and is not targeted here.
//
// What the old page had wrong: five interchangeable headings («Strategic Garage
// Website Development Built Around Real Workshop Operations», «…as a Long-Term
// Asset»), a reviewsFullBlock the owner decided to drop, and the old template's
// hardcoded blocks.
//
// Разведение with the SEO page: that one is about getting enquiries to a site
// that already exists; this one is about how the site is built. Owner's rule
// for development pages: a section on being readable by AI assistants.
import { p, h2, h3, li, link, k } from "./pt";

export const autoRepairWebsiteEn = {
  lang: "en",
  group: "auto-repair-website",
  slug: "garage-and-auto-repair-website",
  title: "Garage and Auto Repair Website Design",
  heading: "Garage and auto repair website design: booking a repair, not a brochure",
  excerpt:
    "I design and build websites for garages and auto repair shops: a page per repair, price ranges instead of «call for pricing», online booking and the technical base search needs. I do it myself, from structure to code, with nobody in between.",
  seo: {
    metaTitle: "Auto repair shop website design — cost and timeline",
    metaDescription:
      "Garage website design: a page per repair, price ranges instead of «call us», online booking and structure AI assistants can read. From €2,000.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per repair", "Websites from €2,000", "Reply in 1 working day"],
  heroPhonePoints: ["Book a repair online", "Price list", "Clutch replacement", "Diagnostics today"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Single-service landing page for a garage", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Full garage website: repair pages, prices, online booking", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Redesign of an existing garage website, keeping its rankings", price: 1000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What a garage website build includes",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for every repair", text: "Clutch, transmission, diagnostics, suspension, bodywork, tyres" },
        { _key: k("o"), iconName: "file-text", title: "Price ranges and what moves them", text: "Instead of «call us» and a price list as an image" },
        { _key: k("o"), iconName: "calendar", title: "A booking form with four fields", text: "Connected to your calendar or management system" },
        { _key: k("o"), iconName: "zap", title: "Speed on a phone", text: "Next.js, light images, no unnecessary scripts" },
        { _key: k("o"), iconName: "sparkles", title: "Structure AI assistants can read", text: "Direct answers and markup that matches the text" },
        { _key: k("o"), iconName: "shield-check", title: "Code and domain stay yours", text: "No locked exports, no hosting held hostage" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("What a driver has to find on a garage website inside a minute"),
        p("People arrive on a garage website in one of two states: the car is already off the road and it is urgent, or they are planning maintenance and comparing. Either way the decision is quick and runs on the same questions — do you do the specific thing, roughly what does it cost, when can I come in, and who will be working on my car."),
        p("A site that answers that in a minute beats a prettier one that makes people hunt. So the structure follows the questions, not the sections agencies default to: «About us», «Why choose us» and «Our advantages» are read last, if at all."),

        h2("A page for every repair rather than a single services section"),
        p("The backbone of a garage site is separate pages for the actual work: clutch replacement, transmission repair, diagnostics, wheel alignment, suspension, bodywork, tyres. That serves both the driver, who arrives with one specific problem, and search, which has a different query for each."),
        p("Each page answers what gets asked on the phone: what is included, how long it takes, whether the car stays overnight, what moves the price, what warranty applies and what happens if the fault returns. If you specialise in particular makes, those get their own pages — less competition and a more committed customer."),
        p(
          "Getting those pages found is a separate job: ",
          link("SEO for auto repair shops", "/seo-for-auto-repair-shop"),
          ".",
        ),

        h2("Prices on the site: a range instead of «call us»"),
        p("«Call for pricing» loses more customers than a high price does. Somebody with a broken car will not ring five garages to find the ballpark."),
        p("The site carries a range and explains what moves it: scope, OEM or aftermarket parts, the condition of neighbouring components that only shows once it is apart. State whether diagnostics is charged and whether it comes off the bill. A price list as an image or a PDF does not work — neither search engines nor AI assistants read text inside pictures."),

        h2("Online booking: what the form should ask and what it should not"),
        p("A booking form is not a questionnaire. Every extra field costs you bookings, and the detail comes out in conversation anyway."),
        p("Four things are enough: what is wrong, make and year, phone, preferred time. The make matters because it decides whether you will take the job at all. If bookings run through a calendar or a shop management system, the form connects to it so nothing is lost in an inbox."),
        p("And the thing most sites forget: say what happens after the form is sent — when somebody will call and what they will ask."),

        h2("Photographs of your bays instead of stock images"),
        p("A stock mechanic with perfect teeth reads as «no workshop of our own». Real photographs of the lifts, the equipment, the waiting area and the people who do the work build more trust than any «about us» page."),
        p("The same applies to the Google Business Profile: those photos are seen before the site is opened, and often instead of it."),

        h2("Speed on a phone, in the conditions where the site is actually opened"),
        p("A garage website gets opened on a phone, outdoors, often on a weak connection and frequently while standing next to a car that will not start. A heavy gallery and a video hero in those conditions mean the visitor leaves before finding the phone number."),
        p("So I build on Next.js with light images and without unnecessary scripts, and put the phone number and the booking button where nobody has to scroll to reach them."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: service business websites I have built",
      subtitle:
        "The first case is an auto repair company. After it: a tyre storage landing page with editable SEO, a WordPress rebuild, and projects where structure and speed mattered more than decoration.",
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
        h2("What a garage website costs and what is included"),
        p(
          "A single-service landing page runs €700–1,400. A full garage site with repair pages, prices and online booking starts at €2,000. A redesign of an existing site that keeps its rankings starts at €1,000. Design is included, never a separate line. The full price list is on the ",
          link("pricing page", "/pricing"),
          ".",
        ),

        h2("How long building a garage website takes"),
        p("A landing page takes two to three weeks. A full garage site with repair pages, prices and booking takes three to six weeks. Pages for separate areas or additional languages extend that, and I say so before we start rather than during."),
        p("What usually stretches a build is not the code but the material: photographs of the workshop, the service list with prices, and sign-off on the text. If some of it does not exist, I help put it together."),

        h2("What stays with you after launch"),
        li("the code, the domain, the content and the CMS logins are yours from day one;"),
        li("the site does not live on my hosting account and exports are not blocked;"),
        li("the project can be handed to someone else at any point;"),
        li("the work runs on a contract with a fixed scope, timeline and stages."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for your garage website",
      subtitle:
        "I reply within one working day: what I would build, in what scope and at what price.",
      contextLabel: "Shop name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What exists today?", options: ["No website", "An old website", "Only a Google profile", "Social media"] },
        { _key: k("z"), question: "What is needed first?", options: ["Online booking", "Repair pages", "Prices on the site", "All of it"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("A garage website that AI assistants can read"),
        p("Drivers increasingly ask ChatGPT, Perplexity or Google's AI Overviews: «where can I get this fixed», «how much is a timing belt», «what does this code mean». The assistant answers from text it can read and restate, so the structure of the site decides whether you appear in that answer."),
        p("In practice: a direct answer at the top of each section, facts about services, prices and conditions rather than adjectives, Schema.org markup that matches the text, and content available without running scripts. This is built in during development — adding it later costs more than doing it at the start."),
        p(
          "How that is done on a site that already exists is a separate job: ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Garage website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What does a website for an auto repair shop cost?", "A landing page €700–1,400, a full garage site from €2,000, a redesign from €1,000. The price depends on the number of repair pages, booking and integrations, not on the makes you work with."],
          ["How long does it take to build?", "Three to six weeks for a full site with repair pages; two to three weeks for a landing page. The timeline depends mostly on how quickly material is supplied and approved."],
          ["Do we need a website if we have social media and a Google Business Profile?", "The profile brings urgent customers and social media holds attention, but neither answers «what does a clutch replacement cost on my car». The site does that, and it is the only one of the three that belongs to you."],
          ["Can the booking form connect to our shop management system?", "Yes. The form connects to a calendar or a management system so bookings land where somebody sees them."],
          ["Do you build on website builders?", "No. Builders limit structure and speed, and moving off one later is harder than building on Next.js or WordPress in the first place."],
          ["What do you need from us to start?", "A service list with rough prices, photographs of the workshop, which makes you work with, and who will handle enquiries. The rest we assemble as we go."],
          ["Who owns the site after launch?", "You do: the code, the domain, the content and the CMS logins. The site does not live on my hosting, exports are not blocked, and it can be handed to another developer at any time."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a garage website: what to send me"),
        p(
          "Send a service list with rough prices, photographs of the workshop, which makes you work with, and who will handle enquiries. I will reply with what I would build, in what scope and at what price. If the site already exists and the problem is enquiries from search, that is a different job: ",
          link("SEO for auto repair shops", "/seo-for-auto-repair-shop"),
          ".",
        ),
      ],
    },
  ],
};
