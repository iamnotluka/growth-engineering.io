type Props = {
  size?: number;
  className?: string;
  title?: string;
};

/**
 * Brand mark: "GE" lockup with an acid-green typographic period.
 *
 *   Rendered as inline HTML rather than SVG so the dot sits next to
 *   the letters via native font kerning — no measurement guesswork.
 *   Letters inherit `color`; the dot is fixed acid green so it pops
 *   on both light and dark surfaces.
 */
export function Logo({ size = 24, className, title }: Props) {
  return (
    <span
      className={["ge-logo", className].filter(Boolean).join(" ")}
      style={{ fontSize: `${size}px` }}
      role={title ? "img" : undefined}
      aria-label={title ?? undefined}
      aria-hidden={title ? undefined : true}
    >
      GE<i className="ge-logo-dot" aria-hidden="true" />
    </span>
  );
}
