import type { ReactNode } from "react";

type Tier = {
  revenue: string;
  suffix: string;
  tag: string;
  line: string;
  body: ReactNode;
  feature?: boolean;
};

const tiers: Tier[] = [
  {
    revenue: "$1",
    suffix: "M",
    tag: "Tier 01",
    line: "You need the playbook to reach $3–5M.",
    body: (
      <>
        Roughly 20% margin, around $200k profit, inventory eating your cash, no
        real team. <strong>We help you run the playbook</strong> — or mentor
        your first hire to run it.
      </>
    ),
  },
  {
    revenue: "$2–4",
    suffix: "M",
    tag: "Tier 02 · Most common",
    line: "You know the priorities. You need the time and second brain.",
    body: (
      <>
        You know roughly what to prioritise — you just don&rsquo;t have the
        time, and the decisions are getting harder.{" "}
        <strong>We join you to help make those decisions</strong>, because we
        can see the whole picture.
      </>
    ),
    feature: true,
  },
  {
    revenue: "$5",
    suffix: "M+",
    tag: "Tier 03",
    line: "You have a team. You want the numbers to run it.",
    body: (
      <>
        You have a team, traction, and real complexity. What&rsquo;s missing is
        a clean quantified view. <strong>We support your team</strong> on
        scaling the numbers, systemising the operation, and running it
        properly.
      </>
    ),
  },
];

function ApproachCard({ revenue, suffix, tag, line, body, feature }: Tier) {
  return (
    <div className={"approach-card" + (feature ? " feature" : "")}>
      <div className="ac-rev">
        {revenue}
        <span className="suf">{suffix}</span>
      </div>
      <div className="ac-tag">{tag}</div>
      <div className="ac-line">{line}</div>
      <div className="ac-body">{body}</div>
    </div>
  );
}

export function Approach() {
  return (
    <section className="approach bg-paper-deep" id="approach">
      <div className="container">
        <div className="approach-head">
          <p className="eyebrow">Who we work with.</p>
          <h2 className="h-section">
            Real revenue. Real product.
            <br />
            <span className="ital">Unclear numbers.</span>
          </h2>
        </div>
        <div className="approach-cards">
          {tiers.map((t, i) => (
            <ApproachCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
