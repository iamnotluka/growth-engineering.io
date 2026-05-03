/**
 * Hero artwork — a stylized "operator-annotated P&L" card with floating
 * tool-stack stickers tucked behind it.
 * Concept: most rows show only the structure (hairline placeholder for values).
 * One row is flagged: the bottleneck the offer promises to find.
 * That row carries the only concrete number on the artwork — and its gap.
 * Around the card sit small "app icon" stickers representing the operator's
 * tool stack — recognisable brand glyphs at simplified fidelity.
 */

import type { ReactNode } from "react";
import Image from "next/image";
import {
  SiShopify,
  SiStripe,
  SiGooglesheets,
  SiMeta,
  SiClaude,
} from "react-icons/si";

type Row = {
  label: string;
  flagged?: boolean;
  value?: string;
  note?: string;
};

type ToolIcon = {
  name: string;
  /** sticker background colour */
  bg: string;
  /** the brand glyph rendered inside the sticker */
  Icon: () => ReactNode;
  /** absolute placement around the card */
  pos: { top?: string; bottom?: string; left?: string; right?: string };
  /** optional rotation in degrees */
  rotate?: number;
  /** size in px */
  size?: number;
};

const ROWS: Row[] = [
  { label: "Revenue" },
  { label: "− Variable costs" },
  { label: "= Contribution margin" },
  { label: "− Fixed costs" },
  {
    label: "= Net margin",
    flagged: true,
    value: "7%",
    note: "TARGET 18%  ·  −11pp",
  },
  { label: "→ Cash position" },
];

/* ----- Brand glyphs (simplified SVG approximations) ----- */

/* Brand glyphs — real logos via Simple Icons (react-icons/si).
   Each is rendered at its real proportions; colour is set per-icon to
   contrast with the sticker background. */

const ShopifyGlyph = () => <SiShopify size={22} color="#fff" />;
const StripeGlyph = () => <SiStripe size={26} color="#fff" />;
const SheetsGlyph = () => <SiGooglesheets size={22} color="#fff" />;
const MetaGlyph = () => <SiMeta size={22} color="#fff" />;
const ClaudeGlyph = () => <SiClaude size={22} color="#fff" />;

/* Google's official 4-colour G — single-colour SiGoogle reads as flat. */
function GoogleGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M21.6 12.227c0-.708-.063-1.39-.18-2.045H12v3.868h5.382a4.6 4.6 0 0 1-1.995 3.018v2.51h3.232c1.891-1.742 2.981-4.305 2.981-7.351z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.964-.895 6.619-2.422l-3.232-2.51c-.895.6-2.04.955-3.387.955-2.605 0-4.81-1.76-5.595-4.123H3.067v2.59A9.996 9.996 0 0 0 12 22z"
      />
      <path
        fill="#FBBC05"
        d="M6.405 13.9a6.005 6.005 0 0 1 0-3.8V7.51H3.067a10.005 10.005 0 0 0 0 8.98l3.338-2.59z"
      />
      <path
        fill="#EA4335"
        d="M12 5.977c1.468 0 2.786.505 3.823 1.495l2.868-2.868C16.96 2.99 14.696 2 12 2 8.103 2 4.737 4.236 3.067 7.51l3.338 2.59C7.19 7.737 9.395 5.977 12 5.977z"
      />
    </svg>
  );
}

/* Klaviyo isn't in Simple Icons — using their PNG asset from /public. */
function KlaviyoGlyph() {
  return (
    <Image
      src="/klaviyo-logo.png"
      alt=""
      width={40}
      height={40}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}

function OkendoGlyph() {
  return (
    <Image
      src="/okendo-logo.png"
      alt=""
      width={40}
      height={40}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}

const TOOLS: ToolIcon[] = [
  {
    name: "Google Sheets",
    bg: "#0F9D58",
    Icon: SheetsGlyph,
    pos: { top: "-22px", left: "-30px" },
    rotate: -8,
    size: 44,
  },
  {
    name: "Shopify",
    bg: "#95BF47",
    Icon: ShopifyGlyph,
    pos: { top: "16px", right: "-36px" },
    rotate: 6,
    size: 46,
  },
  {
    name: "Klaviyo",
    bg: "#fff",
    Icon: KlaviyoGlyph,
    pos: { top: "180px", right: "-48px" },
    rotate: -5,
    size: 42,
  },
  {
    name: "Claude",
    bg: "#DA7756",
    Icon: ClaudeGlyph,
    pos: { top: "260px", left: "-40px" },
    rotate: 10,
    size: 44,
  },
  {
    name: "Google",
    bg: "#fff",
    Icon: GoogleGlyph,
    pos: { top: "-30px", right: "60px" },
    rotate: -4,
    size: 40,
  },
  {
    name: "Meta",
    bg: "#0866FF",
    Icon: MetaGlyph,
    pos: { bottom: "60px", left: "-32px" },
    rotate: -7,
    size: 40,
  },
  {
    name: "Stripe",
    bg: "#635BFF",
    Icon: StripeGlyph,
    pos: { bottom: "-30px", left: "180px" },
    rotate: 5,
    size: 44,
  },
  {
    name: "Okendo",
    bg: "#fff",
    Icon: OkendoGlyph,
    pos: { bottom: "-20px", right: "40px" },
    rotate: 8,
    size: 40,
  },
];

function Dash() {
  return <span className="hero-art-dash" aria-hidden="true" />;
}

/**
 * Mobile-only — same sticker glyphs, laid out as a single horizontal row
 * above the headline. The full annotated card is hidden on phones; this
 * preserves the tool-stack signal without taking the vertical space.
 */
export function HeroToolsRow() {
  return (
    <div className="hero-tools-row" aria-hidden="true">
      {TOOLS.map((t, i) => {
        const Icon = t.Icon;
        // Sinusoidal wave across the row so icons ripple uniformly L→R.
        const phase = (i / (TOOLS.length - 1)) * Math.PI * 2;
        const ty = Math.sin(phase) * 7;
        const rot = Math.cos(phase) * 7;
        // Size — monotonic L→R falloff with smoothstep easing so the
        // shrink isn't a straight linear ramp.
        const p = i / (TOOLS.length - 1);
        const ease = p * p * (3 - 2 * p);
        const size = 46 - (46 - 28) * ease;
        const glyph = Math.round(size * 0.5);
        return (
          <div
            key={t.name}
            className="hero-tools-row-item"
            style={{
              background: t.bg,
              width: `${size}px`,
              height: `${size}px`,
              transform: `translateY(${ty}px) rotate(${rot}deg)`,
              ["--glyph" as string]: `${glyph}px`,
            }}
            title={t.name}
          >
            <Icon />
          </div>
        );
      })}
    </div>
  );
}

export function HeroArtwork() {
  return (
    <div
      className="hero-art"
      role="figure"
      aria-label="A stylized P&L showing the bottleneck found by the sprint"
    >
      {/* Floating tool-stack stickers — sit behind the card. Decorative. */}
      <div className="hero-art-tools" aria-hidden="true">
        {TOOLS.map((t) => {
          const Icon = t.Icon;
          return (
            <div
              key={t.name}
              className="hero-art-tool"
              style={{
                ...t.pos,
                width: `${t.size ?? 44}px`,
                height: `${t.size ?? 44}px`,
                background: t.bg,
                transform: `rotate(${t.rotate ?? 0}deg)`,
              }}
              title={t.name}
            >
              <Icon />
            </div>
          );
        })}
      </div>

      <div className="hero-art-card">
        <header className="hero-art-head">
          <span className="hero-art-head-title">Unit Economics</span>
          <span className="hero-art-head-meta">Sample</span>
        </header>

        <div className="hero-art-rule" aria-hidden="true" />

        <dl className="hero-art-rows">
          {ROWS.map((r) => (
            <div
              key={r.label}
              className={"hero-art-row" + (r.flagged ? " hero-art-row-flagged" : "")}
            >
              <dt className="hero-art-row-lbl">{r.label}</dt>
              <dd className="hero-art-row-right">
                {r.value ? (
                  <span className="hero-art-row-val">{r.value}</span>
                ) : (
                  <Dash />
                )}
                {r.note && <span className="hero-art-row-note">{r.note}</span>}
              </dd>
            </div>
          ))}
        </dl>

        <div className="hero-art-rule" aria-hidden="true" />

        <footer className="hero-art-foot">
          <span className="hero-art-foot-dot" aria-hidden="true" />
          <span className="hero-art-foot-text">Found · Margin bleed</span>
        </footer>
      </div>
    </div>
  );
}
