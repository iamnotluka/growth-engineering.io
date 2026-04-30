const items = [
  {
    num: "01",
    title: "Evidence over opinion.",
    body: "Every recommendation is tied to a number in your business. If we cannot show you the maths behind a call, we do not make the call.",
  },
  {
    num: "02",
    title: "First principles, not playbooks.",
    body: "We do not map your business onto a template. We model it from the ground up, because no two brands have the same bottleneck in the same place.",
  },
  {
    num: "03",
    title: "Clarity, direction, confidence.",
    body: "Founders do not need more information. You need clarity, direction, and a second thought on the hard calls — so you can move quickly instead of second-guessing.",
  },
  {
    num: "04",
    title: "You keep the work.",
    body: "Every model, spreadsheet, and playbook we build is yours, during the engagement and long after. No black boxes, no proprietary software.",
  },
];

export function Principles() {
  return (
    <section className="principles" id="principles">
      <div className="container">
        <div className="principles-head">
          <p className="eyebrow">Principles.</p>
          <h2 className="h-section">
            What we believe
            <br />
            <span className="ital">about the work.</span>
          </h2>
        </div>
        <div className="principles-grid">
          {items.map((p, i) => (
            <div className="principle" key={i}>
              <div className="p-num">{p.num}</div>
              <div>
                <div className="p-title">{p.title}</div>
                <div className="p-body">{p.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
