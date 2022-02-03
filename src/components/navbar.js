import React from "react";

import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../image/Group.png";
import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  Image,
} from "react-bootstrap";

function Header() {
  return (
    <div className="">
      <Navbar className="" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <Image src={Image1} />
          </Navbar.Brand>
          <div className="">
          <Button className="bg-btn-white mx-3 px-4 fw-bold" variant="">Login</Button>
          <Button className="bg-btn-red mx-3 px-4 fw-bold" variant="">Register</Button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
