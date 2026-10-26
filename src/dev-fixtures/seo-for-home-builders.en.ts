// Landing page fixture: SEO for Home Builders (EN), group «seo-for-home-builders».
// New page.
// Semantic core: ref/home-services.md, home builders group (US): seo for home
// builders 260 (H1, metaTitle, several H2) · local seo for home builders 40
// (local H2) · custom home builder websites 50 / home builder website design
// 140 belong to the sibling /home-builder-website-design (linked once, from
// the technical SEO H2).
// No PAA in the core for builders; H2s answer the searches buyers make:
// «cost to build a house in [state]», «build on your own lot», «quick move-in
// homes [town]», community and plan names.
// Intent: ref/intent-check-home-services.md — «seo for home builders» vs «seo
// for construction companies» 0 of 10 shared URLs (1 domain) → separate from
// /seo-for-construction-companies (linked once as the page for general
// construction firms). «seo for home builders» vs «home builder website design»
// 0 shared → separate page (sibling). SERP: builder marketing agencies,
// Reddit, BuildBook.
// Angle: custom vs production builders as two search maps, community and lot
// pages, sold-out communities, floor plan and model pages, quick move-in
// inventory, cost and build-process content, Google profiles for staffed sales
// offices (model homes themselves are ineligible), homeowner reviews after
// closing and the warranty walkthrough, NewHomeSource / Zillow / Realtor.com
// data consistency, realtor pages, lead tracking over a buying cycle of
// months, technical traps (iframe lot maps, PDF-only plans, feed inventory),
// AI answers.
// NOT on this page: site design, lot map UX, plan comparison, galleries,
// financing banners (/home-builder-website-design); general contractors,
// remodelers and commercial construction (/seo-for-construction-companies);
// Google Ads, Zillow or NewHomeSource paid placements (not offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const seoForHomeBuildersEn = {
  lang: "en",
  group: "seo-for-home-builders",
  slug: "seo-for-home-builders",
  title: "SEO for home builders",
  heading: "SEO for Home Builders",
  excerpt:
    "I do SEO for home builders — custom, semi-custom and production: community and lot pages, floor plans and model homes that rank, Google profiles for your sales offices and visibility in AI assistants, all reported in tour appointments and contracts, not only in clicks.",
  seo: {
    metaTitle: "Home Builder SEO: Communities and Floor Plans | Bandziuk",
    metaDescription:
      "SEO for home builders: community and lot pages, floor plans, model and move-in homes, custom build searches, Google profiles and AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Communities, plans and custom builds", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["New homes north of Austin", "The Madison plan · 4 bed", "Sales office open today", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Home builder SEO audit: website, community and plan pages, Google profiles, listing sites and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work for a home builder: community, floor plan and quick move-in pages, redirects, structured data, lead tracking", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a home builder", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for home builders",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data for your towns and communities", text: "Community names, “new homes in…”, “build on your lot”" },
        { _key: k("o"), iconName: "map-pin", title: "Community and lot pages that rank", text: "Location, homesites left, price range, HOA, schools" },
        { _key: k("o"), iconName: "layers", title: "Floor plan and move-in home pages", text: "Text Google can read, not only PDFs and renderings" },
        { _key: k("o"), iconName: "shield-check", title: "Google profiles for staffed sales offices", text: "Real hours and reviews from homeowners after closing" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "Cost, process and warranty facts assistants repeat" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in tours and contracts", text: "Leads followed through months of decision" },
      ],
      prices: [
        { _key: k("r"), label: "Home builder SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a home builder", value: "from 800 € / month", note: "communities, plans, reviews, AI, reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: property, renovation and local service websites I have built and optimized",
      subtitle:
        "A premium-design site for a Warsaw company that sells renovations, finishing work and property-investment projects; Cyprus VIP Estates, a luxury property site I built from the ground up, with a property catalog people filter and browse on a map, whose SEO I run every month; ScanM2, a 3D laser scanning and BIM company whose organic traffic grew 29× after I rebuilt its site; a Warsaw car repair shop whose calls come from Google Maps and its service pages; and a Milan psychotherapist whose new pages already appear in ChatGPT answers. A home builder needs these same pieces: a page for every place and product people search for, a profile that holds its spot on the map and answers that AI assistants can quote.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your home building company",
      subtitle: "I reply within one business day with what I would fix first — community pages, floor plans or your Google profiles — and a fixed price.",
      contextLabel: "Builder name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of builder are you?", options: ["Custom, on the client’s lot", "Semi-custom, from our plans", "Production, in our communities", "A mix of these"] },
        { _key: k("z"), question: "Where do most buyers find you now?", options: ["Referrals and past clients", "Realtors", "NewHomeSource or Zillow", "Paid ads"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("SEO for home builders is the work that brings people searching for a new house in your area — by town, by community name, by floor plan or by “build on my lot” — to your website, and keeps them coming back over the months it takes to sign a contract. I do it myself, as a single SEO consultant who also builds websites, for custom, semi-custom and production builders, so the same person audits the site, writes the community pages and changes the code."),

        h2("What SEO for home builders covers: communities, floor plans, custom builds and AI answers"),
        p("A home builder is searched differently from a contractor called for a repair. Nobody needs a new house by tonight. A family starts looking a year or more ahead, compares areas, saves floor plans, tours models on weekends and talks to a lender long before signing. Search touches every one of those steps:"),
        li("town and area searches — “new construction homes in [town]”, “new homes near [school district]”"),
        li("community and builder names, typed after a drive past a sign or a mention by a realtor"),
        li("plan and product searches — “single-story 4-bedroom homes”, “homes with a casita”, “quick move-in homes”"),
        li("custom-build questions — “custom home builder [county]”, “build on your own lot”, “cost to build a house in [state]”"),
        li("the same questions asked in ChatGPT, Perplexity and Google AI Overviews"),
        p(
          "Everything here is about companies that build houses. General contractors, remodelers and commercial construction firms are searched in other ways; their version is on the ",
          link("SEO for construction companies", "/seo-for-construction-companies"),
          " page.",
        ),

        h2("Custom home builder SEO and production builder SEO: two different search maps"),
        p("A custom builder and a production builder may work in the same county, but their buyers type different things, and one “Our homes” page serves neither."),
        h3("Custom and semi-custom home builders"),
        p("These buyers usually own land or are about to buy it. They search for a builder by area and style — “luxury custom home builder [lake or county]”, “modern farmhouse builder”, “barndominium builder [state]” — and for the process: design-build or with an architect, cost per square foot, how long it takes. Project pages, a clear build process and a fair answer on price ranges win these searches."),
        h3("Production builders with communities"),
        p("These buyers choose a place first and a builder second. Their searches name the town, the school district, the community or a type of home — townhomes, 55+, single-story. Community pages, plan pages and a current list of move-in-ready homes win here. Builders who do both get a separate set of pages for each side."),

        h2("Community and lot pages in SEO for home builders"),
        p("The community page is a production builder’s main landing page, and most are too thin: a rendering, a price “from” and a contact form. A page that ranks and convinces carries:"),
        li("the location in words and on a map: nearest towns, main roads, commute times to the job centers your buyers care about"),
        li("homesite sizes, how many remain and which plans fit them"),
        li("the price range, HOA dues and special tax districts such as MUD or Mello-Roos where they apply, stated plainly"),
        li("amenities that exist today, kept apart from those still planned"),
        li("links to the school district’s own site and to the plans and homes on offer there"),
        li("the sales office address and the hours someone is there"),
        h3("What to do with the page when a community sells out"),
        p("Deleting it throws away years of links and rankings. The page stays, says the community is sold out, and points to your nearest active community. The same goes for plan names you retire: their pages redirect to the plan that replaced them."),

        h2("Floor plan, model home and quick move-in pages that rank"),
        p("Plan names are searched more than builders expect: buyers write down “the Madison” at a model and look it up at home. A plan page needs text, not only an image and a PDF:"),
        li("square footage, beds, baths, garage, stories and minimum lot width as text"),
        li("elevations and the main structural options — extra bedroom, covered patio, third garage bay — described in words"),
        li("the communities where the plan is built, each linked"),
        li("a video or 3D tour of the model, with a written summary next to it"),
        p("Quick move-in, spec or inventory homes deserve their own pages and their own list, because “move-in ready homes [town]” comes from buyers with a deadline — a lease ending, a new job. Each page shows the lot, the plan, the completion month and the status, and redirects to similar homes once the house closes."),

        h2("Cost to build and build process content: answering buyers months before they call"),
        p("“How much does it cost to build a house in [state]”, “cost per square foot for a custom home”, “how long does it take to build a house” are searched all year, and they are often where a buyer first meets a builder. A builder who answers with real ranges earns the visit; “contact us for pricing” sends it to a forum. Pages that work cover:"),
        li("price ranges by size or finish level, and what moves the number: site work, utilities, foundation, finishes, permits"),
        li("the build process as steps with typical durations, from design and permits to the final walkthrough"),
        li("what the base price includes and what counts as an upgrade"),
        li("construction loans versus a mortgage on a finished home, with your lender partners named"),
        p("Ranges age quickly, so each figure shows the month it was last checked, and anything about rates or incentives uses the lender’s own wording."),

        h2("Local SEO for home builders: Google Business Profile, sales offices and homeowner reviews"),
        p("Google’s guidelines do not accept a profile for a model home as such, because homes for sale are excluded, but a sales office or design center staffed during posted hours can have its own next to the company profile. For each eligible location:"),
        li("a primary category that matches the work, such as “Home builder” or “Custom home builder”"),
        li("the hours someone is really there, weekends included"),
        li("photos of the community, the models and finished homes, added regularly"),
        li("reviews from homeowners, requested at closing and again after the first-year warranty walkthrough"),
        p(
          "Answer every review, complaints about delays included; buyers read the replies as closely as the stars. Everything else about map rankings is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("New home listing sites and realtors in home builder SEO"),
        p("NewHomeSource, Zillow’s new construction section and Realtor.com show your communities and inventory, and they often rank above builders for “new homes in [town]”. For SEO they are places where your data must match your site — community and plan names, prices, status — with a clear way to reach you. Sold homes still listed there make buyers and AI assistants doubt the rest."),
        p("In many markets realtors bring a large share of new-home buyers. A page for agents with co-op terms, registration rules and current inventory is searched by agents themselves and saves your sales team the same phone call every week."),

        h2("Tracking home builder leads through a long buying cycle: from search to tour and contract"),
        p("A buyer can visit your site many times over several months before booking a tour. A report that counts only forms sent in the month of the click misses most of what SEO does for a builder. What I set up:"),
        li("interest-list sign-ups per community, tour requests and calls tracked as separate events in GA4"),
        li("every form sent to your CRM — HubSpot, Salesforce, Lasso or the tool your sales team uses — with the first page and source of the visit"),
        li("a simple way for sales to mark which leads became tours and contracts"),
        p("The monthly report then shows tours and contracts by community and by type of search, with rankings beside them, not instead of them."),

        h2("Technical SEO for home builder websites: lot maps, plan PDFs and inventory feeds"),
        p("Builder websites hide a lot from Google. The usual cases:"),
        li("interactive lot maps and plan tools from third-party vendors loaded in an iframe, whose content counts for the vendor or for nobody"),
        li("floor plans published only as PDFs or images, with no page of text"),
        li("inventory pulled in by script, with no separate address for each home"),
        li("sold-out communities and closed homes returning errors instead of redirects"),
        li("heavy renderings and tour embeds that make pages slow on a phone"),
        p(
          "I check what Google actually sees and fix it in the code or around the tool. If a rebuild makes more sense, the ",
          link("home builder website design", "/home-builder-website-design"),
          " page shows how I plan and build one.",
        ),

        h2("SEO for home builders in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Buyers now ask ChatGPT, Perplexity or Google’s AI Overviews “who are good custom home builders near Boise”, “is [builder] good quality” or “production or custom builder for a first home”, and gets back a short list of builders with a reason next to each. Work on those answers is called generative engine optimization (GEO) or answer engine optimization (AEO). For a builder it means:"),
        li("areas, home types, price ranges, warranty terms and years in business written as plain sentences"),
        li("cost, timeline and process pages that answer questions directly and show their dates"),
        li("the same company, community and plan names on your site, Google, listing sites and Houzz"),
        li("a steady flow of homeowner reviews that describe the build"),
        p(
          "Before the work starts and again afterwards, I ask the assistants about you and note which builders they name instead. The method is described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much SEO for home builders costs"),
        li("Home builder SEO audit — website, community and plan pages, Google profiles, listing sites and AI answers: from 250 €, one-off, ending with a list of fixes ranked by effect."),
        li("One-off work — community, plan and quick move-in pages, redirects for sold-out communities, structured data, lead tracking into the CRM: 250–700 €."),
        li("Ongoing monthly SEO — new community and plan pages, buyer guides, review requests, AI visibility, a report on tours and contracts: from 800 € per month, or from 1,300 € per month in very competitive metro markets."),
        p(
          "A custom builder with one office often gets most of the effect from the audit and a set of strong project and process pages. My approach to ongoing work is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page, and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for home builders: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a home builder cost?", "The audit is from 250 € one-off, separate tasks cost 250–700 €, and ongoing SEO starts at 800 € per month — 1,300 € in very competitive metro markets. Tell me about your communities or service area and I will quote a fixed price."],
          ["How long does SEO take for a home builder?", "Google profile fixes and redirects can show results within weeks. New community and plan pages usually need three to six months to rank; cost and process guides take longer and then bring buyers for years. The best time to start is before a community opens, not at the grand opening."],
          ["Should every community have its own page?", "Yes. People search by community name, town and school district, and one page listing every community ranks poorly for each of those searches. Each page keeps its address after the community sells out and points visitors to your next one."],
          ["Can a model home have its own Google Business Profile?", "Not as a model home: Google’s guidelines exclude homes for sale. A sales office or design center that is staffed during posted hours can have its own profile, even when it sits inside a model."],
          ["Do NewHomeSource and Zillow listings help or hurt my SEO?", "They do not replace your own pages, but they are where many buyers first see your homes, and assistants read them too. What hurts is data that disagrees: different prices, plan names or homes still listed after they sold."],
          ["Can ChatGPT recommend a home builder?", "Yes, when someone asks. It names builders it can find clear facts about — areas, home types, price ranges, warranty, reviews — and repeats what several sources agree on. That work is part of my SEO, and I check the answers before and after."],
          ["Can a consultant in Poland do SEO for a US home builder?", "Yes. All the work is remote and in English. My afternoon and evening in Central European Time overlap with the US working day, so calls fit East Coast and Central mornings. Contracts and invoices are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for home builders: what to send me"),
        p(
          "Send your website and Google profiles, the towns or communities you build in, whether you build custom, semi-custom or production homes, the plans or homes you most want to sell and the CRM your sales team uses. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
