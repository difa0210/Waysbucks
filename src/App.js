import { useContext, useState, useEffect } from "react";

import { UserContext } from "./Context/userContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
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

export default function App() {
  const [user, setUser] = useContext(UserContext);
  const token = localStorage.getItem("token");

  const checkUser = async () => {
    try {
      setAuthToken(token);
      const response = await API.get("/check-auth");

      if (response.status === 404) {
      }

      let payload = response.data.data.user;
      setUser(payload);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token) checkUser();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/landingPage" element={<LandingPage />} />
        <Route
          exact
          path="/detailProducts/:productId"
          element={
            <UserRoute>
              <DetailProducts />
            </UserRoute>
          }
        />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/topping" element={<Topping />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/transaction" element={<Transaction />} />
        <Route exact path="/login" element={<ModalLogin />} />
      </Routes>
      <ModalLogin />
      <ModalRegister />
    </Router>
  );
}

// export default function App() {
//   return (
//     <Router>
//       <Root />
//     </Router>
//   );
// }
