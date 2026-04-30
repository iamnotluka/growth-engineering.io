export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-band reveal">
          <div className="contact-band-inner">
            <div className="eyebrow on-dark">Begin</div>
            <h2 className="contact-title">
              A conversation about{" "}
              <span className="serif">the business.</span>
            </h2>
            <p className="contact-sub">
              The first call is thirty minutes, at no cost, and deliberately useful. We talk through where the business is, what&apos;s working, and what isn&apos;t. If we&apos;re not a fit, we&apos;ll usually point you somewhere that is.
            </p>
            <form
              className="contact-form"
              action="mailto:hello@growth-engineering.io"
              method="post"
              encType="text/plain"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                aria-label="Your email"
              />
              <button type="submit" className="btn">
                Book a call <span className="btn-arrow">→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
