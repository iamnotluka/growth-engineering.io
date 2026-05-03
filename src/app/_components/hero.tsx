import { HeroArtwork } from "./hero-artwork";

const stripItems = [
  "Assess · Diagnose · Direct",
  "Brisbane + Auckland",
  "Brands $1M – $5M+",
  "Operator-led",
  "8 – 12 week sprints",
  "NZ & AU",
  "Margin over vanity",
  "Models, not frameworks",
];

function StripRow() {
  return (
    <span>
      {stripItems.map((it, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 56 }}>
          <span className="dot" />
          {it}
        </span>
      ))}
    </span>
  );
}

function HeroStrip() {
  return (
    <div className="hero-strip">
      <div className="hero-strip-track">
        <StripRow />
        <StripRow />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-marker">
          <span className="hero-marker-rule" aria-hidden="true" />
          <span className="hero-marker-text">The Profit Clarity Sprint</span>
        </div>
        <div className="hero-grid">
          <div className="hero-text">
            <h1 className="hero-title">
              Most founders don&rsquo;t have a growth problem.
              <span className="hero-title-emph"> They have a clarity problem.</span>
            </h1>
            <p className="hero-sub">
              We read the numbers behind your business, find what is limiting
              profitable scale, and give you a plan you can actually run.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-acid">
                Apply for the sprint
              </a>
              <span className="hero-fineprint">
                Brisbane, AU &nbsp;·&nbsp; Limited intake each quarter
              </span>
            </div>
          </div>
          <div className="hero-artwork" aria-hidden="true">
            <HeroArtwork />
          </div>
        </div>
      </div>
      <HeroStrip />
    </section>
  );
}
