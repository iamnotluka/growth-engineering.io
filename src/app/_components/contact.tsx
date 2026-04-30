"use client";

import { useState } from "react";

export function Contact() {
  const [booked, setBooked] = useState(false);

  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <p className="eyebrow on-dark">Begin.</p>
          <div className="contact-grid">
            <div>
              <h2 className="contact-title">
                A conversation
                <span className="ital">about the business.</span>
              </h2>
              <p className="contact-sub">
                The first call is thirty minutes, at no cost, and deliberately
                useful. We talk through where the business is, what&rsquo;s
                working, and what isn&rsquo;t. If we&rsquo;re a fit, we&rsquo;ll
                say so. If not, we&rsquo;ll usually point you somewhere that
                is.
              </p>
              <button
                className="contact-cta-large"
                onClick={() => setBooked(true)}
              >
                Book a strategy call <span className="arrow">→</span>
              </button>
            </div>
            <div className="contact-meta">
              <div>
                <div className="contact-meta-lbl">Email</div>
                <div className="contact-meta-val">
                  <a href="mailto:hello@growth-engineering.io">
                    hello@growth-engineering.io
                  </a>
                </div>
              </div>
              <div>
                <div className="contact-meta-lbl">Based</div>
                <div className="contact-meta-val">Brisbane, QLD</div>
              </div>
              <div>
                <div className="contact-meta-lbl">Working with</div>
                <div className="contact-meta-val">Brands Australia-wide</div>
              </div>
              <div>
                <div className="contact-meta-lbl">Web</div>
                <div className="contact-meta-val">growth-engineering.io</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className={"ty-overlay" + (booked ? " open" : "")}
        onClick={() => setBooked(false)}
      >
        <div className="ty-card" onClick={(e) => e.stopPropagation()}>
          <div className="ty-eyebrow">Thanks.</div>
          <div className="ty-title">We&rsquo;ll be in touch.</div>
          <div className="ty-body">
            In production this opens a scheduling link. Expect a thirty-minute
            call, a few questions about the business, and a direct answer
            either way.
          </div>
          <button className="ty-close" onClick={() => setBooked(false)}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}
