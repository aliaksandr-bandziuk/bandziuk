// Landing page fixture: SEO for debt collection agencies (EN),
// group «debt-collection-seo». NEW page — create-landing.cjs, root level.
//
// Why it exists (04.11.2026). Measured: «debt collection seo» ~10 — the
// smallest in the whole batch, built under the owner's floor rule. Last item
// in the queue.
//
// SERP (checked 04.11.2026): The Corner AI, World SEO Agency («attract more
// B2B clients»), Branding Arc («SEO and reputation management»), Slater Byrne,
// TePublico, 8UP Media, PDCflow («how to build a website for your debt
// collection agency»). Agencies selling to collection firms — clean buyer
// intent in English.
// TRAP NOTED FOR LATER: do NOT build a Polish version off this stem. In
// Polish «dług SEO» means SEO technical debt, a different concept entirely
// (delante.pl ranks for it). The Polish term for the industry is «windykacja».
//
// CANNIBALISATION: neighbours are /seo-for-law-firms, /local-seo-for-lawyers
// and /seo-for-accounting-firms. Collection sits between them — it is not
// litigation and not bookkeeping — so the first section separates all three
// and links them.
//
// The angle, which is the thing no agency page on that SERP says: the client's
// fear is NOT that you will fail to recover the money. It is that you will
// embarrass them in front of a customer they want to keep working with. Every
// page on a collection agency's site is read through that fear, which means
// tone, compliance and the process description ARE the conversion, and
// aggressive language loses the business it is meant to win.
// Supporting points: the buyer searches mid-frustration in informational terms
// («client not paying», «recover unpaid invoice»), so process content works
// here better than in most B2B; commission bands are the comparison; B2B and
// consumer debt are different pages with different rules; and sector pages
// (construction, transport, staffing) match characteristic late-payment
// patterns.
//
// Tone discipline: the page describes process and compliance, never pressure
// tactics, and it does not give legal advice.
import { p, h2, h3, li, link, k } from "./pt";

export const debtCollectionSeoEn = {
  lang: "en",
  group: "debt-collection-seo",
  slug: "seo-for-debt-collection-agencies",
  title: "SEO for Debt Collection and Receivables Agencies",
  heading: "SEO for a debt collection agency: how to win clients who are afraid of how you will treat their customer",
  excerpt:
    "Your client is not mainly worried that you will fail to recover the money. They are worried you will embarrass them in front of a customer they still want. That fear is what every page on your site is read through. Audit from €250.",
  seo: {
    metaTitle: "Debt Collection SEO — audit from €250",
    metaDescription:
      "SEO for debt collection agencies: content for businesses with unpaid invoices, commission bands, B2B versus consumer debt, tone and compliance. Audit €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Written for a worried client", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Pages for «client not paying»", "Commission bands published", "B2B and consumer separated", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a debt collection agency: site, content, tone and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: process and sector pages, commission structure, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a debt collection or receivables agency", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a debt collection agency actually consists of",
      items: [
        { _key: k("o"), iconName: "file-text", title: "Content for the moment the client searches", text: "«Customer has not paid, what now»" },
        { _key: k("o"), iconName: "message-circle", title: "Tone that reassures rather than threatens", text: "Their relationship is at stake, not yours" },
        { _key: k("o"), iconName: "credit-card", title: "Commission bands on the page", text: "The comparison every client makes" },
        { _key: k("o"), iconName: "users", title: "B2B and consumer debt separated", text: "Different clients, different rules" },
        { _key: k("o"), iconName: "layers", title: "Sector pages where late payment is chronic", text: "Construction, transport, staffing" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Agency for unpaid B2B invoices, no recovery no fee»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Which firms this page is for, and where the neighbouring services are covered"),
        p("This page is for agencies recovering money owed: unpaid invoices, overdue accounts, receivables handed over after a company's own reminders have stopped working. It is not about litigation and not about bookkeeping, and the distinction matters because the three are often confused by the people searching."),
        p(
          "If you are a law firm conducting proceedings, the work is on ",
          link("SEO for law firms", "/seo-for-law-firms"),
          " and ",
          link("local SEO for lawyers", "/local-seo-for-lawyers"),
          ". If the service is credit control, invoicing and ledgers rather than recovery, that is closer to ",
          link("SEO for accounting firms", "/seo-for-accounting-firms"),
          ".",
        ),

        h2("What your client is actually afraid of, and why it decides every page"),
        p("Agencies in this trade usually write as though the client's question were whether the money can be recovered. In my reading of how businesses actually choose, it is not. A company handing over an unpaid invoice is afraid of something else: that an agency acting in their name will be heavy-handed with a customer they would still like to work with, or with a person whose circumstances they do not know, and that the damage will come back to them."),
        p("That fear is the lens every page on the site is read through, and it explains why the aggressive register this industry often adopts — firm, relentless, uncompromising — loses business it was written to win. The client is not shopping for aggression. They are shopping for someone who will be effective without creating a problem that outlasts the debt."),
        p("So the pages that convert describe the process in order and in plain language: what happens first, what the debtor receives and in what tone, how long each stage lasts, when the client is consulted before anything escalates, what you will not do, and how a case is closed when the debtor genuinely cannot pay. A page that explains restraint reads as competence."),
        li("the sequence of steps, with the time each one takes;"),
        li("what the first contact with the debtor looks like, described honestly;"),
        li("where the client's approval is required before escalation;"),
        li("your compliance position and which rules govern your conduct;"),
        li("what you decline to take on, and what happens when a debt is uncollectable;"),
        li("and how the client is kept informed, since silence is the second complaint in this trade."),

        h2("The client searches mid-frustration, in words that are not your service name"),
        p("Nobody wakes up wanting a debt collection agency. They have an invoice that is ninety days late, a customer who has stopped replying, and a cash-flow problem, and what they type is the problem rather than the service: a customer who will not pay, how to recover an unpaid invoice, what to do when a client ignores reminders, whether a late-payment charge can be added."),
        p("That makes process and explanatory content unusually effective here, more so than in most business-to-business work, because the searcher does not yet know what kind of help exists. The agency that answers the question clearly — including the parts where the answer is «send one more letter yourself first» — is the one they contact when the reminders fail, and that honesty is also what distinguishes the page from a competitor's sales copy."),
        p("Where the answer involves what the law allows, keep the page to the process you follow and point readers to proper advice. I am not a lawyer, this is a regulated area in most markets, and content that reads as legal guidance is a risk to the client that commissioned it."),

        h3("Commission bands, because that is the comparison every client makes"),
        p("Almost every business comparing agencies is comparing two things: whether there is a fee if nothing is recovered, and what percentage you take if there is. Keeping both off the site does not protect the margin; it just removes you from the comparison, and the client assumes the higher of the figures they have seen elsewhere."),
        p("Bands with the conditions attached work better: what the commission is for recent invoices, what it becomes for older ones, where the minimum sits, what changes if the debt is disputed or the debtor is abroad. It is also the kind of concrete figure a search engine or an AI assistant can quote, which matters more each year."),

        h3("Business and consumer debt are two different pages with two different sets of rules"),
        p("Recovering money from a company and recovering it from a private individual are different operations with different obligations, and in most markets consumer debt is the more tightly regulated of the two. A single page addressing both tells a business client nothing specific and signals to a regulator's eye that the distinction is not being taken seriously."),
        p("If you work in both, they need separate pages written for separate readers. If you work only in business-to-business recovery, say so prominently: it removes enquiries you cannot take and it reassures the corporate client that your practice is built for their situation."),

        h3("Sector pages where late payment is chronic"),
        p("Late payment is not evenly distributed. Construction has retention and subcontract chains, transport has long payment terms and disputed deliveries, staffing agencies carry wages before they are paid for them, and professional firms have clients who simply stop answering. Each of these sectors has a characteristic pattern, and an agency that describes that pattern in the sector's own language reaches a client who recognises their situation in the first paragraph."),
        p(
          "These pages are also the most winnable searches in the trade, because the competition is writing about debt collection in general. Where you want to be found by city as well, the groundwork is on the ",
          link("local SEO page", "/services/local-seo-services"),
          ", and if you want the state of your own site established before committing to anything, that is the ",
          link("SEO audit", "/services/seo-audit"),
          ".",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: professional service sites where tone and trust decide the enquiry",
      subtitle:
        "What these share with a collection agency: a service bought under pressure, where the visitor is judging judgement rather than price, and where what may be published is constrained. A psychotherapist's site in Italy, a consultant's own site, an architecture practice rebuilt and scanned for search problems, a renovation and investment firm, and an education agency taken from one country to ten.",
      picks: [
        "psychotherapist-website-milan",
        "consultant-website-design-retail-analytics",
        "architecture-website-rebuild-and-seo-scan",
        "renovation-and-investment-website-with-premium-design",
        "seo-case-study-education-agency",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your collection agency",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Agency name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you recover?", options: ["Business invoices only", "Consumer debt only", "Both", "Cross-border cases"] },
        { _key: k("z"), question: "How do clients find you now?", options: ["Referrals from accountants", "Word of mouth", "Outbound sales", "Search already works a little"] },
        { _key: k("z"), question: "Is your commission on the site?", options: ["No", "«No recovery, no fee» only", "Bands with conditions", "Only after a call"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a business asks ChatGPT about an unpaid invoice (GEO, AEO)"),
        p("«A customer has not paid a ninety-day invoice, what are my options and who handles this» is exactly the kind of question businesses now put to an assistant before searching, and this trade suits it well because the assistant answers in two stages: first explaining the options, then naming who does it. Being present in the second stage depends on what you have written for the first — the process described plainly, the commission structure quotable, the kind of debt you take stated, and consistent firm details across the site and the directories."),
        p(
          "Getting a site into that state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants describe the agency wrongly — consumer work you do not take, markets you do not cover, an old fee structure — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for debt collection agencies: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a collection agency cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. This is one of the cases where ongoing work tends to pay, because the demand is answered with explanatory content and that accumulates rather than finishing."],
          ["Should the website sound firm and uncompromising?", "I would argue the opposite, and it is the main point of this page. Your client is less worried about whether you will recover the money than about whether you will damage their relationship with a customer, or handle a private individual badly, in their name. A site that explains restraint and the point at which the client is consulted reads as competent. One that promises relentlessness reads as a risk."],
          ["Why write content about problems rather than about our service?", "Because that is what the client types. They search for a customer who will not pay, not for a collection agency, and often do not know what kind of help exists. Answering the question — including the part where they should send one more letter themselves first — is what earns the call when the reminders fail."],
          ["Should we publish our commission?", "Bands with conditions, yes. Whether there is a fee when nothing is recovered, and what percentage applies to recent versus older debt. Keeping it off the site does not protect the margin; it removes you from a comparison the client is making anyway with numbers they got elsewhere."],
          ["Can we write about the legal side?", "Describe your own process and point readers to proper advice for their situation. This is a regulated area in most markets, content that reads as legal guidance creates risk for the agency that published it, and I am not a lawyer — anything borderline should be reviewed by one before it goes live."],
          ["Do we need separate pages for business and consumer debt?", "Yes, if you do both. They are different operations with different obligations, consumer work is usually the more tightly regulated, and one page addressing both is specific to neither. If you only take business invoices, say so prominently — it filters the enquiries and reassures corporate clients."],
          ["What would you write first?", "A sector page for whichever industry sends you most work, in that industry's own language, and a process page that explains what the debtor actually receives. Those two reach the client at the moment of frustration and answer the fear at the same time."],
          ["How long before enquiries come in?", "First movement after about a month and a half, growth on a three to six month horizon. Explanatory content in this trade tends to keep producing enquiries for years, because the underlying problem never stops recurring."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a debt collection agency: what to send me"),
        p("Send the site, say whether you recover business invoices, consumer debt or both, and tell me which sectors send you the most work. I reply within one working day with what is holding the site back, how the tone of the site is likely to read to a cautious client, and what I would do first."),
      ],
    },
  ],
};
