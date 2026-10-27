// Landing page fixture: Bakery SEO (EN), group «bakery-seo». New page.
// Semantic core: BRIEF.md — bakery SEO phrases are about 10 a month per
// language (no measured EN phrase in ref/food-venues.md); a small page, still
// complete. H1, metaTitle and H2s carry «bakery SEO» / «SEO for bakeries»;
// customers’ searches are used as examples: bakery near me, custom cakes
// [city], birthday cake delivery, wedding cakes, gluten-free bakery,
// Thanksgiving pie pre-order.
// Intent: ref/intent-check-food.md — «bakery website» (1,900) SERP = bakeries
// and cakes.com (customers) → not targeted; «bakery website design» vs
// «bakery website» 0 of 10 shared → website pages are separate; bakery vs cafe
// 0 shared → this page shares no arguments with /cafe-seo.
// Angles: five search groups, custom cake pages (starting price by servings,
// lead time, captioned photos for Google Images), wedding cakes (tastings,
// price per serving), delivery vs pickup (one zone page, «cake for today»),
// gluten-free / vegan / allergy pages (precise claims), Google Business
// Profile (Bakery / Cake shop / Pastry shop, products, morning photos,
// sold-out hours), holiday pre-orders (Thanksgiving, Christmas, Easter),
// wholesale for cafes and offices, AI answers, reporting in orders.
// NOT on this page: the website build — cake order form, sizes, photo upload,
// deposits, catalog, allergen tables (/bakery-website-design — sibling,
// linked once); restaurant arguments (/restaurant-seo — linked once); map work
// in depth (/services/local-seo-services); ads and social media.
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s industry; no guaranteed rankings.
import { p, h2, li, link, k } from "./pt";

export const bakerySeoEn = {
  lang: "en",
  group: "bakery-seo",
  slug: "bakery-seo",
  title: "Bakery SEO",
  heading: "Bakery SEO for Bakeries, Cake Shops and Patisseries",
  excerpt:
    "I do bakery SEO for neighborhood bakeries, cake shops and patisseries: “bakery near me” on Google Maps, custom cake and wedding cake pages that rank, gluten-free and vegan pages people trust, holiday pre-orders ready before the season and a place in AI answers, measured in cake orders and calls.",
  seo: {
    metaTitle: "SEO for Bakeries: Custom Cakes and Google Maps | Bandziuk",
    metaDescription:
      "Bakery SEO: “bakery near me” on the map, custom and wedding cake pages, gluten-free pages, holiday pre-orders, wholesale and AI answers. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Custom cakes, holidays, Google Maps", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Bakery near me · Open now", "Custom birthday cake", "Gluten-free cupcakes", "Pre-order holiday pies"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Bakery SEO audit: website, Google Business Profile, local competitors and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off bakery SEO work: custom cake, wedding, dietary and holiday pages, photo captions, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a bakery or cake shop", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with bakery SEO",
      items: [
        { _key: k("o"), iconName: "layers", title: "Custom and wedding cake pages", text: "Price by servings, lead time, real cakes" },
        { _key: k("o"), iconName: "image", title: "Cake photos Google can read", text: "Captions and file names for Google Images" },
        { _key: k("o"), iconName: "shield-check", title: "Gluten-free and vegan pages", text: "Precise about ingredients and your kitchen" },
        { _key: k("o"), iconName: "map-pin", title: "“Bakery near me” on the map", text: "Categories, products, morning photos" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "Lead times, prices and diets as text" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in cake orders and pre-orders", text: "Source passed with each order request" },
      ],
      prices: [
        { _key: k("r"), label: "Bakery SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a bakery", value: "from 800 € / month", note: "cake pages, holidays, map, AI", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: small businesses that sell to nearby customers",
      subtitle:
        "What they share with a bakery: a customer nearby searching on a phone, and a page that has to turn that search into an order. In Warsaw, an auto repair shop got its local SEO, Maps listing and per-service pages from me — the map work that also decides “bakery near me”. Felgilab’s rebuilt WordPress site, for a wheel-renovation workshop in Warsaw, lists each service with its price, much like the starting prices a cake page needs. Landi Room, a Warsaw beauty salon, sells an online course through a landing page with Stripe Checkout and made 100+ sales from its first Google Ads campaign — the same payment flow as a cake deposit or a holiday pre-order. Pages I built for a Milan psychotherapist show up in ChatGPT answers, and ScanM2, which does 3D laser scanning, gets 29 times the organic traffic it had before I rebuilt its site.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "e-commerce-landing-page-with-secured-video-access",
        "psychotherapist-website-milan",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your bakery",
      subtitle: "Within one business day you get the first fixes I would make — cake pages, the map listing or holiday pages — with a fixed price.",
      contextLabel: "Bakery name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What should search bring you more of?", options: ["Custom and birthday cakes", "Wedding cakes", "Walk-in customers for bread and pastries", "Holiday pre-orders"] },
        { _key: k("z"), question: "What kind of bakery do you run?", options: ["Neighborhood bakery", "Cake shop or patisserie", "Gluten-free or vegan bakery", "Several shops or wholesale"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Bakery SEO is the work that brings people who search for a bakery near me, a custom birthday cake in your town or holiday pies to order straight to your shop — through Google Maps, your own website and the answers AI assistants give. I do the audit, write the pages and change the code myself, for neighborhood bakeries, cake shops and patisseries with one or a few shops. Bakery searches are fewer than searches for places to eat, but many of them end in an order worth far more than a coffee: a tiered cake, a box of pastries for an office or a holiday pre-order."),

        h2("Bakery SEO keywords: bakery near me, custom cakes and fresh bread"),
        p("Before writing anything I pull search data for your city and the towns around it. For a bakery it splits into five groups, and each needs its own page or place:"),
        li("the shop — “bakery near me”, “bakery open now”, “sourdough bread”, “croissants near me”"),
        li("cakes to order — “custom cakes [city]”, “birthday cake order”, “smash cake”, “number cake”"),
        li("weddings and events — “wedding cakes [city]”, “cupcakes for a baby shower”, “dessert table”"),
        li("diet — “gluten-free bakery”, “vegan birthday cake”, “sugar-free cake”"),
        li("dates and delivery — “birthday cake delivery”, “cake for tomorrow”, “Thanksgiving pie pre-order”"),
        p("Most bakeries are found only for the first group, because the site is a home page with a phone number. The other four are where orders with a deposit come from."),

        h2("Custom cake SEO: pages for birthday cakes, kids’ cakes and cakes for tomorrow"),
        p("Someone ordering a cake types the occasion and the town, then looks for three answers: can you make it, by when, and roughly for how much. A page for each kind of cake you sell gives those answers in its first lines:"),
        li("the starting price by number of servings, and what raises it — tiers, sugar figures, fresh flowers"),
        li("the lead time: how many days ahead to order, and what you can still do for tomorrow"),
        li("a gallery of real cakes, each photo captioned with flavor, size and occasion"),
        li("how ordering works, in one sentence, with a link to the order form"),
        p("Captions and file names matter more than they seem. A photo called IMG_4821 tells Google Images nothing; “two-tier unicorn birthday cake, vanilla and raspberry, 20 servings” can bring a parent who searched for exactly that. The form itself — sizes, dates, photo upload, deposit — is part of the website, not of SEO."),

        h2("Wedding cake SEO: tastings, flavors and price per serving"),
        p("Couples start looking for a cake months before the date and compare several bakers. Their searches are about the process as much as the cake: “wedding cake tasting [city]”, “wedding cake cost per slice”, “semi-naked wedding cake”. The page that ranks explains how a tasting is booked and what it costs, lists flavors and fillings, gives a price per serving with the minimum order, and says how delivery and setup work at the venue. A short page for each style you make often — buttercream, semi-naked, sugar flowers — catches the searches by style. Directories such as The Knot and WeddingWire send their own inquiries, and a listing there that links to your wedding page helps that page too."),

        h2("Birthday cake delivery and pickup pages for a bakery: zones, fees and same-day cakes"),
        p("Cakes are fragile, so most bakeries deliver within a short radius or not at all, and the usual advice about a page per town does not fit. One delivery page with zones, fees and the earliest delivery time works better, with equal space for pickup: hours, where to park, how to carry a tall cake. For “cake for today” searches, a page listing the cakes usually ready in the case each morning, with sizes and prices, catches people who remembered a birthday at noon. A town gets its own page only when you deliver there often and have something specific to say about it."),

        h2("Gluten-free, vegan and allergy-friendly bakery pages"),
        p("People who search for a gluten-free bakery or a nut-free birthday cake read your site more carefully than anyone else, and they stay for years once they trust you. The page that ranks for them is precise:"),
        li("which products are made without gluten, eggs, dairy or nuts, and which only replace one ingredient"),
        li("whether they come from a dedicated kitchen or a shared one, and what you do about cross-contact"),
        li("ingredients and allergens for each product, in text, updated when a recipe changes"),
        p("Vague claims lose these customers on the first visit and can harm someone. I write what you confirm about your kitchen and nothing more; the rules for labeling food “gluten-free” come from food law in your country."),

        h2("Google Business Profile for a bakery: categories, product photos and early hours"),
        p("“Bakery near me” is decided on the map, and a few settings carry most of the weight:"),
        li("“Bakery” as the primary category, with “Cake shop”, “Pastry shop” or “Wedding bakery” added only if you do that work every week"),
        li("the products section with your bestsellers, each with a photo, a price and a link to its page"),
        li("photos taken in the morning when the shelves are full, not in the afternoon when they are empty"),
        li("hours that say what really happens — if you close when the bread is sold out, the description says so"),
        p(
          "Reviews that name the cake, the occasion and the flavor help twice: with the map ranking and with the next customer deciding whether you can make their cake. A short request in the pickup message collects them. Map work in more depth is on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Seasonal bakery SEO: Thanksgiving pies, Christmas cookies and Easter pre-orders"),
        p("Holiday orders are a large part of a bakery’s year, and they are decided earlier than most owners expect. People search “Thanksgiving pie pre-order [city]” from late October, Christmas cookie boxes from late November and Easter cakes a few weeks before. A pre-order page for each season goes live six to eight weeks ahead with this year’s menu, prices, the order deadline and the pickup days, and is linked from the home page and the profile. Out of season it does not disappear: it says when orders open next and offers a reminder by email, so the people who find it in January still become customers in November."),

        h2("Wholesale bakery SEO: bread and pastries for cafes, restaurants and offices"),
        p("A bakery that supplies other businesses has a second, quieter set of searches: “wholesale bakery [city]”, “bakery supplier for cafes”, “office pastry delivery”. There are few of them, but one account can mean deliveries six days a week. The page that wins them names what you supply, minimum orders, delivery days and times, the cut-off for next-day orders and how a new account starts — a tasting box or a trial week. Buyers compare suppliers on reliability, so a line on how you handle a missed delivery says more than any adjective."),

        h2("Bakery SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Questions like “which bakery in Denver makes gluten-free birthday cakes”, “where can I order a smash cake by Saturday” or “how much is a wedding cake per slice in Austin” now go to ChatGPT, Perplexity and Google’s AI Overviews as well. The assistant picks a few bakeries and a reason for each from what it can read. Getting into those answers is called GEO (generative engine optimization) or AEO (answer engine optimization); for a bakery it comes down to:"),
        li("lead times, starting prices per serving and delivery zones written as sentences, not only inside an order form"),
        li("dietary claims stated precisely, because assistants repeat them almost word for word"),
        li("Bakery structured data with the address, hours and a link to the menu"),
        li("the same facts on Google, Yelp, wedding directories and your own site"),
        p(
          "Before the work and a few months into it, I ask the assistants your customers’ questions and record which bakeries come up. More about this on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Measuring bakery SEO in cake orders, pre-orders and calls"),
        p("The report counts what a bakery owner counts: custom cake requests and deposits that started from search, holiday pre-orders by source, calls and direction requests from the profile, and the pages that brought them. Order forms pass the source along with each request, so a wedding inquiry can be traced to the tasting page or a style page."),

        h2("How much bakery SEO costs"),
        li("Bakery SEO audit — website, Google Business Profile, local competitors and AI answers: from 250 €, one-off."),
        li("One-off work — custom cake, wedding, dietary and holiday pages, photo captions, profile clean-up, structured data: 250–700 €."),
        li("Monthly SEO for a bakery — new pages before each season, map work, reviews, AI visibility and reports in orders: from 800 € per month."),
        p(
          "For many neighborhood bakeries the audit and a handful of pages are enough for a long time. If the site needs a cake order form, pre-orders or a product catalog, the ",
          link("bakery website design", "/bakery-website-design"),
          " page explains how I build one. A bakery that also serves full meals at tables will find more on the ",
          link("restaurant SEO", "/restaurant-seo"),
          " page. Monthly work is explained on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page; the full price list is on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Bakery SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a bakery cost?", "Audits start at 250 €, separate tasks cost 250–700 €, and monthly SEO starts at 800 €. Tell me what you bake, which orders you want more of and where they come from today, and you get a fixed price."],
          ["Does a bakery need a separate page for each kind of cake?", "For the kinds people search for and you sell often — birthday, kids’, wedding cakes, cupcakes — yes. Rare requests can share one custom cake page."],
          ["Will photos of my cakes help my bakery rank?", "Yes, when Google can understand them: a descriptive file name, a caption with flavor, size and occasion, and a page of text around them. Many people look for cake ideas in Google Images, and a captioned photo can lead them to you."],
          ["When should a bakery publish holiday pre-order pages?", "Six to eight weeks before the holiday, and for Thanksgiving earlier still, because people start planning in October. The profile should show the order deadline a few weeks ahead too."],
          ["Can my site say “gluten-free” if my kitchen also uses wheat flour?", "Describe exactly what you do: which products contain no gluten ingredients and that they are made in a shared kitchen. Labeling rules come from food law in your country; I write only what you confirm."],
          ["Can ChatGPT recommend my bakery for custom cakes?", "Yes, when someone asks for a cake baker nearby and your lead times, prices and specialties are easy to read and match across your site and listings. Nobody can guarantee a mention; I record the answers before and after the work."],
          ["Can you do SEO for a US bakery from Poland?", "Yes, everything is done online and in English. When it is 2 to 10 p.m. in Warsaw, the East Coast is at 8 a.m. to 4 p.m. and the West Coast at 5 a.m. to 1 p.m., so a call fits after the morning bake. Invoices are in EUR, or in another currency by agreement."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your bakery: what to send me"),
        p(
          "Send your bakery’s name, website and Google Maps link, what you bake and which orders you want more of — custom cakes, weddings, holiday pre-orders, wholesale — how far you deliver and how customers order today. You get the first fixes I would make and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
