import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./component.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/register";
import Login from "./components/login";
import Navbar from "./components/navbar";
import LandingPage from "./components/landing-page";
import Products from "./components/product";
import Topping from "./components/topping";
import Cart from "./components/cart";
import DetailProducts from "./components/detail-product";

function Component() {
  return (
    // <Router>
    <div className="container my-5">
      <Navbar />
      <LandingPage />
      <DetailProducts />
      <Products />
      <Topping />
      <Cart />
      <Login />
      <Register />
    </div>
    // <Route>

    // </Route>
    // </Router>
  );
}

export default Component;
