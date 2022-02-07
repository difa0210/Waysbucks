import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Image1 from "../image/Rectangle 5.png";
import Image2 from "../image/trash.png";
import Image3 from "../image/invoices 1.png";

import { Form, Button, Image, Row, Col } from "react-bootstrap";
import ModalPay from "../components/ModalPay";

export default function Cart() {
  return (
    <div className="container p-5">
      <Row style={{ color: "#BD0707" }}>
        <Col className="">
          <Row className="fs-2 fw-bold mb-4">My Cart</Row>
          <Row className="fw-bold">Review Your Order</Row>
          <hr className="opacity-100" />
          <Row className="mb-4">
            <Col className="p-0">
              <Image style={{ borderRadius: "0.5rem" }} src={Image1} />
            </Col>
            <Col lg={8} className="">
              <p>Ice Coffe Palm Sugar</p>
              <p>
                <span className="fw-bold">Toping</span> : Bill Berry Boba,
                Bubble Tea Gelatin
              </p>
            </Col>
            <Col className="text-end p-0">
              <p>Rp.33.000</p>
              <Button className="p-0" variant="" type="submit">
                <Image src={Image2} />
              </Button>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col className="p-0">
              <Image style={{ borderRadius: "0.5rem" }} src={Image1} />
            </Col>
            <Col lg={8} className="">
              <p>Ice Coffe Palm Sugar</p>
              <p>
                <span className="fw-bold">Toping</span> : Bill Berry Boba,
                Manggo
              </p>
            </Col>
            <Col className="text-end p-0">
              <p>Rp.36.000</p>
              <Button className="p-0" variant="" type="submit">
                <Image src={Image2} />
              </Button>
            </Col>
          </Row>
          <hr className="opacity-100" />
          <Row>
            <Col lg={7}>
              <hr className="opacity-100" />
              <Row className="mb-3">
                <Col lg={6} className="fw-bold">
                  Subtotal
                </Col>
                <Col lg={6} className="text-end">
                  Rp. 63.000
                </Col>
              </Row>
              <Row className="">
                <Col lg={6} className="fw-bold">
                  Qty.
                </Col>
                <Col lg={6} className="text-end">
                  2
                </Col>
              </Row>
              <hr className="opacity-100" />
              <Row className="fw-bold">
                <Col lg={6}>Total</Col>
                <Col lg={6} className="text-end">
                  Rp. 126.000
                </Col>
              </Row>
            </Col>
            <Col
              className="m-3 d-flex flex-column justify-content-center align-items-center fw-bold"
              style={{
                borderRadius: "0.3rem",
                border: "2px solid #BD0707",
                backgroundColor: "#F6DADA",
              }}
            >
              <Image className="mb-3" src={Image3} />
              <p className="opacity-25 m-0">Attached of Transaction</p>
            </Col>
          </Row>
        </Col>
        <Col lg={5} className="p-5">
          <Form>
            <Form.Group
              className="mb-4"
              controlId="formBasicText"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control type="text" placeholder="Name" />
            </Form.Group>
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
              controlId="formBasicNumber"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control type="number" placeholder="Phone" />
            </Form.Group>

            <Form.Group
              className="mb-4"
              controlId="formBasicNumber"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control type="number" placeholder="Pos Code" />
            </Form.Group>

            <Form.Group
              className="mb-5"
              controlId="formBasicTextarea"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control as="textarea" placeholder="Address" />
            </Form.Group>
            <ModalPay />
          </Form>
        </Col>
      </Row>
    </div>
  );
}
