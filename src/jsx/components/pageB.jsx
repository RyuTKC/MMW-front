import React from "react";
import ReactDOM from "react-dom";
import "../style/common.scss";
import CompoB from "./components/CompoB";
import ReactTest from "./components/ReactTest";

const target = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <CompoB />
    <ReactTest />
  </React.StrictMode>,
  target
);
