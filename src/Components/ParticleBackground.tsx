// @ts-nocheck
import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Ensure the "@tsparticles/slim" package is installed

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async (engine: Engine) => {
      await loadSlim(engine);
    };

    initParticlesEngine(initParticles)
      .then(() => {
        setInit(true);
      })
      .catch((error) => {
        console.error("Error initializing particles engine:", error);
      });
  }, []);

  const particlesLoaded = useCallback((container: Container) => {
    console.log(container);
  }, []);

  return (
    <>
      {init && (
        <Particles
          className=" !w-full !h-full block z-10"
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#021526",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#6EACDA",
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 4.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 100,
                },
                value: 150,
              },
              opacity: {
                value: 1,
              },
              shape: {
                type: "square",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default ParticleBackground;
