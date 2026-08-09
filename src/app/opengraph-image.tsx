import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Seyed-Parsa Firouzabadi | Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1220 0%, #0f1a2e 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontSize: 24,
            color: "#4f8dfd",
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#4f8dfd" }} />
          Currently: AI Solutions Developer @ Aecon Group
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, marginTop: 28, lineHeight: 1.1, color: "#e5eaf2" }}>
          Seyed-Parsa Firouzabadi
        </div>
        <div style={{ display: "flex", fontSize: 32, marginTop: 20, color: "#92a1b8", maxWidth: 920 }}>
          Electrical Engineering student building AI agents and automation systems.
        </div>
      </div>
    ),
    size,
  );
}
