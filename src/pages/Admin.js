import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../image/cancel.png";
import Image2 from "../image/done.png";

import { Table } from "react-bootstrap";
import ModalTransaction from "../components/ModalTransaction";

export default function Admin() {
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
        <tbody className="text-center">
          <tr>
            <td>1</td>
            <td>Sugeng No Pants</td>
            <td>Cileungsi</td>
            <td>16820</td>
            <td>Rp. 69.000</td>
            <td>Waiting Approve</td>
            <td className="d-flex justify-content-center">
              <button type="button" className="btn btn-success mx-2">
                Approve
              </button>
              <button type="button" className="btn btn-danger mx-2">
                Cancel
              </button>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>Aziz Union</td>
            <td>Tanjung Balai</td>
            <td>16875</td>
            <td>Rp. 69.000</td>
            <td>Cancel</td>
            <td className="d-flex justify-content-center">
              <img src={Image1} alt="" />
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Haris Gams</td>
            <td>Bekasi</td>
            <td>16839</td>
            <td>Rp. 69.000</td>
            <td>On The Way</td>
            <td className="d-flex justify-content-center">
              <ModalTransaction />
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Lae Tanjung Balai</td>
            <td>Serang</td>
            <td>16819</td>
            <td>Rp. 69.000</td>
            <td>Success</td>
            <td className="d-flex justify-content-center">
              <img src={Image2} alt="" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
