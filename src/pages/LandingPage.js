import React from "react";

import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Image1 from "../image/Rectangle 3.png";
import Img1 from "../image/1.png";
import Img2 from "../image/2.png";
import Img3 from "../image/3.png";
import Img4 from "../image/4.png";
import { Image, Row, Col, Card } from "react-bootstrap";

export default function LandingPage() {
  const navigate = useNavigate();
  const login = localStorage.getItem("login");
  const products = [
    { name: "Ice Coffee Palm Sugar", price: "Rp. 27.000", image: Img1 },
    { name: "Ice Coffee Green Tea", price: "Rp. 27.000", image: Img2 },
    { name: "Hanami Latte", price: "Rp. 27.000", image: Img3 },
    { name: "Clepon Coffee", price: "Rp. 27.000", image: Img4 },
  ];
  return (
    <div className="container p-5">
      <Row
        className="p-5 text-white"
        style={{
          height: "27rem",
          backgroundColor: "#BD0707",
          borderRadius: "1rem",
          marginRight: "10rem",
        }}
      >
        <Col lg={8} className="">
          <p
            className="fw-bold"
            style={{
              fontSize: "4rem",
            }}
          >
            WAYSBUCKS
          </p>
          <p className="fs-3 mb-4">
            Things are changing, but we're still here for you
          </p>
          <p className="fs-5 mb-4">
            We have temporarily closed our in-store cafes, but select grocery
            and drive-thru locations remaining open.
            <span className="fw-bold"> Waysbucks</span> Drivers is also
            available
          </p>
          <p className="fs-5">Let's Order...</p>
        </Col>
        <Col lg={4}>
          <Image style={{ borderRadius: "1rem" }} src={Image1} />
        </Col>
      </Row>

      <Row style={{ color: "#BD0707" }}>
        <p className="fs-2 fw-bold my-4">Let's Order</p>
        {products.map((item, index) => (
          <Col style={{ cursor: "pointer" }}>
            {/* <Link to="/detailProducts" className="text-decoration-none"> */}
            <Card
              style={{
                color: "#BD0707",
                backgroundColor: "#F6DADA",
                width: "16rem",
                borderRadius: "1rem",
              }}
              onClick={() => {
                if (login) {
                  navigate("detailProducts");
                }
              }}
            >
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title className="fw-bold">{item.name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
              </Card.Body>
            </Card>
            {/* </Link> */}
          </Col>
        ))}
      </Row>
    </div>
  );
}
