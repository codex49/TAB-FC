import React from "react";
import { useSelector } from "react-redux";
import CreditCardForm from "./components/CreditCardForm/CreditCardForm";
import UserBalance from "./components/UserBalance/UserBalance";
import { State } from "./types/state.type";

function App() {
  const { isCreditCardFormVisible } = useSelector(
    (state: State) => state.creditCard
  );
  return (
    <>
      <UserBalance />
      {isCreditCardFormVisible && <CreditCardForm />}
    </>
  );
}

export default App;
