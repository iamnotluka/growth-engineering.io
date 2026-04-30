type Props = {
  size?: number;
  className?: string;
};

export function Logo({ size = 22, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ge-logo-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#95bf47" />
          <stop offset="1" stopColor="#7ab342" />
        </linearGradient>
      </defs>
      <rect width="500" height="500" rx="110" ry="110" fill="url(#ge-logo-grad)" />
      <text
        x="250"
        y="250"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif"
        fontWeight="800"
        fontSize="240"
        letterSpacing="-12"
        fill="#ffffff"
      >
        GE
      </text>
    </svg>
  );
}
