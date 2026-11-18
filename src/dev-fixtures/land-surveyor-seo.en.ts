// Landing page fixture: SEO for land surveyors (EN), group «land-surveyor-seo».
// NEW page — create-landing.cjs, root level like the other industry SEO pages.
//
// Why it exists (18.11.2026). Measured in research/dataforseo/scanning-niches.md:
// the OWNER-side intent is zero — «seo for land surveyors», «land surveyor seo»,
// «marketing for land surveyors» all return no data, and only «land surveyor
// website» 40 registers. The SERVICE side is large: «land surveying services»
// 2400, «topographic survey» 2400, «as built survey» 880.
//
// The owner's reading, which this page is built on: in this cluster the trade
// does not know its own service can be promoted, exactly as ScanM2's buyers did
// not know laser scanning existed. So the page is written for the tail, direct
// visits and AI answers, not to win a head term — the same decision as the
// 04.11 batch, see claude/landing-queue.md.
//
// BACKBONE, and it is not in the registry of used angles: a survey is never
// wanted, it is demanded. A lender, a city, a neighbour or a contractor asks
// for a DOCUMENT, and the client searches the document's name from that letter.
// So the unit of the page is the document and the event that triggered it —
// not the service. Location pages belong to photographers, «two buyers» to
// security firms and carpenters, published prices to remodelers; none of them
// is built on a trigger document.
//
// Neighbours checked for cannibalisation: /seo-for-architects,
// /seo-for-construction-companies, /seo-for-contractors, /seo-for-home-builders,
// /manufacturing-seo. None covers survey deliverables or county recording, and
// /seo-for-home-inspectors is residential inspection, a different trade.
import { p, h2, h3, li, link, k } from "./pt";

export const landSurveyorSeoEn = {
  lang: "en",
  group: "land-surveyor-seo",
  slug: "seo-for-land-surveyors",
  title: "SEO for Land Surveyors and Surveying Companies",
  heading:
    "SEO for land surveyors: getting found by the client whose lender, city or closing demanded a survey",
  excerpt:
    "I do SEO for land surveying companies. A page per survey type and per county. Turnaround and price where the buyer can see them. Local SEO, and AI SEO so that ChatGPT, Perplexity and Gemini name you. Nobody wants a survey. Somebody was told to produce a document, and the firm that explains that document gets the call. Audit €250, ongoing €800 a month.",
  seo: {
    metaTitle: "SEO for Land Surveyors — audit from €250",
    metaDescription:
      "SEO for land surveying companies: pages per survey type and county, turnaround and price on the page, local SEO, and AI SEO in ChatGPT and Perplexity.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per survey type", "AI SEO: ChatGPT and Perplexity", "Audit from €250"],
  heroPhonePoints: ["ALTA survey for a closing", "Boundary survey before a fence", "Topographic survey for a permit", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a land surveying company: site, local profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: survey-type and county pages, structured data, enquiry form", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a surveying business", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "SEO for a land surveying company: what the work actually consists of",
      items: [
        { _key: k("o"), iconName: "file-text", title: "A page per survey type you sell", text: "ALTA/NSPS, boundary, topographic, as-built, staking" },
        { _key: k("o"), iconName: "map-pin", title: "County and jurisdiction pages", text: "Recording rules, fees and turnaround where you file" },
        { _key: k("o"), iconName: "sparkles", title: "Being named by ChatGPT and Perplexity", text: "«Which survey do I need» is asked there first" },
        { _key: k("o"), iconName: "gauge", title: "Turnaround and price range on the page", text: "The two questions every enquiry opens with" },
        { _key: k("o"), iconName: "search", title: "Local search and the map results", text: "The counties you cover, not the whole state" },
        { _key: k("o"), iconName: "target", title: "Pages written for builders, not owners", text: "Staking and as-built bring repeat work" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: technical services sold to clients who cannot inspect the work",
      subtitle:
        "What these have in common with a surveying business: the buyer cannot judge the deliverable, the enquiry is tied to an address or an object, and the growth came from structure and content rather than bought links. A 3D laser scanning and BIM company whose organic traffic grew twenty-nine times, an internet provider whose service is checked address by address, a multilingual property platform with thousands of objects, a workshop that takes enquiries by the job, and a car service with the same enquiry pattern.",
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
        h2("SEO for land surveyors begins with the document the client was told to produce"),
        p("Nobody wants a survey. A survey is demanded. By a lender before a closing. By a city before a permit. By a contractor who cannot break ground. By a neighbour in an argument about a fence."),
        p("So the search is not «land surveyor». The search is the name of a document, copied from an email the owner half understands."),
        p("«ALTA survey». «As built survey». «Topographic survey for permit». «Elevation certificate». Those words came from the bank or the planning department."),
        p("A site built as Services, About, Contact answers none of them. One page called Services lists every document and explains none."),
        p("The first thing I do is split the deliverables onto separate pages. On each one: what the document is, who demands it, what it costs, how long it takes, what you hand over. That beats any number of paragraphs about precision and experience."),
        li("one page per deliverable, named exactly as lenders and planning departments name it;"),
        li("say who usually asks for it — the bank, the city, the attorney, the builder;"),
        li("show what the finished document looks like, not a stock photo of a tripod;"),
        li("state the turnaround in working days and a price range with its conditions;"),
        li("and leave out the deliverables you take on reluctantly, because they bring the enquiries you dislike."),

        h2("SEO pages per survey type: ALTA/NSPS, boundary, topographic, as-built"),
        p("Each deliverable has its own buyer and its own deadline."),
        p("The measured demand backs this up. «Land surveying services» draws 2,400 searches a month. «Topographic survey» another 2,400. «As built survey» 880. Together the documents carry more search than the profession does."),
        p("An ALTA/NSPS survey is ordered off a lender\u2019s closing checklist. The question is which Table A items are included and whether the schedule holds. A boundary survey is ordered mid-argument. The question is what a surveyor can settle and what needs a lawyer. A topographic survey is ordered because a design cannot start without contours."),
        p("One page for all three serves none of them. Each needs its own text."),
        p("AI answers enter here too, earlier than most firms expect. «Which survey do I need to refinance» goes to ChatGPT and Perplexity before any search engine. The assistant answers from pages that explain the document plainly, and names the firm that wrote them."),

        h2("Local SEO by county: the rules that change the price and the turnaround"),
        p("Surveying is licensed by state and recorded by county. Every line on the map changes the details: what the recording office accepts, which monuments are required, what filing costs, how long review takes."),
        p("The client sees a spread of prices and does not understand why. A page that explains the local procedure answers a question nobody else answers."),
        p("Restraint matters more than the tactic. Four hundred county pages built from a template are thin pages, and they are treated as such. Write the counties where you have actually filed and can say what the office charges and how long it takes. Usually three to a dozen pages."),

        h3("Survey type, the event that triggers it, and the page that catches the search"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Survey type", "What triggered the order", "The page that catches the search"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["ALTA/NSPS land title survey", "A commercial purchase or refinance; the lender's closing checklist", "Which Table A items you include, and the schedule you can hold"] },
        { _type: "tableRow", _key: k("r"), cells: ["Boundary survey", "A fence, an encroachment, an argument with a neighbour", "What a surveyor can settle, what needs an attorney, what monuments mean"] },
        { _type: "tableRow", _key: k("r"), cells: ["Topographic survey", "A permit application or the start of a design", "The local permit process and the format the designer needs"] },
        { _type: "tableRow", _key: k("r"), cells: ["As-built survey", "A lender, an architect or a city checking what was actually built", "Deliverable formats, tolerances and how fast you can turn it around"] },
        { _type: "tableRow", _key: k("r"), cells: ["Construction staking", "A contractor who cannot start work", "A page written for builders: scheduling, re-stakes, who pays for them"] },
        { _type: "tableRow", _key: k("r"), cells: ["Elevation certificate", "A flood insurance premium or a mortgage condition", "Flood zones, what the certificate changes, and what it cannot change"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("AI SEO for a surveying company: ChatGPT, Perplexity, Gemini and AI Overviews"),
        p("A property owner is told to get a survey. They do not know which one. That question now goes to an assistant rather than a search box."),
        p("The assistant answers in prose and often names two or three firms. The owner calls one of them without ever seeing a results page. In a trade where the buyer starts confused, this channel matters more than in most industries."),
        p("Three things decide whether a surveying firm is among the names."),
        li("Text a machine can read. Surveying sites hide everything in PDFs, sample drawings and scanned brochures. To an assistant, that content does not exist."),
        li("Figures worth quoting: a turnaround in working days, a price range, a service area listed by county. A source that commits to nothing does not get cited."),
        li("Agreement between sources. The same firm name, licence details, services and phone number on the site, the map profile and the directories. A contradiction gets you skipped."),
        p("The same holds inside Google. AI Overviews answer «which survey do I need» above the links. The firm cited there is rarely the largest in the state. It is the one that explained the document in plain words."),

        h3("Generative engine optimization (GEO), answer engine optimization (AEO) and LLM SEO in practice"),
        p("GEO and AEO mean the same thing from two angles: getting your name into the generated answer, not just into the list of links. LLM SEO is the same work across language models."),
        p("In practice it is five or six concrete fixes. Lift the text out of the PDFs. Add structured data for the firm and its services. Put numbers into the copy. Make the data agree everywhere it appears. Write pages that answer the questions people ask out loud."),
        p(
          "Getting an existing site into that state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ". When assistants describe a firm wrongly — a county it no longer covers, a service it dropped — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),

        h2("Turnaround and price range on the page: the two questions every surveying enquiry opens with"),
        p("Every enquiry begins the same way: how much, and how soon. Most surveying sites answer neither."),
        p("The reason is sound: both depend on the parcel. The result is predictable. The client calls four firms, and the job goes to whoever answered first."),
        p("A range with conditions commits you to nothing. It filters. Say that a residential boundary survey in this county runs within a stated band, takes so many working days, and costs more when the records are poor or the lot is wooded. The bargain-hunting calls stop."),

        h3("Boundary disputes: the queries a neighbour argument produces"),
        p("These clients arrive upset. They search whether a neighbour can move a fence, what a monument means, who pays when the line is wrong."),
        p("None of that is a price query. A page that answers it collects the reader long before they order. The alternative source is a forum thread full of confident strangers."),
        p("Say plainly where a survey settles the matter and where it does not. A surveyor establishes the line; a lawyer argues about it. That sentence costs nothing and wins the call."),

        h3("Construction staking: repeat work from builders, not one-off orders from owners"),
        p("Every other deliverable here is bought once. Staking is not. A builder who trusts a crew calls that crew on every project."),
        p("So the page is written for a contractor, not a homeowner. Scheduling around their sequence. How fast you re-stake after a change. Who pays for it. What you do on a site where work started before you arrived."),

        h2("Local SEO and the Google Business Profile of a surveying company"),
        p("The crew travels. The client rarely visits the office."),
        p("So the profile lists counties, not a radius around a pin. It carries the licence details. Reviews come from the people who refer this work: attorneys, builders, title companies, architects. A referral-shaped review reads as evidence to someone who cannot judge a survey."),
        p("Assistants read the same profile data. When the service area on the site and the counties in the profile disagree, you drop out of the map results and out of the AI answers."),

        h2("Technical SEO: site speed and the parcel-address enquiry form"),
        p("The usual form asks for a name, an email and a message. The reply is always the same: «could you tell me the address»."),
        p("The form that saves a day asks for the parcel address or number, the deadline, and who demanded the survey. Those three answers decide whether the job is yours and what it costs."),
        p("On speed. These sites are heavy with sample drawings and scanned certificates. The people opening them are standing on a site with one bar of signal. Nine seconds to load is an enquiry you no longer have."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your surveying company",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Your company or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which work do you want more of?", options: ["ALTA and commercial", "Residential boundary", "Topographic and design support", "Staking for builders"] },
        { _key: k("z"), question: "Where does work come from now?", options: ["Title companies and attorneys", "Builders and contractors", "Repeat clients and referrals", "Search already works a little"] },
        { _key: k("z"), question: "What is on the site today?", options: ["One services page", "A page per service", "Mostly PDFs and samples", "Not sure"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for land surveyors: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a land surveying company cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. What moves the number is how many deliverables you want pages for, how many counties you genuinely file in, and whether the current site lets pages be added and addresses edited at all."],
          ["Will a client actually find me through ChatGPT or Perplexity?", "Yes, and in this trade earlier than in most, because the buyer starts by asking which survey they even need. The assistant answers from readable text and names firms whose pages explain the document and commit to figures. A site whose explanations sit inside PDFs is invisible to it, which is the usual reason a firm is never mentioned."],
          ["My crew is more accurate than the firm ranking above me. Why are they first?", "Because accuracy is invisible to a search engine. It reads text, and a competitor who wrote two plain paragraphs about what an ALTA survey includes answered a question you left unanswered. The gap closes with writing, not with better instruments."],
          ["Do I need a page for every county?", "No, and building four hundred of them from a template is actively harmful — they are thin pages and are treated as such. Write the counties where you have actually filed and can describe the recording office, the fees and the real turnaround. That is usually three to a dozen pages."],
          ["Should I publish prices when every parcel is different?", "Publish a range with its conditions, not a fixed figure. It commits you to nothing and filters the enquiries: the clients who cannot afford the work stop calling, and the ones who were going to compare four firms stop at the one that answered the question."],
          ["What do I do with enquiries that are not my kind of work?", "Shape the pages so they arrive less often. Most unwanted enquiries come from a single services page that implies you do everything; once each deliverable has its own page describing who it is for, the mismatched calls fall away on their own."],
          ["How long before this shows up as enquiries?", "First movement at about six weeks, meaningful growth on a three to six month horizon. Staking and builder work can move faster, because a contractor who finds you once calls again without searching."],
          ["Can you guarantee a position?", "No, and nobody can — the ranking is decided by a system neither of us controls. What I can state is what will be changed, in what order, and what we measure at one month and at three."],
          ["Who writes the survey-type pages?", "I draft and you correct. The parts that make the page worth reading — what the local recording office is actually like, why a job runs long, what you refuse to sign — only exist inside the firm, and no amount of research from outside substitutes for them."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a land surveying company: what to send me"),
        p("Send the site. Say which deliverables you want more of and which you would rather stop taking. Name the counties where you actually file."),
        p("I reply within one working day: what is holding the site back, how much of it is locked inside PDFs that neither a search engine nor an assistant can read, and what I would do first. That includes which pages are not worth writing, because nobody in your area searches for them."),
      ],
    },
  ],
};
