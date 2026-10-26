// Landing page fixture: Artist website design (EN), group
// «artist-website-design». New page.
// Semantic core: ref/creative-leisure.md, artists group (US volumes): artist
// website design 170 = design artist website / artist design website /
// website design for artist / website design artist 170 each, one demand
// (H1, H2s, metaTitle, excerpt) · artist website examples 590 (examples H2,
// no real sites named) · top 10 artist websites 110 (examples H2 text) ·
// beautiful artist websites 50 (examples H3) · creative websites for artists
// 20 (examples H2 text). «makeup artist website…» and «music artist website
// design» belong to /makeup-artist-website-design and /band-website-design.
// Intent: ref/intent-check-creative-leisure.md — «website for artists» vs
// «artist website design»: 2 shared URLs of 10 (a Reddit r/artbusiness thread
// and a builder roundup), 3 shared domains. «website for artists» = platforms
// and builders (Artlogic, Artsy, FASO, Jimdo, Tooltester); «artist website
// design» = studios, Artlogic, Squarespace, Dribbble, Awwwards → we target
// «artist website design» and say when a builder is enough.
// Reader: a painter, printmaker, sculptor, illustrator or mixed-media artist
// selling originals, prints and commissions; not a buyer looking for art.
// Angles: first screen for collectors, curators and gallerists, portfolio with
// large images that load fast, artwork pages with medium / dimensions / year /
// price or «enquire», series and collections, CV and exhibitions, artist
// statement, commissions, prints (shop or links), galleries and representation,
// image protection (what really works), Instagram vs own site, templates vs
// custom, AI-readable artwork data.
// NOT on this page: art marketing and ad campaigns, online gallery listings,
// photographers (/photographer-website — linked once), makeup artists
// (/makeup-artist-website-design), musicians (/band-website-design), authors
// (/author-website-design).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, link, k } from "./pt";

export const artistWebsiteDesignEn = {
  lang: "en",
  group: "artist-website-design",
  slug: "artist-website-design",
  title: "Artist website design",
  heading: "Artist Website Design",
  excerpt:
    "Artist website design for painters, printmakers and sculptors, built by one person: a portfolio of large images that opens fast, a page for every work with medium, size and price or an enquiry button, series and collections, your CV and exhibitions, commissions and a print shop.",
  seo: {
    metaTitle: "Website Design for Artists and Painters | Bandziuk",
    metaDescription:
      "Artist website design and build: fast portfolio, artwork pages with medium, size and price, series, CV and exhibitions, commissions and prints. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design and build in one price", "From 700 €", "Large images, short load times"],
  heroPhonePoints: ["Tidewater series, 2026", "Oil on linen · 36 × 48 in", "Available · Enquire", "Signed prints from the studio"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple artist portfolio website with design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Full artist website with artwork pages, series, CV and exhibitions, commissions, a print shop or store links and enquiries by email, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What artist website design includes",
      items: [
        { _key: k("o"), iconName: "image", title: "Full-screen images that load fast", text: "Sized per device, color kept true" },
        { _key: k("o"), iconName: "file-text", title: "A page for every artwork", text: "Medium, size, year, price or “enquire”" },
        { _key: k("o"), iconName: "layers", title: "Series and collections", text: "Each body of work with its own text" },
        { _key: k("o"), iconName: "trending-up", title: "CV and exhibitions", text: "Shows, residencies, awards, press" },
        { _key: k("o"), iconName: "message-circle", title: "Commission and purchase enquiries", text: "Linked to the exact work or brief" },
        { _key: k("o"), iconName: "sparkles", title: "Artwork data AI can read", text: "Artist, works and shows as structured data" },
      ],
      prices: [
        { _key: k("r"), label: "Simple artist portfolio website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Artwork pages, series, CV, commissions, prints", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Sites I built where the images carry the decision",
      subtitle:
        "Sasha Dith’s site, for a DJ and producer, reproduces his Figma design exactly on Next.js 14: video, his releases linked to streaming services, a form for bookings set over a concert photo, with media lazy-loaded so the page opens in under a second where the old builder pages crawled. A renovation and property-investment firm in Warsaw has a premium design in which photos of finished interiors do the persuading. Cyprus VIP Estates, built from the ground up in five languages including Hebrew, lets buyers filter a catalog, browse a map and send enquiries straight to the CRM. Landi Room, a Warsaw salon, sells a nanoplasty video course with Stripe Checkout and a viewing link that stops working after 14 days and offers no download. 153 pages in English, Polish and Russian make up the site of a retail and fashion analytics consultant, built around one person’s expertise. What links them to an artist site: visitors decide from pictures first, then need a clear way to ask, book or pay.",
      picks: [
        "official-website-for-dj-and-producer-sasha-dith",
        "renovation-and-investment-website-with-premium-design",
        "build-and-optimize-a-multilingual-real-estate-platform",
        "e-commerce-landing-page-with-secured-video-access",
        "consultant-website-design-retail-analytics",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Request a quote for your artist website",
      subtitle: "Describe your work and how you sell it. I reply with the pages your site needs — portfolio, series, CV, commissions, prints — and one fixed price.",
      contextLabel: "Artist name, current site or Instagram",
      contextPlaceholder: "Name or link",
      buttonText: "Send for a quote",
      note: "Or send a few photos of your work on WhatsApp.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you mostly sell?", options: ["Original paintings or drawings", "Sculpture or ceramics", "Prints and editions", "Commissions: portraits, murals, illustration"] },
        { _key: k("z"), question: "Where is your work now?", options: ["Only on Instagram", "A Squarespace, Wix or Format site", "Gallery pages and an old site", "Saatchi Art, Etsy or another marketplace"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Artist website design is what this page offers: I plan, design and build portfolio websites for painters, printmakers, sculptors and illustrators, and I do the work myself from first sketch to launch. The site is a quiet room for your work — images large, text short, nothing competing with the art — with clear paths for the three people who matter: a collector who wants to buy, a curator who wants your CV, and a client who wants to commission."),

        h2("Artist website design: what a collector, curator or gallerist checks first"),
        p("Most visitors already saw a piece at a fair, in a group show or on Instagram, and they arrive with one question each. The first screen and the menu answer all three without a scroll:"),
        li("the work — one strong image or a short row from the current series, not a logo on a blank page"),
        li("who you are — your name, medium and city in one line, such as “Painter working in oil and cold wax, Santa Fe”"),
        li("where to go — Works, Available, Commissions, CV and Contact, in words rather than icons"),
        p("An artist statement belongs one click away. Opening the site with three paragraphs of theory asks a buyer to read before they have seen anything."),

        h2("An artist portfolio website with large images that load fast"),
        p("Art is judged on detail, and detail means large files. Uploaded unchanged, a dozen high-resolution photos make a portfolio stall on a phone, and the visitor leaves after the first one. The build handles that for you:"),
        li("each image saved in several widths and in WebP or AVIF, so a phone gets a light file and a 27-inch monitor a sharp one"),
        li("color profiles kept, so your blues stay the blues you painted"),
        li("the first image shows immediately, and the others load only when the visitor scrolls to them"),
        li("a full-screen view with zoom on details such as brushwork or surface texture"),
        p("Good photographs matter as much as code. Shoot paintings straight on, in even light and without the frame; for sculpture, three or four angles and one shot that shows scale in a room."),

        h2("Artwork pages with medium, dimensions, year and price or “enquire”"),
        p("Every work has its own page and address, so you can send a collector a direct link instead of a screenshot. The page lists, as text:"),
        li("title, year and medium — “Oil and graphite on panel”"),
        li("dimensions in inches and centimeters, with framed size if it ships framed"),
        li("status: available, sold, on loan or in an exhibition, with the gallery named"),
        li("price, a price range, or an “Enquire about this work” button that sends the title with the message"),
        li("a few lines about the work and two or three related pieces from the same series"),
        p("Sold works stay on the site. They show your range and your market, and a sold label often prompts a commission request for something similar."),

        h2("Series and collections on an artist website"),
        p("Most artists work in bodies of work, and a long grid mixes them into noise. Grouping by series gives each body its own page with a short text — what started it, the materials, where it was shown — and lets a curator see how your practice has moved over the years. Filters by medium, size and availability help a buyer who has a specific wall in mind. Older series move to an archive section rather than disappearing."),

        h2("Artist CV, exhibitions and artist statement pages"),
        p("Curators, juries and grant panels expect a CV in a familiar order, and gallerists check it before a studio visit. The CV page is HTML text rather than a PDF so it can be read on a phone and found by search engines, with a PDF version to download:"),
        li("education and residencies"),
        li("solo and group exhibitions, newest first, with venue and city"),
        li("awards, grants, public and private collections"),
        li("press and publications with links where they exist"),
        p("Upcoming shows sit on a separate page with dates, the venue and opening hours. The statement and a short bio, written in the third person for press use, get their own page next to downloadable portrait photos."),

        h2("A commissions page for portraits, murals and custom work"),
        p("Commissions need more explanation than a finished work, because the client is buying something that does not exist yet. A dedicated page lays it out:"),
        li("what you take on: pet or family portraits, large paintings for a particular room, murals, illustration"),
        li("examples of past commissions, with the client’s permission"),
        li("the steps: brief, sketch, approval, painting, delivery, and how many revisions are included"),
        li("timeline, deposit and a starting price or price per size, if you choose to publish them"),
        li("a form that asks for size, subject, reference photos, deadline and budget range"),

        h2("Selling prints and original art from your website"),
        p("Originals and prints are different purchases. An original usually starts a conversation — about shipping, framing, a studio visit — so an enquiry button often works better than a cart. Prints are impulse buys and sell best with a checkout."),
        h3("A print shop on your own site"),
        p("Limited editions show the edition size, paper, printing method and whether each print is signed and numbered. Checkout runs through Stripe or a Shopify store connected to the site, with shipping zones and costs you set. Print-on-demand services such as Fine Art America or Printful can handle production, linked from your print pages."),
        h3("Links to marketplaces and galleries"),
        p(
          "If you already sell through Saatchi Art, Etsy or a gallery’s online viewing room, the artwork page links to the listing so prices stay in one place. Photographers who sell prints have different needs; they are covered under ",
          link("photographer website design", "/photographer-website"),
          ".",
        ),

        h2("Protecting images on an artist website: what works in practice"),
        p("No setting fully prevents copying: anything that appears on a screen can be screenshotted. What reduces misuse in practice is publishing images at web size, about 2,000 pixels on the long side, never your print files; adding your name and a copyright line to the image metadata and under every work; and using a reverse image search now and then to find copies. A subtle watermark is an option for new work you share widely. Blocking the right-click menu mostly annoys real buyers and does little else."),

        h2("Artist website examples: Squarespace, Format, Artlogic or a custom design"),
        p("Look through any list of the top 10 artist websites and the pattern is the same: few words, generous white space, fast images, simple menus. Beautiful artist websites are quiet; the art supplies the color."),
        h3("When a template is enough"),
        p("Squarespace, Wix, Format, Pixpa or Artlogic’s artist sites are a sensible start for an early career, a small body of work, or an artist who enjoys updating pages personally."),
        h3("When a custom artist website pays off"),
        p("Custom design pays off once you manage hundreds of works with status and pricing, sell prints and originals in different ways, show in several countries and need a second language, or want a site that does not look like the same template other artists in your scene use."),

        h2("Instagram or your own artist website"),
        p("Instagram is where many collectors discover new work, and it is worth keeping active. It is still a feed: posts sink within days, sizes and order belong to the platform, and the reach of your next post is decided by an algorithm. Your website is the permanent record — every series, every price, your full CV — and the link in your bio leads to the current series or the available works page rather than the home page."),

        h2("An artist website that ChatGPT and Google AI Overviews can read"),
        p("Buyers and curators increasingly ask AI assistants things like “abstract landscape painters in New Mexico” or “artists who paint large commissions for hotel lobbies”. An assistant can only recommend an artist whose site it can read. Your name, medium, themes, city, galleries and exhibitions are written as text, and structured data describes you, each artwork with medium, size and year, and each exhibition with its venue and dates."),
        p(
          "Getting named in those answers takes further work; I describe it on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much artist website design costs"),
        li("A simple artist portfolio website — home, works by series, About with statement, CV and contact: 700–1,400 €, design included."),
        li("A full artist website with artwork pages and status, filters, exhibitions, commissions, a print shop or marketplace links, and a second language if needed: from 2,000 €, design included."),
        p(
          "Domain, hosting and the code are registered to you; the running costs after launch are hosting and the domain. Price ranges for every service are on the ",
          link("pricing", "/pricing"),
          " page, and the way I plan and build sites is explained under ",
          link("website development", "/services/website-development"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Artist website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does artist website design cost?", "A simple portfolio site is 700–1,400 €; a full artist website with artwork pages, exhibitions, commissions and prints is from 2,000 €. Both include the design. Once I know how many works and series you want to show, you get a fixed figure."],
          ["Should artists show prices on their website?", "It depends on how you sell. Prints and smaller works sell better with a visible price. For large originals, a price range or an “Enquire” button that names the work is common, and if a gallery represents you, its price list should match the one on your site."],
          ["Can I add new works and mark them as sold myself?", "Yes. A new work is a form in the editor with image, title, year, medium, size, series, price and status. Switching a work to sold or on loan updates every page where it appears."],
          ["Can someone steal my images from the site?", "Anything visible on a screen can be copied, so the site publishes web-size images only, never print files, with your name and copyright in the metadata and under each work. That keeps the value of anything copied low."],
          ["Why have my own site when a gallery represents me?", "Yes, as a record of your whole practice. Gallery pages show only the works they hold; your site shows every series, your CV and contact, and links collectors to the gallery for the works it represents."],
          ["How does a US artist work with a designer in Poland?", "Online and in English. 3 p.m. in Warsaw is 9 a.m. in New York and 6 a.m. in Los Angeles, so we meet in your morning and my afternoon or early evening. Design comments go straight onto the mockups. There is a written contract, and invoices are in EUR."],
          ["Will my artwork show up in ChatGPT answers?", "I build the site so AI assistants have facts to read: artist details as text plus structured data for works and exhibitions. Being recommended for particular searches needs ongoing SEO and GEO work; I offer that separately."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order artist website design: what to send me"),
        p(
          "Send your artist name, links to your Instagram and any current site or gallery pages, the series you want to show with an approximate number of works, how you sell — originals, prints, commissions — your CV as it stands, and two or three artist sites whose feel you like. In reply you get a proposed page list and a fixed price. Use the ",
          link("form above", "#quote"),
          " or message me on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
