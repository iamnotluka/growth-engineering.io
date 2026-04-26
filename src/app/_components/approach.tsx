"use client";

import { useState, type ReactNode } from "react";

type Tier = {
  num: string;
  heading:string;
  label: string;
  body: ReactNode;
  visual: ReactNode;
};

function PlaybookVisual() {
  return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="220" fill="#14141a" />
      <line x1="0" y1="25" x2="320" y2="25" stroke="rgba(255,255,255,0.06)" />
      <line x1="0" y1="105" x2="320" y2="105" stroke="rgba(255,255,255,0.06)" />
      <line x1="0" y1="185" x2="320" y2="185" stroke="rgba(255,255,255,0.06)" />

      <path
        d="M40,185 L100,185 L100,105 L190,105 L190,25 L280,25"
        fill="none"
        stroke="#9ec1aa"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="40" y1="185" x2="40" y2="200" stroke="rgba(182,210,187,0.35)" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="190" y1="105" x2="190" y2="200" stroke="rgba(182,210,187,0.35)" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="280" y1="25" x2="280" y2="200" stroke="rgba(182,210,187,0.35)" strokeWidth="1" strokeDasharray="2 3" />

      <circle cx="40" cy="185" r="3.5" fill="#b6d2bb" />
      <circle cx="190" cy="105" r="3.5" fill="#b6d2bb" />
      <circle cx="280" cy="25" r="4.5" fill="#b6d2bb" />

      <text x="32" y="212" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(182,210,187,0.7)" letterSpacing="1">$1M</text>
      <text x="178" y="212" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(182,210,187,0.7)" letterSpacing="1">$3M</text>
      <text x="266" y="212" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(182,210,187,0.7)" letterSpacing="1">$5M</text>
    </svg>
  );
}

function DecisionsVisual() {
  return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="220" fill="#14141a" />

      <circle cx="135" cy="80" r="48" fill="rgba(182,210,187,0.05)" stroke="rgba(158,193,170,0.55)" strokeWidth="1.5" />
      <circle cx="200" cy="80" r="48" fill="rgba(182,210,187,0.05)" stroke="rgba(158,193,170,0.55)" strokeWidth="1.5" />
      <circle cx="167" cy="135" r="48" fill="rgba(182,210,187,0.05)" stroke="rgba(158,193,170,0.55)" strokeWidth="1.5" />

      <line x1="115" y1="103" x2="219" y2="103" stroke="rgba(182,210,187,0.28)" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="167" y1="62" x2="167" y2="144" stroke="rgba(182,210,187,0.28)" strokeWidth="1" strokeDasharray="2 3" />

      <circle cx="167" cy="103" r="4.5" fill="#b6d2bb" />

      <text x="78" y="55" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(182,210,187,0.7)" letterSpacing="1">MARGIN</text>
      <text x="220" y="55" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(182,210,187,0.7)" letterSpacing="1">CASH</text>
      <text x="142" y="200" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(182,210,187,0.7)" letterSpacing="1">CHANNEL</text>
    </svg>
  );
}

function QuantifiedVisual() {
  return (
    <svg viewBox="0 0 320 220" preserveAspectRatio="xMidYMid slice">
      <rect width="320" height="220" fill="#14141a" />

      <rect x="20" y="20" width="88" height="84" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <path d="M32,84 L52,62 L72,72 L96,46" fill="none" stroke="#9ec1aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="96" cy="46" r="2.5" fill="#b6d2bb" />

      <rect x="116" y="20" width="88" height="84" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <rect x="128" y="68" width="8" height="22" fill="rgba(182,210,187,0.4)" />
      <rect x="142" y="58" width="8" height="32" fill="rgba(182,210,187,0.55)" />
      <rect x="156" y="48" width="8" height="42" fill="rgba(182,210,187,0.7)" />
      <rect x="170" y="40" width="8" height="50" fill="rgba(182,210,187,0.85)" />
      <rect x="184" y="52" width="8" height="38" fill="rgba(182,210,187,0.65)" />

      <rect x="212" y="20" width="88" height="84" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <text x="256" y="72" fontFamily="ui-monospace, monospace" fontSize="26" fontWeight="500" fill="#b6d2bb" textAnchor="middle">+18%</text>

      <rect x="20" y="116" width="88" height="84" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <text x="64" y="168" fontFamily="ui-monospace, monospace" fontSize="22" fontWeight="500" fill="#b6d2bb" textAnchor="middle">$5.4M</text>

      <rect x="116" y="116" width="88" height="84" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <path d="M126,180 L138,168 L150,174 L162,156 L174,164 L186,144 L196,150" fill="none" stroke="#9ec1aa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="196" cy="150" r="2.5" fill="#b6d2bb" />

      <rect x="212" y="116" width="88" height="84" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" />
      <circle cx="256" cy="158" r="22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3.5" />
      <circle
        cx="256"
        cy="158"
        r="22"
        fill="none"
        stroke="#b6d2bb"
        strokeWidth="3.5"
        strokeDasharray="103.7 138.2"
        strokeLinecap="round"
        transform="rotate(-90 256 158)"
      />
    </svg>
  );
}

const tiers: Tier[] = [
  {
    label: "Brands at ~$1M",
    num: "01",
    heading: "You need the playbook to get to the next step.",
    body: (
      <>
        You are running lean and profitable, maybe a couple of contractors, almost ready for your first full time hire.{" "}
        <strong>We help you run the playbook, or mentor your first hire to run it.</strong>  We come in close to the work, model the unit economics, and stay with you while the plan executes.
      </>
    ),
    visual: <PlaybookVisual />,
  },
  {
    label: "Brands at $2-4M",
    num: "02",
    heading: "You know the priorities. You need the time and second brain to support you.",
    body: (
      <>
  You know roughly what to prioritise, you just don&apos;t have the time, and the decisions are getting harder. <strong>We join you to make those tough calls</strong>, because we&apos;ve done it before and we can see the whole picture across margin, cash, and channel.
</>
    ),
    visual: <DecisionsVisual />,
  },
  {
    label: "Brands at $5M+",
    heading: "You have a team. You want the numbers to run it.",
    num: "03",
    body: (
      <>
        You&apos;ve got a team, traction, and real complexity. What&apos;s missing is a clean, quantified view you can trust. <strong>We work with you and your team</strong> to set realistic targets, scale the numbers, systemise the operation, and run those systems properly.
      </>
    ),
    visual: <QuantifiedVisual />,
  },
];

export function Approach() {
  const [expandedIdx, setExpandedIdx] = useState<number>(0);

  return (
    <section className="services" id="approach">
      <div className="container">
        <div className="services-header">
          <h2 className="headline center reveal">
            Three stages of brand,{" "}
            <span className="serif">three ways we plug in.</span>
          </h2>
          <p className="headline-body center reveal">
            We&apos;ve worked with businesses at every scale, so we know how to meet you where you are.
          </p>
        </div>

        <div className="services-stack">
          {tiers.map((tier, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <div key={tier.num} className={`reveal reveal-delay-${idx + 1}`}>
                <div className={`service-row${isExpanded ? " is-expanded" : ""}`}>
                  <button
                    type="button"
                    className="service-row-header"
                    onClick={() => setExpandedIdx(isExpanded ? -1 : idx)}
                    aria-expanded={isExpanded}
                  >
                    <span className="service-row-header-text">
                      <span className="service-row-label">{tier.label}</span>
                      <span className="service-row-heading">{tier.heading}</span>
                    </span>
                    <span className="service-row-num">
                      <span className="service-row-chevron" aria-hidden>
                        {isExpanded ? "-" : "+"}
                      </span>
                    </span>
                  </button>
                  <div className="service-row-collapse">
                    <div className="service-row-collapse-inner">
                      <div className="service-row-content">
                        <div className="service-row-text">
                          <p className="service-row-body">{tier.body}</p>
                          <a href="#contact" className="btn">
                            Start a conversation
                          </a>
                        </div>
                        <div className="service-row-visual" aria-hidden>
                          {tier.visual}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
