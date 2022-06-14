//import matchers from "@testing-library/jest-dom/matchers";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import reduser from './React/reducers'
import addId from "./React/middlewear";
 

const store = createStore(
  reduser, applyMiddleware(addId)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);