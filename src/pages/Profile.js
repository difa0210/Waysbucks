import React, { useContext, useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import convertRupiah from "rupiah-format";
import Image1 from "../image/Mask Group.png";
import Image3 from "../image/logoProfile.png";
import Image4 from "../image/barcode.png";

import { Button, Image, Row, Col, Container } from "react-bootstrap";
import { UserContext } from "../Context/userContext";
import { API, setAuthToken } from "../config/api";

export default function Profile() {
  const [getTransaction, setGetTransaction] = useState([]);
  const [user, setUser] = useContext(UserContext);

  const myTransaction = async () => {
    try {
      setAuthToken(localStorage.getItem("token"));
      const response = await API.get(`/my-transactions`);
      setGetTransaction(response.data.data.transaction);
      console.log(response.data.data.transaction);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    myTransaction();
  }, []);

  const handleFinish = async (e, id) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const data = {
        status: "Success",
      };

      const body = JSON.stringify(data);

      const response = await API.patch(`/transaction/${id}`, body, config);
      window.location.reload();
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  };

  if (!getTransaction) return <div>Loading</div>;
  if (!user) return <div>Loading</div>;

  return (
    <Container className="p-0">
      <Row style={{ color: "#BD0707" }}>
        <Col lg={6}>
          <Row className="mb-3 fw-bold fs-3">My Profile</Row>
          <Row>
            <Col className="p-0">
              <Image style={{ borderRadius: "0.5rem" }} src={Image1} />
            </Col>
            <Col lg={8} className="fs-5">
              <Col className="fw-bold">Full Name</Col>
              <Col className="mb-4">{user.name}</Col>
              <Col className="fw-bold">Email</Col>
              <Col>{user.email}</Col>
            </Col>
          </Row>
        </Col>

        <Col lg={6} className="">
          <Row className="mb-3 fw-bold fs-3">My Transaction</Row>
          {getTransaction &&
            getTransaction.map((item, index) => (
              <Row
                key={index}
                style={{ backgroundColor: "#F6DADA" }}
                className="p-4"
              >
                {item.order.map((items, indexs) => (
                  <Col lg={9} className="" key={indexs}>
                    <Row>
                      <Col lg={3} className="p-0 mb-4">
                        <Image
                          style={{ borderRadius: "0.2rem", width: "5rem" }}
                          src={`http://localhost:5000/uploads/${items.image}`}
                        />
                      </Col>

                      <Col className="" lg={9} style={{ fontSize: "0.8rem" }}>
                        <Col className="fs-5 fw-bold mb-2">{items.title}</Col>
                        <Col className="mb-1">
                          {new Date(item.updatedAt).toUTCString()}
                        </Col>
                        <Col className="mb-1">
                          <span className="fw-bold">Topping : </span>
                          {items.topping.map((x) => x.title) + ""}
                        </Col>
                        <Col className="">
                          <span className="fw-bold">Price : </span>
                          {convertRupiah.convert(items.totalPrice)}
                        </Col>
                      </Col>
                    </Row>
                  </Col>
                ))}

                <Col lg={3}>
                  <Col className="d-flex justify-content-center">
                    <Image className="mb-3" src={Image3} />
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <Image className="mb-3" src={Image4} />
                  </Col>
                  <Col className="d-flex flex-column justify-content-center text-center mb-3">
                    {item.status === "Waiting Approve" ? (
                      <Button
                        variant="primary"
                        size="sm"
                        style={{ margin: "2px" }}
                      >
                        {item.status}
                      </Button>
                    ) : item.status === "Success" ? (
                      <Button
                        variant="success"
                        size="sm"
                        style={{ margin: "2px" }}
                      >
                        {item.status}
                      </Button>
                    ) : item.status === "On The Way" ? (
                      <Button
                        variant="primary"
                        size="sm"
                        style={{ margin: "2px" }}
                      >
                        {item.status}
                      </Button>
                    ) : (
                      <Button
                        variant="danger"
                        size="sm"
                        style={{ margin: "2px" }}
                      >
                        {item.status}
                      </Button>
                    )}
                    Sub Total :
                    <Col style={{ fontSize: "0.8rem" }} className="fw-bold">
                      {convertRupiah.convert(
                        item.order.reduce((a, b) => {
                          return a + b.totalPrice;
                        }, 0)
                      )}
                    </Col>
                  </Col>
                  {item.status === "On The Way" ? (
                    <Col className="fw-bold d-flex flex-column justify-content-center text-center">
                      <Button
                        variant="primary"
                        size="sm"
                        style={{ margin: "2px" }}
                        onClick={(e) => handleFinish(e, item.id)}
                      >
                        Finish
                      </Button>
                    </Col>
                  ) : (
                    " "
                  )}
                </Col>
              </Row>
            ))}
        </Col>
      </Row>
    </Container>
  );
}
