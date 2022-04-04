import { compose, createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, reduxDevTools(applyMiddleware(thunk)));

export default store;
