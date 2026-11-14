import { ImageResponse } from "next/og";
export const ogSize = { width: 1200, height: 630 };
export function renderOg() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#070707", color: "#f2f2ee", padding: 72, fontFamily: "sans-serif", position: "relative" }}>
        <div style={{ position: "absolute", right: -120, top: -160, width: 560, height: 560, borderRadius: 560, background: "rgba(212,255,79,0.22)", filter: "blur(80px)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, color: "rgba(255,255,255,.7)" }}>
          <div style={{ width: 16, height: 16, borderRadius: 16, background: "#d4ff4f" }} /> Web and app agency
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 168, fontWeight: 800, letterSpacing: -6, lineHeight: 1 }}>
            <span>Locks</span><span style={{ color: "#d4ff4f" }}>Codes</span>
          </div>
          <div style={{ fontSize: 44, marginTop: 24, color: "rgba(255,255,255,.7)" }}>We ship websites and apps.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "rgba(255,255,255,.55)" }}>
          <span>Founded by Samuel Ntekim</span><span>lockscodes.xyz</span>
        </div>
      </div>
    ),
    ogSize
  );
}
