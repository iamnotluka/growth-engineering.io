export function Principles() {
  return (
    <section className="principles" id="principles">
      <div className="principles-bg" aria-hidden>
        <svg viewBox="0 0 1100 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="prinFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0066e1" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#0066e1" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,210 C 100,180 200,120 320,140 C 440,160 540,250 660,230 C 780,210 880,140 1000,160 L 1100,180 L 1100,320 L 0,320 Z"
            fill="url(#prinFill)"
          />
          <path
            d="M0,210 C 100,180 200,120 320,140 C 440,160 540,250 660,230 C 780,210 880,140 1000,160 L 1100,180"
            fill="none"
            stroke="#0066e1"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="container principles-inner">
        <div className="principles-header">
          <div>
            <div className="eyebrow reveal">Principles</div>
            <h2 className="headline reveal">
              Clear thinking.{" "}
              <span className="serif">Compound growth.</span>
            </h2>
          </div>
          <p className="principles-header-aside reveal">
            What we believe about the work — the rules we hold to, no matter the engagement.
          </p>
        </div>

        <div className="principles-grid">
          <div className="principle reveal reveal-delay-1">
            <div className="principle-num">01</div>
            <div>
              <div className="principle-title">Evidence over opinion.</div>
              <div className="principle-body">
                Every recommendation is tied to a number in your business. If we cannot show you the maths behind a call, we do not make the call.
              </div>
            </div>
          </div>
          <div className="principle reveal reveal-delay-2">
            <div className="principle-num">02</div>
            <div>
              <div className="principle-title">First principles, not playbooks.</div>
              <div className="principle-body">
                We do not map your business onto a template. We model it from the ground up, because no two brands have the same bottleneck in the same place.
              </div>
            </div>
          </div>
          <div className="principle reveal reveal-delay-1">
            <div className="principle-num">03</div>
            <div>
              <div className="principle-title">Clarity, direction, confidence.</div>
              <div className="principle-body">
                Founders do not need more information. You need clarity, direction, and a second thought on the hard calls — so you can move quickly instead of second-guessing.
              </div>
            </div>
          </div>
          <div className="principle reveal reveal-delay-2">
            <div className="principle-num">04</div>
            <div>
              <div className="principle-title">You keep the work.</div>
              <div className="principle-body">
                Every model, spreadsheet, and playbook we build is yours, during the engagement and long after. No black boxes, no proprietary software.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
