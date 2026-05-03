/**
 * Problem section — narrative essay on the left, dominant Observation panel on the right.
 *  - Title spans full width above
 *  - Below: 2-col body. Left = prose, Right = pull-stat + micro-vitals
 *  - Right column is the visual centerpiece; prose narrates around it
 */

/**
 * Scale calculator — shows the math across the offer's target brand-size range.
 * The math is the defence: a prospect can verify by doing it on their own revenue.
 * Each row's `weight` (0..1) drives the width of a small horizontal range bar.
 */
type ScaleRow = { size: string; range: string; weight: number };

const SCALE: ScaleRow[] = [
  { size: "On a $1M brand", range: "$50 – 100K",  weight: 0.20 },
  { size: "On a $3M brand", range: "$150 – 300K", weight: 0.55 },
  { size: "On a $5M brand", range: "$250 – 500K", weight: 1.00 },
];

function ObservationPanel() {
  return (
    <aside
      className="problem-monitor"
      aria-label="The invisible tax: 5 to 10 percent of revenue typically hiding in the numbers"
    >
      <header className="problem-monitor-head">
        <span className="problem-monitor-title">The cost of guessing</span>
      </header>

      <div className="problem-monitor-stat">
        <span className="problem-monitor-stat-lbl">The invisible tax</span>
        <div className="problem-monitor-stat-val">
          <span className="problem-monitor-stat-num">5–10</span>
          <span className="problem-monitor-stat-unit">pp</span>
        </div>
        <span className="problem-monitor-stat-foot">
          of net margin, hiding in plain view
        </span>
      </div>

      <div className="problem-monitor-scale">
        <span className="problem-monitor-scale-head">What that looks like</span>
        <ul className="problem-monitor-scale-list">
          {SCALE.map((row) => (
            <li key={row.size} className="problem-monitor-scale-row">
              <span className="problem-monitor-scale-size">{row.size}</span>
              <span
                className="problem-monitor-scale-bar"
                aria-hidden="true"
              >
                <span
                  className="problem-monitor-scale-bar-fill"
                  style={{ width: `${row.weight * 100}%` }}
                />
              </span>
              <span className="problem-monitor-scale-range">{row.range}</span>
            </li>
          ))}
        </ul>
      </div>

      <footer className="problem-monitor-foot">
        <span className="problem-monitor-foot-dot" aria-hidden="true" />
        <span>Compounds year on year.</span>
      </footer>
    </aside>
  );
}

export function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="container">
        <h2 className="problem-title">
          You know there is more growth.
          <span className="problem-title-emph">You just can&rsquo;t see where.</span>
        </h2>

        <div className="problem-body">
          <div className="problem-prose">
            <p>
              Revenue is moving. The team is working. But profit isn&rsquo;t
              following. Cash isn&rsquo;t accumulating. CAC looks fine, but
              margin keeps eroding. Each metric tells its own story.
            </p>

            <p>
              So you start guessing. You scale spend on Monday because the
              dashboard looks green. By Wednesday you&rsquo;re not sure if you
              should have. Three weeks later you&rsquo;ve added two more
              dashboards and you&rsquo;re more confused, not less.
            </p>

            <p className="problem-prose-final">
              The longer this goes on, the more expensive guessing becomes.
            </p>
          </div>

          <ObservationPanel />
        </div>
      </div>
    </section>
  );
}
