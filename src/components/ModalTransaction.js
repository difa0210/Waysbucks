import { useContext, useEffect, useState } from "react";

import { Button, Modal, Row, Col, Image } from "react-bootstrap";
import Image2 from "../image/transaction.png";
import Image3 from "../image/logoProfile.png";
import Image4 from "../image/barcode.png";
import Image1 from "../image/done.png";
import { API, setAuthToken } from "../config/api";
import convertRupiah from "rupiah-format";
import { useParams } from "react-router-dom";
import { ModalContext } from "../Context/modalContext";

export default function ModalTransaction() {
  const Id = useParams();
  const [, , isOpen, toggle] = useContext(ModalContext);
  const [getTransaction, setGetTransaction] = useState();

  const idTransaction = async () => {
    try {
      // const response = await API.get(`/transaction/${cartId}`);
      // // setGetTransaction(response.data);
      // console.log(response.data);
      setAuthToken(localStorage.getItem("token"));
      const response = await API.get(`/transactions`);
      setGetTransaction(response.data.data.transaction);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    idTransaction();
  }, []);

  return (
    <>
      <Modal show={isOpen} onHide={() => toggle("Transaction")} centered>
        <Modal.Body
          style={{
            backgroundColor: "#F6DADA",
            color: "#BD0707",
          }}
        >
          <Row className="p-3">
            <Col lg={9} className="">
              {getTransaction &&
                getTransaction.map((item, index) => (
                  <Row key={index}>
                    <Col lg={3} className="p-0 mb-4">
                      <Image
                        style={{ borderRadius: "0.2rem", width: "5.5rem" }}
                        src={`http://localhost:5000/uploads/${item.order.map(
                          (x) => x.image
                        )}`}
                      />
                    </Col>
                    <Col className="" style={{ fontSize: "0.8rem" }}>
                      <p className="fs-5 fw-bold mb-2">
                        {item.order.map((x) => x.title)}
                      </p>
                      <p className="mb-1">
                        <span>Saturday</span>, 5 March 2020
                      </p>
                      <p className="mb-1">
                        <span className="fw-bold">Topping :</span>{" "}
                        {item.order.map((x) => x.topping.map((xx) => xx.title))}
                      </p>
                      <p className="">
                        <span className="fw-bold">Price :</span>{" "}
                        {item.order.map((x) => x.totalPrice)}
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
        </Modal.Body>
      </Modal>
    </>
  );
}
