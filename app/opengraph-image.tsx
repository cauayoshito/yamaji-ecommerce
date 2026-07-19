import { ImageResponse } from "next/og";

export const alt = "Ecossistema Yamaji — Uma Yamaji para cada tipo de negócio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#08090B",
          backgroundImage:
            "radial-gradient(circle at 82% 16%, rgba(94,234,212,.22), transparent 34%)",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "46px",
              height: "46px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(94,234,212,.35)",
              borderRadius: "14px",
              color: "#5EEAD4",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            Y
          </div>
          <div style={{ fontSize: "24px", fontWeight: 650 }}>Yamaji Studio</div>
          <div
            style={{
              padding: "8px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(94,234,212,.25)",
              color: "#5EEAD4",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Ecossistema
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div
            style={{
              maxWidth: "980px",
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: "-4px",
            }}
          >
            Uma Yamaji para cada tipo de negócio.
          </div>
          <div style={{ fontSize: "24px", color: "rgba(255,255,255,.55)" }}>
            Studio · Eats · Fit · Legal
          </div>
        </div>
      </div>
    ),
    size
  );
}
