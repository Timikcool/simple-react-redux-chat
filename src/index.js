import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import chat from "./reducers";
import {makeMainRoutes} from './routes'

let store = createStore(chat, applyMiddleware(promiseMiddleware));
const routes = makeMainRoutes();
render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById("root")
);
