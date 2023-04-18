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
var d = 10;

function Canvas() {

  const setup = (p5, canvasParentRef) => {
    
    if (canvasParentRef) {
      p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef)
      
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
   //use p5.map to change the size of the ellipse based on the mouse position
  
  p5.noStroke();
  p5.fill(0);
  p5.ellipse(p5.mouseX, p5.mouseY, p5.map(p5.mouseX, 0, p5.width, 0, 100), p5.map(p5.mouseY, 0, p5.height, 0, 100));

  }
  //if esc is pressed, clear the canvas

  const keyPressed = (p5) => {
    if (p5.keyCode === p5.ESCAPE) {
      p5.clear();
      p5.background(130);
  }
  //if c is pressed, change the background color
  if (p5.keyCode === 67) {
    p5.background(p5.random(0, 255), p5.random(0, 255), p5.random(0, 255));

}

  }
  const mousePressed = (p5) => {
    if (mousePressed) {
     //and dragged, draw a line
      p5.stroke(0);
      

  };
  };
  
  return(
  <Sketch setup={setup} draw={draw} mousePressed={mousePressed} keyPressed={keyPressed}/>
  );
        
}
export default Canvas;

