type Metric = {
  label: string;
  value: string;
};

type CaseStudy = {
  brand: string;
  hook: string;
  metrics: Metric[];
  closing: string;
};

const cases: CaseStudy[] = [
  {
    brand: "The Brothers Green",
    hook: "Inherited a declining brand. Built a multi-market, multi-channel machine.",
    metrics: [
      { label: "Revenue", value: "$21k → $545k/mo" },
      { label: "Conversion rate", value: "1.7% → 5.3%" },
      { label: "Net margin", value: "Declining → 15%" },
      { label: "New customers added", value: "60,000+" },
    ],
    closing: "Same brand. Engineered for profit, not just growth.",
  },
  {
    brand: "Furmoo",
    hook: "Scaled revenue 72% in 4 months - without breaking the P&L.",
    metrics: [
      { label: "Revenue (4 months)", value: "+72%" },
      { label: "Profit dollars", value: "$29k → $50k/mo" },
      { label: "Margin held", value: "9%+" },
      { label: "Orders", value: "2,250 → 4,143" },
    ],
    closing: "Profit dollars grew with revenue - not behind it.",
  },
  {
    brand: "OLOE",
    hook: "First month beat their Black Friday. No Black Friday.",
    metrics: [
      { label: "First month revenue", value: "A$83.8k" },
      { label: "Orders vs Black Friday", value: "+55%" },
      { label: "Month one profit", value: "A$6.4k" },
      { label: "Headroom on safe CAC", value: "2×" },
    ],
    closing: "Clarity on the unit economics unlocked confidence. Confidence unlocked spend.",
  },
  {
    brand: "FITAZ",
    hook: "Started end of Q2. First full quarter was an all-time record.",
    metrics: [
      { label: "Profit target hit", value: "149%" },
      { label: "Ad spend", value: "−20%" },
      { label: "Revenue", value: "+15%" },
      { label: "ARR saved through efficiency", value: "~$1.1M" },
    ],
    closing: "From steady-state to all-time high in one quarter.",
  },
];

function CaseStudyCard({ brand, hook, metrics, closing }: CaseStudy) {
  return (
    <article className="case-card">
      <div className="case-head">
        <h3 className="case-brand">{brand}</h3>
        <p className="case-hook">{hook}</p>
      </div>
      <dl className="case-metrics">
        {metrics.map((m) => (
          <div key={m.label} className="case-metric">
            <dt className="case-metric-lbl">{m.label}</dt>
            <dd className="case-metric-val">{m.value}</dd>
          </div>
        ))}
      </dl>
      <p className="case-closing">{closing}</p>
    </article>
  );
}

export function CaseStudies() {
  return (
    <section className="case-studies" id="case-studies">
      <div className="container">
        <div className="case-head-row">
          <h2 className="h-section">
            Same numbers.
            <br />
            <span className="ital">Different decisions.</span>
          </h2>
          <p className="lead">
            Four brands. Different stages, different problems. Same approach -
            read the economics, find the bottleneck, build the plan. Here is
            what changed.
          </p>
        </div>
        <div className="case-grid">
          {cases.map((c) => (
            <CaseStudyCard key={c.brand} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
