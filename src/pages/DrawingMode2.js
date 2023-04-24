import React from 'react';
import Canvas2 from '../components/Canvas2.js';
import Container from 'react-bootstrap/Container';
import VideoPlayer from '../components/VideoPlayer.js';

class DrawingMode2 extends React.Component {
  render() {

    return (

      <main>
        <body>

          <Container id="videoP"><VideoPlayer /></Container>

          <div class="canvas"><Canvas2 /><div />

          </div>
        </body>
      </main>

    );

  }


}

export default DrawingMode2;