import { useContext, useState } from "react";

import { Button, Form, Modal } from "react-bootstrap";

import { API } from "../config/api";
import { ModalContext } from "../Context/modalContext";

export default function ModalLogin() {
  const [isOpen, , , toggle] = useContext(ModalContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data user to database
      const response = await API.post("/login", body, config);

      localStorage.setItem("token", response.data.data.user.token);
      window.location.reload();
      console.log(response.data);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <Modal show={isOpen} onHide={() => toggle("Login")} centered>
      <Modal.Body>
        {message && <div>{message}</div>}
        <Form
          onSubmit={handleSubmit}
          className="p-5"
          style={{
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
            <Form.Control
              type="email"
              value={email}
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
          </Form.Group>

          <Form.Group
            className="mb-5"
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
          <Button
            className="container mb-3 bg-btn-red fw-bold fs-5"
            variant=""
            type="submit"
            style={{
              borderRadius: "0.3rem",
            }}
            // onClick={handleSubmit}
          >
            Login
          </Button>
          <p className="text-black text-center">
            Don't have an account ? Klik{" "}
            <span>
              <label
                style={{ cursor: "pointer" }}
                className="text-decoration-none fw-bold text-black"
                onClick={() => {
                  toggle("Login");
                  toggle("Register");
                }}
              >
                Here
              </label>
            </span>
          </p>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
