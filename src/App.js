import { useContext, useEffect } from "react";

import { UserContext } from "./Context/userContext";
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
  Transaction,
  Profile,
} from "./pages/Index";
import ModalLogin from "./components/ModalLogin";
import { API, setAuthToken } from "./config/api";
import ModalRegister from "./components/ModalRegister";
import UserRoute from "./components/UserRoute";
import ModalTransaction from "./components/ModalTransaction";
import ModalPay from "./components/ModalPay";

export default function App() {
  const [user, setUser] = useContext(UserContext);
  const token = localStorage.getItem("token");

  const checkUser = async () => {
    try {
      setAuthToken(token);
      const response = await API.get("/check-auth");
      let payload = response.data.data.user;
      setUser(payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) checkUser();
  }, []);

  // if (!user) return <div>Loading</div>;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/landingPage" element={<LandingPage />} />
        <Route
          exact
          path="/detailProducts/:productsId"
          element={
            <UserRoute>
              <DetailProducts />
            </UserRoute>
          }
        />
        <Route
          exact
          path="/products"
          element={
            <UserRoute>
              <Products />
            </UserRoute>
          }
        />
        <Route
          exact
          path="/topping"
          element={
            <UserRoute>
              <Topping />
            </UserRoute>
          }
        />
        <Route
          exact
          path="/cart"
          element={
            <UserRoute>
              <Cart />
            </UserRoute>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <UserRoute>
              <Profile />
            </UserRoute>
          }
        />
        <Route
          exact
          path="/transaction"
          element={
            <UserRoute>
              <Transaction />
            </UserRoute>
          }
        />
      </Routes>
      <ModalLogin />
      <ModalRegister />
      <ModalTransaction />
      <ModalPay />
    </Router>
  );
}
