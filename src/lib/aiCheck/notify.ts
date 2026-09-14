import nodemailer from "nodemailer";
import type { AiCheckInput, AiCheckReport } from "./types";

/**
 * Tells the owner a check was run: every one is a warm lead who has just seen
 * what assistants say about their company. Uses the same Hostinger mailbox as
 * the contact form. A mail failure is logged and swallowed — the visitor has
 * already been charged for, and should still get, their report.
 */
export async function notifyOwner(input: AiCheckInput, report: AiCheckReport, cost: number): Promise<void> {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) return;

  const s = report.summary;
  const lines = [
    `Company: ${input.company}`,
    `Website: ${input.domain}`,
    `Service: ${input.service}`,
    `Location: ${input.location || "-"}`,
    `Email: ${input.email}`,
    `Language: ${input.lang}`,
    "",
    `Recommended when a buyer asks who to hire: ${s.recommended} of ${s.recommendationAsked}`,
    `Recognised when asked about the company: ${s.recognised} of ${s.aboutAsked}`,
    `Own site cited: ${s.siteCited} of ${s.answered}`,
    `Failed answers: ${s.failed}`,
    `DataForSEO cost: $${cost.toFixed(4)}`,
    "",
    ...report.answers.map(
      (a) =>
        `[${a.engine} / ${a.kind}] named=${a.named} siteCited=${a.siteCited} noInfo=${a.noInformation}${a.error ? ` ERROR ${a.error}` : ""}\n${a.excerpt}\n`,
    ),
  ];

  try {
    const transport = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASSWORD },
    });
    await transport.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: input.email,
      subject: `AI visibility check: ${input.company}`,
      text: lines.join("\n"),
    });
  } catch (err) {
    console.error("[ai-check] owner notification failed:", (err as Error).message);
  }
}
