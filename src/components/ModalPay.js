import { useContext } from "react";

import { Modal } from "react-bootstrap";
import { ModalContext } from "../Context/modalContext";
export default function ModalTransaction() {
  const [, , , isOpen, toggle] = useContext(ModalContext);
  return (
    <>
      <Modal show={isOpen} onHide={() => toggle("Pay")} centered>
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
