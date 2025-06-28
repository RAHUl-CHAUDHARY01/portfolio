import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,  // your gmail
        pass: process.env.GMAIL_PASS,  // app password
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER, // your receiving email
      subject: "New Contact Message",
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Email send failed" }, { status: 500 });
  }
}
