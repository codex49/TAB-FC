import { Action } from "../../types/actions.type";
import { User } from "../../types/user.types";
import { ActionType } from "../constants/action-type";

export const userReducer = (
  state: User = { balance: 0 },
  { type, payload }: Action
) => {
  switch (type) {
    case ActionType.FETCH_BALANCE:
      return { ...state, balance: payload };
    case ActionType.SET_BALANCE:
      return { ...state, balance: payload };
    default:
      return state;
  }
};
