import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContextProvider } from "./Context/userContext";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalContextProvider } from "./Context/modalContext";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
