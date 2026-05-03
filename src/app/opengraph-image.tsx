import { ImageResponse } from "next/og";

export const alt =
  "Growth Engineering — advisory for eCommerce founders. Most founders don't have a growth problem. They have a clarity problem.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          color: "#0a0908",
          padding: "80px 96px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          <span>GE</span>
          <span
            style={{
              display: "inline-block",
              width: 12,
              height: 12,
              borderRadius: 12,
              background: "#7ab342",
              marginLeft: 6,
              marginTop: 18,
            }}
          />
          <span style={{ marginLeft: 14, color: "#5b574f", fontWeight: 500 }}>
            growth-engineering.io
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#0a0908",
              maxWidth: 1000,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Most ecommerce founders don&rsquo;t have a growth problem.</span>
            <span style={{ color: "#4f7a25", marginTop: 8 }}>
              They have a clarity problem.
            </span>
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#5b574f",
              fontWeight: 400,
              maxWidth: 900,
            }}
          >
            The Profit Clarity Sprint — 12 weeks, built for ecommerce brands $1M–$5M+.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#5b574f",
            borderTop: "1px solid rgba(10, 9, 8, 0.12)",
            paddingTop: 24,
          }}
        >
          <span>Brisbane · Christchurch</span>
          <span>Assess · Diagnose · Direct</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
