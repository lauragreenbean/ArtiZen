import React from 'react';
import p5 from 'p5';

class P5Sketch extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.sketch = new p5((p) => {
      p.setup = () => {
        p.createCanvas(400, 400);
        // initialize your p5 sketch here
      };

      p.draw = () => {
        // update your p5 sketch here
      };
    }, this.myRef.current);
  }

  componentWillUnmount() {
    this.sketch.remove();
  }

  render() {
    return <div ref={this.myRef}></div>;
  }
}

export default P5Sketch;