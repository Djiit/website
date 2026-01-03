import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 628,
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
        }}
      >
        <p
          style={{
            fontSize: 28,
            margin: "0 0 20px 0",
            opacity: 0.8,
            textAlign: "center",
          }}
        >
          Blog Article
        </p>
        <h1
          style={{
            fontSize: 56,
            margin: "0",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Julien Tanay
        </h1>
      </div>
    ),
    {
      ...size,
    }
  );
}
