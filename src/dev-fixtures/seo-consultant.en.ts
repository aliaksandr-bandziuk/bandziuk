// Landing page fixture: SEO consultant (EN), group «seo-consultant», nested
// under /services. Photo hero (owner's portrait), like ai-seo-consultant.
// Semantic core: ref/general-services.md (all locations): seo consultant 8,100
// (+ consultant seo, seo optimization consultant 8,100), seo services
// consultant 3,600, seo consultant services 2,900, local seo consultant 2,900,
// freelance seo consultant 1,300 (+ seo consultant freelance / freelancer
// 1,000), seo consultant near me 1,300, hire an seo consultant 260, seo
// consultant agency 210, what is an seo consultant 210, wordpress seo
// consultant 170. City tails (Toronto, Sydney, Colorado Springs…) ignored.
// PAA: Is SEO dead or evolving in 2026? Can ChatGPT do SEO? (→ AI H2 + FAQ).
// Intent: ref/intent-check-general-services.md — «seo consultant» vs «ai seo
// consultant» 1/10 shared URLs, vs «seo services» 0/10 → own page. SERP =
// personal consultant sites, Upwork, agencies: intent «hire a person».
// NOT on this page: AI-answer visibility as the main job
// (/services/ai-seo-consultant, linked once); the full SEO service list
// (/services/seo-optimization-and-strategy, linked); audit detail
// (/services/seo-audit); Google Business Profile work in depth
// (/services/local-seo-services); site builds (/services/wordpress-development-services).
// Facts: since 2010 (copywriter → SEO → development), EN/PL/RU, clients in
// Europe, the UK, the US, Cyprus, Israel; 141-answer study; ScanM2 29×; Giuseppe
// found the owner through ChatGPT. No hourly rate, no guaranteed rankings.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const seoConsultantEn = {
  lang: "en",
  group: "seo-consultant",
  slug: "seo-consultant",
  parentPath: ["services"],
  pageType: "service",
  title: "SEO consultant",
  heading: "SEO Consultant: One Independent Expert from Audit to Measured Results",
  excerpt:
    "I am an independent SEO consultant: I audit your website, fix what holds it back in Google directly in the code and report the result in traffic and enquiries — one person, working remotely from Warsaw.",
  seo: {
    metaTitle: "SEO Consultant Services: Freelance and Local | Bandziuk",
    metaDescription:
      "Independent SEO consultant: one person audits your site, fixes it in the code and reports leads, not just rankings. CET hours, EUR invoices. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Audit, fixes and reports by one person", "CET hours, invoices in EUR", "Free 15–30 min call"],
  // Desktop hero shows the owner's portrait instead of the phone sketch (the
  // same transparent-background photo as on the About page).
  heroVisual: "photo",
  heroPhoto: { _type: "image", asset: { _type: "reference", _ref: "image-f672c00fe2c4d1b2e6dfd5f64d9b65c50f20a3d1-446x559-png" }, alt: "Aliaksandr Bandziuk, independent SEO consultant" },
  offers: [
    { _key: "offer1", _type: "offer", name: "Website SEO audit by an independent SEO consultant", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Monthly SEO consultant services with implementation", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "SEO consultant services",
      title: "What you get when you hire an SEO consultant",
      items: [
        { _key: k("o"), iconName: "search", title: "An audit with clear priorities", text: "What holds the site back in Google, ranked by impact" },
        { _key: k("o"), iconName: "code", title: "Fixes shipped by the auditor", text: "Templates, redirects, schema and links changed in the code" },
        { _key: k("o"), iconName: "layers", title: "A page plan built on real searches", text: "Which pages to create, merge or rewrite" },
        { _key: k("o"), iconName: "map-pin", title: "Local SEO when you serve an area", text: "Google Business Profile and map pack basics" },
        { _key: k("o"), iconName: "message-circle", title: "A second opinion for your team", text: "A review of agency plans or in-house work" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in leads, not only rankings", text: "Search Console and analytics, month against month" },
      ],
      prices: [
        { _key: k("r"), label: "SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO consulting and implementation", value: "from 800 € / month", note: "Google + AI answers", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO consultant portfolio: websites I audited, fixed and measured",
      subtitle:
        "On each of these sites I was the person responsible for SEO, from the audit to the report: a 3D scanning company whose organic traffic grew 29 times, an education agency reworked from one country to ten, a Cyprus real estate platform I run monthly SEO for, and a Milan psychotherapist who found me through ChatGPT.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "psychotherapist-website-milan",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote from an SEO consultant",
      subtitle: "Tell me about your website and I will reply within one business day with what I would look at first. The first 15–30 minute call costs nothing.",
      contextLabel: "Your website",
      contextPlaceholder: "https://…",
      buttonText: "Send and get a reply",
      note: "Prefer messaging? WhatsApp works too, with the same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What kind of SEO help are you looking for?", options: ["A one-off audit", "Monthly SEO work", "A second opinion", "Local SEO"] },
        { _key: k("z"), question: "Where are your customers?", options: ["One city or region", "One country", "Several countries", "Online, worldwide"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I am an SEO consultant: an independent specialist who finds out why a website gets less search traffic than it should, fixes the causes in the site itself and measures what changed. I work alone and remotely from Warsaw, for businesses in Europe, the UK, the US, Cyprus and Israel — so the person who reviews your site is the same person who edits its templates and sends you the report."),

        h2("What an SEO consultant does: audit, fixes in the code, measurement"),
        p("SEO consultant services are often sold as advice. Advice alone rarely moves a site, because the recommendations wait in someone’s backlog for months. My work has three stages, and I do all three:"),
        li("Audit. I crawl the site, read Search Console and analytics, compare your pages with the ones Google ranks for your searches and write down what blocks you: indexing problems, thin or duplicate pages, slow templates, weak internal linking, titles that do not match what people type."),
        li("Fixes. I make the changes myself — in WordPress, in Next.js and React code, in a headless CMS — or give your developer tickets precise enough to apply without a meeting."),
        li("Measurement. Before the first change I record a baseline: clicks, queries and the pages that bring enquiries. Every report compares against it, so you see what the work did and what it did not."),
        p(
          "The full list of SEO work — technical fixes, content plans, links, international SEO — is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page. This page is about hiring the person who does it.",
        ),

        h2("SEO consulting formats: a consultation, an audit, monthly work or a second opinion"),
        p("Not every business needs a retainer. I work in four formats, and the free first call is where we pick one:"),
        li("One-off SEO consultation — a call about a specific question: a planned redesign, a sudden traffic drop, a choice between two site structures. You get a written summary of what we agreed."),
        li(
          "SEO audit — a written review of the whole site with priorities and a plan, from 250 €. What it covers is described on the ",
          link("SEO audit", "/services/seo-audit"),
          " page.",
        ),
        li("Monthly work — I keep fixing, writing page briefs, building internal links and reporting, from 800 € per month."),
        li("A second opinion for an in-house team — I review what your marketer, developer or agency plans to do before money goes into it, and say what I would change and why."),

        h2("SEO consultant vs SEO agency vs in-house specialist vs marketplace freelancer"),
        p("Many buyers search for an “SEO consultant agency” because they are not sure which of the two they need. There are four common options, and each fits a different situation:"),
        li("SEO agency — a team with an account manager, writers and often ads and social media under one contract. Good when you need many channels at once; the price includes the structure, and the specialist on your account can change."),
        li("In-house SEO specialist — a full-time employee who knows your product deeply. Worth it when SEO fills a full week, every week; for most small and mid-size sites it does not."),
        li("Freelancer from a marketplace — quick to hire and cheap per task. Fine for a defined job such as fixing broken links; risky for strategy, because nobody checks the decisions."),
        li("Independent SEO consultant — one experienced person who plans the work and does it. You get senior SEO skills and the speed of someone who can change the live site the same day."),
        p("My focus is organic search: Google and AI answers. If you also buy ads or post on social media, I work alongside the people who manage them — shared data on landing pages, search terms and conversions helps both sides."),

        h2("Freelance SEO consultant working remotely: CET hours, English and invoices in EUR"),
        p("I am a freelance SEO consultant registered as a sole trader in Warsaw, Poland. All work happens remotely: video calls with screen sharing, shared documents, access to Search Console and your CMS. My hours follow Central European Time, which overlaps with the UK and Israel for almost the whole working day and with the US East Coast in your morning."),
        p("I speak and write English, Polish and Russian, and I invoice in euros. For a multilingual site this matters twice: I check each language version against the searches people make in that market, not against a translation of the English keywords."),
        h3("Searching for an SEO consultant near me: when distance matters"),
        p("For most SEO work it does not matter: your site, your data and the search results are the same wherever the consultant sits. Distance only matters for knowing a local market — district names, how people in one city phrase a search — and that is covered by research and by your input in the first weeks."),

        h2("Local SEO consultant: Google Business Profile and the map pack"),
        p("If you serve customers in one city or region, a large share of your leads comes from the map pack — the three businesses Google shows with a map above the regular results. As a local SEO consultant I check that your Google Business Profile has the right primary category, services and hours, that the name, address and phone match the site exactly, that each service and area has its own page, and that you ask for reviews in a steady way."),
        p(
          "Local work is described in detail on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page. An example from my portfolio is an auto repair shop in Warsaw, where service pages, Google Maps and the mobile layout were fixed together.",
        ),

        h2("WordPress SEO consultant: fixing SEO problems in the theme, not with more plugins"),
        p("Many ranking problems on WordPress sites come from the theme and plugins: duplicate archive pages, heavy page builders, wrong canonical tags, sitemaps full of thin URLs. As a WordPress SEO consultant I fix them where they start — in the theme, in plugin settings, in server rules — instead of adding another plugin on top."),
        p(
          "ScanM2, a 3D laser scanning and BIM company, had no leads for two years on a no-code site. After a rebuild on WordPress that kept its design, organic traffic grew 29 times and enquiries now arrive every week. I also build on Next.js, React and Sanity, so custom and headless sites are familiar ground. If the site itself needs rebuilding, see ",
          link("WordPress development services", "/services/wordpress-development-services"),
          ".",
        ),

        h2("How to check an SEO consultant before hiring"),
        p("Anyone can call themselves an SEO consultant. Before you sign, ask for these — whether you hire me or someone else:"),
        li("live sites they have worked on, what exactly they changed there and what happened to traffic or enquiries"),
        li("a sample audit or report: is it a plan with priorities or a list of two hundred automated warnings?"),
        li("who will make the changes: the consultant, your developer, or nobody"),
        li("how results will be measured, and from what baseline"),
        li("what is not promised: nobody can guarantee a position in Google, and “page one in 30 days” is a reason to keep looking"),
        p(
          "You can see what I worked on, with the facts behind each project, in my ",
          link("portfolio", "/portfolio"),
          ".",
        ),

        h2("Who you will work with: an SEO consultant who is also a web developer"),
        p(
          "I have worked in internet marketing since 2010: I spent the first couple of years writing copy, moved into SEO, and later learned web development, since too many of my audits stalled with nobody to implement them. Today I combine all three. I build with Next.js, React, TypeScript, Sanity and WordPress, and run SEO for sites in several languages — an education agency whose site grew from one country to ten, a Cyprus real estate platform in five languages including Hebrew. More about me on the ",
          link("about", "/about"),
          " page.",
        ),

        h2("SEO consultant for AI search: ChatGPT and Google AI Overviews"),
        p("Search no longer ends with ten blue links. Google shows AI Overviews above the results, and many buyers ask ChatGPT or Perplexity which company to hire. Classic SEO is the base for both: assistants that search the web lean on pages that rank, and they quote sites whose facts are stated clearly. In every audit I check what ChatGPT and AI Overviews say about your business for a few of your key questions and whether your pages give them something to quote. A psychotherapist in Milan whose site I rebuilt found me through ChatGPT."),
        p(
          "My view of AI search comes from data, not opinion: for ",
          link("a study of 141 AI answers", "/blog/ai-assistant-recommendations-study"),
          ", I asked ChatGPT, Perplexity and Google AI Mode 47 questions a buyer would ask and recorded which businesses they named and why. If AI visibility is your main goal, the ",
          link("AI SEO consultant", "/services/ai-seo-consultant"),
          " page describes that work, and ",
          link("AI-ready SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " lists what changes on the site.",
        ),

        h2("How much an SEO consultant costs"),
        p("Prices are fixed per scope and agreed before work starts:"),
        li("SEO audit — from 250 €, one-off"),
        li("one-off fixes or a project, such as a migration check or a set of new service pages — 250–700 €"),
        li("monthly SEO consulting with implementation — from 800 € per month; in very competitive markets from 1,300 € per month"),
        p(
          "What moves the price is the size of the site, the number of languages and how strong the competition is in your searches. The first 15–30 minute call is free. Full ranges, including website work, are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),

        h2("The first month with an SEO consultant, week by week"),
        ol("Week 1. You share access to Search Console, analytics and the CMS; I record the baseline and crawl the site."),
        ol("Week 2. You get the audit: the problems, their likely effect on traffic and the order in which I propose to fix them."),
        ol("Week 3. The first technical fixes go live — usually indexing, titles and internal links, the changes Google picks up fastest."),
        ol("Week 4. A short report: what changed, what Google has already processed and the plan for the second month."),
        p("Rankings take months to move, not weeks. What you should see after the first month is a clear plan and real changes on the live site."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO consultant: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What does an SEO consultant do?", "An SEO consultant finds out why a site does not get the search traffic it could, decides what to fix first and, in my case, makes the fixes: technical issues, page structure, content briefs, internal links. Then measures the effect against a baseline recorded before the work."],
          ["Should I hire an SEO consultant or an SEO agency?", "An agency fits when you need ads, social media and SEO under one contract. A consultant fits when you want one experienced person who knows your site in detail and can change it quickly. Many businesses use both: an agency for ads, a consultant for organic search."],
          ["How much does an SEO consultant cost?", "An audit costs from 250 €, one-off projects 250–700 €, monthly work from 800 € per month, or from 1,300 € in very competitive markets. The first 15–30 minute call is free."],
          ["Can a freelance SEO consultant in Poland work for a business in the US or UK?", "Yes. I work fully remotely on Central European Time, which overlaps with the UK for almost the whole day and with the US East Coast in your morning. Calls are in English, and invoices are issued in euros."],
          ["How long before SEO work shows results?", "Technical fixes are usually picked up by Google within weeks; growth in rankings and traffic takes months and depends on competition. Reports compare each month with the baseline, so you see the trend early."],
          ["Will you cooperate with our in-house developer and marketer?", "Yes. I can make the SEO changes myself or write tickets precise enough for your developer, and I review content briefs with your marketer. A second opinion on an agency’s plan is also a common request."],
          ["Can you guarantee first-page rankings in Google?", "No one can. Google’s results depend on hundreds of signals and on what competitors do. What I commit to is the scope of work, the measurement and clear reports on what changed."],
          ["Is SEO still worth it with ChatGPT and AI Overviews?", "Yes: assistants that search the web rely on pages that rank and quote sites with clear facts. SEO work now includes checking how AI answers describe your business, and I do that in every audit."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Hire an SEO consultant: what to send before our first call"),
        p(
          "Send your website, the countries or cities you sell in and the searches you would like to be found for. If traffic has dropped, add roughly when it started. Within one business day you will have my first thoughts and two or three time slots for the free call. Fill in the ",
          link("quote form", "#quote"),
          " or message me on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
