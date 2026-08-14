import { NextResponse } from "next/server";

/**
 * IndexNow key file, served from an env var rather than a static file in
 * public/ — public/images/landing-cta-photo.jpg was wiped out wholesale by
 * an unrelated cleanup commit in August 2026, and the standard <key>.txt
 * naming convention would otherwise put the credential into a committed
 * filename (and git history) permanently. Every submission carries
 * keyLocation pointing here since the key isn't at the site root.
 */
export async function GET() {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    return new NextResponse("", { status: 500 });
  }
  return new NextResponse(key, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
