import React from "react";

import "./component.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/register";
import Login from "./components/login";
import Navbar from "./components/navbar";
import LandingPage from "./components/landing-page";

function Component() {
  return (
    <div className="container my-5">
      <div>
        <Navbar />
        <LandingPage />
        <Register />
        <Login />
        </div>  
    </div>
  );
}

export default Component;
