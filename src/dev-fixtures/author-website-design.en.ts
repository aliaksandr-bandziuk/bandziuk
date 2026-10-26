// Landing page fixture: Author website design (EN), group
// «author-website-design». New page.
// Semantic core: ref/creative-leisure.md, authors group (US volumes): author
// website design 170 (H1, H2s, metaTitle, excerpt) · author website examples
// 480 (genre H2 «Author website examples…», no real sites named) ·
// self-published author websites 110 (newsletter H2, traditional vs
// self-published H2) · website design for author 70 (intro) · author website
// design services 50 (platform H2, FAQ) · create an author website free 40
// (platform H2, FAQ) · romance author website design 10 (genre H3) · best
// author website design 10, book author website design 10 (genre H2 text).
// Related: «author website design template», «author website templates free
// download», «Tertulia author website builder» (platform H2 only, as builders).
// Intent: ref/intent-check-creative-leisure.md — «website for authors» vs
// «author website design»: 0 shared URLs of 10, 2 shared domains. «website for
// authors» = DIY guides and builders (BookBub Author Websites, Kindlepreneur,
// Jerry Jenkins, Reddit); «author website design» = author-site studios,
// BookBub, Jane Friedman, Reedsy, Orbit Media → we target «author website
// design» and say when a builder is enough.
// Reader: a novelist or nonfiction author, self-published or with a publisher,
// often with a series or a pen name — not a reader looking for books.
// Angles: home page for a reader who just finished a book, book pages with
// retailer links by store and country, series reading order, newsletter
// sign-up as the main goal, media kit, events, ARC/review copies, launches and
// preorders, traditional vs self-published, genre look, cover images that load
// fast, own domain vs platform, AI-readable book data.
// NOT on this page: book marketing (ads, BookBub Featured Deals), editing,
// cover design, formatting and publishing services; painters and illustrators
// (/artist-website-design); musicians (/band-website-design).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search.
import { p, h2, h3, li, link, k } from "./pt";

export const authorWebsiteDesignEn = {
  lang: "en",
  group: "author-website-design",
  slug: "author-website-design",
  title: "Author website design",
  heading: "Author Website Design",
  excerpt:
    "Author website design and build by one person: a page for each book with links to every retailer, your series in reading order, a newsletter sign-up placed where readers finish a chapter, a media kit and events — for self-published and traditionally published authors.",
  seo: {
    metaTitle: "Website Design for Authors and Novelists | Bandziuk",
    metaDescription:
      "Author website design and build: book pages with retailer links, series reading order, newsletter sign-up, ARC requests, media kit and events. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design and build in one price", "From 700 €", "Made for series and backlists"],
  heroPhonePoints: ["Book 4 · Preorder now", "Reading order: start here", "Free prequel for subscribers", "Bookshop.org · Kindle · Kobo"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple author website with design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Full author website with book and series pages, retailer links by country, newsletter and reader magnet setup, ARC requests, media kit and events, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What author website design includes",
      items: [
        { _key: k("o"), iconName: "file-text", title: "One page per book", text: "Cover, blurb, sample chapter, formats, ISBNs" },
        { _key: k("o"), iconName: "layers", title: "Series in reading order", text: "Numbered, with “read next” on every book" },
        { _key: k("o"), iconName: "plug", title: "Links to every retailer", text: "Kindle, Bookshop.org, Kobo, Apple, audio" },
        { _key: k("o"), iconName: "message-circle", title: "Newsletter sign-up that converts", text: "Reader magnet sent by your email service" },
        { _key: k("o"), iconName: "image", title: "Media kit ready to download", text: "Bios, author photos, covers, sell sheets" },
        { _key: k("o"), iconName: "sparkles", title: "Book data AI assistants can read", text: "Author, books and series as structured data" },
      ],
      prices: [
        { _key: k("r"), label: "Simple author website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Books, series, newsletter, ARCs, media kit, events", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Sites I built for personal brands whose visitors come to listen, read or buy",
      subtitle:
        "Sasha Dith, a DJ and producer, came with a Figma design, and I turned it into a Next.js 14 site that matches it to the pixel: a discography grid with streaming links, video, a booking form, and one place for fans, media and booking agents that opens in under a second. A retail and fashion analytics consultant has 153 pages in English, Polish and Russian with downloadable templates and video courses, planned around real searches and written to be quoted by AI assistants. The site of Giuseppe, a Milan psychotherapist, went to Next.js and Sanity together with its 468 blog posts, each old URL redirected with a 301, and his new pages are already cited in ChatGPT answers. For Landi Room, a beauty salon in Warsaw, buyers pay for a video course with Stripe Checkout and get their private viewing link by email without anyone lifting a finger. My own site, bandziuk.com, runs the schema.org, sitemap and hreflang setup I use for clients. An author site asks for the same skills: a catalog that sends people to the right store, a reader list you own, and pages search engines and AI can read.",
      picks: [
        "official-website-for-dj-and-producer-sasha-dith",
        "consultant-website-design-retail-analytics",
        "psychotherapist-website-milan",
        "e-commerce-landing-page-with-secured-video-access",
        "develop-and-optimize-a-personal-website-with-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Request a quote for your author website",
      subtitle: "Tell me about your books and you get a proposed page list — books, series, newsletter, media kit — with a fixed price, usually the next business day.",
      contextLabel: "Author or pen name, current site or Amazon page",
      contextPlaceholder: "Name or link",
      buttonText: "Send for a quote",
      note: "Prefer messaging? WhatsApp works just as well.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How are you published?", options: ["Self-published", "With a traditional publisher", "Both (hybrid)", "First book not out yet"] },
        { _key: k("z"), question: "What should the site do first?", options: ["Grow my newsletter list", "Sell more of the backlist", "Get press, events and speaking invitations", "Bring several pen names under one roof"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Author website design is the service: I plan, design and build websites for novelists and nonfiction writers, so the same person draws your book pages, codes them and puts the site live. Retailers show one title at a time next to other people’s books. Your site shows your whole shelf, tells a new reader where to begin and asks them to stay in touch when they finish."),

        h2("Author website design starts with the reader who just finished your book"),
        p("The typical visitor read your last page five minutes ago, often in an ebook app, and tapped a link in the back matter or searched your name on a phone. They want to know three things before their interest fades:"),
        li("what kind of books you write — one line such as “Gothic mysteries set on the Maine coast”, placed above everything else"),
        li("what comes next — the newest or upcoming book, with its cover and a buy button"),
        li("how to hear about the next one — a sign-up form, not a social media icon row"),
        p("Covers are the heaviest images on the page, so each one is stored in several sizes and modern formats: a phone on a slow connection gets a light file in a fraction of a second, a large screen gets a sharp one. A home page that opens with a long biography or a slider of reviews makes this reader scroll past what they came for."),

        h2("Book pages with retailer links for every store and country"),
        p("Every book gets its own address that you can put in back matter, ads, podcast notes and email signatures. On that page:"),
        li("the cover, the blurb as real text and a short hook line"),
        li("each format — ebook, paperback, hardcover, audiobook — with page count, narrator, publisher and ISBN"),
        li("a sample chapter readers can open on the page"),
        li("review lines and award mentions with their source"),
        li("content notes and age range where your readers expect them"),
        p("A reader in Melbourne who taps a link to the US Kindle store lands in a store where they cannot buy. Retailer buttons point to the right regional store, or to a universal book link from a service such as Books2Read, next to Bookshop.org, Barnes & Noble, Kobo, Apple Books, Google Play and the audiobook stores. Links live in one place in the editor, so a changed store link is fixed once and updates on the book page, the series page and the home page."),

        h2("Series reading order page on an author website"),
        p("“Where do I start?” and “What order do these go in?” are the questions readers email authors most. A series page settles them: the books numbered, novellas and short stories placed where they belong in the story, and a short note when the publishing order differs from the reading order. Every book page then carries a “Next in the series” block, so the reader who finishes book two late at night goes straight to book three."),
        p("Authors with several series, or with pen names in different genres, get a separate hub for each. A reader of your sweet small-town romances should not land on your dark thrillers without warning, and the menus keep the two apart."),

        h2("Newsletter sign-up as the main goal of self-published author websites"),
        p("For self-published author websites the email list is the most valuable thing the site produces. It is the one way to reach readers that no retailer ranking or social media feed controls, and launch-week sales depend on it. The site collects addresses in three places:"),
        li("a reader magnet — a prequel novella, a bonus epilogue or a deleted scene — delivered by BookFunnel, StoryOrigin or your email service"),
        li("a short form on the home page, at the end of every sample chapter and on each book page"),
        li("a separate landing page for the link in your back matter, so you can see how many subscribers the books themselves bring"),
        p("Forms connect to MailerLite, Kit, Mailchimp or the service you already pay for, tag new subscribers by series or pen name where your tool supports it, and ask for consent in a form that also covers readers in the EU and the UK."),

        h2("Preorder, launch and ARC request pages for a new book"),
        p("A new book needs an address months before release day. The page opens with the cover reveal and preorder links, adds an excerpt and early review lines as the date approaches, and becomes the normal book page afterwards. Because the address never changes, links you shared in January still work in June."),
        p("Advance reader copies get their own form. Reviewers, bloggers and BookTok or Bookstagram readers apply with their platform, audience size and the genres they cover; you approve the ones you want, and copies go out through BookFunnel or NetGalley, wherever your publisher or your own account handles them."),

        h2("Media kit and events page for authors"),
        p("Podcast hosts, librarians, bookstore event managers and festival organizers need the same files every time. A media kit page saves both sides an email exchange:"),
        li("bios in three lengths, written in the third person"),
        li("author photos in print resolution, with the photographer’s credit"),
        li("cover files and a one-page sell sheet for each book"),
        li("interview topics, past podcast and radio appearances, and contacts for your agent or publicist"),
        p("Readings, signings, school visits and panels go on an events page with date, venue, time zone and a link to tickets. Past events move to an archive, which shows an organizer you already know how a room works."),

        h2("Self-published and traditionally published author websites: what changes"),
        p("The structure is the same; the weight moves."),
        h3("Author website for a traditionally published author"),
        p("Your publisher has a page for each book, and you link to it. Your own site carries what the publisher’s page does not: all your books across imprints in one place, your voice, speaking and events, rights and translation enquiries routed to your agent, and a newsletter that stays with you if you change publishers."),
        h3("Author website for a self-published author"),
        p("You are the publisher, so the site does more of the selling. Next to the retailer links it can sell ebooks and audiobooks directly through a store such as Payhip or Shopify with BookFunnel delivery, offer bundles and signed paperbacks, and show the box sets that exist only on your site."),

        h2("Author website examples: design that matches your genre"),
        p("The best author website design follows the structure above and takes its look from the books. A reader should be able to guess the genre with the sound turned off."),
        h3("Romance author website design"),
        p("The covers set the colors. Readers often look for tropes and heat levels, so these become labels or filters on the book list, and couples or towns become series hubs. Bonus epilogues are reliable reader magnets in this genre."),
        h3("Thriller, mystery, fantasy and nonfiction"),
        p("Thrillers and mysteries use stronger contrast and short, tense copy. Fantasy readers come back for maps, character lists and glossaries between books, so those get their own pages. Nonfiction sites sell the author as an expert: speaking topics, media appearances, and an order form for bulk or corporate copies."),

        h2("Own domain or a platform: BookBub, Squarespace or custom author website design services"),
        p("You can create an author website for free or cheaply with BookBub’s author websites, Squarespace, Wix or a downloadable WordPress template, and for a debut author with one book that is a reasonable start. Your Amazon Author Central page, Goodreads and BookBub profiles are worth keeping current too, since readers look there. What these platforms do not hand you is an address you fully own and a list of readers’ emails."),
        p(
          "Custom design starts paying off when a backlist or several series no longer fit the template’s book layout, when you write under more than one name, when translated editions need their own language versions — see ",
          link("multilingual website development", "/services/multilingual-website-development"),
          " — or when years of blog posts on an older WordPress site have to move without breaking links from old interviews, as described under ",
          link("website redesign", "/services/website-redesign-services"),
          ".",
        ),

        h2("An author website that ChatGPT and Google AI Overviews can read"),
        p("More and more readers type questions into ChatGPT, Perplexity or Google’s AI Overviews, such as “a cozy mystery series with a bookshop owner, first book” or “in what order should I read the Harbor Lights novels?” An assistant answers from pages it can read. Your author name, pen names, genres, series and reading order are written as page text, and structured data marks up the author, every book with its ISBNs and formats, and each series with its order. Review lines carry their source and date, so they can be checked."),
        p(
          "Being named in those answers is further work; I describe it on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much author website design costs"),
        li("A simple author website — home page, book list and book pages, About, newsletter sign-up and contact: 700–1,400 €, design included."),
        li("A full author website with series hubs, retailer links by country, reader magnet setup, preorder and ARC request pages, a media kit and events: from 2,000 €, design included."),
        p(
          "The site, domain and hosting accounts are in your name from day one; after launch the only running costs are hosting and the domain. Every price range is listed on the ",
          link("pricing", "/pricing"),
          " page; how I plan, build and launch a site is covered under ",
          link("website development", "/services/website-development"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Author website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does author website design cost?", "A simple author website costs 700–1,400 € and a full site with series hubs, retailer links by country, ARC requests, a media kit and events starts at 2,000 €, with design part of each price. Send me your book list and you get a fixed figure."],
          ["Is an Amazon author page enough, or do I need my own site?", "The Amazon page serves readers who shop on Amazon. Your own site links to every store, shows series order clearly and collects newsletter subscribers, which is the one channel you control when the next book comes out."],
          ["Can I create an author website for free instead?", "Yes. BookBub, Squarespace and Wix all have author templates, and for a first book they are often enough. A custom site makes sense once several series, pen names or translated editions no longer fit the template."],
          ["Can I add a new book myself?", "Yes. In the editor a new book is a form: title, cover, blurb, formats, ISBNs, series number and retailer links. It appears on the book list, its series page and the home page without any code."],
          ["One website for several pen names, or one each?", "One site with a hub per pen name is usually cheaper to run and update. When the audiences should not cross, for example picture books and adult thrillers, separate sites are the safer choice."],
          ["How does a US author work with a web designer in Poland?", "Fully online, in English. Warsaw is six hours ahead of New York, so my afternoon is your morning and a review call fits easily, and comments on the designs cover the rest. You get a written contract and invoices in EUR."],
          ["Will my books appear in ChatGPT answers?", "The site gives AI assistants what they need to read: author and book facts as text and structured data for books and series. Getting named for particular questions is ongoing SEO and GEO work that I offer separately."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order author website design: what to send me"),
        p(
          "Send your author name and any pen names, a link to your current site and your Amazon or publisher page, the list of books with series and reading order, your newsletter service and reader magnet if you have one, the next release date, and two or three author sites you like. In reply you get a proposed page list and a fixed price. Use the ",
          link("form above", "#quote"),
          " or message me on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
