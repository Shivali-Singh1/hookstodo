import { waitForElementToBeRemoved } from "@testing-library/dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import UseStateArray from "./UseStateArray";

ReactDOM.render(
  <React.StrictMode>
    <UseStateArray />
  </React.StrictMode>,
  document.getElementById("root")
);
