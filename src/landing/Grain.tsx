import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";
import { scrollProgress, scrollVelocity } from "./scrollState";

const TAU = Math.PI * 2;

type DistortHandle = { distort: number; speed: number };

export function Grain() {
  const meshRef = useRef<Mesh>(null);
  const matRef = useRef<DistortHandle | null>(null);
  const mobileRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => {
      mobileRef.current = mq.matches;
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useFrame((_, delta) => {
    const p = scrollProgress.get();
    const v = Math.min(Math.abs(scrollVelocity.get()) * 0.0009, 0.7);
    const sizeFactor = mobileRef.current ? 0.62 : 1;

    const mesh = meshRef.current;
    if (mesh) {
      mesh.rotation.y += delta * (0.18 + v * 1.4);
      mesh.rotation.x = Math.sin(p * TAU) * 0.6;
      mesh.rotation.z = Math.cos(p * TAU) * 0.25;

      const breathe = 1.55 + Math.sin(p * TAU) * 0.22;
      const burst = 1 + v * 0.22;
      mesh.scale.setScalar(breathe * burst * sizeFactor);
    }

    const mat = matRef.current;
    if (mat) {
      mat.distort = 0.34 + Math.sin(p * TAU) * 0.2 + v * 0.55;
      mat.speed = 1.2 + v * 4.5;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[1, 7]}>
      <MeshDistortMaterial
        ref={matRef as unknown as React.Ref<never>}
        color="#c9b88a"
        roughness={0.45}
        metalness={0.15}
        distort={0.36}
        speed={1.4}
      />
    </Icosahedron>
  );
}
