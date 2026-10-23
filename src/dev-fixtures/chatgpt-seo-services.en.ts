// Landing page fixture: ChatGPT SEO services (EN), nested under /services.
// Semantic core: research/pseo/page-core/ai-search.md: chatgpt seo agency 170,
// chatgpt seo services 140 (+ chatgpt seo 320 is informational → article).
// Intent: research/pseo/intent-check-ai-services-2.md — «chatgpt seo services»
// vs «llm seo services» 0 shared URLs; «chatgpt seo agency» vs «ai seo agency»
// 0 shared (set 1). Angle: ChatGPT specifically — how its search picks sources.
// Facts: the owner's study (/blog/ai-assistant-recommendations-study): ChatGPT
// 1.6 citations per answer (74 / 47), own sites 47, directories 3, platforms 1;
// Google Maps links in 23 of 47 answers, all constructed search links, listing
// data read only in 3 location questions. OpenAI crawlers: developers.openai.com
// /api/docs/bots (OAI-SearchBot = search, GPTBot = training, ChatGPT-User =
// user-initiated; independent settings; ~24 h for robots.txt changes).
import { p, h2, li, ol, link, k } from "./pt";

export const chatgptSeoServicesEn = {
  lang: "en",
  group: "chatgpt-seo-services",
  slug: "chatgpt-seo-services",
  parentPath: ["services"],
  pageType: "service",
  title: "ChatGPT SEO services",
  heading: "ChatGPT SEO Services: Getting Your Business Named in ChatGPT",
  excerpt:
    "I provide ChatGPT SEO services: work that gets your business named — with the right facts — when buyers ask ChatGPT who to hire or what to buy, measured with a fixed set of questions before and after.",
  seo: {
    metaTitle: "ChatGPT SEO Services: Get Named in ChatGPT | Bandziuk",
    metaDescription:
      "ChatGPT SEO services: how ChatGPT search picks businesses, what it reads, and the work that gets yours named — measured before and after. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Based on 141 analysed AI answers", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Who should I hire?", "Named in ChatGPT", "Correct facts", "Measured monthly"],
  offers: [
    { _key: "offer1", _type: "offer", name: "ChatGPT visibility audit: what ChatGPT says about your business and why", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Monthly ChatGPT SEO: sources, mentions, site facts and monitoring", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with ChatGPT SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "What ChatGPT says about you now", text: "Your buyers’ questions, run before any work" },
        { _key: k("o"), iconName: "link", title: "The sources ChatGPT uses in your market", text: "Where its names come from, traced answer by answer" },
        { _key: k("o"), iconName: "message-circle", title: "Mentions where ChatGPT looks", text: "Listings, reviews and articles that name you" },
        { _key: k("o"), iconName: "file-text", title: "Facts ChatGPT can quote", text: "What you do, for whom and where, in plain sentences" },
        { _key: k("o"), iconName: "settings", title: "OpenAI crawlers set up correctly", text: "Search allowed, training your choice" },
        { _key: k("o"), iconName: "trending-up", title: "Monthly measurement", text: "The same questions, so the result is a comparison" },
      ],
      prices: [
        { _key: k("r"), label: "ChatGPT visibility audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly ChatGPT SEO", value: "from 800 € / month", note: "with monitoring", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: search results on websites I have optimised",
      subtitle:
        "The same sites are now checked in ChatGPT and other assistants: an architecture studio whose organic traffic grew 29 times, an education agency in ten countries and local service businesses.",
      picks: [
        "architecture-website-rebuild-and-seo-scan",
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for ChatGPT SEO services",
      subtitle: "I reply within one business day with what I would check first in ChatGPT and a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Does ChatGPT name you now?", options: ["Yes, correctly", "Yes, but with errors", "No", "Never checked"] },
        { _key: k("z"), question: "Where are your customers?", options: ["One city", "One country", "Several countries"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I provide ChatGPT SEO services: work that gets a business named, with the right facts, when buyers ask ChatGPT “who should I hire” or “what should I buy”. ChatGPT does not show ten links: it names two or three companies, and a business that is not among them does not exist for that question. The work is built on how ChatGPT actually chooses those names, and measured before and after."),

        h2("How ChatGPT search picks the businesses it names"),
        p(
          "In my analysis of ",
          link("141 AI answers to buying questions", "/blog/ai-assistant-recommendations-study"),
          ", ChatGPT behaved very differently from the other assistants:",
        ),
        li("it cited 1.6 sources per answer, against 16.7 for Perplexity and 3.7 for Google AI Mode — the selection happens before any page is read"),
        li("it linked to a company’s own website about once per answer"),
        li("Google Maps links appeared in half of its answers, but every one was a search link ChatGPT built from a name and a city, not a business listing"),
        p("The practical conclusion: the work that gets a business named in ChatGPT is largely not on its own website. It is in the sources ChatGPT finds through its web search — listings, reviews, articles, comparisons — and in how clearly those sources say what the business does."),

        h2("ChatGPT SEO work outside your website: sources and mentions"),
        p("For each of your buyers’ questions I trace which sources ChatGPT relies on in your market and whether you are in them. Then the work goes where the gaps are:"),
        li("the directories and review platforms that actually appear behind ChatGPT’s answers in your industry — not every directory that accepts a listing"),
        li("articles and comparisons on sites ChatGPT already uses, where a mention of you is earned rather than bought"),
        li("the same name, description and contact details everywhere, so ChatGPT is sure all those mentions are about one business"),

        h2("ChatGPT SEO on your website: facts ChatGPT can quote"),
        p("Your own site still matters where ChatGPT does open it, and it is what other sites copy from. On it:"),
        li("what you do, for whom, where and in which languages, stated in plain declarative sentences — in my study, the one answer that explained its choice quoted exactly such a sentence"),
        li("a name that cannot be confused with another company, consistent across the site and structured data"),
        li("for local businesses, a complete Google Business Profile: for questions with a city, ChatGPT read opening status, category and rating from the listing"),
        p(
          "The technical side — content readable without scripts, structured data that matches the page — is described on the ",
          link("AI search optimization", "/services/ai-search-readiness"),
          " page.",
        ),

        h2("OpenAI crawlers: OAI-SearchBot, GPTBot and ChatGPT-User"),
        p("OpenAI uses separate crawlers for separate jobs, and a site can treat them differently:"),
        li("OAI-SearchBot finds pages for ChatGPT search — blocking it keeps a site out of ChatGPT’s search answers"),
        li("GPTBot collects content that may be used to train OpenAI’s models — blocking it does not affect search"),
        li("ChatGPT-User opens a page when a user asks ChatGPT about it; it does not crawl on its own"),
        p("Many sites block all three by accident, through a security plugin, a CDN rule or a copied robots.txt. I check what your server actually lets through and set it up so ChatGPT search can read the site, while training stays your decision."),

        h2("When ChatGPT says something wrong about your business"),
        p(
          "An old address, a service you dropped, a competitor’s price attached to your name: ChatGPT repeats what its sources say. The fix is to find that source and correct it there, not to argue with the chatbot. How that works is on the ",
          link("fixing wrong information in AI answers", "/services/fix-ai-misinformation"),
          " page.",
        ),

        h2("How ChatGPT visibility is measured"),
        p("ChatGPT’s answers change from one run to the next, so one screenshot proves nothing. I use a fixed set of questions your buyers ask, run on a schedule in the languages you sell in, and record whether you are named, how you are described and which sources are behind the answer. The difference between the baseline and later runs is the result."),
        p(
          "ChatGPT is one assistant among several, and they read different sources. If you need Google, Perplexity and AI Overviews covered too, see ",
          link("AI SEO services", "/services/ai-seo-services"),
          " and ",
          link("LLM SEO services", "/services/llm-seo-services"),
          ".",
        ),

        h2("How much ChatGPT SEO services cost"),
        li("ChatGPT visibility audit — what ChatGPT says about you, from which sources, and what to fix first: from 250 €, one-off."),
        li("Monthly ChatGPT SEO — sources, mentions, site facts, corrections and monitoring: from 800 € per month."),
        p(
          "Monitoring alone, if you only want to track what ChatGPT and other assistants say, starts at 250 € per month. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),

        h2("How ChatGPT SEO work runs"),
        ol("Questions. We agree the questions your buyers ask ChatGPT, in your languages and markets."),
        ol("Baseline. I run them and record who is named, how, and from which sources."),
        ol("Work. Sources, mentions, crawler settings and site facts are fixed in order of impact."),
        ol("Re-test. The same questions are run again every month."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "ChatGPT SEO services: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What are ChatGPT SEO services?", "Work that gets a business named, with correct facts, in ChatGPT’s answers: finding the sources ChatGPT uses in your market, getting you into them, stating your facts so they can be quoted, setting up OpenAI’s crawlers and measuring the answers before and after."],
          ["How does ChatGPT decide which companies to recommend?", "For questions about providers it searches the web and picks a small set of sources — in my study, 1.6 per answer. The businesses named are the ones those sources describe clearly and consistently. A company’s own website is only one of them."],
          ["Can you guarantee that ChatGPT will recommend us?", "No. Nobody controls ChatGPT’s answers. What can be done is to make you present and correctly described in the sources it uses, and to measure how often you are named before and after."],
          ["Should we block GPTBot?", "That is a business decision: GPTBot is about training OpenAI’s models, not about search. Blocking it does not remove you from ChatGPT search; blocking OAI-SearchBot does."],
          ["How long does ChatGPT SEO take?", "Crawler and site changes can show within weeks. New mentions on other sites and changes in how ChatGPT describes you usually take two to four months."],
          ["How much do ChatGPT SEO services cost?", "An audit from 250 €, monthly work from 800 € per month, monitoring alone from 250 € per month. After a short description of the business I give a fixed price."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order ChatGPT SEO services: what to send me"),
        p(
          "Send the company name and website, the markets you sell in and three or four questions your buyers would ask ChatGPT. I will reply with what I would check first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
