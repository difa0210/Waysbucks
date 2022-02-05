import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function ModalRegister(props) {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      <Button
        onClick={props.toggle}
        className="bg-btn-red mx-3 px-4 fw-bold"
        variant=""
      >
        Register
      </Button>
      <Modal show={props.isOpen} onHide={props.toggle} centered>
        <Modal.Body>
          <Form
            className=" p-5"
            style={{
              color: "#BD0707",
            }}
          >
            <Form.Label className="fs-2 fw-bold mb-5">Register</Form.Label>
            <Form.Group
              className="mb-4"
              controlId="formBasicEmail"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group
              className="mb-4"
              controlId="formBasicPassword"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              className="mb-5"
              controlId="formBasicText"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control type="text" placeholder="Full Name" />
            </Form.Group>
            <Button
              className="container mb-3 bg-btn-red fw-bold fs-5"
              variant=""
              type="submit"
              style={{
                borderRadius: "0.3rem",
              }}
            >
              Register
            </Button>
            <p className="text-black text-center">
              Already have an account? Klik{" "}
              <span>
                <label
                  style={{ cursor: "pointer" }}
                  className="text-decoration-none fw-bold text-black"
                  onClick={() => {
                    props.toggleLogin();
                    props.toggle();
                  }}
                >
                  Here
                </label>
              </span>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
