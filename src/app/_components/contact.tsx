"use client";

import { useState, useActionState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { sendContact, type ContactState } from "../_actions/contact";

const MRR_OPTIONS = [
  "0 – 50k per month",
  "50k – 100k per month",
  "100k – 250k per month",
  "250k – 500k per month",
  "500k – 1M per month",
  "1M+ per month",
];

const initialState: ContactState = { ok: false, error: null };

export function Contact() {
  const [state, action, pending] = useActionState(sendContact, initialState);
  const [phone, setPhone] = useState<string | undefined>();
  const [phoneTouched, setPhoneTouched] = useState(false);

  const phoneInvalid = phoneTouched && phone !== undefined && !isValidPhoneNumber(phone);

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-body">
          <h2 className="contact-title">
            A conversation
            <span className="ital">about the business.</span>
          </h2>
          <p className="contact-sub">
            Let&rsquo;s connect. Drop your details, we&rsquo;ll check if
            you&rsquo;re the right fit, and we&rsquo;ll reach out to you.
          </p>

          {state.ok ? (
            <div className="contact-success">
              <p>We&rsquo;ll get back to you ASAP. Speak soon!</p>
            </div>
          ) : (
            <form className="contact-form" action={action}>
              <label className="cf-field">
                <span className="cf-lbl">Name</span>
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label className="cf-field">
                <span className="cf-lbl">Website</span>
                <input
                  name="website"
                  type="text"
                  required
                  placeholder="yourbrand.com"
                  autoComplete="url"
                />
              </label>
              <label className="cf-field">
                <span className="cf-lbl">MRR</span>
                <select name="mrr" required defaultValue="">
                  <option value="" disabled>
                    Select a range
                  </option>
                  {MRR_OPTIONS.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </label>
              <div className="cf-field">
                <span className="cf-lbl">Phone</span>
                <PhoneInput
                  international
                  defaultCountry="AU"
                  name="phone"
                  value={phone}
                  onChange={setPhone}
                  onBlur={() => setPhoneTouched(true)}
                  required
                  className={
                    "cf-phone" + (phoneInvalid ? " cf-phone-invalid" : "")
                  }
                />
                {phoneInvalid && (
                  <span className="cf-hint">Enter a valid phone number.</span>
                )}
              </div>
              <label className="cf-field">
                <span className="cf-lbl">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </label>

              {state.error && (
                <div className="cf-error" role="alert">
                  {state.error}
                </div>
              )}

              <button
                type="submit"
                className="contact-cta-large"
                disabled={pending || phoneInvalid}
              >
                {pending ? "Sending…" : "Apply now"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
