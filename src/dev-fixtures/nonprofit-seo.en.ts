// Landing page fixture: SEO for nonprofits (EN, US first), group
// «nonprofit-seo». New page.
// Semantic core: ref/nonprofits-manufacturers.md / .csv + BRIEF.md: seo for
// nonprofits / nonprofit seo / seo for nonprofit / seo nonprofit 320 each (H1,
// H2s, FAQ) · nonprofit seo services 20 + seo services for nonprofits 20 (H2 on
// cost, FAQ) · nonprofit seo consultant / company 10 (H2 on cost, text) · seo
// keywords for nonprofits 10 (keyword H2) · free seo for nonprofits 10 (budget
// H2) · seo for nonprofit websites 10 (technical H2).
// SERP: mixed guides (TechSoup forums, Givebutter, Nonprofit Tech for Good,
// Soapbox Engage) and agencies (Nonprofit Megaphone, Briteweb, Webtonic).
// Intent: ref/intent-check-nonprofits-manufacturers.md — «nonprofit seo» vs
// «nonprofit website design» 0 of 10 shared URLs, 0 shared domains → separate
// page; this one sells the SEO service and explains enough to be useful.
// Angle: how people search around a cause (help, volunteer, donate), program
// and location pages, donation and volunteer page SEO, Google Ad Grants (up to
// $10,000 per month in search ads for eligible nonprofits) as a complement —
// the owner does not run ads, he makes the pages and tracking the ads land on;
// Google Business Profile, earned links (partners, media, .gov / .edu), reports
// and stories as content, AI answers, GA4 events for donations and sign-ups.
// Budget reality: same prices as everyone; a small budget buys an audit +
// one-off fixes.
// NOT on this page: donation page UX, impact and transparency page design,
// donor CRM, builder vs custom (/nonprofit-website-design); UK charity rules —
// Gift Aid, charity number, Fundraising Regulator, PECR
// (/charity-website-design); running Google Ad Grants or other ads (not
// offered).
// Owner’s rules: every SEO page covers AI search (GEO, AEO); never say there
// are no clients from the visitor’s segment.
import { p, h2, li, link, k } from "./pt";

export const nonprofitSeoEn = {
  lang: "en",
  group: "nonprofit-seo",
  slug: "nonprofit-seo",
  title: "SEO for nonprofits",
  heading: "SEO for Nonprofits",
  excerpt:
    "I provide SEO for nonprofits: pages that match how people search around your cause, a page for each program and location, donation and volunteer pages that rank, earned links and visibility in AI answers — measured in donations and sign-ups.",
  seo: {
    metaTitle: "Nonprofit SEO Services from One Consultant | Bandziuk",
    metaDescription:
      "SEO for nonprofits: cause and program pages, volunteer and donation pages that rank, Google Business Profile, AI answers, results in gifts. Audit from 250 €.",
  },
  stickyCta: true,
  heroLayout: "landing",
  heroChips: ["Search + AI answers for your cause", "Audit from 250 €", "Reply within one business day"],
  heroPhonePoints: ["Food pantry near me", "Volunteer sign-up sent", "Monthly gift received", "Named by ChatGPT"],
  offers: [
    { _key: "offer1", _type: "offer", name: "Nonprofit SEO audit: website, program pages, Google Business Profile and AI answers", price: 250, currency: "EUR", unit: "one-off" },
    { _key: "offer2", _type: "offer", name: "One-off nonprofit SEO work: program and location pages, donation and volunteer pages, tracking, structured data", price: 250, maxPrice: 700, currency: "EUR", unit: "one-off" },
    { _key: "offer3", _type: "offer", name: "Monthly SEO for a nonprofit", price: 800, currency: "EUR", unit: "month" },
  ],
  contentBlocks: [
    {
      _type: "offerListBlock",
      _key: k("b"),
      eyebrow: "What you get",
      title: "What you get with nonprofit SEO services",
      items: [
        { _key: k("o"), iconName: "search", title: "Keywords around your cause", text: "Searches for help, volunteering and giving" },
        { _key: k("o"), iconName: "map-pin", title: "Program and location pages", text: "Each program and site with its own page" },
        { _key: k("o"), iconName: "trending-up", title: "Donation and volunteer pages that rank", text: "More than a form: what, where, who can join" },
        { _key: k("o"), iconName: "message-circle", title: "Earned links from partners and media", text: "Funders, coalitions, city and school resources" },
        { _key: k("o"), iconName: "sparkles", title: "Visibility in ChatGPT and AI Overviews", text: "Facts about your work that assistants can quote" },
        { _key: k("o"), iconName: "gauge", title: "Gifts and sign-ups counted in GA4", text: "Reported in actions, not visits alone" },
      ],
      prices: [
        { _key: k("r"), label: "Nonprofit SEO audit", value: "from 250 €", note: "one-off" },
        { _key: k("r"), label: "Monthly SEO for a nonprofit", value: "from 800 € / month", note: "pages, fixes, AI visibility, reports", highlight: true },
      ],
    },
    {
      _type: "portfolioPickBlock",
      _key: k("b"),
      eyebrow: "Portfolio",
      title: "SEO portfolio: websites I have built and optimized",
      subtitle:
        "An education agency with a page for each country and service in several languages, an auto repair shop and a wheel-renovation workshop found in Google and on the map, a renovation company and a tyre-storage service with forms that count every request. A nonprofit needs the same structure: a page for each program and location, a listing on the map and sign-ups that can be measured.",
      picks: [
        "full-multilingual-website-development-and-seo-for-student-services",
        "auto-repair-seo-and-ux-boost",
        "felgilab-wordpress-rebuild",
        "renovation-and-investment-website-with-premium-design",
        "tyre-storage-landing-page-with-editable-seo",
      ],
    },
    {
      _type: "quoteFormBlock",
      _key: k("b"),
      title: "Get a quote for SEO for your nonprofit",
      subtitle: "I reply within one business day with what I would fix first on your website and listing, and a fixed price.",
      contextLabel: "Organization name or website",
      contextPlaceholder: "Link or name",
      buttonText: "Send and get a quote",
      note: "Or write on WhatsApp — same reply time.",
      formVariant: "auto",
      quizQuestions: [
        { _key: k("z"), question: "What should search bring you more of?", options: ["Donations", "Volunteers", "People who need our services", "Event attendees or members"] },
        { _key: k("z"), question: "Do you use Google Ad Grants?", options: ["Yes, it runs well", "Yes, but results are weak", "Not yet", "Not sure what it is"] },
      ],
    },
    {
      _type: "textContent",
      _key: k("b"),
      layout: "guide",
      content: [
        p("SEO for nonprofits is the work that brings people searching around your cause — those who need help, want to volunteer or are ready to give — to your own website, and turns those visits into sign-ups and donations. I do nonprofit SEO myself, as one consultant who also builds websites, so the person who finds the problems on your site is the person who fixes them."),

        h2("What nonprofit SEO includes: searches for help, volunteering and giving"),
        p("A nonprofit has three kinds of searchers, and each types something different:"),
        li("people who need help: “free tax help for seniors Denver”, “food pantry open Saturday”, “shelter for women near me”"),
        li("volunteers: “volunteer with animals on weekends”, “volunteer opportunities near me for teens”"),
        li("donors: “donate to wildfire relief”, “where to donate a used car to charity”, “charities fighting childhood hunger”"),
        p("Nonprofit SEO covers pages for each group, the technical health of the site, a Google Business Profile where you have a location, earned links, visibility in ChatGPT and AI Overviews, and reports in sign-ups and donations."),

        h2("SEO keywords for nonprofits: how people search around a cause"),
        p("Few people search for the name of an organization they have not heard of. They search for the problem, the action or the place. Research starts with your staff — the questions callers ask, the words families use, what new volunteers wanted to know — and then checks those phrases in search data:"),
        li("problem searches, often urgent and local, which show where a program page is missing"),
        li("“near me” and city searches for services, drop-off points and volunteering"),
        li("giving searches around a cause, a disaster or a season such as Giving Tuesday and the year-end"),
        li("questions about the issue itself, which a short guide from your experts can answer"),
        p("A phrase with ten searches a month matters if the person typing it is someone you exist to serve."),

        h2("Program and location pages in SEO for nonprofits"),
        p("A single “What we do” page cannot rank for six programs in three neighborhoods. Each program gets its own page — who it serves, eligibility, how to apply or refer someone, hours and the address — and each location with walk-in services gets a page with directions, transit, the phone number and what to bring. Pages use the words clients use, “help paying rent” rather than “housing stabilization services”, with the formal program name below for funders. Where a community you serve searches in Spanish or another language, translated versions of the key program pages often bring more people than another English article."),

        h2("Donation page SEO and volunteer page SEO"),
        p("Donation and volunteer pages can rank on their own when they say more than a form does. A donation page on your own domain, with a paragraph on what gifts fund, your EIN and a few short answers, can appear for “donate to [cause] in [city]”; a page hosted only on a platform’s domain builds that platform’s visibility, not yours. A volunteer page that lists roles, time commitment, minimum age and the city can appear for “volunteer opportunities near me”. Listing the same roles on VolunteerMatch or Idealist brings more volunteers and a link back to your site."),

        h2("Google Ad Grants and nonprofit SEO: why the grant needs a strong website"),
        p("Google Ad Grants gives eligible nonprofits up to $10,000 a month in Google search ads. It complements SEO rather than replacing it: ads can appear for searches where you do not rank yet, while SEO covers the searches the grant’s rules make hard to win. Both depend on the same thing — landing pages that answer the search and lead to an action. The program expects a website with substantial content about your mission and working conversion tracking; check Google’s current Ad Grants policies."),
        p("I do not run ads or manage Ad Grants accounts. I build and improve the pages the ads land on and set up the conversion tracking that both the grant account and the SEO report use, so whoever manages the account works from clean data."),

        h2("Google Business Profile for nonprofits with a physical location"),
        p("If people come to you — a food bank, a clinic, a thrift store, a community center — a Google Business Profile puts you on the map and in “near me” results. Google’s guidelines allow a profile where staff meet people in person during stated hours, so a nonprofit run from a board member’s home usually should not create one; check the current guidelines. The profile needs the most specific category that fits, such as “Food bank”, hours that change with the season, real photos, your programs as services and a link to the matching program page rather than the home page. Reviews from volunteers and clients, answered by staff, help as they do for any local organization."),

        h2("Earned links for nonprofits: partners, local media, .gov and .edu resources"),
        p("Nonprofits earn links more easily than most businesses, because others want to send people to them:"),
        li("partner organizations, funders and corporate volunteer programs listing you on their sites"),
        li("local news coverage of events and reports, linking to the source page"),
        li("city, county, library and school resource pages — .gov and .edu sites that rarely link to companies"),
        li("community foundation directories, United Way listings and coalition member pages"),
        p("Each existing mention is worth a polite request to link to the specific program page. Paid link packages are not part of my work; a nonprofit’s reputation is worth more than a ranking shortcut."),

        h2("Impact reports and stories as nonprofit SEO content"),
        p("Annual and impact reports usually sit in a PDF nobody finds. Turned into web pages — a summary page per year, a page per program outcome, client and volunteer stories used with consent — they answer searches about the issue, give journalists and partners something to cite and give assistants facts to quote. The PDF stays for the board; the text lives on the site, with a date and an author."),

        h2("Nonprofit SEO in ChatGPT and Google AI Overviews (GEO, AEO)"),
        p("Donors ask ChatGPT, Perplexity or Google’s AI Overviews “which charities help refugees in Chicago” or “how can I volunteer with seniors on weekends”, and get a short list before any links. Getting onto that list is called generative engine optimization (GEO) or answer engine optimization (AEO). For a nonprofit it means:"),
        li("mission, programs, service area, eligibility and ways to give written as plain sentences"),
        li("the same name, EIN and address on your site, your Candid profile, Charity Navigator and volunteer platforms"),
        li("impact figures with a year and a source, which assistants can cite"),
        li("Organization structured data connecting the site with those profiles"),
        p(
          "I check how assistants describe your organization before the work and after it. More on the ",
          link("AI SEO and GEO optimization", "/services/ai-ready-seo-and-geo-optimization"),
          " page.",
        ),

        h2("Technical SEO for nonprofit websites"),
        p("Nonprofit sites are often built by volunteers and grown over years, and the same problems repeat: an old WordPress theme with a dozen plugins, event pages from past years competing with current ones, a Donate button that leads to a platform page search engines never see, reports only as large PDFs, and pages that take five seconds to load on a phone. I make the fixes in the code or the builder settings."),
        p(
          "If the site needs rebuilding rather than fixing, see ",
          link("nonprofit website design", "/nonprofit-website-design"),
          ", or ",
          link("charity website design", "/charity-website-design"),
          " for registered charities in the UK.",
        ),

        h2("Measuring nonprofit SEO in donations and volunteer sign-ups"),
        p("The report counts what the organization needs, by page and by month:"),
        li("completed donations from search as GA4 events — on your own page directly, on a platform’s page where the platform allows tracking"),
        li("volunteer applications, requests for services and event registrations"),
        li("newsletter sign-ups, where most donor relationships begin"),
        li("calls and direction requests from the Business Profile and the site"),
        p("Positions and visits are in the report as context. Where a donation platform hides the final step, the report says what can and cannot be counted rather than guessing."),

        h2("Nonprofit SEO services and cost: what a small budget buys"),
        p("Nonprofits pay the same published prices as any client. A small budget still goes a long way when it is spent once and spent well:"),
        li("Nonprofit SEO audit — the site, program pages, Business Profile, competitors and AI answers: from 250 €, one-off."),
        li("One-off work — program and location pages, donation and volunteer pages, tracking, structured data: 250–700 €."),
        li("Monthly SEO for a nonprofit — new pages, fixes, AI visibility and reports: from 800 € per month; in very competitive markets from 1,300 € per month."),
        p(
          "For many small nonprofits the audit plus a round of one-off fixes is enough for a year, while staff keep adding stories and asking partners for links. The ",
          link("SEO audit", "/services/seo-audit"),
          " page describes the audit, my general approach is on the ",
          link("SEO optimization and strategy", "/services/seo-optimization-and-strategy"),
          " page, and all prices are on the ",
          link("pricing", "/pricing"),
          " page.",
        ),
      ],
    },
    {
      _type: "faqBlock",
      _key: k("b"),
      title: "SEO for nonprofits: frequently asked questions",
      faq: {
        _type: "accordionBlock",
        items: [
          ["How much do nonprofit SEO services cost?", "An audit costs from 250 € one-off, single pieces of work 250–700 €, and monthly SEO from 800 € per month, or from 1,300 € in very competitive markets. After a short description of the organization, its programs and its area I give a fixed price."],
          ["Do you offer discounts for nonprofits?", "No, nonprofits pay the same published prices as everyone else. A small budget is best spent on an audit and a round of one-off fixes — program pages, the Business Profile, tracking — which many small organizations find enough for a year."],
          ["Do we need SEO if we already have Google Ad Grants?", "Yes, the two work together. Ad Grants buys visibility for searches you do not rank for yet, within the program’s rules; SEO brings visits without a monthly ad budget and keeps working if the grant account is paused. Both need the same strong landing pages."],
          ["Can you manage our Google Ad Grants account?", "No, I do not run ads. I build and improve the pages your ads land on and set up conversion tracking, so your staff or an ads specialist can manage the grant account with clean data."],
          ["How long does SEO for a nonprofit take?", "Fixes to titles, the Business Profile and technical errors can show within weeks. New program and location pages usually need two to four months to rank; national cause searches with large charities competing take longer."],
          ["Can ChatGPT recommend our nonprofit to donors and volunteers?", "It can, if it finds clear facts about you: what you do, where, for whom and how to help, stated the same way on your site and on profiles such as Candid. I check how assistants describe you before and after the work."],
          ["Can you do SEO for a nonprofit website on Wix, Squarespace or WordPress?", "Yes. WordPress gives full control; on Wix and Squarespace most SEO work is possible, with some technical limits. The audit shows whether those limits matter for your organization."],
          ["Do you work with nonprofits outside Poland?", "Yes. SEO is done remotely and in English, for nonprofits in the US, the UK, Canada and elsewhere. My afternoon in Central Europe is morning on the US East Coast, which suits calls. Contracts and invoices are in euros."],
        ].map(([question, answer]) => ({ _key: k("q"), question, answer: [p(answer)] })),
      },
    },
    {
      _type: "textContent",
      _key: k("b"),
      content: [
        h2("Order SEO for your nonprofit: what to send me"),
        p(
          "Send the organization’s website, your programs and locations, what you want more of — donations, volunteers or people using your services — whether you use Google Ad Grants, and how you count donations and sign-ups today. I will reply with what I would fix first and a fixed price. Use the ",
          link("form above", "#quote"),
          " or write on ",
          link("WhatsApp", "https://wa.me/48786517446"),
          ".",
        ),
      ],
    },
  ],
};
