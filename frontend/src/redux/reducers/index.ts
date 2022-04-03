import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { creditCardReducer } from "./creditCardReducer";

const reducers = combineReducers({
  user: userReducer,
  creditCard: creditCardReducer,
});

export default reducers;
