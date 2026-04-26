export function Nav() {
  return (
    <nav>
      <div className="container nav-inner">
        <a href="#top" className="wordmark">
          <span className="wordmark-mark"></span>
          <span className="wordmark-name">
            <span>growth-engineering.io</span>
          </span>
        </a>
        <ul className="nav-links">
          <li><a href="#approach">Approach</a></li>
          <li><a href="#method">Method</a></li>
          <li><a href="#principles">Principles</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
        <div className="nav-cta-wrap">
          <a href="#contact" className="nav-cta">Apply now</a>
        </div>
      </div>
    </nav>
  );
}
