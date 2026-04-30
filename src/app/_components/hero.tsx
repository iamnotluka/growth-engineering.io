type StatProps = {
  label: string;
  value: string;
  delta: string;
  up?: boolean;
  down?: boolean;
};

function Stat({ label, value, delta, up, down }: StatProps) {
  return (
    <div className="mock-stat">
      <div className="lbl">{label}</div>
      <div className="v">{value}</div>
      <div className={"delta " + (up ? "up" : down ? "down" : "")}>{delta}</div>
    </div>
  );
}

function DashboardCard() {
  return (
    <div className="hero-card hero-card-1">
      <div className="mock-head">
        <div className="t">Contribution Margin — Last 90 Days</div>
        <div className="d">Assess · v1.2</div>
      </div>
      <div className="mock-stats">
        <Stat label="Revenue" value="$847K" delta="↑ 14.2%" up />
        <Stat label="Margin" value="32.4%" delta="↓ 2.1pts" down />
        <Stat label="Blended CAC" value="$48.20" delta="↑ 18%" down />
        <Stat label="90-day LTV" value="$124" delta="↑ 4.8%" up />
      </div>
      <div className="mock-chart">
        <svg
          viewBox="0 0 600 90"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
        >
          <defs>
            <linearGradient id="mgrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d6ff3d" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#d6ff3d" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line
            x1="0"
            y1="22"
            x2="600"
            y2="22"
            stroke="rgba(14,16,24,0.06)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
          <line
            x1="0"
            y1="55"
            x2="600"
            y2="55"
            stroke="rgba(14,16,24,0.06)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
          <path
            d="M0,68 C50,64 90,58 140,52 C190,46 230,38 280,40 C330,42 370,28 420,24 C470,20 520,16 580,12 L600,10 L600,90 L0,90 Z"
            fill="url(#mgrad)"
          />
          <path
            d="M0,68 C50,64 90,58 140,52 C190,46 230,38 280,40 C330,42 370,28 420,24 C470,20 520,16 580,12 L600,10"
            fill="none"
            stroke="#0e1018"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="280" cy="40" r="3" fill="#0e1018" />
          <circle cx="420" cy="24" r="3" fill="#0e1018" />
          <circle
            cx="580"
            cy="12"
            r="5"
            fill="#d6ff3d"
            stroke="#0e1018"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div className="mock-foot">
        <div>8 metrics · daily</div>
        <div className="mock-tag">CAC ceiling</div>
      </div>
    </div>
  );
}

const stripItems = [
  "Assess · Diagnose · Direct",
  "Brisbane, QLD",
  "Brands $1M — $5M+",
  "Evidence over opinion",
  "Eight metrics tracked",
  "Working with brands Australia-wide",
  "First-principles modelling",
  "You keep the work",
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
        <div className="hero-grid">
          <div>
            <div className="hero-kicker">
              <span className="pip" />
              Advisory for eCommerce founders
            </div>
            <h1 className="hero-title">
              More growth lives in your numbers.
              <span className="l2">We&rsquo;ll show you where.</span>
            </h1>
            <p className="hero-sub">
              Most founders don&rsquo;t have a growth problem. They have a{" "}
              <strong>clarity</strong> problem. We read the numbers behind your
              business, find what is limiting profitable scale, and give you a
              plan you can actually run.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-acid">
                Book a strategy call <span className="arrow">→</span>
              </a>
              <a href="#method" className="btn-ghost">
                See the method &nbsp;›
              </a>
            </div>
          </div>
          <div className="hero-mock-stack" aria-hidden="true">
            <DashboardCard />
            <div className="hero-card hero-card-2">
              <div className="small-eye">Bottleneck found</div>
              <div className="small-h">
                CAC ceiling at <em>$48</em>
              </div>
              <div className="small-foot">Diagnose · v1.2</div>
            </div>
            <div className="hero-card hero-card-3">
              <div className="stamp">
                Run the
                <br />
                plan.<small>Direct phase</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroStrip />
    </section>
  );
}
