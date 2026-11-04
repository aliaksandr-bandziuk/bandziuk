// Landing page fixture: SEO for authors (EN), group «author-seo». NEW page —
// create-landing.cjs, root level like the other industry SEO pages.
//
// Why it exists (04.11.2026). Measured: «author seo» 420. The paired WEBSITE
// page already exists — /author-website-design (page per book, series order,
// retailer links, newsletter, media kit) and holds «author website» 8820 and
// «author website design» 740. The gap is the promotion form only, as it was
// for coaches and musicians.
//
// SERP (checked 04.11.2026) — the head term splits into THREE meanings:
//   1. academic publishing: springernature.com, wiley.com — helping paper
//      authors get their research found and cited;
//   2. the E-E-A-T concept: aioseo.com — author bylines and authority as a
//      ranking factor, nothing to do with selling books;
//   3. book authors: authormedia.com, thebookdesigner.com, brilliantauthor.com.
// Only the third is ours, so roughly a third of the 420 is addressable. The
// page states which meaning it is about in the first lines on purpose — both
// for the reader and so a search engine matches the right intent.
//
// EN only, measured. Russian has «сайт для писателя» 210 on an existing page;
// no Russian or Polish promotion form appears in the core.
//
// The limit stated honestly on the page: Amazon owns book-title queries and a
// book page will rarely outrank it. The author NAME, the series and the
// recommendation questions are winnable, and AI assistants have become a real
// discovery route for books, which is where a readable author site pays off.
import { p, h2, h3, li, link, k } from "./pt";

export const authorSeoEn = {
  lang: "en",
  group: "author-seo",
  slug: "seo-for-authors",
  title: "SEO for Authors and Novelists",
  heading: "SEO for authors: how a book and its writer get found by readers who have not heard of them yet",
  excerpt:
    "Amazon owns the search for your book title and that will not change. What is winnable is your own name, the series, and the recommendation questions readers now ask an assistant. Audit from €250, and I say which of it is not worth doing.",
  seo: {
    metaTitle: "Author SEO: get your books found — from €250",
    metaDescription:
      "SEO for novelists and non-fiction authors: owning your name, series pages, recommendation queries and AI answers. Audit €250, ongoing €800/month.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Own your name and series", "Audit from €250", "Reply in 1 working day"],
  heroPhonePoints: ["«Books like» your title", "Series in reading order", "Newsletter that keeps the reader", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "SEO audit for an author site: name search, series, retailers and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off SEO work: author and series pages, book data, structured data", price: 250, maxPrice: 800, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Ongoing SEO for an author with a growing backlist", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What the work covers",
      title: "What SEO for an author actually consists of",
      items: [
        { _key: k("o"), iconName: "search", title: "Owning your own name in search", text: "Your site beside the retailers, not behind them" },
        { _key: k("o"), iconName: "book", title: "A series readers can enter anywhere", text: "Reading order, spin-offs, what to read first" },
        { _key: k("o"), iconName: "users", title: "The recommendation questions", text: "«Books like X», «best novels about Y»" },
        { _key: k("o"), iconName: "mail", title: "Turning a search into a subscriber", text: "The newsletter is the asset, not the sale" },
        { _key: k("o"), iconName: "file-text", title: "Book data machines can read", text: "Titles, ISBNs, series, formats, dates" },
        { _key: k("o"), iconName: "bot", title: "Being named by AI assistants", text: "«Recommend me a novel like this one»" },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        h3("Three different things are called author SEO, and this is one of them"),
        p("The phrase is used for three unrelated jobs. Academic publishers use it for helping researchers get papers found and cited. SEO software uses it for author bylines and expertise as a ranking factor on any website. Writers use it for getting books and themselves discovered by readers. This page is about the third one: novelists, non-fiction authors and self-published writers with a backlist to sell."),

        h2("What an author site can win in search, and what it cannot"),
        p("Start with the limit. Search your book title and the first screen is Amazon, Goodreads, a retailer or two and possibly a pirate site. Your page will not take that first place, and chasing it is how authors waste a year. Title search is also the least valuable query you could win, because the person typing it already knows the book exists and will buy it wherever they land."),
        p("Three things are winnable and worth more. Your own name, which readers search after finishing something and liking it — that search should reach you, not a retailer page that sells one book and shows nothing else you wrote. Your series, which readers search in confusion about reading order more often than anything else. And the recommendation questions, where somebody does not know your name at all and asks for a book like one they loved."),

        h2("Why a series page earns more than a book page"),
        p("A reader who finished book two does not search for book three by its title; they search for the series and the order. A reader who heard about a series searches for where to start. A reader halfway through searches whether the spin-off matters. These are small, specific, repeating queries that retailers answer badly, because a retailer page is built to sell one item rather than to explain a shelf."),
        p("So the structure is a page for the series that states the reading order plainly, what each book covers without spoiling it, where the novellas and prequels fit, and what to read next when the series ends. It is the page readers bookmark and send to each other, and it is the one an assistant can quote when asked where to start."),
        li("state the reading order in text, numbered, near the top;"),
        li("say what to read first for a newcomer and what is optional;"),
        li("name every format and edition, because readers search by format;"),
        li("link to every retailer rather than one, including the library option;"),
        li("and keep the series page updated before the release, not after."),
        p(
          "What the site itself needs — a page per book, retailer links, media kit, newsletter — is a different job and is described on the ",
          link("author website design page", "/author-website-design"),
          ".",
        ),

        h2("The recommendation question is where new readers come from"),
        p("«Books like Project Hail Mary», «best historical novels set in Poland», «something to read after finishing a series» — these are the queries that reach a reader who has never heard your name, and they are also the exact shape of question people now ask an assistant rather than a search engine. Being an answer to them is not done by repeating keywords; it is done by having a page that describes your book the way a reader would describe it to a friend: the setting, the period, the feel, the comparable titles, the content warnings."),
        p("Most author sites cannot be used this way, because the only description on them is the publisher's cover copy, which is written to sell and not to inform. The version that works says what the book is actually like, for whom, and when it is not the right choice. That last part is the one authors resist and the one that makes the page quotable."),
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: sites where a personal name is the product",
      subtitle:
        "What these have in common with an author's site: the person is the brand, the visitor checks before committing, and the growth came from structure and content rather than bought links. A retail-analytics consultant, a personal site built and optimised from scratch, an education agency taken from one country to ten, a digital agency site, and a multilingual site for student services.",
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
      title: "An SEO audit for your author site",
      subtitle: "Send the site and I reply within one working day: what is holding it back and what I would do first.",
      contextLabel: "Author name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get the audit",
      note: "Or message me on WhatsApp — I answer just as quickly.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "How many books are out?", options: ["One", "Two to four", "A series", "A long backlist"] },
        { _key: k("z"), question: "How are they published?", options: ["Traditionally", "Self-published", "Both", "First one coming"] },
        { _key: k("z"), question: "What do you want more of?", options: ["Newsletter subscribers", "Direct sales", "Readers for the backlist", "Press and events"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Being named when a reader asks ChatGPT for a book (GEO, AEO)"),
        p("Asking an assistant for a book recommendation has become one of the ordinary ways readers find something to read, and it suits books unusually well: the reader wants a shortlist with reasons rather than a page of adverts, and they describe what they want in a sentence no keyword tool would ever produce. The assistant answers from text it can read and from sources that agree with each other, which means an author is named when the book is described in plain text somewhere it can reach — setting, period, themes, comparable titles, series position — and when the same titles, formats and series order appear consistently on the site, the retailers and the book databases."),
        p(
          "Getting an existing site into that state is ",
          link("preparing a site for AI search", "/services/ai-search-readiness"),
          ", and if assistants are getting your work wrong — attributing a book to someone else, inventing a title, misordering a series — that is ",
          link("fixing AI misinformation", "/services/fix-ai-misinformation"),
          ".",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for authors: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does SEO for an author site cost?", "An audit is €250, one-off work €250–800 depending on scope, ongoing work €800 a month. What moves the number is the size of the backlist, whether there is a series to untangle, and whether the site can be edited or is locked inside a builder's template."],
          ["Can you get my book above Amazon for its own title?", "No, and I would not take money to try. Amazon and the retailers own title search and that is not going to change. The work is on your name, your series and the recommendation questions, which are winnable and bring readers who do not yet know the book exists."],
          ["I have one book. Is this worth doing?", "Usually not yet, and that is the honest answer. With one title there is little to structure and the newsletter matters more than search. Come back when there are three or a series, or do the website work instead and leave promotion until there is a backlist to promote."],
          ["My publisher handles marketing. Do I need my own site?", "Publishers market a book during its launch window; your name has to work for the decade after. An author site is the only asset that stays yours when the publisher's attention moves to the next list, and it is where a reader who liked one book finds the other nine."],
          ["Does this work for non-fiction?", "It works better. Non-fiction readers search for the problem rather than the title — a topic, a question, a method — and those searches can be answered by pages around the book, which is a larger surface than fiction offers."],
          ["How long before anything changes?", "First movement after about a month and a half, steadier growth on a three to six month horizon. Name and series queries usually move first, because the competition on them is thin by definition."],
          ["Can you guarantee a position?", "No, and nobody honest can — the ranking is decided by a system neither of us controls. What I can state is what will be changed, in what order, and what we measure at one month and at three."],
          ["Who writes the book descriptions?", "I draft and you correct. The description that works in search is not the cover copy: it says what the book is actually like and who it suits, including who it does not, and only the author can supply that."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order an SEO audit for an author site: what to send me"),
        p("Send the site and your author name, say how many books are out and whether any of them form a series, and tell me what you actually want more of — newsletter subscribers, direct sales, or readers working through the backlist. I reply within one working day with what comes up when I search your name, what is holding the site back, and what I would do first. If you have one book and no series yet, I will tell you to wait rather than sell you a programme."),
      ],
    },
  ],
};
