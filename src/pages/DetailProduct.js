import { React, useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";

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
import { API } from "../config/api";
import { Button, Image, Row, Col } from "react-bootstrap";

export default function DetailProducts() {
  const { productId } = useParams();
  const productPrice = 27000;
  const [totalPrice, setTotalPrice] = useState(productPrice);
  const [allTopping, setAllTopping] = useState();
  const [getProduct, setGetProduct] = useState();

  const product = async () => {
    try {
      const response = await API.get(`/product/${productId}`);

      // if (response.status === 404) {
      // }
      setGetProduct(response.data.data.products);
      console.log(response.data.data.products);
      // let payload = response.data.data.user;
    } catch (error) {
      console.log(error);
    }
  };

  const topping = async () => {
    try {
      const response = await API.get("/toppings");

      // if (response.status === 404) {
      // }
      setAllTopping(
        response.data.data.allTopping.map((x) => ({
          ...x,
          isSelected: false,
        }))
      );
      console.log(response.data.data.allTopping);
      // let payload = response.data.data.user;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    product();
    topping();
  }, []);

  const handleTopping = (value, index) => {
    allTopping[index].isSelected = value;
    setAllTopping([...allTopping]);
    const total = allTopping
      .filter((x) => x.isSelected)
      .reduce((a, b) => {
        return a + b.price;
      }, 0);
    setTotalPrice(productPrice + total);
  };

  if (!getProduct) return <div>Loading</div>;

  return (
    <div className="container p-5">
      <Row style={{ color: "#BD0707" }}>
        <Col className="d-flex justify-content-center">
          <Image
            style={{ borderRadius: "0.5rem" }}
            src={`http://localhost:5000/uploads/${getProduct.image}`}
          />
        </Col>
        <Col>
          <Row>
            <p className="fw-bold m-0" style={{ fontSize: "3rem" }}>
              {getProduct.title}
            </p>
          </Row>
          <Row className="mb-4">
            <p className="fs-4">Rp. {getProduct.price} </p>
          </Row>
          <Row>
            <p className="fw-bold fs-3">Topping</p>
          </Row>
          {allTopping &&
            allTopping.map((item, index) => (
              <Row key={index} className="mb-3" style={{ fontSize: "0.9rem" }}>
                <Col
                  lg={3}
                  className="d-flex flex-column justify-content-center align-items-center text-center"
                >
                  <button
                    type="button"
                    class="btn position-relative"
                    onClick={() => handleTopping(!item.isSelected, index)}
                  >
                    <Image
                      style={{ borderRadius: "0.5rem" }}
                      src={`http://localhost:5000/uploads/${item.image}`}
                    />
                    <p>{item.title}</p>
                    {item.isSelected && (
                      <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                    )}
                  </button>
                </Col>
              </Row>
            ))}
          <Row className="mb-5 fw-bold fs-3">
            <Col lg={6}>Total</Col>
            <Col lg={6} className="text-end">
              Rp. {totalPrice}
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/cart">
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
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
