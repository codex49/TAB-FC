import React, { useCallback, useEffect, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button, Alert } from "react-bootstrap";
import { setBalance } from "../../redux/actions/userAction";
import { State } from "../../types/state.type";
import { toggleCreditCardForm } from "../../redux/actions/creditCardAction";
import "./UserBalance.css";

const UserBalance = (): ReactElement => {
  const { balance } = useSelector((state: State) => state.user);
  const dispatch = useDispatch();

  const fetchBalance = useCallback(async () => {
    const { REACT_APP_USER_BALANCE_API } = process.env;

    const response: any = await axios
      .get(REACT_APP_USER_BALANCE_API || "")
      .catch((error) => {
        console.log(error);
      });

    dispatch(setBalance(response.data.balance));
  }, [dispatch]);

  useEffect(() => {
    fetchBalance();
  }, [fetchBalance]);

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
