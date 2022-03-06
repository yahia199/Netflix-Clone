import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

function mytrendModal({ trend, show, handleClose }) {
  console.log(trend);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> {trend.title} </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Modal body text goes here.</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default mytrendModal;
