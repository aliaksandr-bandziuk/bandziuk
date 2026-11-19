// Landing page fixture: SEO for 3D printing and prototyping services (EN),
// group «printing-3d-seo». NEW page — create-landing.cjs, root level.
//
// Measured (research/dataforseo/scanning-niches.md, 18.11.2026):
// «3d printing services» 49 500, «3d printing service near me» 8 100,
// «rapid prototyping services» 1 000. The largest demand in the whole cluster
// by an order of magnitude — and the only niche where the problem is an excess
// of the wrong demand rather than a shortage of it.
//
// BACKBONE, distinct from the five siblings (surveyors: trigger document;
// surveyor website: intake desk; engineering: discipline × code; scanning:
// deliverable not technology; drones: three businesses in one word; CAD:
// a professional out of hours). Here SEO's job is to FILTER: the shop drowns
// in «print me a phone holder for five euros». The fix is an instant quote from
// an uploaded file, pages per material and technology — the words a serious
// buyer actually types — and a minimum order stated out loud. Note the
// deliberate contrast with the scanning page: there the technology is invisible
// to the buyer, here the technology IS the query.
import { p, h2, h3, li, link, k } from "./pt";

export const printing3dSeoEn = {
  lang: "en",
  group: "printing-3d-seo",
  slug: "seo-for-3d-printing-services",
  title: "SEO for 3D Printing and Rapid Prototyping Services",
  heading:
    "SEO for 3D printing companies: filtering a very large search demand down to the orders that are worth quoting",
  excerpt:
    "I do SEO for 3D printing shops. Your trade is the rare one with too much demand rather than too little, and most of it is one hobby part for five euros. I build pages per material and technology, put an instant quote and a minimum order on the site, and let the production enquiries through. Audit €250, ongoing €800 a month.",
  seo: {
    metaTitle: "3D Printing SEO: Materials, Quotes, AI Search",
    metaDescription:
      "SEO for 3D printing and prototyping services: pages per material and technology, instant quote from an uploaded file, and visibility in ChatGPT and Perplexity.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per material", "AI SEO: ChatGPT and Perplexity", "Audit from €250"],
  heroPhonePoints: ["Quote from an uploaded file", "SLS, SLA, FDM, metal", "Minimum order stated", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a 3D printing company: material and technology pages, quote flow, local profile, AI visibility", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: pages per material and application, quote form, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a 3D printing company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "SEO for a 3D printing company: what the work consists of",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page per material and technology", text: "SLS, SLA, FDM, metal, resin — what the buyer types" },
        { _key: k("o"), iconName: "file-text", title: "A quote from an uploaded file", text: "The page that turns a visitor into an order" },
        { _key: k("o"), iconName: "target", title: "A minimum order, stated", text: "Fewer five-euro enquiries, more production runs" },
        { _key: k("o"), iconName: "sparkles", title: "AI SEO: ChatGPT and Perplexity", text: "Where «which material for this part» gets asked" },
        { _key: k("o"), iconName: "map-pin", title: "The «near me» page done properly", text: "8 100 searches a month sit on that phrase alone" },
        { _key: k("o"), iconName: "clock", title: "Lead time and tolerance as facts", text: "What a professional checks before writing to you" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: technical services where the enquiry has to arrive already specified",
      subtitle:
        "What these share with a print shop: the client sends a file or an address rather than a brief, the work is quoted before anyone meets, and the growth came from structure and content rather than bought links. A 3D laser scanning and BIM company whose organic traffic grew twenty-nine times. An internet provider checked address by address. A multilingual property platform. A workshop and a car service with the same enquiry pattern.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "web-development-a-website-for-internet-prowider",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "felgilab-wordpress-rebuild",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("SEO for 3D printing starts by filtering demand, not by attracting it"),
        p("I do SEO for 3D printing shops. The work starts with one decision you make and I write into the site: the smallest order you actually want. Everything else follows from that line."),
        p("This is the one trade on my list with too much search demand rather than too little."),
        p("«3D printing services» draws 49 500 searches a month and «3D printing service near me» another 8 100. Most of that is a student with one part, a hobbyist with a phone holder, somebody who wants a figurine printed for five euros."),
        p("Meanwhile the order that pays your month — two hundred housings in nylon, a jig for a production line, a prototype series before tooling — is searched with completely different words, and usually by a person who never types «3D printing» at all."),
        p("So the site has two jobs at once:"),
        li("let the production buyer find you by his own vocabulary;"),
        li("tell the hobby enquiry, on the page, that this is not the place;"),
        li("quote the serious one before a competitor answers;"),
        li("and keep the huge general phrase as a hub that routes people onward;"),
        li("rather than as a page that collects everyone and converts nobody."),

        h2("SEO pages per material and technology: SLS, SLA, FDM and metal"),
        p("The scanning trade has the opposite problem: there the buyer never names the technology. In printing the technology is the query."),
        p("A professional writes «SLS nylon parts», «resin printing tolerance», «metal 3D printing service». He already knows what he needs and is choosing a supplier, which makes these the most valuable words on the site and the easiest to rank for, because almost nobody writes a proper page about them."),
        p("One page per material and process, each answering the same four questions: what it is good for, what tolerance you hold, what it costs per part, and how long it takes."),
        p("Underneath them go application pages — jigs and fixtures, spare parts, architectural models, short production runs — because that is how the buyer thinks about his own problem."),

        h2("The quote form is the page that earns the order"),
        p("In this trade the buyer already has a file. That changes everything."),
        p("If he can upload it and see a price and a date, he orders. If he has to describe the part in a contact form and wait a day, he goes to one of the online services that answered in thirty seconds."),
        p("So the quote is not a page somewhere in the menu. It is the thing the whole site is built around: upload, material, quantity, tolerance, a price or a range, and a dispatch date. Everything else on the site exists to bring a person to that form with the right expectations."),

        h3("The job, the words the buyer uses, and what the page has to prove"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["The job", "What the buyer searches", "What the page has to prove"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["Prototype before tooling", "«rapid prototyping services»", "Lead time, iterations, what you do with a bad file"] },
        { _type: "tableRow", _key: k("r"), cells: ["Functional parts in nylon", "«sls printing», «nylon 3d printing»", "Tolerance, strength, finish, price per part"] },
        { _type: "tableRow", _key: k("r"), cells: ["Fine detail and casting patterns", "«sla printing», «resin printing service»", "Resolution, materials, post-processing"] },
        { _type: "tableRow", _key: k("r"), cells: ["Metal parts", "«metal 3d printing service»", "Process, machines, certification, minimum order"] },
        { _type: "tableRow", _key: k("r"), cells: ["Jigs, fixtures and spare parts", "«custom 3d printed parts»", "Repeatability, drawings accepted, delivery"] },
        { _type: "tableRow", _key: k("r"), cells: ["Short production runs", "«low volume manufacturing»", "Price break by quantity, capacity, quality control"] },
        { _type: "tableRow", _key: k("r"), cells: ["One part, locally", "«3d printing service near me»", "Minimum order, collection, how fast"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("The hobby enquiry and the minimum order written on the page"),
        p("Every print shop I have seen loses hours a week to enquiries it will never accept."),
        p("The cure is one line of text: the smallest order you take, and the price it starts at. Put it on the home page, on the quote form and on the «near me» page."),
        p("It looks like turning business away. In practice it changes who writes to you within weeks, and the people who do write arrive knowing the number."),

        h3("The «near me» page, worth 8 100 searches a month"),
        p("That phrase is the second largest in the trade, and most shops leave it to a generic contact page."),
        p("It deserves its own page: your city and the ones you deliver to, collection times, what you can print same day, and the same minimum order. A local profile with real photographs of the machines carries the rest."),
        p("It brings hobby traffic too — which is exactly why the minimum has to be visible on it."),

        h3("Price per part, published as a range"),
        p("Almost no shop publishes numbers, and almost every enquiry opens by asking for one."),
        p("A range per part by material and quantity, with a line on what moves it, brings the buyer who was going to ask anyway and keeps away the one who expected five euros."),

        h2("AI SEO for a 3D printing company: ChatGPT, Perplexity, Gemini and AI Overviews"),
        p("«Which material should this bracket be printed in» and «is SLS strong enough for a hinge» are assistant questions, asked long before anyone picks a supplier."),
        p("The assistant answers from readable text and names shops whose pages commit to figures — tolerance, materials, lead times, price per part."),
        p("Three things decide whether you are named: text rather than galleries of printed parts, numbers worth quoting, and the same company details everywhere you appear."),

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

        h2("Technical SEO: photo weight, speed and an upload that does not fail"),
        p("Print shop sites are built from photographs of parts, and they are heavy. A gallery that takes six seconds on a phone costs more orders than it wins."),
        p("Keep the photographs, serve them at a sane size, and let the page open in under two seconds."),
        p("Then test the upload itself on a phone, with a 60 MB STEP file, on a weak connection. A quote form that silently fails on large files is the most expensive bug in this trade, and almost nobody checks it."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your 3D printing company",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Your company or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which orders do you want more of?", options: ["Prototypes", "Functional parts", "Short production runs", "Metal"] },
        { _key: k("z"), question: "What is your smallest useful order?", options: ["Under €50", "€50–200", "€200–1000", "Over €1000"] },
        { _key: k("z"), question: "Can a client get a price on the site?", options: ["Instant quote", "Form, we reply manually", "Only a phone number", "Not sure"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for 3D printing services: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a 3D printing company cost?", "An audit is €250, one-off work €250–800, ongoing work €800 a month. The figure moves with how many materials and applications get their own pages and whether the quote form can be changed."],
          ["We already get plenty of enquiries. Why would we need SEO?", "Because of what they are. «3D printing services» is 49 500 searches a month, and most of it is one hobby part. The work here is not more traffic, it is changing the mix: ranking for the material and application words a production buyer uses, and stating a minimum that sends the rest away."],
          ["Should we really publish a minimum order?", "Yes, and it is the single change that moves the enquiry mix fastest. It feels like refusing work; in practice it stops you spending hours on orders you would have refused anyway."],
          ["Do we need a page for every material?", "For the ones you actually sell, yes. «SLS printing» or «metal 3d printing service» is typed by someone who already knows what he needs and is choosing a supplier — the most valuable visitor you can get, and almost nobody writes a proper page for him."],
          ["Is «3d printing service near me» worth a page?", "It is 8 100 searches a month, the second largest phrase in the trade, and most shops leave it to a contact page. It brings hobby traffic as well, which is why the minimum order has to be visible on it."],
          ["Will a client find us through ChatGPT or Perplexity?", "Yes. «Which material for this part» is asked there constantly, before any supplier is chosen. Assistants name shops whose pages explain materials and commit to tolerances, and skip sites that are only galleries."],
          ["What are GEO and AEO in plain words?", "Getting named inside the answer an assistant writes, instead of only in a list of links. The work is ordinary: text instead of galleries, structured data, numbers on the page, consistent details everywhere."],
          ["How long before this shows up as orders?", "First movement at about six weeks, meaningful growth on a three to six month horizon. Material pages move faster than the general ones because the intent is immediate and the competition is thin."],
          ["Who writes the service pages?", "I draft and you correct. The credible part is what only a print shop knows: which files arrive unprintable, what warping really costs, which promises about tolerance are lies."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a 3D printing company: what to send me"),
        p("Send the site. Say which orders you want more of, what your smallest useful order is, and whether a client can get a price without writing to you."),
        p("I reply within one working day: what is holding the site back, which pages are missing, and what I would do first."),
      ],
    },
  ],
};
