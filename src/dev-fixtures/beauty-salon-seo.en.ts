// Landing page fixture: SEO for beauty salons (EN), group «beauty-salon-seo».
// Rebuild of the existing old-template page under the same address
// /seo-for-beauty-salons — replace-landing.cjs.
//
// Semantic core: research/pseo/core.csv — «seo for beauty salons» 210 (en),
// «продвижение сайта салона красоты» 260 (ru), PL formulations zero. Demand
// here is comparable to the auto cluster, better than real estate.
//
// Разведение, decided 02.11.2026: the hairdressing, spa, med-spa and tattoo
// pages are already on the new template and must not be fought with. This page
// is about a MULTI-SERVICE salon and routes the narrower businesses away by
// link. research/pseo/intent-check-creative-leisure.md measured the pairs:
//   «website for hair salons» vs «beauty salon website» — 0 shared of 10;
//   «hair salon seo» vs «seo for beauty salons» — 2 shared of 10, which is the
//   «look with your eyes» band, hence the explicit split by content here.
//
// Kept in substance from the old page, which already carried good material:
//   * how clients search — service plus location, and the «near me» group;
//   * «schedule density»: an empty slot is lost revenue, which is why SEO is
//     judged in bookings rather than rankings;
//   * the whole AI/GEO section, which is recent and strong — BeautySalon
//     markup, Booksy/Bing Places consistency, the questions clients ask at the
//     desk;
//   * the link to the black-and-gold design article.
//
// Dropped: the old template's hardcoded blocks, the reviewsFullBlock (owner's
// decision of 25.10.2026), the ✔/❌ table, and four label headings that the
// 02.11 audit flagged — «Service-Based SEO Architecture», «Why Most Salon
// Websites Don't Rank», «SEO as a Revenue Infrastructure», «SEO Strategy for
// Hair, Nail and Aesthetic Studios: Deep Analysis». The last one also promised
// «Deep Analysis» and delivered five bullet points of four words each.
import { p, h2, h3, li, link, k } from "./pt";

export const beautySalonSeoEn = {
  lang: "en",
  group: "beauty-salon-seo",
  slug: "seo-for-beauty-salons",
  title: "SEO for Beauty Salons",
  heading: "SEO for beauty salons: filled appointment slots, not a ranking report",
  excerpt:
    "I do SEO for beauty salons, including GEO and AEO — the work that gets a salon named in ChatGPT, Perplexity and Google's AI answers. A page per treatment, a Google Business Profile that wins the map pack, prices and durations as text rather than as an Instagram photo, and a booking path short enough to finish. Whoever runs the audit also writes the fixes.",
  seo: {
    metaTitle: "Beauty salon SEO — bookings from Google and AI answers",
    metaDescription:
      "SEO for beauty salons: a page per treatment, a Google Business Profile that wins the map pack, prices as text, plus GEO and AEO. Audit from €250.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per treatment", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Lash lift near me", "Balayage on dark hair", "Open Saturday evening", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for a beauty salon: site, Google Business Profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: treatment pages, prices, structured data, booking path", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for a beauty salon", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What SEO for a beauty salon includes",
      items: [
        { _key: k("o"), iconName: "layers", title: "A page for every treatment", text: "Balayage, lash lift, gel manicure, facials, laser — each its own" },
        { _key: k("o"), iconName: "map-pin", title: "A Google Business Profile that wins the map pack", text: "Hours, photographs, reviews, treatment list, all matching the site" },
        { _key: k("o"), iconName: "file-text", title: "Prices and durations as text", text: "Not a price list photographed for Instagram" },
        { _key: k("o"), iconName: "calendar", title: "A booking path short enough to finish", text: "From the treatment page to a filled slot in two taps" },
        { _key: k("o"), iconName: "zap", title: "Speed on a phone", text: "These sites are opened on a phone, between appointments" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in AI answers (GEO, AEO)", text: "ChatGPT, Perplexity and Google AI Overviews" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("How clients actually search for a salon, and why it decides the page structure"),
        p("Beauty searches are almost never generic. Nobody looks for «beauty services»; they look for one treatment, in one place, often for one evening. That single fact decides everything about how the site should be built."),
        p("Two groups carry the demand. Treatment plus location: «balayage <city>», «lash lift <district>», «laser hair removal <city>», «gel manicure near the office». And the «near me» group: «nail salon near me», «beauty salon open now», «brow bar near me». The second group is where local SEO lives, because the client has already decided what they want and is choosing only by distance and availability."),
        p("A site built around one «Services» page cannot answer either group. A site built around treatments answers both, and the same structure is what an AI assistant can read later."),

        h2("A page for every treatment instead of one services list"),
        p("The backbone of salon SEO is separate pages for the work: colour and balayage, cuts, lash extensions and lifts, brows, manicure and gel, pedicure, facials, peels, laser, waxing."),
        p("Each page answers what gets asked at the desk and in DMs: how long it takes, what it costs or starts at, which specialist does it, how long the result lasts, whether preparation or a patch test is needed, what aftercare looks like. That is the content a client needs before booking, and it is also the content that ranks — a two-line treatment description ranks for nothing."),
        p("If one specialist is the reason people come, that specialist gets a page: name, specialisation, portfolio of work, and a direct booking link."),

        h2("Google Business Profile and the map pack decide before the website does"),
        p("For a salon, the local results and the map usually appear above the ordinary links, and often the client books without opening a site at all. Treating the profile as an afterthought while optimising the website is the single most common mistake in this niche."),
        p("So the work starts there: the full treatment list in the profile, hours that are actually right including the evenings, real photographs of the interior and of the work, reviews answered, and a booking link that leads to the treatment rather than to the home page. Then the site and the profile are made to agree with each other, because a client who sees two different prices stops trusting both."),

        h2("Prices and durations on the site, not in a photographed price list"),
        p("«Prices on request» costs a salon more bookings than a high price does. The client is choosing between three salons on a phone, and the one that states the number gets the message."),
        p("A price list as an image or a story screenshot does not work either: neither search engines nor AI assistants read text inside pictures, so it is invisible to exactly the channels this page is about. A range with what moves it — length and density of hair, condition of nails, the specialist's level — works better than a single number and loses fewer people."),

        h2("Why most salon websites do not rank, in order of frequency"),
        li("two lines of text per treatment, which is nothing to rank with;"),
        li("no location signals at all beyond an address in the footer;"),
        li("the price list only as an image;"),
        li("page titles like «Services» and «Prices», identical on every page;"),
        li("a heavy gallery of uncompressed photographs, slow on a phone;"),
        li("no structured data, so the hours and prices an assistant repeats are guesswork."),
        p("None of these is exotic, and none needs a redesign to fix. That is why an audit on a salon site usually finds more than a year of advertising would have bought."),

        h2("Booking: the shortest path from the treatment page to a filled slot"),
        p("A salon lives on schedule density: an empty slot at six on Friday is revenue that does not come back. So the site is judged by bookings, not by positions."),
        p("In practice that means a booking button on every treatment page rather than only in the menu, the same booking system the front desk actually uses, visible evening and weekend availability, and a phone number that is tappable. If bookings run through Booksy or a similar system, the site links straight into the right treatment instead of dropping the client on its home screen."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: local service businesses I have worked on",
      subtitle:
        "What these cases have in common with a salon: a client who decides on a phone, in minutes, by price and distance. A landing page with secured video access, a premium renovation site, SEO and UX for an auto repair company, a WordPress rebuild, and a tyre storage landing page with editable SEO.",
      picks: [
        "e-commerce-landing-page-with-secured-video-access",
        "renovation-and-investment-website-with-premium-design",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("How long beauty salon SEO takes to show results"),
        p("First movement appears in about six weeks: treatment pages that did not exist get indexed and start collecting impressions on long-tail searches. Steady growth in bookings builds over three to six months as the pages accumulate authority and the profile work compounds."),
        p("The map pack can move faster than that — sometimes within weeks — because the profile is a smaller object than a website. Anyone promising bookings in two weeks is promising something they do not control."),

        h2("What SEO for a beauty salon costs and what is included"),
        p(
          "An audit of the site, the Google Business Profile and the AI answers is €250. One-off work — treatment pages, prices, structured data, the booking path — runs €250–800 depending on scope. Ongoing SEO is €800 a month and includes the technical work, the content plan, new pages and the reporting. The full price list is on the ",
          link("pricing page", "/pricing"),
          ", and the audit has a page of its own: ",
          link("SEO audit", "/services/seo-audit"),
          ".",
        ),
        p("Whoever runs the audit also writes the fixes. You do not get a list of problems and an invitation to find a developer for them."),

        h2("Who SEO for a beauty salon suits, and who it does not"),
        p("It suits a salon with a steady treatment list and its own premises, willing to publish prices at least as a range, with somebody who answers messages during opening hours, and able to wait three to six months for the compounding part."),
        p("It does not suit a salon that works purely from Instagram and has no site to improve, one where «prices only by phone» is a rule, one with nobody to handle enquiries, or one that needs the chairs filled this week — that is an advertising budget, not SEO, and I do not run campaigns."),
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "A quote for beauty salon SEO",
      subtitle:
        "I reply within one working day: what I would do first, in what order and at what price.",
      contextLabel: "Salon name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "seo",
      quizQuestions: [
        { _key: k("z"), question: "What do you offer?", options: ["Hair", "Nails and brows", "Aesthetics and laser", "All of it"] },
        { _key: k("z"), question: "Where do bookings come from now?", options: ["Instagram", "Google and the map", "Booksy or similar", "Word of mouth"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Beauty salons in AI search: what GEO and AEO mean and how they are done"),
        p("More clients now ask an assistant before they open a booking app: «which salon near me does a lash lift after 7 pm», «who does balayage on dark hair without it turning orange, and for how much», «is there a salon in my district with laser and online booking». The assistant answers from text it can read and restate, and it names the places it found."),
        p("Two acronyms describe the work. GEO, generative engine optimization, is getting your salon picked up and named when an assistant assembles a recommendation. AEO, answer engine optimization, is having a sentence on your site that the assistant can repeat almost word for word."),
        h3("What an assistant actually needs to find"),
        li("every treatment as text: duration, a price or a «from» price, the technique, and which specialist offers it;"),
        li("BeautySalon, HairSalon or NailSalon markup with address, opening hours and services, so the hours an assistant repeats are the ones on your door;"),
        li("Service markup with a price for each treatment, so nothing has to be guessed about what «facial» includes;"),
        li("identical name, hours and treatment names on the Google Business Profile, Booksy, Bing Places and Instagram — a salon open on Booksy but closed on Google gives an assistant two answers to choose from;"),
        li("short answers on each treatment page to what clients ask at the desk: how long a lash lift lasts, whether a patch test is needed, whether a peel needs preparation."),
        p(
          "Before I change anything, I put the same booking-style questions about your area to ChatGPT, Perplexity and Google's AI Overviews and note whether your salon comes up and how it is described; once the work is live, I repeat exactly those questions. How this works in more detail is on the ",
          link("AI-ready SEO and GEO page", "/services/ai-ready-seo-and-geo-optimization"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for beauty salons: questions owners ask",
      faq: {
        _type: "accordionBlock",
        items: [
          ["Do we need a website if Instagram and Booksy already bring clients?", "They bring the clients who already know you. Search brings the ones choosing a salon right now, and neither Instagram nor a booking platform answers «how much is balayage on dark hair» in a way Google or an assistant can read. The site is also the only one of the three that belongs to you."],
          ["What does SEO for a beauty salon cost?", "An audit €250, one-off work €250–800, ongoing SEO €800 a month. The price depends on the number of treatments, the state of the site and whether the Google Business Profile needs rebuilding."],
          ["How long until bookings change?", "About six weeks to the first measurable movement in impressions, three to six months for steady growth in bookings. The map pack can move sooner because the profile is a smaller object than the site."],
          ["Do we have to publish prices?", "Not to the last zloty, but yes, at least a range with what moves it. «Prices on request» loses more bookings than a high number does, and a price list as an image is invisible to search engines and AI assistants alike."],
          ["We are a hair salon specifically. Is this the right page?", "Partly. Hairdressing has its own search demand and its own page here, built around colour, cuts and the stylist's name rather than around a multi-service treatment list. Spa, med spa and tattoo studios have their own pages too."],
          ["Can you work with the Google Business Profile as well as the site?", "Yes, and in this niche it usually comes first. The profile often decides the booking before the site is opened, so the two are made to agree on hours, prices and treatment names."],
          ["Will the site be found by ChatGPT and in Google's AI answers?", "That is the GEO and AEO part, and it is included rather than sold separately. I measure first — the same booking-style questions put to several assistants — then do the work, then repeat the same questions."],
          ["Can you guarantee first position?", "No, and nobody honest can. What I can state is what will be done, in what order, and how the result will be measured: bookings from search, not a position in a report."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Hairdressing, spa or a new site: the pages next to this one"),
        p(
          "A hair salon or barbershop has its own demand and its own page: ",
          link("hair salon website design", "/hair-salon-website-design"),
          ". For a spa it is ",
          link("spa website design", "/spa-website-design"),
          ", and for an aesthetics clinic ",
          link("med spa SEO", "/med-spa-seo"),
          ". If the site itself needs building rather than promoting, start from ",
          link("beauty salon website design", "/website-development-for-beauty-professionals/beauty-salon-website"),
          ". And on how these sites should look, there is a separate piece: ",
          link("why black-and-gold web design no longer reads as expensive", "/blog/black-and-gold-web-design-no-longer-reads-expensive"),
          ".",
        ),

        h2("Order SEO for your beauty salon: what to send me"),
        p("Send the site if there is one, the treatment list with prices or ranges, the link to your Google Business Profile, and where bookings come from today. I will reply with what I would do first, in what order and at what price — and if the honest answer is that the profile alone will move more than the site this quarter, I will say that instead."),
      ],
    },
  ],
};
