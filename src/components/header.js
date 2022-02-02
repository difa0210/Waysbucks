import React from "react";

import "./header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../image/Group.png";
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

function Header() {
  return (
    <div className="">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <Image src={Image1} />
          </Navbar.Brand>

          <Button variant="outline-success">Login</Button>
          <Button variant="outline-success">Register</Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
