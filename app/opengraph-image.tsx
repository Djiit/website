import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "40px",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
          gap: "30px",
        }}
      >
        <div
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.15)",
            border: "4px solid white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "70px",
          }}
        >
          👨‍💻
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h1
            style={{
              fontSize: 72,
              margin: "0",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Julien Tanay
          </h1>
          <p
            style={{
              fontSize: 36,
              margin: "0",
              opacity: 0.9,
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Staff SRE & Developer
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
