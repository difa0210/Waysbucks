import React, { useContext, useEffect, useState } from "react";

import { Button, Modal, Row, Col, Image } from "react-bootstrap";
import Image2 from "../image/transaction.png";
import Image3 from "../image/logoProfile.png";
import Image4 from "../image/barcode.png";
import Image1 from "../image/done.png";
import { API } from "../config/api";
import convertRupiah from "rupiah-format";
import { useParams } from "react-router-dom";

export default function ModalTransaction() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [getTransaction, setGetTransaction] = useState();
  // const id = useParams();
  const idTransaction = async () => {
    try {
      const response = await API.get(`/transaction/:id`);
      // setGetTransaction(response.data);
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
      <Button onClick={handleShow} className="p-0 fw-bold" variant="">
        {" "}
        Link{" "}
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body
          style={{
            backgroundColor: "#F6DADA",
            color: "#BD0707",
          }}
        >
          <Row className="p-3">
            <Col lg={9} className="">
              <Row>
                <Col lg={3} className="p-0 mb-4">
                  <Image style={{ borderRadius: "0.2rem" }} src={Image2} />
                </Col>
                <Col className="" style={{ fontSize: "0.8rem" }}>
                  <p className="fs-5 fw-bold mb-2">Ice Coffee Palm Sugar</p>
                  <p className="mb-1">
                    <span>Saturday</span>, 5 March 2020
                  </p>
                  <p className="mb-1">
                    <span className="fw-bold">Topping :</span> Bill Berry Boba,
                    Bubble Tea Gelatin
                  </p>
                  <p className="">
                    <span className="fw-bold">Price :</span> Rp. 33.000
                  </p>
                </Col>
              </Row>
              <Row>
                <Col lg={3} className="p-0">
                  <Image style={{ borderRadius: "0.2rem" }} src={Image2} />
                </Col>
                <Col className="" style={{ fontSize: "0.8rem" }}>
                  <p className="fs-5 fw-bold mb-2">Ice Coffee Palm Sugar</p>
                  <p className="mb-1">
                    <span>Saturday</span>, 5 March 2020
                  </p>
                  <p className="mb-1">
                    <span className="fw-bold">Topping :</span> Bill Berry Boba,
                    Manggo
                  </p>
                  <p className="">
                    <span className="fw-bold">Price :</span> Rp. 36.000
                  </p>
                </Col>
              </Row>
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
