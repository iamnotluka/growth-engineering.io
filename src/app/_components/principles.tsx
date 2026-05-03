import type { ReactNode } from "react";

type Principle = {
  num: string;
  code: string;
  title: ReactNode;
  body: string;
};

const items: Principle[] = [
  {
    num: "01",
    code: "Evidence",
    title: (
      <>
        Evidence<span className="ital"> over opinion.</span>
      </>
    ),
    body: "Every recommendation is tied to a number in your business. If we cannot show you the maths behind a call, we do not make the call.",
  },
  {
    num: "02",
    code: "Principles",
    title: (
      <>
        First principles,<span className="ital"> not playbooks.</span>
      </>
    ),
    body: "We do not map your business onto a template. We model it from the ground up, because no two brands have the same bottleneck in the same place.",
  },
  {
    num: "03",
    code: "Clarity",
    title: (
      <>
        Clarity,<span className="ital"> direction, confidence.</span>
      </>
    ),
    body: "Founders do not need more information. You need clarity, direction, and a second thought on the hard calls — so you can move quickly instead of second-guessing.",
  },
  {
    num: "04",
    code: "Ownership",
    title: (
      <>
        You keep<span className="ital"> the work.</span>
      </>
    ),
    body: "Every model, spreadsheet, and playbook we build is yours, during the engagement and long after. No black boxes, no proprietary software.",
  },
];

export function Principles() {
  return (
    <section className="principles" id="principles">
      <div className="container">
        <div className="principles-head">
          <h2 className="h-section">
            What we believe
            <span className="ital">about the work.</span>
          </h2>
        </div>
        <div className="principles-grid">
          {items.map((p) => (
            <div className="principle" key={p.num}>
              <div className="p-mark" aria-hidden="true" />
              <div className="p-stamp">
                <span className="p-stamp-code">{p.code}</span>
                <span className="p-stamp-sep">&middot;</span>
                <span className="p-stamp-num">{p.num}</span>
              </div>
              <h3 className="p-title">{p.title}</h3>
              <p className="p-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
