import { Logo } from "./logo";

const links = [
  { id: "approach", label: "Approach" },
  { id: "method", label: "Method" },
  { id: "principles", label: "Principles" },
  { id: "team", label: "Team" },
];

export function Nav() {
  return (
    <nav className="site-nav">
      <div className="container nav-inner">
        <a href="#top" className="wordmark">
          <Logo size={22} className="wordmark-logo" />
          growth-engineering.io
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`}>{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">
          Apply now
        </a>
      </div>
    </nav>
  );
}
