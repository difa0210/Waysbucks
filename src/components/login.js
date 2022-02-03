import React from "react";

import "./login.css";
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

function Login() {
  return (
    <Form
      className="container p-5"
      style={{
        borderRadius: "0.5rem",
        backgroundColor: "white",
        width: "28rem",
        boxShadow: "0 0 1rem black",
        color: "#BD0707",
      }}
    >
      <Form.Label className="fs-2 fw-bold mb-5">Login</Form.Label>
      <Form.Group
        className="mb-4"
        controlId="formBasicEmail"
        style={{
          borderRadius: "0.3rem",
          border: "1px solid #BD0707",
        }}
      >
        <Form.Control type="email" placeholder="Email" required/>
      </Form.Group>

      <Form.Group
        className="mb-5"
        controlId="formBasicPassword"
        style={{
          borderRadius: "0.3rem",
          border: "1px solid #BD0707",
        }}
      >
        <Form.Control type="password" placeholder="Password" required/>
      </Form.Group>
      <Button
        className="container mb-3 bg-btn-red fw-bold fs-5"
        variant=""
        type="submit"
        style={{
          borderRadius: "0.3rem"
        }}
      >
        Login
      </Button>
      <p className="text-black text-center">
        Don't have an account ? Klik <span>
          <a href="#" className="text-decoration-none fw-bold text-black">
            Here
          </a>
        </span>
      </p>
    </Form>
  );
}

export default Login;
