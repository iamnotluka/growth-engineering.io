function DivergeViz() {
  return (
    <div className="diverge-viz" aria-hidden="true">
      <div className="vlbl">
        <span>Four signals · last 12 months</span>
        <span>Indexed</span>
      </div>
      <svg viewBox="0 0 360 220" preserveAspectRatio="none">
        <line x1="0" y1="50" x2="360" y2="50" stroke="rgba(14,16,24,0.06)" strokeDasharray="2 4" />
        <line x1="0" y1="110" x2="360" y2="110" stroke="rgba(14,16,24,0.10)" strokeDasharray="2 4" />
        <line x1="0" y1="170" x2="360" y2="170" stroke="rgba(14,16,24,0.06)" strokeDasharray="2 4" />
        <path
          d="M0,140 C50,130 100,120 160,100 C220,80 280,60 360,40"
          stroke="#0e1018"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M0,120 C60,118 120,115 180,118 C240,121 300,124 360,126"
          stroke="#4a4d57"
          strokeWidth="1.6"
          fill="none"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />
        <path
          d="M0,160 C60,155 120,148 180,130 C240,108 300,90 360,72"
          stroke="#a13030"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M0,90 C60,95 120,105 180,118 C240,130 300,142 360,156"
          stroke="#d6ff3d"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <line x1="200" y1="118" x2="200" y2="22" stroke="rgba(14,16,24,0.4)" strokeDasharray="2 3" />
        <circle cx="200" cy="118" r="4" fill="#0e1018" />
        <text x="206" y="22" fontSize="9" fill="#4a4d57" letterSpacing="1">
          DIVERGENCE
        </text>
      </svg>
      <div className="legend">
        <span>
          <i style={{ background: "#0e1018" }} />
          Revenue
        </span>
        <span>
          <i style={{ background: "#4a4d57" }} />
          Profit
        </span>
        <span>
          <i style={{ background: "#a13030" }} />
          CAC
        </span>
        <span>
          <i style={{ background: "#d6ff3d" }} />
          LTV
        </span>
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="container">
        <p className="eyebrow">The problem.</p>
        <div className="problem-grid">
          <div>
            <h2 className="h-section">
              You know there is more growth.
              <br />
              <span className="ital">You just can&rsquo;t see where.</span>
            </h2>
            <p className="lead">
              Revenue is moving. The team is working. But profit, cash, CAC and
              retention tell different stories — and none of them line up.
              Decisions get harder. The cost of guessing goes up.
            </p>
          </div>
          <DivergeViz />
        </div>
      </div>
    </section>
  );
}
