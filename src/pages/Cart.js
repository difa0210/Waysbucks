import { React, useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import convertRupiah from "rupiah-format";

import Image2 from "../image/trash.png";
import Image3 from "../image/invoices 1.png";

import { Form, Button, Image, Row, Col } from "react-bootstrap";
import ModalPay from "../components/ModalPay";
import { API, setAuthToken } from "../config/api";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function Cart() {
  const id = useParams();
  const navigate = useNavigate();
  const [cartId, setCartId] = useState();
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    posCode: "",
    address: "",
  });

  const getCart = async () => {
    try {
      setAuthToken(localStorage.getItem("token"));
      const response = await API.get(`/carts`);
      setCartId(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCart();
  }, []);

  // const totalPrice = cartId
  //   .map((x) => x.product.price)
  //   .reduce((a, b) => {
  //     return a + b.price;
  //   }, 0);
  const { name, phone, email, posCode, address } = form;
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBuy = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const data = {
        transactionDetails: [
          {
            cartId: cartId.map((x) => x.id),
          },
        ],
      };
      console.log(data);

      const body = JSON.stringify(data);

      await API.post("/transaction", body, config);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (e) => {
    try {
      e.preventDefault();
      await API.delete(`/cart/:id`);
    } catch (error) {
      console.log(error);
    }
  };

  if (!cartId) return <div>Loading</div>;
  return (
    <div className="container p-5">
      <Row style={{ color: "#BD0707" }}>
        <Col className="">
          <Row className="fs-2 fw-bold mb-4">My Cart</Row>
          <Row className="fw-bold">Review Your Order</Row>
          <hr className="opacity-100" />
          {cartId &&
            cartId.map((item, index) => (
              <Row key={index} className="mb-4">
                <Col className="p-0">
                  <Image
                    style={{ width: "6rem", borderRadius: "0.5rem" }}
                    src={`http://localhost:5000/uploads/${item.product.image}`}
                  />
                </Col>
                <Col lg={8} className="fw-bold">
                  <p>{item.product.title}</p>
                  <p>
                    <span className="fw-bold">
                      Topping : {item.carttopping.map((x) => x.topping.title)}{" "}
                    </span>
                  </p>
                </Col>
                <Col className="text-end p-0 fw-bold">
                  <p>{convertRupiah.convert(item.product.price)}</p>
                  <Button
                    className="p-0"
                    variant=""
                    type="submit"
                    onClick={handleDelete}
                  >
                    <Image src={Image2} />
                  </Button>
                </Col>
              </Row>
            ))}

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
                  Rp.
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
              <Form.Control
                type="text"
                value={name}
                name="name"
                onChange={handleChange}
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="formBasicEmail"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control
                type="email"
                value={email}
                name="email"
                onChange={handleChange}
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group
              className="mb-4"
              controlId="formBasicNumber"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control
                type="number"
                value={phone}
                name="phone"
                onChange={handleChange}
                placeholder="Phone"
              />
            </Form.Group>

            <Form.Group
              className="mb-4"
              controlId="formBasicNumber"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control
                type="number"
                value={posCode}
                name="posCode"
                onChange={handleChange}
                placeholder="Pos Code"
              />
            </Form.Group>

            <Form.Group
              className="mb-5"
              controlId="formBasicTextarea"
              style={{
                borderRadius: "0.3rem",
                border: "1px solid #BD0707",
              }}
            >
              <Form.Control
                as="textarea"
                value={address}
                name="address"
                onChange={handleChange}
                placeholder="Address"
              />
            </Form.Group>
            <Link to={<ModalPay />}>
              <Button
                className="container bg-btn-red fw-bold fs-5 mb-4"
                variant=""
                onClick={handleBuy}
                type="submit"
                style={{
                  borderRadius: "0.3rem",
                }}
              >
                Pay
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
