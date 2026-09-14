/**
 * Runtime settings for the free AI visibility checker.
 *
 * Every check spends real money on DataForSEO, so the tool is off unless
 * AI_CHECK_ENABLED is exactly "true" and credentials are present. A deploy that
 * lacks either serves the page with the form disabled instead of failing, which
 * keeps an accidental push from turning into an open, billable endpoint.
 */

function intFromEnv(name: string, fallback: number): number {
  const raw = process.env[name];
  const parsed = raw ? Number.parseInt(raw, 10) : NaN;
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

export const aiCheckConfig = {
  enabled: process.env.AI_CHECK_ENABLED === "true",
  login: process.env.DATAFORSEO_API_LOGIN,
  password: process.env.DATAFORSEO_API_PASSWORD,

  // Measured on 2026-09-14: ChatGPT live about $0.03 per answer, Perplexity
  // about $0.006. Three questions on both engines come to roughly $0.11 a report.
  // The defaults cap spend at a couple of dollars a day.
  dailyLimit: intFromEnv("AI_CHECK_DAILY_LIMIT", 20),
  perEmailLimit: intFromEnv("AI_CHECK_PER_EMAIL_LIMIT", 2),
  perIpLimit: intFromEnv("AI_CHECK_PER_IP_LIMIT", 3),

  // Salt for hashing visitor IPs before they are stored. Falls back to the
  // Sanity token so the hash is never unsalted, without adding a required var.
  ipSalt: process.env.AI_CHECK_IP_SALT || process.env.SANITY_API_TOKEN || "",

  engineTimeoutMs: 40_000,
};

export function aiCheckAvailable(): boolean {
  return Boolean(aiCheckConfig.enabled && aiCheckConfig.login && aiCheckConfig.password);
}
