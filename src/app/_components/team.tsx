export function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="team-header">
          <div className="eyebrow reveal">The team</div>
          <h2 className="headline center reveal">
            Two people.{" "}
            <span className="serif">An engineer and an operator.</span>
          </h2>
          <p className="headline-body center reveal">
            One with the analytical rigour to model your business honestly. One with the operating experience to know what the numbers mean once you&apos;re running a brand.
          </p>
        </div>

        <div className="team-cards">
          <div className="team-card reveal reveal-delay-1">
            <div className="team-quote">
              I came to this work from <span className="serif">engineering at Amazon</span> — modelling, measurement, and the systems behind scale. The numbers are honest, or they aren&apos;t worth modelling.
            </div>
            <div className="team-person">
              <div className="team-avatar">L</div>
              <div>
                <div className="team-name">Luka</div>
                <div className="team-role">Co-founder · Analysis &amp; systems</div>
              </div>
            </div>
          </div>

          <div className="team-card featured reveal reveal-delay-2">
            <div className="team-quote">
              We don&apos;t sell a framework. We model{" "}
              <span className="serif">your</span> business from first principles, find the bottleneck, and stay close while you run the plan.
            </div>
            <div className="team-person">
              <div className="team-avatar">GE</div>
              <div>
                <div className="team-name">The promise</div>
                <div className="team-role">How we work, in one line</div>
              </div>
            </div>
          </div>

          <div className="team-card reveal reveal-delay-3">
            <div className="team-quote">
              I&apos;m the operator&apos;s view — <span className="serif">CMO at a brand doing $1m a month.</span> What actually moves in DTC, and what doesn&apos;t, once theory meets the P&amp;L.
            </div>
            <div className="team-person">
              <div className="team-avatar">J</div>
              <div>
                <div className="team-name">James</div>
                <div className="team-role">Co-founder · Operations &amp; marketing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
