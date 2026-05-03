import { Logo } from "./logo";

const navLinks = [
  { id: "approach", label: "Approach" },
  { id: "method", label: "Method" },
  { id: "principles", label: "Principles" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Apply" },
];

const YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a
            href="#top"
            className="footer-brand"
            aria-label="growth-engineering.io home"
          >
            <Logo size={26} title="growth-engineering.io" />
          </a>
          <a href="#top" className="footer-totop">
            <span>Back to top</span>
            <span aria-hidden="true" className="footer-totop-arrow">
              ↑
            </span>
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <div className="footer-eye">Site</div>
            <ul>
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-eye">Contact</div>
            <ul>
              <li>
                <a href="mailto:hello@growth-engineering.io">
                  hello@growth-engineering.io
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/luka-zoric/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Luka on LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jamesforsythnz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  James on LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="footer-eye">Based in</div>
            <ul>
              <li>
                <span className="footer-flag" aria-hidden="true">
                  🇦🇺
                </span>
                Brisbane, AU
              </li>
              <li>
                <span className="footer-flag" aria-hidden="true">
                  🇳🇿
                </span>
                Christchurch, NZ
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; {YEAR} growth-engineering.io</div>
          <div className="footer-tag">Evidence over opinion.</div>
        </div>
      </div>
    </footer>
  );
}
