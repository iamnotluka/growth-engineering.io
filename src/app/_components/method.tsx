import type { ReactNode } from "react";

const ART_FG = "rgba(255, 255, 255, 0.55)";
const ART_DIM = "rgba(255, 255, 255, 0.18)";
const ART_FAINT = "rgba(255, 255, 255, 0.10)";
const ART_ACCENT = "#95bf47";
const ART_LABEL = "#8a8f98";
const ART_LABEL_HI = "#f7f8f8";

function ArtAssess() {
  return (
    <svg viewBox="0 0 240 80">
      <rect x="0" y="20" width="40" height="50" fill={ART_DIM} rx="2" />
      <rect x="48" y="40" width="40" height="30" fill={ART_FAINT} rx="2" />
      <rect x="96" y="10" width="40" height="60" fill={ART_ACCENT} rx="2" />
      <rect x="144" y="30" width="40" height="40" fill="rgba(255,255,255,0.22)" rx="2" />
      <rect x="192" y="50" width="40" height="20" fill={ART_FAINT} rx="2" />
      <line x1="0" y1="72" x2="240" y2="72" stroke={ART_DIM} strokeWidth="1" />
    </svg>
  );
}

function ArtDiagnose() {
  return (
    <svg viewBox="0 0 240 80">
      <circle cx="60" cy="40" r="28" fill="none" stroke={ART_FG} strokeWidth="1.5" />
      <circle
        cx="60"
        cy="40"
        r="16"
        fill="none"
        stroke={ART_DIM}
        strokeWidth="1"
        strokeDasharray="2 3"
      />
      <circle cx="60" cy="40" r="6" fill={ART_ACCENT} stroke="#101113" strokeWidth="1.5" />
      <line x1="82" y1="58" x2="170" y2="70" stroke={ART_DIM} strokeWidth="1" />
      <text x="178" y="58" fontSize="9" fill={ART_LABEL} letterSpacing="1">
        CAUSE
      </text>
      <text x="178" y="72" fontSize="9" fill={ART_LABEL_HI} fontWeight="600" letterSpacing="1">
        FOUND.
      </text>
    </svg>
  );
}

function ArtDirect() {
  return (
    <svg viewBox="0 0 240 80">
      <line x1="0" y1="40" x2="220" y2="40" stroke={ART_FG} strokeWidth="1.5" />
      <circle cx="20" cy="40" r="5" fill={ART_FG} />
      <circle cx="80" cy="40" r="5" fill={ART_FG} />
      <circle cx="140" cy="40" r="5" fill={ART_FG} />
      <circle cx="200" cy="40" r="9" fill={ART_ACCENT} stroke="#101113" strokeWidth="2" />
      <path d="M210,35 L222,40 L210,45 Z" fill={ART_FG} />
      <text x="14" y="22" fontSize="8" fill={ART_LABEL}>
        WK1
      </text>
      <text x="74" y="22" fontSize="8" fill={ART_LABEL}>
        WK4
      </text>
      <text x="134" y="22" fontSize="8" fill={ART_LABEL}>
        WK8
      </text>
      <text x="186" y="22" fontSize="8" fill={ART_LABEL_HI} fontWeight="600">
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
                works today -{" "}
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
                {" "}- margins, repeat, CAC, cash, or structural issues hiding
                in the data. Cause, not symptom.
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
                We translate the diagnosis into specific actions -{" "}
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
