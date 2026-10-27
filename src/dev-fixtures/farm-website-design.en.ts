// Landing page fixture: Farm website design (EN), group «farm-website-design».
// New page.
// Semantic core: ref/batch-h2.md, farm / agritourism group (US): farm website
// 1,000 (grid 3,600) and farm web design 320 (H1, metaTitle, several H2) ·
// farm website design (grid 320; H1, cost H2, FAQ). Related searches: farm
// website design template / ideas / examples / free, 10 best farm websites,
// free agriculture website templates (templates H2, FAQ). Brand phrases in the
// group (State Farm, Fleet Farm, Knott’s Berry Farm, farm dating, Farm Sim) and
// farm-start questions (grants, how to start a farm) are noise — not targeted.
// Intent: ref/intent-check-delta.md — «farm website» vs «farm website design»
// 1 of 10 shared URLs (localline.co how-to-build guide), 2 shared domains. The
// first SERP is mixed (farm news, farmers.gov, Upstart Farmers, Reddit, site
// builder reviews) = farmers working out how to make a site; the second is
// studios, galleries and builders (Fireart, Dribbble, DesignRush, GrazeCart,
// Awwwards, Webflow) = owners choosing a designer or a template. One page
// serves both: practical «what a farm site needs» plus a designer’s offer.
// Reader: a family farm that sells direct — stand, farmers markets, CSA,
// meat and egg pre-orders, U-pick, events, wholesale to chefs and shops.
// Angles: sales channels decide the structure, weekly availability list edited
// from a phone, ordering with pickup slots, delivery routes and deposits for
// meat shares (Landi Room payment proof), CSA sign-up and waitlist, stand hours,
// markets and directions to a rural address with Google Maps («farm stand near
// me»), U-pick calendar and daily status, events and school visits (Sasha Dith
// booking proof), practices and certifications as exact text, wholesale page,
// templates and farm platforms (Local Line, GrazeCart — both from the SERP) vs
// custom (Felgilab, tyre storage — owners edit their own pages), AI-readable
// build (Giuseppe), cost.
// NOT on this page: overnight stays and agritourism lodging
// (/bed-and-breakfast-website-design — neighbour, linked once); tastings of the
// farm’s own wine or cider (/winery-website-design — neighbour, linked once);
// ongoing map and review work (/services/local-seo-services — linked); other
// small local businesses (/small-business-website-design — linked).
// Owner’s rules: every page covers AI search; design is included in the price;
// never say there are no clients from the visitor’s industry; no timelines in
// weeks (not in the brief), no invented figures.
import { p, h2, li, link, k } from "./pt";

export const farmWebsiteDesignEn = {
  lang: "en",
  group: "farm-website-design",
  slug: "farm-website-design",
  title: "Farm website design and development",
  heading: "Farm Website Design for Farms That Sell Direct",
  excerpt:
    "Farm website design for family farms that sell direct: a list of what’s in season that you update from your phone, online orders with pickup slots and deposits for meat shares, CSA sign-ups, farm stand hours with directions that work on back roads, and pages for U-pick days, farm events and wholesale buyers.",
  seo: {
    metaTitle: "Farm Web Design: Orders, CSA and Farm Stand | Bandziuk",
    metaDescription:
      "Farm website design: weekly harvest list, online orders with pickup slots, meat share deposits, CSA sign-ups, farm stand hours, U-pick and events. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Harvest list you edit yourself"],
  heroPhonePoints: ["In season this week", "Reserve a half hog", "Farm stand open 9–6", "U-pick today: open"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple farm website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Farm website with a weekly availability list, online orders with pickup slots and delivery days, deposits for meat shares, CSA sign-up, events and a wholesale page, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with farm website design",
      items: [
        { _key: k("o"), iconName: "file-text", title: "A weekly availability list", text: "Changed from your phone in the field" },
        { _key: k("o"), iconName: "shield-check", title: "Orders, pickup slots and deposits", text: "Eggs, boxes, meat shares, holiday birds" },
        { _key: k("o"), iconName: "layers", title: "CSA and box subscriptions", text: "Shares, pickup sites, skipped weeks, waitlist" },
        { _key: k("o"), iconName: "map-pin", title: "Farm stand, markets and directions", text: "Hours, market days, a pin on your real gate" },
        { _key: k("o"), iconName: "users", title: "U-pick, events and wholesale", text: "Bookings for visitors, a price list for chefs" },
        { _key: k("o"), iconName: "sparkles", title: "Clear to Google and AI assistants", text: "Products, hours and practices as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple farm website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Orders, deposits, CSA, events, wholesale", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: websites with price lists, online payments and bookings",
      subtitle:
        "These sites share the working parts a farm site is built from. For Felgilab, a wheel-renovation workshop in Warsaw, I rebuilt the site on WordPress around service and price pages — the job a farm’s product and price list does. A Warsaw tyre-storage business runs a one-page WordPress site where the owner rewrites the SEO texts on his own, just as a farmer keeps the weekly harvest list current. Landi Room, a Warsaw salon, sold its online course more than 100 times from the first Google Ads campaign, each buyer paying through Stripe Checkout: the kind of online payment that takes deposits for meat shares and pre-orders for veg boxes. The Next.js site of DJ and producer Sasha Dith pairs a video gallery with a booking form and opens in under a second, which is what a page for farm dinners and U-pick days needs. And for a renovation and property-investment company in Warsaw I made a premium design in which big photos of finished work sell, as your fields and harvest will.",
      picks: [
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "e-commerce-landing-page-with-secured-video-access",
        "official-website-for-dj-and-producer-sasha-dith",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your farm website",
      subtitle: "Within one business day you get a proposed page list for the farm, which sales channel leads the home page, and a fixed price.",
      contextLabel: "Farm name, website or Facebook page",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How do you sell now?", options: ["Farm stand and farmers markets", "Facebook, Instagram and phone orders", "A farm platform or store builder", "An older website"] },
        { _key: k("z"), question: "What should the site handle first?", options: ["Weekly orders and pickup", "CSA or box subscriptions", "Meat shares with deposits", "Visits: U-pick, events, school trips"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Farm website design is the service I offer family farms that sell straight to the people who eat their food: the planning, design and build are mine alone, from the weekly harvest list to online orders and pickup, for one price agreed up front. The site tells a neighbor what is for sale this Saturday, takes a deposit on a half hog in February, sends a CSA member to the right pickup point and gets a chef’s order in before Tuesday’s delivery run."),

        h2("Farm website design for farms that sell direct"),
        p("Most farms that ask me for a website sell through several channels at once, and each channel needs a page of its own rather than a line on the home page:"),
        li("a farm stand or farm shop with seasonal hours"),
        li("farmers markets, with their days and stall locations"),
        li("CSA shares or weekly veg boxes"),
        li("meat, eggs, honey and holiday birds ordered ahead"),
        li("pick-your-own fields, farm events and school visits"),
        li("wholesale to restaurants, grocers and food co-ops"),
        p("Before I draw anything, we rank your channels by the income they bring and the time they take. The strongest gets the main button on every page; the others sit one tap away in the menu, so a CSA farm and a U-pick farm end up with very different home pages."),

        h2("A “what’s in season now” list you update from your phone"),
        p("The question a farm hears most is “do you have … this week?”. The answer belongs in a list on the home page, the stand page and the order form:"),
        li("each product with a status — available, almost gone, sold out, expected in late June"),
        li("the price and the unit: per pound, per dozen, per bunch, per quart"),
        li("a short note where it helps: “first sweet corn of the year”, “eggs limited until the pullets start laying”"),
        p("Changing it takes about as long as sending a text. You open the admin on your phone, tap a product, switch its status and save; every page that shows it changes at once. No laptop at ten at night, and no three-week-old Facebook post telling people you still have tomatoes."),

        h2("Online ordering on a farm website: pickup slots, delivery days and deposits for meat shares"),
        p("Orders placed ahead let you harvest for real customers instead of guessing. The flow follows how your farm hands food over:"),
        li("pickup slots at the farm or at a market stall, each with a limit, so Saturday morning does not turn into a queue"),
        li("delivery days by route, with an order cutoff the evening before each run"),
        li("quantity limits for scarce items, so nobody is promised twelve dozen eggs in a week the hens laid eight"),
        li("pre-orders with a deposit for quarter, half and whole beef, pork shares and holiday turkeys"),
        p("Meat shares are where a deposit matters most. The customer pays it online when reserving; where the final price depends on hanging weight, the price per pound is shown up front and the site states that the balance is due after processing. Like Landi Room’s Stripe Checkout in my portfolio, the order is paid online and confirmed at once, with a reminder the day before pickup."),

        h2("CSA and veg box subscriptions on a farm website"),
        p("A CSA is sold before the season, often in winter, when the farm needs cash for seed and labor. The sign-up page explains the deal plainly: share sizes with a photo of a typical July box, the first and last pickup dates, pickup sites with their days and hours, and the price, paid in full or in installments. Members get an account where they skip a week before a vacation, switch pickup site or add eggs and bread to their box. When the shares run out, the form becomes a waitlist, and next year’s sign-up goes to that list first."),

        h2("Farm stand hours, farmers markets and directions to a rural address"),
        p("Rural addresses confuse navigation apps: the pin lands across a field, or the route ends at a locked gate. The visit page fixes that with:"),
        li("a map pin placed by hand on your real entrance, plus written directions from the nearest highway exit with a landmark — “turn left after the white church, look for the egg sign”"),
        li("where to park, and whether a car with a trailer can turn around"),
        li("stand hours by season, and a banner for the days you close early"),
        li("how people pay at the stand: cash, card or an honor box"),
        li("your farmers markets: which market, which day, the hours and where your stall stands"),
        p(
          "The same name, address, hours and pin go into your Google Business Profile, so someone searching for a “farm stand near me” or “raw honey near me” on a Sunday sees the same facts on Google Maps as on your site. Ongoing work on the map listing and reviews is described on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Pick-your-own calendar and daily field updates on a farm website"),
        p("U-pick visitors drive out on a weekend morning, and they leave unhappy if the patch was picked clean the day before. The page gives them three things. A season calendar shows the usual weeks for each crop — strawberries, blueberries, peaches, apples, pumpkins — marked as estimates, because the weather has the last word. A status line at the top says what is open today, set from your phone at dawn: “Open 8–2, good berries in the north field” or “Closed today after the rain”. A short list of rules and prices — containers, price per pound or per bucket, dogs or no dogs — saves you phone calls in the busiest hours of your year."),

        h2("Farm events, school visits and bookings on a farm website"),
        p("Farm dinners, workshops, harvest festivals and open days each get a page with the date, what is included, the price and a booking form or ticket that stops at your number of places. School visits go through a request form with the date, group size and age, so you can answer in one reply. For DJ and producer Sasha Dith I built a site where a video gallery and a booking form share the page and it still opens in under a second — the pairing farm events need."),
        p(
          "If you also rent rooms or cabins, overnight stays work differently; that side is covered on the ",
          link("bed and breakfast website design", "/bed-and-breakfast-website-design"),
          " page. Farms that pour their own wine or cider for visitors will find tastings on the ",
          link("winery website design", "/winery-website-design"),
          " page.",
        ),

        h2("Your farm story, growing practices and certifications written as text"),
        p("People who buy from a farm want to know who grows their food and how. Tell them in your own words: who works the land, how long the family has farmed it, what you raise and why. Then state your practices exactly, on a page of their own:"),
        li("certifications you actually hold, with the certifying body and the year — “certified organic” only if you are certified"),
        li("what you do without a certificate, described as practice: “no synthetic pesticides on our vegetables”, “cattle on pasture from April to November”"),
        p("Exact wording protects you from complaints. Photos come from your own farm across the year — the fields in spring, the crew at harvest, the animals, the stand on a busy morning. A stock picture of a red barn says nothing about your place."),

        h2("A wholesale page for restaurants, chefs and grocery stores"),
        p("Chefs and shop buyers need other facts than home cooks. A separate wholesale page — open, or behind a simple password if your prices are not public — lists the weekly availability with case and pack sizes, the minimum order, delivery days and the cutoff for each, how invoicing and payment terms work, and how to order: a form that remembers the buyer’s details, or the person who handles accounts. Kept apart from the retail shop, it spares a home cook the surprise of eggs sold in fifteen-dozen cases."),

        h2("Farm website templates, examples and free builders vs a custom farm website"),
        p("Search for farm website design ideas or “10 best farm websites” and you get galleries of landscape photos; the farm sites that sell share plainer habits — current availability, a clear way to order, visit details that are right today. A free template from a site builder, or a storefront from a farm e-commerce platform such as Local Line or GrazeCart, puts a small farm online quickly, and for a single product line it may be all you need."),
        p(
          "The limits show as the farm grows: pickup slots and delivery routes that will not fit together, a CSA in a separate tool, and fees that can rise with your sales. A custom site is built around your channels, on WordPress or on Next.js with a headless CMS, and can still use your farm platform for checkout where it does that job well; the code, the domain and the customer list stay with the farm. Felgilab and the Warsaw tyre-storage business both got WordPress sites whose owners edit their own price and text pages, the self-service a farmer needs in May. More on that build is on the ",
          link("WordPress development", "/services/wordpress-development-services"),
          " page, and sites for other local trades are on ",
          link("small business website design", "/small-business-website-design"),
          ".",
        ),

        h2("A farm website that ChatGPT and Google AI Overviews can read"),
        p("People now ask ChatGPT or Google’s AI Overviews things like “where can I pick blueberries near Lancaster this weekend” or “which farm nearby sells pasture-raised eggs”. The reply is built from text the assistant can read, so everything that matters sits in the HTML as words: products and their status, prices and units, stand hours, market days, pickup sites, practices and the town you are in. None of it lives only in a chalkboard photo or a PDF price list. Pages carry LocalBusiness, Product and Event structured data, and the facts match your Google profile. I built Giuseppe’s practice site in Milan on these rules, and ChatGPT already shows its new pages in answers."),
        p(
          "Keeping a farm in those answers over time is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much farm website design costs"),
        p("Design is part of the price, not an extra line on the invoice."),
        li("A simple farm website — home, what’s in season, a visit page with stand hours and market days, the farm story, contact and an order request form: 700–1,400 €."),
        li("A farm website with a weekly availability list, online orders with pickup slots and delivery days, deposits for meat shares, CSA sign-up, events and a wholesale page: from 2,000 €."),
        p(
          "Running costs after launch are hosting, the domain and payment fees. The steps from brief to launch are on the ",
          link("website development", "/services/website-development"),
          " page, and every price I charge is on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Farm website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a farm website cost?", "A simple farm site costs 700–1,400 €; a site with online orders, pickup slots, meat share deposits, CSA sign-up, events and a wholesale page starts at 2,000 €. Design is included. I send a fixed price once I know your products, your sales channels and the tools you already use."],
          ["Can I update what’s available every week from my phone?", "Yes, the availability list is built for that. You change a product’s status, price or note on your phone, and every page that shows it updates. It needs neither a computer nor a developer."],
          ["Can customers pay a deposit for a beef or pork share online?", "Yes. The reservation takes a card deposit through Stripe or your farm platform, the rule for the balance is shown before payment, and each reservation appears in your admin with the customer’s notes for the butcher."],
          ["Can the site run CSA sign-ups and several pickup locations?", "Yes. Shares, season dates, pickup sites and installment payments are set in the admin, and members skip weeks or change their pickup site themselves. If your CSA already runs in a platform you like, the site links to it with the right share selected."],
          ["Is a free farm website template enough?", "For a farm that sells one thing in one place, often it is. A custom site pays off once you combine a stand, markets, pre-orders, a CSA or wholesale, and want the weekly list, the orders and the visit details to stay in step."],
          ["How long does it take to build a farm website?", "Most of the time goes into gathering product lists, prices, photos and pickup rules rather than into code. You get the schedule together with the fixed price; a project started in late fall or winter is live before spring sign-ups and the first harvest."],
          ["Can a web designer in Poland build a website for a US farm?", "Yes. All of it runs online and in English. Warsaw is on Central European Time, so my afternoon and evening fall in your morning, and a call fits before market or after morning chores. I invoice in EUR or another currency by agreement."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order farm website design: what to send me"),
        p(
          "Send a link to your current site or Facebook page, a list of what you sell with prices and units, how people buy from you today — stand, markets, CSA, pre-orders, wholesale — your pickup sites and delivery days, and a few photos of the farm. My answer is a proposed page list with one fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
