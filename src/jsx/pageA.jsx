import React from "react";
import ReactDOM from "react-dom";
import "../style/common.scss";
import CompoA from "./components/CompoA";
import ReactTest from "./components/ReactTest";

const target = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <CompoA />
    <ReactTest />
  </React.StrictMode>,
  target
);
