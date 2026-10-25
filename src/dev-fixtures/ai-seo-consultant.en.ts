// Landing page fixture: AI SEO consultant (EN), nested under /services.
// Semantic core: research/pseo/page-core/ai-search.md: ai seo expert 320,
// ai seo consultant 210.
// Intent: research/pseo/intent-check-ai-services-2.md — consultant vs agency 2
// shared URLs, expert vs consultant 2, consultant vs services 2: borderline,
// checked by eye; SERP mixes individual consultants and agencies. The page is
// about the person and the way of working; the service list lives on
// /services/ai-seo-services, which the page links.
// Facts from /about: 15 years in search (copywriting → SEO → development),
// EN/PL/RU, clients in Europe, the UK, the US, Cyprus and Israel, the 141-answer
// study. orzel-realty is not shown (owner: not for the portfolio yet).
import { p, h2, li, ol, link, k } from "./pt";

export const aiSeoConsultantEn = {
  lang: "en",
  group: "ai-seo-consultant",
  slug: "ai-seo-consultant",
  parentPath: ["services"],
  pageType: "service",
  title: "AI SEO consultant",
  heading: "AI SEO Consultant: an Independent Expert for Google and AI Answers",
  excerpt:
    "I am an independent AI SEO consultant: I help businesses get found in Google and named correctly in ChatGPT, Perplexity and Google AI Overviews — and I do the research, the fixes and the measurement myself.",
  seo: {
    metaTitle: "AI SEO Consultant and AI SEO Expert | Bandziuk",
    metaDescription:
      "Independent AI SEO consultant: one expert who audits your visibility in Google and AI answers, fixes the site in code and measures the result. From 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["One person, no handover", "15 years in search", "Free 15–30 min call"],
  // Desktop hero shows the owner's portrait instead of the phone sketch (the
  // same transparent-background photo as on the About page).
  heroVisual: "photo",
  heroPhoto: { _type: "image", asset: { _type: "reference", _ref: "image-f672c00fe2c4d1b2e6dfd5f64d9b65c50f20a3d1-446x559-png" }, alt: "Aliaksandr Bandziuk, independent AI SEO consultant" },
  offers: [
    { _key: "offer1", _type: "offer", name: "AI SEO audit by an independent consultant", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Monthly AI SEO consulting and implementation", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get from an AI SEO consultant",
      items: [
        { _key: k("o"), iconName: "users", title: "One person from audit to result", text: "No account manager, no handover between teams" },
        { _key: k("o"), iconName: "code", title: "Fixes made in the code", text: "Not a PDF of recommendations left for someone else" },
        { _key: k("o"), iconName: "search", title: "Your own baseline in AI answers", text: "A fixed set of buyer questions, run before any work" },
        { _key: k("o"), iconName: "languages", title: "English, Polish and Russian", text: "For businesses that sell across borders" },
        { _key: k("o"), iconName: "file-text", title: "Methods backed by my own research", text: "141 AI answers analysed and published" },
        { _key: k("o"), iconName: "trending-up", title: "Reports in enquiries", text: "What changed in Google and in AI answers, and what did not" },
      ],
      prices: [
        { _key: k("r"), label: "AI SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly AI SEO consulting and work", value: "from 800 € / month", note: "Google + AI answers", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: results on websites I have worked on",
      subtitle:
        "A 3D laser scanning and BIM company whose organic traffic grew 29 times, an education agency in ten countries and local service businesses — each one audited, fixed and measured by me.",
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
      title: "Talk to an AI SEO consultant",
      subtitle: "I reply within one business day. A first 15–30 minute call is free: we look at your situation and decide whether you need an audit, a project or monthly work.",
      contextLabel: "Company name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and book a call",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Who works on your SEO now?", options: ["Nobody", "An agency", "Our own team", "A freelancer"] },
        { _key: k("z"), question: "What do you need first?", options: ["An audit", "Hands-on work", "A second opinion", "Not sure"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("I am an independent AI SEO consultant: I help businesses get found in Google and named, with the right facts, when buyers ask ChatGPT, Perplexity, Gemini or Google’s AI Overviews. I do the work myself — the research, the changes to the site and the measurement — so the person you talk to is the person who is responsible for the result."),

        h2("What an AI SEO consultant does"),
        p("The job has four parts, and a consultant should be able to do all of them, not only the first:"),
        li("measure where you stand: what Google and the assistants say about you now, for the questions your buyers actually ask"),
        li("find why: unclear facts on your site, a name the assistant confuses with another company, sources it trusts that say nothing about you"),
        li("fix it: pages, structured data, technical issues, listings and mentions — in the code and on the sites where they live"),
        li("measure again with the same questions, so the result is a comparison rather than a screenshot"),
        p(
          "The full list of work is on the ",
          link("AI SEO services", "/services/ai-seo-services"),
          " page. This page is about who does it and how working with me looks.",
        ),

        h2("AI SEO consultant or agency: what changes for you"),
        p("An agency gives you a team: an account manager, an SEO specialist, a content writer, sometimes a developer, and handovers between them. An independent consultant gives you one person. In practice that changes three things:"),
        li("speed — fixes reach the site in days, because the person who finds a problem can change the code"),
        li("context — nothing gets lost between the audit, the implementation and the report"),
        li("price — you pay for the work, not for the structure around it"),
        p("The limits are real too: one person has a fixed capacity, and I do not run paid ads or social media. If you need those, an agency is the better choice, and AI SEO can still be done separately."),

        h2("Experience behind the work of an AI SEO expert"),
        p("I have worked in search for 15 years: first as a copywriter, then in SEO, then as a developer, because audits kept failing for lack of someone to apply them. Today I build with Next.js, React, Sanity and WordPress, and do SEO for companies in Europe, the UK, the US, Cyprus and Israel, in English, Polish and Russian."),
        p(
          "AI search is measured, not assumed: I put 47 buying questions to ChatGPT, Perplexity and Google AI Mode and published the analysis of all ",
          link("141 answers", "/blog/ai-assistant-recommendations-study"),
          ". The methods I use with clients come from that kind of data. More about me on the ",
          link("about", "/about"),
          " page.",
        ),

        h2("How to work with an AI SEO consultant"),
        li("A free 15–30 minute call — we look at your situation and agree what makes sense."),
        li("An AI SEO audit — what Google and AI assistants show about you, with sources and priorities: from 250 €."),
        li("A project — preparing the site for AI search, fixing wrong information, a set of pages: from 800 €."),
        li("Monthly work — Google and AI answers together, with reporting: from 800 € per month."),
        p("If you already have a developer or an in-house marketer, I can work with them: I make the changes that need SEO knowledge and leave clear instructions for the rest."),

        h2("How to check an AI SEO expert before hiring"),
        p("The field is new, and many offers under the AI SEO label are something else. Before hiring anyone, me included, ask to see:"),
        li("a baseline measurement of AI answers made with a fixed set of questions, not a few screenshots"),
        li("an explanation of which sources each assistant uses in your market, and how that was found out"),
        li("what exactly will be changed on your site and outside it, and who will do it"),
        li("what is not promised — no one can guarantee a place in ChatGPT’s answers"),

        h2("How much an AI SEO consultant costs"),
        p(
          "An audit costs from 250 €, project work from 800 €, monthly work from 800 € per month. Monitoring alone, if you only want to track what assistants say, starts at 250 € per month. Full price ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),

        h2("How the first month with an AI SEO consultant runs"),
        ol("Week 1. We agree the questions your buyers ask and the markets; I run the baseline in Google and in the assistants."),
        ol("Week 2. You get the findings: what is said about you, from which sources, and what to fix first."),
        ol("Weeks 3–4. The first fixes go live: facts on the key pages, structured data, the most important listings."),
        ol("Next month. The same questions are run again, and the plan is adjusted to what changed."),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "AI SEO consultant: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["What does an AI SEO consultant do?", "Measures how a business appears in Google and in AI answers, finds the reasons — unclear facts, entity confusion, missing sources — fixes them on the site and outside it, and measures the result with the same questions."],
          ["Is an independent AI SEO consultant better than an agency?", "It depends on what you need. A consultant is faster and keeps the whole picture in one head; an agency has more hands and covers ads and social media. For AI search work, the person who measures should be the one who changes the site."],
          ["How much does an AI SEO consultant cost?", "An audit from 250 €, project work from 800 €, monthly work from 800 € per month. The first 15–30 minute call is free."],
          ["Can you work with our developer or SEO team?", "Yes. I make the changes that need SEO knowledge and give your team clear instructions for the rest, so the work does not stop at a report."],
          ["Can you guarantee we will appear in ChatGPT?", "No. Nobody controls what an assistant answers. What I can do is make the facts about you clear and consistent where assistants look, and show you how often you are named before and after."],
          ["Which markets and languages do you work in?", "English, Polish and Russian, for businesses in Europe, the UK, the US, Cyprus and Israel. Each language and market gets its own set of questions."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Book a call with an AI SEO consultant: what to send me"),
        p(
          "Send the company name and website, the markets you sell in and three or four questions your buyers would ask an assistant. I will reply within one business day and suggest a time for a free call. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
