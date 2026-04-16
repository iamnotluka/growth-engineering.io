export function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="team-header">
          <p className="eyebrow reveal">The team.</p>
          <h2 className="headline reveal">
            Who you are
            <span className="sub">working with.</span>
          </h2>
          <p className="headline-body reveal">
            Two people. An engineer with the analytical rigour to model your business honestly, and a CMO with the operating experience to know what the numbers actually mean when you are running a brand.
          </p>
        </div>

        <div className="team-cards">
          <div className="team-card reveal reveal-delay-1">
            <div className="team-avatar">L</div>
            <div className="team-name">Luka</div>
            <div className="team-role">Co-founder · Analysis &amp; systems</div>
            <div className="team-bio">Software engineer at Amazon, and consultant to eCommerce brands at $5m+ revenue on modelling, measurement, and the systems behind scale. Based in Brisbane.</div>
          </div>
          <div className="team-card reveal reveal-delay-2">
            <div className="team-avatar">J</div>
            <div className="team-name">James</div>
            <div className="team-role">Co-founder · Operations &amp; marketing</div>
            <div className="team-bio">CMO at an eCommerce brand doing $1m per month. Brings the operator&apos;s view — what actually moves in a DTC business, and what doesn&apos;t, once the theory meets the P&amp;L.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
