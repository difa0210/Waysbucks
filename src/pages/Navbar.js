import { useContext, useState } from "react";

import { UserContext } from "../Context/userContext";
import { Link, useNavigate } from "react-router-dom";

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

import { ModalContext } from "../Context/modalContext";

const NavBar = () => {
  const [, , toggle] = useContext(ModalContext);
  const [user, setUser] = useContext(UserContext);
  console.log(user);
  // if (!user) return <div>Loading</div>;
  return (
    <>
      <div className="container p-0">
        <Navbar className="" expand="lg">
          <Container className="">
            <Navbar.Brand>
              <Link to="/">
                <Image src={Image1} />
              </Link>
            </Navbar.Brand>
            <div className="">
              {user ? (
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
                          {user.role === "admin" ? (
                            <>
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
                                href="/transaction"
                                className="mb-3 fw-bold"
                              >
                                <Image
                                  src={require("../image/topping.png")}
                                  className="me-3"
                                />
                                Transactions
                              </Dropdown.Item>
                            </>
                          ) : (
                            <>
                              <Dropdown.Item
                                style={{ color: "#BD0707" }}
                                href="/profile"
                                className="mb-3 fw-bold"
                              >
                                <Image src={Image3} className="me-3" />
                                Profile
                              </Dropdown.Item>
                            </>
                          )}
                          <hr
                            style={{ color: "#BD0707" }}
                            className="opacity-100"
                          />
                          <Dropdown.Item
                            style={{ color: "#BD0707" }}
                            href="/"
                            className="fw-bold"
                            onClick={() => {
                              localStorage.removeItem("token");
                              setUser(null);
                              // window.location.reload();
                            }}
                          >
                            <Image src={Image4} className="me-3" />
                            Logout
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </InputGroup>
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => toggle("Login")}
                    className="bg-btn-white me-3 fw-bold"
                    variant=""
                    size=""
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => toggle("Register")}
                    className="bg-btn-red fw-bold"
                    variant=""
                  >
                    Register
                  </Button>
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
