// Landing page fixture: Senior living SEO (EN), group «senior-living-seo».
// New page, batch B (medical practices).
// Semantic core: ref/medical-practices.md, group «senior living»: senior living
// seo 90 (H1, metaTitle, several H2) · seo for senior living 70 (intro, H2) ·
// senior living seo company 20 (H2 on SEO vs senior living marketing) · seo for
// senior living community 10, seo senior living 10 (covered by the community
// and level-of-care H2s). Brand queries in the same group — jobs at atria
// senior living 590, aria senior living 140, atria senior living logo 70 — are
// patients’/job seekers’ demand and are NOT targeted. «senior living marketing»
// 320 / «assisted living marketing» 390 are a blog topic (claude/blog-articles
// #49); here only one H2 explains SEO vs the wider marketing mix.
// Intent: ref/intent-check-medical-practices.md — «senior living seo» vs
// «assisted living website design» 0 of 10 shared URLs, 1 shared domain →
// separate pages; design is /senior-living-website-design (sibling, linked).
// SEO SERP: argentum.org, sixthcitymarketing, seniorlivingsmart, seoprofy,
// sageage, artgro, firstpagesage → senior-living marketing agencies and the
// industry association: operators’ demand.
// Angles: the adult child as the searcher; a page per level of care
// (independent, assisted, memory care, respite); state licensing in general
// terms; fair housing in general terms; Google Business Profile per community;
// referral aggregators (A Place for Mom, Caring.com — general) vs own
// inquiries; cost pages and pricing transparency; tours and move-ins as the
// measure; reviews and resident privacy (FTC endorsement rules — general);
// staff pages and YMYL; AI search (GEO, AEO).
// NOT on this page: designing and building the site, photos, video tours,
// floor plans, accessibility design, tour form layout
// (/senior-living-website-design); clinics and practices (/medical-seo);
// home health care marketing (blog candidate, no page); paid ads and social
// media (not offered).
// Owner’s rules: every SEO page covers AI search; Giuseppe is the main case;
// never say there are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const seniorLivingSeoEn = {
  lang: "en",
  group: "senior-living-seo",
  slug: "senior-living-seo",
  title: "Senior living SEO",
  heading: "Senior Living SEO for Assisted Living and Memory Care Communities",
  excerpt:
    "I do senior living SEO for independent living, assisted living and memory care communities: a page for each level of care, a Google profile for each community, clear cost information, reviews and tour requests, so adult children searching for a parent find you before a referral list does.",
  seo: {
    metaTitle: "SEO for Senior Living Communities | Bandziuk",
    metaDescription:
      "Senior living SEO: care-level and cost pages, a Google profile per community, reviews, tour tracking and AI answers, measured in tours. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Care pages + Maps + reviews", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Assisted living near me", "Memory care cost", "Schedule a tour", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Senior living SEO audit: website and Google Business Profile", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off senior living SEO work: care-level and cost pages, profiles, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a senior living community or operator", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with SEO for senior living",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for each level of care", text: "Independent, assisted, memory care and respite stays" },
        { _key: k("o"), iconName: "map-pin", title: "A Google Business Profile per community", text: "Category, tour hours, real photos, the matching page" },
        { _key: k("o"), iconName: "file-text", title: "Cost pages families can read", text: "Starting prices, what is included, payment options" },
        { _key: k("o"), iconName: "message-circle", title: "Reviews answered without resident details", text: "A routine for families and replies that protect privacy" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in tours and move-ins", text: "Every inquiry tagged with the page it came from" },
        { _key: k("o"), iconName: "sparkles", title: "Named in ChatGPT and AI Overviews", text: "Care levels and prices assistants can quote" },
      ],
      prices: [
        { _key: k("r"), label: "Senior living SEO audit: website and Google profile", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a senior living community", value: "from 800 € / month", note: "pages, maps, reviews, AI visibility", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: a psychotherapy practice in Milan and other websites I rank in search",
      subtitle:
        "Giuseppe, a psychotherapist in Milan, runs a private medical practice under strict advertising rules. I rebuilt his site, moved all 468 blog posts with redirects from every old URL, and his new pages already appear in ChatGPT answers — he found me through ChatGPT himself. Next to it: Cyprus VIP Estates, a multilingual real estate site whose SEO I run every month, ScanM2, a 3D laser scanning and BIM firm that went from no leads to weekly leads and 29× organic traffic, an education agency covering ten countries and a Warsaw auto repair shop I optimized for local search and Google Maps. A senior living community needs the same parts: careful wording, a page for every service and location, and inquiries traced back to search.",
      picks: [
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for senior living SEO",
      subtitle: "Within one business day you get my first three priorities for your community’s search presence and a fixed price.",
      contextLabel: "Community name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What does your community offer?", options: ["Independent living", "Assisted living", "Memory care", "Several levels of care"] },
        { _key: k("z"), question: "Where do most move-ins come from now?", options: ["Referral services", "Google search and Maps", "Hospital and doctor referrals", "Word of mouth"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Senior living SEO is the work that brings families to your community from Google, Maps and AI assistants rather than from paid referral lists: a page for each level of care, a Google Business Profile for each community, clear cost information, reviews and a tour request that takes a minute. One person handles it end to end — audit, page plans, code and reports — for independent living, assisted living and memory care communities and for operators with several locations."),

        h2("What senior living SEO covers: how adult children search for a community"),
        p("The person typing “assisted living near me” is rarely the future resident. More often it is a daughter or son, sometimes in another state, searching at lunch or late at night after a fall, a hospital discharge or a worrying phone call. They open several tabs and call the two or three communities that answer their questions first. That search happens in three places:"),
        li("the map results, where three communities with a rating and a phone number take many of the first calls"),
        li("the regular results, crowded with referral services, directories and large operators"),
        li("AI answers in Google and ChatGPT, which now name communities when asked which memory care nearby has good reviews"),
        p("SEO for senior living works on all three: your pages, your profile, your reviews and the plain facts that assistants can quote."),

        h2("Senior living keywords by level of care: independent living, assisted living and memory care pages"),
        p("Families search by the care a parent needs, not by the name of your building. One “Our community” page cannot rank for “memory care Scottsdale”, “assisted living with nursing care” and “respite stay after hospital” at once. Each level of care you offer gets its own page, written around the questions that level raises."),
        h3("Independent living and 55+ community pages"),
        p("Here the future resident often searches alone: apartments, meals, activities, transportation, the monthly fee and what happens if care is needed later."),
        h3("Assisted living pages"),
        p("Adult children want to know what help with bathing, dressing and medication is included, how care needs are assessed, who is on site at night and how the monthly price changes with the care level."),
        h3("Memory care pages"),
        p("Searches here are anxious and specific: dementia care with a secured courtyard, care for someone who wanders. The page explains the secured setting, staff training in general terms, the daily rhythm and how families visit."),
        h3("Respite and short-term stay pages"),
        p("A short stay after surgery or while a family caregiver travels is often the first contact with a community. A separate page catches these searches and lets a family see the community from inside."),

        h2("State licensing and fair housing rules on assisted living pages"),
        p("Assisted living and memory care are licensed by each state, and the names, rules and allowed services differ: what one state calls assisted living, another licenses as a residential care facility or a personal care home. A care page should name your license type as text, describe only the services your license allows and make no promises about health outcomes. Senior housing is also housing, so fair housing rules apply to your pages and ads: describe the community and its services, not the kind of resident you prefer. These are general points; your licensing consultant or attorney checks the wording for your state."),

        h2("Local SEO for senior living communities: a Google Business Profile for each community"),
        p(
          "For “assisted living near me” the map decides. Each community needs its own profile with the primary category that matches its license, the hours when families can tour, real photos of apartments and common areas, the services list and a link to that community’s page rather than the home page. Operators with several communities need a page and a profile per address, with the same name, address and phone on the site, the profile and senior care directories. More on maps work on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("Referral services vs your own inquiries: A Place for Mom, Caring.com and the senior living website"),
        p("Referral services such as A Place for Mom or Caring.com rank high for almost every “assisted living + city” search. They pass a family’s details to several communities and charge a fee when someone moves in. For many communities they remain a real source of residents; the price is a family that is already comparing you with others, and a fee on each move-in."),
        p("Senior living SEO does not replace those services. It adds a channel where the family finds you directly. Track the two separately in your CRM, so you can see what a direct move-in costs next to a referred one. A complete directory listing that links to your site also supports your own pages."),

        h2("Assisted living cost pages: pricing transparency in senior living SEO"),
        p("“How much is assisted living in [city]” and “memory care cost per month” are among the questions families type most, and many community sites answer them with “contact us for pricing”. The family then reads an average on a referral site instead. A cost page that gives a starting monthly price for each level of care, what it includes, how care levels add to it, whether there is a community fee and which payment sources you accept — private pay, long-term care insurance, veterans benefits or a state Medicaid waiver where it applies — answers the search on your own site. It also filters out families for whom the price does not work before your sales team spends an hour on them."),

        h2("Tour requests from search: measuring senior living SEO in tours and move-ins"),
        p("Rankings and traffic are not the result a community needs. The useful numbers are tour requests, calls and move-ins that started from search. I set up tracking so each inquiry carries the page it came from: the call button, the tour form and the brochure download are recorded as separate events and passed to your senior living CRM where it accepts web leads. After a few months you can see which care page brings tours and which only brings readers."),

        h2("Reviews for senior living communities: Google, Caring.com and resident privacy"),
        p("Families read reviews here more closely than for almost any other decision. A steady routine works better than a campaign: ask every family, not only the happy ones, a few weeks after a move-in, with a direct link to Google. Buying reviews or rewarding them breaks the platforms’ rules and US consumer protection rules on endorsements."),
        p("Replies need care. Never confirm that the reviewer’s relative lives with you and never discuss anyone’s care in public. A short, calm reply that invites the person to call the executive director shows readers that the community listens without exposing a resident."),

        h2("Staff pages and E-E-A-T on senior living websites: who stands behind the care"),
        p("Pages about dementia, nursing and daily care belong to what Google calls “Your Money or Your Life” topics, held to a higher standard. The signals it looks for are simple: pages for the executive director, the director of nursing or wellness and the memory care lead with their credentials; the name of the person who reviewed each care page and the date; a clear line between describing your services and giving medical advice. My part is the page plan and the first drafts; nothing about care goes live until your care team has signed it off."),

        h2("Senior living SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Adult children now ask ChatGPT which assisted living near Tampa takes residents with diabetes, or ask Google how memory care cost compares with assisted living. Assistants answer from facts they can read and confirm in several places. The work of earning a place in those answers goes by two names, GEO (generative engine optimization) and AEO (answer engine optimization). For a senior living community it comes down to:"),
        li("levels of care, license type, apartment types, starting prices, payment options and visiting hours written as plain facts"),
        li("answers to the questions families ask on tours, published on the care pages"),
        li("the same details on your site, your Google profile and the directories"),
        li("structured data that connects the operator, each community and its services"),
        p(
          "I have seen it work for a private medical practice: the site I rebuilt for Giuseppe, a Milan psychotherapist, now has new pages quoted in ChatGPT answers — the same assistant through which he first came to me. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Senior living SEO company or senior living marketing agency: what I do"),
        p(
          "Senior living marketing is usually a mix: paid search, social media, referral partners, events and a sales team that follows up every lead. Many firms sell that whole mix on their own platform. I am one specialist who does SEO and builds websites; I do not run ads or social media. You get the search side — pages, profiles, data and tracking — planned and done by the same person, and the site stays yours. My general approach is on the ",
          link("SEO strategy and optimization", "/services/seo-optimization-and-strategy"),
          " page. If the site itself needs rebuilding, see ",
          link("senior living website design", "/senior-living-website-design"),
          "; clinics and private practices have a separate page on ",
          link("medical SEO", "/medical-seo"),
          ".",
        ),

        h2("How much senior living SEO costs"),
        li("Audit of the community website and its Google Business Profile: from 250 €, paid once, ending in a short list of what to fix first."),
        li("One-off senior living SEO work — care-level and cost pages, profiles, structured data, tracking, technical fixes: 250–700 €."),
        li("Monthly SEO — new pages, maps, the review routine, AI visibility and reports in tours: from 800 € per month; in large metro areas with many competing communities, from 1,300 € per month."),
        p(
          "For one community outside a big metro, the audit, a set of care pages and a well-kept profile are often enough before any monthly plan. All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Senior living SEO: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for senior living cost?", "The audit starts at 250 €; separate jobs such as care-level or cost pages cost 250–700 €; ongoing work starts at 800 € a month, or 1,300 € where many communities compete in a large metro area. Tell me how many communities and care levels you have, and I will name a fixed price."],
          ["How long before senior living SEO brings tour requests?", "Profile corrections and edits to pages that already rank tend to show first, within a few weeks. A new memory care or cost page needs a season — roughly two to four months — and longer where national operators and referral services fight for the same city searches."],
          ["Should we stop paying referral services if SEO works?", "Not at once. Referral services bring families now; search brings families you do not pay a fee for. Track both in your CRM and decide by the cost of each move-in once direct inquiries grow."],
          ["Should a senior living community show prices online?", "A starting price for each level of care, with what it includes, answers the cost searches families make and filters out inquiries that will not fit. The exact price can still depend on the care assessment; the page can say so."],
          ["How should we reply to a review that mentions a resident?", "Without confirming that the person’s relative lives with you and without discussing care. Thank them, say you take the feedback seriously and invite them to call the executive director."],
          ["Do you write the content about care and dementia?", "I bring the search data, the page outline and a draft. Your director of nursing or wellness signs off every line about care, and the page shows who reviewed it and when. Medical advice stays out of it."],
          ["Can you work with a US senior living community from Poland?", "Yes. Everything is done online — site, profiles, local search data. Warsaw is usually six hours ahead of New York, so an East Coast morning call is my afternoon, and a West Coast morning is my evening. I invoice in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order senior living SEO: what to send me"),
        p(
          "Send the community or operator name, the website and Google Maps links, your levels of care and number of communities, the referral services you use now and the CRM where inquiries go. You get back a short list of first fixes and one fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
