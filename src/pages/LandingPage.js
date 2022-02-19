import { useContext, useState, useEffect } from "react";

import { UserContext } from "../Context/userContext";

import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import ModalRegister from "../components/ModalRegister";
import Image1 from "../image/Rectangle 3.png";
import Img1 from "../image/1.png";
import Img2 from "../image/2.png";
import Img3 from "../image/3.png";
import Img4 from "../image/4.png";
import { Image, Row, Col, Card } from "react-bootstrap";
import { ModalContext } from "../Context/modalContext";
import { API } from "../config/api";

export default function LandingPage() {
  const navigate = useNavigate();
  const [user] = useContext(UserContext);
  const [, , toggle] = useContext(ModalContext);
  const [allProduct, setAllProduct] = useState();

  const product = async () => {
    try {
      const response = await API.get("/products");

      // if (response.status === 404) {
      // }
      setAllProduct(response.data.data.allProducts);
      console.log(response.data.data.allProducts);
      // let payload = response.data.data.user;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    product();
  }, []);
  // const toggleModalRegister = () => {
  //   setIsOpenModalRegister(!isOpenModalRegister);
  // };

  return (
    <div className="container p-5">
      <Row
        fluid="lg"
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
        <Col lg={4} className="img-jumbotron">
          <Image style={{ borderRadius: "1rem" }} src={Image1} />
        </Col>
      </Row>

      <Row style={{ color: "#BD0707" }}>
        <p className="fs-2 fw-bold my-4">Let's Order</p>
        {allProduct &&
          allProduct.map((item, index) => (
            <Col
              lg={3}
              key={index}
              style={{ cursor: "pointer" }}
              className="mb-4"
            >
              <Card
                style={{
                  color: "#BD0707",
                  backgroundColor: "#F6DADA",
                  minWidth: "16rem",
                  borderRadius: "1rem",
                }}
                onClick={() => {
                  if (user) {
                    navigate(`/detailProducts/${item.id}`);
                  } else {
                    toggle("Login");
                  }
                }}
              >
                <Card.Img
                  variant="top"
                  src={`http://localhost:5000/uploads/${item.image}`}
                />
                <Card.Body>
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
