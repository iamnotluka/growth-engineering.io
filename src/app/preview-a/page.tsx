import type { Metadata } from "next";
import { Spectral } from "next/font/google";
import "./preview-a.css";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

function SwitcherBar() {
  return (
    <nav className="pa-switcher" aria-label="Design preview switcher">
      <a href="/" className="pa-switcher-link">Current</a>
      <a href="/preview-a" className="pa-switcher-link pa-switcher-active">A · Editorial</a>
      <a href="/preview-b" className="pa-switcher-link">B · Spreadsheet</a>
    </nav>
  );
}

export default function PreviewA() {
  return (
    <div className={`pa-page ${spectral.variable}`}>
      <SwitcherBar />

      {/* HERO */}
      <section className="pa-hero">
        <div className="pa-hero-inner">
          <div className="pa-hero-marker">
            <span className="pa-hero-vol">Vol. I</span>
            <span className="pa-hero-bullet">·</span>
            <span className="pa-hero-issue">The Profit Clarity Sprint</span>
          </div>
          <h1 className="pa-hero-title">
            Most founders don&rsquo;t have a growth problem.
            <span className="pa-hero-emph"> They have a clarity problem.</span>
          </h1>
          <p className="pa-hero-lead">
            We read the numbers behind your business, find what is limiting profitable
            scale, and give you a plan you can actually run. A focused 8&ndash;12 week
            sprint for eCommerce brands at $1M&ndash;$5M.
          </p>
          <div className="pa-hero-actions">
            <a href="#contact" className="pa-cta">
              Apply for the sprint
              <span className="pa-cta-arrow">→</span>
            </a>
            <span className="pa-hero-fineprint">
              Brisbane, AU &nbsp;·&nbsp; Limited intake each quarter
            </span>
          </div>
        </div>
      </section>

      {/* PULLQUOTE */}
      <section className="pa-pullquote">
        <div className="pa-pullquote-inner">
          <blockquote className="pa-quote">
            <span className="pa-quote-dim">
              Most advisors sell you a product, a framework, a course, a system
              packaged to work for everyone.
            </span>{" "}
            You are past that. Your problem is specific to <em>your</em> business.
            You need someone who goes back to first principles and models it on the
            evidence.
          </blockquote>
          <div className="pa-quote-attr">- from The Profit Clarity Sprint</div>
        </div>
      </section>

      {/* CASE STUDY FEATURE */}
      <section className="pa-case">
        <div className="pa-case-inner">
          <div className="pa-case-meta">
            <span className="pa-case-label">Case Study</span>
            <span className="pa-case-bullet">·</span>
            <span className="pa-case-num">№ 01</span>
          </div>
          <h2 className="pa-case-brand">The Brothers Green</h2>
          <p className="pa-case-hook">
            Inherited a vertically integrated declining brand. Built a multi-market,
            multi-channel machine.
          </p>

          <div className="pa-case-stats">
            <div className="pa-stat">
              <span className="pa-stat-lbl">Revenue, monthly</span>
              <span className="pa-stat-val">
                $21k <span className="pa-stat-arrow">→</span> $545k
              </span>
              <span className="pa-stat-sub">~25× growth · NZ + AU + wholesale</span>
            </div>
            <div className="pa-stat">
              <span className="pa-stat-lbl">Conversion rate</span>
              <span className="pa-stat-val">
                1.7% <span className="pa-stat-arrow">→</span> 5.3%
              </span>
              <span className="pa-stat-sub">Tripled, same product, same brand</span>
            </div>
            <div className="pa-stat">
              <span className="pa-stat-lbl">Net margin</span>
              <span className="pa-stat-val">
                Declining <span className="pa-stat-arrow">→</span> 15%
              </span>
              <span className="pa-stat-sub">From a loss to consistent profit</span>
            </div>
            <div className="pa-stat">
              <span className="pa-stat-lbl">New customers added</span>
              <span className="pa-stat-val">60,000+</span>
              <span className="pa-stat-sub">Acquired profitably under aMER 2.0</span>
            </div>
          </div>

          <p className="pa-case-closing">
            Same brand. Engineered for profit, not just growth.
          </p>
        </div>
      </section>

      <div className="pa-end-rule">
        <span className="pa-end-mark">§</span>
      </div>
    </div>
  );
}
