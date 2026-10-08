import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || "BlueCrest - Modern Journalism & Insights";
    const category = searchParams.get("category") || "Editorial Analysis";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#061126",
            backgroundImage: "radial-gradient(circle at 25px 25px, #0f2554 2%, transparent 0%), radial-gradient(circle at 75px 75px, #0B3D91 2%, transparent 0%)",
            backgroundSize: "100px 100px",
            padding: "60px 80px",
            color: "#ffffff",
            fontFamily: "sans-serif",
          }}
        >
          {/* Top Brand Bar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  backgroundColor: "#1E90FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#ffffff",
                }}
              >
                BC
              </div>
              <span style={{ fontSize: "32px", fontWeight: "800", letterSpacing: "-0.5px" }}>
                Blue<span style={{ color: "#1E90FF" }}>Crest</span>
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "rgba(30, 144, 255, 0.15)",
                border: "1px solid rgba(30, 144, 255, 0.4)",
                padding: "8px 20px",
                borderRadius: "9999px",
                fontSize: "16px",
                fontWeight: "600",
                color: "#38bdf8",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              {category}
            </div>
          </div>

          {/* Main Title */}
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "950px" }}>
            <h1
              style={{
                fontSize: title.length > 70 ? "46px" : "56px",
                fontWeight: "800",
                lineHeight: "1.2",
                color: "#ffffff",
                margin: "0",
              }}
            >
              {title}
            </h1>
          </div>

          {/* Bottom Footer Info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1px solid rgba(255, 255, 255, 0.15)",
              paddingTop: "24px",
              fontSize: "18px",
              color: "#94a3b8",
            }}
          >
            <span>bluecreast.in &bull; Verified Analysis & Journalism</span>
            <span style={{ color: "#1E90FF", fontWeight: "600" }}>Read Full Article &rarr;</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: unknown) {
    return new Response(`Failed to generate the image: ${e instanceof Error ? e.message : String(e)}`, {
      status: 500,
    });
  }
}
