export function SiteFooter() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="wordmark">
              <span className="wordmark-mark"></span>
              <span className="wordmark-name">
                <span>Growth Engineering</span>
              </span>
            </a>
       
          </div>

          <div>
            <div className="footer-col-title">The work</div>
            <ul className="footer-col-list">
              <li><a href="#approach">Approach</a></li>
              <li><a href="#method">Method</a></li>
              <li><a href="#principles">Principles</a></li>
              <li><a href="#team">Team</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Contact</div>
            <ul className="footer-col-list">
              <li><a href="mailto:hello@growth-engineering.io">hello@growth-engineering.io</a></li>
              <li><a href="#contact">Strategy call</a></li>
              <li><a href="#contact">Brisbane, QLD</a></li>
              <li><a href="#contact">Brands Australia-wide</a></li>
            </ul>
          </div>

          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-col-list">
              <li><a href="#approach">Who we work with</a></li>
              <li><a href="#method">How we work</a></li>
              <li><a href="#principles">What we believe</a></li>
              <li><a href="#contact">Begin</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <a href="mailto:hello@growth-engineering.io" aria-label="Email">@</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">x</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Growth Engineering · Brisbane, QLD</div>
          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
