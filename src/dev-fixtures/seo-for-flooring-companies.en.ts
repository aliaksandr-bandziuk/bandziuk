// Landing page fixture: SEO for Flooring Companies (EN), group
// «seo-for-flooring-companies». New page.
// Semantic core: ref/home-services.md, flooring group: seo for flooring
// companies 110 (H1, metaTitle, several H2). The other two phrases in the group
// (commercial flooring software 50, rollmaster flooring software 10) are
// software searches — not targeted. Body vocabulary from BRIEF.md angles:
// hardwood, LVP, tile and carpet installation, hardwood refinishing, showroom
// vs mobile installer, product brands, project photos, price per square foot.
// Intent: ref/intent-check-home-services.md — «seo for flooring companies» vs
// «seo for contractors» 0 of 10 shared URLs, 1 shared domain: the flooring SERP
// is Reddit, ServGrow, Townsquare, Comrade, Wood Floor Business and niche
// agencies → own page, separate from /seo-for-contractors (linked once as the
// neighbour page for remodelers and general contractors).
// Audience: owners of flooring stores with installation, mobile installers
// and hardwood refinishers in the US (UK/Canada/Australia neutral wording).
// NOT on this page: general contractor and remodeler SEO
// (/seo-for-contractors); map work in depth (/services/local-seo-services);
// building or redesigning the site; Google Ads and lead platforms (only
// compared with SEO); flooring software. No figures for flooring prices —
// the client publishes his own.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const seoForFlooringCompaniesEn = {
  lang: "en",
  group: "seo-for-flooring-companies",
  slug: "seo-for-flooring-companies",
  title: "SEO for flooring companies",
  heading: "SEO for Flooring Companies",
  excerpt:
    "I do SEO for flooring companies — flooring stores, installers and hardwood refinishers: pages for each material and job, cost pages with your price per square foot, project photos named by product and room, Google Maps and AI answers, reported in measure bookings and calls.",
  seo: {
    metaTitle: "Flooring SEO: Install, Refinish and Showroom | Bandziuk",
    metaDescription:
      "SEO for flooring companies: hardwood, LVP, tile and carpet pages, refinishing, brand pages, price per square foot, Google Maps and AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Install, refinish, showroom", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["LVP installation near me", "Hardwood refinishing", "Free in-home measure", "Tap to call"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Flooring SEO audit: website, product pages and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off flooring SEO work: material, refinishing and brand pages, cost page, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a flooring company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for flooring companies",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data by material and job", text: "Hardwood, LVP, tile, carpet — install or refinish" },
        { _key: k("o"), iconName: "layers", title: "A page for each floor type", text: "Written from your jobs, not the manufacturer’s brochure" },
        { _key: k("o"), iconName: "file-text", title: "Price per square foot, explained", text: "What is included and what changes the quote" },
        { _key: k("o"), iconName: "image", title: "Project photos named by product and room", text: "White oak, herringbone, stairs, basements" },
        { _key: k("o"), iconName: "map-pin", title: "Google Maps for a showroom or a van", text: "Address or service area, set up the right way" },
        { _key: k("o"), iconName: "sparkles", title: "Quoted in ChatGPT and AI Overviews", text: "Material comparisons assistants can repeat" },
      ],
      prices: [
        { _key: k("r"), label: "Flooring SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a flooring company", value: "from 800 € / month", note: "material pages, photos, maps, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: a renovation company and local service businesses",
      subtitle:
        "Interior finishing is part of the work of the Warsaw renovation and property-investment company at the top of this list. Next to it: a Warsaw auto repair shop that gets its customers through calls, Google Maps and service pages; Felgilab, a Warsaw wheel-renovation workshop rebuilt on WordPress with service and price pages; ScanM2, a 3D laser scanning company that went from no leads to leads every week after its rebuild; and the site of a psychotherapist in Milan, whose new pages ChatGPT already cites. A flooring company needs what these sites were built around: a page for each service, prices people can read before calling and enquiries you can count.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "architecture-website-rebuild-and-seo-scan",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your flooring company",
      subtitle: "Within one business day I tell you where to start — material pages, the cost page or your Google profile — and what it costs, as a fixed price.",
      contextLabel: "Flooring company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How do you sell flooring?", options: ["Showroom with installation", "Installation only, mobile crew", "Refinishing and repair", "Commercial flooring"] },
        { _key: k("z"), question: "Which work do you want more of?", options: ["Hardwood and engineered wood", "LVP and laminate", "Tile and stone", "Carpet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for flooring companies: keyword research by material and job, pages for installation and refinishing, brand and project pages, Google Maps and visibility in AI answers. Flooring sits between retail and a trade. The customer first chooses a material and a look, often in a showroom or on a phone at night, and only then needs someone to measure, prepare the subfloor and install it. The searches follow that order, and a flooring website has to answer both halves: a list of brands alone loses the people looking for an installer, and a phone number alone loses the people still choosing."),

        h2("SEO for flooring companies: showroom retailers, mobile installers and refinishers"),
        p("“Flooring company” covers three different businesses, and each one competes for its own searches:"),
        li("showroom retailers that sell product and arrange installation — customers search by brand, material and “flooring store near me”, and visit before they buy"),
        li("installers who work from a van, often subcontracting for stores and builders while taking direct jobs — customers search “LVP installation” or “tile installer” with the town"),
        li("hardwood refinishers — customers search “floor sanding”, “refinish hardwood floors” or “dustless refinishing”, usually for a house they own or have just bought"),
        p("Many companies do two or three of these. Each needs its own section of the site, its own photos and its own way to book."),

        h2("Flooring SEO keywords: material, job, room and look"),
        p("Keyword research for a flooring company is built from the materials you install, the jobs you take and the words customers use for rooms and problems. The usual groups:"),
        li("material — “luxury vinyl plank installation”, “engineered hardwood flooring”, “porcelain tile installer”, “carpet installation”"),
        li("job — install, replace, refinish, repair, stairs, removal of the old floor, subfloor leveling"),
        li("room or problem — “basement flooring options”, “waterproof flooring for kitchen”, “squeaky floor repair”, “flooring for dogs”"),
        li("look — “white oak floors”, “herringbone wood floor”, “wide plank flooring”, searched while the customer is still choosing"),
        p("The data also shows which searches lead to the map, which to big retailers and which already show an AI Overview. That decides what to build first — usually the materials with the best margin, in the towns you want to work in."),

        h2("Flooring installation pages: LVP, engineered hardwood, tile and carpet"),
        p("Each material is a separate decision for the customer and a separate search, so each gets a page. What a good installation page explains, beyond “we install it”:"),
        li("subfloor preparation — leveling, moisture testing on concrete, and what happens when the old floor has to come out first"),
        li("how long a typical room or a whole floor takes, and whether the family can stay in the house"),
        li("where the material fits and where it does not: vinyl plank in basements and kitchens, solid hardwood above grade, tile in bathrooms and entryways"),
        li("transitions, stairs, baseboards and furniture moving — the details behind most complaints when nobody mentions them in advance"),
        p("These pages need your jobs and your answers. A page assembled from a manufacturer’s brochure reads like every other installer’s page in the area, and Google has no reason to choose yours."),

        h2("Hardwood floor refinishing SEO: sanding, recoating and the refinish-or-replace question"),
        p("Refinishing is searched by a different customer: someone who found oak under old carpet, bought a house with worn floors or manages a rental between tenants. The searches are “hardwood floor refinishing near me”, “floor sanding cost”, “dustless floor refinishing” and “refinish or replace hardwood floors”. A refinishing page earns them when it covers:"),
        li("a full sand and refinish versus a screen and recoat, and how you decide which one the floor needs"),
        li("stain colors on the wood species you usually work with, shown on real floors"),
        li("dust control, odor and the time before people, pets and furniture can go back on the floor"),
        li("when boards are too thin or too damaged to sand again, and replacement is the better answer"),
        p("The refinish-or-replace question is where the customer decides whom to trust. A page that lists the signs pointing either way often gets the call."),

        h2("Flooring store SEO: brand pages, samples and in-home measure appointments"),
        p("A showroom stocks Shaw, Mohawk, COREtec, Bruce or other manufacturers, and the easy move is to import their catalogs. Those descriptions already sit on the manufacturer’s site and on hundreds of retailer sites, so copied product pages rarely rank. What works better for a flooring store:"),
        li("one page per brand or collection you carry, with where it suits, what you think of it and photos of it installed by your crew"),
        li("a sample request and an in-home measure booking on every brand and material page"),
        li("showroom hours, parking and what to bring — room sizes, photos, cabinet and paint colors"),
        li("the warranty in plain words: what the manufacturer covers and what your installation warranty covers"),

        h2("Price per square foot on a flooring website: cost pages that bring calls"),
        p("“How much does it cost to install LVP”, “hardwood refinishing cost per square foot” and “tile installation cost” are among the most common flooring searches, and AI Overviews answer them with national averages. A cost page with your own ranges keeps the customer on your site instead. It says what the per-square-foot price includes and what is added on top:"),
        li("removal and disposal of the old floor"),
        li("subfloor repairs and leveling"),
        li("stairs, usually priced per step"),
        li("moving furniture and appliances, trims and transitions"),
        p("Published ranges filter out the customers who were never going to pay for proper preparation, and the ones who call already know roughly where they stand."),

        h2("Flooring project photos for SEO: product, pattern and room in every caption"),
        p("Flooring photos are searched as much as they are looked at. People type “herringbone white oak living room” or “gray vinyl plank kitchen” while choosing, and Google Images shows what it can read. A flooring project page names the exact product and color, the pattern, the room and the town — “Engineered white oak, herringbone, living room in [town]” — and shows the details that prove the craftsmanship: stair nosings, the transition to tile, the cut around a fireplace hearth. The same photos posted only on Instagram are close to invisible in Google search."),

        h2("Commercial flooring SEO: builders, property managers and apartment turnovers"),
        p("Commercial work arrives through other people: general contractors who sub out flooring, property managers replacing carpet between tenants, office and retail fit-outs, multifamily developers. They search “commercial flooring contractor [city]” or “carpet tile installation” and check whether you handle volume, schedules, insurance certificates and night or weekend work. A commercial page lists the building types you work in, the materials — carpet tile, sheet vinyl, rubber, polished concrete if you offer it — your crew size and how bids are requested. These searches are few, but one property manager can send work every month."),

        h2("Local SEO for flooring companies: Google Business Profile for a showroom or a service area"),
        p("For “flooring near me” and “floor refinishing near me” the map comes first, and the right setup depends on how you work:"),
        li("a showroom keeps its address visible, with a primary category such as “Flooring store” and hours that match the door"),
        li("a mobile installer or refinisher sets a service area of the towns the crew really covers and hides the home address, with “Flooring contractor” or “Floor refinishing service” as the category"),
        li("photos of finished floors, named by material and town, added through the busy months"),
        li("reviews that name the material and the room, requested when the last piece of trim goes on"),
        p(
          "The full map work for a flooring business — listings, review replies, spam competitors — is covered on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Angi, Thumbtack and big-box installation programs compared with flooring SEO"),
        p("Many installers take part of their work from Home Depot and Lowe’s installation programs, from lead platforms such as Angi or Thumbtack, or from national brands like Empire Today. That work keeps crews busy, but the customer belongs to the store or the platform, and someone else sets the margin. SEO builds the other side: customers who found your name, booked your measure and pay your price. Most flooring companies keep both and shift the balance over a few years."),
        p(
          "Remodelers and general contractors who do flooring as part of bigger jobs compete in a different search; their version is on the ",
          link("SEO for contractors", "/seo-for-contractors"),
          " page.",
        ),

        h2("Flooring SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("A growing share of flooring questions never reach a search results page: “vinyl plank or engineered hardwood for a basement”, “how long does hardwood refinishing take” or “good flooring installers near me” go to ChatGPT, Perplexity or Google’s AI Overviews, which build the answer from sources they can read and verify. Work on those answers goes by two names, generative engine optimization (GEO) and answer engine optimization (AEO). For a flooring business it covers:"),
        li("material comparisons written from your installs, including where each material fails"),
        li("cost ranges and timelines in plain text, not only inside a PDF quote"),
        li("the brands you are authorized to sell or certified to install, stated the same way on the site and the profile"),
        li("structured data naming the business, its services and its service area"),
        p(
          "At the start and again a few months later, I put questions about your company to these assistants and save their answers. The method is described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much SEO for flooring companies costs"),
        li("Flooring SEO audit of the website, product pages and Google Business Profile: from 250 €, one-off, with fixes listed in order of impact."),
        li("One-off work — material, refinishing and brand pages, a cost page, structured data: 250–700 €."),
        li("Monthly SEO for a flooring company — new pages, project write-ups, map and reviews, AI visibility, reports in calls and measure bookings: from 800 € per month; in very competitive markets from 1,300 € per month."),
        p(
          "For a one-van installer, the audit plus a few material pages is often all the SEO needed. How monthly work runs is explained on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page; all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for flooring companies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO cost for a flooring company?", "With me, an audit of the website and Google profile is from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive markets. Tell me whether you run a showroom, install or refinish, and which towns you cover, and I will name a fixed price."],
          ["How soon does flooring SEO bring calls?", "Changes to the Google profile often show in the map after a few weeks. New material and refinishing pages usually need three to five months to rank, longer in metros with many flooring stores. Cost and project pages keep bringing visits for years once they rank."],
          ["Should a flooring store use the manufacturer’s product descriptions?", "Use them for specifications, not as the page text. The same descriptions appear on the manufacturer’s site and on hundreds of retailers. Your own notes — where the product suits, how it wears, photos from your installs — are what make the page worth ranking."],
          ["Is SEO worth it for a one-person flooring installer?", "Usually in a small form: a Google profile with a real service area, three or four pages for the materials you install, project photos with captions and a review after every job. The audit shows whether monthly work would pay for itself in your area."],
          ["Should I show my price per square foot on the website?", "Ranges, yes. Customers search for costs before they call, and a page with your ranges and what they include brings fewer price shoppers and more people ready to book a measure. Exact quotes still come after the measure."],
          ["Can ChatGPT recommend my flooring company?", "It can, when someone asks for an installer in your area, though no one can promise it will pick you. The odds improve when the site names your materials, brands and service area in plain sentences, your material answers are specific, and your details and reviews match across Google and other listings. I record what assistants say about you at the start and again later."],
          ["Does it work to hire an SEO consultant in Poland for a US flooring business?", "Yes. Everything is done remotely and in English. Warsaw is about six hours ahead of the East Coast, so my afternoon is your morning and calls fit the start of your day. Invoices are issued in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your flooring company: what to send me"),
        p(
          "Tell me your company name, share links to the site and the Google Maps listing, and say whether you sell from a showroom, install, refinish or do all three, the materials you want more of and the towns you cover. Within one business day you get what I would change first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
