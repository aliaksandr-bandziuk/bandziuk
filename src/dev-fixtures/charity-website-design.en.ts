// Landing page fixture: Charity website design (EN, UK audience, British
// spelling), group «charity-website-design». New page.
// Semantic core: ref/nonprofits-manufacturers.md / .csv + BRIEF.md: website
// design charity 480 (H2) · charity website design 260 (H1, H2s) · website
// design for charity / design a charity website / website design for charity
// organisations 260 each (H2s, FAQ) · charity web design (related, H2) · best
// charity website design 30 + charity website design uk 30 (metaTitle, text) ·
// charity website design examples / ideas / templates / inspiration 10 each
// (H2, patterns only, no real charities named).
// SERP: UK studios (Itineris, GWS Media, Numiko), templates (Canva, Colorlib),
// Pinterest, Neon One.
// Intent: ref/intent-check-nonprofits-manufacturers.md — «charity website
// design» vs «nonprofit website design» 0 of 10 shared URLs, 1 shared domain →
// separate page for UK charities, written to UK rules and spelling.
// Angle: registered charity number on the site (stated generally, with «check
// the Charity Commission guidance»), Gift Aid declaration on the donation form,
// JustGiving / Enthuse / CAF Donate (general, no integration claimed),
// Fundraising Regulator and the Code of Fundraising Practice, UK GDPR and PECR
// consent, Charity Digital Code of Practice, accessibility, trustees and annual
// report pages, OSCR (Scotland) and CCNI (Northern Ireland). Prices in euros —
// the owner invoices in EUR.
// NOT on this page: US nonprofits — donation page UX in detail, Form 990,
// Candid, donor CRMs, builder vs custom (/nonprofit-website-design); search,
// Google Ad Grants, Google Business Profile, links, measuring donations
// (/nonprofit-seo).
// Owner’s rules: never say there are no clients from the visitor’s segment;
// every page covers AI search; design is sold with the build.
import { p, h2, li, link, k } from "./pt";

export const charityWebsiteDesignEn = {
  lang: "en",
  group: "charity-website-design",
  slug: "charity-website-design",
  title: "Charity website design",
  heading: "Charity Website Design",
  excerpt:
    "I design and build charity websites for UK charities: the registered charity number where supporters and regulators expect it, a donation form with a Gift Aid declaration, consent that follows UK GDPR and PECR, and pages for trustees and annual reports.",
  seo: {
    metaTitle: "Charity Web Design for UK Charities | Bandziuk",
    metaDescription:
      "Charity website design for UK charities, build included: charity number shown, Gift Aid on the donation form, consent under UK GDPR and PECR. From 700 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Design + build, one price", "From 700 €, invoiced in EUR", "Reply within one working day"],
  heroPhonePoints: ["Donate · Gift Aid it", "Registered charity no.", "Volunteer with us", "Annual report"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Simple charity website, design and build", price: 700, maxPrice: 1400, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "Charity website with a Gift Aid donation form, donation platform pages, consent set-up, trustee and annual report pages, design and build", price: 2000, currency: "EUR", unit: "one-off" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with charity website design",
      items: [
        { _key: k("o"), iconName: "shield-check", title: "Charity number and legal details in place", text: "Footer, donation pages and receipts" },
        { _key: k("o"), iconName: "trending-up", title: "Donation form with a Gift Aid declaration", text: "One-off or monthly, the declaration in one tick" },
        { _key: k("o"), iconName: "plug", title: "JustGiving, Enthuse or CAF Donate", text: "The platform you use, checked before the quote" },
        { _key: k("o"), iconName: "file-text", title: "Consent under UK GDPR and PECR", text: "Newsletter opt-ins and cookie choices recorded" },
        { _key: k("o"), iconName: "layers", title: "Trustee, annual report and accounts pages", text: "Governance where funders look for it" },
        { _key: k("o"), iconName: "sparkles", title: "Accessible and readable by AI assistants", text: "WCAG AA, key facts as text" },
      ],
      prices: [
        { _key: k("r"), label: "Simple charity website", value: "700–1,400 €", note: "design and build, invoiced in EUR" },
        { _key: k("r"), label: "Gift Aid form, platform pages, consent, governance pages", value: "from 2,000 €", note: "design and build, invoiced in EUR", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "Charity web design portfolio: websites I have designed and built",
      subtitle:
        "A multilingual education agency site covering ten countries, a renovation and investment company, an architecture studio, a wheel-renovation workshop and a tyre-storage landing page. What a charity site takes from them: forms that collect exactly the details an organisation needs, a design system that small teams extend themselves and pages that load quickly on any phone.",
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "renovation-and-investment-website-with-premium-design",
        "architecture-website-rebuild-and-seo-scan",
        "felgilab-wordpress-rebuild",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for your charity website design",
      subtitle: "I reply within one working day with a plan for the home, donation and governance pages and a fixed price in euros.",
      contextLabel: "Charity name, number or current website",
      contextPlaceholder: "Link, name or charity number",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "Where is the charity registered?", options: ["England and Wales", "Scotland", "Northern Ireland", "More than one, or not yet registered"] },
        { _key: k("z"), question: "How do supporters donate now?", options: ["JustGiving or Enthuse", "CAF Donate or another platform", "Bank transfer and cheques", "A form on our own website"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("Charity website design is the work I do for UK charities, from small local groups to organisations with their own fundraising teams, and I build the sites myself, so design and development come from one person at one price. A UK charity site has to win supporters and meet rules at the same time: showing registered status, collecting Gift Aid declarations, following fundraising standards and getting consent for every email. Building those into the design from the start costs far less than adding them after a supporter complains."),

        h2("Website design for charity organisations: what supporters, funders and trustees look for"),
        p("Supporters arrive from a fundraising page shared by a friend, a local news story or a search for the cause. Within seconds they look for three things: what the charity does and where, whether it is a real registered charity, and how to give or get involved. Grant-makers read further — governance, accounts, outcomes — and trustees want a site they are happy to link to in a bid. The home page serves the first group; a clear “About us” section with governance serves the rest."),

        h2("Showing your registered charity number on a charity website"),
        p("Registered charities in England and Wales above an income threshold must state that they are registered on their official documents, and the Charity Commission’s guidance counts websites and emails among them. Charitable companies and CIOs have further naming rules of their own, so check the current Charity Commission guidance for your structure. In the design this becomes routine:"),
        li("the full registered name and charity number in the footer of every page"),
        li("the number repeated on the donation page and in email receipts"),
        li("for a charitable company, the company number and registered office as well"),
        li("a link to the charity’s entry on the regulator’s register, where supporters can check the accounts themselves"),

        h2("Designing an online donation form with a Gift Aid declaration"),
        p("Gift Aid lets a charity claim basic-rate tax back from HMRC on donations from UK taxpayers — 25p for every £1 given — but only with a valid declaration from the donor. The donation form is built around that step:"),
        li("a clear Gift Aid tick box with HMRC’s model wording, the donor’s full name and home address, with a postcode lookup to save typing"),
        li("one line explaining that the donor must pay enough Income Tax or Capital Gains Tax to cover the claim"),
        li("one-off and monthly options, with regular gifts by card or Direct Debit through your payment provider"),
        li("each declaration stored with its date and the wording shown, so you can produce it if HMRC asks"),
        p("Check the current HMRC Gift Aid guidance for the exact wording; the form is built so the text can be changed without a developer."),

        h2("JustGiving, Enthuse or CAF Donate on a charity website"),
        p("Many UK charities already use a donation platform, and the website works with it rather than replacing it. JustGiving is familiar to supporters and widely used for event sponsorship pages; Enthuse is often chosen for donation forms in the charity’s own branding; CAF Donate suits charities that want a simple form linked to the Charities Aid Foundation’s services. Fees, Gift Aid handling and how far each form can be styled differ, so I look at the platform you use before quoting. The design then works around it: appeal pages, event pages that point supporters to their sponsorship pages, and a thank-you page on your own domain."),

        h2("Charity web design and the Fundraising Regulator’s Code of Fundraising Practice"),
        p("The Fundraising Regulator sets standards for charitable fundraising in England, Wales and Northern Ireland through its Code of Fundraising Practice; Scotland has its own arrangements. On a website the Code shows up in small, visible choices:"),
        li("appeals that are honest about what a gift does, without countdown timers or pressure"),
        li("no pre-ticked boxes for extra amounts or regular giving"),
        li("an easy, clearly described way to cancel a regular gift"),
        li("a fundraising complaints route that is easy to find"),
        p("Charities registered with the Fundraising Regulator can display its badge, and the design gives it a place next to the donation form. Check the current Code for the sections that apply to your charity."),

        h2("UK GDPR and PECR on a charity website: newsletter consent, cookies and supporter data"),
        p("Email and text updates to supporters fall under PECR as well as UK GDPR. In practice the design needs:"),
        li("separate, unticked opt-ins for email, text and post on donation and sign-up forms"),
        li("a privacy notice written for supporters, linked beside every form"),
        li("a cookie banner that lets visitors refuse analytics as easily as accept them"),
        li("consent recorded with its date and the form it came from, so your supporter database knows who agreed to what"),
        p("The rules on the “soft opt-in” for charities have been changing, so check the ICO’s current guidance before relying on it. The forms are built so their wording and options can be updated as the guidance moves."),

        h2("Accessible charity website design and the Charity Digital Code of Practice"),
        p("The Charity Digital Code of Practice, a free framework for UK charities, asks boards to treat digital as part of their strategy and to design around the people they serve. Accessibility sits at the centre of that. The design aims at WCAG AA: readable contrast, text that scales, keyboard navigation, captions, alt text and plain English. Many charities serve people with disabilities or low literacy, and some funding agreements ask for a specific accessibility standard, so check your contracts and grant terms."),

        h2("Trustees, annual report and accounts pages on a charity website"),
        p("Funders and major donors look at governance before they give. A short governance section answers them:"),
        li("trustees with names, roles and a line about each, as the people legally responsible for the charity"),
        li("the trustees’ annual report and accounts as a short web summary, with the full document to download"),
        li("safeguarding, complaints and privacy policies, each one click from the footer"),
        li("the charity’s objects and area of benefit in plain English"),
        p("Staff edit each item in the admin panel, so next year’s report goes up without waiting for a developer."),

        h2("Charity websites in Scotland and Northern Ireland: OSCR and CCNI"),
        p("Charities registered in Scotland answer to the Scottish Charity Regulator (OSCR), which has its own rules on showing the charity’s name, number and status on documents and websites. Charities in Northern Ireland register with the Charity Commission for Northern Ireland (CCNI). A charity registered in England and Wales that also operates in Scotland may need to register with OSCR too. The footer and donation pages are designed to carry more than one number where needed; check the guidance from each regulator that applies to you."),

        h2("A charity website that ChatGPT and Google AI Overviews can read"),
        p("Supporters ask ChatGPT, Perplexity or Google’s AI Overviews which charities help with a cause near them, or whether a particular charity is legitimate. Assistants rely on facts they can read and match against the regulator’s register: the charity’s name and number, what it does, where, and how to give. The design keeps these as page text with structured data for the organisation, never only inside a logo, an image or a PDF."),
        p(
          "Being named in those answers is ongoing work, described on the ",
          link("AI SEO and GEO optimisation", "/services/ai-ready-seo-and-geo-optimization"),
          " page. Being found in search for your cause and volunteering is covered on the ",
          link("nonprofit SEO", "/nonprofit-seo"),
          " page, and organisations in the US will find their side on the ",
          link("nonprofit website design", "/nonprofit-website-design"),
          " page.",
        ),

        h2("Charity website design examples and templates: patterns that work"),
        p("Template galleries offer charity themes ready to fill, and inspiration sites collect polished charity website examples. Look past the colour schemes and photography, and the charity websites that serve people best share a few patterns:"),
        li("one primary action per page — donate, volunteer or get support — in one reserved colour"),
        li("support services kept apart from fundraising, so a person in need never has to read an appeal first"),
        li("stories told with consent, by or with the people involved"),
        li("appeal pages that staff can launch in an afternoon from a ready layout"),
        p("A template is a fair start for a newly registered charity with one activity. Once you run several services, appeals and events, a design system your staff can extend saves more than it costs."),

        h2("How much charity website design costs"),
        p("The price covers design and development. Registered charities pay the same published prices as any other client, and I invoice in euros:"),
        li("A simple charity website — home, about, services, a donation page with your platform’s form, governance and contact: 700–1,400 €."),
        li("A site with a Gift Aid donation form, platform appeal pages, consent set-up, trustee and annual report pages: from 2,000 €."),
        p(
          "Your bank converts the invoice from pounds at its own rate on the day you pay. After launch there is no monthly fee to me. A new design for an existing site keeps its addresses and search positions through the ",
          link("website redesign", "/services/website-redesign-services"),
          " process, and all ranges are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "Charity website design: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much does charity website design cost?", "The price covers design and development: 700–1,400 € for a simple charity website, from 2,000 € for a site with a Gift Aid donation form, platform appeal pages, consent set-up and governance pages. I invoice in euros and give a fixed quote after a short description of the charity."],
          ["Do you offer a discount for registered charities?", "No, charities pay the same published prices as everyone else. A small budget buys the simple site: a clear home page, service pages, governance details and a donation page built around the platform you already use, launched first and extended later."],
          ["Does a charity website have to show the charity number?", "Registered charities in England and Wales above an income threshold must state that they are registered, and the Charity Commission’s guidance includes websites. Scotland and Northern Ireland have their own rules. Check the guidance that applies to you; showing the number is good practice even below the threshold."],
          ["Can the donation form collect Gift Aid declarations?", "Yes. The form includes a Gift Aid tick box with HMRC’s model wording and the donor’s name and address, and stores each declaration with its date. If your donation platform handles Gift Aid itself, the site uses the platform’s declaration instead."],
          ["Will the website follow UK GDPR and PECR?", "The design gives every form separate, unticked opt-ins, a linked privacy notice and a cookie banner with a real choice, and records consent. Your charity remains the data controller and decides the wording; check the ICO’s current guidance."],
          ["Can our staff and volunteers update the charity website?", "Yes. News, appeals, events, reports and photos are edited in a simple admin panel. Each person gets a role, so a volunteer can post an event without being able to change the donation form."],
          ["How do you design a charity website, and how long does it take?", "I do the structure, design and build myself. You send your objects, services, current site and donation platform; I lay out the home, donation and governance pages for a phone, design them in full, then build the site with an admin panel for staff. A simple site usually takes three to five weeks, a full one six to eight, depending on how quickly texts and photos arrive."],
          ["How do you work with a UK charity from Poland?", "Remotely and in English. Warsaw is one hour ahead of the UK, so calls and design reviews fit easily into your working day, with comments in a shared design file in between. Contracts and invoices are in euros."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order charity website design: what to send me"),
        p(
          "Send the charity’s name and registered number, the current website if there is one, where you are registered, your donation platform and a few charity websites you like or dislike. Photos of your services, volunteers and the people you work with help me show a first screen that looks like your charity. I will reply with a plan for the key pages and a fixed price in euros. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
