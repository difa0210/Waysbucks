import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../image/Rectangle 3.png";
import Img1 from "../image/1.png";
import Img2 from "../image/2.png";
import Img3 from "../image/3.png";
import Img4 from "../image/4.png";
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
  Card
} from "react-bootstrap";

function Content() {
  return (
    <div className="p-5">
      <Row
        className="p-5 text-white"
        style={{
          height: "40vh",
          backgroundColor: "#BD0707",
          borderRadius: "1rem",
          marginRight: "10rem",
        }}
      >
        <Col lg={8}>
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
            <span className="fw-bold">Waysbucks</span> Drivers is also available
          </p>
          <p className="fs-5">Let's Order...</p>
        </Col>
        <Col lg={4}>
          <Image style={{ borderRadius: "1rem" }} src={Image1} />
        </Col>
      </Row>

      <Row style={{ color: "#BD0707" }}>
        <p className="fs-2 fw-bold my-4">Let's Order</p>
        <Col >
          <Card style={{backgroundColor: "#F6DADA" , width: "16rem"}}>
            <Card.Img variant="top" src={Img1} />
            <Card.Body>
              <Card.Title className="fw-bold">Ice Coffee Palm Sugar</Card.Title>
              <Card.Text>
              Rp. 27.000
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col><Card style={{backgroundColor: "#F6DADA" , width: "16rem"}}>
            <Card.Img variant="top" src={Img2} />
            <Card.Body>
              <Card.Title className="fw-bold">Ice Coffee Green Tea</Card.Title>
              <Card.Text>
              Rp. 27.000
              </Card.Text>
            </Card.Body>
          </Card></Col>
        <Col><Card style={{backgroundColor: "#F6DADA" , width: "16rem"}}>
            <Card.Img variant="top" src={Img3} />
            <Card.Body>
              <Card.Title className="fw-bold">Hanami Latte</Card.Title>
              <Card.Text>
              Rp. 27.000
              </Card.Text>
            </Card.Body>
          </Card></Col>
        <Col><Card style={{backgroundColor: "#F6DADA" , width: "16rem"}}>
            <Card.Img variant="top" src={Img4} />
            <Card.Body>
              <Card.Title className="fw-bold">Clepon Coffee</Card.Title>
              <Card.Text>
              Rp. 27.000
              </Card.Text>
            </Card.Body>
          </Card></Col>
      </Row>
    </div>
  );
}

export default Content;
