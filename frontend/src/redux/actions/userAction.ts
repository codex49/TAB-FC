import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../constants/action-type";

export const fetchBalance = () => async (dispatch: Dispatch) => {
  const { REACT_APP_USER_BALANCE_API } = process.env;
  const response = await axios.get(REACT_APP_USER_BALANCE_API || "");
  dispatch({ type: ActionType.FETCH_BALANCE, payload: response.data.balance });
};

export const setBalance = (balance: number) => {
  return {
    type: ActionType.SET_BALANCE,
    payload: balance,
  };
};
