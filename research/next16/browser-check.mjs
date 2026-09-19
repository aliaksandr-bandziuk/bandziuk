// Browser smoke test for the Next 16 build: JS errors, menu, modal, particles, map, Studio.
// Usage: node research/next16/browser-check.mjs [baseUrl]
// Playwright from the main checkout, whose browser is already installed.
const { chromium } = (await import("file:///D:/applications/bandziuk/node_modules/playwright/index.mjs")).default ?? await import("file:///D:/applications/bandziuk/node_modules/playwright/index.mjs");

const B = process.argv[2] || "http://localhost:3005";
const PAGES = ["/", "/pl", "/ru", "/services", "/blog", "/blog/why-lawyer-needs-a-website",
  "/portfolio", "/portfolio/consultant-website-design-retail-analytics", "/about", "/pricing",
  "/contacts", "/pl/kontakt", "/tools/ai-visibility-checker"];

const browser = await chromium.launch();
const results = [];
for (const [label, viewport] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
  const ctx = await browser.newContext({ viewport });
  for (const p of PAGES) {
    const page = await ctx.newPage();
    const errs = [];
    page.on("pageerror", (e) => errs.push("pageerror: " + e.message.slice(0, 160)));
    page.on("console", (m) => m.type() === "error" && errs.push("console: " + m.text().slice(0, 160)));
    const r = await page.goto(B + p, { waitUntil: "load", timeout: 60000 }).catch((e) => ({ status: () => "ERR " + e.message }));
    await page.mouse.wheel(0, 20000); await page.waitForTimeout(1500);
    const info = await page.evaluate(() => ({
      canvas: document.querySelectorAll("canvas").length,
      leaflet: document.querySelectorAll(".leaflet-container").length,
      tiles: document.querySelectorAll(".leaflet-tile-loaded").length,
      hydrated: !!document.querySelector("[data-lenis-prevent], html.lenis, html") && typeof window.next !== "undefined",
    }));
    results.push({ label, p, status: r.status(), ...info, errs });
    await page.close();
  }
  await ctx.close();
}

// Interactions: mobile burger menu and the modal form on the homepage.
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await ctx.newPage();
const ierr = []; page.on("pageerror", (e) => ierr.push(e.message.slice(0, 160)));
await page.goto(B + "/", { waitUntil: "load" }); await new Promise((r) => setTimeout(r, 2500));
const burger = page.locator("[class*='burgerIcon']").first();
let menu = "no burger";
if (await burger.count()) {
  await burger.click(); await page.waitForTimeout(700);
  menu = await page.evaluate(() => [...document.querySelectorAll("[class*='burger'] a, [class*='menu'] a")].filter((a) => a.offsetParent).length + " visible menu links");
  await burger.click().catch(() => {}); await page.waitForTimeout(500);
}
await ctx.close();
const dctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const d = await dctx.newPage(); d.on("pageerror", (e) => ierr.push(e.message.slice(0, 160)));
await d.goto(B + "/", { waitUntil: "load" }); await new Promise((r) => setTimeout(r, 2500));
const btn = d.locator("button[class*='utton']").filter({ hasNotText: /^$/ }).first();
let modal = "no modal button";
if (await btn.count()) {
  const t = (await btn.innerText()).trim();
  await btn.click(); await d.waitForTimeout(1000);
  modal = `clicked "${t}": ` + (await d.evaluate(() => {
    const m = document.querySelector(".ReactModal__Content, [role='dialog'], [class*='modal'] form");
    return m ? "modal open, inputs=" + m.querySelectorAll("input,textarea").length : "no modal";
  }));
}
// Studio: loads without page errors (may show a CORS notice for localhost:3005).
const s = await dctx.newPage(); const serr = []; s.on("pageerror", (e) => serr.push(e.message.slice(0, 160)));
await s.goto(B + "/admin", { waitUntil: "load", timeout: 90000 }).catch(() => {});
await s.waitForTimeout(4000);
const studio = (await s.evaluate(() => document.body.innerText.slice(0, 200))).replace(/\s+/g, " ");
await browser.close();

for (const r of results) console.log(`${r.label.padEnd(7)} ${String(r.status).padEnd(4)} ${r.p.padEnd(55)} canvas=${r.canvas} leaflet=${r.leaflet}/${r.tiles} ${r.errs.length ? "ERRORS:\n   " + [...new Set(r.errs)].join("\n   ") : "ok"}`);
console.log("menu:", menu); console.log("modal:", modal); console.log("interaction errors:", ierr.length ? ierr : "none");
console.log("studio:", studio); console.log("studio errors:", serr.length ? serr : "none");
