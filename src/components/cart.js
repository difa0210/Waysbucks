import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../image/Rectangle 5.png";
import Image2 from "../image/trash.png";
import Image3 from "../image/invoices 1.png";

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

function Cart() {
  return (
    <div className="p-5">
      <Row style={{ color: "#BD0707" }}>
        <Col className="">
          <Row className="fs-2 fw-bold mb-4">My Cart</Row>
          <Row className="fw-bold">Review Your Order</Row>
          <hr />
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
          <hr />
          <Row>
            <Col lg={7}>
              <hr />
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
              <hr />
              <Row className="fw-bold">
                <Col lg={6}>Total</Col>
                <Col lg={6} className="text-end">
                  Rp. 126.000
                </Col>
              </Row>
            </Col>
            <Col>
              <Form.Group
                className=""
                controlId="formBasicTextarea"
              >
                  
                <Form.Control type="text" placeholder="Attached Of Transaction" Image3 />
              </Form.Group>
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
              <Form.Control type="text" placeholder="Name" required />
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="formBasicEmail"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control type="email" placeholder="Email" required />
            </Form.Group>

            <Form.Group
              className="mb-4"
              controlId="formBasicNumber"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control type="number" placeholder="Phone" required />
            </Form.Group>

            <Form.Group
              className="mb-4"
              controlId="formBasicNumber"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control type="number" placeholder="Pos Code" required />
            </Form.Group>

            <Form.Group
              className="mb-5"
              controlId="formBasicTextarea"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control as="textarea" placeholder="Address" required />
            </Form.Group>
            <Button
              className="container bg-btn-red fw-bold fs-5"
              variant=""
              type="submit"
              style={{
                borderRadius: "0.3rem",
              }}
            >
              Pay
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Cart;
