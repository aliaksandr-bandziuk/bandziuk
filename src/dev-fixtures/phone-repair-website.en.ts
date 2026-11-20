// Landing page fixture: website design for phone repair shops (EN),
// group «phone-repair-website». NEW page — create-landing.cjs, root level.
//
// Measured (research/dataforseo/repair-niches.md, 19.11.2026): owner side is
// zero in this niche («phone repair website» — no data), unlike appliance
// repair where «appliance repair website» is 170. So this page runs on the
// owner's own questions and on assistants, and says so nowhere —
// it simply does not lean on a phrase that is not there.
//
// BACKBONE, distinct from the two neighbours:
//   · phone-repair-seo — being found: model pages, prices, maps;
//   · appliance-repair-website — a dispatch desk that sends a van.
// Here nobody is dispatched: the customer walks in. So the site is a shop
// window whose only job is to make him cross four hundred metres to your
// counter — price for HIS model, part in stock now, how long he waits, which
// floor, and whether you are open at this minute.
import { p, h2, h3, li, link, k } from "./pt";

export const phoneRepairWebsiteEn = {
  lang: "en",
  group: "phone-repair-website",
  slug: "phone-repair-website-design",
  title: "Website Design for Phone and Electronics Repair Shops",
  heading:
    "Website design for phone repair shops: a shop window that gets him to walk the four hundred metres to your counter",
  excerpt:
    "I build websites for phone and electronics repair shops. Nobody is dispatched in this trade — the customer walks in, and he walks in to whoever answers four questions first: the price for his model, whether the part is in stock, how long he waits and which floor you are on. Website from €2000, audit of an existing one €250.",
  seo: {
    metaTitle: "Phone Repair Website: Prices, Stock, Walk-in",
    metaDescription:
      "Website design for phone repair shops: a price list by model, stock and waiting time, directions to the counter, fast on a broken phone and ready for AI search.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Price list by model", "Found by ChatGPT and AI search", "Website from €2000"],
  heroPhonePoints: ["Price for his exact model", "Part in stock today", "Forty minutes while you wait", "Which floor, which entrance"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Website for a phone repair shop: price list by model, stock and waiting time, directions", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page for one brand, one repair or one shopping centre", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Audit of an existing phone repair website: prices, speed, mobile", price: 250, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "Website design for a phone repair shop: what the work consists of",
      items: [
        { _key: k("o"), iconName: "file-text", title: "A price list he can read by model", text: "Not «from», not «on request» — the number" },
        { _key: k("o"), iconName: "clock", title: "Waiting time and stock on the page", text: "Forty minutes while you wait, part in today" },
        { _key: k("o"), iconName: "map-pin", title: "Directions to the actual counter", text: "Floor, entrance, what the sign looks like" },
        { _key: k("o"), iconName: "sparkles", title: "Ready for AI search from day one", text: "Structured data, readable text, real figures" },
        { _key: k("o"), iconName: "layers", title: "Laptops and tablets built in", text: "A bigger ticket, and almost nobody publishes it" },
        { _key: k("o"), iconName: "target", title: "Fast on a phone with a cracked screen", text: "Under two seconds, one thumb, bad signal" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: local counters where the customer decides before he arrives",
      subtitle:
        "What these share with a repair shop: the decision happens on a phone in the street, the price and the wait settle it, and the growth came from structure and content rather than bought links. A wheel repair workshop in Warsaw. A car service with the same walk-in pattern. An internet provider checked address by address. A beauty studio selling one service online. A 3D scanning company whose organic traffic grew twenty-nine times.",
      picks: [
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
        "web-development-a-website-for-internet-prowider",
        "e-commerce-landing-page-with-secured-video-access",
        "architecture-website-rebuild-and-seo-scan",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("A phone repair website is a shop window, not a booking system"),
        p("I build websites for phone and electronics repair shops. The work starts with one list I need from you: the models you keep parts for, and the price for each."),
        p("This trade does not dispatch anybody. No van leaves, no appointment is agreed. A man with a cracked screen is standing on a street that has three repair counters on it, and he is deciding which door to open."),
        p("He gives you about forty seconds. In that time your site has to answer four things: what it costs for his exact model, whether you have the part now, how long he will wait, and where your counter actually is."),
        p("Everything else — the history of the business, the certificates, the photographs of soldering irons — is decoration that pushes those four answers below the fold."),
        p("So the site is built in that order:"),
        li("the price list by model, reachable in one tap from the home page;"),
        li("stock and waiting time stated next to the price;"),
        li("directions precise enough to find a counter inside a shopping centre;"),
        li("opening hours that are true right now, including today;"),
        li("and only then everything a normal website usually starts with."),

        h2("The price list by model: the page that decides the walk"),
        p("Most repair shops publish «from 49 €» or nothing at all, because they are afraid of being undercut. The result is that the decision moves to a phone call the customer does not want to make."),
        p("A table of models and repairs with real numbers does the selling. Screen for his model, battery, charging port, each with a price, the part type and the time."),
        p("The part that costs nothing and converts: a line saying what changes the price — original versus compatible part, a bent frame, water damage found after opening. Nobody argues at the counter about a number he already read."),

        h3("Stock and waiting time, written like a shop and not like a service centre"),
        p("«In stock today» and «forty minutes while you wait» are the two phrases that move someone standing in the street."),
        p("If your stock is in a system, the site can show it per model. If it is in your head, the simple version works almost as well: the twenty models you always have, listed by name, and a line saying anything else is ordered by tomorrow."),

        h2("Directions that get him to the counter, not to the building"),
        p("Half of these shops sit inside a shopping centre, a passage or on the first floor of a block, and their websites give an address that is technically correct and practically useless."),
        p("Write the entrance, the floor, what the sign says, the shop next door, and where to park for ten minutes. Add a photo of the storefront taken from the direction most people arrive from."),
        p("People do not get lost on the map. They get lost in the last fifty metres, and that is the part every site leaves out."),

        h2("Who builds websites for phone repair shops, and what to ask them"),
        p("Most are built by a general studio that starts from a template and a photo gallery. It looks fine and leaves the four answers somewhere on page three."),
        p("Three questions sort them out. How will a customer see the price for his own model, in how many taps. Where will the opening hours and the waiting time appear. What does the page look like on a phone with a broken screen, one hand, outdoors, in the sun."),
        p("If the answer is about the design system, you are buying a brochure. In a trade decided in forty seconds a brochure simply loses."),

        h3("The model and repair pages the SEO work will need later"),
        p("A site built as five pages has nowhere to put the forty model pages that bring the traffic later, and gets rebuilt the moment you start on search."),
        p(
          "So the structure goes in from the start, even if the first version carries ten models. How the search side works is on the page about ",
          link("SEO for phone repair shops", "/seo-for-phone-repair-shops"),
          ".",
        ),

        h2("Technical requirements: a broken phone, one hand, bad signal"),
        p("This site is opened on the worst device in the world: the one that is already broken, outdoors, on mobile data, by somebody who is annoyed and in a hurry."),
        p("That sets everything. Under two seconds to first paint. Price list reachable in one tap. Phone number as a button that dials. WhatsApp as a button that opens a chat with the model already written in."),
        p("And one thing almost nobody tests: the site has to stay readable with the screen half broken, which in practice means large type, strong contrast and no critical information inside images."),

        h2("Phone repair websites and AI search: ChatGPT, Perplexity, Gemini and AI Overviews"),
        p("«How much does it cost to replace a screen on this model» and «is it worth repairing a phone this old» are asked of assistants before any shop is chosen."),
        p("The assistant answers from readable text and names shops whose pages carry figures: price by model, waiting time, part type, warranty."),
        p("A site made of photographs has nothing to quote. A site built as a price list is nothing but quotable facts, which is why this pays twice."),

        h3("Generative engine optimization (GEO), answer engine optimization (AEO) and structured data"),
        p("GEO and AEO are the same job from two sides: being named inside the generated answer, not only in the list of links. Behind them sit ordinary things — structured data, readable text and company details that match everywhere."),
        p(
          "On a new site this costs nothing extra, it is done while building. On an existing one it is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ".",
        ),

        h2("How much a website for a phone repair shop costs"),
        p("A full site is from €2000: price list by model, stock and waiting time, directions, repair pages, speed and structured data. A landing page for one brand, one repair or one shopping centre is €700–1400."),
        p("An audit of the site you already have is €250 and answers one question: three fixes or a rebuild."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A website for your repair shop",
      subtitle: "Send what you have now and I reply within one working day: what I would build and what it would cost.",
      contextLabel: "Your shop or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["No website", "An old site", "A one-page site", "Only a Google listing"] },
        { _key: k("z"), question: "Are your prices published?", options: ["Full list by model", "A few examples", "No", "Only «from»"] },
        { _key: k("z"), question: "Where is your counter?", options: ["Street level", "Shopping centre", "Office building", "Several points"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Websites for phone repair shops: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a website for a phone repair shop cost?", "From €2000 for a full site with the price list by model, stock and waiting time, directions and repair pages. A landing page is €700–1400. An audit of an existing site is €250."],
          ["How long does it take to build?", "Three to five weeks for a full site. The slow part is the price list: getting forty real numbers out of a shop usually takes longer than building the pages that display them."],
          ["Who builds websites for phone repair shops?", "Mostly general studios working from templates, which is why these sites all look alike and convert badly. The work that matters here is unglamorous: a price table by model, stock, waiting time and directions to the counter."],
          ["Do we have to publish prices by model?", "It is the single thing that makes this site work. Your competitor already knows your prices; the person who does not is the customer standing in the street deciding which door to open."],
          ["We only have a Google listing. Is that enough?", "It gets you seen and it cannot carry forty model prices, the waiting time or the directions to your floor. The listing brings him to the decision, the site is where the decision is made."],
          ["What if our stock changes every day?", "Then publish the twenty models you always have and a line saying anything else arrives by tomorrow. Precision matters less than the customer knowing he will not walk over for nothing."],
          ["Can you work with the site we already have?", "Often yes and it is cheaper. The audit says plainly which it is — three fixes or a rebuild — and I have no interest in selling a rebuild that is not needed."],
          ["Will the site rank in search?", "It is built so that it can: model and repair structure, clean text, structured data, speed. Ranking it is the ongoing work described on the phone repair SEO page."],
          ["Will the shop be found through ChatGPT and other assistants?", "Increasingly, and this trade is well placed for it: assistants name shops whose pages carry figures they can quote — price by model, waiting time, part type, warranty. A site made of photographs has nothing to quote; a site built as a price list is nothing but quotable facts."],
          ["Who writes the content?", "I draft and you correct. What converts is what only a repair shop knows: which compatible parts are worth fitting, what water damage really costs, which repairs you refuse and why."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a website for a phone repair shop: what to send me"),
        p("Send the site you have now, or say you have none. Add the models you keep parts for, your prices for the common repairs, and where exactly your counter is."),
        p("I reply within one working day: what I would build, in what order, and what it would cost."),
      ],
    },
  ],
};
