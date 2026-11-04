// Landing page fixture: SEO for photographers (EN), group «photographer-seo».
// NEW page — create-landing.cjs, root level like the other industry SEO pages.
//
// Why it exists (04.11.2026). Measured: «photographer seo» 2090 +
// «wedding photographer seo» 440. The paired WEBSITE page already exists —
// /photographer-website (portfolios by genre, fast galleries, packages with
// prices, availability enquiries, private delivery galleries) and holds
// «photographer website» 3880 and «photographer web design» 1040.
//
// Unlike the three previous pages in this batch, this one is NOT EN-only:
// Polish has «seo dla fotografa» 50 with no page, which clears the owner's
// 5/month threshold, so photographer-seo.pl.ts exists too. Russian has only
// the website form («сайт для фотографа» 1010) and that page exists.
//
// SERP (checked 04.11.2026): Format, Squarespace, Pixieset, Showit designers,
// Reddit, YouTube guides — DIY advice published by the platforms photographers
// already host on. One niche agency (Photography to Profits). So the head term
// is guide territory and the page is written for the queries that actually
// produce a booking: genre + place + date, and venue names.
//
// Wedding photography is a SECTION here, not a page: «wedding photographer
// seo» 440 is the same work with a longer booking horizon, and the paired
// website page already covers wedding as a genre.
//
// The tactic that makes this page worth reading and that no platform guide
// explains: venue pages. A photographer who has shot at a venue can own the
// search for that venue's name, which is the single highest-intent query in
// the profession — the couple has already booked the place.
import { p, h2, h3, li, link, k } from "./pt";

export const photographerSeoEn = {
  lang: "en",
  group: "photographer-seo",
  slug: "seo-for-photographers",
  title: "SEO for Photographers and Wedding Photographers",
  heading: "SEO for photographers: how a photographer gets found by the client who already picked the date and the place",
  excerpt:
    "A search engine cannot tell a good photograph from a bad one, which is why the best portfolio in the city can be invisible. What it reads is the text around the pictures, the genre, the place and the venue. Audit from €250, and I say which pages are not worth writing.",
  seo: {
    metaTitle: "Photographer SEO — audit from €250",
    metaDescription:
      "SEO for photographers and wedding photographers: genre and location pages, venue names, gallery speed, pricing and AI answers. Audit €250, ongoing €800/month.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Genre, place and venue pages", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Wedding photographer at a named venue", "Newborn photographer in your district", "Packages with prices", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a photographer: site, galleries, local profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: genre and venue pages, gallery speed, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a photography business", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a photographer actually consists of",
      items: [
        { _key: k("o"), iconName: "camera", title: "A page per genre you want more of", text: "Weddings, newborn, brand, product, events" },
        { _key: k("o"), iconName: "map-pin", title: "Venue and location pages", text: "The places you have actually shot at" },
        { _key: k("o"), iconName: "zap", title: "Galleries that do not sink the site", text: "Full quality without a ten-second load" },
        { _key: k("o"), iconName: "tag", title: "Packages with figures on the page", text: "A starting price instead of an enquiry form" },
        { _key: k("o"), iconName: "calendar", title: "Published ahead of the booking season", text: "Couples book twelve to eighteen months out" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«A documentary wedding photographer near me»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Why the best portfolio in the city can be invisible in search"),
        p("A search engine cannot see your photographs. It cannot tell a beautifully lit ceremony from a snapshot, and no amount of talent changes that. What it can read is the text around the pictures: the headings, the descriptions, the file names, the alt text, the page addresses. A portfolio of four hundred untitled JPEGs in a slider is, to a search engine, an empty page that takes nine seconds to load."),
        p("This is why photographers who are plainly better than their competitors sit below them in the results, and it is also good news, because the gap is closed with writing rather than with equipment. The photographer who describes the wedding — the venue, the season, the light, how the day ran — gets found for the searches the photographs themselves can never answer."),

        h2("Genre, place and date: the three things a photography client searches with"),
        p("Nobody searches for «photographer». They search for a genre and a place, usually with a date implied: a wedding photographer in a particular city, a newborn session in a district, a brand shoot for a product launch, a graduation in a particular month. Each genre you want more of is a page, and each page says what that session involves, how long it takes, how many images are delivered and when, and what it costs."),
        p("Each genre also belongs to a different buyer with a different anxiety. A couple is afraid of hiring the wrong person for a day that cannot be repeated. A parent of a newborn is afraid of the baby crying for two hours. A brand manager is afraid of missing a launch date. The page that names the fear books the session."),
        li("one page per genre you want more of, not one page listing all of them;"),
        li("say how the session runs, hour by hour, so the buyer can picture it;"),
        li("state delivery: how many images, in what time, in what format;"),
        li("put a starting price on the page;"),
        li("and leave out genres you take reluctantly — they bring the enquiries you dislike."),

        h2("Venue pages: the highest-intent query in the profession"),
        p("This is the tactic the platform guides never explain, and it is the strongest one photographers have. Someone who searches a venue name together with «photographer» has already booked the venue. The date is fixed, the budget is set, and they are looking for somebody who knows the building — where the light falls at four in the afternoon, which corner works when it rains, where the registrar stands."),
        p("A photographer who has shot at a venue can own that search, because almost nobody competes for it: the venue itself writes nothing, and other photographers post the gallery to Instagram and move on. A page per venue, with the photographs you took there, what the light does through the day, the practical constraints and the timings that worked, is both the most useful page on the site for a couple and the easiest one to rank."),
        li("one page per venue you have genuinely shot at, named exactly as the venue names itself;"),
        li("write what you learned about the place, not a gallery caption;"),
        li("include the practical details a couple cannot find elsewhere;"),
        li("and check with the venue before using their name prominently — many will link back."),

        h3("Why blogging every wedding does not rank, and what to publish instead"),
        p("The standard recommendation in photography circles is to blog every single wedding. As a content habit it is sound: it produces text, images and venue names regularly. As an SEO plan it produces two hundred near-identical posts titled with two first names, which compete with each other and rank for nothing, and the practice has a name in search — thin pages."),
        p("The version that works keeps the habit and changes the shape. The gallery post stays as a gallery post for the clients and for social media. The searchable material inside it — the venue, the season, the style, the logistics — is lifted into pages built around those things, where one strong venue page replaces eleven weak ones that happened to be shot at the same place."),

        h3("Gallery speed: why a photography site loses the booking before the first image appears"),
        p("Photography sites are the slowest sites I audit, for an obvious reason: the product is large images and the owner is unwilling to compromise on quality. The compromise is not necessary — modern formats and correct sizing keep full visual quality at a fraction of the weight — but the default setup of most portfolio templates does none of it, and a gallery that takes nine seconds on a phone loses the booking before the first frame appears."),
        p(
          "That part overlaps with the ",
          link("performance and code audit", "/services/website-performance-and-code-audit"),
          ", and the structure of the site itself — portfolios by genre, private delivery galleries, packages — is on the ",
          link("photographer website page", "/photographer-website"),
          ". Where you work in one city in particular, the groundwork is the ",
          link("local SEO page", "/services/local-seo-services"),
          ".",
        ),

        h2("SEO for wedding photographers: the same work on a longer horizon"),
        p("Wedding photography is the same discipline with one difference that changes the schedule: couples book twelve to eighteen months ahead. Content published in the spring is not competing for this summer's weddings — it is competing for next year's, and a page that goes live in March for a season that is already booked has missed by a year rather than by a month."),
        p("The practical consequence is that venue and season pages are written in the quiet months and left to mature, and the measurement window stretches accordingly: first movement in about six weeks, bookings on a horizon that follows the couple's planning cycle rather than the search engine's. A wedding photographer who starts this work in peak season should expect the return a season later, and anyone promising otherwise is selling the calendar they do not control."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: sites where the work is judged before anyone writes",
      subtitle:
        "What these have in common with a photography business: the portfolio is the product, the visitor decides from the site alone, and the growth came from structure and content rather than bought links. A retail-analytics consultant, a personal site built and optimised from scratch, an education agency taken from one country to ten, a digital agency site, and a multilingual site for student services.",
      picks: [
        "develop-and-optimize-a-personal-website-with-seo",
        "consultant-website-design-retail-analytics",
        "seo-case-study-education-agency",
        "proscore-agency-website-development",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your photography site",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Your name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you shoot most?", options: ["Weddings", "Family and newborn", "Brand and product", "A mix"] },
        { _key: k("z"), question: "Where do bookings come from now?", options: ["Instagram", "Referrals", "A directory or platform", "Search already works a little"] },
        { _key: k("z"), question: "What is the site built on?", options: ["A portfolio platform", "WordPress", "Something custom", "Not sure"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a client asks ChatGPT for a photographer (GEO, AEO)"),
        p("«Find me a documentary-style wedding photographer near Kraków for next September» is a question people now put to an assistant before they open a search engine, and photography suits it unusually well, because the buyer wants a shortlist with reasons rather than forty Instagram accounts to scroll. The assistant answers from text it can read and from sources that agree with each other, so three things decide whether a photographer is named: the genre, style and area written as text rather than left to the images, a price or a starting figure it can quote, and the same name, service wording and contact across the site, the profile and the directories couples use."),
        p(
          "Getting an existing site into a readable state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants describe the work wrongly — a style you left behind, a city you no longer cover — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for photographers: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a photographer cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. What moves the number is how many genres you want pages for, how many venues are worth writing up, and whether the portfolio platform lets text and page addresses be edited at all."],
          ["My photographs are better than my competitors'. Why do they rank above me?", "Because a search engine cannot see photographs. It reads text, and if your competitor wrote two paragraphs about the venue while you posted a gallery with no words, the competitor answered a question you did not. The gap closes with writing, not with better work."],
          ["Should I really blog every wedding?", "Keep the habit, change the shape. Gallery posts are good for clients and social media and poor for search, because two hundred posts titled with two first names compete with each other. The searchable material inside them — venue, season, style, logistics — belongs in pages built around those things."],
          ["Does Instagram not do this job already?", "It does a different one. Instagram shows your work to people already following photography; search reaches a couple who booked a venue last week and has never heard of you. Most photographers need both, and the common mistake is treating the website as an afterthought to the feed."],
          ["My site is on a portfolio platform. Can you work with it?", "Usually yes, if pages can be added and headings and addresses edited. Some portfolio platforms lock all three, and then SEO work on them is paying rent. I check which case it is before quoting rather than after."],
          ["How long before I see bookings?", "First movement after about a month and a half, growth on a three to six month horizon. For weddings, add the booking cycle: couples book twelve to eighteen months out, so work started in peak season returns a season later. I would rather say that now than explain it in July."],
          ["Can you guarantee a position?", "No, and nobody honest can — the ranking is decided by a system neither of us controls. What I can state is what will be changed, in what order, and what we measure at one month and at three."],
          ["Who writes the venue pages?", "I draft and you correct. What makes a venue page useful is what only the photographer knows — where the light is at four, what happens when it rains, how long the walk from the ceremony takes — and that cannot be researched from outside the job."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a photography business: what to send me"),
        p("Send the site, say which genres you want more of and which you would rather drop, and list the venues you have shot at more than once. I reply within one working day with what is holding the site back, how slowly the galleries actually load on a phone, and what I would do first — including which genre pages are not worth writing because nobody in your area searches for them."),
      ],
    },
  ],
};
