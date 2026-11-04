// Landing page fixture: SEO for tattoo artists and studios (EN), group «tattoo-seo».
// NEW page — create-landing.cjs, root level like the other industry SEO pages.
//
// Why it exists (04.11.2026). Measured: «tattoo seo» 70. The paired WEBSITE
// page exists — /tattoo-website-design — so this page is about being found.
//
// SERP (checked 04.11.2026): LinkGraph, tattooshopseo.com, Digital Ink,
// Nerdy South, Stratedia-style agencies, seopital, tattoostudiopro, plus one
// Reddit thread in r/SEO. Unlike the photographer and artist SERPs, which were
// full of platform guides (searcher wants DIY advice), this one is full of
// agencies selling to the trade — including two single-niche operators. That
// means the searcher is the studio owner looking for a provider, so the page
// competes with agency pages and has to be more specific than theirs.
//
// The angles that make it specific, and that the agency pages on that SERP do
// not make: clients choose an ARTIST and a STYLE, not a shop, so a single
// «our artists» page cannot answer any real search; cover-ups and scar work
// are the highest-intent queries in the trade and almost nobody writes them
// up; and the three questions that decide the enquiry — walk-ins, waiting
// time, guest spots — are usually nowhere on the site.
import { p, h2, h3, li, link, k } from "./pt";

export const tattooSeoEn = {
  lang: "en",
  group: "tattoo-seo",
  slug: "seo-for-tattoo-artists",
  title: "SEO for Tattoo Artists and Studios",
  heading: "SEO for tattoo artists and studios: how a client who searches by style and city finds you",
  excerpt:
    "Clients do not search for a tattoo studio. They search for a style in a city, and for someone who can cover an old piece. Those searches are answered by a page about the artist and the style, not by one page listing the whole team. Audit from €250.",
  seo: {
    metaTitle: "Tattoo SEO — audit from €250",
    metaDescription:
      "SEO for tattoo artists and studios: pages per artist and style, cover-up searches, walk-ins and waiting lists, local pack and AI answers. Audit €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per artist and style", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Style plus city searches", "Cover-up and rework enquiries", "Waiting time stated up front", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a tattoo studio: site, Google profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: artist and style pages, local profile, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a tattoo studio", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a tattoo studio actually consists of",
      items: [
        { _key: k("o"), iconName: "users", title: "A page for every artist in the studio", text: "Their styles, their work, their waiting time" },
        { _key: k("o"), iconName: "pen-tool", title: "A page per style you want more of", text: "Fine line, blackwork, realism, lettering" },
        { _key: k("o"), iconName: "refresh-cw", title: "Cover-ups and reworks as their own page", text: "The highest-intent search in the trade" },
        { _key: k("o"), iconName: "map-pin", title: "The local pack and your Google profile", text: "Where a studio is actually chosen" },
        { _key: k("o"), iconName: "tag", title: "Minimum charge and hourly rate on the page", text: "Fewer enquiries, better ones" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Fine line artist in my city, books three months out»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("What a tattoo client actually types, and why one studio page cannot answer it"),
        p("Almost nobody searches for a tattoo studio by category. They search for a style in a place — fine line in a particular city, blackwork, realism, lettering, a specific traditional school — or they search for a problem, which is usually an old piece they want covered. The searcher has already decided what they want on their skin and is looking for the hand that can do it."),
        p("The standard studio site answers none of that. It has a home page, an «our artists» page with six names and six Instagram links, a prices page saying «from», and a contact form. One page cannot rank for eight different styles, and six artists sharing one page means a client searching for the one who does fine line is shown a page that is mostly about five people who do not."),

        h2("A page per artist and a page per style, because clients choose the hand, not the shop"),
        p("The unit of SEO in this trade is the artist and the style, not the studio. Each artist gets a page: the styles they actually work in, the pieces that show it, what they will and will not take on, how far out they are booked, and how to get on their list. Each style you want more of gets a page too, written so somebody who knows what they want can tell within a few seconds whether this is the right place."),
        li("name the styles the way clients name them, including the ones you find imprecise;"),
        li("say what each artist declines — it saves everyone the enquiry;"),
        li("state the waiting time and update it, because a stale «booking now» costs trust;"),
        li("link each piece of work to the artist and the style it belongs to;"),
        li("and keep healed photographs, not only fresh ones, since that is what a careful client looks for."),

        h3("Cover-ups and reworks: the highest-intent search in the trade, and almost nobody writes it up"),
        p("Somebody searching for a cover-up has a tattoo they regret and a budget ready. It is the most decided client who will ever contact a studio, and it is also the hardest work, which is exactly why it deserves its own page rather than a line in a FAQ. What that page needs is what the client cannot judge for themselves: what can realistically be covered and what cannot, how dark the new piece has to be, how many sessions it takes, whether laser fading first is the sensible route, and what it costs compared with a fresh piece of the same size."),
        p("The same applies to reworks and finishing other people's unfinished work. These searches are small in volume and large in value, there is rarely anyone competing for them, and the page that answers them honestly tends to bring the client who has been putting the decision off for three years."),
        p("One caution on adjacent work. If the studio also does scar or post-surgical camouflage, that text has to stay away from medical claims — describe the aesthetic result and the process, not healing, correction or anything resembling a medical outcome, and do not imply a clinical qualification the studio does not hold."),

        h2("Walk-ins, waiting time and guest spots: the three answers that decide the enquiry"),
        p("Three questions are asked constantly and answered on almost no studio site. Do you take walk-ins, and on which days. How long is the wait for each artist. Who is guesting, when, and how to book them. Each of these is a search in its own right — walk-in tattoo in a city is a large, urgent, local query — and each is also the reason a client writes or does not write."),
        p("Guest spots are worth their own treatment because they are time-bound: an artist visiting for a week has a name people already search for, and a page that goes up two days before they arrive catches nothing. Published three weeks ahead, with the dates and how to book, it catches the people searching that artist's name plus your city."),

        h2("The local pack and your Google profile, where a tattoo studio is usually chosen"),
        p("For a walk-in or a first consultation, most clients never reach a website. They look at the map results, the star rating, the photographs and the opening hours, and they go to one of the first three. That means the profile is not a side task — it is the main surface, and it needs the same discipline as the site: correct hours including the days you are closed, photographs of the studio and of healed work, services listed as clients name them, and replies to reviews in a voice that sounds like the shop."),
        p(
          "The groundwork for being found by city is on the ",
          link("local SEO page", "/services/local-seo-services"),
          ", and what the site itself should contain — artist pages, booking enquiries with references attached, aftercare — is on the ",
          link("tattoo studio website design page", "/tattoo-website-design"),
          ". If you want to know what is wrong before committing to anything, that is the ",
          link("SEO audit", "/services/seo-audit"),
          ".",
        ),

        h3("Publishing a minimum charge and an hourly rate, and what it does to your enquiries"),
        p("Most studios keep prices off the site to avoid scaring people, and get punished for it twice: the searcher who wants a sense of cost goes to a studio that states one, and the enquiries that do arrive are from people whose budget is a third of the piece they are describing. A minimum charge, an hourly or day rate, and a worked example of what a given size and style typically comes to will cut the volume of enquiries and raise the quality of them."),
        p("It also matters for a reason that has nothing to do with clients. A figure written on the page is something a search engine and an AI assistant can quote, and a studio that publishes nothing gets described by whatever a third-party directory guessed."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: local service businesses whose visibility I have run",
      subtitle:
        "What these share with a tattoo studio: the client is local, the decision is made on the phone within minutes, and the work was pages for specific services plus a strong local profile rather than bought links. A car service business, a landing page with editable SEO, a WordPress rebuild, a renovation and investment firm, and an education agency taken from one country to ten.",
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
      title: "An SEO audit for your tattoo studio",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Studio name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How many artists work in the studio?", options: ["Just me", "Two or three", "Four or more", "Plus guest artists"] },
        { _key: k("z"), question: "What do you want more of?", options: ["Large custom pieces", "Cover-ups and reworks", "Walk-ins", "A specific style"] },
        { _key: k("z"), question: "Where do clients come from now?", options: ["Instagram", "Walk-ins and word of mouth", "A directory", "Search already works a little"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a client asks ChatGPT for a tattoo artist (GEO, AEO)"),
        p("«Who does fine line work in my city and how far ahead do they book» is a question people now put to an assistant before opening a map, and it suits this trade well, because the client wants two or three names with reasons rather than sixty Instagram accounts. The assistant answers from text it can read, so the same things decide whether a studio is named: styles and artists written as text rather than left in the images, a minimum charge or rate it can quote, waiting times that are current, and the same name, address and hours across the site, the Google profile and the directories."),
        p(
          "Getting an existing site into a readable state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants describe the studio wrongly — an artist who left, old hours, a style nobody there works in — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for tattoo studios: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a tattoo studio cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. What moves the number is how many artists and styles need pages, whether the Google profile is in order, and whether the site can take new pages at all."],
          ["Isn't Instagram enough for a tattoo studio?", "It is the portfolio and it is where regulars follow you, but it reaches people already looking at tattoos. Search reaches someone who decided last night that they want an old piece covered and has never heard of your shop. The two do different jobs, and the studio that only has the feed is invisible to the second person."],
          ["Why does each artist need a page? They all have Instagram.", "Because a client searches for a style, and your artists work in different ones. A single page with six names cannot rank for any of those searches, and an Instagram profile sends the client to a platform that decides what they see next. An artist page is the only surface you control that answers the search directly."],
          ["Should I put prices on the site?", "A minimum charge and an hourly or day rate, yes. It reduces the number of enquiries and improves them, it is what clients compare before writing, and it gives search engines and AI assistants a figure to quote instead of one a directory invented."],
          ["Can you get me ranked for cover-ups?", "Usually, because almost nobody writes that page properly — which is odd, since it brings the most decided client in the trade. What I cannot do is promise a position; what I can do is write the page that answers what the client cannot judge alone and put it where it gets found."],
          ["Do reviews matter for the ranking?", "For the map results they matter a great deal, together with the photographs and whether your hours are right. A studio with sixty reviews and no replies usually does worse than one with thirty and a human voice in the answers."],
          ["How long before it brings clients?", "First movement after about a month and a half, growth on a three to six month horizon. Walk-in and local searches tend to move first because the map results respond faster than the main listings; style searches take longer because the pages have to mature."],
          ["Who writes the artist and style pages?", "I draft them and each artist corrects their own. What makes these pages work is what only the artist knows — what they decline, how they price, what a piece that size really takes — and a client reading it can tell at once whether a practitioner wrote it or a marketer did."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a tattoo studio: what to send me"),
        p("Send the site, list the artists and the styles each of them actually works in, and say what you want more of — large custom pieces, cover-ups, walk-ins, or one particular style. I reply within one working day with what is holding the site back, what your Google profile is missing, and what I would do first, including which style pages are not worth writing because nobody in your city searches for them."),
      ],
    },
  ],
};
