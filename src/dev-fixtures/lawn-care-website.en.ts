// Landing page fixture: Lawn care website — development (EN), group «trades».
// Also covers lawn care website design (no separate lawn design page).
// Semantic core: ref/trades-sites.md / trades-sites.csv, landscaping / lawn
// group: lawn care website 260, website for lawn care 260, lawn care website
// design 210, lawn care web design 210, lawn care website templates 50, lawn
// care website template 50, lawn care business website 30; long tail: best
// lawn care website 30, website for lawn care business 20, lawn care website
// builder 20, how to build a lawn care website 10, lawn care website examples
// 10. «lawn care apps for providers» 140 is software — mentioned in passing.
// Intent: ref/intent-check-trades-sites.md — «lawn care website» vs
// «landscaping website design»: 0 shared URLs → two pages. «lawn care website»
// SERP is mixed (cyberoptik, fieldroutes, thumbtack, lawncarehero plus lawn
// companies’ own sites: nolalgd, naturalawn, organiclawns), so the excerpt and
// the first sentence say plainly this is building a website for a lawn care
// business. Brands (trugreen, scotts, true lawn care) ignored.
// This page = recurring-service mechanics: instant quote by lawn size, program
// sign-up, recurring billing via field-service software, neighborhood pages
// along routes, seasonal upsells, one design H2, templates and builders,
// speed, ownership.
// NOT on this page: portfolio-led design for design-build and hardscape,
// seasonal hero, project galleries (/landscaping-website-design); SEO
// (/landscaping-seo); contractors in general (/website-for-contractors).
// Owner’s rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const lawnCareWebsiteEn = {
  lang: "en",
  group: "lawn-care-website",
  slug: "lawn-care-website",
  title: "Lawn care website",
  heading: "Lawn Care Websites for Lawn Care Businesses",
  excerpt:
    "I build websites for lawn care businesses — your company’s own site, not a lawn service for your yard: an instant quote by lawn size, online sign-up for mowing and fertilization programs, billing through your field-service software, and code you own.",
  seo: {
    metaTitle: "Lawn Care Website Design and Development | Bandziuk",
    metaDescription:
      "Websites for lawn care companies: instant quotes by lawn size, online program sign-up, billing via Jobber or FieldRoutes, neighborhood pages. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Price by address", "Sign up for a program", "Autopay, card on file", "Add fall aeration"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple lawn care website", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Lawn care website with instant quote, program sign-up linked to your field-service software, neighborhood pages and local SEO", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with a website for your lawn care business",
      items: [
        { _key: k("o"), iconName: "file-text", title: "A price from the customer’s address", text: "Lawn size measured, your rates applied" },
        { _key: k("o"), iconName: "layers", title: "Online sign-up for programs", text: "Mowing, fertilization, aeration, seasonal plans" },
        { _key: k("o"), iconName: "plug", title: "Sign-ups that land in your software", text: "Customer, program and card on file — no retyping" },
        { _key: k("o"), iconName: "map-pin", title: "Neighborhood pages along your routes", text: "More customers on streets you already mow" },
        { _key: k("o"), iconName: "trending-up", title: "Add-ons offered in their season", text: "Aeration, overseeding, leaf cleanup, snow removal" },
        { _key: k("o"), iconName: "shield-check", title: "The site belongs to you", text: "Code, content and domain; no builder fee" },
      ],
      prices: [
        { _key: k("r"), label: "Simple lawn care website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Instant quote, program sign-up, neighborhood pages, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Website development portfolio: sites for local service businesses",
      subtitle:
        "Websites I have built for service businesses whose customers call, book or send a request — the same structure a lawn care business needs: pages for each service and area, a request form linked to your tools, fast pages on a phone.",
      picks: [
        "tyre-storage-landing-page-with-editable-seo",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your lawn care website",
      subtitle: "I reply within one business day with a list of pages for your programs and neighborhoods, how sign-up would reach your software, and a fixed price.",
      contextLabel: "Company name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How do new customers sign up now?", options: ["By phone or text", "Through a contact form", "Online in our software", "No website yet"] },
        { _key: k("z"), question: "Which software runs your routes and billing?", options: ["Jobber", "FieldRoutes", "LawnPro", "Other or none"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p(
          "I build websites for lawn care businesses: your company’s own site, made to sign up customers for mowing, fertilization and weed control, aeration and seasonal cleanups. This page is for owners of lawn care companies, not for homeowners looking for someone to cut their grass. A lawn care website works differently from a site for one-off jobs, because one customer can pay for weekly mowing and a series of treatments for many seasons. The site is built to give a price fast, sign people up for a program and keep them adding services. Design-build and hardscape companies that sell through project photos will find their version on the ",
          link("landscaping website design", "/landscaping-website-design"),
          " page.",
        ),

        h2("What a lawn care website has to do for a recurring-service business"),
        p("Most lawn care company websites are built like a contractor’s: a services list, a gallery, a contact form and a promise to call back. The customer waits for a price on something they expected to buy in five minutes, and often signs up with whoever answers first. A website for lawn care works more like a small subscription shop:"),
        li("a price, or at least a range, before the customer gives a phone number"),
        li("programs the customer can compare and choose: weekly mowing, a fertilization and weed control program, a full-season plan"),
        li("sign-up and payment details taken online and passed to the software that runs your routes"),
        li("pages for the neighborhoods your crews already drive through"),
        li("add-on services offered to existing customers at the right time of year"),

        h2("Instant quotes by lawn size on a lawn care website"),
        p("Lawn care is priced by area, and customers rarely know the square footage of their lawn. Measuring used to mean a drive-by. Now the website can ask for the address and show a price on the spot:"),
        li("a property measurement tool estimates the turf area from satellite or aerial imagery — some lawn care software includes one, and separate services exist"),
        li("your price table — per visit or per treatment, by lawn size band — is applied to that area"),
        li("lots the tool cannot measure well, with heavy tree cover, steep slopes or shared driveways, go to you for a manual quote"),
        p("If you prefer not to show automatic prices, the form still asks for the address and the approximate lawn size, and you reply with a quote the same day. Either way, price is the first question, and the sooner the customer has an answer, the less reason they have to call a competitor."),

        h2("Online sign-up for mowing, fertilization and aeration programs"),
        p("Once the customer has a price, they choose what to buy. Each program has a page with a clear scope, and the sign-up starts from it:"),
        li("weekly or biweekly mowing — what is included (trimming, edging, blowing off clippings), when the season starts and ends, what happens when it rains"),
        li("fertilization and weed control — the number of visits, roughly when each comes, and the applicator license you hold where your state requires one"),
        li("core aeration and overseeding — usually once a year, in fall for cool-season grasses, late spring or early summer for warm-season ones"),
        li("full-season plans that bundle these at one monthly price, with prepayment terms if you offer them"),
        p("A comparison table of two or three plans lets the visitor choose without a call. The sign-up form asks for the address, the program, the start date, gate codes, dogs in the yard and agreement to your service terms."),

        h2("Recurring billing and scheduling: connecting a lawn care business website to Jobber, FieldRoutes or LawnPro"),
        p("Lawn care companies run their routes and invoices in field-service software — Jobber, FieldRoutes, LawnPro, Service Autopilot and other lawn care apps for providers. Most offer an online request form, a client portal or a sign-up flow that can be placed on the website. The build connects it so that:"),
        li("a new sign-up appears in the software as a customer with a program and start date, not as an email someone has to retype"),
        li("the card is stored in the software for autopay, so the website itself never holds payment details"),
        li("existing customers find “Pay my bill” and “Client login” links in the header"),
        li("each completed sign-up is counted in analytics, so you see which pages and ads bring paying customers"),
        p("Where the software has no suitable sign-up flow, the website collects the request and payment is set up afterward through the software’s own payment link."),

        h2("Neighborhood service-area pages that follow your lawn care routes"),
        p("For a lawn care company, a new customer on a street you already mow is worth more than one twenty minutes off the route. Service-area pages are planned around route density, not around every town in the county:"),
        li("a page for each neighborhood or suburb where your crews work every week, with the days they are usually there"),
        li("a ZIP code or address check on the quote form, so people outside your area find out at once"),
        li("local details that matter for lawns: the common grass types, typical lot sizes, HOA rules, watering restrictions"),
        li("reviews from customers in that neighborhood"),
        p("Pages come from one template and a short entry per area, so when a route grows, a new neighborhood takes minutes to add."),

        h2("Upsells on a lawn care website: aeration, overseeding, leaf cleanup and snow removal"),
        p("The easiest new sale is to a customer you already serve. The site follows the lawn care calendar and offers the next service when it is needed:"),
        li("spring — cleanup, pre-emergent weed control, mulch"),
        li("summer — grub control, irrigation checks, mosquito treatment if you offer it"),
        li("fall — core aeration and overseeding, leaf cleanup"),
        li("winter — snow removal and holiday lighting, which keep crews and cash flow going"),
        p("Each add-on has a short page with a price and a request form, a banner on the home page in its season, and a link in the client portal or in the reminder emails your software sends. Add-ons ordered this way go into the same customer record, so the crew sees them on the next visit."),

        h2("Lawn care website design and web design: a quote box, a program table and real lawns"),
        p("Lawn care web design is simpler than a landscaper’s portfolio site, but it has its own order. On a phone the first screen holds an address field with “Get my price”, not a slogan over a stock photo of a golf course. Below come the programs in a short table, then proof: your trucks and crews in uniform, lawns you maintain photographed through the season, your review score, and your applicator license and insurance written as text."),
        p("Customers ask the same questions every spring, and the answers belong next to the sign-up button: whether the products are safe for children and pets, how long to stay off the lawn after a treatment, whether they need to be home, what happens on a rainy day. Answered on the page, they stop being phone calls."),

        h2("Lawn care website templates or a custom-built lawn care website"),
        p("A lawn care website template, from a website builder or bundled with lawn care software, puts a site online in a day. For a one-truck start-up with a few dozen customers, a template and a link to your software’s request form are enough."),
        p("As the business grows, the template starts to cost customers:"),
        li("no instant quote, so every lead still waits for a callback"),
        li("one services page instead of a page per program and add-on"),
        li("no neighborhood pages tied to your routes"),
        li("a monthly builder fee for as long as the site exists, and content you cannot take with you when you change platforms"),
        p("A custom-built lawn care website is paid for once; the code, content and domain are yours. It connects to whichever software you use and keeps working if you move from one to another."),

        h2("Speed of a lawn care website on a phone"),
        p("Customers often ask for a lawn care quote standing in their own yard, phone in hand. Pages are built to appear in under 2.5 seconds — the threshold Google uses for a good page load — with the address field and call button loading before photos. Quote and sign-up widgets from your software load only on the pages that use them. Hosting includes SSL, backups and spam protection on forms, and there is no monthly retainer."),

        h2("A lawn care website that ChatGPT and Google AI Overviews can read"),
        p("People ask ChatGPT, Perplexity or Google’s AI Overviews “how much is lawn care per month” or “when should I aerate my lawn” for their state. Assistants answer from pages they can read and recommend companies whose details they can check. The site gives them:"),
        li("program scopes and price ranges as text, with what changes the price"),
        li("seasonal advice for your grass types and climate, written by you, not copied from a national brand"),
        li("structured data for the business, its services and the areas it serves"),
        li("the same name, phone and service area as in your Google Business Profile"),
        p(
          "Getting into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Ranking in Google search and on the map is covered on the ",
          link("landscaping SEO", "/landscaping-seo"),
          " page, which includes lawn care.",
        ),

        h2("How to build a lawn care website: from brief to a launch before spring"),
        ol("Brief. You send your programs and prices, the areas your routes cover, your software and the questions customers ask most."),
        ol("Structure. I propose the pages — programs, add-ons, neighborhoods, quote and sign-up — and how each one leads to a sign-up."),
        ol("Design and build. Pages are designed on a phone first, then built and filled with your content."),
        ol("Connections. Quote, sign-up and client login are connected to your software and tested with a real sign-up."),
        ol("Launch. Analytics, your Google Business Profile link and structured data are set up. The best time is late winter, before the first spring searches."),
        p(
          "If you already have a website, every old address is redirected to its new page, so the positions it has in Google are kept. The process is described on the ",
          link("website redesign", "/services/website-redesign-services"),
          " page.",
        ),

        h2("How much a website for lawn care costs"),
        li("A simple lawn care website — home, programs, areas, a quote request and a link to your software’s sign-up: 700–1,400 €."),
        li("A lawn care website with an instant quote by lawn size where your tools allow it, online program sign-up connected to your field-service software, neighborhood and add-on pages and local search optimization: from 2,000 €."),
        p(
          "Design is included in both. Businesses that offer more than lawn and landscape work will find more on the ",
          link("websites for contractors", "/website-for-contractors"),
          " page. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Lawn care websites: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a website for a lawn care business cost?", "700–1,400 € for a simple lawn care website, from 2,000 € for a site with an instant quote, online program sign-up connected to your software, neighborhood and add-on pages and local search optimization. Design is included. After a short description of the business I give a fixed price."],
          ["Can customers get an instant lawn care quote on my website?", "Yes, if you are willing to publish rates by lawn size. A measurement tool estimates the lawn area from the address, and your price table does the rest. Lots that are hard to measure are sent to you for a manual quote."],
          ["Can customers sign up and pay for a lawn care program online through Jobber, FieldRoutes or LawnPro?", "In most cases, yes. These tools offer request forms, client portals or sign-up flows that can sit on your website, with the card stored in the software for autopay. If yours does not, the site collects the sign-up and payment is set up through your software afterward."],
          ["Is a lawn care website template enough for a small lawn care business?", "For a new company with one truck, often yes. Once you want instant quotes, a page per program and neighborhood, and sign-ups that go straight into your software, a custom-built site usually costs less over a few seasons than a builder fee."],
          ["Do I need a website if I get customers from Thumbtack, Angi or Nextdoor?", "Yes. People who find you on a platform or through a neighbor’s post often check your own site before they sign up, and customers who come through your site are not shared with competitors or charged per lead."],
          ["When should a lawn care company launch a new website?", "Before spring. Building in fall or winter, while crews are quieter, means the site, the quote and the sign-up are tested and live when the first customers start looking for a mowing service."],
          ["Will ChatGPT recommend my lawn care company?", "Assistants recommend businesses whose services, areas and prices they can read and confirm. The site is built with those as text and structured data. Getting recommended is ongoing work beyond the build."],
          ["Do you build lawn care websites outside Poland?", "Yes. The work is done remotely, in English, Polish or Russian. The site is set up for your country: phone formats, units, license details and the review platforms your customers use."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a lawn care website: what to send me"),
        p(
          "Send the company name, a link to your current website or Google profile, your programs and prices, the neighborhoods your routes cover and the software you use for scheduling and billing. I will reply with a list of pages, how sign-up would reach your software, and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
