import { ImageResponse } from "next/og";
import { getBlogPosts } from "app/blog/utils";

export const runtime = "nodejs";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateImageMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

  return [
    {
      id: "default",
      contentType: "image/png",
      size: { width: 1200, height: 630 },
      alt: post?.metadata.title || "Blog Post",
    },
  ];
}

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            fontSize: 36,
          }}
        >
          Article not found
        </div>
      ),
      { ...size }
    );
  }

  const title = post.metadata.title;
  const truncatedTitle = title.length > 60 ? title.substring(0, 57) + "..." : title;

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
          padding: "60px 40px",
          color: "white",
          fontFamily: "system-ui, -apple-system, sans-serif",
          gap: "30px",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.15)",
            border: "3px solid white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "50px",
          }}
        >
          👨‍💻
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <h1
            style={{
              fontSize: 56,
              margin: "0",
              fontWeight: "bold",
              textAlign: "center",
              lineHeight: "1.2",
            }}
          >
            {truncatedTitle}
          </h1>
          <p
            style={{
              fontSize: 24,
              margin: "0",
              opacity: 0.9,
              textAlign: "center",
            }}
          >
            Julien Tanay
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
