// @ts-nocheck
import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = React.memo(() => {
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
          className="!w-full !h-full block z-10"
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
                  distance: 150, // Use "distance" instead of "radius"
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#6EACDA",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
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
                  area: 600,
                },
                value: 300,
              },
              opacity: {
                value: 0.75,
              },
              shape: {
                type: "triangle",
              },
              size: {
                value: { min: 2, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
});

export default ParticleBackground;
