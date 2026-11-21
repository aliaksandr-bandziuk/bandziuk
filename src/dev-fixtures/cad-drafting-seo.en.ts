// Landing page fixture: SEO for CAD drafting and reverse engineering shops (EN),
// group «cad-drafting-seo». NEW page — create-landing.cjs, root level.
//
// Measured (research/dataforseo/scanning-niches.md, 18.11.2026):
// «cad drafting services» 590, «reverse engineering services» 110,
// «floor plan drafting services» 20. Owner side is nil.
//
// BACKBONE, kept clear of the four siblings. «As built drawings services» (320)
// and «floor plan» are already carried by scanning-company-seo, and PL
// «inwentaryzacja / powykonawcza» by land-surveyor-seo — so measurement is NOT
// this page's subject. What is free, and is a different business: CAD work with
// no scanner and no surveyor — redrawing from paper and PDFs, converting to CAD
// and BIM, modelling a physical part. And the buyer is different too: not a
// building owner but an architect, an engineer or a scanning company that has
// run out of hours. So the page sells capacity, standards and handover, and is
// the one page in this cluster that is bought remotely rather than locally.
import { p, h2, h3, li, link, k } from "./pt";

export const cadDraftingSeoEn = {
  lang: "en",
  group: "cad-drafting-seo",
  slug: "seo-for-cad-drafting-companies",
  title: "SEO for CAD Drafting and Reverse Engineering Services",
  heading:
    "SEO for CAD drafting companies: getting found by the architect or engineer whose own team has run out of hours",
  excerpt:
    "I do SEO for CAD drafting shops. Your client is not a building owner — it is a professional with a deadline and no spare draughtsman. I build pages around what you are handed and what you hand back, put your standards and turnaround on the page, and win the enquiry before the first call. Audit €250, ongoing €800 a month.",
  seo: {
    metaTitle: "CAD Drafting SEO: Capacity, Standards, AI",
    metaDescription:
      "SEO for CAD drafting and reverse engineering shops: pages per input and output, standards and turnaround as facts, and visibility in ChatGPT and Perplexity.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per input you take", "AI SEO: ChatGPT and Perplexity", "Audit from €250"],
  heroPhonePoints: ["PDF and paper to CAD", "Point cloud to 2D and BIM", "Reverse engineering a part", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a CAD drafting company: service pages, standards and handover, enquiry form, AI visibility", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: pages per input and output, sample files, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a CAD drafting company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "SEO for a CAD drafting company: what the work consists of",
      items: [
        { _key: k("o"), iconName: "file-text", title: "A page per input you take", text: "Paper, PDFs, point clouds, hand measurements, a physical part" },
        { _key: k("o"), iconName: "layers", title: "A page per file you hand back", text: "DWG, RVT, STEP, IFC, and in whose template" },
        { _key: k("o"), iconName: "shield-check", title: "Standards and NDA as facts", text: "Layers, title blocks, units, who owns the file" },
        { _key: k("o"), iconName: "sparkles", title: "AI SEO: ChatGPT and Perplexity", text: "Where «convert PDF drawings to CAD» gets asked" },
        { _key: k("o"), iconName: "clock", title: "Turnaround and capacity, stated", text: "Sheets per week, and what you can absorb next Monday" },
        { _key: k("o"), iconName: "target", title: "Written for a professional", text: "Not for a building owner — for the person with the deadline" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: technical services sold to buyers who judge you by the file you send back",
      subtitle:
        "What these share with a drafting shop: the client buys a deliverable, not a meeting, the work is bought remotely, and the growth came from structure and content rather than bought links. A 3D laser scanning and BIM company whose organic traffic grew twenty-nine times. An internet provider checked address by address. A multilingual property platform. A workshop and a car service with the same enquiry pattern.",
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
        h2("SEO for CAD drafting starts with who is actually buying: a professional who is out of hours"),
        p("I do SEO for CAD drafting shops. The work starts with one thing I need from you: what you can absorb next week. Then I build pages that say it out loud, because that is the only question your buyer has."),
        p("Your client is not a building owner looking for drawings."),
        p("It is an architect whose two draughtsmen are booked for a month. An engineering office that won a tender and needs sheets by the fifteenth. A scanning company with a point cloud and nobody to turn it into a plan. A manufacturer holding a part whose drawings were lost in the nineties."),
        p("All four are professionals. They do not need the method explained. They need to know whether you can take the work, in their standards, by their date."),
        p("That changes the whole site:"),
        li("the home page says what you take and what you return, not how CAD works;"),
        li("every service page names the input and the output, in file formats;"),
        li("your standards are written down, not promised on a call;"),
        li("capacity and turnaround are on the page, in sheets and days;"),
        li("and the samples are real files, not renders."),

        h2("SEO pages per input and output: PDFs, point clouds, hand measurements, a physical part"),
        p("The measured demand is on the service, not on the profession. «CAD drafting services» draws 590 searches a month and «reverse engineering services» 110, while «CAD company website» and «SEO for CAD companies» return nothing at all."),
        p("Nobody searches for a CAD company. They search for the job they are holding."),
        p("So one page per job. Paper and PDF drawings into CAD. A point cloud into 2D plans or a BIM model. A set of site measurements into drawings. A physical part into a parametric model. Each has its own buyer, its own price logic and its own first question."),

        h2("Standards, file handover and NDA: what makes a professional trust an unknown supplier"),
        p("A professional who sends you work is putting his own name on your file."),
        p("So the thing that wins the enquiry is not a portfolio of pretty drawings. It is layers named the way his office names them, his title block, his units, his software version, and a redline turnaround he can plan around."),
        p("Write it as facts: the standards you work to, the templates you accept, who owns the file afterwards, how long a revision takes, and whether you sign an NDA before seeing anything."),

        h3("Files in, searches out: what the page has to prove"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["The job", "What the client searches", "What the page has to prove"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["Paper and PDF drawings into CAD", "«cad drafting services», «pdf to cad conversion»", "Price per sheet, turnaround, layer standard"] },
        { _type: "tableRow", _key: k("r"), cells: ["Point cloud into plans or BIM", "«point cloud to bim», «scan to bim services»", "LOD, software version, what you do with gaps"] },
        { _type: "tableRow", _key: k("r"), cells: ["Site measurements into drawings", "«floor plan drafting services»", "What you need from site, tolerance, sheet set"] },
        { _type: "tableRow", _key: k("r"), cells: ["A physical part into a model", "«reverse engineering services»", "Method, tolerance, output format (STEP, native)"] },
        { _type: "tableRow", _key: k("r"), cells: ["Detail and shop drawings", "«shop drawing services»", "Standards, review cycles, who signs"] },
        { _type: "tableRow", _key: k("r"), cells: ["Overflow capacity by the month", "«outsourced cad drafting»", "Team size, rates, how fast you can start"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("The one page in this trade that is not bought locally"),
        p("A surveyor is hired by distance. A drafting shop is not."),
        p("Files move by email, so the question is never «are you nearby». It is which time zone you answer in, which language the redlines come back in, and whether you work in the standards of the country the project is built in."),
        p("That is a different kind of page. Instead of a city list, it carries the markets you work for and the standards you know, and it is written in the language of the buyer rather than of your own office."),

        h3("Sample files instead of a gallery"),
        p("Most drafting sites show renders. Renders are what the client's own architect produces, not what you deliver."),
        p("One downloadable sample sheet — real, anonymised, with the title block and layers visible — converts better than twenty images. It answers in ten seconds the question the whole enquiry hangs on."),

        h3("Price per sheet and per square metre, published"),
        p("Almost nobody in this trade puts a number on the page, and almost every enquiry starts by asking for one."),
        p("A range per sheet, per square metre or per hour, with a line on what moves it, does two things: it brings the buyer who was going to ask anyway, and it keeps away the one who wanted it for forty euros."),

        h2("AI SEO for a drafting shop: ChatGPT, Perplexity, Gemini and AI Overviews"),
        p("«How much does it cost to convert PDF drawings to CAD» and «can you get a BIM model from a point cloud» are assistant questions. They are asked before any search."),
        p("The assistant answers from readable text and names suppliers whose pages commit to figures — price per sheet, turnaround, tolerance, formats."),
        p("Three things decide whether you are named: text rather than PDFs and image galleries, numbers worth quoting, and the same company details everywhere you appear."),

        h3("Generative engine optimization (GEO), answer engine optimization (AEO) and LLM SEO in practice"),
        p("GEO and AEO are the same job from two sides: being named inside the generated answer, not only in the list of links. LLM SEO is that work across language models."),
        p("It is five or six fixes, and they overlap almost entirely with what makes the site rank at all."),
        p(
          "On an existing site that is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ". When assistants describe the company wrongly, that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),

        h2("Technical SEO: file weight, speed and a form that asks for one sheet"),
        p("Drafting sites are heavy for a silly reason: full-resolution drawing images and PDFs loaded on the home page."),
        p("Keep the samples, serve them at a sane size, and let the page open in under two seconds on a phone — your buyer often writes to you from a site visit."),
        p("The form should ask for one sample sheet, the software and version, the volume and the deadline. Those four answers let you quote without a call, which is the whole advantage you have over the office next door."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your drafting company",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Your company or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you mostly get handed?", options: ["PDFs and paper", "Point clouds", "Site measurements", "Physical parts"] },
        { _key: k("z"), question: "Who sends you work today?", options: ["Architects", "Engineering offices", "Scanning companies", "End clients"] },
        { _key: k("z"), question: "What is on the site now?", options: ["One page with everything", "A page per service", "Mostly a gallery", "Not sure"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for CAD drafting companies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a drafting company cost?", "An audit is €250, one-off work €250–800, ongoing work €800 a month. The figure moves with how many inputs and outputs get their own pages and whether the site can be edited at all."],
          ["Our clients are architects and engineers. Does SEO even reach them?", "It does, and in this trade it is the main channel: they look for capacity the week they run out of it, and they search the job rather than the supplier. «CAD drafting services» alone is 590 searches a month."],
          ["Should we publish prices?", "A range, yes. Almost nobody in the trade does, and almost every enquiry opens by asking. A figure per sheet or per square metre with a line on what moves it brings the serious buyer and keeps the rest away."],
          ["Will a client find us through ChatGPT or Perplexity?", "Yes. «How much to convert PDF drawings to CAD» is asked there constantly. Assistants name suppliers whose pages explain the method and commit to numbers, and skip sites made of image galleries."],
          ["What are GEO and AEO in plain words?", "Getting named inside the answer an assistant writes, instead of only in a list of links. The work is ordinary: text instead of PDFs and galleries, structured data, numbers on the page, consistent details everywhere."],
          ["Do we need local SEO at all?", "Barely. This is the one trade in the cluster bought remotely, so the pages are built around markets, standards and time zones rather than cities. A local profile still helps, but it is not where the work comes from."],
          ["Can we show client drawings as samples?", "Only anonymised, and only with permission. One honest sample sheet with the title block and layers visible is worth more than a gallery, and it is usually easy to prepare from your own internal work."],
          ["How long before this shows up as enquiries?", "First movement at about six weeks, meaningful growth on a three to six month horizon. Conversion pages (PDF to CAD, point cloud to BIM) move faster than general ones because the intent is immediate."],
          ["Who writes the service pages?", "I draft and you correct. The credible part is what only a drafting shop knows: which files arrive unusable, what a revision really costs, where a tolerance promise becomes a lie."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a CAD drafting company: what to send me"),
        p("Send the site. Say what you are usually handed, who sends it, and how much you could take on next month."),
        p("I reply within one working day: what is holding the site back, which pages are missing, and what I would do first."),
      ],
    },
  ],
};
