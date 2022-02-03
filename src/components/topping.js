import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../image/Rectangle 4.png";

import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Image,
  Row,
  Col,
  Card,
} from "react-bootstrap";

function Topping() {
  return (
    <div className="p-5">
      <Row style={{ color: "#BD0707" }}>
        <Col lg={7} className="p-5">
          <Form>
            <Form.Label className="fs-1 fw-bold mb-5">Topping</Form.Label>
            <Form.Group
              className="mb-4"
              controlId="formBasicText"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control type="text" placeholder="Name Topping" required />
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="formBasicNumber"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control type="number" placeholder="Price" required />
            </Form.Group>
            <Form.Group
              className="mb-5"
              controlId="formBasicFile"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control type="file" placeholder="Photo Topping" required />
            </Form.Group>
            <Button
                className="container bg-btn-red fw-bold fs-5"
                variant=""
                type="submit"
                style={{
                  borderRadius: "0.3rem",
                }}
              >
                Add Topping
              </Button>
          </Form>
        </Col>

        <Col lg={5} className="d-flex justify-content-center">
          <Image
            className="img-fluid"
            style={{ borderRadius: "0.5rem" }}
            src={Image1}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Topping;