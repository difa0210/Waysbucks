import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [modalRegister, setModalRegister] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalTransaction, setModalTransaction] = useState(false);

  const toggle = (name) => {
    console.log(name);
    if (name === "Login") {
      setModalLogin(!modalLogin);
    } else if (name === "Register") {
      setModalRegister(!modalRegister);
    } else if (name === "Transaction") {
      setModalTransaction(!modalTransaction);
    }
  };
  return (
    <ModalContext.Provider
      value={[modalLogin, modalRegister, modalTransaction, toggle]}
    >
      {children}
    </ModalContext.Provider>
  );
};
