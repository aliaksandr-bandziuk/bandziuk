import { notFound } from "next/navigation";
import { locales } from "@/i18n.config";

/**
 * 404 for a [lang] segment that is not a locale. A path with a dot
 * (/wp-login.php, /x.txt) skips the proxy and arrives as a "language".
 * The layout's check alone is not enough: in production the page renders in
 * parallel, crashed on the missing data first, and the response was a 500.
 * Call it right after awaiting params, in every page and generateMetadata.
 */
export function assertLocale(lang: string): void {
  if (!locales.includes(lang)) notFound();
}
