/**
 * Hero artwork — abstract visualization of the offer's central thesis:
 * "most founders are staring at a constellation of metrics with no idea which one matters."
 *
 * Composition: a field of scattered hairline marks (the noise) with three connected
 * highlighted points (the pattern you'd see if you read the numbers properly).
 * One point is rendered in the brand acid green — the bottleneck.
 *
 * Hand-placed coordinates rather than randomized, so the composition is deliberate.
 */

const NOISE_DOTS: Array<[number, number, number, number]> = [
  // [x, y, radius, opacity*100]
  [42, 58, 1.2, 22],
  [108, 38, 1.5, 28],
  [184, 84, 1.0, 18],
  [252, 52, 1.3, 24],
  [322, 92, 1.1, 20],
  [368, 46, 0.9, 16],
  [70, 122, 1.4, 26],
  [148, 156, 1.1, 20],
  [296, 138, 1.3, 24],
  [354, 174, 1.0, 18],
  [38, 220, 1.2, 22],
  [124, 248, 1.4, 26],
  [276, 232, 1.1, 20],
  [336, 268, 1.3, 24],
  [78, 326, 1.0, 18],
  [142, 360, 1.2, 22],
  [262, 348, 1.4, 26],
  [330, 388, 1.0, 18],
  [54, 416, 1.3, 24],
  [114, 452, 1.1, 20],
  [232, 444, 1.0, 18],
  [304, 480, 1.2, 22],
  [368, 432, 1.4, 26],
  [188, 200, 0.9, 14],
  [60, 280, 0.9, 14],
  [212, 116, 0.9, 14],
  [344, 332, 0.9, 14],
  [176, 408, 0.9, 14],
];

// Cross marks (small + signs) — different mark type for visual variety
const NOISE_CROSSES: Array<[number, number]> = [
  [200, 180],
  [86, 376],
  [304, 60],
  [248, 296],
];

// Short hairlines — vertical strokes scattered like ledger lines
const NOISE_LINES: Array<[number, number, number]> = [
  // [x, y, height]
  [256, 168, 14],
  [102, 192, 10],
  [358, 240, 12],
  [196, 320, 16],
  [70, 360, 8],
];

// The three "pattern" points — these are what an operator finds when they read the numbers.
// Positioned in a slight z-curve through the canvas. The middle one is the bottleneck.
const PATTERN = {
  p1: { x: 152, y: 174, r: 3.0 },
  p2: { x: 224, y: 282, r: 3.6 },
  p3: { x: 168, y: 392, r: 3.0 },
};

export function HeroArtwork() {
  return (
    <svg
      viewBox="0 0 400 520"
      role="img"
      aria-label="A constellation of scattered metrics with three connected points highlighted as the pattern that matters"
      className="hero-artwork-svg"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Subtle dotted-grid background — graph-paper feel on light bg */}
      <defs>
        <pattern
          id="hero-art-grid"
          x="0"
          y="0"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="0.5" cy="0.5" r="0.5" fill="rgba(10, 9, 8, 0.10)" />
        </pattern>
      </defs>
      <rect width="400" height="520" fill="url(#hero-art-grid)" />

      {/* Noise layer 1: scattered dots in dark ink */}
      {NOISE_DOTS.map(([x, y, r, op], i) => (
        <circle
          key={`d${i}`}
          cx={x}
          cy={y}
          r={r}
          fill={`rgba(10, 9, 8, ${(op + 8) / 100})`}
        />
      ))}

      {/* Noise layer 2: small + crosses */}
      {NOISE_CROSSES.map(([x, y], i) => (
        <g key={`c${i}`} stroke="rgba(10, 9, 8, 0.28)" strokeWidth="0.7">
          <line x1={x - 3} y1={y} x2={x + 3} y2={y} />
          <line x1={x} y1={y - 3} x2={x} y2={y + 3} />
        </g>
      ))}

      {/* Noise layer 3: vertical hairlines */}
      {NOISE_LINES.map(([x, y, h], i) => (
        <line
          key={`l${i}`}
          x1={x}
          y1={y}
          x2={x}
          y2={y + h}
          stroke="rgba(10, 9, 8, 0.30)"
          strokeWidth="0.7"
        />
      ))}

      {/* Connecting lines between the three pattern points — dashed, faint */}
      <line
        x1={PATTERN.p1.x}
        y1={PATTERN.p1.y}
        x2={PATTERN.p2.x}
        y2={PATTERN.p2.y}
        stroke="rgba(10, 9, 8, 0.45)"
        strokeWidth="0.7"
        strokeDasharray="2 3"
      />
      <line
        x1={PATTERN.p2.x}
        y1={PATTERN.p2.y}
        x2={PATTERN.p3.x}
        y2={PATTERN.p3.y}
        stroke="rgba(10, 9, 8, 0.45)"
        strokeWidth="0.7"
        strokeDasharray="2 3"
      />

      {/* Pattern halo around the bottleneck point */}
      <circle
        cx={PATTERN.p2.x}
        cy={PATTERN.p2.y}
        r={11}
        fill="none"
        stroke="rgba(122, 179, 66, 0.55)"
        strokeWidth="0.9"
      />
      <circle
        cx={PATTERN.p2.x}
        cy={PATTERN.p2.y}
        r={18}
        fill="none"
        stroke="rgba(122, 179, 66, 0.25)"
        strokeWidth="0.7"
      />

      {/* Pattern points — solid ink, with green accent on bottleneck */}
      <circle cx={PATTERN.p1.x} cy={PATTERN.p1.y} r={PATTERN.p1.r} fill="#0a0908" />
      <circle cx={PATTERN.p2.x} cy={PATTERN.p2.y} r={PATTERN.p2.r} fill="#5a8c2a" />
      <circle cx={PATTERN.p3.x} cy={PATTERN.p3.y} r={PATTERN.p3.r} fill="#0a0908" />

      {/* Mono caption near the bottleneck */}
      <g transform={`translate(${PATTERN.p2.x + 14}, ${PATTERN.p2.y + 4})`}>
        <line x1="0" y1="-4" x2="0" y2="-12" stroke="rgba(122, 179, 66, 0.6)" strokeWidth="0.7" />
        <text
          x="0"
          y="0"
          fontFamily="var(--font-plex-mono), ui-monospace, monospace"
          fontSize="9"
          fill="#5a8c2a"
          letterSpacing="1.2"
          fontWeight="500"
        >
          THE BOTTLENECK
        </text>
      </g>

      {/* Top-left annotation */}
      <text
        x="0"
        y="14"
        fontFamily="var(--font-plex-mono), ui-monospace, monospace"
        fontSize="9"
        fill="rgba(10, 9, 8, 0.50)"
        letterSpacing="1.4"
        fontWeight="500"
      >
        FIG. 01 — METRICS IN ISOLATION
      </text>

      {/* Bottom-right annotation */}
      <text
        x="400"
        y="510"
        textAnchor="end"
        fontFamily="var(--font-plex-mono), ui-monospace, monospace"
        fontSize="9"
        fill="rgba(10, 9, 8, 0.50)"
        letterSpacing="1.4"
        fontWeight="500"
      >
        ONE PATTERN VISIBLE
      </text>
    </svg>
  );
}
