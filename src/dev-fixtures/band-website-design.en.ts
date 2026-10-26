// Landing page fixture: Band website design (EN), group «band-website-design».
// New page.
// Semantic core: ref/creative-leisure.md, bands / musicians / djs (US):
// music band website 1,000 (mixed SERP; H2 on the first screen, intro) · band
// website design 170 + website design for bands 170 (H1, H2s, cost H2, FAQ,
// metaTitle) · dj website / website for dj / website of dj 2,900 each (mixed:
// DJ tools, download sites) → one H2 for DJs · music artist website design 40
// (intro, embeds H2) · seo for musicians 170 (brief) → one H2. Builders
// («bandzoogle» 14,800) → templates H2 and FAQ, not targeted as a brand.
// Intent: ref/intent-check-creative-leisure.md — «website for bands» vs «band
// website design» 1 shared URL (Bandzoogle list): «website for bands» =
// builders (Wix, Bandzoogle, cybernews, sitebuilderreport) → DIY demand; our
// page answers with when a builder is enough and when a custom site pays off.
// «seo for musicians» vs «band website design» 1 shared (YouTube) → music
// marketing blogs (Soundfly, Sonicbids, Symphonic, Ditto) → only one H2 here.
// «website for djs» vs «dj website design» 0 shared: the first is DJ tools and
// pools (Beatport, Mixcloud, dj.app) → not targeted; DJ design = one H2.
// Angles: home page for fans, promoters and press; tour dates from Bandsintown
// or Songkick; light music embeds; release pages; EPK with stage plot and
// rider; merch (Bandcamp, Shopify, print-on-demand); mailing list as owned
// fan list; booking form; event bands vs club shows; DJ section; AI-readable
// build; builders vs custom; cost.
// NOT on this page: visual artists (/artist-website-design, linked once);
// streaming promotion, playlist pitching, ads, social media management; DJ
// software and free download sites (consumer intent); ongoing SEO campaigns
// (general SEO and local SEO pages, linked in the SEO H2).
// Portfolio: Sasha Dith — the direct case (DJ and producer, Next.js 14 from
// Figma, discography grid, booking form, under one second); Landi Room (paid
// video after Stripe Checkout → selling a masterclass or concert film); the
// retail analytics consultant (personal brand, three languages, video);
// Giuseppe (one-name practice, pages in ChatGPT answers); Cyprus VIP Estates
// (five languages, video, catalog → touring abroad, release archive).
// Owner’s rules: every page covers AI search; design is included in the
// price; never say there are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const bandWebsiteDesignEn = {
  lang: "en",
  group: "band-website-design",
  slug: "band-website-design",
  title: "Band website design for bands, musicians and DJs",
  heading: "Band Website Design for Bands, Musicians and DJs",
  excerpt:
    "Band website design and build from one person: tour dates that update themselves, music players that keep the page fast, an EPK promoters can use, merch, a mailing list you own and a booking form that asks the right questions.",
  seo: {
    metaTitle: "Music Band Website Design and Build | Bandziuk",
    metaDescription:
      "Band website design with the build included: tour dates from Bandsintown, fast music embeds, EPK and rider, merch, mailing list, booking form. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Tour dates, EPK, merch, mailing list"],
  heroPhonePoints: ["Next shows and tickets", "Play the new single", "Join the mailing list", "Booking and EPK"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple band or musician website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Band website with release pages, tour archive, EPK, merch store connection, booking forms, a DJ or event section and language versions, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with band website design",
      items: [
        { _key: k("o"), iconName: "image", title: "A look taken from your current record", text: "Cover art and colors, swapped with each release" },
        { _key: k("o"), iconName: "layers", title: "Tour dates fed from Bandsintown", text: "Add a show once, past dates go to the archive" },
        { _key: k("o"), iconName: "gauge", title: "Music players that keep the page fast", text: "Spotify, Bandcamp and YouTube load on tap" },
        { _key: k("o"), iconName: "file-text", title: "An EPK page bookers can use", text: "Bio, press photos, stage plot and rider" },
        { _key: k("o"), iconName: "message-circle", title: "Mailing list and booking form", text: "Fans by city, gig requests with date and budget" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and AI assistants", text: "Genre, city, shows and releases as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple band or musician website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Releases, EPK, merch, booking, DJ section, languages", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: a DJ and producer’s official website and other artist-led sites",
      subtitle:
        "First, the official website of DJ and producer Sasha Dith: built from scratch on Next.js 14, pixel-perfect from his Figma design, with a video gallery, a discography grid with streaming links and a booking form for events and collaborations — it replaced slow builder pages and loads in under one second. Next to it, sites that share other parts of a band’s job: paid video delivered by a private link after checkout, a personal brand with courses and video in three languages, a practice run under one name whose new pages appear in ChatGPT answers, and a catalog with video in five languages.",
      picks: [
        "official-website-for-dj-and-producer-sasha-dith",
        "e-commerce-landing-page-with-secured-video-access",
        "consultant-website-design-retail-analytics",
        "psychotherapist-website-milan",
        "build-and-optimize-a-multilingual-real-estate-platform",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your band website",
      subtitle: "Within one business day you get a page plan for your band — shows, music, EPK, merch, booking — and a fixed price.",
      contextLabel: "Band or artist name, Spotify or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["Only Spotify and Instagram", "Bandzoogle, Wix or Squarespace", "A link-in-bio page", "An older WordPress site"] },
        { _key: k("z"), question: "Who should the site serve first?", options: ["Fans: shows, music, merch", "Promoters and press: EPK", "Wedding and corporate clients", "DJ bookings"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Band website design is the service on this page: I design and build websites for bands, solo musicians and DJs myself, so the person who picks your typeface is the one who connects your tour dates, players and mailing list. A music band website has a short list of jobs — tell a new listener who you are in seconds, show where you play next, play a track, collect an email address and give promoters what they need to book you."),

        h2("Band website design: what fans, promoters and press check first"),
        p("Three kinds of visitors open a band’s site, each with a different question. A fan who just heard you at a festival wants the next show and a song. A promoter or talent buyer wants live video, a sense of your draw and a contact. A journalist or blogger wants a bio, photos and a quote they can use. The home page serves all three without making anyone dig:"),
        li("one band photo or the current cover art at full width, with the name as real text rather than part of the image"),
        li("the next three shows with ticket buttons"),
        li("a player with the latest release"),
        li("an email sign-up and clear links to the EPK and booking"),
        p("The visual identity follows the record. The hero image and the accent color are fields in the editor, so the site changes with every album cycle without a redesign."),

        h2("Tour dates on a band website: one list fed from Bandsintown or Songkick"),
        p("The shows page is the one fans open most and the one that goes stale fastest. Many artists already list dates on Bandsintown or Songkick, because those services pass them on to streaming apps and social profiles. The website reads from the same source, so a show added once appears everywhere. Each date shows the city, venue, support acts and a ticket link straight to the seller; sold-out and canceled shows are marked, and past dates move to an archive by themselves."),
        p("That archive matters too. A promoter in a new city looks at where you have played and how often. Event structured data on every upcoming show also helps Google show your dates directly in search results."),

        h2("Music embeds on a musician website: Spotify, Bandcamp, Apple Music and YouTube"),
        p("A player is the fastest argument a band has, and the heaviest element on the page: one Spotify or YouTube embed loads more code than the rest of the site combined. On my builds the player first appears as a light preview — cover art and a play button — and the real embed loads only when someone taps it. The page still opens quickly on a phone with one bar of signal in a crowded venue. Sasha Dith’s site works this way: its YouTube videos and players load only when needed, and the page opens in under one second."),
        p("Every release gets its own page: cover, tracklist, credits, lyrics if you want them, links to each streaming service, a buy link to Bandcamp or the vinyl, and the videos. The overview is a grid of covers, each with its streaming links, like the discography on Sasha’s site. A release page is also what a blog, a radio host or a playlist curator links to when they write about the record."),

        h2("EPK page on a band website: bio, press photos, stage plot and rider"),
        p("An electronic press kit is what a booker opens before replying. As a page on your own site it stays current, unlike the PDF you emailed last spring. It holds:"),
        li("a short and a long bio in the third person, ready to copy"),
        li("high-resolution press photos with the photographer’s credit, downloadable in one click"),
        li("two or three live videos and the strongest tracks"),
        li("press quotes and notable shows or festivals — real ones only"),
        li("stage plot, input list and technical rider as files"),
        li("contacts for booking, management, label and press"),
        p("The EPK can be public or sit at an address you send only to industry contacts."),

        h2("Merch store on a band website: Bandcamp, Shopify or print-on-demand"),
        p("For many independent acts merch brings in more than streams. Three setups are common, and the site works with any of them:"),
        li("Bandcamp for records and a few shirts, linked from the release pages"),
        li("a Shopify store with buy buttons placed inside your own pages, for a larger catalog and your own checkout"),
        li("a print-on-demand service that prints and ships each order, when you would rather not store boxes in the rehearsal room"),
        p("The website shows the products in your design and hands the fan over to checkout. Tour-only items can appear on the page of the show where they are sold."),
        p("Video can be merch too: a recorded masterclass, a concert film or a backstage cut. Stripe Checkout takes the payment and the buyer gets a personal viewing link automatically. On the Landi Room course page I built, each link stops working after 14 days and the file stays stream-only; more than 100 courses sold, and nobody has passed access on."),

        h2("Mailing list on a band website: owning your fan list instead of renting it"),
        p("Followers on Spotify, Instagram and TikTok belong to those platforms. When the algorithm changes or an account is locked, the way to reach those people goes with it. An email list is the one channel you own: you can move it to another provider and write to every fan on release day."),
        p("So the sign-up box appears on every page, not only in the footer, and asks for an email and a city. The city lets you write only to fans near a new date instead of the whole list. It connects to Mailchimp, Kit or the service you already use. A small reason to join — an unreleased demo, a presale code — works better than “subscribe to our newsletter”."),

        h2("Booking form on a band or musician website: date, city, venue and budget"),
        p("A request that says only “how much?” costs both sides a day of messages. A short form asks for what you need to answer: date, city, type of event — club show, festival, wedding, corporate party — venue capacity, set length, whether sound and backline are provided, and a budget range. Requests go to you or your agent, with a copy to the sender. On Sasha Dith’s site the form for events and collaborations sits over a concert photo, so it reads as part of the show rather than an office contact page. Wedding and corporate bands get a separate page with song lists, set formats and what the fee covers, because those clients ask different questions than club promoters."),

        h2("DJ website design: mixes, booking, rider and EPK for DJs"),
        p("Sasha Dith, a DJ and producer, shows how this works: his official site, built on Next.js 14 to match his Figma design, has About, Video Gallery, Music and Contact sections and gives fans, media and booking agents one address instead of scattered profiles."),
        p("A DJ website follows the same logic as a band site with a different weight. The music is mixes rather than releases: a SoundCloud or Mixcloud player, recent mixes and radio shows, sometimes a recorded set on video. Club DJs need a gig calendar and an EPK listing residencies and the clubs and festivals they have played. Event DJs need packages — hours, sound system, lighting, MC duties — a calendar of booked dates and a form that asks for the venue and guest count."),
        p("The rider lives on the site too: decks and mixer models, booth monitors, set-up time. If your work splits between clubs and private events, one site serves both with two clear entry points from the home page."),

        h2("SEO for musicians: how a band website gets found on Google"),
        p("Most searches for a band are for its name, a release or “band name tour”, and you want your own site above ticket resellers and lyric pages. That takes a clear title and description, links back from Spotify, YouTube, Instagram and Bandsintown, and structured data for the group, events and albums. Bands for hire live in a different search: someone types “wedding band Chicago” or “party band for a corporate event”, and pages per service and region, a Google Business Profile and reviews decide who appears."),
        p(
          "That ongoing work is described on the ",
          link("SEO strategy", "/services/seo-optimization-and-strategy"),
          " page, and the map and region part on ",
          link("local SEO services", "/services/local-seo-services"),
          ".",
        ),

        h2("Bandzoogle, Wix or a custom website design for bands"),
        p("Bandzoogle, Squarespace and Wix give a working musician website in an afternoon, with tour widgets, a store and email tools included. For a band with one release and a handful of shows that is a sensible choice, and I will tell you if it fits your stage."),
        p("A custom site pays off when the template no longer matches your record, when the site carries many releases, a long show archive or several languages for touring abroad, when club shows and private bookings run side by side, or when monthly plan upgrades add up. Before leaving a builder, export the mailing list and collect the addresses fans and press link to, so each one gets a redirect."),

        h2("A band website that ChatGPT and Google AI Overviews can read"),
        p("Fans and bookers now ask assistants things like “an indie folk band from Portland touring this spring” or “a jazz trio for a wedding in Denver”. An assistant can name only the band it has read about. The build serves pages as HTML from the server instead of assembling them with scripts, writes genre, home city, members, releases, upcoming shows and the booking contact as text, adds structured data for the group, events and albums, and lists in robots.txt the AI crawlers allowed in. Giuseppe’s site, a psychotherapy practice in Milan, was built the same way, and ChatGPT already cites the pages he added after launch."),
        p(
          "Ongoing work on those answers is covered on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much band website design costs"),
        p("Design is not billed separately; the figures below cover both the look and the build."),
        li("A simple band or musician website — home, shows, music, about, EPK, contact and mailing list sign-up: 700–1,400 €."),
        li("A full site with release pages, a show archive, merch store connection, booking forms for clubs and events, a DJ or side-project section and language versions: from 2,000 €."),
        p(
          "My general build process is on the ",
          link("website development", "/services/website-development"),
          " page. Painters, illustrators and other visual artists have their own page on ",
          link("artist website design", "/artist-website-design"),
          ". All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Band website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a band website cost?", "A simple band or musician website is 700–1,400 €; full sites with release pages, EPK, merch, booking forms and language versions begin at 2,000 €. Design comes with either option; tell me about the band and I will name a fixed price."],
          ["Do musicians still need a website if they have Spotify and Instagram?", "Those profiles are where people listen and follow; the website is where everything sits together and stays yours — shows, every release, merch, the EPK, booking and, most of all, the mailing list. It is also the page Google and AI assistants treat as the official source about the band."],
          ["Can our tour dates update automatically from Bandsintown or Songkick?", "Yes. The site reads dates from the service you already use, so you add a show in one place. Past shows move to an archive, and each upcoming date gets event markup for Google."],
          ["Can we sell merch and music on the website?", "Yes — through Bandcamp links, Shopify buy buttons inside your pages or a print-on-demand store. The products appear in your design, and payment runs through the store you choose."],
          ["Can we add shows, releases and photos ourselves?", "Yes. You get an editor, built on WordPress or on Sanity, with ready fields for releases, shows, press photos and the EPK, plus a short written guide and video walkthroughs."],
          ["How long does it take to build a band website?", "It depends mostly on how quickly the bio, photos, music links and merch details are ready. Once they are in hand, the quote comes with a schedule, and a simple site is much quicker than one with a release archive, a store and language versions."],
          ["Can you build a website for a US band from Warsaw?", "Yes. We work over video calls and shared files, in English. A US morning lands in my CET afternoon or evening, so we can talk before rehearsal or your day job. I invoice in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order band website design: what to send me"),
        p(
          "Send the band or artist name, links to Spotify, Bandcamp, YouTube and Instagram, your current site if there is one, where you list shows, the email service you use, how you sell merch, whether you take wedding, corporate or DJ bookings, and a few press photos. I reply with a page list for the band and a fixed price. Send it through the ",
          link("form above", "#quote"),
          " or message me on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
