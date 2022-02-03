import React from "react";

import "./register.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Image,
} from "react-bootstrap";

function Register() {
  return (
    <Form
      className="container p-5"
      style={{
        borderRadius: "0.5rem",
        backgroundColor: "white",
        width: "28rem",
        boxShadow: "0 0 1.5rem black",
        color: "#BD0707",
      }}
    >
      <Form.Label className="fs-2 fw-bold mb-4">Register</Form.Label>
      <Form.Group
        className="mb-4"
        controlId="formBasicEmail"
        style={{
          borderRadius: "0.3rem",
          border: "1px solid #BD0707",
        }}
      >
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group
        className="mb-4"
        controlId="formBasicPassword"
        style={{
          borderRadius: "0.3rem",
          border: "1px solid #BD0707",
        }}
      >
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group
        className="mb-4"
        controlId="formBasicText"
        style={{
          borderRadius: "0.3rem",
          border: "1px solid #BD0707",
        }}
      >
        <Form.Control type="text" placeholder="Full Name" />
      </Form.Group>
      <Button
        className="container mb-3 bg-btn-red fw-bold fs-4"
        variant=""
        type="submit"
      >
        Register
      </Button>
      <p className="text-black text-center">
        Already have an account? Klik <span>
        <a href="#" className="text-decoration-none fw-bold text-black">
            Here
        </a>
        </span>
      </p>
    </Form>
  );
}

export default Register;
