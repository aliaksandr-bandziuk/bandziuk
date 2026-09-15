import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { guardContactRequest } from "@/lib/formGuard/server";

export async function POST(request: NextRequest) {
  const guard = await guardContactRequest(request);

  if (!guard.ok) {
    if (guard.silent) return NextResponse.json({ message: "Email sent" });
    console.warn(`[api/email] rejected: ${guard.reason}`);
    return NextResponse.json({ error: "Invalid request" }, { status: guard.status });
  }

  const data = guard.data;

  const transport = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // true for port 465, false for 587
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    // Fail fast instead of holding a serverless function open on a slow SMTP.
    connectionTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const mailBody = [
    `Name: ${data.name}`,
    `Phone: ${data.phone || "No phone provided"}`,
    `Email: ${data.email}`,
    `Message: ${data.message || "No message provided"}`,
    `Current Page: ${data.currentPage || "No page info"}`,
    `Policy agreed: ${data.agreedToPolicy ? "Yes" : "No"}`,
    ...(data.preferredContact ? [`Preferred contact: ${data.preferredContact}`] : []),
  ].join("\n");

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    // Reply goes straight to the enquirer. The address passed validation.
    replyTo: data.email,
    subject: `Request from Bandziuk.Com`,
    text: mailBody,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    // Logged, not returned: SMTP errors can carry server and account details.
    console.error("[api/email] send failed:", err);
    return NextResponse.json({ error: "Could not send" }, { status: 500 });
  }
}
