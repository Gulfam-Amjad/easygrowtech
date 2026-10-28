import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function ogImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050b1a",
          color: "white",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#34d399",
              color: "#050b1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            E
          </div>
          <div style={{ fontSize: 30, fontWeight: 700 }}>EasyGrowTech</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.08, letterSpacing: -1, maxWidth: 980 }}>{title}</div>
          <div style={{ marginTop: 22, fontSize: 28, color: "#94a3b8", maxWidth: 900 }}>{subtitle}</div>
        </div>
        <div style={{ fontSize: 22, color: "#34d399" }}>Free demo first — no payment, no commitment</div>
      </div>
    ),
    { ...ogSize },
  );
}
