import type { ReactNode } from "react";

type Tier = {
  stage: string;
  revenue: string;
  suffix: string;
  headline: ReactNode;
  you: ReactNode;
  role: ReactNode;
  /** Highlights the middle card as the sweet-spot sale */
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    stage: "01",
    revenue: "$1",
    suffix: "M",
    headline: (
      <>
        You need the playbook to reach <em>$3–5M</em>.
      </>
    ),
    you: (
      <>
        Roughly 20% margin, around $200k profit, inventory eating your cash,
        no real team yet.
      </>
    ),
    role: (
      <>
        We help you run the playbook, or mentor your first hire to run it for
        you.
      </>
    ),
  },
  {
    stage: "02",
    revenue: "$2–4",
    suffix: "M",
    headline: (
      <>
        You know the priorities. You need the <em>time</em> and{" "}
        <em>second brain</em>.
      </>
    ),
    you: (
      <>
        Real traction, real customer base. Decisions are getting harder and
        the time to think is gone.
      </>
    ),
    role: (
      <>
        We join you to help make the calls, because we can see the whole
        picture, and you can&rsquo;t afford to get it wrong.
      </>
    ),
  },
  {
    stage: "03",
    revenue: "$5",
    suffix: "M+",
    headline: (
      <>
        You have a team. You want the numbers to <em>run it</em>.
      </>
    ),
    you: (
      <>
        Real team, real traction, real complexity. What&rsquo;s missing is
        one clean quantified view.
      </>
    ),
    role: (
      <>
        We support your team on scaling the numbers, systemising the
        operation, and running it properly.
      </>
    ),
  },
];

function ApproachCard({ revenue, suffix, headline, you, role, featured }: Tier) {
  return (
    <article className={"approach-card" + (featured ? " approach-card-featured" : "")}>
      {featured && (
        <span className="approach-card-pin" aria-label="Sweet-spot tier">
          <span className="approach-card-pin-dot" aria-hidden="true" />
          Sweet spot
        </span>
      )}

      <div className="approach-card-rev">
        <span className="approach-card-rev-num">{revenue}</span>
        <span className="approach-card-rev-suf">{suffix}</span>
      </div>

      <p className="approach-card-headline">{headline}</p>

      <div className="approach-card-rule" aria-hidden="true" />

      <dl className="approach-card-meta">
        <dd className="approach-card-meta-val">{you}</dd>
      </dl>

      <div className="approach-card-role">
        <div className="approach-card-role-lbl">Our role</div>
        <div className="approach-card-role-txt">{role}</div>
      </div>
    </article>
  );
}

export function Approach() {
  return (
    <section className="approach bg-paper-deep" id="approach">
      <div className="container">
        <div className="approach-head">
          <h2 className="approach-title">
            We partner with businesses with real revenue and real product.
          </h2>
          <p className="approach-sub">
            We work with brands across the full revenue spectrum. We know what
            each stage needs, and how to fit into yours so the work actually
            pays off.
          </p>
        </div>

        <div className="approach-cards">
          {tiers.map((t) => (
            <ApproachCard key={t.stage} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
