import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom" /* v5 */
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" /* v6 */
import Button from "@material-ui/core/Button";
import { HeaderComp, FooterComp, NavComp } from "components/_Commons/commonSet";
import Routing from "pages/_Routing";

const target = document.getElementById("app");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HeaderComp />
      <NavComp />
      <ul>
        <li>
          <Button variant="contained" color="primary">どうじゃ？</Button>
        </li>
        <li>
          <Link to="/machines"> go to machines</Link>
        </li>
        <li>
        </li>
      </ul>
      <FooterComp />
      <Routing />
    </Router>
  </React.StrictMode>,
  target
);
