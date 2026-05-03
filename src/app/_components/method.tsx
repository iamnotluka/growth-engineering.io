import type { ReactNode } from "react";

function ArtAssess() {
  return (
    <div className="pa-card" aria-hidden="true">
      <div className="pa-head">
        <span>Economics snapshot</span>
        <span>v1</span>
      </div>
      <div className="pa-tiles">
        <div className="pa-tile">
          <div className="lbl">Contribution margin</div>
          <div className="v">32.4%</div>
        </div>
        <div className="pa-tile">
          <div className="lbl">Blended CAC</div>
          <div className="v">$48</div>
        </div>
        <div className="pa-tile">
          <div className="lbl">90-day LTV</div>
          <div className="v">$124</div>
        </div>
        <div className="pa-tile">
          <div className="lbl">Repeat rate</div>
          <div className="v">28%</div>
        </div>
      </div>
    </div>
  );
}

function ArtDiagnose() {
  const rows: { label: string; pct: number; lead?: boolean }[] = [
    { label: "Margin floor", pct: 88, lead: true },
    { label: "Repeat <30d", pct: 62 },
    { label: "CAC headroom", pct: 44 },
    { label: "Variable cost", pct: 28 },
  ];
  return (
    <div className="pa-card" aria-hidden="true">
      <div className="pa-head">
        <span>Constraints &middot; ranked</span>
        <span>4</span>
      </div>
      <div className="pa-bars">
        {rows.map((r, i) => (
          <div
            key={i}
            className={"pa-bar" + (r.lead ? " pa-bar-lead" : "")}
          >
            <span className="pa-bar-lbl">{r.label}</span>
            <span className="pa-bar-track">
              <i style={{ width: `${r.pct}%` }} />
            </span>
            {r.lead ? <em>Root</em> : <span className="pa-bar-pct">{r.pct}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

function ArtDirect() {
  const actions: { n: string; text: string; lead?: boolean }[] = [
    { n: "01", text: "Cap blended CAC at $32", lead: true },
    { n: "02", text: "Lift 90-day repeat to 35%" },
    { n: "03", text: "Margin floor to 38%" },
  ];
  return (
    <div className="pa-card" aria-hidden="true">
      <div className="pa-head">
        <span>Next 12 weeks</span>
        <span>3 priorities</span>
      </div>
      <ol className="pa-actions">
        {actions.map((a) => (
          <li
            key={a.n}
            className={"pa-action" + (a.lead ? " pa-action-lead" : "")}
          >
            <span className="pa-action-n">{a.n}</span>
            <span className="pa-action-txt">{a.text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

type PhaseCardProps = {
  num: string;
  stage: string;
  name: ReactNode;
  body: ReactNode;
  outcome: string;
  art: ReactNode;
};

function PhaseCard({ num, stage, name, body, outcome, art }: PhaseCardProps) {
  return (
    <div className="phase-card">
      <div className="pc-num">
        <span className="pc-num-n">{num}</span>
        <span className="pc-num-lbl">Phase</span>
        <span className="stage">{stage}</span>
      </div>
      <div className="pc-art">{art}</div>
      <div className="pc-name">{name}</div>
      <div className="pc-body">{body}</div>
      <div className="pc-out">
        <div className="pc-out-lbl">Outcome</div>
        <div className="pc-out-txt">{outcome}</div>
      </div>
    </div>
  );
}

export function Method() {
  return (
    <section className="method" id="method">
      <div className="container">
        <div className="method-head">
          <div>
            <h2 className="h-section on-dark">
              Three phases.
              <br />
              <span className="ital">One clear answer.</span>
            </h2>
          </div>
          <p className="lead on-dark">
            A measured, evidence-led path from &ldquo;something is off&rdquo; to
            a plan you can actually run. The three phases stand on their own
            and build on one another.
          </p>
        </div>

        <div className="phases-grid">
          <PhaseCard
            num="01"
            stage="Assess"
            art={<ArtAssess />}
            name={
              <>
                Assess<span className="ital"> the truth.</span>
              </>
            }
            body={
              <>
                We pull the data and build a true picture of how the business
                works today &mdash;{" "}
                <strong>
                  revenue structure, variable and fixed costs, contribution
                  margin, AOV, repeat behaviour, LTV, CAC, and cash.
                </strong>{" "}
                Everything in one place, properly modelled.
              </>
            }
            outcome="A clear view of your business economics, delivered as proper spreadsheet reporting you can open any day."
          />
          <PhaseCard
            num="02"
            stage="Diagnose"
            art={<ArtDiagnose />}
            name={
              <>
                Diagnose<span className="ital"> the cause.</span>
              </>
            }
            body={
              <>
                We analyse what the Assess phase revealed and{" "}
                <strong>
                  find what is actually holding back profitable growth
                </strong>
                {" "}&mdash; margins, repeat, CAC, cash, or structural issues
                hiding in the data. Cause, not symptom.
              </>
            }
            outcome="You know exactly what is limiting the business, and why - backed by evidence from your own numbers."
          />
          <PhaseCard
            num="03"
            stage="Direct"
            art={<ArtDirect />}
            name={
              <>
                Direct<span className="ital"> the work.</span>
              </>
            }
            body={
              <>
                We translate the diagnosis into specific actions &mdash;{" "}
                <strong>
                  which levers to pull, what success looks like in the numbers,
                  and what it will take to execute.
                </strong>{" "}
                Then we stay with you through the work.
              </>
            }
            outcome="Clarity, priorities, and someone on your side while you run the plan."
          />
        </div>
      </div>
    </section>
  );
}
