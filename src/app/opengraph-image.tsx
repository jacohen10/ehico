import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "EHI Co — AV Installation & Products | Norfolk, VA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #162f56 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
          }}
        >
          EHI Co
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#b5d0f0",
            marginTop: 16,
          }}
        >
          AV Installation & Products
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#7fb0e5",
            marginTop: 32,
            display: "flex",
            gap: 24,
          }}
        >
          <span>Est. 1977</span>
          <span>|</span>
          <span>Norfolk, VA</span>
          <span>|</span>
          <span>GSA Contract Holder</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
