import React from 'react'
import Sketch from 'react-p5'

/*
var spot = {
  x: 100,
  y: 50
}
var col = {
  r: 255,
  g: 0,
  b: 0
  
}
*/


function Canvas() {

  
  const setup = (p5, canvasParentRef) => {
    
    if (canvasParentRef) {
      p5.createCanvas(window.innerWidth, window.innerHeight, WEBGL).parent(canvasParentRef)
      
     p5.background(130);

    }
};

  const draw = (p5) => {
    /*
    //generate dots
    col.r = p5.random(0, p5.width);
    col.g = p5.random(0, p5.height);
    col.b = p5.random(0, 255);
    spot.x = p5.random(0, p5.width);
    spot.y = p5.random(0, p5.height);

    p5.noStroke();
    p5.fill(col.r, col.g, col.b, 100);
    p5.ellipse(spot.x, spot.y, 24 ,24);
    p5.fill(0, 0, 0, 100);*/
    /*
    //generate particles that follow the mouse
    p5.noStroke();
    p5.fill(0);
    p5.ellipse(p5.mouseX, p5.mouseY, d, d);
    d = d + 5;
    if (d > 100) {
      d = 10;
    }*/
    //generate particles that follow the mouse
    
    //map the mouse position to ellipse size
   

    //generate particles that follow the mouse

  }
  //if esc is pressed, clear the canvas
  //if mouse clicked and dragged, draw a line
  
  const keyPressed = (p5) => {
    if (p5.keyCode === p5.ESCAPE) {
      
      p5.background(217, 199, 227);
}

  }
  //if mouse clicked and dragged, draw a line
  const mouseDragged = (p5) => {
    if (p5.mouseDragged) {
    //if mouse dragged, draw a line
    p5.strokeWeight(5);
    p5.ambientLight(255);
    p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }

  };

  
  return(
  <Sketch setup={setup} draw={draw} mouseDragged={mouseDragged} keyPressed={keyPressed}/>
  );
        
}
export default Canvas;

