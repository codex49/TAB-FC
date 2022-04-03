import { compose, createStore } from "redux";
import reducers from "./reducers/index";

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, reduxDevTools());

export default store;
