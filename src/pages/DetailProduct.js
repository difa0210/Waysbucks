import { React, useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import convertRupiah from "rupiah-format";
import "bootstrap/dist/css/bootstrap.min.css";

import { API } from "../config/api";
import { Button, Image, Row, Col } from "react-bootstrap";

export default function DetailProducts() {
  const { productsId } = useParams();
  const [totalPrice, setTotalPrice] = useState();
  const [allTopping, setAllTopping] = useState();
  const [getProduct, setGetProduct] = useState();
  const [toppings, setToppings] = useState();

  const product = async () => {
    try {
      const response = await API.get(`/product/${productsId}`);

      setGetProduct(response.data.data.products);
      console.log(response.data.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const topping = async () => {
    try {
      const response = await API.get("/toppings");

      setAllTopping(
        response.data.data.allTopping.map((x) => ({
          ...x,
          isSelected: false,
        }))
      );
      console.log(response.data.data.allTopping);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    product();
    topping();
    // handleIdTopping();
  }, []);

  const handleTopping = (value, index) => {
    allTopping[index].isSelected = value;
    setAllTopping([...allTopping]);
    const total = allTopping
      .filter((x) => x.isSelected)
      .reduce((a, b) => {
        return a + b.price;
      }, 0);
    setTotalPrice(getProduct.price + total);
  };

  const handleBuy = async (e) => {
    try {
      e.preventDefault();

      // Configuration
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Get data from product
      const data = {
        productId: getProduct.id,
        toppingIds: allTopping.filter((x) => x.isSelected).map((x) => x.id),
      };
      console.log(data);
      // Data body
      const body = JSON.stringify(data);

      // Insert transaction data
      await API.post("/cart", body, config);
      console.log(body);
    } catch (error) {
      console.log(error);
    }
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
            <p className="fs-4">{convertRupiah.convert(getProduct.price)} </p>
          </Row>
          <Row>
            <p className="fw-bold fs-3">Topping</p>
          </Row>

          <Row className="mb-3" style={{ fontSize: "0.9rem" }}>
            {allTopping &&
              allTopping.map((item, index) => (
                <Col
                  key={index}
                  lg={3}
                  className="d-flex flex-column justify-content-center align-items-center text-center"
                >
                  <button
                    type="button"
                    className="btn position-relative"
                    onClick={() => handleTopping(!item.isSelected, index)}
                  >
                    <Image
                      style={{ borderRadius: "0.5rem" }}
                      src={`http://localhost:5000/uploads/${item.image}`}
                    />
                    <p>{item.title}</p>
                    {item.isSelected && (
                      <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"></span>
                    )}
                  </button>
                </Col>
              ))}
          </Row>

          <Row className="mb-5 fw-bold fs-3">
            <Col lg={6}>Total</Col>
            <Col lg={6} className="text-end">
              {convertRupiah.convert(totalPrice)}
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/cart">
                <Button
                  className="container bg-btn-red fw-bold fs-5"
                  variant=""
                  onClick={handleBuy}
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
