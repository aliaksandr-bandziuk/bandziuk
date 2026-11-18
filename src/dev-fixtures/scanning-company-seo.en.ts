// Landing page fixture: SEO for 3D laser scanning and BIM companies (EN),
// group «scanning-company-seo». NEW page — create-landing.cjs, root level.
//
// Measured (research/dataforseo/scanning-niches.md, 18.11.2026): owner-side
// intent is zero — «seo for 3d scanning companies», «3d laser scanning seo»,
// «marketing for 3d scanning companies» all return no data. The service side
// is real: «3d laser scanning services» 480, «scan to bim» 390,
// «3d scanning company» 140, «laser scanning services» 70; BIM alongside:
// «bim services» 480, «bim modeling services» 320, «scan to bim services» 260.
// Wording per service-wording.md: in English GEO 4 400 and AEO 2 400 belong in
// headings.
//
// BACKBONE, distinct from the two neighbours in this cluster. Surveyors:
// a third party demanded a document. Engineering firms: discipline × code ×
// what you may sign. Here the problem is one level earlier — the buyer does
// not know the service exists. The owner's own ScanM2 case states it: over
// 90% of potential clients had never heard of laser scanning, and the site
// still reached 29× organic growth by ranking for DELIVERABLES and adjacent
// services people already search for, not for the technology.
import { p, h2, h3, li, link, k } from "./pt";

export const scanningCompanySeoEn = {
  lang: "en",
  group: "scanning-company-seo",
  slug: "seo-for-3d-scanning-companies",
  title: "SEO for 3D Laser Scanning and BIM Companies",
  heading:
    "SEO for 3D laser scanning and BIM companies: ranking for the deliverable when nobody searches for the technology",
  excerpt:
    "I do SEO for 3D laser scanning and BIM companies. I build pages around what the client receives — as-built drawings, a scan-to-BIM model, a point cloud — because almost nobody searches for laser scanning itself. Local SEO, and AI SEO so ChatGPT, Perplexity and Gemini name you. I have done this work on a scanning company's own site: organic traffic grew twenty-nine times. Audit €250, ongoing €800 a month.",
  seo: {
    metaTitle: "3D Scanning Company SEO: Deliverables, Local, AI",
    metaDescription:
      "SEO for 3D laser scanning and BIM companies: pages per deliverable, scan to BIM, industry pages, local SEO and AI SEO in ChatGPT and Perplexity.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per deliverable", "AI SEO: ChatGPT and Perplexity", "Audit from €250"],
  heroPhonePoints: ["As-built drawings", "Scan to BIM model", "Point cloud in your format", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a 3D scanning or BIM company: site, deliverable pages, local profile and AI visibility", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: deliverable and industry pages, structured data, enquiry form", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a scanning and BIM company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "SEO for a 3D scanning and BIM company: what the work consists of",
      items: [
        { _key: k("o"), iconName: "file-text", title: "A page per deliverable", text: "As-built drawings, scan to BIM, point cloud, floor plans" },
        { _key: k("o"), iconName: "users", title: "Industry pages for people who have not heard of scanning", text: "Facility managers, architects, insurers, plant owners" },
        { _key: k("o"), iconName: "sparkles", title: "AI SEO: ChatGPT and Perplexity", text: "Where «how do I get drawings of an old building» is asked" },
        { _key: k("o"), iconName: "map-pin", title: "Coverage your crew can actually reach", text: "Cities and regions, stated as facts" },
        { _key: k("o"), iconName: "gauge", title: "Accuracy, formats and turnaround on the page", text: "The three things a technical buyer checks first" },
        { _key: k("o"), iconName: "zap", title: "Heavy visuals that do not sink the site", text: "Point clouds and BIM views without a ten-second load" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: the same work done on a scanning company's own site",
      subtitle:
        "The first case here is a 3D laser scanning and BIM company: rebuilt from scratch, three languages, over three hundred pages built around deliverables, industries and regions. Organic traffic grew twenty-nine times and enquiries arrive weekly. The others share the pattern: a technical buyer, an enquiry tied to an object, growth from structure and content rather than bought links.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "web-development-a-website-for-internet-prowider",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "investment-platform-with-ai-guided-learning",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("SEO for a 3D scanning company starts with the deliverable, not the scanner"),
        p("Your buyer has a building and no drawings. A renovation is starting. A tenant wants exact areas. A plant needs a model before a retrofit."),
        p("They do not type «3D laser scanning». Most of them have never heard the phrase."),
        p("They type what they want to end up with: as-built drawings, a floor plan of an existing building, a BIM model of a site, measured areas they can trust."),
        p("That is why a site built around the technology stays invisible. The scanner is your tool, not their problem."),
        li("one page per deliverable, named the way the client names it;"),
        li("accuracy, formats and turnaround stated as numbers, because a technical buyer checks those first;"),
        li("a short explanation of what scanning is, inside the deliverable page rather than on a page of its own;"),
        li("industry pages for buyers who do not yet know the service exists;"),
        li("and the equipment list kept where it belongs, far below the fold."),

        h2("SEO pages per deliverable: as-built drawings, scan to BIM, point cloud, floor plans"),
        p("The measured demand confirms it. «3D laser scanning services» draws 480 searches a month. «Scan to BIM» 390. «BIM services» 480, «BIM modeling services» 320, «scan to BIM services» 260. «As built drawings services» 320."),
        p("The deliverables together carry several times the search volume of the technology name."),
        p("Each of them is a different buyer. An architect wants a model they can open in Revit. A facility manager wants areas and a floor plan. A contractor wants to know what was actually built before they tender. One page cannot answer all three."),

        h2("Local SEO and coverage: the sites your crew can actually reach"),
        p("Scanning is travel work. The crew drives, flies or does not come at all."),
        p("So coverage belongs on the page as a list of cities and regions, not as a radius on a map. A buyer four hundred kilometres away needs to know in one second whether to keep reading, and you need to stop paying attention to enquiries you cannot service."),
        p("The same data feeds the map profile and the assistants. When the coverage on the site and in the profile disagree, you quietly drop out of both."),

        h3("Deliverable, the words the client actually searches, and the page that catches them"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Deliverable", "What the client searches", "What the page has to answer"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["As-built drawings", "«as built drawings services», «drawings of an existing building»", "Formats, accuracy, what counts as as-built and what does not"] },
        { _type: "tableRow", _key: k("r"), cells: ["Scan to BIM", "«scan to bim», «scan to bim services»", "LOD, software, which disciplines the model covers"] },
        { _type: "tableRow", _key: k("r"), cells: ["BIM model of an existing building", "«bim modeling services», «revit modeling services»", "What you model, what you do not, how it is handed over"] },
        { _type: "tableRow", _key: k("r"), cells: ["Point cloud", "«point cloud services»", "Formats, file sizes, what a client can do with it alone"] },
        { _type: "tableRow", _key: k("r"), cells: ["Measured areas and floor plans", "«floor plan of an existing building», «measured survey»", "Tolerance, how areas are calculated, which standard"] },
        { _type: "tableRow", _key: k("r"), cells: ["Site and facility documentation", "«3d laser scanning services», «laser scanning services»", "Equipment and accuracy, for the minority who know the term"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Industry pages: reaching the buyers who do not know laser scanning exists"),
        p("This is the part that decides the outcome, and it is the part most scanning companies skip."),
        p("A facility manager with a 1970s plant, an insurer documenting a loss, a developer buying a building with no paperwork — none of them is searching for scanning. They are searching for their problem."),
        p("A page per industry, written in that industry's words, is how the service gets discovered at all. It describes the situation, then the deliverable, then what scanning has to do with it."),

        h3("Evidence from a scanning company's own site: twenty-nine times the organic traffic"),
        p(
          "I rebuilt and promoted ",
          link("the site of a 3D laser scanning and BIM company", "/portfolio/architecture-website-rebuild-and-seo-scan"),
          ". Over ninety per cent of its potential clients did not know the service existed.",
        ),
        p("The site was rebuilt from scratch, in three languages, with more than three hundred pages built around deliverables, industries and regions. Organic traffic grew twenty-nine times, the firm reached the top three in one market and the top twenty in another, and enquiries started arriving every week."),
        p("The approach on this page is that work, written down."),

        h3("Pages that architects and contractors forward"),
        p("A large share of scanning work arrives through other professionals. They are not searching — they are forwarding a link to explain the service to their own client."),
        p("So the site needs pages written to be forwarded: what scanning replaces, what the client gets, what it costs roughly, what the process looks like on site. Write those and your referrers sell for you."),

        h2("AI SEO for a scanning company: ChatGPT, Perplexity, Gemini and AI Overviews"),
        p("«How do I get accurate drawings of a building with no plans» is exactly the question people now put to an assistant."),
        p("It is also a question your industry answers better than anyone, and almost nobody has written the answer down in readable text."),
        p("Three things decide whether you are named. Text a machine can read, rather than PDFs and sample drawings. Figures worth quoting: accuracy, formats, turnaround, coverage. And the same name, services and contacts everywhere the firm appears."),

        h3("Generative engine optimization (GEO), answer engine optimization (AEO) and LLM SEO in practice"),
        p("GEO and AEO describe the same job from two sides: being named inside the generated answer, not only in the list of links. LLM SEO is that work across language models."),
        p("In practice it is five or six fixes, and they overlap almost entirely with what makes the site rank in the first place."),
        p(
          "On an existing site that is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ". When assistants get the firm wrong, that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),

        h2("Technical SEO: point-cloud visuals, speed and the enquiry form that asks for the building"),
        p("Scanning sites are the heaviest technical sites I audit. Point-cloud screenshots, BIM views, sample deliverables, video flythroughs."),
        p("All of it can stay. Correct formats and sizes keep the visual quality at a fraction of the weight, and nothing loads until it is on screen."),
        p("The form matters more. Ask for the building type, the approximate area, the deliverable needed and the deadline. Add a file upload for whatever drawings they already have. Those four answers turn an enquiry into a quote the same day."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your scanning or BIM company",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Your company or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you sell most?", options: ["As-built drawings", "Scan to BIM", "Point cloud only", "Full documentation projects"] },
        { _key: k("z"), question: "Who are your clients?", options: ["Architects and designers", "Contractors and developers", "Industry and facilities", "A mix"] },
        { _key: k("z"), question: "Where does work come from now?", options: ["Referrals", "Direct sales", "Tenders", "Search already works a little"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for 3D scanning and BIM companies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a 3D scanning company cost?", "An audit is €250, one-off work €250–800, ongoing work €800 a month. The figure moves with how many deliverables and industries get their own pages and whether the current site lets pages be added."],
          ["Almost nobody searches for laser scanning. Does SEO even work here?", "That is exactly why it works, and it is the hardest thing to explain. You do not rank for the technology. You rank for the deliverable and for the problem — drawings of an existing building, a model before a retrofit, areas that can be trusted. On a scanning company's own site that approach produced twenty-nine times the organic traffic."],
          ["Will ChatGPT or Perplexity mention us?", "They name firms whose pages explain the deliverable in readable text and commit to figures. «How do I get drawings of a building with no plans» is asked there constantly, and the firm that wrote the clearest answer is the one quoted."],
          ["What are GEO and AEO in plain words?", "Getting named inside the answer an assistant writes, instead of only in a list of links. The work is ordinary: text instead of PDFs, structured data, numbers on the page, consistent details everywhere."],
          ["Should we publish prices?", "A range per deliverable with its conditions, not a price list. Area, access and the level of detail move the figure, and saying so filters the enquiries that were never going to become projects."],
          ["Our visuals are heavy. Will the site be slow?", "Not if it is built properly. Point clouds and BIM views keep their quality at a fraction of the weight with correct formats and sizing, and nothing loads before it is on screen."],
          ["How long before this shows up as enquiries?", "First movement at about six weeks, meaningful growth on a three to six month horizon. Industry pages take longer than deliverable pages because they are creating demand rather than catching it."],
          ["Can you guarantee a position?", "No, and nobody can. What I can state is what will be changed, in what order, and what we measure at one month and at three."],
          ["Who writes the deliverable pages?", "I draft and you correct. The credible part is what only the firm knows: which buildings go wrong, what accuracy really means on a site with no fixed points, what you refuse to promise."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a 3D scanning company: what to send me"),
        p("Send the site. Say which deliverables you want more of, which industries you already serve, and how far your crew travels."),
        p("I reply within one working day: what is holding the site back, how much of it is locked inside PDFs and sample drawings that neither a search engine nor an assistant can read, and what I would do first."),
      ],
    },
  ],
};
