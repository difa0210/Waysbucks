import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  LandingPage,
  DetailProducts,
  Products,
  Topping,
  Cart,
  Admin,
  Profile,
} from "./pages/Index";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/detailProducts" element={<DetailProducts />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/topping" element={<Topping />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
