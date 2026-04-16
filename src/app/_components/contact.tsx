export function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <p className="eyebrow reveal">Begin.</p>
        <h2 className="contact-title reveal">
          A conversation
          <span className="sub">about the business.</span>
        </h2>
        <p className="contact-sub reveal">
          The first call is thirty minutes, at no cost, and deliberately useful. We talk through where the business is, what&apos;s working, and what isn&apos;t. If we&apos;re a fit, we&apos;ll say so. If not, we&apos;ll usually point you somewhere that is.
        </p>
        <a href="mailto:hello@growth-engineering.io?subject=Strategy%20call" className="contact-cta reveal">
          Book a strategy call <span className="btn-arrow">→</span>
        </a>

        <div className="contact-meta">
          <div>
            <div className="contact-meta-label">Email</div>
            <div className="contact-meta-value"><a href="mailto:hello@growth-engineering.io">hello@growth-engineering.io</a></div>
          </div>
          <div>
            <div className="contact-meta-label">Based</div>
            <div className="contact-meta-value">Brisbane, QLD</div>
          </div>
          <div>
            <div className="contact-meta-label">Working with</div>
            <div className="contact-meta-value">Brands Australia-wide</div>
          </div>
          <div>
            <div className="contact-meta-label">Web</div>
            <div className="contact-meta-value">growth-engineering.io</div>
          </div>
        </div>
      </div>
    </section>
  );
}
