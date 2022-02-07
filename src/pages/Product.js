import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Image1 from "../image/Detail.png";
// import Image2 from "../image/cart.png";

import { Form, Button, Image, Row, Col } from "react-bootstrap";

export default function Products() {
  return (
    <div className="container p-5">
      <Row style={{ color: "#BD0707" }}>
        <Col lg={7} className="p-5">
          <Form>
            <Form.Label className="fs-1 fw-bold mb-5">Product</Form.Label>
            <Form.Group
              className="mb-4"
              controlId="formBasicText"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control type="text" placeholder="Name Product" />
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="formBasicNumber"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control type="number" placeholder="Price" />
            </Form.Group>
            <Form.Group
              className="mb-5"
              controlId="formBasicFile"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              {" "}
              <Form.Control
                type="file"
                placeholder="Photo Product"
                // id={<Image src={Image2} />}
              />
            </Form.Group>
            <Button
              className="container bg-btn-red fw-bold fs-5"
              variant=""
              type="submit"
              style={{
                borderRadius: "0.3rem",
              }}
            >
              Add Product
            </Button>
          </Form>
        </Col>

        <Col lg={5} className="d-flex justify-content-center">
          <Image className="" style={{ borderRadius: "0.5rem" }} src={Image1} />
        </Col>
      </Row>
    </div>
  );
}
