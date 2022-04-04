import React, { useEffect, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Alert } from "react-bootstrap";
import { fetchBalance } from "../../redux/actions/userAction";
import { State } from "../../types/state.type";
import { toggleCreditCardForm } from "../../redux/actions/creditCardAction";
import "./UserBalance.css";

const UserBalance = (): ReactElement => {
  const { balance } = useSelector((state: State) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalance());
  }, [dispatch]);

  return (
    <div className="user-balance">
      <Alert variant="info">
        Your balance : <strong>{balance}$</strong>
      </Alert>
      <Button type="submit" onClick={() => dispatch(toggleCreditCardForm())}>
        Recharge / Add Balance
      </Button>
    </div>
  );
};

export default UserBalance;
