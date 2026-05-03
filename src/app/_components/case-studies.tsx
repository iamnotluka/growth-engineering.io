/**
 * Case studies — compact 4-up index, no logos.
 * Hero stats in acid green carry both the visual punch and the differentiation.
 */

type Metric = { label: string; value: string };

type Case = {
  index: string;
  brand: string;
  hook: string;
  hero: { value: string; caption: string };
  metrics: Metric[];
  closing: string;
};

const CASES: Case[] = [
  {
    index: "01",
    brand: "The Brothers Green",
    hook: "Inherited a vertically integrated declining brand. Built a multi-market, multi-channel machine across NZ, AU and wholesale.",
    hero: { value: "25×", caption: "Revenue growth, 24 months" },
    metrics: [
      { label: "Conversion rate", value: "1.7% → 5.3%" },
      { label: "New customers", value: "60,000+" },
    ],
    closing: "Engineered for profit, not just growth.",
  },
  {
    index: "02",
    brand: "Furmoo",
    hook: "Scaled revenue 72% in four months while ad spend nearly doubled. The P&L stayed intact.",
    hero: { value: "+72%", caption: "Revenue, four months" },
    metrics: [
      { label: "Profit dollars", value: "$29k → $50k/mo" },
      { label: "Margin held", value: "9%+" },
    ],
    closing: "Profit grew with revenue — not behind it.",
  },
  {
    index: "03",
    brand: "OLOE",
    hook: "Their first month with us beat their previous Black Friday. At full price. Profitable from week one.",
    hero: { value: "+55%", caption: "Orders vs Black Friday" },
    metrics: [
      { label: "First month revenue", value: "A$83.8k" },
      { label: "Headroom on safe CAC", value: "2×" },
    ],
    closing: "Clarity on the unit economics unlocked the spend.",
  },
  {
    index: "04",
    brand: "FITAZ",
    hook: "Started end of Q2. The first full quarter was an all-time record — on revenue and profit, with less ad spend.",
    hero: { value: "149%", caption: "Of profit target, Q3" },
    metrics: [
      { label: "Ad spend / Revenue", value: "−20% / +15%" },
      { label: "ARR saved through efficiency", value: "~$1.1M" },
    ],
    closing: "From steady-state to all-time high in one quarter.",
  },
];

function CaseCell({ index, brand, hook, hero, metrics, closing }: Case) {
  return (
    <article className="case-cell">
      <span className="case-cell-index">{index}</span>

      <div className="case-cell-hero">
        <span className="case-cell-hero-val">{hero.value}</span>
        <span className="case-cell-hero-cap">{hero.caption}</span>
      </div>

      <h3 className="case-cell-brand">{brand}</h3>
      <p className="case-cell-hook">{hook}</p>

      <dl className="case-cell-metrics">
        {metrics.map((m) => (
          <div key={m.label} className="case-cell-metric">
            <dt className="case-cell-metric-lbl">{m.label}</dt>
            <dd className="case-cell-metric-val">{m.value}</dd>
          </div>
        ))}
      </dl>

      <p className="case-cell-closing">&ldquo;{closing}&rdquo;</p>
    </article>
  );
}

export function CaseStudies() {
  return (
    <section className="case-studies" id="case-studies">
      <div className="container">
        <div className="case-studies-head">
          <h2 className="case-studies-title">Case studies.</h2>
        </div>

        <div className="case-row">
          {CASES.map((c) => (
            <CaseCell key={c.brand} {...c} />
          ))}
        </div>

        <div className="case-studies-foot">
          <a href="#contact" className="case-studies-cta">
            Apply For Sprint
            <span className="case-studies-cta-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
