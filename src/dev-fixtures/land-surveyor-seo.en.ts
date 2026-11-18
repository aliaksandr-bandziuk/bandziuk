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
    "I do SEO for land surveying companies: pages per survey type and county, turnaround and price where a buyer can see them, local search, and the AI answers that now decide which firm gets named. Nobody wants a survey — somebody was told to produce a document, and the firm that explains that document gets the call. Audit €250, ongoing €800 a month.",
  seo: {
    metaTitle: "SEO for Land Surveyors — audit from €250",
    metaDescription:
      "SEO for land surveying companies: pages per survey type and county, turnaround and price on the page, local search and being quoted by ChatGPT and Perplexity.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per survey type", "Quoted by ChatGPT and Perplexity", "Audit from €250", "Reply in 1 working day"],
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
        p("Nobody wakes up wanting a land survey. The order arrives because somebody else demanded a document: a lender before a closing, a city before a permit, a neighbour in an argument about a fence, a contractor who cannot break ground without stakes in the right places. By the time the owner reaches a search engine, they are not looking for a profession — they are repeating a phrase from an email they half understand."),
        p("That is why the search terms in this trade are document names rather than job titles. People type «ALTA survey», «as built survey», «topographic survey for permit», «elevation certificate» — words handed to them by a bank or a planning department. A site organised as Services, About, Contact answers none of those searches, because the one page called Services mentions every document and explains none of them."),
        p("The work starts by turning each document you actually produce into its own page: what it is, who typically demands it, what it costs, how long it takes, and what the client receives at the end. That single change does more for a surveying firm than any amount of writing about precision and experience, because it matches the page to the sentence the client was given."),
        li("one page per deliverable, named exactly as lenders and planning departments name it;"),
        li("say who usually asks for it — the bank, the city, the attorney, the builder;"),
        li("show what the finished document looks like, not a stock photo of a tripod;"),
        li("state the turnaround in working days and a price range with its conditions;"),
        li("and leave out the deliverables you take on reluctantly, because they bring the enquiries you dislike."),

        h2("Survey types as separate pages: ALTA/NSPS, boundary, topographic, as-built"),
        p("The measured demand sits on the document names, not on the trade. In the US market «land surveying services» draws 2,400 searches a month, «topographic survey» another 2,400 and «as built survey» 880 — the deliverables together carry more search than the profession does. Each of them is a different buyer with a different deadline, and a page that tries to serve all of them at once serves none."),
        p("An ALTA/NSPS survey is ordered by a commercial buyer or a lender working through a closing checklist, and the question behind the search is which Table A items are included and whether the schedule can be met. A boundary survey is ordered by a homeowner mid-argument, and the question is what a surveyor can actually settle and what needs a lawyer. A topographic survey is ordered because a design cannot start without contours. The pages are different documents for different people, and they should read that way."),
        p("This is also where AI answers enter, earlier than most firms expect. «Which survey do I need to refinance» and «difference between a boundary survey and an ALTA survey» are now typed into ChatGPT and Perplexity before any search engine is opened, and the assistant answers from pages that explain the document plainly. A firm whose site lists services gets no mention; the firm that wrote two clear paragraphs about what an ALTA survey contains is the one quoted, with its name attached."),

        h2("County and jurisdiction pages: local rules that change the price and the turnaround"),
        p("Surveying is licensed by state and recorded by county, and the practical details differ at every line on the map: what the recording office accepts, which monuments are required, what the filing costs, how long the review takes. Clients feel this as confusion — the price they were quoted by a firm two counties away does not match the one they are quoted at home — and a page that explains the local procedure answers a question nobody else is answering."),
        p("The restraint matters more than the tactic. A page for each of four hundred counties, built by swapping a name in a template, is the textbook definition of a thin page and will be treated as one. Pages are worth writing for the counties where you have actually filed, where you can say what the office is like, what it charges and how long it takes — and that limit is usually between three and a dozen pages, not hundreds."),

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
        h2("ChatGPT, Perplexity and AI Overviews as a source of surveying enquiries"),
        p("A property owner who has been told to get a survey usually does not know which one, and that is precisely the kind of question people now put to an assistant rather than to a search box. The assistant replies in prose, often names two or three firms, and the owner contacts one of them having never seen a results page. For a trade whose buyers start confused, this channel matters more than it does for most industries."),
        p("Three things decide whether a surveying firm is among the names. The first is text an assistant can actually read: surveying sites hide everything in PDFs, sample drawings and scanned brochures, and a page whose explanation lives inside an attachment is invisible to the systems doing the answering. The second is figures worth quoting — a turnaround in working days, a price range, a service area stated as counties — because an assistant prefers a source that commits to something. The third is agreement between sources: the same firm name, the same licence details, the same services and the same phone number on the site, on the map profile and in the directories, since contradictions are the fastest way to be left out."),
        p("The same holds inside Google itself, where AI Overviews now answer «which survey do I need» above the links. The firm cited there is rarely the largest in the state; it is the one that explained the document in plain words on a page a machine could read end to end."),
        p(
          "Getting an existing site into that state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and when assistants describe a firm wrongly — a county it no longer covers, a service it dropped years ago — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),

        h2("Turnaround and price range on the page: the two questions every surveying enquiry opens with"),
        p("Every enquiry in this trade begins the same way: how much, and how soon. Most surveying sites answer neither, on the reasonable ground that both depend on the parcel. The result is that the client calls four firms, and the job goes to whichever one answered the question first — usually the one that published a range on the page rather than the one that insisted on a site visit before discussing anything."),
        p("A range with its conditions attached does the opposite of what firms fear. It does not commit you to a number; it filters. A page that says a residential boundary survey in this county typically runs within a stated band, takes a stated number of working days, and costs more when the records are poor or the lot is wooded, removes the calls about half-acre jobs you do not want and brings the ones you do."),

        h3("Boundary disputes: the queries a neighbour argument produces"),
        p("Boundary work arrives in a particular emotional state, and the searches show it: people look for whether a neighbour can move a fence, what a monument means, who pays when the line turns out to be wrong. These are not price queries, and a page that answers them collects a reader long before they are ready to order — which is exactly when a surveying firm earns the job, because the alternative source is a forum thread full of confident strangers."),
        p("The page that works here says plainly where a survey settles the matter and where it does not, and that a surveyor establishes the line while a lawyer argues about it. Saying so costs nothing and wins the call, because the owner has been unable to get that distinction from anyone."),

        h3("Construction staking: repeat work from builders, not one-off orders from owners"),
        p("Every other deliverable on this list is bought once by someone who will never need it again. Staking is different: a builder who trusts a crew calls that crew on every project, and the enquiry is worth a multiple of a single residential survey. The page for it should therefore be written for a contractor, not a homeowner — scheduling around their sequence, how quickly you can re-stake after a change, who pays for the re-stake, and how you handle a site where the work started before you arrived."),

        h2("Local search and the Google Business Profile of a surveying company"),
        p("A surveying firm is a service-area business: the crew travels, the client rarely visits the office. The profile should therefore state the counties covered rather than a radius around a pin, carry the licence details, and collect reviews from the people who actually refer this work — attorneys, builders, title companies and architects — because a referral-shaped review reads as evidence to a buyer who cannot judge the survey itself."),
        p("The same profile data feeds the assistants described above. When the service area on the site, the counties in the profile and the description in a directory disagree, both the map results and the AI answers lose confidence, and the firm quietly drops out of both."),

        h2("Site speed and the parcel-address enquiry form on a surveying site"),
        p("The enquiry form on most surveying sites asks for a name, an email and a message, which guarantees a reply that says «could you tell me the address». The form that saves a day asks for the parcel address or the parcel number, the deadline, and who asked for the survey — the lender, the city, the attorney — because those three answers are what decides whether the job is yours and what it costs."),
        p("Speed matters for a reason specific to this trade: the sites are heavy with sample drawings and scanned certificates, and the people opening them are often standing on a site with one bar of signal. A page that takes nine seconds on a phone loses an enquiry that was already in hand."),
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
        p("Send the site, say which deliverables you want more of and which you would rather stop taking, and name the counties where you actually file. I reply within one working day with what is holding the site back, how much of it is locked inside PDFs that neither a search engine nor an assistant can read, and what I would do first — including which pages are not worth writing because nobody in your area searches for them."),
      ],
    },
  ],
};
