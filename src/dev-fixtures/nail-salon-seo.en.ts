// Landing page fixture: SEO for nail salons (EN), group «nail-salon-seo».
// NEW page — create-landing.cjs, root level.
//
// Why it exists (04.11.2026). Measured: «nail salon seo» ~30. Built under the
// owner's floor rule (5/month, and below that do it anyway).
//
// CANNIBALISATION — the highest risk of the whole batch, and the reason this
// page is deliberately NARROW. /seo-for-beauty-salons already covers, in
// depth: how clients search and why it decides page structure; a page per
// treatment instead of a services list; the map pack deciding before the
// website; prices and durations on the site rather than a photographed price
// list; why salon sites do not rank; the booking path; and how long it takes.
// Writing any of that again would produce a near-duplicate that damages both
// pages. So this page is explicitly subordinate — it links the salon page in
// its first section as the broader case — and its spine is the three things a
// nail business has that a general salon page cannot say:
//   1. nail terminology turns over faster than in any other beauty vertical
//      (BIAB, dip powder, Russian and Japanese manicure, chrome, ombre), on a
//      fashion cycle of a year or two. So treatment pages here are a
//      MAINTENANCE job, not a one-off build, and a page naming last season's
//      technique reads as dated to the exact client it is meant to attract.
//   2. walk-in behaviour: nail salons take walk-ins far more than hair or
//      beauty salons, so hours accuracy and «open now» outweigh content.
//   3. hygiene and sterilisation as both a search and the conversion point —
//      tools, single-use files, drill use. Real client anxiety, almost never
//      written up. Described as practice, with no health claims.
//   4. the infill cycle is 2–4 weeks and therefore PREDICTABLE, so rebooking
//      is schedulable rather than hopeful — unlike irregular salon treatments.
import { p, h2, h3, li, link, k } from "./pt";

export const nailSalonSeoEn = {
  lang: "en",
  group: "nail-salon-seo",
  slug: "seo-for-nail-salons",
  title: "SEO for Nail Salons and Nail Technicians",
  heading: "SEO for a nail salon: how to stay findable when the technique names change every season",
  excerpt:
    "No other beauty service renames itself as fast. A page built around last year's technique reads as dated to the client you want, and hours matter more here than content because this trade lives on walk-ins. Audit from €250.",
  seo: {
    metaTitle: "Nail Salon SEO — audit from €250",
    metaDescription:
      "SEO for nail salons: technique names that change every season, walk-in and «open now» searches, hygiene as a conversion point, the infill cycle. Audit €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Technique names kept current", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Walk-ins and «open now»", "Current technique terms", "Hygiene explained plainly", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a nail salon: site, map profile, technique terms and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: technique pages, hours and walk-in data, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a nail salon, including keeping technique terms current", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a nail salon actually consists of",
      items: [
        { _key: k("o"), iconName: "refresh-cw", title: "Technique terms reviewed, not written once", text: "The vocabulary changes every season" },
        { _key: k("o"), iconName: "map-pin", title: "Hours and «open now» above all", text: "This trade lives on walk-ins" },
        { _key: k("o"), iconName: "shield-check", title: "Hygiene and tools explained", text: "The question clients ask each other, not you" },
        { _key: k("o"), iconName: "calendar", title: "The two-to-four week infill cycle", text: "Rebooking you can schedule, not hope for" },
        { _key: k("o"), iconName: "image", title: "Work shown with the technique named", text: "A gallery without words ranks for nothing" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Nail salon open now near me that does BIAB»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("What this page adds to the general salon advice, and what it does not repeat"),
        p(
          "If you run a salon offering several kinds of treatment, the structural work — a page per treatment, prices and durations on the site, the map profile, the path from a treatment page to a booked slot — is on the ",
          link("SEO for beauty salons page", "/seo-for-beauty-salons"),
          ", and all of it applies to nails too. There is no point repeating it here.",
        ),
        p("This page is about the four things that make a nail business behave differently from the rest of the salon trade: a vocabulary that changes every season, a clientele that walks in rather than books, a hygiene question nobody writes about, and a return visit that happens on a predictable cycle. Those four are where a nail salon gains or loses search traffic, and none of them is a general salon problem."),

        h2("Nail technique names change every season, which makes this a maintenance job"),
        p("No other beauty service renames itself as quickly. Over the last few years the searched vocabulary has moved through gel and acrylic to dip powder, builder gel in a bottle, Russian and Japanese manicures, chrome, ombre and whatever is currently rising — and each of those is a term clients type, compare and judge a salon by. A salon still advertising a technique that peaked three years ago is not just missing searches; it reads as dated to the client it most wants."),
        p("The practical consequence is unusual for this kind of work: the technique pages are not a build, they are a standing task. Terms get added as they rise, pages get renamed or merged as they fall, and once or twice a year the whole set is reviewed against what people are actually searching. This is also the one part of nail salon SEO where a monthly arrangement genuinely earns its fee rather than filling time."),
        li("name every technique you do in the words clients use, including the ones you find imprecise;"),
        li("say what each one actually is, because half the clients searching cannot define it;"),
        li("give the price and how long it lasts, since that is the comparison being made;"),
        li("attach your own photographs to the technique rather than to a general gallery;"),
        li("and retire the pages for techniques you no longer offer instead of leaving them up."),

        h2("Walk-ins and «open now»: why hours matter more here than content"),
        p("Hair and beauty appointments are planned. A large share of nail business is not: somebody is in town, has forty minutes, and searches for a salon that is open and can take them. That makes this trade unusually dependent on two things that are not content at all — opening hours that are correct everywhere they appear, and a plain statement of whether you take walk-ins and when."),
        p("A salon that says «walk-ins welcome, usually a short wait before four on weekdays» answers the search better than a page of beautiful photographs, and a salon whose published hours are wrong loses the client permanently, because they walked to the door. Before writing anything else on a nail salon I check the hours in every place they are published, and in most cases at least one of them is wrong."),

        h3("Hygiene and tools: the question clients ask each other instead of asking you"),
        p("Among clients who have stopped going somewhere, the reason is often hygiene rather than the result, and the worry is specific: what happens to the files between clients, whether the tools are sterilised and how, whether a drill is used and by whom, what happens if a nail is damaged. Almost nobody searching will ask a salon this directly, and almost no salon answers it on the website."),
        p("A page that describes the practice plainly — single-use items, how reusable tools are processed, who is trained and in what — converts the cautious client, who is also usually the one who comes back every three weeks for years. Describe the practice rather than making claims about health or safety outcomes: what you do is verifiable, what it prevents is not, and the careful client is reassured by the first and suspicious of the second."),

        h3("The infill cycle makes rebooking schedulable rather than hopeful"),
        p("Gel and builder work needs attention every two to four weeks, which is the most predictable return cycle in the beauty trade. That changes what the website is for after the first visit: not persuasion, but making the next appointment the easiest thing in the client's week — the same technician shown by name, visible availability, a prepaid course of visits if you offer one, and a reminder timed to the technique rather than to a generic month."),
        p(
          "The map profile and local groundwork is on the ",
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
      title: "Portfolio: local businesses chosen on the phone within minutes",
      subtitle:
        "What these share with a nail salon: the client is nearby, the decision is fast, and the work was correct local data plus pages for specific services rather than bought links. A car service business, a landing page with editable SEO, a WordPress rebuild, a renovation and investment firm, and an education agency taken from one country to ten.",
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
      title: "An SEO audit for your nail salon",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Salon name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How do clients arrive?", options: ["Mostly walk-ins", "Mostly booked", "About half and half", "Regulars only"] },
        { _key: k("z"), question: "What do you want more of?", options: ["Regular infill clients", "Quiet weekday hours filled", "A specific technique", "Higher prices"] },
        { _key: k("z"), question: "Is it a salon or just nails?", options: ["Nails only", "Nails and lashes or brows", "Full beauty salon", "Home studio"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a client asks ChatGPT for a nail salon (GEO, AEO)"),
        p("«Is there a nail salon open now near me that does builder gel and takes walk-ins» is a question people now put to an assistant rather than a map, and it is almost entirely answered from facts: your hours, your location, the techniques you list and whether you take walk-ins. There is nothing to persuade anybody of — either the assistant has that data about you, current and consistent, or it names a salon nearby that does."),
        p(
          "Getting a site into that state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants state wrong hours, an old address or a technique you dropped, that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for nail salons: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a nail salon cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. This is one of the few trades where a monthly arrangement is genuinely justified rather than padding, because the technique vocabulary needs reviewing through the year — but only if the hours and the map profile are already right."],
          ["Is this different from SEO for a beauty salon?", "The structural work is the same and is covered on the beauty salon page: treatment pages, prices, the map profile, the booking path. What differs is that nail terminology changes every season, a large share of your clients walk in rather than book, hygiene is the unspoken deciding question, and the return visit comes on a two-to-four week cycle. Those four are what this page is about."],
          ["Why would technique names matter that much?", "Because clients search and compare by them, and they move fast. A salon advertising a technique that peaked three years ago misses the searches and looks behind the times to exactly the client it wants. The fix is to review the list once or twice a year rather than writing it once."],
          ["What is the first thing you would fix?", "The opening hours, in every place they appear. It sounds trivial and in this trade it is decisive, because a client who walked to a closed door does not come back. In most salons I look at, at least one published set of hours is wrong."],
          ["Should we write about hygiene? It feels defensive.", "It reads as confident rather than defensive, as long as it describes practice instead of making claims. Clients worry about this and ask each other rather than you, which means the salon that answers it in writing gets the cautious client — who is usually the one who then comes every three weeks for years."],
          ["Do we need a page for every technique?", "For the ones you want more of and the ones clients currently search for. Not for every variation on a price list. And retire the pages for things you no longer do, rather than leaving them to collect enquiries you have to turn down."],
          ["Is Instagram not where nail work gets seen?", "It is where your existing clients see it. Search reaches somebody standing two streets away who has never heard of you and wants to know if you are open. The two do different jobs, and the website is the one that answers the second."],
          ["How long before it shows?", "First movement after about a month and a half, growth on a three to six month horizon. Correcting hours and the map profile often shows faster than that, because it is a data fix rather than a ranking contest."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a nail salon: what to send me"),
        p("Send the site, say whether most clients walk in or book, and list the techniques you want more of. I reply within one working day with what is holding the site back — starting with whether your hours are right everywhere — which technique terms are missing or out of date, and what I would do first."),
      ],
    },
  ],
};
