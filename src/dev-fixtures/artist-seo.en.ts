// Landing page fixture: SEO for artists (EN), group «artist-seo».
// NEW page — create-landing.cjs, root level like the other industry SEO pages.
//
// Why it exists (04.11.2026). Measured: «artist seo» 340. The paired WEBSITE
// page exists — /artist-website-design — so this page is about being found,
// not about what the site contains.
//
// SERP (checked 04.11.2026): Ceri Hand, Art Easely, Artwork Archive, Art World
// Marketing, Art Trails Tasmania, three YouTube guides, two Reddit threads in
// r/artbusiness. All advice, no service providers — and one of them states the
// diagnosis outright: artists publish minimal text, no individual artwork
// pages, a single portfolio page of images with nothing written. The SERP is
// entirely visual artists, with no recording-artist intent, which is why the
// page can treat «artist» as a painter or sculptor and point the other
// meanings elsewhere.
//
// The angle that separates this from the photographer page published the same
// day: a photographer sells a service booked for a date, an artist sells an
// object. So the queries are descriptive rather than local — subject, medium,
// size, colour, room — and the unit of SEO is a page per artwork, which almost
// no artist site has. Two further points no platform guide makes: sold works
// should stay published rather than be deleted, and the artist's own name is
// usually owned by Saatchi, Artsy, Etsy or a gallery, which quietly costs the
// commission that a collector from a fair would have placed directly.
import { p, h2, h3, li, link, k } from "./pt";

export const artistSeoEn = {
  lang: "en",
  group: "artist-seo",
  slug: "seo-for-artists",
  title: "SEO for Artists: Selling Paintings and Sculpture from Your Own Site",
  heading: "SEO for artists: how a collector finds your work when they do not yet know your name",
  excerpt:
    "Most artist websites give a search engine nothing to read: one portfolio page, images without text, no page per work. Collectors search by subject, medium, size and colour — and those searches can only be answered by a page about the piece. Audit from €250.",
  seo: {
    metaTitle: "Artist SEO — audit from €250",
    metaDescription:
      "SEO for artists and art websites: a page per artwork, subject and medium queries, owning your own name, prints and commissions. Audit €250, ongoing €800/month.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["A page per artwork", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["Searches by subject and size", "Your name, not a marketplace", "Commissions with price ranges", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for an artist's website: artwork pages, search visibility and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: artwork and series pages, structured data, image handling", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for an artist selling from their own site", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for an artist's website actually consists of",
      items: [
        { _key: k("o"), iconName: "image", title: "A page for every work that is for sale", text: "Medium, size, year, series, price, availability" },
        { _key: k("o"), iconName: "search", title: "The words collectors describe art with", text: "Subject, medium, size, colour, room" },
        { _key: k("o"), iconName: "award", title: "Your own name, back in your hands", text: "Instead of Saatchi, Artsy or an old Behance" },
        { _key: k("o"), iconName: "palette", title: "Series and body-of-work pages", text: "Where individual pieces gain context" },
        { _key: k("o"), iconName: "credit-card", title: "Commissions and prints as their own pages", text: "Two different buyers, two different searches" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Large abstract canvas, artist I can buy from directly»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h2("Which artists this page is about, and where the other meanings are covered"),
        p("«Artist» carries several trades, and they need different work, so to be clear about what is on this page: it is for visual artists who make objects — painters, printmakers, sculptors, ceramicists, illustrators — selling originals, prints or commissions from their own site."),
        p(
          "If you are a recording or performing artist, the work is different and it is on the ",
          link("SEO for musicians page", "/seo-for-musicians"),
          ". A makeup artist needs local bookings rather than collectors, which is ",
          link("makeup artist website design", "/makeup-artist-website-design"),
          ", and a tattoo artist the same, which is ",
          link("tattoo studio website design", "/tattoo-website-design"),
          ".",
        ),

        h2("Why an artist's website usually gives a search engine nothing to read"),
        p("The standard artist site is one portfolio page holding forty images, a short bio, and a contact form. To a visitor it reads as confident restraint. To a search engine it is a single page with almost no text, where forty works are indistinguishable from each other and none of them has an address of its own, so there is nothing to match against any search a collector could type."),
        p("This is not a matter of writing more for the sake of it. A search engine cannot see a painting: it cannot tell oil from acrylic, it cannot measure the canvas, and it has no idea the piece is predominantly blue. Every fact a buyer would filter by has to exist as text somewhere, and on most artist sites it exists nowhere — not in the image file names, not in the alt text, not on the page."),

        h2("A page per artwork: what the page for a single painting has to contain"),
        p("The unit of SEO for an artist is not the portfolio and not the series — it is the individual work. Each piece that is for sale, or that represents the kind of thing you take commissions for, gets its own address and its own text, and that text is mostly facts a collector asks for before they ask the price."),
        li("title, year, medium and exact dimensions, written out rather than abbreviated;"),
        li("the series or body of work it belongs to, linked;"),
        li("price and availability, or the plain statement that it is sold;"),
        li("what the piece is of and what it is about, in two or three sentences;"),
        li("framing, hanging, edition size for prints, and what shipping involves;"),
        li("and an image with alt text that describes the work rather than repeating the title."),

        h3("Sold works should stay published instead of being deleted"),
        p("Artists routinely remove a piece from the site once it sells, which is understandable and costs them twice. The sold pages are the body of text that makes the site legible to a search engine in the first place, and they are the strongest evidence a hesitant buyer can be given — that work at this size, in this medium, at this price, has been bought before by somebody."),
        p("The version that works keeps the page, marks it sold clearly so nobody enquires about it in vain, and links from it to the series and to available work of a similar size. Over a few years that turns into the part of the site that brings people in, and it costs nothing to build because the pages already existed."),

        h2("Nobody searches for «artist»: the words collectors actually use"),
        p("Searches that end in a sale almost never contain the word artist. They describe the thing wanted: a large abstract painting for a living room, an original seascape in oil, a bronze figure under a certain height, a botanical print in a particular colour. Buyers search by subject, medium, size, colour and sometimes by the room the work is going into, and those are precisely the searches a page about one piece can answer and a portfolio page never will."),
        p("The practical consequence is that keyword work for an artist is not about finding a term to rank for; it is about making sure the facts already true of your work are written down in the words buyers use. Somebody looking for a two-metre canvas does not search «large» if they mean two metres, and an artist who writes «large» instead of the measurement has opted out of the search."),

        h2("Owning the search for your own name, which marketplaces and galleries have taken"),
        p("Type your own name into a search engine. For most artists the first results are Saatchi Art, Artsy, Etsy, a gallery's roster page, an Instagram profile, and a Behance account abandoned in 2017 — with the artist's own website somewhere below. This matters more than any other search, because the person typing your name has already seen the work: at a fair, in a group show, on a wall at a friend's house."),
        p("That visitor is the most valuable one you will ever get, and they arrive at a marketplace that takes a commission, or at a gallery page listing two works from four years ago, and in the worst case at a profile you no longer update. Winning your own name is the cheapest and most profitable piece of SEO available to an artist, and it is mostly a matter of structure rather than content: one clear address for you, consistent naming, and the right pages linked from the right places."),
        p(
          "That groundwork is the ",
          link("SEO audit", "/services/seo-audit"),
          ", and where you also want to be found by city — a studio open to visits, a local commission market — it extends into ",
          link("local SEO", "/services/local-seo-services"),
          ".",
        ),

        h3("Commissions and prints are two separate searches and two separate pages"),
        p("Commissions and prints look like extensions of the same business and behave like different ones. Someone commissioning a portrait or a large piece for a specific wall wants process, timeline, price range and reassurance that they can see progress; someone buying a print wants size, paper, edition and delivery. They search differently, they decide differently, and a single page trying to serve both converts neither."),
        p(
          "Commissions are a service page: what you take on, what you decline, how long it takes, what it costs from and to. Prints are closer to a shop, and once there are more than a handful the work overlaps with ",
          link("SEO for online stores", "/services/ecommerce-seo-services"),
          ". What the site itself needs to look like is on the ",
          link("artist website design page", "/artist-website-design"),
          ".",
        ),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: sites where the visitor judges the work before reading a word",
      subtitle:
        "What these share with an artist's site: the portfolio is the product, the decision is made from the site alone, and growth came from structure and content rather than bought links. A personal site built and optimised from scratch, a retail-analytics consultant, an education agency taken from one country to ten, an agency site, and a multilingual site for student services.",
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
      title: "An SEO audit for your art website",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Your name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you sell from the site?", options: ["Originals", "Prints and editions", "Commissions", "All three"] },
        { _key: k("z"), question: "Does each work have its own page?", options: ["No, one portfolio page", "Some of them", "Yes, every piece", "Not sure"] },
        { _key: k("z"), question: "Where do sales come from now?", options: ["Instagram", "Galleries and fairs", "A marketplace", "My own site already"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a buyer asks ChatGPT for an artist to buy from (GEO, AEO)"),
        p("«Find me a contemporary painter working in large-format abstracts I can buy from directly» is a question people now put to an assistant instead of scrolling a marketplace, and it suits artists unusually well, because the buyer wants a handful of names with reasons rather than four thousand thumbnails. The assistant answers from text it can read, so the same three things decide it: subject, medium and size written as text rather than left in the images, prices or ranges it can quote, and the same name and wording across the site, the gallery listings and the marketplace profiles."),
        p(
          "Getting an existing site into a readable state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants describe your work wrongly — a medium you left behind, a gallery you no longer show with, a city you left — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for artists: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for an artist's website cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. What moves the number is how many works need their own pages, whether the platform allows pages to be added and addresses edited, and whether prints turn the site into a shop."],
          ["Does every single painting really need its own page?", "Every work you want to sell, and every work that shows the kind of commission you take. A piece made in 2009 and never for sale does not need one. The point is not volume — it is that a search for an oil seascape at a particular size can only be answered by a page about that piece."],
          ["Should I delete work once it sells?", "No. Mark it sold and keep the page. Sold pages are most of the text that makes the site findable, and they are the clearest evidence a hesitant buyer can be shown. Deleting them removes the reason the site ranks and the reason a buyer trusts the price."],
          ["Galleries and Saatchi rank above me for my own name. Can that be changed?", "Usually yes, and it is the first thing I would work on, because the person searching your name has already seen the work. It is mostly structural — one clear address for you, consistent naming, the right pages linked from the right places — rather than a matter of writing more."],
          ["Isn't Instagram where art actually sells?", "It is where art is discovered by people already looking at art. Search reaches someone furnishing a room who has never heard of you, and it is the only channel where your own name leads to your own site rather than to a profile you do not own. Most artists need both."],
          ["My site is on a portfolio platform. Can you work with it?", "Usually yes, if pages can be added and headings and addresses edited. Some art-portfolio platforms lock all three, and SEO work on those is paying rent. I check which case yours is before quoting, not after."],
          ["How long before it brings buyers?", "First movement after about a month and a half, growth on a three to six month horizon. Art has a slower decision than most purchases — people return to a piece several times — so the enquiry often arrives weeks after the visit that search produced."],
          ["Who writes the text for each work?", "I draft the structure and you supply what only you know: what the piece is about, how it was made, what the series is doing. That cannot be researched from outside the studio, and a buyer can tell the difference immediately."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for an art website: what to send me"),
        p("Send the site, say what you sell from it — originals, prints, commissions, or all three — and search your own name first so we both see what comes up. I reply within one working day with what is holding the site back, what your name currently leads to, and what I would do first, including which works are not worth giving pages to."),
      ],
    },
  ],
};
