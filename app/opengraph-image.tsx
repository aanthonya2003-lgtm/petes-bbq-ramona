import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Pete's BBQ — Slow-Smoked Barbecue in Ramona, California";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(80% 60% at 50% 100%, rgba(232,118,44,0.45) 0%, transparent 60%), radial-gradient(50% 40% at 30% 90%, rgba(242,168,78,0.28) 0%, transparent 70%), #0E0B08",
          color: "#F5EDE4",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 18, letterSpacing: 6, color: "#F2A84E", textTransform: "uppercase", fontFamily: "system-ui" }}>
            Pete&rsquo;s · Ramona · Est. 2015
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 124, lineHeight: 1, fontWeight: 900, letterSpacing: -2 }}>
            Smoke. <span style={{ fontStyle: "italic", color: "#F2A84E" }}>Fire.</span>
          </div>
          <div style={{ fontSize: 124, lineHeight: 1, fontWeight: 900, letterSpacing: -2 }}>
            Perfection.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "system-ui" }}>
          <div style={{ fontSize: 22, color: "#C8B09A" }}>
            977 Main St · Ramona, CA · Open 7 Days
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 12, height: 12, borderRadius: 999, background: "#E8762C" }} />
            <span style={{ fontSize: 22, color: "#F5EDE4", fontWeight: 600 }}>petessd.com</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
