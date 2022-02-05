import { React, useState } from "react";

import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../image/Group.png";
import Image2 from "../image/User.png";
import Image3 from "../image/user 2.png";
import Image4 from "../image/logout.png";
import Image5 from "../image/cart.png";

import {
  Navbar,
  Container,
  Button,
  Image,
  Dropdown,
  InputGroup,
} from "react-bootstrap";
import ModalLogin from "../components/ModalLogin";
import ModalRegister from "../components/ModalRegister";

const NavBar = () => {
  const [isOpenModalLogin, setIsOpenModalLogin] = useState(false);
  const [isOpenModalRegister, setIsOpenModalRegister] = useState(false);
  const login = localStorage.getItem("login");

  const toggleModalLogin = () => {
    setIsOpenModalLogin(!isOpenModalLogin);
  };
  const toggleModalRegister = () => {
    setIsOpenModalRegister(!isOpenModalRegister);
  };
  return (
    <>
      <div className="container p-0">
        <Navbar className="" expand="lg">
          <Container className="p-0">
            <Navbar.Brand>
              <Link to="/">
                <Image src={Image1} />
              </Link>
            </Navbar.Brand>
            <div className="">
              {login ? (
                <>
                  <Link to="/cart">
                    <Button className="" variant="">
                      <Image src={Image5} />
                    </Button>
                  </Link>
                  <Button className="" variant="">
                    <InputGroup className="mb-3">
                      <Dropdown>
                        <Dropdown.Toggle>
                          <Image src={Image2} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            style={{ color: "#BD0707" }}
                            href="/products"
                            className="mb-3 fw-bold"
                          >
                            <Image
                              src={require("../image/product.png")}
                              className="me-3"
                            />
                            Add Products
                          </Dropdown.Item>

                          <Dropdown.Item
                            style={{ color: "#BD0707" }}
                            href="/topping"
                            className="mb-3 fw-bold"
                          >
                            <Image
                              src={require("../image/topping.png")}
                              className="me-3"
                            />
                            Add Topping
                          </Dropdown.Item>

                          <Dropdown.Item
                            style={{ color: "#BD0707" }}
                            href="/profile"
                            className="mb-3 fw-bold"
                          >
                            <Image src={Image3} className="me-3" />
                            Profile
                          </Dropdown.Item>

                          <Dropdown.Item
                            style={{ color: "#BD0707" }}
                            href="/"
                            className="fw-bold"
                            onClick={() => {
                              localStorage.removeItem("login");
                              window.location.reload();
                            }}
                          >
                            <Image src={Image4} className="me-3" />
                            Logout
                          </Dropdown.Item>

                          <Dropdown.Item
                            style={{ color: "#BD0707" }}
                            href="/admin"
                            className="mb-3 fw-bold"
                          >
                            Admin
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </InputGroup>
                  </Button>
                </>
              ) : (
                <>
                  <ModalLogin
                    isOpen={isOpenModalLogin}
                    toggle={toggleModalLogin}
                    toggleRegister={toggleModalRegister}
                  />
                  <ModalRegister
                    isOpen={isOpenModalRegister}
                    toggle={toggleModalRegister}
                    toggleLogin={toggleModalLogin}
                  />
                </>
              )}
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
