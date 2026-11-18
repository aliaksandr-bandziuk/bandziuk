// Landing page fixture: SEO for engineering firms (EN),
// group «engineering-firm-seo». NEW page — create-landing.cjs, root level.
//
// Measured (research/dataforseo/scanning-niches.md, 18.11.2026): this is the
// ONLY niche in the whole technical cluster with a non-zero owner-side
// signal — «seo for engineers» 50 and «engineering firm marketing» 50, plus
// «website for engineering company» 20 and «engineering company website» 10.
// Service side: «structural engineering services» 1 600,
// «civil engineering services» 590, «mep engineering services» 480.
// Wording per research/dataforseo/service-wording.md: SEO forms lead,
// generative engine optimization 4 400 and answer engine optimization 2 400
// go straight into headings in English.
//
// BACKBONE, kept clear of both neighbours. /seo-for-architects is built on
// building typology and location; /seo-for-construction-companies on service
// plus town. Neither can be reused. This page stands on something else: an
// engineer is hired because somebody needs a signature under a calculation to
// a named code. The buyer is another professional — an architect, a general
// contractor, a developer — searching by discipline and standard. The unit of
// the page is discipline × code × what you are licensed to sign.
import { p, h2, h3, li, link, k } from "./pt";

export const engineeringFirmSeoEn = {
  lang: "en",
  group: "engineering-firm-seo",
  slug: "seo-for-engineering-firms",
  title: "SEO for Engineering Firms and Consulting Engineers",
  heading:
    "SEO for engineering firms: getting found by the architect, developer or contractor who needs a stamped answer",
  excerpt:
    "I do SEO for engineering firms. I split the disciplines onto separate pages and put your licensure into the text, because that is what the buyer checks first. Local SEO, and AI SEO so ChatGPT, Perplexity and Gemini name you. Nobody searches for an engineering firm. They search for the discipline and the standard somebody told them to satisfy. Audit €250, ongoing €800 a month.",
  seo: {
    metaTitle: "Engineering Firm SEO: Disciplines, Local, AI",
    metaDescription:
      "SEO for engineering firms: pages per discipline and code, licensure by jurisdiction, project sheets, local SEO and AI SEO in ChatGPT and Perplexity.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per discipline and code", "AI SEO: ChatGPT and Perplexity", "Audit from €250"],
  heroPhonePoints: ["Structural letter for a permit", "MEP scope before design", "Geotechnical report for a lender", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for an engineering firm: site, discipline pages, local profile and AI visibility", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: discipline and jurisdiction pages, project sheets, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for an engineering practice", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "SEO for an engineering firm: what the work consists of",
      items: [
        { _key: k("o"), iconName: "file-text", title: "A page per discipline", text: "Structural, MEP, civil, geotechnical, peer review" },
        { _key: k("o"), iconName: "shield-check", title: "Licensure on every discipline page", text: "The first thing a buyer checks before writing" },
        { _key: k("o"), iconName: "layers", title: "Project sheets, not a gallery", text: "Loads, spans, standards, what was signed" },
        { _key: k("o"), iconName: "sparkles", title: "AI SEO: ChatGPT and Perplexity", text: "Where a code question gets asked first" },
        { _key: k("o"), iconName: "users", title: "Pages architects forward", text: "Referral traffic from the people who hire you" },
        { _key: k("o"), iconName: "gauge", title: "Turnaround on letters and reviews", text: "Small jobs arrive with a deadline attached" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: technical firms whose buyers read specifications, not slogans",
      subtitle:
        "What these share with an engineering practice: the buyer is a professional, the decision rests on evidence, and the growth came from structure and content rather than bought links. A 3D laser scanning and BIM company whose organic traffic grew twenty-nine times. An internet provider checked address by address. An investment platform explaining a complex product. A multilingual property platform. A retail-analytics consultant selling expertise alone.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "web-development-a-website-for-internet-prowider",
        "investment-platform-with-ai-guided-learning",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("SEO for engineering firms starts with the discipline and the code, not the company name"),
        p("I do SEO for engineering firms. The work starts with what your firm may sign, and I write that into the site: the disciplines, the codes, the stages. Then the site is found by the discipline, not by the company name."),
        p("Nobody searches for an engineering firm. They search for the thing they were told to produce."),
        p("A permit office asked for a stamped letter. A lender asked for a soils report. An architect needs the systems designed before the drawings go in. The words typed into search are the discipline and the standard, not your name."),
        p("A site organised as Services, Projects, About answers none of that. One page listing six disciplines explains none of them."),
        p("The work starts by giving each discipline its own page: what you do in it, which codes you work to, what you are licensed to sign, how long it takes, and what the client receives."),
        li("one page per discipline you actually want more of;"),
        li("name the codes and standards in the text, because that is what gets searched;"),
        li("what you can sign and where, written into the page, which is half the buying decision;"),
        li("state turnaround in working days for letters and reviews;"),
        li("and leave out disciplines you take reluctantly."),

        h2("SEO pages per discipline: structural, MEP, civil, geotechnical"),
        p("The measured demand sits on the disciplines. «Structural engineering services» draws 1,600 searches a month. «Civil engineering services» 590. «MEP engineering services» 480."),
        p("Each of those is a different buyer. Structural is often an emergency: a crack, a wall somebody wants removed, a permit review that came back. MEP is bought early by an architect who cannot finish a set without it. Civil is bought against a local authority process."),
        p("One page cannot hold three buyers with three deadlines. Each needs its own."),

        h2("Local SEO for an engineering firm: jurisdictions and licensure in the page text"),
        p("A buyer picks a firm by what it can stamp and where. It is the first thing they check, and usually the one thing the site does not say."),
        p("Most engineering sites bury it in an About page. I move it onto every discipline page, stated plainly, because a buyer two states away needs to know in one second whether to keep reading."),
        p("This is also what makes local SEO work here. The profile lists the jurisdictions you serve, not a radius on a map, and the reviews come from architects, contractors and developers rather than from building owners."),

        h3("Discipline, the trigger that produces the enquiry, and the page that catches it"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Discipline", "What triggered the enquiry", "The page that catches the search"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["Structural engineering", "A crack, a removed wall, a permit comment", "What you can stamp, inspection letters, turnaround in days"] },
        { _type: "tableRow", _key: k("r"), cells: ["MEP engineering", "An architect cannot finish the set without systems", "Coordination scope, BIM level, delivery formats"] },
        { _type: "tableRow", _key: k("r"), cells: ["Civil and site", "Site plan, drainage or grading approval", "The local authority process and the real review time"] },
        { _type: "tableRow", _key: k("r"), cells: ["Geotechnical", "A lender or a city asked for a soils report", "What the report contains, drilling, lead time"] },
        { _type: "tableRow", _key: k("r"), cells: ["Peer review and expert work", "An insurer, an owner or a dispute", "Scope, independence, what you will and will not conclude"] },
        { _type: "tableRow", _key: k("r"), cells: ["Retrofit and code upgrade", "A code change or an insurance requirement", "Which code applies, what triggers it, what it costs"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("AI SEO for an engineering firm: ChatGPT, Perplexity, Gemini and AI Overviews"),
        p("A homeowner with a cracked wall asks an assistant what kind of engineer they need. So does a project manager who inherited a permit comment they do not understand."),
        p("The assistant answers in prose and names two or three firms. Neither person ever sees a results page."),
        p("Three things decide whether you are among the names."),
        li("Text a machine can read. Engineering sites publish PDFs, scanned stamps and CAD exports. To an assistant, that content does not exist."),
        li("Figures worth quoting: turnaround in days, jurisdictions, what you are licensed to sign. A source that commits to nothing is not cited."),
        li("Agreement between sources. Firm name, licence numbers, services and phone identical on the site, the map profile and the directories."),
        p("Inside Google the same thing happens above the links, in AI Overviews. The firm cited there is usually the one that explained the code requirement in plain words."),

        h3("Generative engine optimization (GEO), answer engine optimization (AEO) and LLM SEO in practice"),
        p("GEO and AEO are the same job from two angles: getting named inside a generated answer rather than only in a list of links. LLM SEO is that work across language models."),
        p("It is not a separate product. It is five or six fixes: lift the text out of PDFs, add structured data for the firm and its services, put numbers into the copy, make the data agree everywhere, and write pages that answer the questions people ask out loud."),
        p(
          "On an existing site that is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ". When assistants describe a practice wrongly — a discipline dropped years ago, a state you no longer cover — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),

        h2("Project sheets instead of a gallery: loads, spans, standards and what you signed"),
        p("Architects post photographs. Engineers copy them, and it costs them the enquiry."),
        p("Your buyer is reading for competence, not for beauty. A project sheet with the building type, the structural system, the spans, the codes applied and the role you held proves more than any render."),
        p("It also ranks, because it contains the words an engineer would search."),

        h3("Pages for letters and small jobs: the enquiries that arrive with a deadline"),
        p("A stamped letter is a small job. It is also how most new clients arrive."),
        p("Somebody needs it this week, searches for it directly, and calls the first firm that says it does them and how fast. A page for each common letter type collects work that competitors ignore as too small to advertise."),

        h3("Referral traffic from architects and contractors: the pages they forward"),
        p("Half of your work comes through other professionals. They are not searching — they are forwarding."),
        p("That changes what the site needs: a page an architect can send to a client as an explanation, a one-screen scope description a contractor can paste into an email, a clear statement of what you need to start. Write those and your referrers do your selling."),

        h2("Technical SEO: speed, and the enquiry form that asks for the scope"),
        p("The usual form asks for a name, an email and a message. The reply is always a request for drawings."),
        p("The form that saves a week asks for the building type, the discipline needed, the deadline and who requires the document. Add a file upload, because the client already has the permit comment in their hand."),
        p("Speed matters less here than on a consumer site and still matters more than firms think. Sites built on CAD exports and scanned PDFs are slow, and the people opening them are often on a phone between meetings."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your engineering firm",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Your firm or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which discipline do you want more of?", options: ["Structural", "MEP", "Civil and site", "Geotechnical or peer review"] },
        { _key: k("z"), question: "Where does work come from now?", options: ["Architects and contractors", "Repeat clients", "Directories and bids", "Search already works a little"] },
        { _key: k("z"), question: "What is on the site today?", options: ["One services page", "A page per discipline", "Mostly PDFs and project photos", "Not sure"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for engineering firms: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for an engineering firm cost?", "An audit is €250, one-off work €250–800, ongoing work €800 a month. The figure moves with how many disciplines want their own pages, how many jurisdictions you are licensed in, and whether the current site lets pages be added."],
          ["Our work comes from referrals. Why would we need search?", "Referrals still check you online before calling, and they forward pages rather than phone numbers. The same pages that rank are the ones an architect sends to a client. You are not replacing the referral chain, you are arming it."],
          ["Will a client find us through ChatGPT or Perplexity?", "Yes, and often before any search. A homeowner with a crack and a project manager with a permit comment both ask an assistant what kind of engineer they need. Assistants name firms whose pages explain the requirement in readable text and commit to figures."],
          ["What are GEO and AEO in plain words?", "Generative engine optimization and answer engine optimization mean getting named inside the answer an assistant writes, instead of only in a list of links. The work is ordinary: text instead of PDFs, structured data, numbers on the page, consistent details everywhere."],
          ["Should we publish fees?", "Not a fee schedule. A range for the repeatable items — a letter, an inspection, a small report — with the conditions attached. It filters the enquiries that were never going to become projects."],
          ["Do project sheets give away client information?", "Not if written properly. Building type, system, spans, codes and your role carry no confidential detail, and that is exactly the part that proves competence and ranks."],
          ["How long before this shows up as enquiries?", "First movement at about six weeks, meaningful growth on a three to six month horizon. Letters and small jobs move faster because the intent is immediate."],
          ["Can you guarantee a position?", "No, and nobody can. The ranking is decided by a system neither of us controls. What I can state is what will be changed, in what order, and what we measure at one month and at three."],
          ["Who writes the discipline pages?", "I draft and you correct. What makes them credible is what only the practice knows: which review comments keep coming back, why a job runs long, what you refuse to stamp."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for an engineering firm: what to send me"),
        p("Send the site. Say which disciplines you want more of and which you would rather stop taking. List the jurisdictions where you are licensed."),
        p("I reply within one working day: what is holding the site back, how much of it is locked inside PDFs that neither a search engine nor an assistant can read, and what I would do first."),
      ],
    },
  ],
};
