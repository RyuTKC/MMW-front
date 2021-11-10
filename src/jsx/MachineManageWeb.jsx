import React from "react";
import ReactDOM from "react-dom";
import "../style/ReactTest.scss";
import InputSet from "./components/InputSet";
import ReactTest from "./components/ReactTest";
// import "../../style/pages/ReactTest.scss";

const target = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <InputSet top={"１個め"}/>
    <InputSet top={"２個め"} />
    <ReactTest />
  </React.StrictMode>,
  target
);
