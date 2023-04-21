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
     p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
     
     p5.background(130);

    }
};

  const draw = (p5) => {
    

  }
  //if esc is pressed, clear the canvas
  //if mouse clicked and dragged, draw a line
  
  const keyPressed = (p5) => {
   
    if (p5.keyCode === p5.ESCAPE) {
      
      p5.background(217, 199, 227);

}
  if (p5.keyCode === p5.ENTER) {
    p5.background(217, 199, 227);
    
  }
};
  //if mouse clicked and dragged, draw a line
  const mouseDragged = (p5) => {
    if (p5.mouseDragged) {
    //if mouse dragged, draw a line
   
    p5.strokeWeight(5);
    p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }

    

  };
  
  
  return(
  <Sketch setup={setup} draw={draw} mouseDragged={mouseDragged} keyPressed={keyPressed}/>
  );
        
}

export default Canvas;
