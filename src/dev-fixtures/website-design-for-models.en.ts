// Landing page fixture: Model portfolio website design (EN), group
// «website-design-for-models». REWRITE of the existing general page
// /website-design-for-models — URL stays, the old reviews block is removed.
// Audience: fashion, commercial, fitness and runway models, new faces and
// their parents (one sentence only: under 18 a parent signs and manages).
// Semantic core: ref/industry-scan-models.md and ref/adult.md («belongs to
// other pages» → this page): modeling portfolio website 720 (scan; category
// H2, metaTitle) · model portfolio website 320 / 720 (scan) (H1, first H2,
// AI H2, FAQ) · model website portfolio 320 (intro, Instagram H2) · website
// for models 2,400 (scan; intro, FAQ) · model website design 170 (templates
// H2, cost H2, FAQ) · modeling portfolio examples 1,300 (examples H2) · model
// portfolio website template(s) / free 20 each (templates H2) · fashion model
// website 90 (intro) · model website template 90 (templates H2).
// Intent: ref/intent-check-adult.md — «model portfolio website» vs «website
// for models» 0 shared URLs: the first is builders and template galleries
// (Canva, Portfoliobox, Wix, Format, sitebuilderreport, cmmodels), the second
// is platforms where models look for work (freelancermodels, zodel, agency
// sites) → the page answers when a builder is enough and when an own site
// pays off, and explains how a site works with agencies. «model portfolio
// website» vs «model website design» 1 shared URL (sitebuilderreport
// inspiration): the second is design galleries (Dribbble, Behance, Awwwards)
// → examples H2 says what galleries leave out (polaroids, stats).
// Angles: first screen for bookers; polaroids/digitals with date; online comp
// card with measurements in cm and inches, US/EU sizes, PDF; book by category
// (editorial, commercial/e-commerce, fitness, runway) with credits; intro and
// walk video loaded on tap; mother agency and placement agencies, booking via
// agency or direct form; new faces; privacy (city only, no home address, photo
// location data removed, unlisted polaroids page); examples; Instagram vs own
// domain; name search (Person schema, sameAs); multilingual for international
// castings; Canva/Wix/Format/Portfoliobox vs custom; AI-readable build; cost.
// Portfolio: Sasha Dith (performer’s site: video gallery, booking form, under
// one second), retail-analytics consultant (personal brand, 153 pages in three
// languages, calculators, templates — employer not named), Giuseppe (personal
// brand, calm custom design, pages in ChatGPT), Warsaw renovation and
// investment company (premium photo-led design), the owner’s own site
// (Next.js + Sanity, technical SEO).
// NOT on this page: adult topics of any kind and links to adult pages (owner’s
// rule); modeling agencies’ own websites; model scouting or job boards;
// minors beyond the one parent sentence; photographers (linked once) and
// makeup artists (linked once); ongoing SEO campaigns.
// Owner’s rules: every page covers AI search; design is included in the price;
// never say there are no clients from the visitor’s industry.
import { p, h2, h3, li, link, k } from "./pt";

export const websiteDesignForModelsEn = {
  lang: "en",
  group: "website-design-for-models",
  slug: "website-design-for-models",
  title: "Model portfolio website design",
  heading: "Model Portfolio Website Design",
  excerpt:
    "Model portfolio website design and build by one person: polaroids an agency can open on a phone, an online comp card with current measurements, a book split into editorial, commercial, fitness and runway, your mother agency and booking contact, and video that loads only when someone taps it.",
  seo: {
    metaTitle: "Modeling Portfolio Website for Models | Bandziuk",
    metaDescription:
      "Model website design and build: book by category, dated polaroids, online comp card in cm and inches, agency links, walk video, your name on Google. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Polaroids, comp card, agency links"],
  heroPhonePoints: ["Polaroids, taken this month", "Height 5′10″ · 178 cm", "Represented by", "Request a booking"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple model portfolio website, design included", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Model website with a book by category, polaroids page, online comp card with PDF, walk and intro video, agency and booking pages and language versions, design included", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with model portfolio website design",
      items: [
        { _key: k("o"), iconName: "image", title: "A book split by kind of work", text: "Editorial, commercial, fitness and runway" },
        { _key: k("o"), iconName: "layers", title: "Polaroids with the date taken", text: "Swap in a new set from your phone" },
        { _key: k("o"), iconName: "file-text", title: "An online comp card", text: "Stats in cm and inches, a PDF that stays current" },
        { _key: k("o"), iconName: "gauge", title: "Large photos, fast pages", text: "Sharp on any screen, video loads on tap" },
        { _key: k("o"), iconName: "shield-check", title: "Privacy built in", text: "City only, photo location data removed" },
        { _key: k("o"), iconName: "sparkles", title: "Your name on Google and in AI answers", text: "Agency, city and stats written as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple model portfolio website", value: "700–1,400 €", note: "design included" },
        { _key: k("r"), label: "Book by category, polaroids, comp card, video, languages", value: "from 2,000 €", note: "design included", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: a performer’s video-led site, personal brands and photo-first design",
      subtitle:
        "First, the official site of DJ and producer Sasha Dith, built on Next.js from his own Figma design: a video gallery, a booking form for events and collaborations, and pages that open in under one second. Next, the personal site of a retail-analytics consultant — 153 pages in three languages with calculators and templates — and the site of Giuseppe, a psychotherapist in Milan, whose calm custom design carries his own name and whose pages appear in ChatGPT answers. Then a Warsaw renovation and investment company whose premium design lets large photos of finished projects do the selling, and my own site on Next.js and Sanity, where I test the technical SEO that decides what shows up when someone searches a name.",
      picks: [
        "official-website-for-dj-and-producer-sasha-dith",
        "consultant-website-design-retail-analytics",
        "psychotherapist-website-milan",
        "renovation-and-investment-website-with-premium-design",
        "develop-and-optimize-a-personal-website-with-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your model portfolio website",
      subtitle: "Within one business day you get a page plan — book, polaroids, comp card, agency and contact — and a fixed price.",
      contextLabel: "Your name, Instagram or agency profile",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What do you have now?", options: ["Only Instagram", "A profile on my agency’s board", "Canva, Wix, Format or Portfoliobox", "A PDF comp card"] },
        { _key: k("z"), question: "Which work do you want more of?", options: ["Fashion and editorial", "Commercial and e-commerce", "Fitness and sportswear", "Runway and shows"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Model portfolio website design is the service on this page: I plan, design, code and launch personal websites for fashion, commercial, fitness and runway models, and the whole job stays with me. Bookers, casting directors and clients first meet you on an agency board, through a referral or on Instagram, then look you up by name. A website for models is where that search should end: your current look, your stats and one clear way to reach you or your agent."),

        h2("Model portfolio website: what agents, casting directors and clients check first"),
        p("Someone building a casting list gives each model a few seconds, often on a phone between appointments. They want to know whether your look fits the brief and how to book you. The opening screen answers both:"),
        li("one strong recent image instead of a grid of twenty"),
        li("your name as real text, with height and the city you work from"),
        li("“Represented by” with your mother agency and a link to your board page"),
        li("buttons for polaroids, comp card and contact"),
        p("The design stays quiet. Neutral type, generous white space and a restrained palette let the photos carry the page, and nothing in the layout needs changing when you cut your hair or dye it for a season."),

        h2("Polaroids, digitals and an online comp card with current measurements"),
        p("Agencies trust polaroids — digitals in US agency language — more than the book, because they show you as you are this month: daylight, no retouching, little or no makeup, plain fitted clothes, front, profile, full length and close-up. On the site they get their own page with the date of the set. You replace them from the editor after each new round, so nobody has to email you for “recent pictures”."),
        p("The comp card, called a zed card in much of Europe, becomes a page instead of a file: four or five images and your stats. Height, bust or chest, waist, hips, dress or suit size, inseam, shoe size, hair and eyes are fields in the CMS, shown in centimeters and in feet and inches, with US and EU sizes side by side. The same data builds a printable PDF, so a booker attaches this season’s card, not the one from two years ago."),

        h2("Modeling portfolio website by category: editorial, commercial, fitness and runway"),
        p("A catalog client looking for a warm, everyday face and a magazine editor looking for an editorial look should not scroll through the same mixed feed. The book is split into categories — editorial, commercial and e-commerce, fitness and sportswear, runway — and each gets its own short edit. Many models work in two of them; the home page then offers two entry points instead of one endless gallery."),
        p("Credits sit under each image: photographer, stylist, hair and makeup, and the client or publication where the work is out and you may name it. Test shoots are marked as tests. Photos stay sharp without making pages heavy: each one is saved in several sizes and modern formats, the first image loads at once and the rest load as the visitor scrolls."),
        p(
          "The photographers you shoot tests with may want a site built on the same principles; theirs is covered on ",
          link("photographer website design", "/photographer-website"),
          ".",
        ),

        h2("Runway walk video and intro video on a model website"),
        p("Casting teams more and more often ask for an intro video — name, height, agency and base city, said to camera in under a minute — and runway models add a walk video. Fitness models show a short movement clip; commercial models keep a recent self-tape. A video page holds them all, each behind a still frame, and the player starts loading only when someone taps it. The page stays fast on a phone even with several clips. Sasha Dith’s site, a DJ and producer’s portfolio I built, treats its video gallery the same way and opens in under one second."),

        h2("Mother agency and booking contact on a model website"),
        p("If you have a mother agency, it is named on every page with a link to your profile on its board, and placement agencies in other cities are listed under it. Booking requests then go through the agency, as most contracts expect: the contact button opens your booker’s email with your name already in the subject line. Freelance models, and models between agencies, get a direct form that asks for date, city, kind of job, image usage and budget, so each request arrives ready for an answer."),
        p("New faces use the same site to get signed. An agency’s first questions are height, city and current polaroids, and one clean link sends all three. For models under 18 a parent signs and manages the site."),
        h3("Privacy on a model website: city only, no home address"),
        p("The site names the city you work from, never a street. Location data is stripped from photos when they are uploaded, your email address sits behind a form so spam bots cannot collect it, and the polaroids page can live at an unlisted address you share only with agencies and clients."),

        h2("Modeling portfolio examples: what strong model websites have in common"),
        p("Search for modeling portfolio examples and most results are template galleries and design concepts. The model sites that work for bookers share a few plain habits:"),
        li("a tight edit of fifteen to twenty-five images rather than every frame ever shot"),
        li("polaroids from the last few months, with the date shown"),
        li("stats right next to the photos, not three clicks away"),
        li("one line about the agency and one contact path"),
        li("the newest work first, even when an older campaign is better known"),
        p("Design showcases on Dribbble or Behance rarely include polaroids or measurements; they show layouts. Use them for mood, then check every idea against what a booker needs from your page in the first ten seconds."),

        h2("Instagram or a model website on your own domain"),
        p("Instagram shows personality and fresh work, and casting teams do look at it. It is still a feed someone else arranges: the latest post is rarely your best, stats and agency details are squeezed into a bio, follower numbers pull attention from the pictures, and an account can be limited without notice. A model website portfolio on yourname.com works the other way round. You choose the order, the address stays the same when you change agencies, and the bio link points to whatever matters this week — new polaroids, a show season or a campaign that just went live."),

        h2("Name search: how a model website shows up when people google your name"),
        p("After a casting, people type your name into Google. Without a site, the top results tend to be an old agency profile, a tagged photo or someone else with the same name. A personal site gives search engines one clear source: your full name in page titles and headings, Person structured data that points to your agency board page, Instagram and other profiles, and a short bio written as text. I run the same technical setup on my own site, built on Next.js and Sanity."),
        p(
          "If you already have a site that does not show up for your name, an ",
          link("SEO audit", "/services/seo-audit"),
          " finds out why.",
        ),

        h2("Multilingual model website for international castings"),
        p("Models move between markets: a season in Milan, a few weeks in Paris or New York, a contract in Asia, then home. English is the working language of most castings, so it comes first. A second language helps when you also book clients in your home market — Polish, German, Spanish or Italian, for example. Each version gets its own addresses and hreflang tags, so Google shows the right one, and measurements switch units with the language. The retail-analytics consultant’s site in my portfolio runs 153 pages in three languages on the same structure."),
        p(
          "How language versions are planned and kept in sync is described on ",
          link("multilingual website development", "/services/multilingual-website-development"),
          ".",
        ),

        h2("Model website templates: Canva, Wix, Format, Portfoliobox or a custom model website design"),
        p("Canva, Wix, Format and Portfoliobox all sell model portfolio website templates, some with a free plan. For a new face with one test shoot and no agency yet, one of them is a sensible start. A custom model website design pays off when you need what templates handle poorly: polaroids and stats you update in a minute, measurements in two unit systems, a comp card PDF built from the same data, video that does not slow the page, more than one language and control over your name search. Whichever route you take, register the domain in your own name — not your agency’s and not a photographer’s."),

        h2("A model portfolio website that ChatGPT and Google AI Overviews can read"),
        p("Bookers and brands now ask assistants for things like “fitness models in Miami for a sportswear shoot” or which agency represents a model they saw in a campaign. ChatGPT and Google AI Overviews can only repeat what they can read. So your name, base city, agency, height, the kinds of work you do and the languages you speak are written as text, pages arrive from the server as finished HTML, structured data describes you as a person linked to your agency, and robots.txt lets in the AI crawlers you choose. Giuseppe’s site, a psychotherapy practice in Milan built on this setup, already appears in ChatGPT answers."),
        p(
          "Ongoing work on visibility in those answers is described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("How much model website design costs"),
        p("Design and build come as one price."),
        li("A simple model portfolio website — home, book, polaroids, measurements, agency and contact: 700–1,400 €."),
        li("A full site with a book by category, a dated polaroids page, an online comp card with PDF, walk and intro videos, booking forms and language versions: from 2,000 €."),
        p(
          "How every project runs, from brief to launch, is explained on the ",
          link("website development", "/services/website-development"),
          " page. Makeup artists who put together their own book have a separate page on ",
          link("makeup artist website design", "/makeup-artist-website-design"),
          ". All prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Model portfolio website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does a model portfolio website cost?", "A simple site is 700–1,400 €; a full site with a book by category, polaroids, an online comp card, video and language versions starts from 2,000 €. Design is part of both prices, and I name a fixed amount once I know which pages you need."],
          ["Do I need a website if my agency already has a profile for me?", "The board page belongs to the agency and changes or goes away when you move. Your own site keeps your name, book and contact at one address, links back to the agency and adds what a board page leaves out: video, full credits and more categories."],
          ["Can I update my polaroids and measurements myself?", "Yes. A new set of polaroids is an upload with a date, and measurements are fields you edit. The site shows them in centimeters and inches and rebuilds the comp card PDF on its own."],
          ["Should my measurements be public on the website?", "Most bookers expect height and key measurements on the page because they filter by them. If you prefer, the full comp card can sit on an unlisted page you send only to agencies and clients."],
          ["Can booking requests go to my agency instead of me?", "Yes. The contact button can lead to your booker, to you, or to either depending on the kind of job, and freelance work can come through a direct form."],
          ["Can the website be in more than one language?", "Yes, usually English plus the language of your home market. Each version has its own addresses, and measurements switch between centimeters and inches."],
          ["How is my privacy protected on the site?", "The site shows the city you work from, not your address. Location data is removed from photos on upload, your email stays behind a form, and private pages can be shared by link only."],
          ["Can you build a model website for me from Poland?", "Yes. I work remotely and in English: video calls, comments left right on the design and a shared folder for photos. A US morning is my CET afternoon, so calls fit around castings, and I invoice in EUR."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order a model portfolio website: what to send me"),
        p(
          "Send your name, Instagram and agency board link if you have one, the kinds of work you do, your current measurements, your latest polaroids, fifteen to twenty-five images for the book with credits, any walk or intro video, and the languages you work in. I reply with a page plan and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
