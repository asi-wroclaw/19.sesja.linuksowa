import type { Container, ISourceOptions } from '@tsparticles/engine';
import { loadLinksPreset } from '@tsparticles/preset-links';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useState } from 'react';

const particlesOptions: ISourceOptions = {
  interactivity: {
    detect_on: 'canvas',
    events: {
      resize: {
        enable: true,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      enable: true,
      distance: 150,
      opacity: 0.4,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: 'out',
      speed: 0.5,
      random: false,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 200,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: 1,
    },
  },
  preset: 'links',
  retina_detect: true,
};

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadLinksPreset(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
    // FOUC mitigation is a problem when we want to show particles
    // we need to change the body again
    // all for the sake of not using z-index everywhere
    document.body.style.backgroundColor = 'transparent';
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={particlesOptions}
      />
    );
  }

  return null;
};

export default ParticlesBackground;
