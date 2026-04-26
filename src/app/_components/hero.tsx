export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden></div>
      <div className="container hero-inner">
        <h1 className="hero-title reveal visible">
          More growth lives in your numbers. <span className="serif">We&apos;ll show you where.</span>
        </h1>
        <p className="hero-sub reveal visible">
          Most founders don&apos;t have a growth problem. They have a <strong>clarity</strong> problem. We read the numbers behind your business, find what is limiting profitable scale, and give you a plan you can run.
        </p>
        <div className="hero-actions reveal visible">
          <a href="#contact" className="btn">
            Book a strategy call
          </a>
        </div>
      </div>

      <div className="hero-chart reveal visible">
        <svg viewBox="0 0 1100 280" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6fa88a" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#6fa88a" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroChartStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#9ec1aa" />
              <stop offset="50%" stopColor="#5a9b76" />
              <stop offset="100%" stopColor="#9ec1aa" />
            </linearGradient>
          </defs>

          {/* Filled area */}
          <path
            d="M0,170 C 80,140 140,90 220,110 C 300,130 350,200 430,200 C 510,200 540,120 620,150 C 700,180 740,240 820,210 C 900,180 940,110 1020,130 L 1100,150 L 1100,280 L 0,280 Z"
            fill="url(#heroChartFill)"
          />
          {/* Line */}
          <path
            d="M0,170 C 80,140 140,90 220,110 C 300,130 350,200 430,200 C 510,200 540,120 620,150 C 700,180 740,240 820,210 C 900,180 940,110 1020,130 L 1100,150"
            fill="none"
            stroke="url(#heroChartStroke)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          {/* Vertical guide for center card */}
          <line
            x1="540"
            y1="50"
            x2="540"
            y2="240"
            stroke="rgba(13,33,24,0.18)"
            strokeWidth="1"
            strokeDasharray="3 4"
          />
          {/* Anchor dot */}
          <circle cx="540" cy="124" r="4" fill="#163528" />
        </svg>

        <div className="hero-chart-card left">
          <div className="hero-chart-card-label">Revenue</div>
          <div className="hero-chart-card-value up">+$847,210</div>
        </div>
        <div className="hero-chart-card center">
          <div className="hero-chart-card-label">Contribution margin</div>
          <div className="hero-chart-card-value">22.8%</div>
        </div>
        <div className="hero-chart-card right">
          <div className="hero-chart-card-label">Blended CAC</div>
          <div className="hero-chart-card-value up">−$48.20</div>
        </div>
      </div>
    </section>
  );
}
