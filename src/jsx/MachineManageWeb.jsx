import React from "react";
import ReactDOM from "react-dom";
import "../style/ReactTest.scss";
import InputSetFunctional from "./components/InputSetFunctional";
import InputSetClass from "./components/InputSetClass";
import ReactTest from "./components/ReactTest";
// import "../../style/pages/ReactTest.scss";

const target = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <InputSetFunctional />
    <InputSetClass />
  </React.StrictMode>,
  target
);
