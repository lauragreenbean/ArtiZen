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

var repelCirc;
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
    //create a circle that repels the mouse when it gets close
    p5.noStroke();
    p5.fill(0);
    p5.ellipse(p5.mouseX, p5.mouseY, d, d);
    d = d + 5;

    if (d > 100) {
      d = 10;
    }
    if (p5.mouseX > p5.width/2) {
      repelCirc = p5.ellipse(p5.mouseX-50, p5.mouseY-50, d, d);    }
    else {
      p5.fill(0, 255, 200);
    }
    p5.ellipse(p5.width/2, p5.height/2, 100, 100);
    p5.fill(0);




  }
  //if esc is pressed, clear the canvas

  const keyPressed = (p5) => {
    if (p5.keyCode === p5.ESCAPE) {
      p5.clear();
      p5.background(130);
    
  }
}
  const mousePressed = (p5) => {
    if (mousePressed) {
      p5.fill(0);
      p5.ellipse(p5.mouseX, p5.mouseY, 10, 10);
      d = d + 5;

  };
  };
  
  return(
  <Sketch setup={setup} draw={draw} mousePressed={mousePressed} keyPressed={keyPressed}/>
  );
        
}
export default Canvas;

