import React from "react";
import ReactDOM from "react-dom";
import "../style/ReactTest.scss";
import InputSetFunctional from "./components/InputSetFunctional";
import InputSetClass from "./components/InputSetClass";
import ReactTest from "./components/ReactTest";
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom"
import Tinko from "./routes/tinko";
import Unko from "./routes/unko";
// import "../../style/pages/ReactTest.scss";

const target = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <InputSetFunctional />
    <InputSetClass />
    <Router>
      <Link to="/tinko"> go to tinko</Link>
      <Link to="/unko"> go to unko</Link>
      <Routes>
        <Route path="tinko" element={<Tinko />} />
        <Route path ="unko" element={<Unko />}　/>
      </Routes>
    </Router>
  </React.StrictMode>,
  target
);
