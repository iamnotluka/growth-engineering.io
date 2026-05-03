/**
 * Partners strip — sits between the contact form and the footer.
 *
 * NOTE: these are stylised badge approximations using brand-correct colour
 * palettes and glyphs. If/when you become officially certified by Google,
 * Meta, or TikTok, swap these for the official badge artwork from each
 * platform's partner dashboard. Until then, "Partner" implies certification —
 * you may want to retitle the section ("We work in:" or "Tooling we run on:")
 * if you don't have official partner status.
 */

type Partner = {
  name: string;
  glyph: React.ReactNode;
};

function GoogleG() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M21.6 12.227c0-.708-.063-1.39-.18-2.045H12v3.868h5.382a4.6 4.6 0 0 1-1.995 3.018v2.51h3.232c1.891-1.742 2.981-4.305 2.981-7.351z"
        fill="#4285F4"
      />
      <path
        d="M12 22c2.7 0 4.964-.895 6.619-2.422l-3.232-2.51c-.895.6-2.04.955-3.387.955-2.605 0-4.81-1.76-5.595-4.123H3.067v2.59A9.996 9.996 0 0 0 12 22z"
        fill="#34A853"
      />
      <path
        d="M6.405 13.9a6.005 6.005 0 0 1 0-3.8V7.51H3.067a10.005 10.005 0 0 0 0 8.98l3.338-2.59z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.977c1.468 0 2.786.505 3.823 1.495l2.868-2.868C16.96 2.99 14.696 2 12 2 8.103 2 4.737 4.236 3.067 7.51l3.338 2.59C7.19 7.737 9.395 5.977 12 5.977z"
        fill="#EA4335"
      />
    </svg>
  );
}

function MetaInfinity() {
  return (
    <svg width="26" height="22" viewBox="0 0 32 22" aria-hidden="true">
      <path
        d="M3 11c0-3 2-7 6-7 3.5 0 5.5 4 7 7s3.5 7 7 7c4 0 6-4 6-7"
        stroke="url(#meta-grad)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M29 11c0-3-2-7-6-7-3.5 0-5.5 4-7 7s-3.5 7-7 7c-4 0-6-4-6-7"
        stroke="url(#meta-grad-2)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <defs>
        <linearGradient id="meta-grad" x1="0" y1="0" x2="32" y2="0">
          <stop offset="0" stopColor="#0064E0" />
          <stop offset="1" stopColor="#0866FF" />
        </linearGradient>
        <linearGradient id="meta-grad-2" x1="0" y1="0" x2="32" y2="0">
          <stop offset="0" stopColor="#0866FF" />
          <stop offset="1" stopColor="#0064E0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TikTokNote() {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden="true">
      <path
        d="M14 1v12.5a3.5 3.5 0 1 1-3.5-3.5"
        stroke="#FF0050"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        transform="translate(1.4, 1.4)"
      />
      <path
        d="M14 1v12.5a3.5 3.5 0 1 1-3.5-3.5"
        stroke="#00F2EA"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        transform="translate(-1.4, -1.4)"
      />
      <path
        d="M14 1v12.5a3.5 3.5 0 1 1-3.5-3.5"
        stroke="#0a0908"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M14 1c0 2.5 2 4.5 5 4.5"
        stroke="#0a0908"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

const PARTNERS: Partner[] = [
  { name: "Google Partner", glyph: <GoogleG /> },
  { name: "Meta Business Partner", glyph: <MetaInfinity /> },
  { name: "TikTok Marketing Partner", glyph: <TikTokNote /> },
];

export function Partners() {
  return (
    <section className="partners" aria-label="Platform partners">
      <div className="container">
        <div className="partners-eye">Certified across the platforms</div>
        <ul className="partners-list">
          {PARTNERS.map((p) => (
            <li key={p.name} className="partner-badge">
              <span className="partner-glyph">{p.glyph}</span>
              <span className="partner-name">{p.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
