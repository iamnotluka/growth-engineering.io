/**
 * Problem section — visually distinct from the hero:
 *  - Title spans full container width above the content (chapter-opener, not headline)
 *  - Body + chart sit in a sub-grid below, body wider than chart
 *  - Chart is an inline figure (hairline rules top/bottom, no card panel)
 */

function ProblemArt() {
  return (
    <figure
      className="problem-art"
      aria-label="Twelve months: revenue climbing while profit stays flat"
    >
      <figcaption className="problem-art-cap">
        <span className="problem-art-cap-fig">Fig. 03</span>
        <span className="problem-art-cap-rule" aria-hidden="true" />
        <span className="problem-art-cap-title">Revenue vs. profit · 12 months · indexed</span>
      </figcaption>

      <div className="problem-art-frame" aria-hidden="true">
        <svg
          viewBox="0 0 480 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Horizontal rules — solid baseline at 100, hairlines above/below */}
          <line x1="0" y1="40"  x2="480" y2="40"  stroke="rgba(10,9,8,0.06)" strokeDasharray="2 4" />
          <line x1="0" y1="100" x2="480" y2="100" stroke="rgba(10,9,8,0.16)" />
          <line x1="0" y1="160" x2="480" y2="160" stroke="rgba(10,9,8,0.06)" strokeDasharray="2 4" />

          {/* The gap — soft acid-green fill between curves */}
          <path
            d="M 0 130 C 80 124, 160 116, 240 100, 320 80, 400 56, 480 30 L 480 138 C 400 138, 320 137, 240 136, 160 134, 80 132, 0 130 Z"
            fill="rgba(122, 179, 66, 0.13)"
          />

          {/* Profit line — dashed muted */}
          <path
            d="M 0 130 C 80 132, 160 134, 240 136, 320 137, 400 138, 480 138"
            stroke="rgba(10, 9, 8, 0.42)"
            strokeWidth="1.6"
            strokeDasharray="3 4"
            fill="none"
            strokeLinecap="round"
          />

          {/* Revenue line — solid ink */}
          <path
            d="M 0 130 C 80 124, 160 116, 240 100, 320 80, 400 56, 480 30"
            stroke="#0a0908"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Endpoint markers */}
          <circle cx="480" cy="138" r="3.5" fill="rgba(10, 9, 8, 0.5)" />
          <circle cx="480" cy="30"  r="6"   fill="none" stroke="rgba(10,9,8,0.18)" strokeWidth="1" />
          <circle cx="480" cy="30"  r="4"   fill="#0a0908" />

          {/* Inline series labels — sitting on the chart, not in a footer */}
          <text x="6" y="22" fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="10" fill="#0a0908" letterSpacing="1.2" fontWeight="600">REVENUE</text>
          <text x="84" y="22" fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="10" fill="#0a0908" letterSpacing="1" fontWeight="600">+24%</text>
          <text x="6" y="178" fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="10" fill="rgba(10,9,8,0.55)" letterSpacing="1.2" fontWeight="500">PROFIT</text>
          <text x="78" y="178" fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="10" fill="rgba(10,9,8,0.55)" letterSpacing="1" fontWeight="500">−2%</text>

          {/* The gap callout — vertical hairline at midpoint */}
          <line x1="240" y1="118" x2="240" y2="200" stroke="#5a8c2a" strokeWidth="0.7" strokeDasharray="2 3" />
          <text x="248" y="200" fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="10" fill="#5a8c2a" letterSpacing="1.4" fontWeight="600">THE GAP · 26pp</text>

          {/* X-axis labels */}
          <text x="0"   y="216" fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="9" fill="rgba(10,9,8,0.45)" letterSpacing="1.2" fontWeight="500">JAN</text>
          <text x="240" y="216" textAnchor="middle" fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="9" fill="rgba(10,9,8,0.45)" letterSpacing="1.2" fontWeight="500">JUL</text>
          <text x="480" y="216" textAnchor="end" fontFamily="var(--font-plex-mono), ui-monospace, monospace" fontSize="9" fill="rgba(10,9,8,0.45)" letterSpacing="1.2" fontWeight="500">DEC</text>
        </svg>
      </div>
    </figure>
  );
}

export function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="container">
        <div className="problem-marker">
          <span className="problem-marker-rule" aria-hidden="true" />
          <span className="problem-marker-text">The Problem</span>
        </div>

        <h2 className="problem-title">
          You know there is more growth.
          <span className="problem-title-emph">You just can&rsquo;t see where.</span>
        </h2>

        <div className="problem-grid">
          <p className="problem-lead">
            Revenue is moving. The team is working. But profit, cash, CAC and
            retention tell different stories — and none of them line up.
            Decisions get harder. The cost of guessing goes up.
          </p>
          <ProblemArt />
        </div>
      </div>
    </section>
  );
}
