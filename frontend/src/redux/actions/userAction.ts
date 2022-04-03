import { ActionType } from "../constants/action-type";

export const setBalance = (balance: number) => {
  return {
    type: ActionType.SET_BALANCE,
    payload: balance,
  };
};
