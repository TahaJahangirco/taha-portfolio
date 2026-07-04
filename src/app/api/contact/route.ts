import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body as Record<string, string>;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO || emailUser;

    // If credentials aren't configured yet, log the brief server-side
    // so nothing is lost, and tell the client it was received.
    if (!emailUser || !emailPass) {
      console.warn(
        "[contact] EMAIL_USER / EMAIL_PASS not set in .env — logging brief instead of sending email."
      );
      console.log("[contact] new brief:", { name, email, company, message });
      return NextResponse.json({
        ok: true,
        note: "logged (email not configured)",
      });
    }

    // Build the transporter once per request (cheap with SMTP pool).
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${emailUser}>`,
      to: emailTo,
      replyTo: `${name} <${email}>`,
      subject: `New project brief — ${name}${company ? ` (${company})` : ""}`,
      text: [
        `New project brief from your portfolio:`,
        ``,
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Company: ${company || "—"}`,
        ``,
        `Message:`,
        `${message}`,
        ``,
        `— Sent from tahajahangirco portfolio`,
      ].join("\n"),
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
          <h2 style="margin:0 0 4px;font-size:18px;font-weight:600;">New project brief</h2>
          <p style="margin:0 0 24px;color:#666;font-size:13px;">From your portfolio contact form</p>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#888;width:90px;vertical-align:top;">Name</td><td style="padding:8px 0;font-weight:500;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;color:#888;vertical-align:top;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#1a1a1a;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:8px 0;color:#888;vertical-align:top;">Company</td><td style="padding:8px 0;">${escapeHtml(company || "—")}</td></tr>
          </table>
          <h3 style="margin:24px 0 8px;font-size:13px;color:#888;text-transform:uppercase;letter-spacing:0.08em;">Message</h3>
          <p style="margin:0;padding:16px;background:#f5f5f5;border-radius:8px;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</p>
          <p style="margin:24px 0 0;font-size:12px;color:#999;">— Sent from the Taha Jahangir portfolio</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("[contact] email sent to", emailTo, "from", email);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
