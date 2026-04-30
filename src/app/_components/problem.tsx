const COLOR_REVENUE = "#f7f8f8";
const COLOR_PROFIT = "rgba(255, 255, 255, 0.4)";
const COLOR_CAC = "#ef4444";
const COLOR_LTV = "#f59e0b";

function DivergeViz() {
  return (
    <div className="diverge-viz" aria-hidden="true">
      <div className="vlbl">
        <span>Four signals · last 12 months</span>
        <span>Indexed</span>
      </div>
      <svg viewBox="0 0 360 220" preserveAspectRatio="none">
        {/* grid */}
        <line x1="0" y1="50" x2="360" y2="50" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4" />
        <line x1="0" y1="110" x2="360" y2="110" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 4" />
        <line x1="0" y1="170" x2="360" y2="170" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 4" />

        {/* divergence vertical guide */}
        <line
          x1="200"
          y1="14"
          x2="200"
          y2="200"
          stroke="rgba(149, 191, 71, 0.45)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        {/* Revenue - climbing, white */}
        <path
          d="M0,140 C50,130 100,120 160,105 C220,90 280,66 360,42"
          stroke={COLOR_REVENUE}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Profit - flat, gray dashed */}
        <path
          d="M0,120 C60,118 120,115 180,118 C240,121 300,124 360,126"
          stroke={COLOR_PROFIT}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 5"
          strokeLinecap="round"
        />
        {/* CAC - climbing fast, red */}
        <path
          d="M0,160 C60,155 120,148 180,130 C240,108 300,88 360,68"
          stroke={COLOR_CAC}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* LTV - falling, amber */}
        <path
          d="M0,88 C60,95 120,105 180,118 C240,132 300,148 360,162"
          stroke={COLOR_LTV}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* divergence marker + label */}
        <circle cx="200" cy="118" r="5" fill="#95bf47" stroke="#101113" strokeWidth="2" />
        <text
          x="208"
          y="14"
          fontSize="9"
          fill="#95bf47"
          fontWeight="600"
          letterSpacing="1.5"
        >
          DIVERGENCE
        </text>
      </svg>
      <div className="legend">
        <span>
          <i style={{ background: COLOR_REVENUE }} />
          Revenue <em>+24%</em>
        </span>
        <span>
          <i style={{ background: COLOR_PROFIT }} />
          Profit <em>±0%</em>
        </span>
        <span>
          <i style={{ background: COLOR_CAC }} />
          CAC <em>+48%</em>
        </span>
        <span>
          <i style={{ background: COLOR_LTV }} />
          LTV <em>−38%</em>
        </span>
      </div>
    </div>
  );
}

export function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="container">
        <div className="problem-grid">
          <div>
            <h2 className="h-section">
              You know there is more growth.
              <br />
              <span className="ital">You just can&rsquo;t see where.</span>
            </h2>
            <p className="lead">
              Revenue is moving. The team is working. But profit, cash, CAC and
              retention tell different stories - and none of them line up.
              Decisions get harder. The cost of guessing goes up.
            </p>
          </div>
          <DivergeViz />
        </div>
      </div>
    </section>
  );
}
