type TeamCardProps = {
  initial: string;
  name: string;
  role: string;
  bio: string;
  dark?: boolean;
};

function TeamCard({ initial, name, role, bio, dark }: TeamCardProps) {
  return (
    <div className={"team-card" + (dark ? " dark" : "")}>
      <div className="team-avatar">{initial}</div>
      <div>
        <div className="team-name">{name}</div>
        <div className="team-role">{role}</div>
        <div className="team-bio">{bio}</div>
      </div>
    </div>
  );
}

export function Team() {
  return (
    <section className="team bg-paper-deep" id="team">
      <div className="container">
        <div className="team-head">
          <div>
            <h2 className="h-section">
              Who you are
              <br />
              <span className="ital">working with.</span>
            </h2>
          </div>
          <p className="lead">
            Two people. An engineer with the analytical rigour to model your
            business honestly, and a CMO with the operating experience to know
            what the numbers actually mean when you are running a brand.
          </p>
        </div>
        <div className="team-cards">
          <TeamCard
            initial="L"
            name="Luka"
            role="Co-founder · Analysis & systems"
            bio="Software engineer at Amazon, and consultant to eCommerce brands at $5m+ revenue on modelling, measurement, and the systems behind scale. Based in Brisbane."
          />
          <TeamCard
            initial="J"
            name="James"
            role="Co-founder · Operations & marketing"
            dark
            bio="CMO at an eCommerce brand doing $1m per month. Brings the operator's view - what actually moves in a DTC business, and what doesn't, once the theory meets the P&L."
          />
        </div>
      </div>
    </section>
  );
}
