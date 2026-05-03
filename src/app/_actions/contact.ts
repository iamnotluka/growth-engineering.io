"use server";

import { isValidPhoneNumber } from "libphonenumber-js";

export type ContactValues = {
  name: string;
  website: string;
  mrr: string;
  phone: string;
  email: string;
  location: string;
};

export type ContactState = {
  ok: boolean;
  error: string | null;
  values?: ContactValues;
  attempt?: number;
};

// Resend sandbox mode only allows sending to the API key owner's email.
// Once growth-engineering.io is verified at resend.com/domains, swap this
// for ["luka@zoricl.io", "james.forsyth.nz@gmail.com"] (or set CONTACT_TO).
const TO = (process.env.CONTACT_TO ?? "luka@zoricl.io")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

export async function sendContact(
  prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();
  const mrr = String(formData.get("mrr") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();

  const values: ContactValues = { name, website, mrr, phone, email, location };
  const nextAttempt = (prev.attempt ?? 0) + 1;
  const fail = (error: string): ContactState => ({
    ok: false,
    error,
    values,
    attempt: nextAttempt,
  });

  if (!name || !website || !mrr || !phone || !email || !location) {
    return fail("Please fill in every field.");
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return fail("That email looks off - double-check it.");
  }
  if (!isValidPhoneNumber(phone)) {
    return fail("That phone number doesn't look right.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM ?? "Growth Engineering <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY not set");
    return fail("Could not send right now. Email luka@zoricl.io directly.");
  }

  const text = [
    `Name: ${name}`,
    `Website: ${website}`,
    `MRR: ${mrr}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Location: ${location}`,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: TO,
      reply_to: email,
      subject: `New enquiry - ${name}`,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("[contact] resend error", res.status, detail);
    return fail("Could not send right now. Try again in a moment.");
  }

  return { ok: true, error: null };
}
