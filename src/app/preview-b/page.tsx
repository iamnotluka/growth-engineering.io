import type { Metadata } from "next";
import "./preview-b.css";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

function SwitcherBar() {
  return (
    <nav className="pb-switcher" aria-label="Design preview switcher">
      <a href="/" className="pb-switcher-link">Current</a>
      <a href="/preview-a" className="pb-switcher-link">A · Editorial</a>
      <a href="/preview-b" className="pb-switcher-link pb-switcher-active">B · Spreadsheet</a>
    </nav>
  );
}

export default function PreviewB() {
  return (
    <div className="pb-page">
      <SwitcherBar />

      {/* HERO — annual report cover */}
      <section className="pb-hero">
        <div className="pb-hero-inner">
          <div>
            <div className="pb-hero-marker">
              <span>Edition 01</span>
              <span className="pb-marker-dot">·</span>
              <span>Q2 2026</span>
              <span className="pb-marker-dot">·</span>
              <span>Profit Clarity Sprint</span>
            </div>
            <h1 className="pb-hero-title">
              More growth lives in your numbers.
            </h1>
            <p className="pb-hero-sub">
              We read the numbers behind your eCommerce business, find what is
              limiting profitable scale, and give you a plan you can actually run.
            </p>
            <div className="pb-hero-actions">
              <a href="#contact" className="pb-cta">Apply now</a>
              <span className="pb-hero-fineprint">
                Brisbane, AU &nbsp;·&nbsp; Brands $1M–$5M+
              </span>
            </div>
          </div>
          <aside className="pb-hero-readout" aria-label="Track record">
            <div className="pb-readout-head">Track record</div>
            <dl className="pb-readout">
              <div className="pb-readout-row">
                <dt className="pb-readout-lbl">Brands worked with</dt>
                <dd className="pb-readout-val">37</dd>
              </div>
              <div className="pb-readout-row">
                <dt className="pb-readout-lbl">Combined revenue scaled</dt>
                <dd className="pb-readout-val">$48M+</dd>
              </div>
              <div className="pb-readout-row">
                <dt className="pb-readout-lbl">Median margin lift</dt>
                <dd className="pb-readout-val">+6.2pp</dd>
              </div>
              <div className="pb-readout-row">
                <dt className="pb-readout-lbl">Avg. sprint length</dt>
                <dd className="pb-readout-val">8–12 wks</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* METHOD as a ledger */}
      <section className="pb-ledger">
        <div className="pb-ledger-inner">
          <header className="pb-section-head">
            <span className="pb-section-num">01</span>
            <span className="pb-section-name">Method</span>
            <span className="pb-section-rule" />
            <span className="pb-section-meta">Three phases · 8–12 weeks</span>
          </header>

          <div className="pb-method">
            <article className="pb-method-row">
              <div className="pb-method-phase">A</div>
              <div className="pb-method-name">Assess</div>
              <div className="pb-method-body">
                Pull the data and build a true picture of how the business actually
                works today, revenue structure, variable and fixed costs,
                contribution margin, AOV, repeat behaviour, LTV, CAC, and cash.
                Everything in one place, properly modelled.
              </div>
              <div className="pb-method-out">A clear view of business economics</div>
            </article>
            <article className="pb-method-row">
              <div className="pb-method-phase">D</div>
              <div className="pb-method-name">Diagnose</div>
              <div className="pb-method-body">
                Analyse what the assess phase revealed. Find what is actually
                holding back profitable growth, margins, repeat, CAC, cash,
                or structural issues hiding in the data. Cause, not symptom.
              </div>
              <div className="pb-method-out">Bottleneck identified, evidenced</div>
            </article>
            <article className="pb-method-row">
              <div className="pb-method-phase">D</div>
              <div className="pb-method-name">Direct</div>
              <div className="pb-method-body">
                Translate the diagnosis into specific actions, which levers
                to pull, what success looks like in the numbers, what it will take
                to execute. Then stay with you through the work.
              </div>
              <div className="pb-method-out">Plan, priorities, partner</div>
            </article>
          </div>
        </div>
      </section>

      {/* CASE STUDY as a financial table */}
      <section className="pb-case">
        <div className="pb-case-inner">
          <header className="pb-section-head">
            <span className="pb-section-num">02</span>
            <span className="pb-section-name">Case study</span>
            <span className="pb-section-rule" />
            <span className="pb-section-meta">№ 01 of 04</span>
          </header>

          <h2 className="pb-case-brand">The Brothers Green</h2>
          <p className="pb-case-hook">
            Inherited a vertically integrated declining brand. Built a multi-market,
            multi-channel machine.
          </p>

          <table className="pb-case-table">
            <thead>
              <tr>
                <th scope="col" className="pb-tbl-metric">Metric</th>
                <th scope="col" className="pb-tbl-num">Sept 2023</th>
                <th scope="col" className="pb-tbl-arrow" aria-hidden="true"></th>
                <th scope="col" className="pb-tbl-num">Mar 2026</th>
                <th scope="col" className="pb-tbl-num pb-tbl-delta">Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pb-tbl-metric">Revenue, monthly</td>
                <td className="pb-tbl-num pb-tbl-from">$21k</td>
                <td className="pb-tbl-arrow" aria-hidden="true">→</td>
                <td className="pb-tbl-num pb-tbl-to">$545k</td>
                <td className="pb-tbl-num pb-tbl-delta-val">×25.9</td>
              </tr>
              <tr>
                <td className="pb-tbl-metric">Conversion rate</td>
                <td className="pb-tbl-num pb-tbl-from">1.7%</td>
                <td className="pb-tbl-arrow" aria-hidden="true">→</td>
                <td className="pb-tbl-num pb-tbl-to">5.3%</td>
                <td className="pb-tbl-num pb-tbl-delta-val">×3.1</td>
              </tr>
              <tr>
                <td className="pb-tbl-metric">Net margin</td>
                <td className="pb-tbl-num pb-tbl-from">−</td>
                <td className="pb-tbl-arrow" aria-hidden="true">→</td>
                <td className="pb-tbl-num pb-tbl-to">15.0%</td>
                <td className="pb-tbl-num pb-tbl-delta-val">+15pp</td>
              </tr>
              <tr>
                <td className="pb-tbl-metric">Average order value</td>
                <td className="pb-tbl-num pb-tbl-from">$50</td>
                <td className="pb-tbl-arrow" aria-hidden="true">→</td>
                <td className="pb-tbl-num pb-tbl-to">$94</td>
                <td className="pb-tbl-num pb-tbl-delta-val">+88%</td>
              </tr>
              <tr>
                <td className="pb-tbl-metric">New customers acquired</td>
                <td className="pb-tbl-num pb-tbl-from">-</td>
                <td className="pb-tbl-arrow" aria-hidden="true">→</td>
                <td className="pb-tbl-num pb-tbl-to">60,000+</td>
                <td className="pb-tbl-num pb-tbl-delta-val">aMER 2.0+</td>
              </tr>
            </tbody>
          </table>

          <p className="pb-case-closing">
            <span className="pb-case-closing-lbl">Note</span>
            Same brand. Engineered for profit, not just growth.
          </p>
        </div>
      </section>

      <footer className="pb-end">
        <span className="pb-end-mark">END · Edition 01</span>
      </footer>
    </div>
  );
}
