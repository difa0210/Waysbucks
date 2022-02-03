import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../image/Detail.png";
import Image2 from "../image/Rectangle 9-1.png";
import Image3 from "../image/Rectangle 9-2.png";
import Image4 from "../image/Rectangle 9-3.png";
import Image5 from "../image/Rectangle 9-4.png";
import Image6 from "../image/Rectangle 9-5.png";
import Image7 from "../image/Rectangle 9-6.png";
import Image8 from "../image/Rectangle 9-7.png";
import Image9 from "../image/Rectangle 9.png";

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

function DetailProducts() {
  return (
    <div className="p-5">
      <Row style={{ color: "#BD0707" }}>
        <Col className="d-flex justify-content-center">
          <Image style={{ borderRadius: "0.5rem" }} src={Image1} />
        </Col>
        <Col>
          <Row>
            <p className="fw-bold m-0" style={{ fontSize: "3rem" }}>
              Ice Coffee Palm Sugar
            </p>
          </Row>
          <Row className="mb-4">
            <p className="fs-4">Rp.27.000</p>
          </Row>
          <Row>
            <p className="fw-bold fs-3">Topping</p>
          </Row>
          <Row className="mb-3" style={{ fontSize: "0.9rem" }}>
            <Col
              lg={3}
              className="d-flex flex-column justify-content-center align-items-center text-center"
            >
              <button type="button" class="btn position-relative">
                <Image style={{ borderRadius: "0.5rem" }} src={Image2} />
                <p>Bubble Tea Gelatin</p>
                <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
              </button>
              
            </Col>
            <Col
              lg={3}
              className="d-flex flex-column justify-content-center align-items-center text-center"
            >
              <Image style={{ borderRadius: "0.5rem" }} src={Image3} />
              <p>Manggo</p>
            </Col>
            <Col
              lg={3}
              className="d-flex flex-column justify-content-center align-items-center text-center"
            >
              <Image style={{ borderRadius: "0.5rem" }} src={Image4} />
              <p>Green Coconut</p>
            </Col>
            <Col
              lg={3}
              className="d-flex flex-column justify-content-center align-items-center text-center"
            >
              <Image style={{ borderRadius: "0.5rem" }} src={Image6} />
              <p>Boba Manggo</p>
            </Col>
            <Col
              lg={3}
              className="d-flex flex-column justify-content-center align-items-center text-center"
            >
              <Image style={{ borderRadius: "0.5rem" }} src={Image6} />
              <p>Bill Berry Boba</p>
            </Col>
            <Col
              lg={3}
              className="d-flex flex-column justify-content-center align-items-center text-center"
            >
              <Image style={{ borderRadius: "0.5rem" }} src={Image7} />
              <p>Kiwi Popping Pearl</p>
            </Col>
            <Col
              lg={3}
              className="d-flex flex-column justify-content-center align-items-center text-center"
            >
              <Image style={{ borderRadius: "0.5rem" }} src={Image8} />
              <p>Matcha Cantaloupe</p>
            </Col>
            <Col
              lg={3}
              className="d-flex flex-column justify-content-center align-items-center text-center"
            >
              <Image style={{ borderRadius: "0.5rem" }} src={Image9} />
              <p>Strawberry Popping</p>
            </Col>
          </Row>
          <Row className="mb-5 fw-bold fs-3">
            <Col lg={6}>Total</Col>
            <Col lg={6} className="text-end">
              Rp. 27.000
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="container bg-btn-red fw-bold fs-5"
                variant=""
                type="submit"
                style={{
                  borderRadius: "0.3rem",
                }}
              >
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default DetailProducts;
