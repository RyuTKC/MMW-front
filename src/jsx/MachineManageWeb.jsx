import React from "react";
import ReactDOM from "react-dom";
import "../style/ReactTest.scss";
import InputSetFunctional from "./components/InputSetFunctional";
import ReactTest from "./components/ReactTest";
// import "../../style/pages/ReactTest.scss";

const target = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <InputSetFunctional />
    <ReactTest />
  </React.StrictMode>,
  target
);
