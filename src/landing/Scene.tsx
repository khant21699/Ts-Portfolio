import TunnelBackground from "../Components/ui/tunnel-hero";

export function Scene() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
      }}
    >
      <TunnelBackground />
      {/* Very subtle inky wash so editorial body text stays readable.
          No center vignette — we want the tunnel rings to wrap the page. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10,10,14,0.28)",
        }}
      />
    </div>
  );
}
