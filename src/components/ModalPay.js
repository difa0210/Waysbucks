import { React, useState } from "react";

import { Button, Modal } from "react-bootstrap";

export default function ModalTransaction() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={handleShow}
        className="container bg-btn-red fw-bold fs-5 p-0"
        variant=""
      >
        Pay
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body
          style={{ color: "#BD0707" }}
          className="text-center rounded"
        >
          Thank you for ordering in us, please wait to verify you order
        </Modal.Body>
      </Modal>
    </>
  );
}
