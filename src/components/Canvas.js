import React from 'react'
import Sketch from 'react-p5'

var pen1;
var pen2;

class Canvas extends React.Component {
 render() {
  const setup = (p5, canvasParentRef) => {
    if (canvasParentRef) {
     p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
    }
    p5.background(217, 199, 227);
    

   
};

  const draw = (p5) => {
    //if cp5.translate(p5.width / 2, p5.height / 2);
  
  if (p5.keyCode === p5.c) {
    pen1.color(120);
  }
};

  const mouseDragged = (p5) => {
    //p5.blendMode(p5.DIFFERENCE);
   
    p5.strokeWeight(15);
    p5.stroke(p5.random(255), p5.random(100), p5.random(255));
    pen1=p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);    
    p5.translate(50, 0);

    pen2 = p5.line(p5.mouseX, p5.mouseY, p5.mouseX, p5.mouseY);
    

    //make pen2 go in the opposite direction of pen1
    //create the same line but translate it to the left
  


   
    //pen2 = p5.ellipse(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY).color(170);
    
  
};
  const keyPressed = (p5) => {
    if (p5.keyCode === p5.ESCAPE) {
      p5.background(217, 199, 227);
    }
  if (p5.keyCode === p5.SHIFT) {
    p5.save("myArtizen.jpg");
  }
};
  

  return(
  <Sketch setup={setup} draw={draw} mouseDragged={mouseDragged} keyPressed={keyPressed} />
  );
        
}
}

export default Canvas;
