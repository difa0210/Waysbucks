import { useContext, useEffect, useState } from "react";
import { Button, Modal, Row, Col, Image } from "react-bootstrap";
import Image3 from "../image/logoProfile.png";
import Image4 from "../image/barcode.png";
import Image1 from "../image/done.png";
import { API, setAuthToken } from "../config/api";
import convertRupiah from "rupiah-format";
import { ModalContext } from "../Context/modalContext";
import Moment from "moment";

export default function ModalTransaction() {
  const [, , isOpen, , toggle, transactionId] = useContext(ModalContext);
  const [getTransaction, setGetTransaction] = useState();
  const [getStatus, setGetStatus] = useState();

  const idTransaction = async () => {
    console.log(transactionId);
    try {
      setAuthToken(localStorage.getItem("token"));
      const response = await API.get(`/transaction/${transactionId}`);
      console.log(response.data.data.transactionDetail);
      setGetStatus(response.data.data.status);
      setGetTransaction(response.data.data.transactionDetail);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (transactionId) idTransaction();
  }, [transactionId, isOpen]);

  return (
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
                      src={`http://localhost:5000/uploads/${item.product.image}`}
                    />
                  </Col>
                  <Col className="" style={{ fontSize: "0.8rem" }}>
                    <Col className="fs-5 fw-bold mb-2">
                      {item.product.title}
                    </Col>
                    <Col className="mb-1">
                      {new Date(item.updatedAt).toUTCString()}
                    </Col>
                    <Col className="mb-1">
                      <span className="fw-bold">Topping : </span>
                      {item.transactionDetailTopping.map(
                        (x) => x.topping.title
                      )}
                    </Col>
                    <Col className="">
                      <span className="fw-bold">Price : </span>
                      {convertRupiah.convert(item.price)}
                    </Col>
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
              {getStatus === "Waiting Approve" ? (
                <Button variant="primary" size="sm" style={{ margin: "2px" }}>
                  {getStatus}
                </Button>
              ) : getStatus === "Success" ? (
                <Button variant="success" size="sm" style={{ margin: "2px" }}>
                  {getStatus}
                </Button>
              ) : getStatus === "On The Way" ? (
                <Button variant="primary" size="sm" style={{ margin: "2px" }}>
                  {getStatus}
                </Button>
              ) : (
                <Button variant="danger" size="sm" style={{ margin: "2px" }}>
                  {getStatus}
                </Button>
              )}
              <Col style={{ fontSize: "0.8rem" }}>Sub Total : </Col>
              <Col className="fw-bold" style={{ fontSize: "0.8rem" }}>
                {convertRupiah.convert(
                  getTransaction &&
                    getTransaction.reduce((a, b) => {
                      return a + b.price;
                    }, 0)
                )}
              </Col>
            </Col>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}
