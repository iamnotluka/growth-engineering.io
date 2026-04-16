export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="hero-kicker reveal visible">Advisory for eCommerce founders.</p>
        <h1 className="hero-title reveal visible">
          More growth lives in your numbers.
          <span className="sub">We&apos;ll show you where.</span>
        </h1>
        <p className="hero-sub reveal visible">
          Most founders don&apos;t have a growth problem. They have a <strong>clarity</strong> problem. We read the numbers behind your business, find what is limiting profitable scale, and give you a plan you can actually run.
        </p>
        <div className="hero-actions reveal visible">
          <a href="#contact" className="btn">Book a strategy call <span className="btn-arrow">→</span></a>
          <a href="#method" className="btn-link">See the method</a>
        </div>

        {/* Hero mockup: "the work" as hero image */}
        <div className="hero-mockup reveal">
          <div className="mockup-topbar">
            <div className="mockup-dot"></div>
            <div className="mockup-dot"></div>
            <div className="mockup-dot"></div>
          </div>
          <div className="mockup-inner">
            <div className="mockup-header">
              <div className="mockup-title">Contribution Margin — Last 90 Days</div>
              <div className="mockup-date">Assess Phase · v1.2</div>
            </div>
            <div className="mockup-stats">
              <div>
                <div className="mockup-stat-label">Revenue</div>
                <div className="mockup-stat-value">$847K</div>
                <div className="mockup-stat-delta">↑ 14.2%</div>
              </div>
              <div>
                <div className="mockup-stat-label">Contribution Margin</div>
                <div className="mockup-stat-value">32.4%</div>
                <div className="mockup-stat-delta down">↓ 2.1pts</div>
              </div>
              <div>
                <div className="mockup-stat-label">Blended CAC</div>
                <div className="mockup-stat-value">$48.20</div>
                <div className="mockup-stat-delta down">↑ 18%</div>
              </div>
              <div>
                <div className="mockup-stat-label">90-day LTV</div>
                <div className="mockup-stat-value">$124</div>
                <div className="mockup-stat-delta">↑ 4.8%</div>
              </div>
            </div>
            <div className="mockup-chart">
              <svg viewBox="0 0 800 140" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1d1d1f" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#1d1d1f" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                <line x1="0" y1="35" x2="800" y2="35" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
                <line x1="0" y1="70" x2="800" y2="70" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
                <line x1="0" y1="105" x2="800" y2="105" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
                {/* Filled area */}
                <path d="M0,100 C50,95 100,88 150,82 C200,76 250,65 300,58 C350,52 400,48 450,42 C500,36 550,45 600,40 C650,34 700,28 750,24 L800,22 L800,140 L0,140 Z" fill="url(#chartGradient)" />
                {/* Line */}
                <path d="M0,100 C50,95 100,88 150,82 C200,76 250,65 300,58 C350,52 400,48 450,42 C500,36 550,45 600,40 C650,34 700,28 750,24 L800,22" fill="none" stroke="#1d1d1f" strokeWidth="2" strokeLinecap="round" />
                {/* Dots */}
                <circle cx="150" cy="82" r="3" fill="#1d1d1f" />
                <circle cx="300" cy="58" r="3" fill="#1d1d1f" />
                <circle cx="450" cy="42" r="3" fill="#1d1d1f" />
                <circle cx="600" cy="40" r="3" fill="#1d1d1f" />
                <circle cx="750" cy="24" r="4" fill="#000000" />
              </svg>
            </div>
            <div className="mockup-footer">
              <div>8 metrics tracked · Updated daily</div>
              <div className="mockup-footer-tag">Bottleneck: CAC ceiling</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
