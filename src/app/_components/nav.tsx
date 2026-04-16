export function Nav() {
  return (
    <nav>
      <div className="container nav-inner">
        <a href="#top" className="wordmark">
          <span className="wordmark-mark"></span>
          Growth Engineering
        </a>
        <ul className="nav-links">
          <li><a href="#approach">Approach</a></li>
          <li><a href="#method">Method</a></li>
          <li><a href="#principles">Principles</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Strategy call</a>
      </div>
    </nav>
  );
}
