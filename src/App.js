import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Canvas from './components/Canvas';
//import Dropdown from './components/Dropdown';
import './index.css';
import { Container, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoContainer from './components/VideoContainer';





function App() {


  return (
    <div>

      <div id="header"><Header /></div>

      <div id="box" >
          <Container className='p-4'>
            <Dropdown>
              <Dropdown.Toggle variant=" primary" id="dropdown-basic" style={{fontStyle: "white", background: "black"}}>
                Drawing Mode
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Simple Line</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Particles</Dropdown.Item>
                <Dropdown.Item href="#/action-3">3D Shapes</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Little Guy</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </div>
      <div id="video">
      <VideoContainer/>
      </div>
      <div id="canvas">

        <Canvas />

        <div id="footer"><Footer /></div>
      </div>
    </div>

  );
}



export default App;

