import react from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import ReactDom from "react-dom";

import App from "./components/App";

import reducers from "./reducers";

import {Provider} from "react-redux";
import { createStore } from "redux";

var store = createStore(reducers);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);