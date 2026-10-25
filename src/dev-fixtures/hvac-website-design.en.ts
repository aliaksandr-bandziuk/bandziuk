// Landing page fixture: HVAC website design (EN), group «trades».
// Semantic core: ref/trades-sites.csv + trades-sites.md, hvac group: hvac
// website design 390, website design for hvac 390, hvac websites templates 140,
// hvac website design agency 70, hvac website design services 50, best hvac
// website design 30, website design for hvac company 30, hvac website design
// company 10, hvac company website templates 10, hvac website company 10;
// related: Hvac website design templates, Hvac website design examples, Hvac
// website design ideas, Best hvac website design.
// Intent: ref/intent-check-trades-sites.md — «hvac website design» top-10:
// dribbble (twice), markhendriksen, invoicefly, comradeweb, hookagency,
// fieldedge, imarketsolutions → inspiration boards, templates and agencies.
// 0 shared URLs with «hvac websites» and «hvac company website» → separate from
// the development page /hvac-websites. 0 shared URLs with «plumbing website
// design» → own page, with a link for companies that do both.
// This page = what the visitor sees and does: seasonal hero, emergency vs
// planned-replacement paths, mobile layout under stress, membership-plan
// presentation, financing display, trust signals, real techs and vans,
// examples and ideas, templates vs custom, choosing an agency.
// Not here: sitemap, booking and membership integrations, rebate data, seasonal
// switch mechanism, area pages, builders, speed, migration (/hvac-websites);
// SEO (/hvac-seo); plumbing (/plumbing-website-design).
// Owner’s rule: new pages weave in AI search.
import { p, h2, li, ol, link, k } from "./pt";

export const hvacWebsiteDesignEn = {
  lang: "en",
  group: "hvac-website-design",
  slug: "hvac-website-design",
  title: "HVAC website design",
  heading: "HVAC Website Design",
  excerpt:
    "I design and build websites for HVAC companies: a first screen that follows the season, separate paths for a repair today and a new system next month, maintenance plans that compare at a glance, and your own technicians instead of stock models.",
  seo: {
    metaTitle: "Website Design for HVAC Companies and Contractors | Bandziuk",
    metaDescription:
      "HVAC website design for both seasons: repair and replacement paths, membership plans, financing, licenses and real technicians. Design + build from 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["AC repair today", "NATE-certified techs", "Financing available", "Join the comfort plan"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple HVAC website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "HVAC website with a seasonal home page, repair and replacement paths, maintenance plan and financing pages and local SEO, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with HVAC website design",
      items: [
        { _key: k("o"), iconName: "trending-up", title: "A first screen that follows the season", text: "Heating in winter, cooling in summer, tune-ups between" },
        { _key: k("o"), iconName: "phone", title: "Repair today or replace later: two paths", text: "A call for no heat, an estimate for a new system" },
        { _key: k("o"), iconName: "layers", title: "Maintenance plans that compare at a glance", text: "Two or three tiers, one sign-up button each" },
        { _key: k("o"), iconName: "file-text", title: "Monthly payments next to system prices", text: "Your lender’s terms shown beside every figure" },
        { _key: k("o"), iconName: "shield-check", title: "License, certifications and warranties in view", text: "Set as text next to the buttons that ask for a decision" },
        { _key: k("o"), iconName: "image", title: "Your technicians and trucks, not stock", text: "So the customer knows who is coming to the door" },
      ],
      prices: [
        { _key: k("r"), label: "Simple HVAC website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Seasonal home page, plans, financing, service pages, local SEO", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: local-service websites I have designed and built",
      subtitle:
        "Websites I have designed and built around photos of real work and a clear path to a call or a booking — the same principles a heating and cooling website needs.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your HVAC website design",
      subtitle: "I reply within one business day with a proposed winter and summer first screen, a plan page layout and a fixed price.",
      contextLabel: "Company name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which season keeps you busiest?", options: ["Summer cooling", "Winter heating", "Both about the same"] },
        { _key: k("z"), question: "What do you want to sell more of?", options: ["Repairs", "System replacements", "Maintenance plans", "All three"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I design websites for HVAC companies and build them myself, so design and build come from one person at one price. HVAC website design decides what a homeowner in a too-hot or too-cold house sees on a phone, and what they do next: call for a repair, ask for a replacement estimate or join a maintenance plan. Layout, photos and wording are chosen for those three actions and nothing else."),

        h2("Website design for HVAC: a seasonal home page for heating in winter and cooling in summer"),
        p("HVAC is the trade where the right first screen changes with the weather. In winter the hero shows one of your furnace or heat pump jobs and leads with “No heat? A technician today”. In summer it shows an outdoor unit and leads with AC repair. In spring and fall it turns to tune-ups and planned replacements, when nothing is broken and homeowners have time to compare."),
        p("Each season is designed as a complete set — photo, headline, the two main buttons, the featured services and the current offer — so a change of season changes the whole first screen, not a single picture. Warm and cool tones can mark heating and cooling inside the hero, but the call button keeps one color all year, so a returning customer finds it where it was."),
        p(
          "How the seasons are scheduled and switched in the admin panel is covered on the ",
          link("HVAC websites", "/hvac-websites"),
          " page.",
        ),

        h2("Emergency repair or planned replacement: two paths in HVAC website design"),
        p("The repair visitor is uncomfortable now and wants a time, not a brochure. The replacement visitor is about to spend several thousand on a system that will run for fifteen years or more, and has two other quotes open in other tabs. Right under the hero, the home page splits into two doors with different labels and different weight:"),
        li("“Need a repair today” — a large call button, today’s availability, nothing to fill in"),
        li("“Planning a new system” — a quieter button to request an in-home estimate, leading to replacement, heat pump and ductless pages"),
        p("The replacement pages are longer and calmer: equipment options set out as good, better and best, what the estimate visit includes, how long installation takes, financing and current rebates. The repair pages are short and end at the phone."),

        h2("Mobile-first HVAC website design for a homeowner at the thermostat"),
        p("HVAC visitors often hold the phone in one hand while standing at the thermostat, in a basement next to the furnace or in the yard beside the outdoor unit. The layouts are tested for those places:"),
        li("a call bar fixed at the bottom of the screen, within reach of the thumb"),
        li("text size and contrast that stay readable in bright sun outside and in a dim utility room"),
        li("a request form that invites a photo of the unit’s data plate or the error code on the thermostat, so the technician brings the right parts"),
        li("no pop-ups, chat bubbles or cookie walls over the call button"),
        p("Desktop layouts are adapted from the phone versions, not the other way round."),

        h2("Presenting maintenance plans and memberships in HVAC website design"),
        p("A maintenance plan sells when a visitor can compare the options in a few seconds. The plan page is a short table:"),
        li("two or three tiers, with names that say what they cover, such as one system or the whole home"),
        li("the price shown the way you bill it, per month or per year, never both mixed"),
        li("what each tier includes: tune-ups a year, priority scheduling, repair discounts, waived after-hours fees — whatever your plan really offers"),
        li("one sign-up button under each tier"),
        p("Elsewhere on the site the plan shows up where it makes sense: a member price next to the regular one on repair pages, a short invitation after a booking, a line on the summer and winter hero. The plan becomes a habit of the page, not a menu item."),

        h2("Showing financing and a payment calculator on an HVAC website"),
        p("For a replacement customer the monthly payment often matters more than the total. Financing is shown where the price question comes up — on replacement, heat pump and ductless pages — rather than only on its own page:"),
        li("a line under each price range saying financing is available, with a link to the terms"),
        li("a simple calculator: choose a system range, see an indicative monthly payment, with the conditions your financing partner requires right beside it"),
        li("a button to check eligibility that opens your partner’s application"),
        p("Rates and terms are never invented in the design. They come from your financing partner and change when theirs do."),

        h2("Trust signals in HVAC website design: licensed, NATE-certified technicians, warranties and reviews"),
        p("An HVAC technician works inside the house and often recommends an expensive purchase. Visitors look for reasons to believe that advice. The design places those reasons next to the buttons that ask for a decision, not in the footer:"),
        li("license and insurance, written out so they can be checked"),
        li("certifications your technicians really hold, such as NATE, and manufacturer dealer status if you have it"),
        li("warranties in plain words: the manufacturer’s parts warranty, your labor warranty and whether the equipment needs registering"),
        li("reviews that name the technician and the job, on the matching service page"),
        li("a satisfaction guarantee only if you offer one"),

        h2("Real technicians and trucks instead of stock photos on an HVAC website"),
        p("Stock HVAC photos are easy to spot: a model in a spotless uniform pointing a screwdriver at a unit that has never been connected. Homeowners want to see who will come to the door and how the finished job will look. The design is built around your own photos:"),
        li("portraits of your technicians, so the customer recognizes the person who arrives"),
        li("your trucks with the logo — the same trucks neighbors see in the street"),
        li("finished installs: a level condenser pad, tidy line sets, a clean furnace and duct connection"),
        li("the old system next to the new one on replacement pages"),
        p("A recent phone takes good enough pictures; light and a tidy background matter more than the camera. Before the design starts I list the shots each page needs."),

        h2("HVAC website design examples and ideas: what the best HVAC website design gets right"),
        p("Searches for HVAC website design examples and ideas lead to Dribbble shots and agency galleries. They help with type and color, but many are concept screens that never took a real call. Across HVAC company sites that do bring work, the ideas worth borrowing are plain:"),
        li("the first screen follows the season"),
        li("repair and replacement are separate paths from the home page"),
        li("the maintenance plan is visible on the home page, not buried in a menu"),
        li("a monthly payment sits next to every system price"),
        li("real technicians appear on every page that asks for trust"),
        li("the call button has a color used nowhere else"),

        h2("HVAC website templates or a custom design for your HVAC company"),
        p("HVAC website templates and HVAC company website templates promise a finished site in a weekend. They are designed for the demo: one hero, a grid of service icons, a contact form and a stock technician. With real content the gaps show — no seasonal versions of the first screen, no separate repair and replacement paths, no plan comparison, financing pushed into the footer."),
        p("A template is a reasonable start for a new one-truck company. A custom design pays off once you sell replacements and memberships, or pay for ads that send visitors to the site. Leaving a template later usually means designing again from the start."),

        h2("HVAC website design that ChatGPT and Google AI Overviews can read"),
        p("Homeowners now ask ChatGPT, Perplexity or Google’s AI Overviews to compare HVAC companies nearby or explain whether a heat pump suits their house. Assistants read text, not pictures. A license number inside a badge image, a plan table made as a graphic or a rebate inside a banner is invisible to them. The design keeps those facts as real text on the page, with structured data for the company, its services and its plans."),
        p(
          "Getting into those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Being found in Google search and on the map is covered on the ",
          link("HVAC SEO", "/hvac-seo"),
          " page.",
        ),

        h2("Choosing an HVAC website design agency or company, and what HVAC website design services include"),
        p("An HVAC website design agency usually brings a team and a monthly package with ads and SEO. An HVAC website design company that serves only HVAC firms often reuses one layout for many clients, sometimes in the same city. I work alone, design and build, without a retainer. Whoever you choose, ask:"),
        li("Will I own the design, the site and the domain?"),
        li("Are winter and summer versions of the first screen included?"),
        li("Will the design use photos of my technicians and trucks?"),
        li("Do you build the design yourselves, or pass pictures to a developer?"),
        li("Do you design for another HVAC company in my area?"),
        p("My HVAC website design services run in four steps:"),
        ol("Brief: services, plan tiers, financing partner, license and certification details, reviews and photos."),
        ol("Phone layouts: the summer and winter first screens, a replacement page and the plan page, agreed with you."),
        ol("Full design: every remaining page reuses those components; desktop versions come from the phone ones."),
        ol("Build: the approved design becomes a fast site you can edit."),
        p(
          "If you run plumbing under the same name, those pages follow the ",
          link("plumbing website design", "/plumbing-website-design"),
          " approach; for a company that works in several trades, see the ",
          link("contractor website design", "/contractor-website-design"),
          " page. A new design for an existing site keeps its Google positions through the ",
          link("website redesign", "/services/website-redesign-services"),
          " process.",
        ),

        h2("How much HVAC website design costs"),
        p("Design is part of building the site, and the price covers both."),
        li("A simple HVAC website: 700–1,400 €."),
        li("An HVAC website with a seasonal home page, repair and replacement paths, maintenance plan and financing pages, service and area pages and local search optimization: from 2,000 €."),
        p(
          "Send a short description of the company, your services and plans, and I will prepare a fixed quote. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "HVAC website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does HVAC website design cost?", "Design is included in the price of the website: 700–1,400 € for a simple HVAC site, from 2,000 € for a site with a seasonal home page, repair and replacement paths, maintenance plan and financing pages and local search optimization. After a short description of the company I give a fixed quote."],
          ["How long does website design for an HVAC company take?", "The phone layouts — summer and winter first screens, a replacement page and the plan page — are usually ready one to two weeks after the brief. Design and build of the whole site together take three to five weeks in most cases."],
          ["Are HVAC company website templates good enough to start with?", "For a new, small company, yes. A template becomes a limit once you need seasonal first screens, separate repair and replacement paths and a plan comparison. Moving off it later usually means starting the design again."],
          ["Can the home page change between heating and cooling season?", "Yes. Winter, summer and shoulder-season versions of the first screen are designed up front, and you switch them on a set date or with one switch when the weather turns early."],
          ["Should an HVAC website show prices and monthly payments?", "Where you can, yes: price ranges for common replacements with what changes the price, and an indicative monthly payment with your financing partner’s terms beside it. Customers who see a range before the visit are better prepared for the estimate."],
          ["Can I design my HVAC website myself?", "A builder and a template make that possible. The hard part is the decisions: what each season’s first screen says, how repair and replacement are separated, how plans are compared and where trust signals sit. That is what this work is paid for."],
          ["Will ChatGPT see our certifications and maintenance plans?", "Only if they are on the page as text. Badges, plan tables and rebates made as images are invisible to assistants; the design sets them as real text with structured data. Getting recommended is ongoing work beyond the design."],
          ["Do you design websites for HVAC companies outside Poland?", "Yes. Design and development are done remotely, in English, Polish or Russian, for companies in the US, Canada, the UK or Australia. The site is set up for your country: phone formats, temperature units, license details and the review platforms your customers use."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order HVAC website design: what to send me"),
        p(
          "Send the company name, a link to your current website or Google profile, the services you offer, your plan tiers and your financing partner. A few photos of your technicians, trucks and recent installs help me show a first screen that looks like your company in both seasons. I will reply with a proposed layout and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
