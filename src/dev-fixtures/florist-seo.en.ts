// Landing page fixture: Florist SEO (EN), group «florist-seo». New page.
// Semantic core: ref/creative-leisure.md, florists group (US): florist seo 90,
// seo for florist 90 (one demand — H1, metaTitle, several H2, FAQ). The
// design phrases of the same group (florist website design 170, florist
// website template 90, best florist websites 50) belong to the sibling page.
// Intent: ref/intent-check-creative-leisure.md — «florist seo» vs «florist
// website design» 0 of 10 shared URLs, 0 shared domains → separate pages.
// SEO SERP = florist platforms and wire-service networks (FloraNext, Flower
// Shop Network, flowerstoreinabox, flora.market), Reddit and small SEO
// agencies → the searcher is a flower shop owner. «website for florists»
// returns flower shops themselves (customers’ demand) — not targeted.
// Angles: search groups (delivery, occasion, shop, weddings), same-day
// delivery area pages, occasion and holiday pages that keep their URL,
// wedding florist pages (real weddings, venues, price ranges), corporate
// accounts, wire services and order gatherers vs own shop, Google Business
// Profile, seasonal calendar (Valentine’s Day, Mother’s Day, prom, holidays),
// AI answers (Florist structured data), cost.
// NOT on this page: shop build, product photos, checkout, delivery slot
// mechanics, subscriptions, wedding inquiry form (/florist-website-design —
// sibling); map work in depth (/services/local-seo-services); running ads;
// the occasion type the owner excludes (not mentioned in any form).
// Neighbour page: the brief names none for florists, so only the sibling,
// local SEO, SEO strategy, AI and pricing pages are linked.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed rankings.
import { p, h2, li, link, k } from "./pt";

export const floristSeoEn = {
  lang: "en",
  group: "florist-seo",
  slug: "florist-seo",
  title: "Florist SEO",
  heading: "SEO for Florists and Flower Shops",
  excerpt:
    "I do SEO for florists: same-day delivery pages for the neighborhoods and towns you serve, occasion pages from birthdays to Mother’s Day, wedding flower pages, Google Maps and reviews, so people order from your shop directly instead of through a wire service or a national order gatherer.",
  seo: {
    metaTitle: "Florist SEO for Local Flower Shops | Bandziuk",
    metaDescription:
      "Florist SEO: same-day delivery area pages, occasion pages, Google Maps, holiday peaks and AI answers, measured in flower orders and calls. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Delivery area and occasion pages", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Same-day flower delivery", "Mother’s Day flowers", "Wedding florist", "Call or order online"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Florist SEO audit: website and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off florist SEO work: delivery area, occasion and wedding pages, profile clean-up, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a flower shop", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for florists",
      items: [
        { _key: k("o"), iconName: "search", title: "Search data for your towns and occasions", text: "Delivery, birthdays, holidays, weddings — by area" },
        { _key: k("o"), iconName: "map-pin", title: "Same-day delivery area pages", text: "Only the neighborhoods your drivers really reach" },
        { _key: k("o"), iconName: "layers", title: "Occasion and holiday pages", text: "Same address every year, refreshed before each peak" },
        { _key: k("o"), iconName: "file-text", title: "Wedding and corporate flower pages", text: "Real weddings, venues, price ranges, office accounts" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "Delivery areas, cutoffs and hours written as text" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in orders and calls", text: "Direct orders compared with wire-service orders" },
      ],
      prices: [
        { _key: k("r"), label: "Florist SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a flower shop", value: "from 800 € / month", note: "delivery pages, holidays, map, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: sites I have optimized for Google and AI search",
      subtitle:
        "What these projects share with a flower shop is search that has to turn into calls and orders. For a Warsaw auto repair shop I did local SEO, the Google Maps listing and service pages — the same map-and-neighborhood search a florist depends on. A psychotherapist’s site in Milan has location pages that work like delivery area pages, and its new pages already appear in ChatGPT answers. After ScanM2, a 3D laser scanning company, moved to a rebuilt WordPress site, organic traffic grew 29-fold and leads arrive every week. Cyprus VIP Estates has a catalog with filters whose SEO I run every month, and a catalog of listings is ranked much like a catalog of bouquets. My own site carries the full technical layer — schema.org, sitemap, hreflang — that a flower shop needs too.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "psychotherapist-website-milan",
        "architecture-website-rebuild-and-seo-scan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "develop-and-optimize-a-personal-website-with-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your flower shop",
      subtitle: "Within one business day you get my first priorities for your site and Google listing, with a fixed price.",
      contextLabel: "Flower shop name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which orders should search bring you?", options: ["Same-day delivery in your area", "Wedding and event flowers", "Office and corporate accounts", "Holiday orders"] },
        { _key: k("z"), question: "Where do most of your orders come from now?", options: ["Google Maps and walk-ins", "A wire service such as FTD or Teleflora", "Instagram and phone calls", "Your own website"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I do SEO for florists: the work that makes your flower shop the one people find when they search for same-day flower delivery in your town, a florist near me or wedding flowers for a date next June. Flowers are often bought on short notice, the same day or the day before, so the shop that shows up at that moment gets the order and the one that does not loses it to a national website. There is no account manager in between: I also build websites, so the problems I find in the audit are the ones I fix in the code."),

        h2("Florist SEO keywords: how people search for flowers and same-day delivery"),
        p("Flower searches fall into four groups, and each one needs its own kind of page:"),
        li("delivery — “flower delivery [town]”, “same day flower delivery near me”, “send flowers to [hospital or neighborhood]”"),
        li("occasion — “birthday flowers delivered today”, “anniversary roses”, “Mother’s Day flowers [town]”"),
        li("the shop itself — “florist near me”, “flower shop open now”, “florist on [street]”"),
        li("weddings and events — “wedding florist [city]”, “bridal bouquet prices”, “centerpieces for a company dinner”"),
        p("Before writing anything I pull search data for your town, the towns around it that you deliver to and the occasions you sell. Delivery searches are usually where wire services and national flower sites compete hardest, while shop and wedding searches are where a local florist wins most easily. The data decides where to start in your market."),

        h2("Same-day flower delivery pages for the neighborhoods and towns you serve"),
        p("Someone sending flowers types the recipient’s town, not yours. A shop in one suburb may deliver to eight towns around it, and each of those towns is a separate search. Delivery area pages answer it, but only for places your drivers really reach and only with details that belong to that place:"),
        li("the delivery fee and the same-day cutoff time for that area"),
        li("hospitals, senior communities, office parks and venues there, with the rules they set for flower deliveries"),
        li("photos from real deliveries in that town, without recipients’ faces"),
        li("how to order for a front desk, a gated community or a business address"),
        p("Twenty town pages that swap only the town name are treated as doorway pages and filtered out. Eight pages with real local details do more than forty copies, and each new area gets a page only once you deliver there regularly."),

        h2("Occasion pages for a flower shop: birthdays, anniversaries, Valentine’s Day and Mother’s Day"),
        p("People shop for flowers by occasion far more often than by flower name. Birthday, anniversary, new baby, get well, thank you, Valentine’s Day, Mother’s Day, prom and graduation, holiday centerpieces — each has its own searches and deserves its own page. The page shows the arrangements that suit the occasion with prices, the delivery terms and cutoff, and a few lines for the card for people who do not know what to write. Google and AI assistants get a clear answer to “what should I send for…”, with your shop next to it."),
        p("Holiday pages keep the same address every year. A Mother’s Day page that is deleted in June and rebuilt in April starts from zero each spring; a page that stays live and is refreshed with the season’s arrangements keeps the links and history it has earned."),

        h2("Wedding and event florist SEO: real weddings, venue pages and price ranges"),
        p("Couples look for a wedding florist many months before the date, and event planners book flowers for galas and launches weeks ahead. They search in their own words: “wedding florist [city]”, “boho wedding flowers”, “event florist for a gala”, “how much do wedding flowers cost”. They want to see weddings you have done, not catalog bouquets. Wedding pages that rank are built from your own work:"),
        li("a page for each real wedding with the venue, the season, the flowers used and the couple’s permission to show the photos"),
        li("venue pages where you have decorated several weddings, written from experience: load-in times, ceiling heights, what works in that room"),
        li("a price-range page that explains what moves the budget — guest count, installations, season, imported flowers"),
        p("Venue pages also attract links from planners and photographers who worked the same day, and for a local shop such links are worth more than any directory listing."),

        h2("Corporate flower SEO: offices, hotels and restaurants"),
        p("Weekly lobby arrangements, reception desks, restaurant tables, client gifts, holiday orders for a whole team — business buyers search for “office flower delivery [city]”, “weekly flowers for business” or “corporate flower gifts”. These searches are few, but one account can mean an order every week for years. A business page names the services, how a recurring order is set up, how invoicing works and how fast you handle a last-minute gift for a client. How the account is ordered and paid for is a website task; making the page findable is SEO."),

        h2("Wire services and order gatherers vs your own flower shop in search"),
        p("Search for flower delivery with a town name and the top results often include national websites that are not local shops at all. Some are wire services such as FTD and Teleflora, which pass orders through a network of member florists. Others are order gatherers that look like a local shop in search, take the customer’s payment and forward the order to a real florist after keeping a share of it. The customer pays full price, the shop that makes the bouquet receives less, and neither the sender nor the recipient learns your name."),
        p("Wire orders can fill quiet days, and many shops keep their membership. SEO wins the orders that do not need a middleman: a site that ranks for your delivery areas, a Google listing with your real name, address and photos, and pages that make clear the order goes straight to the shop that arranges it. Reports separate direct orders from network orders, so you can watch the share move."),

        h2("Google Maps for florists: Google Business Profile, photos and reviews"),
        p("“Florist near me” and “flower shop open now” are decided by the map. For a flower shop the profile work is concrete:"),
        li("“Florist” as the primary category, delivery listed as a service, and hours kept right on holidays, when people check them most"),
        li("photos of the week’s arrangements, the shop front and the counter, so the listing shows a shop that is open and busy"),
        li("a review request sent with the delivery confirmation, asking the sender to mention the occasion and the town"),
        li("your best sellers added as products in the profile, each linked to its page on the site"),
        p(
          "Map work in more depth — categories, service areas, listings in other directories — is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Seasonal SEO for flower shops: Valentine’s Day, Mother’s Day and holiday peaks"),
        p("A florist’s year has a few sharp peaks: Valentine’s Day, Mother’s Day, the winter holidays, prom and graduation season, and the wedding months. Searches rise weeks before each date, and a page needs time to be crawled and to climb. The working calendar runs ahead of the sales calendar:"),
        li("six to eight weeks before a holiday — the holiday page refreshed with this year’s arrangements and prices and linked from the home page and the delivery pages"),
        li("two to four weeks before — holiday hours, holiday photos and a post with the order deadline in the Google profile"),
        li("the week itself — cutoffs and sold-out notices written plainly on the page, so search traffic does not turn into disappointed calls"),
        li("after the peak — the page stays live and the reviews it brought are answered"),
        p("Quiet months go to new delivery area pages, wedding pages and technical fixes, so the site is stronger before the next peak than it was before the last one."),

        h2("Florist SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("People now ask ChatGPT, Perplexity or Google’s AI Overviews things like “which florist in [town] delivers on Sunday”, “what flowers to send for a 50th anniversary” or “how much do wedding flowers cost in [city]”. Those answers are assembled from pages the assistant can read and cross-check; the work of getting into them goes by the names GEO (generative engine optimization) and AEO (answer engine optimization). In a flower shop it comes down to four things:"),
        li("delivery areas, fees, cutoff times and hours written as plain sentences, not only inside a checkout widget"),
        li("occasion guides and wedding price ranges answered directly on your pages, signed by the owner or the lead florist"),
        li("structured data that describes the business as a Florist, with its address, hours and delivery area"),
        li("one name, address and phone everywhere — site, Google, Yelp, wedding directories — because assistants cross-check listings"),
        p(
          "I save what assistants say about your shop, and which competitors they suggest, at the start and again later, so the change is visible. More about this work on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Measuring florist SEO in orders, calls and delivery areas"),
        p("Rankings are a means, not the result. Reports for a flower shop show online orders that came from search, calls and direction requests from the map, which delivery area pages and occasion pages brought them, and how the share of direct orders compares with wire-service orders over the season. Orders come from your shop platform and point-of-sale system, so the numbers match what you see in the till."),

        h2("How much florist SEO costs"),
        li("An audit of the flower shop’s website and Google Business Profile: from 250 €, paid once, ending with a list of fixes ranked by what they will bring."),
        li("One-off work — delivery area pages, occasion and holiday pages, wedding pages, profile clean-up, structured data: 250–700 €."),
        li("Monthly SEO for a flower shop — new pages ahead of each peak, Google Maps, reviews, AI visibility and reports in orders and calls: from 800 € per month."),
        p(
          "If the shop itself needs rebuilding — product pages, delivery slots, checkout — the ",
          link("florist website design", "/florist-website-design"),
          " page explains how I build a shop like that. How monthly work is organized is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page, and the full price list is on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Florist SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a florist cost?", "An audit is from 250 €, separate tasks are 250–700 €, and ongoing monthly SEO is from 800 €. Tell me your towns, your delivery areas and where orders come from now, and I will name a fixed price."],
          ["How long does florist SEO take to bring orders?", "Changes to the Google profile and a steady flow of reviews often move the map listing within weeks. New delivery area and occasion pages tend to need three to five months, more in large cities. That is why holiday pages are prepared a season ahead, not in the week of the holiday."],
          ["Should a florist leave a wire service to do SEO?", "Not necessarily. Many shops keep their wire-service membership for the extra orders and use SEO to grow the orders that come directly. Reports show both, so you can decide later with real numbers."],
          ["Do I need a separate page for every town I deliver to?", "Only for towns and neighborhoods where you deliver regularly and have something specific to say: fees, cutoffs, hospitals, venues. Places you reach once a month can be listed on one delivery page. Copies with only the town name changed do more harm than good."],
          ["When should a flower shop start SEO for Valentine’s Day and Mother’s Day?", "Two to three months ahead. The holiday page should be updated and linked well before searches start to rise, and the Google profile should show holiday hours and the order deadline a few weeks before the date."],
          ["Can ChatGPT recommend a local florist?", "Yes, when someone asks for one. It picks shops whose delivery area, hours and reviews it can verify and whose pages answer common questions plainly. Nobody can promise a mention; plain, checkable facts make one more likely, and I record what the assistants say at the start and a few months later."],
          ["Can you do SEO for a US flower shop from Poland?", "Yes. Everything is done online and in English. When it is afternoon or evening in Warsaw, it is morning or midday on the US East Coast and in the Central time zone, so calls fall before the shop’s rush. Invoices and the contract are in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your flower shop: what to send me"),
        p(
          "Send your shop name, your site and Google Maps links, the towns and neighborhoods you deliver to, your same-day cutoff, which orders search should bring — delivery, weddings, corporate accounts — and whether you belong to a wire service. You get my first priorities and a fixed price in reply. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
