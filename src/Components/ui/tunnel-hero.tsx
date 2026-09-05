import * as THREE from "three";
import { useRef, useEffect, useState, useCallback } from "react";
import { scrollRaw, scrollVelocity } from "../../landing/scrollState";

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = () => setIsMobile(mq.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [breakpoint]);

  return isMobile;
}

const vertexShader = `void main(){ gl_Position = vec4(position, 1.0); }`;

const buildFragment = (layers: number) => `
precision mediump float;
uniform float iTime;
uniform vec3 iResolution;
uniform float uLineWidth;
uniform float uTint;

#define TAU 6.2831853071795865
#define TUNNEL_LAYERS ${layers}

float sq(float x){ return x*x; }

vec2 TunnelPath(float x){
  vec2 offs = vec2(
    0.2 * sin(TAU * x * 0.5) + 0.4 * sin(TAU * x * 0.2 + 0.3),
    0.3 * cos(TAU * x * 0.3) + 0.2 * cos(TAU * x * 0.1)
  );
  offs *= smoothstep(1.0, 4.0, x);
  return offs;
}

void main(){
  vec2 res = iResolution.xy / iResolution.y;
  vec2 uv = gl_FragCoord.xy / iResolution.y - res / 2.0;
  vec3 color = vec3(0.0);
  float lineWidth = uLineWidth / iResolution.y;
  float camZ = iTime;
  vec2 camOffs = TunnelPath(camZ);

  vec3 colA = vec3(0.13, 0.83, 0.94);  // neon cyan
  vec3 colB = vec3(0.93, 0.27, 0.60);  // neon magenta

  for(int i = 1; i <= TUNNEL_LAYERS; i++){
    float pz = 1.0 - (float(i) / float(TUNNEL_LAYERS));
    pz -= mod(camZ, 4.0 / float(TUNNEL_LAYERS));
    vec2 offs = TunnelPath(camZ + pz) - camOffs;
    float ringRad = 0.30 * (1.0 / sq(pz * 0.8 + 0.4));

    float dist = abs(length(uv + offs) - ringRad);
    if (dist > lineWidth * 5.0) continue;

    float core = smoothstep(lineWidth, 0.0, dist);
    float glow = smoothstep(lineWidth * 5.0, 0.0, dist) * 0.32;
    float intensity = max(core, glow);
    vec3 ptColor = (mod(float(i / 2), 2.0) == 0.0) ? colA : colB;
    float shade = 1.0 - pz;
    color = max(color, ptColor * shade * uTint * intensity);
  }

  gl_FragColor = vec4(color, 1.0);
}
`;

type ThreeContext = {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.OrthographicCamera;
  material: THREE.ShaderMaterial;
  mesh: THREE.Mesh;
  geometry: THREE.PlaneGeometry;
};

function createThreeForCanvas(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  layers: number,
  pxRatio: number
): ThreeContext {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(pxRatio);
  renderer.setSize(width, height, false);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const material = new THREE.ShaderMaterial({
    uniforms: {
      iTime: { value: 6.0 },
      iResolution: { value: new THREE.Vector3(width * pxRatio, height * pxRatio, 1) },
      uLineWidth: { value: 2.4 },
      uTint: { value: 1.0 },
    },
    vertexShader,
    fragmentShader: buildFragment(layers),
  });

  const geometry = new THREE.PlaneGeometry(2, 2);
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  return { renderer, scene, camera, material, mesh, geometry };
}

function disposeThree(ctx: ThreeContext) {
  try {
    ctx.scene.remove(ctx.mesh);
    ctx.mesh.geometry.dispose();
    ctx.material.dispose();
    ctx.renderer.dispose();
  } catch {
    /* ignore */
  }
}

export default function TunnelBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<ThreeContext | null>(null);
  const animRef = useRef<number | null>(null);
  const pausedRef = useRef<boolean>(false);
  const lastTimeRef = useRef<number>(0);
  const rafResizeRef = useRef<boolean>(false);
  const isMobile = useIsMobile();

  const layers = isMobile ? 22 : 40;
  const pxRatio = isMobile ? 0.5 : 0.6;

  const lastRawRef = useRef<number>(0);

  const animate = useCallback((now: number) => {
    animRef.current = requestAnimationFrame(animate);
    const ctx = ctxRef.current;
    if (!ctx || pausedRef.current) {
      lastTimeRef.current = now;
      lastRawRef.current = scrollRaw.get();
      return;
    }

    const dt = Math.min((now - (lastTimeRef.current || now)) / 1000, 0.1);
    lastTimeRef.current = now;

    // Scroll-driven delta with wrap suppression: if scrollRaw jumps more
    // than 1.5 viewports (Lenis seamless-loop wrap), skip the delta this frame.
    const raw = scrollRaw.get();
    let delta = raw - lastRawRef.current;
    const wrapThreshold = window.innerHeight * 1.5;
    if (Math.abs(delta) > wrapThreshold) delta = 0;
    lastRawRef.current = raw;

    const v = Math.min(Math.abs(scrollVelocity.get()) * 0.0006, 2.0);
    // iTime = small idle drift + scroll-position delta. Scrolling drives
    // the tunnel forward/backward 1:1 with the user's gesture.
    ctx.material.uniforms.iTime.value += dt * 0.07 + delta * 0.0007;
    ctx.material.uniforms.uLineWidth.value = 2.4 + v * 1.4;
    ctx.material.uniforms.uTint.value = 1.0 + v * 0.45;

    ctx.renderer.render(ctx.scene, ctx.camera);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === "undefined") return;

    const container = canvas.parentElement;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const ctx = createThreeForCanvas(canvas, width, height, layers, pxRatio);
    ctxRef.current = ctx;

    const onResize = () => {
      if (!ctxRef.current || rafResizeRef.current) return;
      rafResizeRef.current = true;
      requestAnimationFrame(() => {
        rafResizeRef.current = false;
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        ctxRef.current!.renderer.setPixelRatio(pxRatio);
        ctxRef.current!.renderer.setSize(w, h, false);
        (ctxRef.current!.material.uniforms.iResolution.value as THREE.Vector3).set(
          w * pxRatio,
          h * pxRatio,
          1
        );
      });
    };

    const ro = new ResizeObserver(onResize);
    ro.observe(container);
    window.addEventListener("resize", onResize);

    const onVisibility = () => {
      pausedRef.current = !!document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);
    onVisibility();

    lastTimeRef.current = performance.now();
    animRef.current = requestAnimationFrame(animate);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (ctxRef.current) {
        disposeThree(ctxRef.current);
        ctxRef.current = null;
      }
    };
  }, [animate, layers, pxRatio]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="block w-full h-full"
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
