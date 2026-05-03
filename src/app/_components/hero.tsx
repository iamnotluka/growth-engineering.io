import { HeroArtwork, HeroToolsRow } from "./hero-artwork";

const stripItems = [
  "Assess · Diagnose · Direct",
  "Brisbane + Christchurch",
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
        <HeroToolsRow />
        <div className="hero-grid">
          <div className="hero-text">
            <h1 className="hero-title">
              Most ecommerce founders don&rsquo;t have a growth problem.
              <span className="hero-title-emph"> They have a clarity problem.</span>
            </h1>
            <div className="hero-rest">
              <p className="hero-sub">
                We read the numbers behind your business, find what&rsquo;s
                limiting profitable scale, and hand you a plan that actually
                moves them. The Profit Clarity Sprint, 12 weeks, built for
                ecommerce brands.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-acid">
                  Apply For Sprint
                </a>
                <span className="hero-fineprint">
                  Advisory for ecommerce businesses
                </span>
              </div>
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
