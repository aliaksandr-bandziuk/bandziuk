// Page rebuild: /pricing (EN). Replaces the contentBlocks of the existing
// Sanity document; title, slug and SEO fields are left alone. Applied with
// scripts/rebuild-page.cjs. Lives in pages/ because a pricing page is not a
// landing and check-fixture-rules.cjs would judge it by landing rules.
//
// Second rebuild (22.11.2026). The first one replaced bullet stacks with
// price cards and tables. This one adds the picker and reorders the page
// around it, because the three things sold here — ongoing SEO, visibility in
// AI search, a website — are three different purchases and the page read as
// one long mixed list.
//
// The two offerListBlocks that used to open the SEO and the website halves
// are gone: their figures now sit in the picker's option cards and their
// comparison in the tables below, and printing the same numbers three times
// made the page longer without making it clearer.
//
// Banding alternates deliberately: picker g, text b, table g, text b, table g,
// text b, table g, grid b (forced), cta g, text b, features g, text b, text b,
// table g, faq b, form g (forced). Long runs of one background were what made
// the old page read as a wall.
//
// Every figure already appears elsewhere on the site: audit from €250,
// one-time work €250-700, ongoing from €800/mo, competitive from €1,300/mo,
// full management €3,000/mo, business and lead-generation sites from €2,000,
// redesign from €1,000, simple landing €700-1,400, conversion landing from
// €2,000, AI visibility audit from €250, AI brand monitoring from €250/mo,
// preparing a site for AI search from €800, correcting wrong information in
// AI answers from €800.
import { p, h2, h3, li, link, k } from "../pt";

export const pricingEn = {
  lang: "en",
  slug: "pricing",
  excerpt:
    "Websites from €2,000, SEO from €800 a month, an audit from €250. Below: what sits behind each figure, what moves it up or down, and who each level fits — including who it does not, so you can work out before we speak whether this is worth your money.",
  contentBlocks: [
    {
      // The picker renders all three tracks and all eleven option cards on the
      // server; the browser only decides which are on screen. Each track id is
      // also its URL fragment, so /pricing#ai-search opens that tab.
      _type: "pricePickerBlock",
      _key: k("b"),
      eyebrow: "Work out your price",
      title: "SEO, AI visibility and website pricing: work out which option is yours",
      intro:
        "Three different purchases with three different sets of questions. Pick the one you came for — each tab has its own link you can share.",
      coversLabel: "Included at this price",
      movesLabel: "Factors that move your figure",
      noPushText: "Nothing in your answers pushes the figure above the starting point.",
      ctaLabel: "Send this as my enquiry",
      ctaHref: "#quote",
      disclaimer:
        "An estimate, not a quote: the figure for your project is fixed in writing after a short conversation, and the free consultation can end with “an audit is enough, a monthly agreement is not justified”.",
      tracks: [
        {
          _key: k("tr"),
          id: "seo",
          label: "Ongoing SEO",
          heading: "SEO pricing: work out your level from competition, reach and site",
          lead: "Three questions about your market. SEO is monthly, with a minimum term, and the audit is the way in.",
          linkLabel: "Ongoing SEO: full service page",
          linkHref: "/services/seo-optimization-and-strategy",
          options: [
            {
              _key: k("o"),
              id: "audit",
              name: "SEO audit first",
              price: "from €250",
              term: "one-off",
              includes: [
                "what is reachable and what is not, in writing",
                "the source of every problem traced",
                "a plan you can run yourself",
              ],
            },
            {
              _key: k("o"),
              id: "ongoing",
              name: "SEO for service businesses",
              price: "from €800 / month",
              term: "minimum 3–6 months",
              includes: [
                "audit, technical work, keywords, structure",
                "visibility in ChatGPT and AI answers",
                "monthly report in enquiries, not positions",
              ],
            },
            {
              _key: k("o"),
              id: "hard",
              name: "SEO in competitive industries",
              price: "from €1,300 / month",
              term: "minimum 6 months",
              includes: [
                "deeper technical work and content strategy",
                "authority work, with no bought links",
                "monthly report in enquiries, not positions",
              ],
            },
            {
              _key: k("o"),
              id: "sitefirst",
              name: "A website first",
              price: "from €2,000",
              term: "2–4 weeks",
              includes: [
                "built SEO-ready, so the first months are not spent on repairs",
                "a page per service from the start",
                "structured data and AI-readable facts",
              ],
            },
          ],
          questions: [
            {
              _key: k("q"),
              id: "market",
              label: "Competition in your niche",
              choices: [
                { _key: k("c"), label: "Quiet", picks: ["ongoing"] },
                { _key: k("c"), label: "Crowded", picks: ["hard"], push: "A crowded niche: the upper part of the range, and a longer minimum term." },
                { _key: k("c"), label: "Not sure", picks: ["audit"], push: "Not sure how contested it is: that is exactly what the audit answers, before any monthly commitment." },
              ],
            },
            {
              _key: k("q"),
              id: "reach",
              label: "Where your clients are",
              choices: [
                { _key: k("c"), label: "One city", picks: [], push: "One city: the Google profile and district pages do much of the work." },
                { _key: k("c"), label: "One country", picks: [] },
                { _key: k("c"), label: "Several countries", picks: [], push: "Several countries: separate language versions, measured separately." },
              ],
            },
            {
              _key: k("q"),
              id: "site",
              label: "The site SEO would work on",
              choices: [
                { _key: k("c"), label: "Exists and is fine", picks: [] },
                { _key: k("c"), label: "Exists but is weak", picks: [], push: "A weak site: part of the first months goes into technical work before content." },
                { _key: k("c"), label: "No site yet", picks: ["sitefirst"], push: "No site yet: building it SEO-ready costs less than fixing it afterwards." },
              ],
            },
          ],
        },
        {
          _key: k("tr"),
          id: "ai-search",
          label: "Visibility in AI search",
          heading: "AI visibility pricing: work out the job from what assistants say now",
          lead:
            "Three questions about what ChatGPT, Google’s AI answers, Perplexity, Gemini and Claude say about you today. These are four separate jobs, not one package, because they are genuinely different work.",
          linkLabel: "Visibility in AI search: full service page",
          linkHref: "/services/ai-ready-seo-and-geo-optimization",
          options: [
            {
              _key: k("o"),
              id: "aiaudit",
              name: "AI visibility audit",
              price: "from €250",
              term: "one-off",
              includes: [
                "a fixed prompt set across ChatGPT, Google AI Overviews, Perplexity, Gemini and Claude",
                "every wrong claim traced back to the page that produced it",
                "what can be corrected separated from what cannot",
              ],
            },
            {
              _key: k("o"),
              id: "aiready",
              name: "Preparing a site for AI search",
              price: "from €800",
              term: "one-off project",
              includes: [
                "services, area, prices and hours stated as quotable text",
                "structured data an assistant can read",
                "the same company details everywhere they appear",
              ],
            },
            {
              _key: k("o"),
              id: "aifix",
              name: "Correcting wrong information in AI answers",
              price: "from €800",
              term: "one-off project",
              includes: [
                "the source of each wrong claim found, not guessed",
                "your pages, profiles and directory entries corrected",
                "re-crawl requested, then the same prompts re-run",
              ],
            },
            {
              _key: k("o"),
              id: "aimonitor",
              name: "AI brand monitoring",
              price: "from €250 / month",
              term: "minimum 3 months",
              includes: [
                "the frozen prompt set re-run every month",
                "presence rate, errors found and sources cited",
                "assistant referral traffic reported separately",
              ],
            },
          ],
          questions: [
            {
              _key: k("q"),
              id: "say",
              label: "What assistants say today",
              choices: [
                { _key: k("c"), label: "They do not name us", picks: ["aiready"], push: "Not named at all: the problem is visibility, and the work is making the facts quotable." },
                { _key: k("c"), label: "They name us wrongly", picks: ["aifix"], push: "Named wrongly: the claim comes from a source that has to be found before it can be corrected." },
                { _key: k("c"), label: "We have never checked", picks: ["aiaudit"], push: "Never checked: one answer is an impression, a fixed prompt set is evidence." },
              ],
            },
            {
              _key: k("q"),
              id: "track",
              label: "Do you need it watched over time",
              choices: [
                { _key: k("c"), label: "A one-off answer is enough", picks: [] },
                { _key: k("c"), label: "Yes, month to month", picks: ["aimonitor"], push: "Monthly tracking: the same frozen prompt set re-run, so this month compares with last." },
              ],
            },
            {
              _key: k("q"),
              id: "langs",
              label: "Languages and markets",
              choices: [
                { _key: k("c"), label: "One", picks: [] },
                { _key: k("c"), label: "Two or three", picks: [], push: "Several languages: a company is often described correctly in one and wrongly in another, so each is run separately." },
                { _key: k("c"), label: "More than three", picks: [], push: "Many markets: the prompt set and the logging grow with them, and so does the figure." },
              ],
            },
          ],
        },
        {
          _key: k("tr"),
          id: "website",
          label: "Building a website",
          heading: "Website pricing: work out the build from scope, languages and starting point",
          lead: "Three questions about the site itself. The build is priced once; nothing here is monthly.",
          linkLabel: "Website development: full service page",
          linkHref: "/services/website-development",
          options: [
            {
              _key: k("o"),
              id: "business",
              name: "Business website",
              price: "from €2,000",
              term: "2–4 weeks",
              includes: [
                "a page per service, written the way buyers ask",
                "design included, not a separate invoice",
                "structured data and AI-readable facts from day one",
              ],
            },
            {
              _key: k("o"),
              id: "redesign",
              name: "Website redesign",
              price: "from €1,000",
              term: "by scope",
              includes: [
                "the look changes, the addresses and the rankings stay",
                "structured data and speed brought up to date",
                "the pages that already earn are kept",
              ],
            },
            {
              _key: k("o"),
              id: "landing",
              name: "Landing page",
              price: "€700–1,400",
              term: "1–3 weeks",
              includes: [
                "one service or one campaign",
                "custom layout, fast on a phone",
                "contact form and analytics in place",
              ],
            },
          ],
          questions: [
            {
              _key: k("q"),
              id: "state",
              label: "The site today",
              choices: [
                { _key: k("c"), label: "Does not exist yet", picks: ["business"], push: "Nothing exists yet: structure and text are written from scratch — work, but no migration risk." },
                { _key: k("c"), label: "Exists, outdated", picks: ["redesign"], push: "An existing site: migration, and keeping the addresses that already rank." },
                { _key: k("c"), label: "Exists and works", picks: ["landing"], push: "A working site: the new page plugs into it rather than replacing it." },
              ],
            },
            {
              _key: k("q"),
              id: "scope",
              label: "How much it has to cover",
              choices: [
                { _key: k("c"), label: "One service or offer", picks: [], push: "One offer: a single page does the job and the build is short." },
                { _key: k("c"), label: "A few services", picks: [] },
                { _key: k("c"), label: "Many services or markets", picks: [], push: "Many services: more pages, more structured data, more internal linking." },
              ],
            },
            {
              _key: k("q"),
              id: "lang",
              label: "Languages on the site",
              choices: [
                { _key: k("c"), label: "One", picks: [] },
                { _key: k("c"), label: "Two", picks: [], push: "A second language: the layout is built once, the content is written twice." },
                { _key: k("c"), label: "Three or more", picks: [], push: "Three or more languages: hreflang, separate measurement and content per market." },
              ],
            },
          ],
        },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      eyebrow: "SEO",
      compact: true,
      content: [
        h2("SEO pricing explained: what you pay for at each level"),
        p("SEO is a process rather than a purchase, so the figures are monthly except where they say one-off. What separates the levels is not the length of the contract but how much work the market in front of you demands: the same site in a quiet niche and in a contested one needs a different amount of technical work, content and time before anything moves."),
        p("An audit comes first in almost every case. It costs from €250, it answers what is actually reachable, and it is a complete deliverable — several clients have taken the report and implemented it themselves without hiring anyone. The monthly levels start after that, when it is clear what the work would be."),
        h3("SEO levels compared: price, minimum term and who each one fits"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Level", "Price", "Minimum term", "Best for"],
      rows: [
        ["SEO audit", "from €250", "one-off", "understanding what is wrong before committing to anything"],
        ["One-time SEO work", "€250–700", "one-off", "a defined job: visibility analysis, consultation, an action plan"],
        ["SEO for service businesses", "from €800 / month", "3–6 months", "service, local and niche companies that need enquiries"],
        ["SEO in competitive industries", "from €1,300 / month", "6 months", "contested markets, heavier technical and content work"],
        ["Full project management", "€3,000 / month", "by agreement", "one specialist owning strategy, content, code and coordination"],
      ].map((cells) => ({ _key: k("t"), _type: "tableRow", cells })),
    },
    {
      _type: "textContent",
      _key: k("b"),
      eyebrow: "Websites",
      compact: true,
      content: [
        h2("Website pricing explained: what changes the figure"),
        p("A website's price depends far less on how it looks than on what it has to do. The same design costs the same to draw whether it ends up with four pages or forty; the work is in the structure underneath, the integrations and the content that has to be written before any of it can be built."),
        p("Design is never a separate line on my quotes. I do not sell drawings I am not going to build, because a design nobody can build is where projects lose their budget."),
        h3("Website types compared: price, timeline and when each makes sense"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Type", "Price", "Timeline", "When it makes sense"],
      rows: [
        ["Business website", "from €2,000", "2–4 weeks", "small and medium businesses that need a professional presence"],
        ["Lead-generation website", "from €2,000", "3–6 weeks", "conversion-oriented structure, written content, integrations"],
        ["Website redesign", "from €1,000", "by scope", "the site brings no enquiries, or was built years ago"],
        ["Simple landing page", "€700–1,400", "1–3 weeks", "one service, an ads campaign, testing a new offer"],
        ["Conversion landing with SEO, AEO and GEO", "from €2,000", "2–3 weeks", "structured data, AI-search readiness, Core Web Vitals"],
      ].map((cells) => ({ _key: k("t"), _type: "tableRow", cells })),
    },
    {
      _type: "textContent",
      _key: k("b"),
      eyebrow: "AI search",
      compact: true,
      content: [
        h2("AI search pricing: what GEO and AEO work costs"),
        p("Being named by ChatGPT, Perplexity, Gemini and Google's AI answers is not the same job as ranking in Google, and it is not one service either. Making a site legible to an assistant, measuring what assistants say today, correcting what they say wrongly and watching it month to month are four different pieces of work with four different prices."),
        p("Part of it is already inside ongoing SEO and costs nothing extra: the facts an assistant needs — services, area, prices, hours — stated as text, structured data on every page, and the same company details everywhere. What sits outside the monthly SEO fee is measurement across platforms and languages, correcting claims whose source is not your site, and monitoring over time."),
        h3("AI search services compared: price, term and when each is the right one"),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["Service", "Price", "Term", "When it is the right one"],
      rows: [
        ["AI visibility audit", "from €250", "one-off", "you do not know what assistants say about you, and want it measured before spending"],
        ["AI brand monitoring", "from €250 / month", "minimum 3 months", "the baseline exists and you want to see it move, platform by platform"],
        ["Preparing a site for AI search", "from €800", "one-off project", "assistants do not name you at all, because nothing on the site is quotable"],
        ["Correcting wrong information in AI answers", "from €800", "one-off project", "assistants name you and get the facts wrong"],
      ].map((cells) => ({ _key: k("t"), _type: "tableRow", cells })),
    },
    {
      // Forced onto the page background: the table above and the CTA band
      // below are both banded, and three grey sections in a row was the
      // complaint that started this rebuild.
      _type: "gridBlock",
      _key: k("b"),
      banded: false,
      eyebrow: "Short answers",
      align: "left",
      variant: "answers",
      title: "How much a website, SEO and an audit cost: short answers",
      items: [
        {
          _key: k("g"),
          iconName: "globe",
          title: "How much does a website cost",
          description: "From €2,000 for a business website, built in two to four weeks. A landing page is €700–1,400 and a redesign from €1,000, with design included in every figure rather than invoiced separately.",
          linkLabel: "What a small business website costs",
          linkDestination: "/blog/small-business-website-cost",
        },
        {
          _key: k("g"),
          iconName: "search",
          title: "How much does SEO cost per month",
          description: "From €800 a month for a service business, from €1,300 in a competitive industry and €3,000 when one specialist runs the whole channel. The minimum term is three to six months.",
          linkLabel: "What ongoing SEO covers",
          linkDestination: "/services/seo-optimization-and-strategy",
        },
        {
          _key: k("g"),
          iconName: "file-text",
          title: "How much does an SEO audit cost",
          description: "From €250, paid once. A complete document with priorities that you can implement yourself or hand to another contractor — including when its conclusion is that nothing more needs buying.",
          linkLabel: "What the SEO audit includes",
          linkDestination: "/services/seo-audit",
        },
        {
          _key: k("g"),
          iconName: "layers",
          title: "How much does a website redesign cost",
          description: "From €1,000. The look changes while the addresses, the structured data and the pages that already earn are kept, so the rankings survive the move instead of starting again.",
          linkLabel: "How a redesign keeps rankings",
          linkDestination: "/services/website-redesign-services",
        },
        {
          _key: k("g"),
          iconName: "shield-check",
          title: "How much does SEO cost for a law firm",
          description: "From €800 a month for a local practice and from €1,300 for corporate, immigration and cross-border work, where the competition is heaviest and the technical load is higher.",
          linkLabel: "How much SEO for law firms costs",
          linkDestination: "/blog/how-much-legal-seo-costs",
        },
        {
          _key: k("g"),
          iconName: "languages",
          title: "How much does a multilingual website cost",
          description: "From the same €2,000 as a single-language site. Each further language adds content work rather than multiplying the price, because the layout and the structure are built once.",
          linkLabel: "What a multilingual website costs",
          linkDestination: "/blog/multilingual-website-cost",
        },
        {
          _key: k("g"),
          iconName: "map-pin",
          title: "How much does a website cost in Cyprus",
          description: "From €2,000, the same as anywhere else I work, because the work is identical and done remotely. Local studios quote both below and well above that.",
          linkLabel: "Website development cost in Cyprus",
          linkDestination: "/blog/website-development-cost-in-cyprus",
        },
        {
          _key: k("g"),
          iconName: "users",
          title: "A freelancer or an agency: what the difference costs",
          description: "One specialist costs less for the same work — no account manager, no status meeting, no hand-over between people — and takes on fewer projects at once, which is the trade.",
          linkLabel: "Freelancer or agency compared",
          linkDestination: "/blog/freelancer-vs-agency-web-development",
        },
      ],
    },
    { _type: "landingCtaBlock", _key: k("b") },
    {
      _type: "textContent",
      _key: k("b"),
      eyebrow: "What moves the figure",
      compact: true,
      paddingVertical: "none",
      content: [
        h2("Five factors that decide the price of SEO and a website"),
        p("Every quote is built from the same five questions, and you can answer most of them yourself before we speak. Each one moves the figure in a way you can see:"),
      ],
    },
    {
      // Numbered rows rather than the five centred icon cards the page used
      // to carry: at five across, each card gave the text a column three
      // words wide.
      _type: "gridBlock",
      _key: k("b"),
      banded: false,
      tightTop: true,
      align: "left",
      variant: "numbered",
      items: [
        { _key: k("g"), title: "Scope of work", description: "Technical SEO, content, structure and conversion work are separate jobs. The broader the scope, the higher the cost and the higher the potential return." },
        { _key: k("g"), title: "Business goal", description: "Visibility is a different brief from lead generation, and lead generation is different again from long-term growth." },
        { _key: k("g"), title: "Website condition", description: "A new site, an outdated one and a project with years of technical debt each need a different amount of effort." },
        { _key: k("g"), title: "Industry competition", description: "The more contested your niche in Google, the more time and resources a stable result takes." },
        { _key: k("g"), title: "Technical complexity", description: "Custom features, CMS limits, API integrations and anything non-standard all move the figure." },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      banded: false,
      tightTop: true,
      compact: true,
      paddingVertical: "none",
      content: [
        p(
          "If you would rather not work out which of these applies to you, the ",
          link("free consultation", "/contacts"),
          " is fifteen to thirty minutes and ends with a specific answer — including the answer that an audit is enough and a monthly agreement is not justified.",
        ),
      ],
    },
    {
      // Heading only: the two columns below carry the text, as two cards.
      _type: "textContent",
      _key: k("b"),
      banded: true,
      eyebrow: "Before you ask",
      compact: true,
      paddingVertical: "none",
      content: [h2("Payment terms and what you pay separately")],
    },
    {
      _type: "doubleTextBlock",
      _key: k("b"),
      banded: true,
      tightTop: true,
      variant: "cards",
      isDivider: false,
      verticalAlign: "top",
      leftContent: {
        type: "text",
        blockContent: {
          _key: k("bc"),
          _type: "blockContentWithStyle",
          content: [
            h3("Payment, currency and the contract"),
            p("The figures on this page are in euro and are the final price for the client: nothing is added on top of them at invoicing. Companies in Poland are invoiced in złoty at the prices on the Polish version of this page, and clients elsewhere in the EU pay in euro. Invoices come from a sole proprietorship registered in Warsaw, Poland."),
            p("Projects are paid in stages agreed in writing before the work starts; monthly services are invoiced monthly. The contract can be monthly, per project or open-ended — whichever suits the work — and support after launch can be included for one to six months by agreement."),
          ],
        },
      },
      rightContent: {
        type: "text",
        blockContent: {
          _key: k("bc"),
          _type: "blockContentWithStyle",
          content: [
            h3("Costs paid to someone else, never marked up"),
            p("These are paid directly by you, at whatever they cost, and never invoiced through me:"),
            li("advertising budget in Google Ads or Meta, if you decide to run ads;"),
            li("hosting and the domain, which stay in your own accounts;"),
            li("paid stock photography, fonts and any licensed third-party tool;"),
            li("translation into languages I do not work in — I handle English, Polish and Russian myself and set up the rest technically."),
          ],
        },
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      banded: true,
      tightTop: true,
      compact: true,
      content: [
        p(
          "If you want to see the work behind the figures before deciding, the ",
          link("portfolio", "/portfolio"),
          " has the projects in full, and the service pages cover ",
          link("ongoing SEO", "/services/seo-optimization-and-strategy"),
          ", ",
          link("website redesign", "/services/website-redesign-services"),
          ", ",
          link("maintenance after launch", "/services/website-maintenance-services"),
          " and the ",
          link("AI visibility audit", "/services/ai-visibility-audit"),
          ".",
        ),
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      eyebrow: "A filter, not a pitch",
      compact: true,
      content: [
        h2("Who this offer fits and who it does not"),
        p("Both columns are worth reading. Turning down work that will not succeed is cheaper for both sides than starting it."),
      ],
    },
    {
      _type: "tableBlock",
      _key: k("b"),
      columns: ["This is a good fit if", "This is not a good fit if"],
      rows: [
        ["you run a small or medium-sized business", "you are looking for the cheapest option available"],
        ["you care about enquiries and sales rather than vanity metrics", "you do not have time to engage and make decisions"],
        ["you want to understand what is being done and why", "the project has no clear business goal yet"],
      ].map((cells) => ({ _key: k("t"), _type: "tableRow", cells })),
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      pretitle: "FAQ",
      compact: true,
      title: "Prices and terms: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Can I start with just an audit?", "Yes, and it is what I recommend in most cases. The audit costs from €250, it is a complete deliverable with priorities, and you are free to implement it yourself or with another contractor."],
          ["Are the prices fixed?", "They are starting points, not a price list. The figure for your project is fixed in writing before the work starts, and one-off jobs are quoted the same way."],
          ["How much does an SEO audit cost?", "From €250, paid once. It is a complete document with priorities, and you can implement it yourself or hand it to another contractor — including when its conclusion is that nothing further needs buying."],
          ["Can I order a website without SEO?", "Yes. Basic technical and SEO preparation is part of every build — structure, speed, readiness to be indexed — and ongoing SEO is a separate, deeper service on top of a finished site."],
          ["How long until SEO results appear?", "Technical fixes and the Google profile show within weeks. New pages in popular niches usually take several months, and narrower phrases often less. After the first cycle it is visible whether any indicator moved, and if none did I say so."],
          ["What are the payment terms?", "Monthly, per project or open-ended, whichever suits the work — we agree it before starting. Support after launch can be included for one to six months by agreement."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      // Forced onto the band so the page does not end on two black sections.
      _type: "quoteFormBlock",
      _key: k("b"),
      banded: true,
      title: "A price for your project",
      subtitle: "Describe the business and the site in a few lines. I reply within one business day with what I would do first and what it costs.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and ask for a quote",
      note: "Or write on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you need first?", options: ["A website", "SEO for an existing site", "Both", "Not sure yet"] },
        { _key: k("z"), question: "Does the site exist today?", options: ["Yes, and it works", "Yes, but it is old", "No, starting from scratch", "It is being built now"] },
      ],
    },
  ],
};
