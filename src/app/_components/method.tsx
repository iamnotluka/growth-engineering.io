import type { ReactNode } from "react";

function ArtAssess() {
  return (
    <svg viewBox="0 0 240 80">
      <rect x="0" y="20" width="40" height="50" fill="#0e1018" rx="2" />
      <rect x="48" y="40" width="40" height="30" fill="#0e1018" opacity="0.5" rx="2" />
      <rect x="96" y="10" width="40" height="60" fill="#d6ff3d" rx="2" />
      <rect x="144" y="30" width="40" height="40" fill="#0e1018" opacity="0.7" rx="2" />
      <rect x="192" y="50" width="40" height="20" fill="#0e1018" opacity="0.3" rx="2" />
      <line x1="0" y1="72" x2="240" y2="72" stroke="#0e1018" strokeWidth="1" />
    </svg>
  );
}

function ArtDiagnose() {
  return (
    <svg viewBox="0 0 240 80">
      <circle cx="60" cy="40" r="28" fill="none" stroke="#0e1018" strokeWidth="2" />
      <circle
        cx="60"
        cy="40"
        r="16"
        fill="none"
        stroke="#0e1018"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      <circle cx="60" cy="40" r="6" fill="#d6ff3d" stroke="#0e1018" strokeWidth="1.5" />
      <line x1="80" y1="60" x2="170" y2="70" stroke="#0e1018" strokeWidth="1.5" />
      <text x="178" y="58" fontSize="9" fill="#4a4d57" letterSpacing="1">
        CAUSE
      </text>
      <text x="178" y="72" fontSize="9" fill="#0e1018" fontWeight="600" letterSpacing="1">
        FOUND.
      </text>
    </svg>
  );
}

function ArtDirect() {
  return (
    <svg viewBox="0 0 240 80">
      <line x1="0" y1="40" x2="220" y2="40" stroke="#0e1018" strokeWidth="1.5" />
      <circle cx="20" cy="40" r="5" fill="#0e1018" />
      <circle cx="80" cy="40" r="5" fill="#0e1018" />
      <circle cx="140" cy="40" r="5" fill="#0e1018" />
      <circle cx="200" cy="40" r="9" fill="#d6ff3d" stroke="#0e1018" strokeWidth="2" />
      <path d="M210,35 L222,40 L210,45 Z" fill="#0e1018" />
      <text x="14" y="22" fontSize="8" fill="#4a4d57">
        WK1
      </text>
      <text x="74" y="22" fontSize="8" fill="#4a4d57">
        WK4
      </text>
      <text x="134" y="22" fontSize="8" fill="#4a4d57">
        WK8
      </text>
      <text x="186" y="22" fontSize="8" fill="#0e1018" fontWeight="600">
        GOAL
      </text>
    </svg>
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
        <span>Phase {num}</span>
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
            <p className="eyebrow">The method.</p>
            <h2 className="h-section">
              Three phases.
              <br />
              <span className="ital">One clear answer.</span>
            </h2>
          </div>
          <p className="lead">
            A measured, evidence-led path from &ldquo;something is off&rdquo; to
            a plan you can actually run. The three phases stand on their own
            and build on one another.
          </p>
        </div>

        <div className="process-rail" aria-hidden="true">
          <div className="rail-node">
            <div className="nhub">01</div>
            <div className="nlbl">Assess</div>
            <div className="ntag">Pull · Model · See</div>
          </div>
          <div className="rail-node">
            <div className="nhub">02</div>
            <div className="nlbl">Diagnose</div>
            <div className="ntag">Cause not symptom</div>
          </div>
          <div className="rail-node">
            <div className="nhub">03</div>
            <div className="nlbl">Direct</div>
            <div className="ntag">Plan · Run · Stay</div>
          </div>
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
                works today —{" "}
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
                {" "}— margins, repeat, CAC, cash, or structural issues hiding
                in the data. Cause, not symptom.
              </>
            }
            outcome="You know exactly what is limiting the business, and why — backed by evidence from your own numbers."
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
                We translate the diagnosis into specific actions —{" "}
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
