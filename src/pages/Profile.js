import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Image1 from "../image/Mask Group.png";
import Image2 from "../image/transaction.png";
import Image3 from "../image/logoProfile.png";
import Image4 from "../image/barcode.png";

import { Link } from "react-router-dom";

import { Button, Image, Row, Col } from "react-bootstrap";

export default function Profile() {
  return (
    <div className="container p-5">
      <Row style={{ color: "#BD0707" }}>
        <Col lg={6}>
          <Row className="mb-3 fw-bold fs-3">My Profile</Row>
          <Row>
            <Col className="p-0">
              <Image style={{ borderRadius: "0.5rem" }} src={Image1} />
            </Col>
            <Col lg={8} className="fs-5">
              <p className="fw-bold m-0">Full Name</p>
              <p>Egi Ganteng</p>
              <p className="fw-bold m-0">Email</p>
              <p>egigantengdikit@gmail.com</p>
            </Col>
          </Row>
        </Col>

        <Col lg={6} className="">
          <Row className="mb-3 fw-bold fs-3">My Transaction</Row>
          <Row style={{ backgroundColor: "#F6DADA" }} className="p-4">
            <Col lg={9} className="">
              <Row>
                <Col lg={3} className="p-0 mb-4">
                  <Image style={{ borderRadius: "0.2rem" }} src={Image2} />
                </Col>
                <Col className="" style={{ fontSize: "0.8rem" }}>
                  <p className="fs-5 fw-bold mb-2">Ice Coffee Palm Sugar</p>
                  <p className="mb-1">
                    <span>Saturday</span>, 5 March 2020
                  </p>
                  <p className="mb-1">
                    <span className="fw-bold">Topping :</span> Bill Berry Boba,
                    Bubble Tea Gelatin
                  </p>
                  <p className="">
                    <span className="fw-bold">Price :</span> Rp. 33.000
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg={3} className="p-0">
                  <Image style={{ borderRadius: "0.2rem" }} src={Image2} />
                </Col>
                <Col className="" style={{ fontSize: "0.8rem" }}>
                  <p className="fs-5 fw-bold mb-2">Ice Coffee Palm Sugar</p>
                  <p className="mb-1">
                    <span>Saturday</span>, 5 March 2020
                  </p>
                  <p className="mb-1">
                    <span className="fw-bold">Topping :</span> Bill Berry Boba,
                    Manggo
                  </p>
                  <p className="">
                    <span className="fw-bold">Price :</span> Rp. 36.000
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg={3}>
              <Col className="d-flex justify-content-center">
                <Image className="mb-3" src={Image3} />
              </Col>
              <Col className="d-flex justify-content-center">
                <Image className="mb-3" src={Image4} />
              </Col>
              <Col className="fw-bold d-flex flex-column justify-content-center text-center">
                <Link to="/admin">
                  <Button
                    className="mb-2"
                    style={{ fontSize: "0.8rem" }}
                    as="input"
                    type="submit"
                    value="On The Way"
                  />
                </Link>
                <p style={{ fontSize: "0.8rem" }}>Sub Total : 69.000</p>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
