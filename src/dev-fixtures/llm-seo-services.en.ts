// Landing page fixture: LLM SEO services (EN), nested under /services.
// Semantic core: research/pseo/page-core/ai-search.md: llm seo services 170,
// llm seo agency 140 («llm seo» 720 is informational → article).
// Intent: research/pseo/intent-check-ai-services-2.md — «llm seo services» 0
// shared URLs with «chatgpt seo services», «generative engine optimization
// services» and «llm seo». Angle: all language models at once — training data
// vs live retrieval, different assistants reading different sources, crawler
// settings per vendor, llms.txt as a cheap extra (this site has one).
// Facts: the owner's study (citations per answer: Perplexity 16.7, Google AI
// Mode 3.7, ChatGPT 1.6; own-site citations 667 / 141 / 47).
import { p, h2, li, ol, link, k } from "./pt";

export const llmSeoServicesEn = {
  lang: "en",
  group: "llm-seo-services",
  slug: "llm-seo-services",
  parentPath: ["services"],
  pageType: "service",
  title: "LLM SEO services",
  heading: "LLM SEO Services: Visibility in ChatGPT, Perplexity, Gemini and Claude",
  excerpt:
    "I provide LLM SEO services: work that makes a business visible and correctly described in the answers of large language models — ChatGPT, Perplexity, Gemini, Claude — each measured separately, because each reads different sources.",
  seo: {
    metaTitle: "LLM SEO Services: Visibility in AI Models | Bandziuk",
    metaDescription:
      "LLM SEO services: get your business named in ChatGPT, Perplexity, Gemini and Claude. Training data and live search, crawlers, sources, measured. From 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["ChatGPT · Perplexity · Gemini · Claude", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["What models know", "What they find live", "Named correctly", "Measured per model"],
  offers: [
    { _key: "offer1", _type: "offer", name: "LLM visibility audit across ChatGPT, Perplexity, Gemini and Claude", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Monthly LLM SEO: sources, site facts, crawler settings and monitoring per model", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with LLM SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "A baseline in each model", text: "The same buyer questions in ChatGPT, Perplexity, Gemini, Claude" },
        { _key: k("o"), iconName: "layers", title: "Sources mapped per model", text: "Each assistant reads a different part of the web" },
        { _key: k("o"), iconName: "file-text", title: "Facts written to survive summarising", text: "Plain claims a model can repeat without distorting" },
        { _key: k("o"), iconName: "target", title: "One unambiguous entity", text: "A name no model confuses with another company" },
        { _key: k("o"), iconName: "settings", title: "Crawlers set per vendor", text: "Search and live answers allowed, training your choice" },
        { _key: k("o"), iconName: "trending-up", title: "Monthly measurement per model", text: "Named or not, how, and from which sources" },
      ],
      prices: [
        { _key: k("r"), label: "LLM visibility audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly LLM SEO", value: "from 800 € / month", note: "all major models", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: search results on websites I have optimised",
      subtitle:
        "The same sites are now measured in AI assistants too: an architecture studio whose organic traffic grew 29 times, an education agency in ten countries and local service businesses.",
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
      title: "Get a quote for LLM SEO services",
      subtitle: "I reply within one business day with what I would check first in each model and a fixed price.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Which assistants matter most to your buyers?", options: ["ChatGPT", "Perplexity", "Google AI answers", "Not sure"] },
        { _key: k("z"), question: "Where are your customers?", options: ["One city", "One country", "Several countries"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I provide LLM SEO services: work that makes a business visible and correctly described in the answers of large language models — ChatGPT, Perplexity, Gemini, Claude and Google’s AI answers. LLM SEO is not one optimisation applied to all of them: each model knows different things and reads different sources, so the work and the measurement are done per model."),

        h2("What LLM SEO is: training data and live search"),
        p("A language model can know about your business in two ways:"),
        li("from training data — what was published about you before the model was trained, often months ago; this is what the model “remembers” without searching"),
        li("from live retrieval — what it finds when it searches the web while answering; this is current, and this is where most buying questions are answered"),
        p("LLM SEO works on both: being described consistently in the places that end up in training data, and being findable and quotable when a model searches today."),

        h2("Why ChatGPT, Perplexity, Gemini and Claude cite different sources"),
        p(
          "In my analysis of ",
          link("141 AI answers to buying questions", "/blog/ai-assistant-recommendations-study"),
          ", the assistants read almost different webs:",
        ),
        li("Perplexity cited 16.7 sources per answer, mostly companies’ own websites — work on your site shows up there first"),
        li("Google AI Mode cited 3.7 per answer, a tight selection close to what ranks in Google"),
        li("ChatGPT cited 1.6 per answer and only about one company website per answer — work that gets you named there is mostly outside your site"),
        p(
          "That is why one “AI optimisation” package averages three different problems. LLM SEO decides which models matter for your buyers and works on each. For ChatGPT alone, see ",
          link("ChatGPT SEO services", "/services/chatgpt-seo-services"),
          ".",
        ),

        h2("Entity clarity: one business, one description, everywhere"),
        p("Models build an answer by joining facts from several sources. If your company name is shared with others, or your description differs from site to site, the model either skips you or mixes you up with someone else. In my study this mattered more than how good a page was. LLM SEO makes the entity unambiguous: one name, one description of what you do, for whom and where, the same on your site, in structured data, in listings and on professional networks."),

        h2("Content that survives summarising"),
        p("A model does not quote your page; it compresses it. Marketing phrases disappear, and what is left is whatever was stated as a plain fact. So the key pages state the facts that set you apart — services, markets, clients, prices where possible — in short declarative sentences, with one question answered per page. That copy survives summarising and is what a model can repeat without distorting."),

        h2("AI crawlers and llms.txt"),
        p("Each vendor uses its own crawlers, and many sites block them by accident through a security plugin, a CDN rule or a copied robots.txt. I check what your server actually lets through and set it per vendor:"),
        li("OpenAI: OAI-SearchBot for ChatGPT search, GPTBot for training — they can be set separately"),
        li("Perplexity, Anthropic (Claude) and others have their own crawlers for search and training"),
        li("Google-Extended controls whether your content is used for Gemini models; it does not affect Google Search"),
        p("An llms.txt file — a short Markdown summary of the site for language models — is a proposed convention. No major assistant has confirmed it uses it, so I add it as a cheap extra, not as a strategy. This site has one."),
        p(
          "The full technical side is on the ",
          link("AI search optimization", "/services/ai-search-readiness"),
          " page.",
        ),

        h2("How LLM visibility is measured per model"),
        p("Answers change from run to run, so measurement uses a fixed set of questions your buyers ask, run on a schedule in each model and language: whether you are named, how you are described and which sources are behind the answer. You see the result per model, because a gain in Perplexity says nothing about ChatGPT."),
        p(
          "The starting point is an ",
          link("AI visibility audit", "/services/ai-visibility-audit"),
          "; Google rankings and AI answers together are covered by ",
          link("AI SEO services", "/services/ai-seo-services"),
          ".",
        ),

        h2("How much LLM SEO services cost"),
        li("LLM visibility audit — what ChatGPT, Perplexity, Gemini and Claude say about you, from which sources: from 250 €, one-off."),
        li("Monthly LLM SEO — sources, entity, site facts, crawler settings and monitoring per model: from 800 € per month."),
        p(
          "Monitoring alone starts at 250 € per month. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),

        h2("How LLM SEO work runs"),
        ol("Models and questions. We agree which assistants your buyers use and the questions they ask."),
        ol("Baseline. I run the questions in each model and record who is named, how and from which sources."),
        ol("Work. Entity, site facts, crawler settings, listings and mentions are fixed in order of impact per model."),
        ol("Re-test. The same questions are run every month, and the report shows each model separately."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "LLM SEO services: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What is LLM SEO?", "Work that makes a business visible and correctly described in the answers of large language models such as ChatGPT, Perplexity, Gemini and Claude — both in what the models learned during training and in what they find when they search while answering."],
          ["Is LLM SEO the same as GEO?", "Mostly, yes. Generative engine optimization (GEO) is the more formal name for the same field. LLM SEO puts the accent on the models themselves and on the fact that each one reads different sources."],
          ["Can you get us into the models’ training data?", "Not directly, and nobody can. What can be done is to be described consistently in widely read sources, which raises the chance that future models learn correct facts, while working on live search answers now."],
          ["Do we need llms.txt?", "It does no harm and takes an hour, but no major assistant has confirmed using it. Clear facts on your pages, consistent mentions and open crawler access matter far more."],
          ["Can you guarantee we will be named by AI assistants?", "No. Nobody controls the models’ answers. I can make the facts about you clear and present where each model looks, and measure how often you are named before and after."],
          ["How much do LLM SEO services cost?", "An audit from 250 €, monthly work from 800 € per month, monitoring alone from 250 € per month. After a short description of the business I give a fixed price."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order LLM SEO services: what to send me"),
        p(
          "Send the company name and website, the markets you sell in, the assistants your buyers use and three or four questions they would ask. I will reply with what I would check first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
