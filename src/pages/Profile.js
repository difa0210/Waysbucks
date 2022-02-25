import React, { useContext, useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import convertRupiah from "rupiah-format";
import Image1 from "../image/Mask Group.png";
import Image3 from "../image/logoProfile.png";
import Image4 from "../image/barcode.png";

import { Link, useParams } from "react-router-dom";
import { Button, Image, Row, Col } from "react-bootstrap";
import { UserContext } from "../Context/userContext";
import { API, setAuthToken } from "../config/api";

export default function Profile() {
  // const { myId } = useParams();
  const [getTransaction, setGetTransaction] = useState();
  const [user, setUser] = useContext(UserContext);

  const myTransaction = async () => {
    try {
      setAuthToken(localStorage.getItem("token"));
      const response = await API.get(`/carts`);
      setGetTransaction(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    myTransaction();
  }, []);

  if (!getTransaction) return <div>Loading</div>;
  if (!user) return <div>Loading</div>;

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
              <p>{user.name}</p>
              <p className="fw-bold m-0">Email</p>
              <p>{user.email}</p>
            </Col>
          </Row>
        </Col>

        <Col lg={6} className="">
          <Row className="mb-3 fw-bold fs-3">My Transaction</Row>
          <Row style={{ backgroundColor: "#F6DADA" }} className="p-4">
            <Col lg={9} className="">
              {getTransaction &&
                getTransaction.map((item, index) => (
                  <Row key={index}>
                    <Col lg={3} className="p-0 mb-4">
                      <Image
                        style={{ borderRadius: "0.2rem", width: "5rem" }}
                        src={`http://localhost:5000/uploads/${item.product.image}`}
                      />
                    </Col>
                    <Col className="" lg={9} style={{ fontSize: "0.8rem" }}>
                      <p className="fs-5 fw-bold mb-2">{item.product.title}</p>
                      <p className="mb-1">
                        <span>Saturday</span>, 5 March 2020
                      </p>
                      <p className="mb-1">
                        <span className="fw-bold">Topping :</span>
                        {item.carttopping.map((x) => x.topping.title)}
                      </p>
                      <p className="">
                        <span className="fw-bold">Price :</span>
                        {convertRupiah.convert(item.product.price)}
                      </p>
                    </Col>
                  </Row>
                ))}
            </Col>
            <Col lg={3}>
              <Col className="d-flex justify-content-center">
                <Image className="mb-3" src={Image3} />
              </Col>
              <Col className="d-flex justify-content-center">
                <Image className="mb-3" src={Image4} />
              </Col>
              <Col className="fw-bold d-flex flex-column justify-content-center text-center">
                <Button
                  className="mb-2"
                  style={{ fontSize: "0.8rem" }}
                  as="input"
                  type="submit"
                  value="On The Way"
                />

                <p style={{ fontSize: "0.8rem" }}>Sub Total : 69.000</p>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
