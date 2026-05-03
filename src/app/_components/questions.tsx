/**
 * Questions section — bridges Problem ("you have a clarity problem") to
 * Approach ("here's how we work"). Each question is a moment of resonance:
 * "yes, I've been asking myself exactly that."
 *
 * Designed as an editorial typographic moment: the questions ARE the visual.
 * Mixed Inter (display) + Spectral italic so the list reads with rhythm,
 * not as a uniform bullet column. Mono numerals on the left mark each item.
 */

type Question = {
  text: string;
};

const QUESTIONS: Question[] = [
  { text: "What is our real LTV?" },
  { text: "What CAC can we actually afford?" },
  { text: "Can this business scale profitably?" },
  { text: "Are our margins strong enough to grow?" },
  { text: "Will cash flow break if we push harder?" },
  { text: "What is the next biggest lever?" },
  { text: "What should we stop focusing on for now?" },
];

export function Questions() {
  return (
    <section className="questions" id="questions">
      <div className="container">
        <div className="questions-head">
          <h2 className="questions-title">
            You&rsquo;re already asking
            <span className="questions-title-emph">the right questions.</span>
          </h2>
          <p className="questions-sub">
            We help you answer them — with evidence pulled from your own
            numbers, not generic benchmarks or opinion.
          </p>
        </div>

        <ol className="questions-list">
          {QUESTIONS.map((q, i) => (
            <li key={q.text} className="questions-item">
              <span className="questions-item-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="questions-item-text">{q.text}</span>
            </li>
          ))}
        </ol>

        <p className="questions-foot">
          <span className="questions-foot-rule" aria-hidden="true" />
          <span className="questions-foot-text">
            By the end of the sprint, every one of these has a number behind it.
          </span>
        </p>
      </div>
    </section>
  );
}
