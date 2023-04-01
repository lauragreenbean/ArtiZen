import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

const Triangle = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    new p5((p) => {
      p.setup = () => {
        p.createCanvas(1000, 1000).parent(canvasRef.current);
      };

      p.draw = () => {
        p.background(220);
        p.triangle(100, 100, 300, 100, 200, 300);
      };
    });
  }, []);

  return <div ref={canvasRef} />;
};

export default Triangle;
