import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import setAuthorizationToken from "./utils/setAuthorizationToken";

import App from "./components/App";
import combineReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducer,
  composeEnhancers(applyMiddleware(thunk))
);
// setAuthorizationToken(localStorage.jwtToken);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
