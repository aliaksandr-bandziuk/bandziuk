// Landing page fixture: AI SEO services (EN).
// Semantic core: research/pseo/page-core/ai-search.md: ai seo services /
// ai seo service 1 900, ai seo optimization 720, ai seo company / companies
// 590, best ai seo agency 260 (H2 on choosing), what is ai seo 480 (H2).
// PAA: Can ChatGPT do SEO? What is AI in SEO? How to optimize for generative AI?
// Intent: research/pseo/intent-check-ai-services.md — «ai seo services» 0
// shared URLs with «generative engine optimization services» (GEO hub
// /services/ai-ready-seo-and-geo-optimization), «ai search optimization
// services» (/services/ai-search-readiness) and «ai seo agency». SERP:
// agencies selling SEO for AI search, so this is our service, not AI tools.
// Prices from the live AI pages: audit from 250 €, readiness from 800 €,
// monitoring from 250 €/month; monthly AI SEO from 800 € as on SEO pages.
import { p, h2, li, ol, link, k } from "./pt";

export const aiSeoServicesEn = {
  lang: "en",
  group: "ai-seo-services",
  slug: "ai-seo-services",
  parentPath: ["services"],
  pageType: "service",
  title: "AI SEO services",
  heading: "AI SEO Services",
  excerpt:
    "I provide AI SEO services: one piece of work that gets your business found in Google and named — correctly — in ChatGPT, Perplexity and Google AI Overviews, measured before and after.",
  seo: {
    metaTitle: "AI SEO Services: Rank in Google and AI Answers | Bandziuk",
    metaDescription:
      "AI SEO services: get found in Google and named in ChatGPT, Perplexity and AI Overviews. Site, mentions and structured data, measured. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Google + ChatGPT + AI Overviews", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Named in ChatGPT", "Cited in AI Overviews", "Found in Google", "Measured monthly"],
  offers: [
    { _key: "offer1", _type: "offer", name: "AI SEO audit: what Google and AI assistants show about your business", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "AI SEO optimization of a website: facts, structured data, crawlability", price: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly AI SEO: Google and AI answers, with monitoring", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with AI SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "A baseline in Google and in AI answers", text: "A fixed set of buyer questions, run before any work" },
        { _key: k("o"), iconName: "file-text", title: "Pages assistants can quote", text: "Facts as checkable claims, one question per page" },
        { _key: k("o"), iconName: "code", title: "Structured data and crawlable content", text: "What the page says, readable without scripts" },
        { _key: k("o"), iconName: "link", title: "Mentions on the sites assistants read", text: "Listings, reviews and articles that name you" },
        { _key: k("o"), iconName: "shield-check", title: "Wrong facts traced and corrected", text: "Found at the source, not argued with the chatbot" },
        { _key: k("o"), iconName: "trending-up", title: "Monthly measurement", text: "Rankings, citations and mentions, the same questions each time" },
      ],
      prices: [
        { _key: k("r"), label: "AI SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly AI SEO", value: "from 800 € / month", note: "Google + AI answers", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: search results on websites I have optimised",
      subtitle:
        "The same sites are now checked in AI answers too: an architecture studio whose organic traffic grew 29 times, a multilingual education agency and local service businesses.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "renovation-and-investment-website-with-premium-design",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for AI SEO services",
      subtitle: "I reply within one business day with what I would check first in Google and in AI answers, and a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you need first?", options: ["Know what AI says about us", "Get named in AI answers", "Rank in Google and AI", "Not sure"] },
        { _key: k("z"), question: "Where are your customers?", options: ["One city", "One country", "Several countries"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I provide AI SEO services: SEO work that gets a business found in Google and named, with the right facts, when buyers ask ChatGPT, Perplexity, Gemini or Google’s AI Overviews instead of searching. These are two channels that reward different things — Google ranks pages, assistants quote sources they trust — so the work covers both and measures each separately."),

        h2("What AI SEO services include: Google rankings and AI answers, measured separately"),
        p("A buyer who asks an assistant “which accounting firm in Warsaw works with startups” gets two or three names and usually contacts one of them. Whether yours is among them depends on three things:"),
        li("whether the assistant can tell your business apart from others with a similar name"),
        li("whether it can find pages that state clearly what you do, for whom and where"),
        li("whether other sites it trusts — listings, reviews, articles, directories — say the same about you"),
        li("whether those facts agree with each other, so the assistant is sure it is talking about you"),
        p("AI SEO services work on all of these, and regular SEO stays part of the job: Google’s AI Overviews draw on pages that already rank, while ChatGPT and Perplexity lean more on video, professional networks, forums and established publishers. Effort on one channel does not carry over to the other by itself, so it is split between them on purpose."),

        h2("What is AI SEO, and what it is not"),
        p("“AI SEO” is used for two different things. One is SEO for AI search: making a business visible and correctly described in AI answers. The other is SEO done with AI tools: content generators, “AI humanizers”, automated link building. These services are the first. I use AI tools where they save time — clustering keywords, checking pages at scale — but I do not sell mass-generated content: it rarely ranks, and assistants have little reason to quote a page that says what a thousand other pages say."),

        h2("How AI assistants decide which businesses to name"),
        p(
          "Assistants answer from sources they can read and cross-check. In an analysis of ",
          link("141 AI answers to “who should I hire” questions", "/blog/ai-assistant-recommendations-study"),
          ", two things mattered more than how good a page was: whether the assistant could tell the business apart from its namesakes, and whether the business said what it does in plain declarative sentences — the one answer that explained its choice quoted exactly such a sentence. The sources the assistants cited were also different from what ranks in Google.",
        ),
        p("That is why AI SEO starts with what is written, not with tricks: an assistant cannot recommend a company for “startups” if the word appears nowhere it can read."),

        h2("AI SEO optimization of the website: facts, structure, crawlability"),
        p("On the site itself, AI SEO optimization covers:"),
        li("the facts that set you apart — services, markets, clients, prices where you can give them — written as plain, checkable statements"),
        li("one page per question buyers ask, answered in the first lines, so it can be quoted"),
        li("structured data that repeats what the visible page says, not more and not less"),
        li("content reachable without running scripts, because many AI crawlers do not run them"),
        p(
          "This part can be bought as a separate project: ",
          link("AI search optimization", "/services/ai-search-readiness"),
          ".",
        ),

        h2("Off-site AI SEO: mentions, listings and reviews assistants trust"),
        p("Assistants rarely trust a company’s own description alone. They look for the same facts on other sites: business profiles, industry directories, review platforms, articles and comparisons. Off-site AI SEO finds which of those sources the assistants in your market actually use, makes sure your details there are complete and identical, and earns mentions where you are missing. No paid “AI citations” or fake reviews: they are easy to detect and break the rules of the platforms that host them."),

        h2("Wrong information about your business in AI answers"),
        p(
          "Sometimes the problem is not being invisible but being described wrongly: an old address, a service you stopped, a competitor’s price. The fix is to find the source the assistant took it from and correct it there. How that works is on the ",
          link("fixing wrong information in AI answers", "/services/fix-ai-misinformation"),
          " page.",
        ),

        h2("How AI SEO results are measured"),
        p("AI answers change from one run to the next, so a single screenshot proves nothing. Measurement uses a fixed set of questions your buyers ask, run across assistants and languages on a schedule, and records whether you are named, how you are described and which sources are cited. Next to it: Google rankings, AI Overview citations and the enquiries that come from them."),
        p(
          "The starting point is an ",
          link("AI visibility audit", "/services/ai-visibility-audit"),
          "; the ongoing part is ",
          link("AI brand monitoring", "/services/ai-brand-monitoring"),
          ".",
        ),

        h2("GEO, AEO and LLM SEO: what the names mean"),
        p("The same field goes by several names. Generative engine optimization (GEO) is about being named in answers that assistants write. Answer engine optimization (AEO) is about your wording being the one quoted for a specific question — in an answer box, an AI Overview or a chatbot. LLM SEO and ChatGPT SEO are informal names for the same work. In practice they overlap, and AI SEO services cover all of them."),
        p(
          "More detail on the ",
          link("generative engine optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " and ",
          link("answer engine optimization", "/services/answer-engine-optimization-services"),
          " pages.",
        ),
        p(
          "ChatGPT on its own, and each language model measured separately, are covered on the ",
          link("ChatGPT SEO services", "/services/chatgpt-seo-services"),
          " and ",
          link("LLM SEO services", "/services/llm-seo-services"),
          " pages.",
        ),

        h2("AI SEO company, agency or consultant: how to choose"),
        p("Lists of the best AI SEO agencies and companies mix large agencies, tool vendors and freelancers. I work as an independent consultant: the person who audits your visibility is the one who changes the pages and checks the result. Whoever you choose, ask:"),
        li("Do you measure AI answers with a fixed set of questions, before and after?"),
        li("Is “AI SEO” for you about visibility in AI search, or about generating content with AI?"),
        li("Which sources do assistants use in our market, and how did you find out?"),
        li("What do you promise? Nobody can guarantee a place in ChatGPT’s answers; anyone who does is selling something else."),
        p(
          "How working with me as an independent consultant looks is described on the ",
          link("AI SEO consultant", "/services/ai-seo-consultant"),
          " page.",
        ),

        h2("How much AI SEO services cost"),
        li("AI SEO audit — what Google and AI assistants show about you, with sources: from 250 €, one-off."),
        li("AI SEO optimization of the website — facts, structured data, crawlability: from 800 € as a project."),
        li("Monthly AI SEO — Google and AI answers together, mentions, corrections and monitoring: from 800 € per month."),
        p(
          "If you only want to track what assistants say, monitoring alone starts at 250 € per month. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),

        h2("How AI SEO work runs"),
        ol("Questions. We agree the questions your buyers ask, in the languages and markets you sell in."),
        ol("Baseline. I run them across assistants and Google and record who is named, how and from which sources."),
        ol("Fixes. Pages, structured data, listings and mentions are changed in order of impact."),
        ol("Re-test. The same questions are run again; the difference is the result."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "AI SEO services: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What are AI SEO services?", "Work that makes a business visible in AI-generated answers — ChatGPT, Perplexity, Gemini, Google AI Overviews — and in regular Google results: clear facts on the site, structured data, consistent mentions on other sites, and measurement of what assistants say before and after."],
          ["Can ChatGPT do SEO?", "It can help draft texts and ideas. It cannot see your rankings, your competitors or what other assistants say about you, and it cannot change the sources it learns from. AI SEO is about those sources."],
          ["Can you guarantee that ChatGPT will recommend us?", "No. Nobody controls what an assistant answers. What can be done is to make the facts about you clear, consistent and present where assistants look, and to measure how often you are named before and after."],
          ["Do we still need regular SEO?", "Yes — for Google itself and for AI Overviews, which draw on pages that already rank. ChatGPT and Perplexity use a wider set of sources, so AI SEO adds work there rather than replacing SEO."],
          ["How long does AI SEO take to show results?", "Changes on your own site can show in AI answers within weeks, once the pages are recrawled. Mentions on other sites and changes in how assistants describe you usually take two to four months."],
          ["How much do AI SEO services cost?", "An audit costs from 250 €, website optimization from 800 € as a project, and monthly AI SEO from 800 € per month. After a short description of the business I give a fixed price."],
          ["Do you write content with AI?", "Not as a product. I use AI tools for analysis and drafts; what gets published is written around facts about your business, because that is what assistants quote."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order AI SEO services: what to send me"),
        p(
          "Send the company name and website, the markets and languages you sell in, and three or four questions your buyers would ask an assistant. I will reply with what I would check first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
