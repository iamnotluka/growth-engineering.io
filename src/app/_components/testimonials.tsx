type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "[Placeholder] In one sprint they showed us where margin was actually leaking - things we had been arguing about for a year. The plan that came out of it changed how we ran the next quarter.",
    name: "[Founder Name]",
    role: "Founder & CEO",
    company: "[Company]",
  },
  {
    quote:
      "[Placeholder] We thought we had a traffic problem. Turns out we had a contribution-margin problem. The diagnosis was uncomfortable and exactly what we needed.",
    name: "[Founder Name]",
    role: "Co-founder",
    company: "[Company]",
  },
  {
    quote:
      "[Placeholder] Honest, evidence-led, and zero fluff. They worked through our P&L line by line and gave us the cleanest picture of the business we have ever had.",
    name: "[Founder Name]",
    role: "Founder",
    company: "[Company]",
  },
];

function TestimonialCard({ quote, name, role, company }: Testimonial) {
  return (
    <figure className="testimonial-card" data-placeholder="true">
      <blockquote className="testimonial-quote">{quote}</blockquote>
      <figcaption className="testimonial-attr">
        <span className="testimonial-name">{name}</span>
        <span className="testimonial-meta">
          {role} · {company}
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="testimonials bg-paper-deep" id="testimonials">
      <div className="container">
        <div className="testimonials-head">
          <h2 className="h-section">
            What founders say
            <br />
            <span className="ital">about the work.</span>
          </h2>
          <p className="lead">
            Operators-turned-advisors, working alongside founders to turn
            messy numbers into a clear plan. The results above. The words
            below.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
