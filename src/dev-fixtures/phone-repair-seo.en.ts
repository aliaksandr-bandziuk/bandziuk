// Landing page fixture: SEO for phone and electronics repair shops (EN),
// group «phone-repair-seo». NEW page — create-landing.cjs, root level.
//
// Measured (research/dataforseo/repair-niches.md, 19.11.2026):
// owner side is zero in English («seo for phone repair shops», «phone repair
// website» — no data). Customer side is 52 120: «phone screen repair» 49 500,
// «tablet repair service» 1 900, «screen protector installation» 720.
// So the page cannot be won on an owner-side phrase: it is written for the
// owner, in his language, and the customer-side numbers are the argument.
//
// BACKBONE, distinct from appliance-repair-seo (device × brand × fault, home
// visit, diagnostic fee): phone repair is a same-hour, on-foot decision. The
// customer is standing in the street with a cracked screen choosing between
// three shops within five hundred metres, and he decides on three things the
// site must answer before he walks: do you have the part for MY model in stock,
// how long, how much. Everything else on the site is decoration.
//
// Screen protectors: measured 720 in EN and nothing in PL/RU, so they are a
// section about cheap services used as doors — not the axis, and not a page.
import { p, h2, h3, li, link, k } from "./pt";

export const phoneRepairSeoEn = {
  lang: "en",
  group: "phone-repair-seo",
  slug: "seo-for-phone-repair-shops",
  title: "SEO for Phone and Electronics Repair Shops",
  heading:
    "SEO for phone repair shops: being the shop someone walks into with a cracked screen instead of the one next door",
  excerpt:
    "I do SEO for phone and electronics repair shops. Your customer is standing in the street with a broken phone, choosing between three shops, and he decides on three things: do you have the part for his model, how long it takes and what it costs. I put those answers on the page, by model, so he walks to you. Audit €250, ongoing €800 a month.",
  seo: {
    metaTitle: "Phone Repair Shop SEO: Models, Prices, Maps",
    metaDescription:
      "SEO for phone and electronics repair shops: a page per model and repair, prices and turnaround in the open, Google Maps, and visibility in ChatGPT.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per model and repair", "Found by ChatGPT and Maps", "Audit from €250"],
  heroPhonePoints: ["iPhone screen, by model", "Price and time in the open", "Parts in stock today", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a phone repair shop: website, model pages, Google Business Profile, AI visibility", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: model and repair pages, price list, structured data, booking form", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a phone repair shop", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "SEO for a phone repair shop: what the work consists of",
      items: [
        { _key: k("o"), iconName: "file-text", title: "A page per model and repair", text: "Screen, battery, charging port — named by model" },
        { _key: k("o"), iconName: "clock", title: "Price and turnaround in the open", text: "The two things he checks before walking over" },
        { _key: k("o"), iconName: "map-pin", title: "Google Maps that matches the site", text: "Hours, photos, reviews, the same prices" },
        { _key: k("o"), iconName: "sparkles", title: "AI SEO: ChatGPT and Perplexity", text: "Where «is it worth repairing this phone» is asked" },
        { _key: k("o"), iconName: "layers", title: "Laptops and tablets as their own pages", text: "A bigger ticket than phones, and far less competition" },
        { _key: k("o"), iconName: "target", title: "Cheap services as doors", text: "Glass and batteries that lead to screens and boards" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: local workshops where the customer chooses in ten minutes",
      subtitle:
        "What these share with a repair shop: the customer decides fast and nearby, the price and the wait settle it, and the growth came from structure and content rather than bought links. A wheel repair workshop in Warsaw. A car service with the same walk-in pattern. An internet provider checked address by address. A beauty studio selling a single service online. A 3D scanning company whose organic traffic grew twenty-nine times.",
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
        h2("SEO for a phone repair shop starts with the three questions asked on the pavement"),
        p("I do SEO for phone and electronics repair shops. The work starts with one list I need from you: the models you keep parts for. Everything on the site is built from it."),
        p("Your customer is not researching. He is standing outside with a cracked screen, twenty minutes to spare, and three shops within walking distance."),
        p("He asks the same three things every time. Do you have the screen for my model, right now? How long will it take? How much?"),
        p("A site that answers all three in ten seconds wins him. A site that says «professional repair of mobile devices, individual approach, fair prices» loses him, and the shop owner never finds out why."),
        p("So the whole job is turning the site into an answer to those three questions:"),
        li("a page per model and per repair, because that is how he searches;"),
        li("the price and the wait written as numbers, not as a promise to call back;"),
        li("what you have in stock today, if your stock can be published at all;"),
        li("the map listing saying exactly what the site says;"),
        li("and the cheap jobs placed where they bring the expensive ones."),

        h2("Model pages for phone repair SEO: screen, battery and charging port"),
        p("The customer-side demand here is enormous. «Phone screen repair» alone draws 49 500 searches a month in the English-speaking market, «tablet repair service» 1 900."),
        p("He never types «phone repair service». He types his model and his fault: a cracked screen on a specific iPhone, a battery that dies by noon on a specific Samsung, a port that stopped charging."),
        p("One page per model and repair, each with the price, the time, the warranty and whether the part is original, compatible or refurbished — because that difference is what he will argue about at the counter anyway."),
        p("This sounds like a lot of pages. It is, and it is exactly where a small shop beats a chain: the chain publishes one page about «screen repair», you publish forty about the forty models people actually bring in."),

        h2("Who does SEO for phone repair shops, and what they actually change"),
        p("Almost nobody, which is why the niche is open."),
        p("Agencies sell these shops a city page, a profile and a monthly report. Meanwhile the three questions above stay unanswered on the site, and the shop keeps paying for ads to send people to a page that does not convert."),
        p("What I change, in order: the model pages, the published price list, the turnaround written per repair, the map listing and the photos, the booking form that asks for the model and the fault, and the pages for laptops and tablets that most shops never make."),

        h3("The job, what the customer types, and what the page has to prove"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["The job", "What the customer searches", "What the page has to prove"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["Screen replacement", "«phone screen repair», model + «screen»", "Price by model, time, part type, warranty"] },
        { _type: "tableRow", _key: k("r"), cells: ["Battery replacement", "model + «battery replacement»", "Price, time, what the old battery is worth"] },
        { _type: "tableRow", _key: k("r"), cells: ["Charging port and water damage", "«phone not charging», «water damaged phone»", "Diagnosis first, honest odds of recovery"] },
        { _type: "tableRow", _key: k("r"), cells: ["Board-level repair", "«motherboard repair», «data recovery phone»", "What you can do in house, what you send out"] },
        { _type: "tableRow", _key: k("r"), cells: ["Laptops and tablets", "«laptop repair service», «tablet repair service»", "Brands, parts, turnaround, loan device"] },
        { _type: "tableRow", _key: k("r"), cells: ["Screen protector, small jobs", "«screen protector installation»", "Price, that it takes minutes, walk-in welcome"] },
        { _type: "tableRow", _key: k("r"), cells: ["Buying and trade-in", "«sell broken phone»", "What you pay, what condition means"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Publishing a phone repair price list, and why the fear of it is misplaced"),
        p("Most shops refuse to publish prices, for a reason that sounds sensible: the competitor will undercut us."),
        p("He already knows your prices. He has a friend call you, or he walks in. The only person your silence keeps away is the customer deciding right now."),
        p("A price per model and repair, with a line on what changes it — original versus compatible part, a bent frame, water damage found after opening — brings people who arrive ready to pay, and ends the twenty calls a day that start with «how much for a screen».")

        ,
        h3("Cheap phone repairs as doors to expensive ones"),
        p("Fitting a glass protector or swapping a battery earns almost nothing. In search they are worth more than they look, because they bring somebody into the shop who later needs a screen."),
        p("The trick is to let them in without drowning in them: publish the small services with their price and the note that they are done while you wait, and keep them off the pages where the expensive repairs are decided."),

        h3("Laptops and tablets: the bigger ticket most repair shops forget"),
        p("«Laptop repair service» and «tablet repair service» are searched by people with a far higher budget and much less patience for a trip across town."),
        p("Most phone shops repair them already and never say so on the site. Two pages, written properly, often change the shop's average order value more than anything done to the phone pages."),

        h2("Local SEO for a repair shop: the map listing decides more than the site"),
        p("In this trade a large share of customers never opens your website. They open the map, look at the photos, read three reviews and walk."),
        p("So the listing and the site have to agree: the same hours, the same prices, the same services, real photographs of the counter and the workbench, and reviews answered in the language they were written in."),
        p("The site's job is to be what the listing links to — and to carry the model pages the listing cannot hold."),

        h2("AI SEO for a repair shop: ChatGPT, Perplexity, Gemini and AI Overviews"),
        p("«Is it worth repairing a phone with a broken screen or buying a new one» and «how much does an iPhone screen cost to replace» are assistant questions, asked before any shop is chosen."),
        p("The assistant answers from readable text and names shops whose pages commit to figures: price by model, turnaround, part type, warranty."),
        p("Three things decide whether you are named: text rather than photo galleries, numbers worth quoting, and the same shop details everywhere you appear."),

        h3("Generative engine optimization (GEO), answer engine optimization (AEO) and LLM SEO in practice"),
        p("GEO and AEO are the same job from two sides: being named inside the generated answer, not only in the list of links. LLM SEO is that work across language models."),
        p("It is five or six fixes, and they overlap almost entirely with what makes the site rank at all."),
        p(
          "On an existing site that is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ". When assistants describe the shop wrongly, that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),

        h2("Technical SEO for a repair shop site: speed, photographs, a form that asks the model"),
        p("These sites are built from photographs of repaired devices, and they load slowly on the one device that matters — a damaged phone on mobile data."),
        p("Keep the photographs, serve them small, and let the page open in under two seconds."),
        p("The form should ask for the model, the fault and whether the phone still turns on. Those three answers let you tell him on the phone whether the part is in stock, which is the only thing he wanted to know."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your repair shop",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Your shop or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you repair most?", options: ["Phone screens", "Batteries and ports", "Laptops and tablets", "Board-level work"] },
        { _key: k("z"), question: "Are your prices on the site?", options: ["Full price list", "A few examples", "No, we quote by phone", "Not sure"] },
        { _key: k("z"), question: "Where do customers come from now?", options: ["Walk-ins", "Google Maps", "Marketplaces", "Word of mouth"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for phone repair shops: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a phone repair shop cost?", "An audit is €250, one-off work €250–800, ongoing work €800 a month. The figure moves with how many models and repairs get their own pages and whether the site can be edited at all."],
          ["Who does SEO for phone repair shops?", "Very few people, honestly. Most agencies treat a repair shop like any local business: a city page, a profile, a report. The work that moves this trade is model-level pages with prices and turnaround, and it is rarely done, which is why it still works."],
          ["Should we publish our prices?", "Yes. Your competitor already knows them; the only person your silence keeps away is the customer deciding right now. A price by model with a line on what changes it also ends most of the «how much for a screen» calls."],
          ["Do we really need a page for every model?", "For the models you keep parts for, yes. That is exactly where a small shop beats a chain: the chain has one page about screen repair, you have forty about the phones people actually bring in."],
          ["Our customers come from Google Maps, not the website. Does SEO matter?", "The listing is half the job and the site is the other half: the listing is where he looks, the site is what makes the listing credible and what carries the model pages. They have to say the same thing — same hours, same prices, same services."],
          ["Is it worth making pages about laptops and tablets?", "Usually yes, and it is the fastest win. Those customers spend more and search less often for a shop nearby, and most phone shops repair laptops already without saying so anywhere on the site."],
          ["Will a customer find us through ChatGPT?", "Increasingly. «Is it worth repairing this phone or buying a new one» is asked there constantly, before any shop is chosen. Assistants name shops whose pages carry real figures and skip sites that are photo galleries."],
          ["How long before this brings customers?", "Map and profile fixes can show within weeks. Model pages usually take two to four months, longer in a big city where ten shops compete on the same street."],
          ["Who writes the pages?", "I draft and you correct. The credible part is what only a repair shop knows: which parts are worth fitting, what a water-damaged phone really costs to save, which repairs you refuse and why."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a phone repair shop: what to send me"),
        p("Send the site. Say which models you keep parts for, whether your prices are published, and where customers find you now."),
        p("I reply within one working day: what is holding the site back, which pages are missing, and what I would do first."),
      ],
    },
  ],
};
