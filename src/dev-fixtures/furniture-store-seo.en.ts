// Landing page fixture: SEO for furniture stores (EN), group «furniture-store-seo».
// NEW page — create-landing.cjs, root level.
//
// Why it exists (04.11.2026). Measured: «furniture store seo» 170. No paired
// website page in any language — this page carries the industry alone.
//
// SERP (checked 04.11.2026): SEO Takeoff, Elit-Web («Boost Your Local
// Visibility»), Hypotenuse, Portland SEO Growth, LinkGraph, Vocal, Gushwork,
// plus a Reddit thread «High-End Furniture Company SEO Strategy». Uniform
// agency intent, no trap, no split.
//
// CANNIBALISATION CHECK. Nearest existing page is /jewelry-store-seo, the
// site's other retail page. I read its headings: it already covers the whole
// e-commerce catalogue playbook in depth — keywords by type/metal/stone/
// occasion, category and filter pages and what to index, product page SEO,
// product descriptions, image SEO. /services/ecommerce-seo-services and
// /services/shopify-seo-services cover the mechanics generically.
// So this page must NOT be another catalogue-SEO page. It keeps catalogue
// material to one short section pointing at those service pages and spends its
// length on what is specific to furniture and absent everywhere else:
//   1. the query IS a dimension or an access constraint — furniture is bought
//      against a physical space, which jewellery never is;
//   2. lead time and stock decide the purchase (a sofa is weeks on order), so
//      «available now» is a category and a query, not a logistics detail;
//   3. the showroom is the conversion step — people want to sit on it — which
//      makes brand-stocked-in-city pages high intent, and shops hide brands
//      behind a logo strip;
//   4. delivery access, assembly and removal of the old piece;
//   5. returns on a large item, the dominant anxiety;
//   6. interior designers and trade accounts as a separate B2B reader.
import { p, h2, h3, li, link, k } from "./pt";

export const furnitureStoreSeoEn = {
  lang: "en",
  group: "furniture-store-seo",
  slug: "seo-for-furniture-stores",
  title: "SEO for Furniture Stores and Showrooms",
  heading: "SEO for a furniture store: how a buyer who has measured the room finds the piece that fits it",
  excerpt:
    "Furniture is the one category bought against a physical space. The searches are widths, doorways and «in stock», not product names — and most furniture sites keep every one of those facts inside an image. Audit from €250.",
  seo: {
    metaTitle: "Furniture Store SEO — audit from €250",
    metaDescription:
      "SEO for furniture stores: dimension and access searches, lead times and stock, brand pages that fill the showroom, delivery and returns. Audit €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Searches by size and access", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Widths, doorways, left or right facing", "In stock and lead times", "Brands you stock, by city", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a furniture store: catalogue, showroom pages and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: dimension and constraint pages, brand pages, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a furniture retailer", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a furniture store actually consists of",
      items: [
        { _key: k("o"), iconName: "grid", title: "Dimensions written as text, not drawn", text: "Width, depth, height, seat height, door clearance" },
        { _key: k("o"), iconName: "search", title: "Pages built around the room's constraint", text: "Narrow hallways, low ceilings, tight stairs" },
        { _key: k("o"), iconName: "list-checks", title: "In stock and lead time as a category", text: "Weeks to delivery, shown and searchable" },
        { _key: k("o"), iconName: "map-pin", title: "A page per brand you stock, by city", text: "People want to sit on it before buying" },
        { _key: k("o"), iconName: "shield-check", title: "Delivery access, assembly, old piece removed", text: "The questions asked before the price" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Corner sofa under 240cm, in stock, delivered this month»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why furniture searches are dimensions and doorways rather than product names"),
        p("Furniture is the one retail category bought against a physical space. The customer has already measured the alcove, counted the stairs and worried about the front door, and that is what they type: a console under eighty centimetres, a two-and-a-half-seat sofa, a corner unit facing left, a wardrobe for a sloped ceiling, a table that seats eight in a room four metres long. Nobody searches the name of a sofa they have never heard of."),
        p("Almost every furniture site makes those facts unsearchable. The dimensions live in a diagram image, the configuration lives in a dropdown, and the page text is three sentences about Scandinavian warmth. A search engine cannot read a drawing, so a shop with four hundred products that would each solve somebody's measuring problem is invisible to all of them."),
        li("every dimension in the page text, in the units your market uses, not only in an image;"),
        li("the measurements people actually search: seat height, depth, overall width, and the narrowest point it has to pass through;"),
        li("configuration spelled out — left or right facing, extendable to what length, reversible;"),
        li("the room constraint named, because that is the search: narrow, low-ceilinged, awkward stairs, rented flat;"),
        li("and a page for each constraint you can genuinely solve, not a filter nobody links to."),

        h3("Pages built around the problem, which no competitor is targeting"),
        p("The strongest pages a furniture retailer can publish are not categories. They are constraints: sofas that fit through a seventy-centimetre door, wardrobes for rooms with sloping ceilings, dining tables for narrow rooms, beds with storage for flats without a loft, furniture that can be carried up a tight staircase. These are real searches made by frustrated people with money ready, and the competition for them is almost nil, because every other shop is competing on the word sofa."),
        p("Each page is a short piece of advice plus the products from your own range that satisfy the constraint. It ranks because nothing else answers it, and it converts because the visitor has spent two weekends failing to find exactly this."),

        h2("Lead time and stock, which decide the purchase more often than price"),
        p("A sofa on order can be eight to fourteen weeks away, and a large share of furniture buyers are working to a date: a move, a renovation finishing, a baby, a lease starting. For those people availability outranks everything, and «in stock» is a search term rather than a logistics detail. A shop that shows lead time on each product and keeps a genuine available-now section wins them from a shop with better prices and no dates."),
        p("This is also the part most retailers get wrong in the opposite direction — a cheerful «fast delivery» banner with no figure anywhere. A number that is true, even a disappointing one, outperforms an adjective: somebody deciding between twelve weeks and four will not be annoyed by twelve, they will be annoyed in week six of a delivery they thought was quick."),

        h2("The showroom is the conversion step, so publish the brands you stock"),
        p("Furniture is one of the last categories where people want to sit on the thing before paying for it. That makes two searches unusually valuable, and most shops answer neither: a brand or collection name together with a city, and the question of where a particular piece can be seen in person."),
        p("Shops bury this. The brands they carry appear as a strip of logos on the home page, unlinked and unreadable, when each one deserves a page saying which collections are on the floor, which fabrics can be seen and touched, what can be ordered, and where in the showroom it is. Somebody searching a brand plus your city has already chosen the product and is only looking for the nearest place to try it — which is the shortest path to a sale a furniture retailer has."),
        p(
          "Where you want to be found by city and get the map results right, the groundwork is on the ",
          link("local SEO page", "/services/local-seo-services"),
          ".",
        ),

        h3("Delivery access, assembly and taking the old piece away"),
        p("Before the price, customers ask whether it will get up the stairs, whether anyone will build it, and what happens to the thing it is replacing. Each is a page, each is searched, and each removes a reason not to buy. Charging for assembly is fine; not saying whether it exists is what costs the order."),
        p("Returns on large items belong in the same group and carry the most weight of all. A page that states plainly what happens if a sofa does not fit, who pays to take it back and within how many days does more for conversion than any amount of lifestyle photography, and it is also a page that ranks, because every competitor keeps the answer in a terms document nobody reads."),

        h2("Interior designers and trade accounts as a second, separate reader"),
        p("A designer specifying furniture for a client's project buys differently from a household: they want lead times they can plan around, trade pricing, specification sheets, fabric samples, and confidence that a piece will still be available in four months. A page written for them reaches a buyer who orders repeatedly rather than once a decade."),
        p(
          "If designers are a channel you want, it is worth understanding how they are found too — that is ",
          link("SEO for interior designers", "/seo-for-interior-designers"),
          ". The catalogue mechanics behind all of this — category and filter pages, what to index, product pages at scale — sit on ",
          link("SEO for online stores", "/services/ecommerce-seo-services"),
          ", and for a shop on Shopify specifically, ",
          link("Shopify SEO", "/services/shopify-seo-services"),
          ". If you want to know what is wrong before committing to anything, that is the ",
          link("SEO audit", "/services/seo-audit"),
          ".",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: catalogues and local retail sites whose visibility I have run",
      subtitle:
        "What these share with a furniture retailer: a catalogue that has to be readable at scale, a local buyer who wants to see the thing, and growth from structure and content rather than bought links. A multilingual property catalogue, an e-commerce landing page with secured video, a WordPress rebuild, a car service business, and a renovation and investment firm.",
      picks: [
        "build-and-optimize-a-multilingual-real-estate-platform",
        "e-commerce-landing-page-with-secured-video-access",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your furniture store",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Store name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How do you sell?", options: ["Showroom only", "Online only", "Both", "Mostly to trade"] },
        { _key: k("z"), question: "Are dimensions in the page text?", options: ["Only in images", "Some of them", "Yes, all of them", "Not sure"] },
        { _key: k("z"), question: "Do you show lead times?", options: ["No", "A general promise", "Per product", "Only for in-stock items"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a buyer asks ChatGPT for furniture (GEO, AEO)"),
        p("«Find me a corner sofa under 240 centimetres, in a light fabric, in stock and delivered this month» is a request people now make of an assistant rather than filtering six websites, and furniture suits it unusually well, because every part of it is a number somebody has to have written down. The assistant answers from text it can read, so the same things decide whether a shop is named: dimensions and configurations as text rather than in diagrams, prices and lead times it can quote, stock that is current, and the same shop name, address and hours across the site, the Google profile and the directories."),
        p(
          "Getting an existing catalogue into a readable state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants describe the shop wrongly — a brand you dropped, a closed branch, delivery terms you changed — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for furniture stores: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a furniture store cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. What moves the number is the size of the catalogue, whether the platform lets dimensions and text be edited per product, and whether you sell from a showroom, online, or both."],
          ["Why do dimensions matter so much?", "Because they are the search. A customer who has measured an alcove types the measurement, and if your width lives inside a diagram image there is nothing for a search engine to match. Putting every dimension into the page text is usually the single highest-return change on a furniture site."],
          ["What is the first page you would add?", "One built around a constraint rather than a category — sofas that fit through a narrow door, wardrobes for sloping ceilings, dining tables for narrow rooms. These are real searches with almost no competition, and the visitor has usually been looking for weeks."],
          ["Should I publish lead times even when they are long?", "Yes. A real figure beats a vague promise, because a large share of furniture buyers are working to a date and will choose a shop that lets them plan. Twelve weeks stated loses fewer orders than «fast delivery» followed by twelve weeks."],
          ["We stock well-known brands. Does that help?", "It does, and most shops waste it. A brand name plus a city is a high-intent search by somebody who has already chosen the product and wants to try it nearby. A strip of unlinked logos answers none of it; a page per brand saying what is on the floor does."],
          ["Is the Google profile important if we also sell online?", "Very, because people want to sit on furniture before buying it. The profile earns the showroom visit, and current photographs of the actual floor do more than catalogue renders."],
          ["How long before it shows?", "First movement after about a month and a half, growth on a three to six month horizon. Constraint and brand pages often move faster than broad category pages because so little competes with them."],
          ["Do you write product descriptions for the whole catalogue?", "Not one by one for a catalogue of thousands — that is a template and a data problem rather than a writing one. I would fix the structure so dimensions, configurations and availability appear as text everywhere, then write properly the pages that earn it: constraints, brands and the main categories."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a furniture store: what to send me"),
        p("Send the site, say whether you sell from a showroom, online or both, and tell me which brands you stock and roughly how many products are in the catalogue. I reply within one working day with what is holding the site back, whether your dimensions are readable at all, and what I would do first — including which constraint pages your own range could already answer."),
      ],
    },
  ],
};
