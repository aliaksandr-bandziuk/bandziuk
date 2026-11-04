// Landing page fixture: SEO for daycares and nurseries (EN), group «daycare-seo».
// NEW page — create-landing.cjs, root level like the other industry SEO pages.
//
// Why it exists (04.11.2026). Measured: «daycare seo» 50. The paired WEBSITE
// page exists: /daycare-website-design.
//
// SERP (checked 04.11.2026): daycareseo.com, Wonderschool, RW Digital,
// Business Warriors, Procare Software, Playground («SEO & GEO for Daycare
// Providers»), Type A Media, Stratedia, DMB. Agencies and childcare-software
// vendors selling to the trade — so the searcher is the owner or director
// looking for a provider, not a parent.
//
// The angle, and it is unlike every other page in this batch: a nursery has
// FIXED CAPACITY and a seasonal intake. It does not want more traffic; it
// wants N children in one age band by September. That makes the honest version
// of this service narrower than any agency on that SERP will admit — a full
// nursery should pause the work, and the page says so. Supporting points:
// waiting lists convert the parent who is pregnant now; parents search an age
// band and a walking distance, not «daycare»; trust is checked off-site, so
// the register entry and inspection record belong on the page; and the words
// differ by country (daycare, nursery, crèche, preschool, kindergarten) while
// the age bands are legally defined differently in each.
//
// Content care: no developmental or medical claims anywhere on the page, and
// nothing about individual children's health.
import { p, h2, h3, li, link, k } from "./pt";

export const daycareSeoEn = {
  lang: "en",
  group: "daycare-seo",
  slug: "seo-for-daycares",
  title: "SEO for Daycares, Nurseries and Preschools",
  heading: "SEO for a daycare or nursery: how to fill the places you actually have free",
  excerpt:
    "A nursery does not need more traffic. It needs a set number of children in one age band by September, and a parent who can see from the site that a place exists. Audit from €250, and if you are full I will say so rather than sell you a campaign.",
  seo: {
    metaTitle: "Daycare SEO — audit from €250",
    metaDescription:
      "SEO for daycares, nurseries and preschools: availability by age group, waiting lists, local searches, the register and inspection record. Audit €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Places filled by age group", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Availability shown by age band", "Waiting list that collects names", "Fees and hours on the page", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a daycare or nursery: site, Google profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: age-group and area pages, availability, local profile", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a daycare or nursery group", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a daycare or nursery actually consists of",
      items: [
        { _key: k("o"), iconName: "users", title: "A page per age group you need to fill", text: "Infants, toddlers, preschool" },
        { _key: k("o"), iconName: "list-checks", title: "Availability stated and kept current", text: "Places free, places full, from when" },
        { _key: k("o"), iconName: "calendar", title: "A waiting list that collects names", text: "Parents enquire a year ahead" },
        { _key: k("o"), iconName: "map-pin", title: "The local pack and the walking radius", text: "Parents search by street, not by city" },
        { _key: k("o"), iconName: "shield-check", title: "Register entry and inspection record", text: "Trust is checked before anyone calls" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Nursery near me with a free toddler place in January»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why a nursery is the one business where more traffic is not the goal"),
        p("Almost every business I work with wants as many enquiries as it can handle. A nursery is the exception: the building holds a fixed number of children, the law sets how many of them can be in each age group, and the intake is seasonal. Success is not a larger number of visitors — it is four free places in the toddler group filled before September, and the parents of those four children living close enough to walk."),
        p("That changes what the work is for. The aim is to fill specific gaps, which means the site has to say which gaps exist, and it means the campaign has a natural end. If you are full across every group with a waiting list already, there is nothing for me to sell you that month, and I would rather say that than take a retainer for traffic you cannot use. What is worth doing in that situation is preparing for the next intake and keeping the waiting list growing."),

        h2("Parents search an age band and a walking distance, not «daycare»"),
        p("Nobody types the name of your category and reads a list. A parent types what they need in the words their country uses — daycare, nursery, crèche, preschool, kindergarten, or the local term — and attaches either their district, their street, their child's age, or the hours they need. The searches that end in an enrolment look like a nursery near a named street, a place for a two-year-old starting in January, somewhere open from seven, somewhere with hot meals included."),
        p("Each of those is a page or a clear section, and the words have to match the market rather than the brochure. This matters more in childcare than in most trades, because the age bands are legally defined differently from country to country, and a parent searching for care for a child under three is often looking for a different kind of institution than one searching for a preschool. A site that calls everything «our programme» answers neither."),
        li("a page or section per age group, with the hours and the ratio for that group;"),
        li("the area and the nearby streets named the way parents name them;"),
        li("the hours written as times, including the earliest drop-off and the latest pick-up;"),
        li("what the fee includes — meals, nappies, trips — and what costs extra;"),
        li("and the local term for your type of setting, not an internal label."),

        h3("Publishing availability, which almost no nursery does and every parent wants"),
        p("The single most useful sentence a nursery can put on its website is how many places are free, in which group, and from when. Parents are not browsing; they are trying to solve a date — a return to work, the end of parental leave, a move. A site that answers «two places in the toddler group from January, infant group full until September» converts the visit immediately, and a site that says only «contact us for availability» sends the parent to the next result."),
        p("The objection is that availability changes and the page would go stale. It does change, and keeping it current is a five-minute job that belongs to whoever answers the phone. A stale availability note is worse than none, so the honest version is a dated line — availability as of the first of the month — which is both true and far more useful than silence."),

        h3("Waiting lists are an asset, not an apology"),
        p("A full nursery usually treats being full as a reason to stop marketing, which gets it exactly backwards. The parent searching today for a place next autumn is the easiest enrolment you will ever make, and they are often pregnant or on leave, deciding a year out. A waiting-list page that explains how the list works, where it currently stands and what happens when a place comes up collects those parents instead of losing them to whoever had a free place this week."),
        p("It also protects the intake. A nursery with forty names on a list does not have to discount in August, and it can plan staffing on something firmer than hope."),

        h2("Trust is checked before a parent ever calls, so put the record on the page"),
        p("Childcare is the one service where the buyer verifies you before making contact. Parents look for the register entry, the inspection outcome, the staff qualifications, the ratios, the safeguarding policy and the insurance, and they look for them off your site as well as on it. A nursery that publishes its registration number, its most recent inspection result and its staff qualifications plainly is both easier to trust and easier to find, because those are pages with facts on them rather than adjectives."),
        p("One thing to keep off the site entirely: claims about what the setting will do to a child's development, reading age or future schooling. They cannot be substantiated, they read as sales copy to exactly the parent you want, and in several markets they attract regulatory attention. Describe the day, the staff, the room and the food, and let the parent draw the conclusion."),
        p(
          "Where you want to be found by district, the groundwork is on the ",
          link("local SEO page", "/services/local-seo-services"),
          ". What the site itself should contain — age-group pages, enrolment enquiries that capture the start date, photographs of the rooms — is on the ",
          link("daycare website design page", "/daycare-website-design"),
          ", and if you want to know what is wrong before committing to anything, that is the ",
          link("SEO audit", "/services/seo-audit"),
          ".",
        ),

        h2("The local pack and the Google profile, where most parents decide to call"),
        p("For a search made within walking distance, the map results are the whole shortlist: three settings, their ratings, their photographs, their hours. A nursery with current photographs of the rooms and the garden, correct hours including the weeks you close, and replies to reviews in the voice of the director will take calls from one that has none of these, whatever the quality of the care."),
        p("This is also the fastest-moving part of the work. The profile tends to respond within weeks, while age-group pages take longer to mature, which is why I usually start there when a setting has places to fill in the current term rather than the next one."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: local and education businesses whose visibility I have run",
      subtitle:
        "What these share with a nursery: the decision is local or family-made, trust is checked before anyone makes contact, and the growth came from pages for specific services plus a strong local profile rather than bought links. An education agency taken from one country to ten, a multilingual site for student services, a car service business, a landing page with editable SEO, and a renovation and investment firm.",
      picks: [
        "seo-case-study-education-agency",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "renovation-and-investment-website-with-premium-design",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your daycare or nursery",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Setting name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which places do you need to fill?", options: ["Infant group", "Toddler group", "Preschool group", "All of them"] },
        { _key: k("z"), question: "When do you need them filled?", options: ["This term", "Next September", "Rolling, all year", "We are full"] },
        { _key: k("z"), question: "Does the site show availability?", options: ["No", "Only «contact us»", "Yes, by group", "There is a waiting list"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a parent asks ChatGPT for a nursery (GEO, AEO)"),
        p("«Is there a nursery near me with a free place for a two-year-old in January, open from seven» is a question parents now put to an assistant instead of opening six tabs, and it suits this sector unusually well, because the parent is asking about availability, hours and age — all facts, all checkable. The assistant answers from text it can read, so the same things decide whether a setting is named: age groups and hours written as text, fees or a monthly figure it can quote, availability that is current, and the same name, address and hours across the site, the Google profile and the local directories."),
        p(
          "Getting an existing site into a readable state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants describe the setting wrongly — hours you changed, an age group you no longer take, a second location you closed — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for daycares and nurseries: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a nursery cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. For a single setting with places to fill, the one-off work plus a tidy Google profile is usually enough; an ongoing retainer makes sense for a group with several locations and a rolling intake."],
          ["We are full. Should we still do this?", "Not a monthly retainer, no. What is worth doing is the waiting-list page and the groundwork before your next intake, because the parent searching now for next September is the easiest enrolment you will make. I would rather tell you that than bill you for traffic you cannot use."],
          ["Should we really publish how many places are free?", "Yes, with a date on it. Parents are solving a start date, not browsing, and «two places in the toddler group from January» answers the visit outright. Keeping it current is a few minutes a month for whoever answers the phone, and a stale note is worse than none — which is why it carries the date."],
          ["Should fees be on the website?", "A monthly figure and what it includes. Parents compare before they call, a setting without a figure is skipped, and it also gives search engines and AI assistants a number to quote instead of one a directory guessed. If your fees depend on subsidies or hours, publish the common cases rather than a table nobody can read."],
          ["How important are reviews and photographs?", "For the map results, decisive — together with correct hours. Many parents never reach the website at all. Current photographs of the actual rooms and garden matter more than a stock image of children, and replies written by the director rather than an agency read as what they are."],
          ["Do we need a page for each age group?", "For each group you need to fill. A parent of a two-year-old and a parent of a four-year-old have different questions about hours, ratios, food and settling in, and one page about «our programme» answers neither."],
          ["How long before enrolments come in?", "First movement after about a month and a half, growth on a three to six month horizon. The map results usually move first. Enrolment is seasonal, though, so the work has to be timed to the intake: starting in June for September is late, and starting in January is not."],
          ["Who writes the pages?", "I draft and you correct, and in this sector the correcting matters more than usual: ratios, hours, what the fee covers, how settling in works and what the inspection said all have to be exactly right. I will not write anything about what the setting does for a child's development, because it cannot be substantiated."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a daycare or nursery: what to send me"),
        p("Send the site, say which age groups have places free and from when, and tell me which intake you are trying to fill. I reply within one working day with what is holding the site back, what your Google profile is missing, and what I would do first — and if you are full with a waiting list, I will say that the only work worth paying for is preparing the next intake."),
      ],
    },
  ],
};
