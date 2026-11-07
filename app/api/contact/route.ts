import { NextResponse } from "next/server";

export const runtime = "nodejs";

const LIMITS = {
  name: 100,
  company: 120,
  email: 160,
  phone: 40,
  service: 80,
  budget: 60,
  message: 4000,
  locale: 2,
} as const;

type Field = keyof typeof LIMITS;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: real users never fill this field.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const pick = (key: Field) => (typeof body[key] === "string" ? (body[key] as string).trim().slice(0, LIMITS[key]) : "");
  const data = {
    name: pick("name"),
    company: pick("company"),
    email: pick("email"),
    phone: pick("phone"),
    service: pick("service"),
    budget: pick("budget"),
    message: pick("message"),
    locale: pick("locale") || "en",
  };

  if (!data.name || !data.message || !EMAIL_RE.test(data.email)) {
    return NextResponse.json({ ok: false, error: "validation" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Fontain Website <onboarding@resend.dev>";

  const text = [
    `New enquiry from the Fontain website (${data.locale})`,
    "",
    `Name:     ${data.name}`,
    `Company:  ${data.company || "-"}`,
    `Email:    ${data.email}`,
    `Phone:    ${data.phone || "-"}`,
    `Service:  ${data.service || "-"}`,
    `Budget:   ${data.budget || "-"}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  if (apiKey && to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: to.split(",").map((s) => s.trim()),
          reply_to: data.email,
          subject: `New enquiry: ${data.name}${data.service ? ` — ${data.service}` : ""}`,
          text,
        }),
      });
      if (!res.ok) {
        console.error("[contact] email provider error", res.status, await res.text());
        return NextResponse.json({ ok: false, error: "provider" }, { status: 502 });
      }
    } catch (err) {
      console.error("[contact] email provider unreachable", err);
      return NextResponse.json({ ok: false, error: "provider" }, { status: 502 });
    }
  } else {
    // No email provider configured yet: log so the message is not lost in development.
    console.log("[contact] new enquiry (email provider not configured)\n" + text);
  }

  return NextResponse.json({ ok: true });
}
