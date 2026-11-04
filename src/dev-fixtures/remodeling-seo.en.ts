// Landing page fixture: SEO for remodeling and renovation companies (EN),
// group «remodeling-seo». NEW page — create-landing.cjs, root level.
//
// Why it exists (04.11.2026). Measured: «remodeling seo» 220 — the largest
// remaining gap in the queue. There is NO paired website page in EN (only RU:
// /ru/sait-po-remontu-kvartir), so this page carries the industry alone.
//
// SERP (checked 04.11.2026): homeremodelerseo.com, Comrade, Builder Funnel,
// Plerdy, Outpace, BuildBook, Fat Cat Strategies, remodelingseo.com. All
// agencies selling to remodelers, uniform intent, no trap.
//
// CANNIBALISATION CHECK (this is why the page is shaped as it is). The site
// already has /seo-for-contractors, /seo-for-construction-companies,
// /seo-for-home-builders, /local-seo-for-contractors,
// /seo-for-painting-contractors and /seo-for-interior-designers. I read the
// first four: they are older-style pages whose H1 is the bare keyword and
// whose content is the generic contractor playbook — service pages, service-
// area pages, Google Maps, «job + problem + town» keywords. So this page must
// NOT repeat that, or it becomes a thin duplicate of four pages at once.
// It therefore opens by separating the four audiences (remodeling an occupied
// home vs new build vs commercial construction vs general trade) and links
// them, keeps the local-pack material to a short section pointing at
// /local-seo-for-contractors, and spends its length on what those pages do not
// cover:
//   1. publishing real project costs — «kitchen remodel cost» is the biggest
//      query in the trade and remodelers refuse to answer it, leaving it to
//      national estimator sites quoting averages that are not local;
//   2. the long comparison cycle — a five-figure job decided over months
//      against three quotes, so the site has to survive re-reading;
//   3. lead platforms reselling one enquiry to four firms, which is the
//      economic argument for owning the search;
//   4. duration and disruption, the second-biggest homeowner anxiety and
//      almost never written down.
//
// Portfolio: there IS a real case here — the renovation and investment firm
// (portfolio-orzel-realty), so it leads the picks.
import { p, h2, h3, li, link, k } from "./pt";

export const remodelingSeoEn = {
  lang: "en",
  group: "remodeling-seo",
  slug: "seo-for-remodeling-companies",
  title: "SEO for Remodeling and Renovation Companies",
  heading: "SEO for a remodeling company: how to win a job that a homeowner decides over three months and three quotes",
  excerpt:
    "A kitchen is a five-figure decision made slowly, against two other quotes, by someone who will read your site three times. The remodeler who publishes what his own projects actually cost beats the national estimator sites for his own city. Audit from €250.",
  seo: {
    metaTitle: "Remodeling SEO — audit from €250",
    metaDescription:
      "SEO for remodeling and renovation companies: project pages with real costs, duration and disruption, and search instead of resold leads. Audit €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Project pages with real costs", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Kitchen and bathroom cost pages", "Duration and disruption answered", "No per-lead fees to platforms", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a remodeling company: site, project pages, local profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: project and cost pages, service areas, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a remodeling or renovation company", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a remodeling company actually consists of",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page per project type and room", text: "Kitchens, bathrooms, lofts, extensions, whole-house" },
        { _key: k("o"), iconName: "credit-card", title: "Cost pages built from your own jobs", text: "Real ranges, your city, not national averages" },
        { _key: k("o"), iconName: "calendar", title: "Duration and disruption answered", text: "How long, and whether they can stay" },
        { _key: k("o"), iconName: "image", title: "Finished projects as pages, not a gallery", text: "Before, after, scope, cost, what changed" },
        { _key: k("o"), iconName: "trending-up", title: "Enquiries that do not cost per lead", text: "Instead of one enquiry sold to four firms" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Kitchen renovation in my city, rough cost, how long»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Which businesses this page is for, and where the neighbouring trades are covered"),
        p("This page is about renovating homes people already live in, sold to the homeowner: kitchens, bathrooms, loft and basement conversions, extensions, whole-house refurbishment. That client, that price and that decision process are specific enough to need their own approach, and different enough from the neighbouring trades to be worth separating before anything else."),
        p(
          "If you build new houses, the buyer and the cycle are different and that is ",
          link("SEO for home builders", "/seo-for-home-builders"),
          ". For commercial and structural work it is ",
          link("SEO for construction companies", "/seo-for-construction-companies"),
          ". For trade work across many job types it is ",
          link("SEO for contractors", "/seo-for-contractors"),
          ", and for design-led work without the building it is ",
          link("SEO for interior designers", "/seo-for-interior-designers"),
          ".",
        ),

        h2("Publishing what your projects actually cost, which is the biggest search in the trade"),
        p("The most searched question in remodeling is what it costs. A kitchen, a bathroom, a loft conversion, a square metre of refurbishment — these are typed hundreds of times a day in every city, and almost no remodeling company answers them. The field is left to national cost-estimator sites and lead platforms, which publish a country-wide average assembled from somebody else's jobs, and the homeowner reads a number that is wrong for their city, their building and their standard of finish."),
        p("A company that publishes real ranges from its own completed projects — in its own city, with the scope that produced each figure — outranks those sites for the local version of the question, because it is the only page on the subject that is actually about the place the searcher lives. It also does something more valuable than ranking: it ends the conversations with people whose budget is a third of the job, before the site visit, the measuring and the three days of quoting."),
        li("a range rather than a single figure, with what sits at each end of it;"),
        li("the scope that produced the number — what was included, what was not;"),
        li("your own finished jobs as the source, with the year, since prices move;"),
        li("what pushes a job to the top of the range: structural work, moving services, a difficult building;"),
        li("and the minimum project you take, which saves everybody the enquiry."),

        h3("Why «from €X» and «every project is unique» both lose the search"),
        p("Two habits keep remodelers off these pages. The first is a single «from» figure, which the homeowner correctly reads as the cheapest job you ever did and discounts entirely. The second is the sentence that every project is unique, which is true and answers nothing: the person asking knows their kitchen is not identical to the last one, and is asking for an order of magnitude so they can decide whether to keep reading."),
        p("The version that works gives three bands with what distinguishes them, and says plainly which band most of your work falls into. It takes an afternoon with your own invoices, and it is the highest-value page most remodeling companies do not have."),

        h2("A five-figure job is decided over months, so the site has to survive being re-read"),
        p("Remodeling has one of the longest decision cycles in local trade. The homeowner starts looking in January, gets three quotes in March, and signs in May, and in between they come back to each company's website several times — once to look at the work, once to show a partner, once to check something they half-remember. Most of this trade's SEO is sold as though the goal were a phone call on the first visit. The actual goal is to be the company that still looks like the right choice on the third visit, when they are comparing you with two others."),
        p("That shapes what the pages have to contain. Finished projects with the scope, the duration and the cost band rather than a carousel of photographs. The names of the people who would be in the house. What happens when something is found behind a wall. Who handles permits and building control. How payments are staged. None of this ranks on its own, and all of it decides the comparison that search produced."),

        h3("Answering how long it takes and whether they can live there"),
        p("After cost, the two questions are duration and disruption, and they are asked constantly: how long a kitchen takes, whether the family can stay in the house, whether there will be water, which weeks are the worst. Almost no remodeling site answers them, which is strange, because they are the cheapest pages to write — the answers are the same on every job — and they catch the homeowner at the exact moment they are deciding whether to do the work at all."),
        p("These pages also pre-empt the awkward part of the sale. A company that has already written down that the bathroom is unusable for nine days is not going to be accused of hiding it in week two."),

        h2("Owning the search instead of buying the same enquiry four times"),
        p("Most remodeling companies buy leads from a platform, where one homeowner's form is sold to three or four firms at once. You pay for the enquiry, you compete on price against two companies who paid for the same enquiry, and the homeowner — who never learned any of your names — picks on the cheapest quote. The margin for the whole arrangement comes out of the job."),
        p("Search works the other way round: the enquiry arrives with your name attached, having read your project pages and your cost bands, and usually without the other two quotes being in the same conversation. That is the economic case for this work, and it is also the honest limit of it: it takes months to build, it does not replace the platform in the first quarter, and anyone who tells you otherwise is selling you a campaign rather than a plan."),
        p(
          "Where you want to be found across several districts or towns, the groundwork is on ",
          link("local SEO for contractors", "/local-seo-for-contractors"),
          ", and if you want to know what is wrong before committing to anything, that is the ",
          link("SEO audit", "/services/seo-audit"),
          ".",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: a renovation firm and other local businesses whose visibility I have run",
      subtitle:
        "The first is a renovation and property-investment company — the closest case to a remodeling business, where the work was project pages and a site that holds up against comparison. The rest are local businesses needing the same thing: pages for specific services, a strong local profile, and growth without bought links.",
      picks: [
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
        "seo-case-study-education-agency",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your remodeling company",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What work do you want more of?", options: ["Kitchens", "Bathrooms", "Extensions and conversions", "Whole-house refurbishment"] },
        { _key: k("z"), question: "Where do enquiries come from now?", options: ["A lead platform", "Word of mouth", "Google Maps", "Search already works a little"] },
        { _key: k("z"), question: "Do you publish any costs?", options: ["Nothing", "A «from» price", "Ranges by project", "Only on request"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a homeowner asks ChatGPT about a renovation (GEO, AEO)"),
        p("«What does a kitchen renovation cost in my city, how long does it take, and who does it» is now one question put to an assistant rather than three searches, and remodeling suits it unusually well, because every part of the answer is a fact somebody has to have written down. The assistant answers from text it can read, so the same things decide whether a company is named: project types and cost bands written as text, durations stated, the area covered, and the same name, address and phone number across the site, the Google profile and the trade directories."),
        p(
          "Getting an existing site into a readable state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants describe the company wrongly — work you no longer take, towns you have dropped, an old price — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for remodeling companies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a remodeling company cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. What moves the number is how many project types need pages, how many towns you cover, and whether there are finished projects documented well enough to build pages from."],
          ["Should I really publish what my projects cost?", "Ranges, with the scope that produced them. It is the most searched question in the trade and you are currently leaving the answer to national estimator sites quoting averages from other countries. It also removes the enquiries from people whose budget is a third of the job, which is worth more than the ranking."],
          ["Won't publishing prices scare people off or help competitors?", "It will deter the people who were never going to sign, which is the point. Competitors can find your prices by asking for a quote in any case. What they cannot copy is the project pages the figures came from."],
          ["Can SEO replace the lead platforms?", "Over time, and not in the first quarter. The honest version is that search takes a few months to produce enquiries and then produces them without a per-lead fee and without three firms quoting the same job. Until then the platforms stay. Anyone promising to switch that off in six weeks is guessing."],
          ["How long before enquiries arrive?", "First movement after about a month and a half, growth on a three to six month horizon. Then add this trade's own delay: the homeowner who finds you in March may sign in June. The first results that look like anything are usually cost-page visits and saved pages rather than calls."],
          ["Do I need a page for every project type?", "For every type you want more of. Kitchens, bathrooms, loft conversions and extensions are four different budgets and four different anxieties, and one page about renovation answers none of them properly."],
          ["Is the Google profile as important as for smaller trades?", "It matters, and less than it does for an emergency plumber. Remodeling clients compare over weeks and end up on the website, so the profile earns the first visit while the project and cost pages win the comparison. Both get attention, in that order."],
          ["Who writes the project pages?", "I draft them from what you give me — scope, duration, cost band, what was found behind the wall — and you correct them. The detail that makes these pages convert is the part only the company that did the job knows, and a homeowner reading them can tell whether a builder or a copywriter supplied it."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a remodeling company: what to send me"),
        p("Send the site, say which project types you want more of, and tell me whether you are currently paying a platform per lead. I reply within one working day with what is holding the site back, which cost and duration pages are missing, and what I would do first — including an estimate of how long it would take before search replaces any part of what you are paying per enquiry now."),
      ],
    },
  ],
};
