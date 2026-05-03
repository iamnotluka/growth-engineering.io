/**
 * Hero artwork — a stylized "operator-annotated P&L" card.
 * Concept: most rows show only the structure (hairline placeholder for values).
 * One row is flagged: the bottleneck the offer promises to find.
 * That row carries the only concrete number on the artwork — and its gap.
 *
 * Renders as HTML for tabular alignment, mono numerals, and dotted rules.
 */

type Row = {
  label: string;
  flagged?: boolean;
  value?: string;
  note?: string;
};

const ROWS: Row[] = [
  { label: "Revenue" },
  { label: "− Variable costs" },
  { label: "= Contribution margin" },
  { label: "− Fixed costs" },
  {
    label: "= Net margin",
    flagged: true,
    value: "7%",
    note: "TARGET 18%  ·  −11pp",
  },
  { label: "→ Cash position" },
];

function Dash() {
  return <span className="hero-art-dash" aria-hidden="true" />;
}

export function HeroArtwork() {
  return (
    <div className="hero-art" role="figure" aria-label="A stylized P&L showing the bottleneck found by the sprint">
      <div className="hero-art-card">
        <header className="hero-art-head">
          <span className="hero-art-fig">FIG. 02</span>
          <span className="hero-art-head-title">Unit Economics</span>
          <span className="hero-art-head-meta">Sample · Q1</span>
        </header>

        <div className="hero-art-rule" aria-hidden="true" />

        <dl className="hero-art-rows">
          {ROWS.map((r) => (
            <div
              key={r.label}
              className={"hero-art-row" + (r.flagged ? " hero-art-row-flagged" : "")}
            >
              <dt className="hero-art-row-lbl">{r.label}</dt>
              <dd className="hero-art-row-right">
                {r.value ? (
                  <span className="hero-art-row-val">{r.value}</span>
                ) : (
                  <Dash />
                )}
                {r.note && <span className="hero-art-row-note">{r.note}</span>}
              </dd>
            </div>
          ))}
        </dl>

        <div className="hero-art-rule" aria-hidden="true" />

        <footer className="hero-art-foot">
          <span className="hero-art-foot-dot" aria-hidden="true" />
          <span className="hero-art-foot-text">Found · Margin bleed</span>
        </footer>
      </div>
    </div>
  );
}
