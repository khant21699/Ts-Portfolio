// @ts-nocheck
import React, { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = React.memo(() => {
  const [init, setInit] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initParticles = async (engine: Engine) => {
      await loadSlim(engine);
    };

    initParticlesEngine(initParticles)
      .then(() => {
        setInit(true);
      })
      .catch((error) => {
        setError(error.message);
        console.error("Error initializing particles engine:", error);
      });
  }, []);

  const particlesLoaded = useCallback((_container: Container) => {
    // Container loaded successfully
  }, []);

  if (error) {
    return null; // Or return a fallback UI
  }

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
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 6,
                },
                grab: {
                  distance: 140,
                  links: {
                    opacity: 0.5,
                  },
                },
              },
            },
            particles: {
              color: {
                value: "#6EACDA",
              },
              links: {
                color: "#6EACDA",
                distance: 150,
                enable: false,
                opacity: 0.3,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.7,
                animation: {
                  enable: true,
                  speed: 1,
                  minimumValue: 0.4,
                },
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
});

ParticleBackground.displayName = "ParticleBackground";

export default ParticleBackground;
