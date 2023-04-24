import React from 'react'
import Sketch from 'react-p5'


class Canvas2 extends React.Component {
  render() {
    const setup = (p5, canvasParentRef) => {
      if (canvasParentRef) {
        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
      }
      p5.background(217, 199, 227);
    }

    const draw = (p5) => {
    };

    const mouseDragged = (p5) => {
      p5.stroke(94, 176, 64);
      //change stroke color randomly
      p5.stroke(p5.random(255), p5.random(255), p5.random(255));
      p5.noFill();

      p5.ellipse(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
      p5.translate(50, 0);
      //second ellipse
      p5.ellipse(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);



    };


    const keyPressed = (p5) => {

      if (p5.keyCode === p5.ESCAPE) {
        p5.background(217, 199, 227);
      }
      if (p5.keyCode === p5.SHIFT) {
        p5.save("myArtizen.jpg");
      }
    };


    return (
      <Sketch setup={setup} draw={draw} mouseDragged={mouseDragged} keyPressed={keyPressed} />
    );

  }
}

export default Canvas2;
