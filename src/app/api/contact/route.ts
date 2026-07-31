import { NextResponse } from "next/server";
import { Resend } from "resend";
import { profile } from "@/data/profile";

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(message)) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  const { error } = await resend.emails.send({
    // Switch to a verified domain sender (e.g. "Portfolio <hello@yourdomain.com>")
    // after you verify a domain in the Resend dashboard.
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: profile.email,
    replyTo: trimmedEmail,
    subject: `Portfolio message from ${trimmedName}`,
    text: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\n${trimmedMessage}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(trimmedMessage).replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
