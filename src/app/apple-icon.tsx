import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050b1a",
          color: "#34d399",
          fontSize: 96,
          fontWeight: 800,
        }}
      >
        E
      </div>
    ),
    { ...size },
  );
}
