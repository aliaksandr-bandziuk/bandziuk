// Landing page fixture: SEO for handyman services (EN), group «handyman-seo».
// NEW page — create-landing.cjs, root level like the other industry SEO pages.
//
// Why it exists (04.11.2026). Measured: «handyman seo» ~10 — the smallest in
// this batch, kept because the owner's rule is a floor of 5/month and below
// that do it anyway. The paired WEBSITE page exists: /handyman-website-design.
//
// SERP (checked 04.11.2026): ServiceTitan, Blue Corona, Gushwork, Shuffle
// Digital, Servgrow, Marketkeep, getjess, plus a Reddit thread. Agencies and
// field-service software vendors — strong competition for 10 searches a month,
// which is why this page is written for the long tail and for direct and AI
// arrivals rather than to win the head term.
//
// The angle, and it inverts the carpentry page published the same day: a
// carpenter wants more enquiries, a handyman usually has too many and they are
// too small. «Handyman near me» is the largest query in the trade and the
// worst one to win — it brings a thirty-minute drive for a forty-euro job. The
// work is therefore about raising average job value, not volume: pages for
// named jobs worth travelling for, a half-day booking that sells four tasks
// instead of one, a stated radius rather than «and surrounding areas», a
// published call-out minimum, the licensed-trade boundary written down, and
// landlords and letting agents treated as their own, recurring client.
import { p, h2, h3, li, link, k } from "./pt";

export const handymanSeoEn = {
  lang: "en",
  group: "handyman-seo",
  slug: "seo-for-handyman-services",
  title: "SEO for a Handyman Business",
  heading: "SEO for a handyman business: how to attract the jobs worth driving to instead of more small ones",
  excerpt:
    "A handyman rarely needs more enquiries. He needs fewer, larger, closer ones. «Handyman near me» is the biggest search in the trade and the least profitable to win, and most sites are built to win exactly that. Audit from €250.",
  seo: {
    metaTitle: "Handyman SEO — audit from €250",
    metaDescription:
      "SEO for a handyman business: pages for named jobs, half-day bookings, a stated radius and call-out minimum, landlords as repeat clients. Audit €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Larger jobs, shorter drives", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Pages for named jobs", "Half-day bookings, not single tasks", "Radius and minimum stated", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a handyman business: site, Google profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: pages per job, service radius, local profile, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a handyman business", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a handyman business actually consists of",
      items: [
        { _key: k("o"), iconName: "list-checks", title: "A page per job worth travelling for", text: "Not one page offering everything" },
        { _key: k("o"), iconName: "calendar", title: "Half-day and day bookings", text: "Four tasks in one visit, not one" },
        { _key: k("o"), iconName: "map-pin", title: "A radius you actually state", text: "Instead of «and surrounding areas»" },
        { _key: k("o"), iconName: "tag", title: "Call-out minimum and hourly rate", text: "Published, so the small jobs filter themselves" },
        { _key: k("o"), iconName: "shield-check", title: "What you are not licensed to do", text: "Written down, so nobody wastes a visit" },
        { _key: k("o"), iconName: "users", title: "Landlords and letting agents", text: "Their own page, and repeat work" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why more enquiries usually makes a handyman business worse"),
        p("Most trades come to me because the phone is not ringing. A handyman normally has the opposite problem: it rings constantly, with jobs that take forty minutes and sit on the other side of the city. The business is busy, the van is always moving, and the money at the end of the month does not reflect either, because half the working day was spent driving between jobs too small to carry the travel."),
        p("So the goal of this work is not volume. It is a higher average job value and a shorter average drive, and those two numbers are what I would look at before and after. That changes what gets built: not a site that ranks for the broadest possible term, but pages for the jobs you want, with the price floor and the radius stated plainly enough that the rest filter themselves out before they call."),

        h2("«Handyman near me» is the biggest search in the trade and the worst one to win"),
        p("It is the term every agency sells and every owner asks for, and it delivers precisely the job you should not take: someone two suburbs away who needs one shelf put up and is comparing you with a neighbour's teenager. Winning it fills the diary with work that loses money once the drive is counted."),
        p("The searches worth winning name the job. Mounting a television on a plasterboard wall, assembling flat-pack furniture for a whole flat, hanging internal doors, resealing a bathroom, clearing gutters, fitting blinds through a house, boxing in pipework, putting up shelving in an alcove. Each of those is a person who has already decided what they need, usually knows it is not a ten-minute job, and is comparing two or three tradesmen rather than five."),
        li("one page per job you want more of, named the way customers name it;"),
        li("say what the job typically involves and what it typically costs;"),
        li("say how long it takes, because that is what the customer is actually asking;"),
        li("show finished work for that specific job, not a general gallery;"),
        li("and leave out the jobs you take only to fill a gap — those pages bring more of them."),

        h3("Selling a half-day instead of a single task, which doubles the job value"),
        p("The most useful page a handyman can add is not about a job at all; it is about a block of time. Most households have a list — the door that sticks, two pictures to hang, a dripping tap, a curtain pole, a shelf — and they put off calling anyone because no single item feels worth a call-out. A page that sells a half-day or a full day, explains how many items typically fit into it, and tells them to send a photographed list converts that hesitation directly."),
        p("It also fixes the economics. One drive, one set-up, four hours billed, and a customer who now has a tradesman they will call twice a year. This is the single change I would make first on most handyman sites, and it requires no ranking improvement at all to pay for itself."),

        h3("State the radius, the minimum charge and what you are not licensed to do"),
        p("Three sentences remove most of the wasted phone calls. A radius in kilometres or a list of named districts, rather than a town plus «and surrounding areas». A call-out minimum and an hourly rate, so nobody rings about a job a third of the size. And a plain statement of the boundary — which gas, electrical or structural work you do not take on, and what you do take on, since in most markets that line is set by licensing rather than by preference."),
        p("The last of those does more than filter. A tradesman who writes down what he will not touch reads as someone who knows the rules, which is exactly the impression the customer with a larger budget is looking for. The opposite — a site promising that no job is too small or too large — reads as someone who will attempt either."),

        h2("Landlords, letting agents and property managers as a separate, repeating client"),
        p("One landlord with eight flats is worth more than forty households, and they search differently: they want response time, invoicing, whether you can be given keys, whether you work to a schedule of rates, and whether you can handle a changeover between tenancies in one visit. None of that is on a site written for homeowners, and a page that answers it reaches a client who calls every month rather than once."),
        p(
          "Where you want to be found by district, the groundwork is on the ",
          link("local SEO page", "/services/local-seo-services"),
          ". What the site itself should contain — job pages, a photographed-list enquiry form, a booking that takes a half-day — is on the ",
          link("handyman website design page", "/handyman-website-design"),
          ", and if you want to know what is wrong before committing to anything, that is the ",
          link("SEO audit", "/services/seo-audit"),
          ".",
        ),

        h2("The local pack and the Google profile, where a handyman is usually chosen"),
        p("Most of this trade is won in the map results, and three things decide them: the reviews, the photographs of finished work, and whether the services are listed the way customers search for them. A profile listing «handyman» and nothing else loses the search for television mounting to one that lists television mounting, and a profile with four photographs loses to one with thirty."),
        p("It is also the fastest-moving part of the work: the profile usually responds within weeks, while job pages take a couple of months to mature. For a business that needs better work this month rather than next quarter, that is where I would start."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: trade and local service businesses whose visibility I have run",
      subtitle:
        "What these share with a handyman business: the customer is local, the job is quoted on the phone, and the growth came from pages for specific services plus a strong local profile rather than bought links. A car service business, a landing page with editable SEO, a WordPress rebuild, a renovation and investment firm, and an education agency taken from one country to ten.",
      picks: [
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "seo-case-study-education-agency",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your handyman business",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Business name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What is the problem right now?", options: ["Jobs are too small", "Too much driving", "Not enough work at all", "Want landlord contracts"] },
        { _key: k("z"), question: "Do you publish a minimum charge?", options: ["No", "Hourly rate only", "Yes, a call-out minimum", "Day rate only"] },
        { _key: k("z"), question: "Where does work come from now?", options: ["Word of mouth", "A directory or lead site", "Google Maps", "Repeat customers"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a customer asks ChatGPT for a handyman (GEO, AEO)"),
        p("«Who can mount a television on a plasterboard wall near me this week, and roughly what does it cost» is a question people now put to an assistant instead of calling three numbers, and it suits this trade well, because the customer is asking about a specific job, a date and a price — all facts. The assistant answers from text it can read, so the same things decide whether a business is named: the jobs listed by name rather than hidden behind «all household repairs», a rate or minimum it can quote, a radius it can check against the customer's address, and the same name, phone number and hours across the site, the Google profile and the directories."),
        p(
          "Getting an existing site into a readable state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants describe the business wrongly — a district you no longer cover, work you have stopped taking, an old number — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for a handyman business: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a handyman business cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. For a one-van business the one-off work plus a properly built Google profile is usually the right size; a retainer makes sense once there are several vans or several districts to cover."],
          ["Can you get me ranked for «handyman near me»?", "I would rather not aim at it, and I will say why before you pay me anything. It is the largest search in the trade and it delivers the smallest jobs at the longest distances. The same effort spent on named jobs brings fewer calls that are worth more each."],
          ["Should I publish prices?", "A call-out minimum and an hourly or half-day rate, yes. It is the fastest way to stop fielding calls about jobs that cannot pay for the drive, and it gives search engines and AI assistants a figure to quote instead of one a directory invented."],
          ["What is the single change you would make first?", "A page that sells a half-day rather than a task, with an invitation to send a photographed list. Most households have five small jobs and call nobody because no single one feels worth it. That page turns five hesitations into one booking, and it works before any ranking changes."],
          ["Do I need a page for every job I do?", "For every job you want more of. Ten pages for the work that pays, not thirty covering everything you are capable of — pages for jobs you take reluctantly bring more of those jobs."],
          ["How do I get landlord and letting-agent work?", "A page written for them rather than for homeowners: response times, invoicing, key handling, schedule of rates, changeover work between tenancies. It is a different reader with a different list of worries, and one landlord with eight flats is worth more than forty one-off calls."],
          ["Do reviews matter more than the website?", "For this trade, often yes. Most customers decide in the map results, where reviews, photographs of finished work and correctly listed services do the work. The website then has to answer the price and radius questions without a phone call."],
          ["How long before it changes anything?", "The profile usually moves within weeks. Job pages take about a month and a half to show movement and three to six months to grow. The half-day booking page can change your average job value immediately, which is why I start there rather than with rankings."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a handyman business: what to send me"),
        p("Send the site, say which jobs you would take more of tomorrow and which you would rather stop taking, and tell me how far you are willing to drive. I reply within one working day with what is holding the site back, what your Google profile is missing, and what I would do first — and if the answer is that you need larger jobs rather than more of them, I will say so."),
      ],
    },
  ],
};
