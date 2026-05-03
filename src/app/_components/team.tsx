import Image from "next/image";

type TeamCardProps = {
  photo: string;
  name: string;
  role: string;
  bio: string;
  flag: string;
  city: string;
  linkedin: string;
  site: string;
  siteLabel: string;
};

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

function SiteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="13"
      height="13"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18" />
      <path d="M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

function TeamCard({
  photo,
  name,
  role,
  bio,
  flag,
  city,
  linkedin,
  site,
  siteLabel,
}: TeamCardProps) {
  return (
    <div className="team-card">
      <div className="team-photo">
        <Image src={photo} alt={name} width={120} height={120} priority />
      </div>
      <div className="team-body">
        <div className="team-name">{name}</div>
        <div className="team-role">{role}</div>
        <p className="team-bio">{bio}</p>
        <div className="team-foot">
          <span className="team-loc">
            <span className="team-flag" aria-hidden="true">
              {flag}
            </span>
            {city}
          </span>
          <div className="team-links">
            <a
              className="team-link"
              href={site}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name}'s personal site`}
            >
              <SiteIcon />
              <span>{siteLabel}</span>
            </a>
            <span className="team-links-sep" aria-hidden="true">
              ·
            </span>
            <a
              className="team-link"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${name} on LinkedIn`}
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
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
              <span className="ital">working with.</span>
            </h2>
          </div>
          <p className="lead">
            An engineer with the analytical rigour to model your business
            honestly, and a CMO with the operating experience to know what the
            numbers actually mean when you are running a brand.
          </p>
        </div>
        <div className="team-cards">
          <TeamCard
            photo="/luka.png"
            name="Luka"
            role="Analysis & systems"
            bio="Software engineer at Amazon, and consultant to eCommerce brands at $5m+ revenue on modelling, measurement, and the systems behind scale. Based in Brisbane."
            flag="🇦🇺"
            city="Brisbane, AU"
            linkedin="https://www.linkedin.com/in/luka-zoric/"
            site="https://www.zoricl.io/"
            siteLabel="zoricl.io"
          />
          <TeamCard
            photo="/james.jpeg"
            name="James"
            role="Operations & Marketing"
            bio="CMO at an eCommerce brand doing $1m per month. Brings the operator's view, what actually moves in a DTC business, and what doesn't, once the theory meets the P&L."
            flag="🇳🇿"
            city="Christchurch, NZ"
            linkedin="https://www.linkedin.com/in/jamesforsythnz/"
            site="https://www.jamesroux.co/"
            siteLabel="jamesroux.co"
          />
        </div>
      </div>
    </section>
  );
}
