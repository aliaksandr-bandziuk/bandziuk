// Landing page fixture: SEO for drone service companies (EN),
// group «drone-services-seo». NEW page — create-landing.cjs, root level.
//
// Measured (research/dataforseo/scanning-niches.md, 18.11.2026):
// «drone inspection services» 390, «drone mapping services» 210,
// «drone survey services» 140, «aerial survey services» 50. Owner side is
// almost nil: «how to get drone clients» 10, «drone company website» 10.
// Wording per service-wording.md: English keeps GEO 4 400 and AEO 2 400 in
// headings.
//
// BACKBONE, distinct from the three siblings in this cluster (surveyors:
// trigger document; engineering firms: discipline × code; scanning companies:
// deliverable vs technology). Here the problem is that «drone services» hides
// three different businesses — industrial inspection, survey and mapping,
// and photo/video. The first two pay; the third is crowded and cheap. Most
// operator sites advertise all three on one page and collect enquiries from
// the cheapest one. The page is about splitting them and writing for the
// industrial buyer, with airspace permissions and the deliverable as proof.
import { p, h2, h3, li, link, k } from "./pt";

export const droneServicesSeoEn = {
  lang: "en",
  group: "drone-services-seo",
  slug: "seo-for-drone-service-companies",
  title: "SEO for Drone Service and Aerial Inspection Companies",
  heading:
    "SEO for drone service companies: separating the work that pays from the weddings and selling it to an industrial buyer",
  excerpt:
    "I do SEO for drone service companies. The words «drone services» cover three different businesses, and only two of them pay. I build pages for inspection and survey work, state the permissions and the deliverable as facts, and keep the cheap enquiries off your phone. Local SEO, and AI SEO so ChatGPT, Perplexity and Gemini name you. Audit €250, ongoing €800 a month.",
  seo: {
    metaTitle: "Drone Company SEO: Inspection, Mapping, AI",
    metaDescription:
      "SEO for drone service companies: pages for inspection, survey and mapping, permissions and deliverables as facts, local SEO and AI SEO in ChatGPT.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per type of flight", "AI SEO: ChatGPT and Perplexity", "Audit from €250"],
  heroPhonePoints: ["Thermal roof inspection", "Orthophoto and volumes", "Permissions for restricted sites", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a drone service company: site, service pages, local profile and AI visibility", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: inspection and survey pages, coverage and permissions, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a drone operator", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "SEO for a drone service company: what the work consists of",
      items: [
        { _key: k("o"), iconName: "file-text", title: "A page per type of flight", text: "Inspection, survey and mapping, thermal, stockpiles" },
        { _key: k("o"), iconName: "shield-check", title: "Permissions and insurance as facts", text: "What you may fly, where, and over what" },
        { _key: k("o"), iconName: "layers", title: "The deliverable, not the footage", text: "Orthophoto, 3D model, thermal report, volumes" },
        { _key: k("o"), iconName: "sparkles", title: "AI SEO: ChatGPT and Perplexity", text: "Where «can a drone inspect this» gets asked" },
        { _key: k("o"), iconName: "map-pin", title: "Coverage your pilot can reach", text: "Regions and site types, stated plainly" },
        { _key: k("o"), iconName: "target", title: "Fewer cheap enquiries", text: "Pages that stop attracting the work you do not want" },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: technical services sold to buyers who cannot judge the flight",
      subtitle:
        "What these share with a drone operator: the client buys a result they cannot verify themselves, the enquiry is tied to a site, and the growth came from structure and content rather than bought links. A 3D laser scanning and BIM company whose organic traffic grew twenty-nine times. An internet provider checked address by address. A multilingual property platform. A workshop and a car service with the same enquiry pattern.",
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
        h2("SEO for drone services starts by splitting three businesses that share one word"),
        p("I do SEO for drone service companies. The work starts with one decision you make and I write into the site: which flights you want to sell. Then I build a page for each of them, and the site stops talking to everyone at once."),
        p("«Drone services» covers three trades that have nothing in common except the aircraft."),
        p("Industrial inspection: roofs, chimneys, turbines, power lines. The buyer is a facility manager or an engineer, the job repeats, and the price is set by risk and reporting."),
        p("Survey and mapping: volumes, orthophotos, progress on a construction site. The buyer is a contractor or a surveyor, and the job is bought against a deadline."),
        p("Photo and video: weddings, property listings, promos. Crowded, cheap, and bought on price."),
        p("Most operator sites put all three on one page. Then they complain about the enquiries they get, which come from the third one, because that is the only language the page speaks."),
        li("a page for each type of work you actually want, with its own buyer in mind;"),
        li("nothing on the site about the work you take reluctantly;"),
        li("the aircraft and sensors mentioned as capability, not as the headline;"),
        li("the deliverable named the way the buyer names it;"),
        li("and prices or ranges where the cheap enquiries can see them and leave."),

        h2("SEO pages per flight type: inspection, survey, mapping, thermal"),
        p("The measured demand sits on the industrial side. «Drone inspection services» draws 390 searches a month, «drone mapping services» 210, «drone survey services» 140, «aerial survey services» 50."),
        p("Nobody searching those words wants a wedding reel."),
        p("Each page answers a different question. An inspection buyer wants to know whether you can fly over a live plant and what the report looks like. A mapping buyer wants accuracy, ground control and the file formats. A thermal buyer wants to know whether you hold the certification the insurer will ask about."),

        h2("Permissions, insurance and airspace: the proof that belongs on the page"),
        p("In this trade the permission is half the product."),
        p("A site near an airport, a flight over people, a plant with restricted airspace — most operators cannot take those jobs, and the buyer has no way to tell who can. The page that says plainly what you are authorised to fly, where, and with what insurance answers the question every serious enquiry starts with."),
        p("Write it as facts: the categories you hold, the limits you work within, the cover you carry, how long an application takes when a site needs one."),

        h3("Type of work, the words the buyer searches, and what the page has to prove"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Type of work", "What the buyer searches", "What the page has to prove"],
      rows: [
        { _type: "tableRow", _key: k("r"), cells: ["Industrial and roof inspection", "«drone inspection services», «roof inspection drone»", "What you may fly over, the report format, turnaround"] },
        { _type: "tableRow", _key: k("r"), cells: ["Thermal inspection", "«thermal drone inspection», «solar panel inspection»", "Certification, when thermal works and when it does not"] },
        { _type: "tableRow", _key: k("r"), cells: ["Survey and mapping", "«drone survey services», «drone mapping services»", "Accuracy, ground control, deliverable formats"] },
        { _type: "tableRow", _key: k("r"), cells: ["Stockpiles and volumes", "«stockpile measurement», «volume calculation drone»", "Method, tolerance, how often you can repeat it"] },
        { _type: "tableRow", _key: k("r"), cells: ["Construction progress", "«construction progress monitoring»", "Cadence, what the client receives each visit"] },
        { _type: "tableRow", _key: k("r"), cells: ["Restricted and sensitive sites", "«drone permission», «flying near an airport»", "Authorisations held, insurance, lead time for approval"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Selling the deliverable instead of the footage"),
        p("Operators sell flights. Buyers buy documents."),
        p("An orthophoto they can measure on. A 3D model their engineer can open. A thermal report with the anomalies marked and explained. A volume figure they can put in an invoice."),
        p("A page built around the deliverable converts a buyer who has never hired a drone before, because it describes something they already understand."),

        h3("Pages that stop the enquiries you do not want"),
        p("Most operators lose hours a week to enquiries they will never quote: a reel for a small business, a listing photo, a birthday."),
        p("Those arrive because the site invites them. Take the wedding gallery off, put the price range for inspection work on, and the mix of incoming enquiries changes within weeks. Saying no on the page is cheaper than saying no on the phone."),

        h3("Repeat work: the contracts that make a drone business viable"),
        p("One inspection is a job. A quarterly inspection schedule is a business."),
        p("So one page is written to the buyer who needs repeat visits: progress monitoring on a construction site, a seasonal roof survey across a portfolio, an inspection cycle a facility manager can put in a budget. That page is worth more than the rest of the site together."),

        h2("AI SEO for a drone operator: ChatGPT, Perplexity, Gemini and AI Overviews"),
        p("«Can a drone inspect a roof instead of scaffolding» and «how accurate is a drone survey» are assistant questions, asked before anyone opens a search engine."),
        p("The assistant answers from readable text and names operators whose pages commit to figures — accuracy, turnaround, what they are permitted to fly."),
        p("Three things decide whether you are named: text rather than PDFs and video embeds, numbers worth quoting, and the same company details everywhere you appear."),

        h3("Generative engine optimization (GEO), answer engine optimization (AEO) and LLM SEO in practice"),
        p("GEO and AEO are the same job from two sides: being named inside the generated answer, not only in the list of links. LLM SEO is that work across language models."),
        p("It is five or six fixes, and they overlap almost entirely with what makes the site rank at all."),
        p(
          "On an existing site that is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ". When assistants describe the operator wrongly, that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),

        h2("Technical SEO: video weight, speed and the enquiry form that asks about the site"),
        p("Drone sites are built from video, and video is what makes them slow. Autoplaying showreels on the home page cost more enquiries than they win."),
        p("Keep the footage, load it only when someone asks for it, and let the page open in under two seconds on a phone."),
        p("The form should ask for the site location, the type of structure, what the client needs produced and the deadline. Those four answers tell you whether the flight is even legal before you call back."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your drone company",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Your company or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which work do you want more of?", options: ["Industrial inspection", "Survey and mapping", "Thermal", "Repeat contracts"] },
        { _key: k("z"), question: "What do you want less of?", options: ["Weddings and events", "Property listing photos", "One-off small jobs", "Nothing, I take it all"] },
        { _key: k("z"), question: "What is on the site today?", options: ["One page with everything", "A page per service", "Mostly a showreel", "Not sure"] },
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for drone service companies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a drone company cost?", "An audit is €250, one-off work €250–800, ongoing work €800 a month. The figure moves with how many types of flight get their own pages and whether the site can be edited at all."],
          ["Should we really remove the wedding and event work from the site?", "If you want industrial enquiries, yes. A page that offers everything speaks the language of the cheapest buyer, and that is who calls. Keep the work you want paid for, and the mix of enquiries changes within weeks."],
          ["Will a client find us through ChatGPT or Perplexity?", "Yes. «Can a drone inspect a roof instead of scaffolding» is asked there constantly. Assistants name operators whose pages explain the method and commit to figures, and ignore sites built from video with no readable text."],
          ["What are GEO and AEO in plain words?", "Getting named inside the answer an assistant writes, instead of only in a list of links. The work is ordinary: text instead of PDFs and embeds, structured data, numbers on the page, consistent details everywhere."],
          ["Do we have to publish our permissions?", "Publishing what you are authorised to fly is the strongest thing on the page. A serious buyer starts there, and most of your competitors leave it unsaid."],
          ["Our site is mostly a showreel. Is that a problem?", "For search and for assistants, yes — there is nothing to read. The footage can stay; it just stops being the only content and stops loading before anyone asks for it."],
          ["How long before this shows up as enquiries?", "First movement at about six weeks, meaningful growth on a three to six month horizon. Inspection pages move faster than mapping pages because the intent is more immediate."],
          ["Can you guarantee a position?", "No, and nobody can. What I can state is what will be changed, in what order, and what we measure at one month and at three."],
          ["Who writes the service pages?", "I draft and you correct. The credible part is what only the operator knows: which sites get refused, what weather really costs a schedule, what you will not fly over."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a drone service company: what to send me"),
        p("Send the site. Say which work you want more of, which you would rather stop taking, and what you are authorised to fly."),
        p("I reply within one working day: what is holding the site back, which pages are attracting the wrong enquiries, and what I would do first."),
      ],
    },
  ],
};
