// Landing page fixture: Website design for land surveyors (EN),
// group «land-surveyor-website». NEW page — create-landing.cjs, root level.
//
// Paired with land-surveyor-seo.* (/seo-for-land-surveyors). The SEO page is
// built on the trigger document: a lender or a city demanded a paper and the
// client searches its name. THIS page is built on a different backbone — the
// site of a surveying firm works as an intake desk, not a brochure. The
// enquiry form asks for the parcel, the samples show what the client receives,
// the turnaround and the price range sit where they are read, and contractors
// get their own entrance.
//
// Wording measured in research/dataforseo/service-wording.md:
// «website design» 40 500, «web development services» 2 900,
// «website redesign» 2 900; «land surveyor website» 40 (scanning-niches.md).
// Niche demand: «land surveying services» 2 400, «topographic survey» 2 400,
// «as built survey» 880.
//
// Angles already taken elsewhere (claude/landing-queue.md): location pages —
// photographers; two buyers — security firms; published prices — remodelers.
// None of them is built on the enquiry form as the product.
import { p, h2, h3, li, link, k } from "./pt";

export const landSurveyorWebsiteEn = {
  lang: "en",
  group: "land-surveyor-website",
  slug: "website-design-for-land-surveyors",
  title: "Website Design for Land Surveyors and Surveying Companies",
  heading:
    "Website design for land surveyors: a site that takes the enquiry with the parcel already in it",
  excerpt:
    "I build websites for land surveying companies. The form asks for the parcel, the deadline and who demanded the survey. Sample deliverables replace stock photos of tripods. Turnaround and price range sit where the client reads them. Contractors get their own entrance. A site from €2,000, a single landing page €700–1,400.",
  seo: {
    metaTitle: "Surveying Company Website: Form, Samples, Speed",
    metaDescription:
      "Websites for land surveying companies: an enquiry form keyed to the parcel, sample deliverables, turnaround and price on the page, fast on site, AI-ready.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Enquiry form with the parcel", "Built to be quoted by AI", "Site from €2,000"],
  heroPhonePoints: ["Parcel number in the first field", "Sample deliverables, not tripods", "Turnaround in working days", "Contractor entrance"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Website for a land surveying company: structure, deliverable pages, enquiry form, speed, structured data", price: 2000, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Landing page for one deliverable: ALTA survey, staking or as-built", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Audit of an existing surveying company website: structure, enquiries, speed", price: 250, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "Website design for a land surveying company: what you get",
      items: [
        { _key: k("o"), iconName: "file-text", title: "An enquiry form keyed to the parcel", text: "Address or parcel number, deadline, who demanded it" },
        { _key: k("o"), iconName: "image", title: "Sample deliverables on the page", text: "What the client receives, not a photo of a tripod" },
        { _key: k("o"), iconName: "gauge", title: "Turnaround and price range in view", text: "The two questions every call opens with" },
        { _key: k("o"), iconName: "target", title: "A separate entrance for contractors", text: "Staking and as-built, scheduled not negotiated" },
        { _key: k("o"), iconName: "zap", title: "Fast on a phone in the field", text: "One bar of signal, nine seconds is a lost job" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by ChatGPT and Perplexity", text: "Text and structured data instead of PDFs" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: sites that take technical enquiries, not brochures",
      subtitle:
        "What these share with a surveying firm: the buyer cannot judge the work, the enquiry is tied to an address or an object, and the site had to collect enough to quote. A 3D laser scanning and BIM company whose organic traffic grew twenty-nine times. An internet provider checked address by address. A multilingual property platform with thousands of objects. A workshop and a car service with the same enquiry pattern.",
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
        h2("Website design for land surveyors starts with the enquiry form, not the home page"),
        p("I build websites for land surveying companies. The work starts with the enquiry you want to receive, and I design the site backwards from it: the form first, then the pages that feed it."),
        p("Most surveying sites open with a photograph of a total station and the word «precision». Then a form asks for a name, an email and a message."),
        p("That form guarantees one reply: «could you tell me the address». A day is gone before anything can be quoted."),
        p("I start from the other end. The form asks for the parcel address or number, the deadline, and who demanded the survey — the lender, the city, the attorney, the builder. Those three answers decide whether the job is yours and what it costs."),
        li("parcel address or number in the first field, because every quote starts there;"),
        li("the deadline, because half of this work is bought on timing alone;"),
        li("who demanded the document, because it names the deliverable for you;"),
        li("file upload, so the client can attach the letter they do not understand;"),
        li("and a phone field that is optional, because a required one costs you enquiries."),

        h2("Sample deliverables on the site: what a client needs to see before calling"),
        p("Your buyer has never read a survey. They were told to produce one."),
        p("A page that shows the finished document answers the question they cannot ask: what will I actually get. A plan sheet. A stamped certificate. A point cloud view. A drawing with dimensions."),
        p("Nobody needs another tripod on a tripod-coloured background. Stock photography on a technical site reads as a firm with nothing of its own to show."),

        h2("Turnaround, price range and coverage: the three facts that belong above the fold"),
        p("Every call opens with how much and how soon. Most sites answer neither, because it depends on the parcel."),
        p("It does depend on the parcel. A range with conditions still answers it, and it filters: the bargain hunters stop calling, the serious ones stop comparing."),
        p("Coverage belongs there too, as a list of counties rather than a radius on a map. A client two counties away needs to know in one second whether to keep reading."),

        h3("What goes on the site, and the enquiry it is meant to produce"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["What goes on the site", "What it does", "The enquiry it produces"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["Form keyed to the parcel", "Collects address, deadline and who demanded the survey", "An enquiry you can price without a second email"] },
        { _type: "tableRow", _key: k("r"), cells: ["Sample deliverables", "Shows the document the client will receive", "A call from someone who already knows what they are buying"] },
        { _type: "tableRow", _key: k("r"), cells: ["Turnaround and price range", "Answers the two opening questions", "Fewer bargain calls, more jobs that fit"] },
        { _type: "tableRow", _key: k("r"), cells: ["Contractor entrance", "Scheduling, re-stakes, who pays for them", "Repeat work from builders instead of one-off orders"] },
        { _type: "tableRow", _key: k("r"), cells: ["Counties listed by name", "States where the crew actually works", "Enquiries from inside your area, not from three states away"] },
        { _type: "tableRow", _key: k("r"), cells: ["Structured data and plain text", "Lets search engines and assistants read the site", "Mentions in ChatGPT, Perplexity and AI Overviews"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("A contractor entrance on a surveying website: repeat orders without phone calls"),
        p("Homeowners buy a survey once. Builders buy staking on every project."),
        p("So the site needs a second door. Not a brochure page — a working one. Scheduling around the build sequence. How fast you return after a design change. Who pays for a re-stake. What happens on a site where work started before you arrived."),
        p("A contractor who finds those answers once stops searching. That is the difference between a lead and a client."),

        h2("Website speed and mobile: the client and the crew both open it in the field"),
        p("Surveying sites are heavy. Scanned certificates, sample plans, drawings exported straight out of CAD."),
        p("The people opening them are standing on a lot with one bar of signal. Nine seconds to load is an enquiry you no longer have."),
        p("The fix is ordinary engineering: correct image formats and sizes, nothing loaded that is not on the screen, PDFs linked rather than embedded. It is also the cheapest part of the build."),

        h2("AI SEO built into the site: ChatGPT, Perplexity, Gemini and AI Overviews"),
        p("Your buyer asks an assistant which survey they need before they open a search engine."),
        p("The assistant reads text. It cannot read a scanned PDF, and it will not quote a page that commits to nothing."),
        p("So the build puts the explanations in text, adds structured data for the firm and its services, states turnaround and coverage as facts, and keeps the name, licence and phone identical everywhere. That is what gets a firm named in an answer."),
        p(
          "After launch this continues as ",
          link("SEO for land surveyors", "/seo-for-land-surveyors"),
          " and as ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ".",
        ),

        h2("WordPress or Next.js for a surveying company website: how to choose"),
        p("WordPress if your team will edit pages weekly and wants a familiar admin. Next.js if the site must be fast under heavy drawings and grow into dozens of deliverable and county pages."),
        p("I build both and I will say which one your case needs before you pay for either. The wrong answer here is expensive later."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for your surveying company website",
      subtitle: "Send the current site or just describe the firm. I reply within one working day with scope and a figure.",
      contextLabel: "Your company or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What is there now?", options: ["No site at all", "An old site", "A one-page site", "A site I cannot edit"] },
        { _key: k("z"), question: "Which work pays best for you?", options: ["ALTA and commercial", "Residential boundary", "Topographic and design support", "Staking for builders"] },
        { _key: k("z"), question: "Who will edit the site?", options: ["Me", "An office manager", "Nobody, do it for me", "Not decided"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Website design for land surveyors: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a website for a land surveying company cost?", "A site from €2,000. A single landing page for one deliverable €700–1,400. SEO after launch €800 a month. The figure moves with the number of deliverable and county pages and with whether you need the contractor entrance."],
          ["How long does the build take?", "Four to six weeks for a full site, about two for a single landing page. The slow part is never the code. It is getting the sample documents and the real turnaround figures out of the firm."],
          ["We have a site already. Rebuild or fix?", "I look first and say which. If the structure is sound and only the form and the speed are wrong, a fix is cheaper and I will tell you so. If every deliverable lives on one page called Services, that is a rebuild."],
          ["Will the site be found in search, or is that separate work?", "The build includes the structure, the speed, the structured data and the text that search engines and assistants can read. Positions come from ongoing work after launch, and I keep those two things separate in the quote so you can see what you pay for."],
          ["Will ChatGPT or Perplexity mention us?", "They mention firms whose pages explain the deliverable in readable text and commit to figures. A site whose explanations sit inside scanned PDFs is invisible to them. That is built in from the start here, not added later."],
          ["Can we edit the site ourselves?", "Yes. You get an admin where pages, prices and sample documents are edited without me. I would rather you change a turnaround figure in a minute than email me about it."],
          ["Do you write the text?", "I draft and you correct. What makes these pages work is what only the firm knows: what the recording office is really like, why a job runs long, what you refuse to sign."],
          ["What do you need from us to start?", "Sample deliverables you are allowed to show, the counties you cover, your real turnaround in working days, and a price range you are comfortable publishing."],
          ["Do you work with firms outside Poland?", "Yes. The work is remote, in English, Polish or Russian, and most of these projects were built for clients in other countries."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a website for a land surveying company: what to send me"),
        p("Send the current site, or just say what the firm does and where. List the deliverables you want more of and the counties you cover."),
        p("I reply within one working day with the structure I would build, what it costs, and how long it takes. If a rebuild is not worth it, I will say that instead."),
      ],
    },
  ],
};
