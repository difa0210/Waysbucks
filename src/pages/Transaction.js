import { React, useState, useEffect, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Image1 from "../image/cancel.png";
import Image2 from "../image/done.png";

import { Table, Button } from "react-bootstrap";
import ModalTransaction from "../components/ModalTransaction";
import { API, setAuthToken } from "../config/api";
import { useParams, Link } from "react-router-dom";
import { ModalContext } from "../Context/modalContext";

export default function Transaction() {
  const { id } = useParams();
  const [getTransactions, setGetTransactions] = useState();
  const [, , , toggle] = useContext(ModalContext);

  const transactions = async () => {
    try {
      setAuthToken(localStorage.getItem("token"));
      const response = await API.get(`/transactions`);
      setGetTransactions(response.data.data.transaction);
      console.log(response.data.data.transaction);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    transactions();
  }, []);

  if (!getTransactions) return <div>Loading</div>;

  return (
    <div className="container p-5">
      <p className="fw-bold fs-2 mb-4" style={{ color: "#BD0707" }}>
        Income Transaction
      </p>

      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>No.</th>
            <th>Name</th>
            <th>Address</th>
            <th>Post Code</th>
            <th>Income</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {getTransactions &&
            getTransactions.map((item, index) => (
              <tr key={index} className="text-center">
                <td>{index + 1}</td>
                <td>{item.userOrder.fullName}</td>
                <td>Cileungsi</td>
                <td>16820</td>
                <td>
                  {/* <ModalTransaction /> */}
                  <Button
                    onClick={() => toggle("Transaction")}
                    style={{ color: "blue" }}
                    variant=""
                  >
                    {item.order.map((x) => x.totalPrice)}
                  </Button>
                </td>
                <td>{item.status}</td>

                <td className="d-flex justify-content-center">
                  {item.status === "success" ? (
                    <img src={Image2} alt="" />
                  ) : (
                    <>
                      <button type="button" className="btn btn-success mx-2">
                        Approve
                      </button>
                      <button type="button" className="btn btn-danger mx-2">
                        Cancel
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
