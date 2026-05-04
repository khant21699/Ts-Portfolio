import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Grain } from "./Grain";

export function Scene() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
      }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.4], fov: 35 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[5, 6, 4]} intensity={0.6} color="#ffffff" />
        <Grain />
      </Suspense>
    </Canvas>
  );
}
