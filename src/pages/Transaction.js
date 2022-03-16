import { React, useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import cancel from "../image/cancel.png";
import done from "../image/done.png";
import convertRupiah from "rupiah-format";
import { Table, Button } from "react-bootstrap";
import { API, setAuthToken } from "../config/api";
import { ModalContext } from "../Context/modalContext";
import { useParams } from "react-router-dom";

export default function Transaction() {
  const { transactionId } = useParams();
  const [getTransactions, setGetTransactions] = useState();
  const [, , , , toggle] = useContext(ModalContext);
  const [form, setForm] = useState({
    status: "",
  });

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

  const handleApprove = async (e, id) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const data = {
        status: "On The Way",
      };

      const body = JSON.stringify(data);

      const response = await API.patch(`/transaction/${id}`, body, config);
      console.log(response);
    } catch (err) {
      console.log(err.response);
    }
  };

  const handleCancel = async (e, id) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const body = JSON.stringify({
        status: "Cancel",
      });

      await API.patch(`/transaction/${id}`, body, config);
    } catch (err) {
      console.log(err.response);
    }
  };

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
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.posCode}</td>
                <td>
                  <Button
                    onClick={() => {
                      toggle("Transaction", item.Id);
                    }}
                    style={{ color: "blue" }}
                    variant=""
                  >
                    {convertRupiah.convert(
                      item.order.reduce((a, b) => {
                        return a + b.totalPrice;
                      }, 0)
                    )}
                  </Button>
                </td>
                <td>
                  {item.status === "Waiting Approve" ? (
                    <label style={{ color: "#FF9900" }}>{item.status}</label>
                  ) : item.status === "Success" ? (
                    <label style={{ color: "#78A85A" }}>{item.status}</label>
                  ) : item.status === "On The Way" ? (
                    <label style={{ color: "#00D1FF" }}>{item.status}</label>
                  ) : (
                    <label style={{ color: "#E83939" }}>{item.status}</label>
                  )}
                </td>

                <td className="d-flex justify-content-center">
                  {item.status === "Waiting Approve" ? (
                    <>
                      <Button
                        className=""
                        size="sm"
                        style={{ margin: "2px" }}
                        onClick={(e) => {
                          handleCancel(e, item.Id);
                          window.location.reload();
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        className=""
                        size="sm"
                        style={{ margin: "2px" }}
                        onClick={(e) => {
                          handleApprove(e, item.Id);
                          window.location.reload();
                        }}
                      >
                        Approve
                      </Button>
                    </>
                  ) : item.status === "Success" ? (
                    <img src={done} alt="Success" />
                  ) : item.status === "Cancel" ? (
                    <img src={cancel} alt="Cancel" />
                  ) : (
                    <img src={done} alt="Success" />
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
