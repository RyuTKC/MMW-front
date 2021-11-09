import React from "react";
import ReactDOM from "react-dom";
import "../style/ReactTest.scss";
import CompoA from "./components/CompoA";
import ReactTest from "./components/ReactTest";
// import "../../style/pages/ReactTest.scss";

const target = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <CompoA arg1={"おあああああっはっははんああああああ"}/>
    <CompoA arg1={"おりおりおりよーーーーーーーーーーーーー"}/>
    <ReactTest />
  </React.StrictMode>,
  target
);
