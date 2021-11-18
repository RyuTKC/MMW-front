import React from "react";
import ReactDOM from "react-dom";
import "../style/ReactTest.scss";
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom"
import Machines from "./pages/Machines";
import Systems from "./pages/Systems";
import Top from "./pages/Top";
// import "../../style/pages/ReactTest.scss";

const target = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ul>
        <li>
          <Link to="/machines"> go to machines</Link>
        </li>
        <li>
          <Link to="/systems"> go to systems</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/systems" element={<Systems />} />
        <Route path="/products" element={<Systems />} />
        <Route path="/companies" element={<Systems />} />
        <Route path="/users" element={<Systems />} />
      </Routes>
    </Router>

  </React.StrictMode>,
  target
);
