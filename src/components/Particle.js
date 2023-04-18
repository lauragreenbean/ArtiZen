import React from 'react';
import Particles from "react-tsparticles";

function Particle() {
  const options = {
    particles: {
      number: {
        value: 50,
      },
      size: {
        value: 3,
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  };

  return <Particles options={options} />;
}

export default Particle;