import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import "./index.css";
import reduser from "./reducers";
 function logger() {
    return next => action => {
     // console.log('Осуществляется отправка: ', action)
      const returnValue = next(action);
      const id = Math.floor(Math.random() * 1000);
      action.payload.id=id;
      
     // console.log(id);
      return returnValue
    }
  }

const store = createStore(
  reduser, applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()