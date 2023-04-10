import React, { useState, useEffect, useRef } from 'react';
import p5 from 'p5';
import { Modal, Button } from 'bootstrap/dist/js/bootstrap.js';

function PopUp() {
  const canvasRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(400, 400);
      };

      p.draw = () => {
        p.background(0);
        p.fill(255);
        p.ellipse(p.width / 2, p.height / 2, 50, 50);
      };
    };

    new p5(sketch, canvasRef.current);
  }, []);

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Open Modal
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div ref={canvasRef}></div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopUp;
