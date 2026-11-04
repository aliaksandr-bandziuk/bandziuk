// Landing page fixture: SEO for musicians, bands and DJs (EN), group
// «musician-seo». NEW page — create-landing.cjs, root level like the other
// industry SEO pages (/seo-for-coaches, /gym-seo, /seo-for-chiropractors).
//
// Why it exists (04.11.2026). Measured: «musician seo» 340 + «band seo» 60.
// The paired WEBSITE page already exists — /band-website-design covers bands,
// musicians and DJs (EPK, tour dates, players, merch, booking) and holds
// «musician website» 40 610, «band website» 4810, «musician web design» 1140.
// The gap is the promotion form only, exactly as it was for coaches.
//
// SERP (checked 04.11.2026): bandzoogle, bandsintown, unhurdmusic, noiseyard,
// candsmusic, ethanlazuk, Reddit — guides for musicians published by the
// platforms musicians already pay. No service providers in the top. So this
// page is not written to win the head term; it is written for the long tail
// and for the people who arrive by name, and it says plainly where Google is
// not the right instrument at all.
//
// EN only, measured: no PL or RU row for any musician form in the core.
//
// The honest framing that makes the page worth reading: most of a musician's
// discovery does not happen in Google. It happens in Spotify and YouTube
// search, which this page does not sell and says so. Google decides the
// commercial half — bookings, press, merch and who owns the name search — and
// that half is winnable.
import { p, h2, h3, li, link, k } from "./pt";

export const musicianSeoEn = {
  lang: "en",
  group: "musician-seo",
  slug: "seo-for-musicians",
  title: "SEO for Musicians, Bands and DJs",
  heading: "SEO for musicians: how a band gets found by the people who book, write about and buy from it",
  excerpt:
    "Most of a musician's discovery happens inside Spotify and YouTube, not Google — and I will say so rather than sell you the wrong thing. Google decides the other half: who owns your name in search, whether bookers find you, and whether an assistant recommends you. Audit from €250.",
  seo: {
    metaTitle: "Music SEO for bands and DJs — from €250",
    metaDescription:
      "SEO for musicians, bands and DJs: owning your name in search, being found by bookers, EPK and press pages, and AI answers. Audit €250, ongoing €800/month.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Own your name in search", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Jazz trio for a corporate event", "Wedding band in your city", "EPK a booker can actually open", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a musician, band or DJ: site, name search and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: name search, booking pages, EPK, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a musician or band", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for a musician, band or DJ actually consists of",
      items: [
        { _key: k("o"), iconName: "search", title: "Owning your own name in search", text: "Your site above the aggregators and lyric farms" },
        { _key: k("o"), iconName: "calendar", title: "Pages for the work you are hired for", text: "Weddings, corporate, clubs, sessions, teaching" },
        { _key: k("o"), iconName: "file-text", title: "An EPK a booker can open and quote", text: "Text and figures, not a PDF behind a form" },
        { _key: k("o"), iconName: "map-pin", title: "Local search where you actually play", text: "City pages only where you take the gig" },
        { _key: k("o"), iconName: "music", title: "Releases findable after the hype week", text: "Album and track pages that keep working" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«A jazz trio for a wedding in Warsaw»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Where Google helps a musician and where it does not"),
        p("Start with the part most SEO pages for musicians leave out. If your goal is more listeners, Google is not the main instrument: discovery of music happens inside Spotify, YouTube and TikTok search, and the work there is metadata, playlists and release strategy, which is a different job from this one. Hiring me to do Google SEO for streaming numbers would be selling you the wrong thing."),
        p("Google decides a different half, and it is the half that pays. Who gets booked for the wedding, the corporate night, the festival slot. Who is found by the journalist writing about the scene. Who owns the first screen when somebody hears a track in a bar, remembers the name and searches it. That half is winnable by a site you control, and it is what this page is about."),

        h2("Owning your own name in search is the first job for a band or DJ"),
        p("Search your act's name and look at what you get. For a great many musicians the first screen is Spotify, Apple Music, a lyrics site, a YouTube auto-channel, a Discogs entry and a Bandcamp page — all describing them, none of them theirs, and not one with a booking contact on it. The person searching has already decided they are interested; they just cannot find you, only your distribution."),
        p("Fixing it is unglamorous and quick: one canonical site that states who you are in text, the same act name spelled identically everywhere, the links that tie the profiles together, and structured data that lets a search engine understand this is a musical act with these releases and these upcoming dates. The site does not have to outrank Spotify. It has to be on that first screen with the one thing Spotify does not carry — how to hire you."),
        li("spell the act name identically on every profile, including capitalisation;"),
        li("put a booking contact in text, not inside an image or a contact form only;"),
        li("link your profiles from the site and the site from your profiles;"),
        li("mark up releases and dates so an assistant can read them;"),
        li("and claim the name in the directories that already outrank you."),

        h2("Pages for the work you are hired for, not for the music you make"),
        p("A booker does not search for your genre; they search for the occasion. A wedding in a particular city, a corporate event, a club night of a certain style, a session player on a certain instrument, a teacher for a certain level. Each of those is a page, and each page answers what that buyer needs to know before writing: what the set looks like, how long it runs, what the line-up and equipment are, what it costs or starts at, and how far you travel."),
        p("This is also where the local half belongs and where it should stop. A city page is worth having for a city you actually take work in and worth nothing for a city you would decline — the measured experience on this site is that a page for a place where the service is not really delivered settles in the fifties and stays there."),
        p(
          "What the site itself needs — EPK, tour dates, players, merch — is a different job, described on the ",
          link("band and musician website page", "/band-website-design"),
          ". Where you take work in one city in particular, the groundwork is on the ",
          link("local SEO page", "/services/local-seo-services"),
          ".",
        ),

        h3("Why the guides written by music platforms stop where they do"),
        p("Most advice about music SEO is published by the platforms musicians already pay — hosting, distribution, booking tools. It is usually accurate and it stops at the same place every time: optimise your titles, write your show notes, fill in your metadata. That is the part of the work that happens inside their product, which is why it ends there. What follows — competing for the booking query, owning the name search, keeping a release findable after the hype week — happens on a site they do not host, so nobody writing those guides has a reason to explain it."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: sites where the visitor arrives to listen, read or book",
      subtitle:
        "What these have in common with a musical act: a personal brand is the product, the visitor checks before making contact, and growth came from structure and content rather than bought links. A DJ and producer's official site, a retail-analytics consultant, an education agency taken from one country to ten, a personal site built and optimised from scratch, and a multilingual site for student services.",
      picks: [
        "consultant-website-design-retail-analytics",
        "develop-and-optimize-a-personal-website-with-seo",
        "seo-case-study-education-agency",
        "proscore-agency-website-development",
        "full-multilingual-website-development-and-seo-for-student-services",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "An SEO audit for your band, act or DJ name",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Act name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What are you?", options: ["Band", "Solo musician", "DJ or producer", "Session or teaching work"] },
        { _key: k("z"), question: "Where does the money come from?", options: ["Live bookings", "Private events", "Streaming and releases", "Teaching"] },
        { _key: k("z"), question: "What happens when someone searches your name?", options: ["My site is first", "Spotify is first", "Something else is first", "I have never checked"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when someone asks ChatGPT for a band or DJ (GEO, AEO)"),
        p("«Find me a jazz trio for a wedding in Warsaw in June» is a question people now put to an assistant before they open a search engine, and private-event buyers are especially likely to ask, because they are not from the music world and want a shortlist rather than forty profiles. The assistant answers from text it can read and from sources that agree with each other, so three things decide whether an act is named: the occasions, line-up and area written as text rather than shown in a poster image, a price or a starting figure it can quote, and the same act name and contact on the site, the profiles and the directories bookers use."),
        p(
          "Getting an existing site into a readable state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants describe the act wrongly — an old line-up, a member who left, a genre you no longer play — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for musicians: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for a musician or band cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. What moves the number is how many kinds of work you take, how many cities you genuinely play, and how tangled the name situation is across profiles and directories."],
          ["Will this get me more streams?", "Not directly, and I would rather say that than take the work. Streams come from discovery inside the streaming platforms and from placement, which is a different discipline. This work gets you found by people who want to hire, book, interview or buy from you, and by anyone who heard a track and searched your name afterwards."],
          ["Spotify ranks above my site for my own name. Can that be changed?", "The goal is not to outrank Spotify — it usually cannot be done and does not need to be. The goal is to be on that first screen with the thing Spotify does not carry, which is how to contact and hire you. For most acts that is achievable in weeks, because the competition for your own name is thin by definition."],
          ["I play in several cities. Should I have a page for each?", "Only for the ones where you actually take the work. A page for a city you would decline settles in the fifties and stays there — that is measured, not a guess. Two or three real cities beat fifteen aspirational ones."],
          ["Does any of this matter for a DJ as opposed to a band?", "The name-search half is identical. The booking half differs: DJs are hired for the occasion and the room more than for a repertoire, so the pages are built around event types and formats rather than around a setlist."],
          ["How long before a booker finds me?", "First movement after about a month and a half, steadier growth on a three to six month horizon. Name-search work often shows first because the competition for your own name is weakest."],
          ["Can you guarantee a position?", "No, and nobody honest can — the ranking is decided by a system neither of us controls. What I can state is what will be changed, in what order, and what we measure at one month and at three."],
          ["Who writes the text?", "I do, and you correct it. Everything that makes an act specific — the line-up, the repertoire, what a night with you actually sounds like — has to come from you, because it cannot be researched from outside the band."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for a musician or band: what to send me"),
        p("Send the site and the act name, say what kind of work actually pays — live bookings, private events, teaching, sessions — and which cities you genuinely travel to. I reply within one working day with what comes up when I search your name, what is holding the site back, and what I would do first. If the honest answer is that your problem is streaming discovery rather than search, I will say so and point you at the right kind of help instead."),
      ],
    },
  ],
};
