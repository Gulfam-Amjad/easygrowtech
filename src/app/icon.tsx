import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "#10b981",
          color: "#050b1a",
          fontSize: 20,
          fontWeight: 800,
        }}
      >
        E
      </div>
    ),
    { ...size },
  );
}
