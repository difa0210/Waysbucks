import { React, useContext, useState } from "react";
import { Button, Form, Modal, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { API } from "../config/api";
import { ModalContext } from "../Context/modalContext";

export default function ModalRegister(props) {
  let navigate = useNavigate();
  const [, isOpen, toggle] = useContext(ModalContext);
  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { fullName, email, password } = form;
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      props.toggle();
      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data user to database
      const response = await API.post("/register", body, config);

      // Notification

      if (response.data.status == "success") {
        // localStorage.setItem("login", "login");
        navigate(props.toggleLogin());
      } else {
        const alert = (
          <Alert variant="danger" className="py-1 fw-bold">
            Email or Password not match
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1 fw-bold">
          Email or Password not match
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  };
  // const handleLogin = () => {
  //   localStorage.setItem("login", "login");
  //   props.toggle();
  //   window.location.reload();
  // };

  return (
    <Modal show={isOpen} onHide={() => toggle("Register")} centered>
      <Modal.Body>
        <Form
          onSubmit={handleSubmit}
          className=" p-5"
          style={{
            color: "#BD0707",
          }}
        >
          <Form.Label className="fs-2 fw-bold mb-5">Register</Form.Label>
          <Form.Group
            className="mb-4"
            controlId="formBasicEmail"
            style={{
              borderRadius: "0.3rem",
              border: "1px solid #BD0707",
            }}
          >
            <Form.Control
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group
            className="mb-4"
            controlId="formBasicPassword"
            style={{
              borderRadius: "0.3rem",
              border: "1px solid #BD0707",
            }}
          >
            <Form.Control
              type="password"
              value={password}
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group
            className="mb-5"
            controlId="formBasicText"
            style={{
              borderRadius: "0.3rem",
              border: "1px solid #BD0707",
            }}
          >
            <Form.Control
              type="text"
              value={fullName}
              name="fullName"
              onChange={handleChange}
              placeholder="Full Name"
            />
          </Form.Group>
          <Button
            className="container mb-3 bg-btn-red fw-bold fs-5"
            variant=""
            type="submit"
            style={{
              borderRadius: "0.3rem",
            }}
            // onClick={handleLogin}
          >
            Register
          </Button>
          <p className="text-black text-center">
            Already have an account? Klik{" "}
            <span>
              <label
                style={{ cursor: "pointer" }}
                className="text-decoration-none fw-bold text-black"
                onClick={() => {
                  props.toggleLogin();
                  props.toggle();
                }}
              >
                Here
              </label>
            </span>
          </p>
          {message && message}
        </Form>
      </Modal.Body>
    </Modal>
  );
}
