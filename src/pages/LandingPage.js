import { useContext, useState, useEffect } from "react";
import { UserContext } from "../Context/userContext";
import { useNavigate } from "react-router-dom";
import convertRupiah from "rupiah-format";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../image/Rectangle 3.png";
import { Image, Row, Col, Card, Container } from "react-bootstrap";
import { ModalContext } from "../Context/modalContext";
import { API } from "../config/api";

export default function LandingPage() {
  const navigate = useNavigate();
  const [user] = useContext(UserContext);
  const [, , , , toggle] = useContext(ModalContext);
  const [allProduct, setAllProduct] = useState();

  const product = async () => {
    try {
      const response = await API.get("/products");

      setAllProduct(response.data.data.allProducts);
      console.log(response.data.data.allProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    product();
  }, []);

  return (
    <Container className="mt-4">
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
          <Col
            className="fw-bold"
            style={{
              fontSize: "4rem",
            }}
          >
            WAYSBUCKS
          </Col>
          <Col className="fs-3 mb-4">
            Things are changing, but we're still here for you
          </Col>
          <Col className="fs-5 mb-4">
            We have temporarily closed our in-store cafes, but select grocery
            and drive-thru locations remaining open.
            <span className="fw-bold"> Waysbucks</span> Drivers is also
            available
          </Col>
          <Col className="fs-5">Let's Order...</Col>
        </Col>
        <Col lg={4} className="img-jumbotron">
          <Image style={{ borderRadius: "1rem" }} src={Image1} />
        </Col>
      </Row>

      <Row style={{ color: "#BD0707" }}>
        <Col lg={12} className="fs-2 fw-bold my-5">
          Let's Order
        </Col>
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
                  <Card.Text>{convertRupiah.convert(item.price)}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
}
