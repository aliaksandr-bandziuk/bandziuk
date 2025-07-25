import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const data = await request.json();

  // console.log("Received data:", data);

  const transport = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true, // true для порта 465, false для 587
    auth: {
      user: process.env.EMAIL_USER, // например: contact@yourdomain.com
      pass: process.env.EMAIL_PASSWORD, // пароль или пароль приложения
    },
  });

  // Проверка наличия всех полей
  if (data.name && data.phone && data.email) {
    const mailBody = `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nMessage: ${data.message || "No message provided"}\nCurrent Page: ${data.currentPage || "No page info"}`;

    const mailOptions: Mail.Options = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Request from Bandziuk.Com`,
      text: mailBody,
    };

    try {
      await transport.sendMail(mailOptions);
      return NextResponse.json({ message: "Email sent" });
    } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }

  // Если какие-то данные отсутствуют, вернуть ошибку
  return NextResponse.json({ error: "Invalid data" }, { status: 400 });
}
