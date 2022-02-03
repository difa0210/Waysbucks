import React from "react";

import { useNavigate } from "react-router-dom";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../image/Group.png";
import {
  Modal,
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Image,
} from "react-bootstrap";

function NavBar() {
  // const navigate = useNavigate();
  // const toLogin = () => {
  //   navigate("/login");
  // };

  return (
    <div className="">
      <Navbar className="" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <Image src={Image1} />
          </Navbar.Brand>
          <div className="">
            <Button
              className="bg-btn-white mx-3 px-4 fw-bold"
              variant=""
              // onClick={toLogin}
            >
            
              Login
            </Button>
            <Button className="bg-btn-red mx-3 px-4 fw-bold" variant="">
              
              Register
            </Button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
