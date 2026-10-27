// Landing page fixture: Tattoo website design (EN), group
// «tattoo-website-design». New page. Reader: owners of tattoo studios and
// independent artists (US first) — not people looking for a tattoo.
// Semantic core: ref/batch-h1.md, tattoo studio group (US): tattoo website
// design 720 (H1, excerpt, several H2, cost H2, FAQ) · tattoo shop website 90
// (H2 on Instagram, metaTitle, FAQ) · tattoo website templates 50 (templates
// H2) · tattoo artist website design 10 (H2 on artist pages) · best tattoo
// website design 10 (templates H2). Grid: tattoo website 1,900 · tattoo seo 70
// → one H2 on local search that links /services/local-seo-services.
// Related searches: tattoo website design template / free / ideas, cool tattoo
// website, tattoo artists websites → templates H2.
// Intent: ref/intent-check-delta.md — «tattoo website» vs «tattoo website
// design»: 0 of 10 shared URLs. «tattoo website» returns studios’ own sites,
// studio software (DaySmart, TattooCloud, Inkjin) and agencies → mixed; the
// design SERP (CyberOptik, MotoCMS, Reddit, Pinterest, Tattoo Studio Pro) →
// owners choosing a designer or a template. This page targets the owner.
// «tattoo design website», «free tattoo design website», «ai website for tattoo
// design» = tools for designing a tattoo (consumers) — not targeted. «tattoo
// shops near me» (1M) = clients → the reason for the Google Business Profile
// H2. Tattoo supply stores — not targeted.
// Angles: Instagram vs own site, portfolio by style with healed photos, artist
// pages for residents and guests, guest spots and flash days, booking request
// form (placement, size, references, budget, artist, dates), online deposits
// with a written policy (Landi Room — Stripe Checkout), aftercare / age and ID
// / hygiene and license pages, image-heavy pages that stay fast (Sasha Dith),
// tattoo shop SEO, AI-readable build, templates vs custom, cost.
// Portfolio: Sasha Dith (fast media-heavy site + booking form), Landi Room
// (online payment), Giuseppe (calm trust design, found through ChatGPT), auto
// repair (local SEO, Google Maps), Felgilab (workshop service and price pages).
// NOT on this page: booking-app arguments, price tables by length, stylist
// logins (hair salon page — published neighbour, not repeated); ranking work in
// detail (/services/local-seo-services); painters and illustrators selling art
// (/artist-website-design, linked once); piercing studios; tattoo supplies.
// Owner’s rules: every page covers AI search; design is included in the price;
// never say there are no clients from the visitor’s industry.
import { p, h2, li, link, k } from "./pt";

export const tattooWebsiteDesignEn = {
  lang: "en",
  group: "tattoo-website-design",
  slug: "tattoo-website-design",
  title: "Tattoo website design for studios and artists",
  heading: "Tattoo Website Design for Studios and Tattoo Artists",
  excerpt:
    "Tattoo website design for studios and independent artists: a portfolio sorted by style and by artist, a page for every resident and guest artist, a booking request with placement, size and reference images, deposits paid online under your policy, and fast pages for hundreds of photos. One person plans, designs and builds it, and the price is agreed before work starts.",
  seo: {
    metaTitle: "Tattoo Shop Website with Booking and Deposits | Bandziuk",
    metaDescription:
      "Tattoo website design: portfolio by style and artist, guest spots, booking requests with references, online deposits, aftercare, fast galleries. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Deposits paid online"],
  heroPhonePoints: ["Request a tattoo", "Fine line · Blackwork · Japanese", "Pay your deposit", "Guest artist dates"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple tattoo studio or tattoo artist website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Tattoo studio website with a portfolio filtered by style and artist, artist and guest pages, booking requests with uploads, online deposits, a guest spot and flash calendar and local SEO setup, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with tattoo website design",
      items: [
        { _key: k("o"), iconName: "image", title: "Portfolio by style and by artist", text: "Fine line, blackwork, realism, healed work marked" },
        { _key: k("o"), iconName: "users", title: "A page for every artist", text: "Residents and guests, books open or closed" },
        { _key: k("o"), iconName: "file-text", title: "A booking request with references", text: "Placement, size, photos, budget, preferred dates" },
        { _key: k("o"), iconName: "shield-check", title: "Deposits paid online", text: "Your policy shown and agreed before payment" },
        { _key: k("o"), iconName: "gauge", title: "Hundreds of photos, fast pages", text: "Resized images, video only on tap" },
        { _key: k("o"), iconName: "sparkles", title: "Readable by Google and ChatGPT", text: "Styles, artists, rules and hours as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple tattoo studio or artist website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Portfolio filters, artists, requests, deposits, guest calendar", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Portfolio: fast visual sites, online payments and local businesses I built",
      subtitle:
        "What these sites share with a tattoo studio’s site is the work behind it. Sasha Dith, a DJ and producer, got a Next.js site with a video gallery and a booking form that loads in under one second — the same weight problem a portfolio of hundreds of tattoo photos has. The course page of Landi Room, a Warsaw beauty salon, charges the buyer through Stripe Checkout and opens access with no one touching it — the flow a tattoo deposit needs. Giuseppe, a psychotherapist in Milan, sells trust before anything else, as a studio does, and he came to me through ChatGPT. For a Warsaw auto repair shop I handled local search, the Google Maps listing and service pages; for Felgilab, a wheel-renovation workshop, clear pages for each service and its price. That is how people nearby find a studio and compare it.",
      picks: [
        "official-website-for-dj-and-producer-sasha-dith",
        "e-commerce-landing-page-with-secured-video-access",
        "psychotherapist-website-milan",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your tattoo website",
      subtitle: "I reply within one business day with a page list for your studio, a short note on how requests and deposits would work, and a fixed price.",
      contextLabel: "Studio name, Instagram or current site",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["Instagram and DMs only", "A booking page from studio software", "A site-builder theme", "A dated site nobody updates"] },
        { _key: k("z"), question: "What kind of studio is it?", options: ["Solo artist or private studio", "Studio with resident artists", "Studio that hosts guest artists", "Several locations"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Tattoo website design is my service for tattoo studios and independent artists who want their work, their artists and their booking rules on a site they own, not only in an Instagram grid. I plan, design and build it myself, at a price fixed before work starts, and at launch the studio manager gets an admin panel for new work and dates. A good tattoo shop website does three jobs: it shows a stranger enough of the right work to trust you, it filters out requests your artists would turn down, and it turns a serious request into a paid deposit and a date."),

        h2("Does a tattoo shop need a website when Instagram already shows the work?"),
        p("Instagram is where most clients first see an artist, and it should stay that way. A feed, though, is made for scrolling, not for deciding. Someone who wants a fine line botanical piece on the forearm has to dig through months of posts, stories and giveaways to find three examples, and older work slips out of sight even when it is your best."),
        p("Your own tattoo shop website adds what the feed lacks:"),
        li("a page that comes up when someone searches “tattoo shop” or “fine line tattoo” with your city, which a profile rarely does"),
        li("work grouped by style and by artist, kept for as long as you want it"),
        li("deposit, cancellation, age and aftercare rules written out in full, in one place"),
        li("a booking request that arrives with the details an artist needs, instead of “how much for a small one?” in DMs"),
        li("an address that survives a restricted or hacked account"),
        p("Instagram keeps feeding the site. Each artist page links to their profile, and the best posts are moved into the portfolio with a tag, so the site never depends on an embedded feed."),

        h2("Tattoo portfolio by style: fine line, blackwork, realism, traditional and Japanese"),
        p("Clients pick a tattoo artist by style before anything else, so the portfolio follows the way they search. Every photo carries two tags, the style and the artist, and the gallery filters by either:"),
        li("the styles your studio really does — fine line, blackwork, realism, American traditional, neo-traditional, Japanese, lettering, dotwork, color, cover-ups"),
        li("placement where it helps: sleeves, back pieces, small work on hands and fingers"),
        li("healed photos next to fresh ones and marked as healed, because a fine line piece six months on is the picture that convinces a careful client"),
        p("Photos go online with the client’s consent. The style list comes from your studio, not from a template’s categories: if a style is missing from the filter, visitors assume nobody in the studio does it."),

        h2("Tattoo artist pages for residents, guest spots and flash days"),
        p("Each artist gets a page under the studio’s address: a photo, the styles they take on and the ones they decline, years in the trade, the languages they speak and one status line — books open, closed or waitlist only. A request sent from that page already names the artist."),
        p("Guest artists get the same kind of page for the dates they work with you. A short calendar lists upcoming guest spots and flash days with the artist, the dates and how booking works: requests in advance, or first come, first served on the day. Flash sheets can be published with fixed prices and marked as taken once tattooed, so nobody asks for a design that is gone. After a guest leaves, the page stays as an archive of the visit or points to the artists page."),

        h2("A tattoo booking request form: placement, size, references and budget"),
        p("Most custom work starts with a conversation, not an instant slot, so the site collects a request first. The form asks what an artist would ask in the first three messages:"),
        li("the idea in a few sentences, and whether it is new work, a cover-up or a touch-up"),
        li("placement and approximate size in inches, with a simple body outline to tap for those who are unsure"),
        li("up to five reference images uploaded from the phone"),
        li("color or black and grey, a budget range picked from options, the preferred artist and the dates that suit"),
        li("confirmation of age and the contact the client prefers for the reply"),
        p("Requests reach the studio inbox in one readable format, tagged by artist, or go into your tattoo studio software where it accepts them. An artist with a full waitlist closes their form with a short note, and requests flow to the others."),

        h2("Tattoo deposits paid online, with a policy clients read first"),
        p("Once an artist accepts a request, the client gets a link to pay the deposit with a card or a phone wallet, and the date is held when the payment clears. I built the same pay-then-confirm flow for Landi Room, a Warsaw beauty salon: buyers of its online course pay via Stripe Checkout and a protected video unlocks on its own, and the course passed 100 sales on the very first Google Ads campaign. For a studio, the payment holds a date instead of opening a video."),
        p("The deposit policy sits right above the payment button in plain words, and the client ticks a box to accept it:"),
        li("the amount, and that it comes off the price of the final session"),
        li("how much notice a reschedule needs and how many times a date can move"),
        li("what happens to the deposit after a no-show or a late cancellation"),
        li("what happens when the artist has to cancel"),
        p("The wording is yours; the site makes sure it is read before the card is charged, which settles most disputes before they start."),

        h2("Aftercare, age and ID, and hygiene pages on a tattoo studio website"),
        p("A few short pages answer what the front desk hears every day. The aftercare page holds your instructions — washing, the film or bandage you use, what to avoid in the first weeks — and its link goes to every client after the session, so a paper sheet is not the only copy. The age and ID policy states your minimum age and the documents you accept, as local law and your rules require. Where your state or county requires a license or health permit to be displayed, its number sits in the footer, next to a short note on how you sterilize equipment and use single-use needles. The rules come from the studio; the site makes them easy to find."),

        h2("Image-heavy tattoo websites that still load fast on a phone"),
        p("A tattoo site is mostly photos, and that is where slow sites come from: full-size images straight from a phone, autoplaying video, an Instagram widget pulling dozens of posts. On the sites I build, each image is resized for the screen that requests it and served in a modern format, galleries load as the visitor scrolls, and video plays only when tapped."),
        p(
          "The site of Sasha Dith, a DJ and producer, is built this way on Next.js from his own Figma design: a video gallery, a discography and a booking form, loading in under one second after it replaced slow builder pages. A portfolio of several hundred tattoos follows the same rules. More on the framework is on the ",
          link("Next.js development", "/services/nextjs-development-services"),
          " page.",
        ),

        h2("Tattoo shop SEO: Google Business Profile and “tattoo shops near me”"),
        p("Most people looking for a studio type “tattoo shops near me” or a style plus a city and pick from the map. The map listing comes from your Google Business Profile, and the site backs it up: a matching studio name, street address, phone number and opening hours, a page for each style you want more requests for, artist pages with real names, and structured data describing the studio, its location and hours. Reviews that mention a style and an artist help both the listing and the pages."),
        p(
          "The ongoing work on the listing, reviews and local rankings is described on the ",
          link("local SEO services", "/services/local-seo-services"),
          " page.",
        ),

        h2("A tattoo website that ChatGPT and Google AI Overviews can read"),
        p("Questions such as “a tattoo studio in Portland that does Japanese sleeves” or “a fine line artist in Brooklyn with open books” now go to ChatGPT and to Google, which answers some of them with an AI Overview. Neither can recommend a studio it cannot read about. On the sites I build, the styles, each artist’s specialties, the deposit rules, the hours and the address arrive as plain HTML in the first response from the server, not as images or text a script adds later, and the same facts sit in TattooParlor structured data that agrees with your Google listing. Giuseppe, a psychotherapist in Milan whose site I rebuilt on Next.js, found me through ChatGPT, and his new pages already appear in its answers."),
        p(
          "Earning mentions in those answers month after month is ongoing work; I describe it on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Tattoo website templates or a custom tattoo website design"),
        p("Tattoo website templates — dark themes with one big photo on top — and the site builders bundled with studio software are a fair start for a solo artist with a full book. They get tight as the studio grows: filtering work by style and artist, a request form with uploads, deposits under your own policy, a guest calendar and fast galleries each become an add-on, and the result looks like every other studio on that theme. Lists of the best tattoo website designs favor dramatic effects; the sites that fill chairs show the work quickly and make the next step obvious. I build a custom site around your styles and your artists, on WordPress or Next.js, and the domain, the photos and every client request stay with the studio."),
        p(
          "Artists who also sell paintings, prints or original flash as artwork will find the gallery-and-shop format on the ",
          link("artist website design", "/artist-website-design"),
          " page.",
        ),

        h2("How much tattoo website design costs"),
        p("Both prices include the design:"),
        li("A simple tattoo website — home, portfolio by style, artists, booking request, aftercare and policies, contact: 700–1,400 €."),
        li("A full tattoo studio website with a filtered portfolio, artist and guest pages, a request form with uploads, online deposits, a guest spot and flash calendar and local SEO setup: from 2,000 €."),
        p(
          "The stages of a build, from the first call to launch, are on the ",
          link("website development", "/services/website-development"),
          " page; the ",
          link("pricing", "/pricing"),
          " page lists all my services with their prices.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Tattoo website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a tattoo website cost?", "700–1,400 € for a simple studio or artist site, from 2,000 € for a full site with a filtered portfolio, artist and guest pages, a request form, online deposits and a guest spot calendar. Design is included, and the price is fixed once I have seen your artists and how you book."],
          ["Can clients pay a tattoo deposit on the website?", "Yes. After the artist accepts a request, the client agrees to your deposit policy and pays by card, Apple Pay or Google Pay through a provider such as Stripe. The money goes straight to the studio’s account."],
          ["Will the site work with my tattoo studio software?", "Usually. If your software offers a booking link or takes requests from a form, the site connects to it; if not, requests arrive by email in one format. I check what your system allows before quoting."],
          ["Should the portfolio pull posts from Instagram automatically?", "Not for the main gallery: an embedded feed is slow, unsorted and breaks whenever the platform changes its rules. Artists pick their best posts and add them with a style tag, and each artist page links to their Instagram."],
          ["Can guest artists get a page for just a few days?", "Yes. A guest page goes live before the visit with the dates and booking rules, flash sheets can be added, and after the visit the page stays as an archive or points to the artists page."],
          ["How long does it take to build a tattoo website?", "A simple studio or artist site usually takes two to three weeks. A full site with deposits and calendars takes longer, and the timing depends mostly on how quickly portfolio photos and policies are ready."],
          ["Do you build websites for US tattoo shops from Poland?", "Yes. The whole project runs online and in English. My working day in Warsaw continues into your morning, so video calls land before the studio opens its doors, and feedback on the design is left as written notes on the mockups. Invoices are issued in EUR or, if we agree, in another currency."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order tattoo website design: what to send me"),
        p(
          "Send your studio name and Instagram, the artists and the styles each one does, how you take bookings now, your deposit and cancellation rules, whether you host guest artists or flash days, and a few photos of the work you are proudest of. You get back a list of pages for your studio and one fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
