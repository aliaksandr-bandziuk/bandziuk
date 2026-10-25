// Landing page fixture: Nonprofit website design (EN, US first), group
// «nonprofit-website-design». New page.
// Semantic core: ref/nonprofits-manufacturers.md / .csv + BRIEF.md: website
// design for nonprofit / website design for nonprofit organization / website
// design for nonprofit organizations / nonprofit website design / website
// design nonprofit / design a nonprofit website 720 each (H1, H2s) · best
// nonprofit websites 390 (H2, patterns only, no real organizations named) ·
// nonprofit website templates 320 + website templates for nonprofit
// organizations 260 (H2) · donation website for nonprofit 210 (donation H2) ·
// best nonprofit website design 110, nonprofit website design services /
// agency 110, company 50 (process H2) · nonprofit website design examples /
// ideas (related, in text) · nonprofit website cost 10 + PAA (cost H2 + FAQ).
// PAA used: How do I create a website for my non-profit? (process H2 + FAQ) ·
// What is the best website builder for a nonprofit? · Which is better for
// nonprofits, Wix or Squarespace? (builder H2 + FAQ) · How much does it cost to
// build a website for a nonprofit? (cost H2 + FAQ).
// SERP: agencies (Media Cause, Fifty & Fifty, DesignRush list), Blackbaud,
// TechSoup, Neon One, Dribbble.
// Intent: ref/intent-check-nonprofits-manufacturers.md — «website for
// nonprofit» 1,900 vs «nonprofit website design» 0 of 10 shared URLs; «website
// for nonprofit» vs «best website builder for nonprofits» 2 shared (reddit,
// springly) → builder and free-site demand (Wix, Springly, Free for Charity):
// NOT targeted (website builder for nonprofit 590, free website for nonprofit
// 480), answered in one H2 «Website builder or a custom website for a
// nonprofit». «nonprofit seo» vs design 0 shared → /nonprofit-seo. «charity
// website design» vs «nonprofit website design» 0 shared, UK SERP →
// /charity-website-design. «nonprofit website cost» 0 shared → one H2 + FAQ
// here; the long answer is a future blog article.
// NOT on this page: keyword research, program pages for search, Google Ad
// Grants, Google Business Profile, links, GA4 reporting (/nonprofit-seo); UK
// rules — charity number, Gift Aid, JustGiving / Enthuse, Fundraising
// Regulator, UK GDPR / PECR, OSCR (/charity-website-design).
// Design is sold with development; prices include both. Owner’s rules: never
// say there are no clients from the visitor’s segment; every page covers AI
// search.
import { p, h2, h3, li, ol, link, k } from "./pt";

export const nonprofitWebsiteDesignEn = {
  lang: "en",
  group: "nonprofit-website-design",
  slug: "nonprofit-website-design",
  title: "Nonprofit website design",
  heading: "Nonprofit Website Design",
  excerpt:
    "I design and build nonprofit websites: a donation page that works in a few taps on a phone, mission, impact and program pages, volunteer and event sign-ups, and a transparency page with your reports, Form 990 and Candid profile.",
  seo: {
    metaTitle: "Website Design for Nonprofit Organizations | Bandziuk",
    metaDescription:
      "Nonprofit website design with the build included: a donation page that converts, program and impact pages, volunteer sign-ups, Form 990 links. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €", "Reply within one business day"],
  heroPhonePoints: ["Give monthly", "Our programs", "Volunteer this Saturday", "Annual impact report"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple nonprofit website, design and build", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Nonprofit website with donation page design, program and impact pages, volunteer and event sign-ups, transparency page and donor CRM connection, design and build", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with nonprofit website design",
      items: [
        { _key: k("o"), iconName: "trending-up", title: "A donation page that converts on a phone", text: "One-time or monthly in a few taps" },
        { _key: k("o"), iconName: "layers", title: "Mission, impact and program pages", text: "Each program on its own page" },
        { _key: k("o"), iconName: "message-circle", title: "Volunteer and event sign-ups", text: "Roles, shifts and dates people can join" },
        { _key: k("o"), iconName: "shield-check", title: "Reports, Form 990 and Candid in one place", text: "Proof for donors and grantmakers" },
        { _key: k("o"), iconName: "plug", title: "Donor CRM and donation platform links", text: "Bloomerang, Neon CRM, Salesforce — checked first" },
        { _key: k("o"), iconName: "sparkles", title: "Accessible and readable by AI assistants", text: "WCAG 2.1 AA, key facts as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple nonprofit website", value: "700–1,400 €", note: "design and build" },
        { _key: k("r"), label: "Donation, program and impact pages, sign-ups, CRM", value: "from 2,000 €", note: "design and build", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Web design portfolio: websites I have designed and built",
      subtitle:
        "An education agency working in ten countries and several languages, a renovation and investment company, a 3D laser scanning and BIM company, a car repair shop and a tyre-storage landing page. What a nonprofit site takes from them: a page for every service people ask about, request forms that collect what a small team needs, phone-first layouts and content that the staff edit themselves.",
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "auto-repair-seo-and-ux-boost",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your nonprofit website design",
      subtitle: "I reply within one business day with a plan for the home, donation, program and transparency pages and a fixed price.",
      contextLabel: "Organization name or current website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What should the website help with most?", options: ["More online donations", "Volunteer and event sign-ups", "Explaining our programs", "Credibility with funders"] },
        { _key: k("z"), question: "How do you take donations now?", options: ["A donation platform", "A PayPal or Stripe link", "Checks and bank transfers only", "Not yet"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Nonprofit website design is what I do for community organizations, foundations and charities, and I build the sites myself, so design and development come from one person at one price. A nonprofit site has more audiences than most: a donor deciding whether to give, a volunteer looking for a Saturday shift, a family looking for help, a program officer checking the organization before a grant, and a board member who just wants to fix a typo. The design gives each of them a short path and keeps the site easy for a small staff to run."),

        h2("Nonprofit website design: what donors, volunteers and people seeking help look for first"),
        p("The first screen answers four questions before anyone scrolls:"),
        li("what the organization does and for whom, in one plain sentence — “Free after-school tutoring for kids in East Austin”, not “Empowering futures together”"),
        li("where it works — the city, county or region"),
        li("how to give — a Donate button that stays in the header on every page"),
        li("how else to take part — volunteer, come to an event, or get help"),
        p("People who need your services often arrive on a phone and in a hurry. A “Get help” link next to Donate keeps them from scrolling past fundraising appeals to find a phone number."),

        h2("Donation page design for nonprofits: one-time and monthly gifts on a phone"),
        p("The donation page is where design pays for itself. The visitor has already decided to give; every extra field, slow script or redirect is a reason to stop. The layout:"),
        ol("A one-time and monthly switch at the top, with monthly shown first if recurring gifts matter most to you."),
        ol("Three or four suggested amounts, each with a line on what it pays for, written from your own figures."),
        ol("An “other amount” field, name, email and card or wallet payment on one screen."),
        ol("Optional extras below: a gift in honor or memory of someone, covering the processing fee, employer matching."),
        ol("A thank-you page that says what happens next and offers one more step: share, volunteer or sign up for updates."),
        p("Payments run through a processor such as Stripe or PayPal, or through a donation platform such as Givebutter, Donorbox or GoFundMe Pro (formerly Classy). A form kept on your own page, in your own design, usually loses fewer donors than a jump to another site with a different look. How far a platform’s form can be embedded and styled differs, so I check yours before quoting. The emailed receipt carries the details the IRS expects in a donor acknowledgment; confirm the current wording with your accountant."),

        h2("Mission, impact and program pages in website design for nonprofit organizations"),
        p("Donors and grantmakers want to see what changes because of your work. Impact pages that persuade share a few habits:"),
        li("figures you can document — people served, meals, hours of tutoring — with the year, as text rather than inside a graphic"),
        li("one story per page with a real photo, used with the person’s consent, instead of a wall of stock smiles"),
        li("a page for each program: who it serves, where, how to join or refer someone and who funds it"),
        li("a donation option on each program page, if you accept gifts restricted to a program"),
        p("A program on its own page also lets staff send one link to a partner or a family instead of writing the explanation again in every email."),

        h2("Volunteer and event sign-up pages on a nonprofit website"),
        p("Volunteers look for something concrete: a shift, a skill, a place. The volunteer page lists roles with the hours they take, age limits or background checks and where the work happens, then a short form or a link to the scheduling tool you already use. Each event gets its own page with the date, place, accessibility notes, a map and registration or tickets. Past events move to an archive on their own, so the site never invites people to last year’s gala."),

        h2("Transparency on a nonprofit website: annual reports, Form 990 and your Candid profile"),
        p("Before a larger gift or a grant, people check that the organization is real and well run. A transparency or “Financials” page puts the proof in one place:"),
        li("the latest annual or impact report as a web page, with the PDF for printing"),
        li("links to your recent Form 990 filings and to your Candid (formerly GuideStar) profile, plus Charity Navigator if you are rated there"),
        li("the board and senior staff with names and roles"),
        li("your EIN and 501(c)(3) status in the footer, so a donor can confirm them"),
        p("Staff replace these each year from the admin panel; a report from four years ago raises more questions than it answers."),

        h2("Accessible nonprofit website design to WCAG 2.1 AA"),
        p("Many nonprofits serve older people, people with disabilities and people reading in a second language, so accessibility is part of the mission. The design targets WCAG 2.1 AA: contrast that passes, text that resizes, every action reachable by keyboard, labeled form fields with clear error messages, captions on video and alt text on photos. The donation form is tested with a screen reader before launch, because an inaccessible step there costs both a gift and a supporter."),

        h2("Donor CRM integration for nonprofits: Bloomerang, Neon CRM or Salesforce"),
        p("Most nonprofits keep donors in a CRM, and the website should feed it rather than start another list. In general terms:"),
        li("donations, volunteer forms and newsletter sign-ups passing their data to the CRM you use — Bloomerang, Neon CRM, Salesforce Nonprofit Cloud or another — directly or through the donation platform"),
        li("one email list, with consent recorded at sign-up"),
        li("events and volunteer shifts run in the tool your team already knows, linked from the site"),
        p("What can be connected depends on each tool’s options and your plan. I check that before the quote and do not promise a connection the tool does not offer."),

        h2("Website builder or a custom website for a nonprofit"),
        p("Much of the search for a website for a nonprofit is really a search for a free or cheap builder, and for some organizations that is the right answer."),
        h3("When Wix, Squarespace or a free program is enough for a nonprofit"),
        li("you are a new or all-volunteer group with one program and a donation link"),
        li("someone on the board has time to build the site and keep it current"),
        li("donations run through a platform’s hosted page anyway"),
        li("free help fits your needs — Google for Nonprofits gives eligible organizations Google Workspace and other tools, and programs such as Free for Charity build basic sites; check their current terms"),
        p("Wix or Squarespace? For a small nonprofit either works: Squarespace templates look tidy with little effort, Wix has a freer editor. Choose the one your volunteer finds easier to update."),
        h3("When a custom nonprofit website pays off"),
        li("several programs, locations or languages that each need their own pages"),
        li("a donation page on your own domain, designed for your appeals and campaigns"),
        li("donor CRM and donation platform working together without copy-paste"),
        li("staff turnover — an admin panel where a new coordinator adds an event without breaking the layout"),
        li("control over speed, accessibility and search settings that a builder limits"),

        h2("Best nonprofit websites and nonprofit website templates: patterns worth copying"),
        p("Lists of the best nonprofit websites mix global charities with small local groups. Across budgets the same patterns repeat:"),
        li("a mission sentence and a Donate button on the first screen"),
        li("real photos of the people and places the organization works with"),
        li("impact told with a few documented figures and one story"),
        li("a separate path for people who need help"),
        li("one accent color kept for the donation button"),
        p("Nonprofit website templates copy the look of these sites, rarely the structure: one generic “Our work” page, a Donate button that opens a bare payment link, no place for reports. When you browse nonprofit website design examples for ideas, look past the home page at the donation and program pages."),

        h2("A nonprofit website that ChatGPT and Google AI Overviews can read"),
        p("Donors and volunteers now ask ChatGPT, Perplexity or Google’s AI Overviews which organizations work on a cause in their city. Assistants can only mention what they can read. The design keeps the mission, programs, service area, EIN, walk-in hours and contacts as page text, adds structured data for the organization and keeps key facts out of images, sliders and PDFs."),
        p(
          "Getting mentioned in those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Being found in Google for your cause, programs and volunteering is covered on the ",
          link("nonprofit SEO", "/nonprofit-seo"),
          " page; registered charities in the UK will find their rules on the ",
          link("charity website design", "/charity-website-design"),
          " page.",
        ),

        h2("How to design a nonprofit website with one designer-developer"),
        p("A nonprofit website design agency splits the work between an account manager, a designer and developers. I do the structure, design and build myself, so you talk to the person who does the work."),
        ol("Brief. You send the mission, programs, current site, donation platform, CRM and two or three nonprofit sites you like."),
        ol("Structure. The home, donation, program and transparency pages are laid out for a phone and agreed."),
        ol("Design. Those pages are designed in full; the rest follow the same system."),
        ol("Build and hand-over. Staff and board members get an admin panel with roles, so they edit text, events, reports and photos while a volunteer cannot delete the donation page by accident."),
        p(
          "A new design for an existing site keeps its addresses and search positions through the ",
          link("website redesign", "/services/website-redesign-services"),
          " process.",
        ),

        h2("How much it costs to build a website for a nonprofit"),
        p("Design is not sold separately: the price covers design and development, and nonprofits pay the same published prices as any client."),
        li("A simple nonprofit website — home, about, programs, a donation page with your platform’s form, contact: 700–1,400 €."),
        li("A site with a designed donation page, program and impact pages, volunteer and event sign-ups, a transparency page and a donor CRM connection: from 2,000 €."),
        p(
          "A small budget goes furthest when you bring your own texts and photos and launch the simple version first. After launch there is no monthly fee to me; you pay only for hosting and your domain. All ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Nonprofit website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does it cost to build a website for a nonprofit?", "With me the price covers design and development: 700–1,400 € for a simple nonprofit site, from 2,000 € for a site with a designed donation page, program and impact pages, volunteer and event sign-ups and a donor CRM connection. I quote a fixed price after a short description of the organization."],
          ["Do you offer discounts for nonprofits?", "No, nonprofits pay the same published prices as everyone else. What a small budget buys is the simple site: a clear home page, program pages and a donation page built around the platform you already use, launched first and extended when funding allows."],
          ["How do I create a website for my nonprofit?", "Write down the mission in one sentence, list your programs and decide how you will take donations. Then either build it yourself on a builder or hire someone. With me the steps are a brief, a phone-first structure, the design of the key pages and the build, with an admin panel your staff can use."],
          ["What is the best website builder for a nonprofit?", "For a small, volunteer-run organization, Wix or Squarespace are both reasonable, and free programs exist for eligible nonprofits. The best one is the one your volunteers will keep up to date. A custom site pays off once you have several programs, a donor CRM and campaigns to run."],
          ["Which is better for nonprofits, Wix or Squarespace?", "Squarespace gives tidy layouts with little effort; Wix gives more freedom in the editor. Both can take donations through a built-in tool or an embedded platform form. Try both editors for an afternoon and pick the one your team finds easier."],
          ["Can our staff and board members update the website themselves?", "Yes. Text, programs, events, reports and photos are edited in a simple admin panel, and each person gets a role, so a volunteer can add an event without being able to change the donation page."],
          ["Which donation platform will the website work with?", "The one you use, where its options allow: Givebutter, Donorbox, GoFundMe Pro, a Stripe or PayPal form or another. Platforms differ in how far a form can be embedded and styled, so I check yours before the quote."],
          ["Can you design a website for a US nonprofit from Poland?", "Yes. The work is remote and in English: design reviews on video calls in my afternoon, which is morning on the US East Coast, and comments in a shared design file in between. Contracts and invoices are in euros."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order nonprofit website design: what to send me"),
        p(
          "Send the organization’s current site (or just its name), the mission in a sentence, your programs, the donation platform and CRM you use and a few nonprofit sites you like or dislike. Photos of your people and programs, if you have them, help me show a first screen that looks like your organization. I will reply with a plan for the key pages and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
