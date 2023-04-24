import React from 'react';
import Canvas from '../components/Canvas.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import VideoPlayer from '../components/VideoPlayer.js';
import { Container } from 'react-bootstrap';
class DrawingMode1 extends React.Component {

  render() {

    return (
      <main>

        <body>
          <Container id="videoP"><VideoPlayer /></Container>
          <div class="canvas"><Canvas /><div />

          </div>
        </body>

      </main>

    );

  }
}

export default DrawingMode1;