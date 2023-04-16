import React from 'react'
import Sketch from 'react-p5'

function Canvas() {

  const setup = (p5, canvasParentRef) => {
    const winHeight = window.innerHeight - 100; ;
    if (canvasParentRef) {
      p5.createCanvas(window.innerWidth, winHeight).parent(canvasParentRef);
    }
  
};

  const draw = p5 => {
    p5.background(255, 0, 0);

    p5.noStroke();
    p5.fill(255, 130, 20);
    p5.ellipse(p5.mouseX, p5.mouseY, 100, 100);

  }
 
  
  return( 
  <Sketch setup={setup} draw={draw} />);
        
}

export default Canvas;
