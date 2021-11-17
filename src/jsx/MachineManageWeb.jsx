import React from "react";
import ReactDOM from "react-dom";
import "../style/ReactTest.scss";
import InputSetFunctional from "./components/InputSetFunctional";
import InputSetClass from "./components/InputSetClass";
import ReactTest from "./components/ReactTest";
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom"
import Machines from "./pages/Machines";
import Systems from "./pages/Systems";
// import "../../style/pages/ReactTest.scss";

const target = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/top" element={<InputSetFunctional />} />
        <Route path="/machines" element={<Machines />} />
        <Route path ="systems" element={<Systems />}　/>
      </Routes>
      <Link to="/machines"> go to machines</Link>
      <Link to="/systems"> go to systems</Link>
    </Router>

  </React.StrictMode>,
  target
);
