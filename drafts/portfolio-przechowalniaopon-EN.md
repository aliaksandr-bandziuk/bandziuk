═══════════════════════════════════════════════════════════════
PORTFOLIO: przechowalniaopon.pl — EN
═══════════════════════════════════════════════════════════════

[SLUG]
tyre-storage-landing-page-with-editable-seo

[TITLE]
A trilingual landing page for a wheel and tyre storage business

[FULL TITLE — H1]
Building a trilingual tyre storage landing page the client edits himself, without losing the green PageSpeed score

[EXCERPT] (≤200 characters)
A custom WordPress theme with no libraries: the client edits content and search snippets himself, and the page still loads in 102 KB and scores 100 for speed on mobile.

[SEO]
metaTitle: Case study: a tyre storage landing page on WordPress
metaDescription: A trilingual landing page built for paid seasonal traffic: a custom WordPress theme, client-editable snippets, 102 KB on first load and 100 for mobile speed.

[KEY FEATURES]
clientName: Seasonal wheel and tyre storage, Falenty Nowe near Warsaw
industry: Seasonal wheel and tyre storage
website: https://przechowalniaopon.pl/ (type — link, label przechowalniaopon.pl, index, follow)
services: Website Development, SEO

[PREVIEW IMAGE]
alt: "First screen of the przechowalniaopon.pl landing page with the headline about wheel storage in Warsaw"

[PROBLEM]
A wheel storage business outside Warsaw takes enquiries in two short peaks: spring and autumn, when the whole city changes its tyres at once. During those weeks the client buys advertising, so this landing page is not a business card — it is where paid traffic lands. The previous site was single-language, converted poorly and advertised services the company no longer offers.

Two client requirements shaped the whole build, and they pull against each other. First: he runs his own SEO and wanted to edit meta titles, descriptions, copy and prices without a developer. Second: the site had to be fast. On WordPress those two normally cancel out — editability arrives wrapped in a page builder, a forms plugin and an SEO plugin with scripts of their own, and nothing is left of the green zone on mobile. The job was to have both rather than choose one.

[TASK]
- Build a single-page site in three languages: Polish as the primary one, Russian and English
- Let the client edit copy, prices and meta tags in all three languages himself, in an interface he already knows
- Hold the green PageSpeed zone on mobile, where the paid traffic arrives
- Make sure an enquiry survives both a mail failure and a broken script
- Stop spam without putting a single extra obstacle between the visitor and the enquiry
- Set up analytics and the ad pixel so the advertising can be measured without breaching GDPR

[RESULTS]
- PageSpeed on mobile: 100 performance, 95 accessibility, 100 best practices, 100 SEO
- The agentic browsing check passes in full, 2 of 2 — the page is readable by assistants, not only by browsers
- 102 KB and eight requests on first load, and not one third-party request before cookie consent
- No external front-end libraries at all: no jQuery, no CSS framework, no icon font, no fonts from someone else's CDN
- All copy, prices, FAQ answers and meta tags in three languages are edited by the client on a single admin screen
- The form submits without JavaScript, and the enquiry is always written to the database before any notification is sent
- Spam is stopped without reCAPTCHA — no third-party script on every page load, and no seconds lost to it
- The sitemap contains exactly three URLs: WordPress's own archive pages redirect to the home page

[WORK DONE]
- A custom classic WordPress theme written from scratch, with no framework build and no jQuery
- Critical CSS inlined in the head, the rest loaded non-blocking with a fallback for disabled JavaScript
- Fonts cut into custom subsets, with unicode-range deciding which file loads: Cyrillic never downloads on the Polish page
- Images in AVIF with a WebP fallback, explicit dimensions against layout shift, priority loading for the first screen
- The ACF field schema registered in PHP rather than clicked together in the interface, so it is versioned and moves by copying a file
- Site settings moved onto the same screen as the content, as a second panel below the editor
- Three languages on Polylang with separate content files and a custom field-location rule covering every translation of the home page
- Meta tags per language set in the theme and served only when the SEO plugin's own field is empty: the client's value always wins
- The form on two paths — a REST request for browsers with scripts and an ordinary form post for everyone else — sharing one validation
- Enquiries stored as a non-public post type with columns for phone, size, source form and date
- A custom anti-spam layer: a field allow-list, weighted scoring, duplicate suppression and an hourly notification ceiling
- Notifications by authenticated SMTP and to a messenger, both sent after the visitor already has an answer
- Hand-written JSON-LD for the local business and the FAQ, with the price range computed from the price table
- Analytics and the ad pixel loaded only after consent, in an idle browser frame

[SCREENSHOTS]

1. (used as previewImage, not shown in the slider)
   title: "The first screen of the landing page"
   alt: "First screen of the wheel storage site in Warsaw with the headline and the enquiry button"
   caption: Booking storage is the only goal of the page, and the action is available immediately, without scrolling.

2. title: "Address, phone and opening hours below the first screen"
   alt: "Block with the storage address, phone number and opening hours"
   caption: The address, phone and hours sit as text right below the first screen — for people and for local search alike.

3. title: "Why wheels are worth storing in a warehouse"
   alt: "Section explaining why wheels are worth storing in a warehouse, listing what the service covers"
   caption: The arguments come before the price: the visitor first understands what they are paying for, then sees the figure.

4. title: "The price table by wheel size"
   alt: "Price table for seasonal storage by size from R12 to R23, listed separately for tyres and for mounted wheels"
   caption: A real table with column headers rather than a grid of blocks: both search engines and language models can read it.

5. title: "A two-field enquiry form"
   alt: "Booking form with a phone field and a dropdown of wheel sizes"
   caption: A phone number and a size, and that is all. The sizes come from the price table, so they cannot drift apart from it.

6. title: "Questions and answers about wheel storage"
   alt: "Questions and answers about seasonal wheel storage with the first answer expanded"
   caption: The answers sit in the markup even when collapsed, so search engines and models reach them without a single click.

7. title: "Contact details and directions"
   alt: "Contact section with address, phone number, opening hours and a map"
   caption: The map loads only as the section approaches the viewport — until then there is not one request to another domain.

8. title: "The English version of the landing page"
   alt: "English version of the wheel storage site"
   caption: The English version is written for people who find calling a Polish-speaking service hard, not translated word for word.

9. title: "The Russian version of the landing page"
   alt: "Russian version of the wheel storage site"
   caption: The Russian version uses the words this query is actually asked in around Warsaw, not a calque from Polish.

10. title: "PageSpeed scores on mobile"
    alt: "PageSpeed report showing 100, 95, 100, 100 and a passed agentic browsing check"
    caption: Performance 100, accessibility 95, best practices 100, SEO 100, and a full pass on the agentic browsing check.

[MAIN CONTENT]

### Why the ability to edit search snippets was a requirement, not a convenience

On a small business site, meta tags are usually changed by whoever built it. Here it was the other way round: the client knows search well and wanted to change titles and descriptions himself, mid-season, without emailing a developer and waiting.

That requirement sounds harmless, and it is usually the thing that makes the site heavy. On WordPress, editability arrives with a page builder, a forms plugin and an SEO plugin, each with its own styles and scripts — and on mobile nothing is left of the green zone. His second requirement was precisely about speed.

The way out is that editability and page weight live in different layers. The admin runs on the server and never reaches the visitor's browser at all. What makes a site heavy is not the ability to edit but the way that ability is usually delivered. So the fields were built as a schema of their own, and not one line of someone else's CSS is served to the front end.

### How meta tags and copy are edited on a single admin screen

Meta tags for each language are set in the theme and reach the page through the SEO plugin's filters, but only when the plugin's own field is empty. The client edits in the place he already knows and his value always wins — while every language still has a sensible snippet from day one instead of showing an internal page name in the results.

Everything else was collapsed onto one screen. Splitting a landing page's content from that same landing page's settings across two admin screens means the owner looks for the phone number and the address where they are not. The settings — phone, address, coordinates, opening hours, the enquiry mailbox, the analytics identifiers — moved onto the same page as a second panel below the editor.

The home pages of all three languages deliberately open in the classic editor. The block editor tucks these fields into a collapsed panel at the very bottom of the screen, and the client opened the page and saw none of the fifty-odd fields. The classic editor puts them directly under the title, which is where people look for them.

The field schema is registered in PHP rather than clicked together in the interface. The difference is that such a schema is versioned along with the theme, moves to another server by copying a file, and does not depend on the state of the database.

### Why speed on a landing page for paid seasonal advertising is measured in cost per click

Wheel storage is a seasonal business with two short peaks. In those weeks the client buys advertising, and that changes what a slow page costs. On organic traffic, a slow page costs you some of your visitors. On paid traffic it costs you money: the visit is already paid for, and the person leaves before the first screen arrives.

Hence decisions that would otherwise look like perfectionism. No third-party requests before cookie consent means nothing of anyone else's stands between the ad click and the first screen. No captcha means there is neither a paid second of loading nor an extra action on the way to the enquiry. Three languages on one address means three campaigns to three audiences can point at a single page.

### What the 102 KB of first load and the eight requests are made of

First load for a guest with no consent cookie: HTML together with the critical CSS, inline icons and structured data — 34 KB; deferred CSS — 7 KB; the script — 6 KB; four font files — 19 KB; the first-screen photograph in AVIF — 37 KB. About 102 KB in total across eight requests, none of them to another domain.

This came from leaving things out rather than from optimising them. There is no jQuery on the front end, no CSS framework and no icon font: fourteen icons sit in the markup as inline SVG. WordPress's own additions that a landing page does not need were removed — emoji scripts, oEmbed, housekeeping meta tags and block editor styles for a block editor that is not used here. Critical CSS is in the head; the rest loads non-blocking and still works with JavaScript disabled.

The order matters: first do not take on what you do not need, then compress what you do. Optimising someone else's library set buys percentages; declining it buys multiples.

### Fonts cut into custom subsets instead of shipping the standard set

The standard extended Latin set weighs 31 KB, and Polish needs exactly eight additional letters out of it. A custom subset built on those letters is 2 KB.

From there unicode-range does the work: the browser downloads only the file whose characters actually appear on the page. Cyrillic never loads on the Polish version, and the Polish diacritics never load on the Russian one.

One detail was worth catching before localisation rather than after it. The typeface chosen for headings has no Cyrillic at all, so the Russian version would have dropped to a system font once the layout was already finished. Under the same family name, Cyrillic is served by the nearest geometric sans, and the same unicode-range decides which file to take. The Russian version looks like the other two rather than like a draft.

### Where the buttons and forms sit so the enquiry does not depend on one screen

The page leads to a single action — booking a set of wheels into storage — and there are several routes to it, because people arrive at different stages of the decision.

The form sits directly below the price table: the visitor has just learned what it costs, and the action is next to that rather than four screens away. A second instance of the same form sits lower, after the sections that answer objections, for the people who read on first. The phone number is a link and is lifted into the header: part of this audience never fills in forms and simply calls, especially from a phone.

The form itself has two fields. A phone number and a wheel size, and nothing else. The size list includes an "I don't know" option, because somebody who cannot remember the size of their own wheels otherwise just closes the page — and that is exactly the person who needs the storage most.

Prices are published in a table rather than hidden behind "ask for a quote". A published price filters out the wrong enquiries before the phone call and answers the main objection before the form. The section on what goes wrong when tyres are stored at home and the ten questions with answers do the same work: they answer what would otherwise come up in conversation, and might never get as far as an enquiry.

These are decisions, not a measured result: the season is ahead and there is no conversion data for this page yet.

### Three languages as three audiences and three ad campaigns on one address

The Russian and English versions are written for their own readers rather than translated from Polish. The English one explains where Falenty Nowe is relative to Warsaw and says outright that writing in English is fine: for someone who has recently moved, calling a Polish-speaking service is the real obstacle. The Russian one uses the words this query is actually asked in around the city rather than a calque from Polish.

The copy lives in per-language files where a translation is layered over the Polish base: an untranslated key does not produce an empty section, it falls back to Polish. Prices exist only in the Polish file and are inherited by both translations — one figure in one place, with nothing to drift apart.

For advertising this means three campaigns to three audiences pointing at three addresses of the same page. The language switcher deliberately uses no flags: a flag stands for a country rather than a language, and a Russian flag on a Polish site carries a meaning nobody asked for.

### Local search for a storage business: address, hours and structured data in the markup

The business serves Warsaw and the area around it, and customers look for it by a query that names the city. So everything that lets a search engine tie the page to a place is present as text in the markup rather than in an image or only inside the structured data: the full address in Falenty Nowe, the opening hours, a clickable phone number and a map.

The local business structured data is written by hand, because the free version of the SEO plugin does not emit it. The graph carries a local automotive business and an FAQ block, in each of the three languages. The price range is computed from the price table, so there is nothing to type in by hand and then forget to update.

A conflict turned up during checking: my own website node carried the same identifier as the plugin's node — two different definitions under one name. That is not "more data", it is a contradiction. My node was removed; the page, the breadcrumbs, the website and the organisation stay with the plugin, and we add only what it does not do.

Single-page hygiene was a separate job. WordPress generates author, date, category and tag archives: empty pages a crawler will index if it finds them. All of them return a permanent redirect to the home page and are excluded from the sitemap. The sitemap holds exactly three URLs, one per language.

### Why the enquiry form works without JavaScript and always writes to the database

The form has two paths: a request to the server from the script for browsers where scripts work, and an ordinary form post for everyone else. The validation is the same for both. This is not about the share of visitors with scripts disabled — it is about one bug in a script not being allowed to kill the only conversion point on a page whose traffic was paid for.

The enquiry is always written to the database as its own record with columns for phone, size, which form it came from and the date. The first version was "email plus messenger", which meant: if mail breaks or the bot gets blocked, the enquiry disappears without trace.

The order of operations was changed after a measurement. It used to be mail, then messenger, then the database write, then the answer to the visitor — the only copy of the enquiry appeared last, after two network calls, while the visitor watched a spinner. It is now the database write, the answer to the visitor, and the notifications afterwards. The database does not depend on anyone else's network, so it goes first.

The phone format is deliberately not strict. People arrive in Warsaw with Ukrainian, Belarusian and German numbers, and a Polish-format mask simply will not accept those. The script keeps the plus and the digits and spaces them out, but it does not refuse.

### Anti-spam for a two-field form, without reCAPTCHA and without losing customers

reCAPTCHA was ruled out for three reasons at once: a third-party script on every page load, visitor data outside our own infrastructure, and the cost to the speed the whole project was built around.

In its place, a threat model for this particular form. It has two fields, one of them a select. There is no free text, no links and no email address, so ordinary spam has nowhere to land. Three things are genuinely risky: injecting a value into the one text field that reaches a human, a flood of submissions, and duplicates.

The principle everything rests on: nothing disappears silently. The enquiry is always stored, and the score changes only the label — the notification goes out either way, just marked. A false positive would cost a customer, and a customer is worth more than one junk row in a list.

In practice: an allow-list of fields with hard cleaning of values; weighted scoring across several weak signals, none of which trips the label on its own; duplicate suppression — the same number with the same size within half an hour is a second click, not a second enquiry; and an hourly ceiling on notifications so a flood cannot bury the inbox. Suspicious entries get a label and a separate view in the admin.

Numbers are not checked against a country: a "Polish format" rule would cut off real customers, and near Warsaw they are a noticeable share of them.

### GDPR cookie consent that still leaves the advertising measurable

Analytics and the ad pixel load only after explicit consent. That is the GDPR requirement for marketing cookies, but here it also paid off technically: speed testing tools arrive as a clean guest and never see those scripts at all. The correct legal decision turned out to be the correct technical one as well.

Preconnects to third-party domains are served only to visitors who already hold consent. For everyone else the document head stays clean.

Rejecting is as available as accepting: two equal buttons, with reject first. Consent that is hard to withhold is not consent. There is a withdrawal button in the footer; if the scripts have already started, the page reloads — they cannot be switched off in flight, and pretending otherwise would be dishonest.

Until the analytics identifiers are entered in the admin there is no banner at all: there is nothing to ask consent for.

The privacy policy was written for this site rather than copied: the list of data collected is reduced to what the form actually collects, and it states that the IP address is not stored but hashed for the submission counter. All three language versions are kept out of the index, while the link to them from the form keeps working.

### What was done so language models can read the page, not only search engines

Some of the decisions on this page were made because assistants will summarise it, not only because search engines will rank it. The agentic browsing check passes in full, but the point is not the tick — it is what the tick is made of.

Prices sit in a real table with row and column headers rather than a grid of blocks, so the table can be quoted whole. The address, opening hours and phone number are text in the markup rather than an image and rather than living only inside the structured data. Answers are present in the document even when collapsed, so they are reachable without running scripts. There is a single top-level heading and a strict hierarchy below it with no skipped levels.

The questions are phrased the way people ask them out loud: what the price depends on, whether you have to bring the wheels yourself, whether tyres are stored without rims. The answers run to several sentences and explain, rather than stopping at one line.

### Five bugs on this landing page and what actually caused them

The most useful part of the work is not "made it look good" but "found the cause". Five cases where the symptom and the cause came from different places.

The first-screen photograph was downloading in two variants at once and accounted for 269 KB of the page's 310 KB. The cause: the dimensions declared in the preload did not match the ones declared on the image itself, so the browser honestly took one file from each source. On top of that, a copy of the image hidden by a CSS rule was downloading in order never to be shown. Once both places shared one source: 42 KB.

Every icon in the theme weighed ten to twenty times what it should, and the photographs a few kilobytes each too much. The cause was not compression: the channel the files travelled through was writing provenance metadata into them. Cleaning them in place works differently per format — and for AVIF it requires fixing the internal offsets, or the file stops opening. Thirteen icons went from 117 KB to 16 KB.

Sections of the page disappeared exactly after the client opened and saved it for the first time. The cause: an empty repeatable field set returns one value before the first save and a different one afterwards, and the emptiness check caught only the first.

Somebody who does not know their own wheel size could not submit the form. The "I don't know" option carried an internal value, and the sanitiser kept only letters, digits and hyphens — turning it into an empty string. I introduced that bug myself an hour earlier while tightening the anti-spam rules. The fix: the size list became shared between the form and the check, and values from the price list are returned verbatim, because the price list belongs to the client and a filter has no business correcting it.

Somebody who mistyped their number twice was blocked on the third attempt. The submission counter was counting every attempt, including the ones that failed validation. Checking and incrementing were separated: the counter now rises only on accepted enquiries.

### What is left with the client and the hosting

The list is short and honest. The analytics and pixel identifiers are entered in the admin, with no code touched. The social links in the footer are waiting for the links themselves; the layout for them is ready. The privacy policy is worth showing to a lawyer, along with confirming how long enquiries are kept. The ten FAQ answers are worth reading by the business owner: some details were derived from what the old site already published and from industry practice, and only he can confirm them.

There is no conversion data yet — the season is ahead. This case study is about what was built and why it was built that way, not about what has had time to work.

[TECHNOLOGIES USED]
WordPress, PHP, JavaScript, SEO, Web Accessibility, Hosting & Deployment
