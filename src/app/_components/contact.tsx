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

const STEPS: { n: string; head: string; meta: string }[] = [
  { n: "01", head: "Submit the form", meta: "Takes 90 seconds." },
  {
    n: "02",
    head: "We review fit",
    meta: "We come back within one business day.",
  },
  {
    n: "03",
    head: "30-minute call",
    meta: "We check fit. Both ways.",
  },
  {
    n: "04",
    head: "Proposal",
    meta: "The work, the timing, the fee. If we're both in.",
  },
];

const REASSURANCE = ["8–12 weeks", "Evidence-led", "Australia/NZ"];

const initialState: ContactState = { ok: false, error: null };

export function Contact() {
  const [state, action, pending] = useActionState(sendContact, initialState);
  const [phone, setPhone] = useState<string | undefined>();
  const [phoneTouched, setPhoneTouched] = useState(false);

  const phoneInvalid =
    phoneTouched && phone !== undefined && !isValidPhoneNumber(phone);

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* LEFT — pitch, process, reassurance */}
          <div className="contact-left">
            <h2 className="h-section">
              A conversation
              <span className="ital">about the business.</span>
            </h2>
            <p className="contact-pitch">
              The <strong>Profit Clarity Sprint</strong>
              {" "}is a fixed-fee diagnostic for eCommerce founders doing
              $1M–$5M+. Tell us a bit about your business — we&rsquo;ll come
              back within one business day.
            </p>

            <ol className="contact-steps">
              {STEPS.map((s) => (
                <li key={s.n} className="contact-step">
                  <span className="contact-step-n">{s.n}</span>
                  <div>
                    <div className="contact-step-head">{s.head}</div>
                    <div className="contact-step-meta">{s.meta}</div>
                  </div>
                </li>
              ))}
            </ol>

            <ul className="contact-reassure" aria-label="Engagement details">
              {REASSURANCE.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT — form */}
          <div className="contact-right">
            {state.ok ? (
              <div className="contact-success">
                <div className="contact-success-title">Got it.</div>
                <p>
                  We&rsquo;ll get back to you within one business day. Speak
                  soon.
                </p>
              </div>
            ) : (
              <form className="contact-form" action={action}>
                <div className="contact-form-head">
                  <span className="contact-form-eye">Apply</span>
                  <span className="contact-form-meta">90 seconds</span>
                </div>

                <label className="cf-field">
                  <span className="cf-lbl">Name</span>
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                  />
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
                    <span className="cf-hint">
                      Enter a valid phone number.
                    </span>
                  )}
                </div>
                <label className="cf-field">
                  <span className="cf-lbl">Email</span>
                  <input
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@yourbrand.com"
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
                  <span>
                    {pending
                      ? "Sending…"
                      : "Apply for the Profit Clarity Sprint"}
                  </span>
                  {!pending ? (
                    <span className="arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </button>

                <p className="contact-privacy">
                  We respond within one business day. Your details stay
                  between us.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
