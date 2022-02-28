import { createContext, useState } from "react";
import { useParams } from "react-router-dom";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modalRegister, setModalRegister] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalTransaction, setModalTransaction] = useState(false);
  const [modalPay, setModalPay] = useState(false);
  const [transactionId, setTransactionId] = useState(false);

  const toggle = (name, id) => {
    console.log(name, id);
    if (name === "Login") {
      setModalLogin(!modalLogin);
    } else if (name === "Register") {
      setModalRegister(!modalRegister);
    } else if (name === "Transaction") {
      setModalTransaction(!modalTransaction);
      setTransactionId(id);
    } else if (name === "Pay") {
      setModalPay(!modalPay);
    }
  };
  return (
    <ModalContext.Provider
      value={[
        modalLogin,
        modalRegister,
        modalTransaction,
        modalPay,
        toggle,
        transactionId,
      ]}
    >
      {children}
    </ModalContext.Provider>
  );
};
