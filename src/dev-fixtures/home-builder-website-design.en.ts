// Landing page fixture: Home builder website design (EN), group
// «home-builder-website-design». New page.
// Semantic core: ref/home-services.md, home builders group (US): home builder
// website design 140 (H1, H2s) · custom home builder websites 50 (metaTitle,
// H2/H3) · best home builder website design 10 + home builder website design
// inspiration 10 (patterns H2, no builders named) · home builder website free
// 0 (templates mentioned in the quiz only).
// Intent: ref/intent-check-home-services.md — «home builder website design»
// vs «construction company website design» 0 of 10 shared URLs → separate
// from /construction-website-design (linked once as the page for general
// construction firms). «home builder website design» vs «seo for home
// builders» 0 shared → SEO is the sibling /seo-for-home-builders (linked
// once). SERP: Builder Designs, Miles Brand, Reddit, design studios.
// This page = how a builder’s site looks and works: first screen, custom vs
// production structure, community pages with a lot map and a list view, plan
// pages with elevations, options and compare, model and quick move-in cards
// the sales team updates, project galleries with construction-stage photos,
// a build process page, lead forms for a buying cycle of months into the CRM
// (HubSpot, Salesforce, Lasso, BuildBook — general, no integration claimed),
// financing incentives and warranty, inspiration patterns, AI-readable
// design, cost. Design is sold with development; prices include both.
// NOT on this page: ranking community and plan pages, Google profiles,
// listing-site consistency, lead attribution reports (/seo-for-home-builders);
// remodelers, general contractors, commercial construction
// (/construction-website-design).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, link, k } from "./pt";

export const homeBuilderWebsiteDesignEn = {
  lang: "en",
  group: "home-builder-website-design",
  slug: "home-builder-website-design",
  title: "Home builder website design",
  heading: "Home Builder Website Design",
  excerpt:
    "I do home builder website design and build the site myself: communities with lot maps, floor plans buyers can compare, move-in-ready homes your sales team updates, project galleries for custom builds and forms made for a buying cycle of months — design included, from 700 €.",
  seo: {
    metaTitle: "Custom Home Builder Websites: Design + Build | Bandziuk",
    metaDescription:
      "Home builder website design with the build included: community pages and lot maps, floor plans, move-in homes, project galleries, leads to your CRM. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Custom and production builders"],
  heroPhonePoints: ["Communities · Plans · Move-in ready", "Lot 14 — available", "Schedule a model tour", "Floor plans from 1,850 sq ft"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple home builder website, design and build", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Home builder website with community pages and lot maps, floor plan pages, move-in-ready inventory, project galleries, leads sent to your CRM and local SEO setup, design and build", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with home builder website design",
      items: [
        { _key: k("o"), iconName: "map-pin", title: "Community pages with lot maps", text: "Available, reserved and sold, with a list view on phones" },
        { _key: k("o"), iconName: "layers", title: "Floor plans buyers can compare", text: "Elevations, options and filters by size, beds and price" },
        { _key: k("o"), iconName: "image", title: "Galleries and tours of finished homes", text: "Project stories, construction stages, 3D tours on tap" },
        { _key: k("o"), iconName: "file-text", title: "A build process page with durations", text: "Steps, selections, what the base price includes" },
        { _key: k("o"), iconName: "plug", title: "Interest lists and tour requests into your CRM", text: "Each lead tagged with its community and plan" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Areas, prices, plans and warranty as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple home builder website", value: "700–1,400 €", note: "design and build" },
        { _key: k("r"), label: "Full builder site: communities, plans, inventory, CRM", value: "from 2,000 €", note: "design and build", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: renovation, real estate and local service sites from my own work",
      subtitle:
        "For a Warsaw renovation and property-investment company I designed a premium site that presents its renovations, finishing work and investment projects. Cyprus VIP Estates, which I built from scratch, runs the kind of catalog a builder with communities needs: properties with filters and a map, video presentations, enquiries sent to the CRM and five language versions. ScanM2, a 3D laser scanning and BIM company, kept its design when I rebuilt the site on WordPress, and its organic traffic grew 29×. Felgilab, a wheel-renovation workshop in Warsaw, moved to WordPress with separate service and price pages, and an education agency got one multilingual site for ten countries. What they share with a builder’s site: finished work shown in large photos, a structure people browse and return to, and a short path from looking to asking.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your home builder website design",
      subtitle: "I reply within one business day with a page plan — communities, plans, move-in homes or projects — and a fixed price.",
      contextLabel: "Builder name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you build?", options: ["Custom homes on clients’ lots", "Semi-custom homes from our plans", "Production homes in our communities", "Townhomes or build-to-rent"] },
        { _key: k("z"), question: "What do you have now?", options: ["No website", "A template or a free builder site", "An older custom site", "Only listings on NewHomeSource or Zillow"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do home builder website design and build the site myself, whether you build on clients’ lots or in your own communities; one person handles design, code and content, at one price. A builder’s website is not visited once. A family returns to it for months — after a drive through a community, after a talk with a lender, before each weekend of model tours — and every visit should bring them one step closer to a contract."),

        h2("Home builder website design: what buyers look for on the first screen"),
        p("On a phone, before any scrolling, the first screen answers four questions:"),
        li("where you build — towns, counties or communities, named"),
        li("what you build — custom homes on the buyer’s land, homes in your communities, or both"),
        li("the price level — “from the low 400s” or a range for custom work, if you publish one"),
        li("the next step — browse communities, see plans, or start a custom build conversation"),
        p("A full-screen video of a finished kitchen at sunset looks good in a pitch and pushes all four answers off the screen. It belongs further down, on project and model pages."),

        h2("Custom home builder websites and production builder websites: different structures"),
        h3("Custom home builder websites"),
        p("The custom buyer is choosing a team for a project of a year or more. The site is organized around trust: finished projects with their stories, the build process, the people who run the job, the architects and designers you work with, and how pricing works. Proof that you finish what you start matters more than lots and plans."),
        h3("Production and semi-custom builder websites"),
        p("The production buyer is choosing a place and a plan. The site works as a catalog: communities, floor plans and move-in-ready homes, all linked to each other, with filters by area, price, size and bedrooms. The design job is making a large catalog easy to browse on a phone. Builders who do both get two clear entry points on the home page, so a custom client never lands in an inventory list."),

        h2("Community pages and interactive lot maps in home builder website design"),
        p("The community page is where a buyer decides whether to drive out. Its center is the site plan: homesites marked available, reserved, sold or under construction, and a tap on a lot shows its size, orientation, lot premium and the plans that fit. On a phone a detailed site plan is hard to tap, so a list view sits next to it — lot number, size, status and price, sortable."),
        p("Status changes weekly, so your sales team updates it in the admin panel, or it comes from the lot inventory tool you already use if that tool offers an export. Around the map: the location and drive times, amenities open today, HOA dues, the plans offered, and the sales office hours with a tour button."),

        h2("Floor plan pages on a home builder website: elevations, options and comparison"),
        p("Plan pages get the most repeat visits on a builder site. Buyers print them, send them to a parent and put two side by side. Each plan gets:"),
        li("a large plan image that zooms, with room dimensions, and a printable version"),
        li("elevations as a switch on the same page, not as separate pages"),
        li("the main options — extra bedroom, extended patio, third garage bay — shown on the drawing where possible, or listed with pictures"),
        li("the key numbers in a fixed block: square feet, beds, baths, garage, stories"),
        li("a compare button that keeps the buyer’s shortlist on their device"),
        li("every community that offers the plan, with its starting price there"),

        h2("Model homes and quick move-in homes on a builder website your sales team can update"),
        p("Models and finished or nearly finished spec homes bring buyers in this month. Each appears as a card: photo, lot or address, plan, completion month, a status label — under construction, ready in June, move-in ready, sold — and a button to book a tour. Your sales team changes status and price in a short form, without waiting for a developer. When a home closes, it leaves every list and its page offers similar homes instead of an error."),

        h2("Project galleries, video and 3D tours on a custom home builder website"),
        p("For a custom builder the gallery is the sales pitch, and it works when each project is a page, not a pile of photos:"),
        li("a professional shoot of the finished home, inside and out, in one style across all projects"),
        li("a few lines on the brief, the lot, the architect if there was one, the size and the build time"),
        li("construction-stage photos for buyers who want to see what sits behind the drywall"),
        li("a 3D tour or video walk-through that starts on tap, so the page stays light"),
        li("a quote from the owners, with their name, if they agreed to it"),

        h2("A build process page for home builders: steps, timeline and what the price includes"),
        p("Custom and semi-custom buyers fear two things: the budget growing and the schedule slipping. A process page answers both before the first meeting. It shows the steps with typical durations — design and selections, permits, site work, foundation, framing, mechanicals, finishes, final walkthrough — and separates what the base price includes from what counts as an upgrade. Selections at the design center get a short section of their own, because that is where budgets usually move."),

        h2("Lead forms for a long buying cycle: interest lists, tour bookings and your CRM"),
        p("Few buyers want to talk on the first visit, so every stage gets a step that fits it:"),
        li("an interest list for each community, for lot releases and price news — one email field, community already selected"),
        li("model tour booking with the times the sales office is open"),
        li("a custom build inquiry that asks about the lot, the size and the timing, and nothing more at first"),
        li("call and text buttons for those who would rather talk now"),
        p("Each lead reaches your CRM — HubSpot, Salesforce, Lasso, BuildBook or whatever your sales team works in — with the community and plan attached. How it gets there depends on your plan with that CRM, so I confirm the connection method before giving a price."),

        h2("Financing, incentives and warranty on a home builder website"),
        p("Many builders work with a preferred lender and run incentives — help with closing costs, rate buy-downs — that change by month and by community. The design gives them a fixed place: a slim banner on community and inventory pages with an end date and a link to the conditions, and the lender’s own wording and disclosures for anything about rates. The warranty — a one-, two- and ten-year structure, or whatever you offer — has its own page and a one-line summary near the contact buttons."),

        h2("Best home builder website design: what builder sites worth copying have in common"),
        p("Lists of the best home builder websites mix national builders with small custom shops. Set the budgets aside and the patterns repeat:"),
        li("real photos of finished homes, with renderings only for what is not built yet"),
        li("communities, plans and available homes linked within two taps"),
        li("prices or price ranges shown, not hidden behind a form"),
        li("a clear path for a custom build next to the catalog"),
        li("pages that stay fast on a phone despite heavy imagery"),
        p("Inspiration galleries show home pages; open a plan page and a community page too. That is where a buyer decides to book a tour."),

        h2("A home builder website that ChatGPT and Google AI Overviews can read"),
        p("A buyer can ask ChatGPT, Perplexity or Google’s AI Overviews to “compare new home builders near Boise” or “find single-story new homes near Raleigh with a big lot”. An assistant can suggest only what it can read. The design keeps community names, locations, price ranges, plan specifications, warranty terms and years in business as page text, not inside renderings, PDFs or map widgets, with structured data describing the company, its offices and the homes for sale. Prices and availability carry the date they were last checked."),
        p(
          "Getting named in those answers takes ongoing work; it is described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page; ranking in Google for your towns and communities is covered on the ",
          link("SEO for home builders", "/seo-for-home-builders"),
          " page.",
        ),

        h2("How much home builder website design costs"),
        p("There is no separate design fee: both prices include the design."),
        li("Simple builder site with a home page, about and process pages, a projects or plans section and inquiry forms: 700–1,400 €."),
        li("Builder site with community pages and lot maps, filterable floor plans, move-in-ready inventory your team updates, project galleries, CRM connection and local SEO groundwork: from 2,000 €."),
        p(
          "You own the domain, the hosting account, the code and the content from launch day. Replacing an older site goes through the ",
          link("website redesign", "/services/website-redesign-services"),
          " process, which keeps addresses and redirects in place. Price ranges for every service are on the ",
          link("pricing", "/pricing"),
          " page; my general approach to building sites is on the ",
          link("website development", "/services/website-development"),
          " page. General contractors and commercial construction firms will find their version on the ",
          link("construction website design", "/construction-website-design"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Home builder website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does home builder website design cost?", "A simple builder site costs 700–1,400 €; a site with community pages and lot maps, floor plans, move-in-ready inventory, galleries and a CRM connection starts at 2,000 €. Design is included in both. Describe your company in a few lines and I will name a fixed price."],
          ["How long does it take to design and build a home builder website?", "Phone layouts of the home page, a community or project page and a plan page are usually ready within one to two weeks of the brief. The whole site typically takes four to seven weeks, depending on the number of communities and plans and when the photos are ready."],
          ["Can our sales team update lots, prices and move-in-ready homes themselves?", "Yes. Lot status, prices, completion dates and inventory cards are edited in short forms in the admin panel, with no code. If your lot inventory tool can export its data, the site can read it from there instead."],
          ["Can you connect our existing lot map or plan configurator?", "Usually, if the vendor offers an embed or an API. The key facts — homesites left, sizes, prices — are also written on the page as text, so the site still works for buyers and search engines when the widget loads slowly."],
          ["Should a home builder show prices on the website?", "In most cases, yes: a price range or a “from” price per community and plan. Buyers filter by budget, and a site with no prices sends them to listing sites that show them. Custom builders can show ranges per square foot or per finish level with what changes them."],
          ["What is the difference between a custom home builder website and a production builder website?", "A custom builder’s site sells trust: projects, process, people and how pricing works. A production builder’s site is a catalog of communities, plans and available homes with filters. Builders who do both get a separate path for each."],
          ["How do you work with a US home builder from Poland?", "Everything happens online and in English. I am in Warsaw, six hours ahead of New York, so a 9 a.m. Eastern call is mid-afternoon for me; between calls, design reviews happen as comments on a shared file. I invoice in euros."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order home builder website design: what to send me"),
        p(
          "Tell me the builder’s name and current site, what kind of homes you build and where, the communities and plans on offer or a few finished projects, the CRM your sales team uses and two or three builder sites you like. Photos of finished homes help me show you a first screen that looks like your company. My reply comes with a page list and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
