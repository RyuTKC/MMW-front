import React from "react";
import {VFC} from "react";
import ReactDOM from "react-dom";
import "../style/ReactTest.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Button from "@material-ui/core/Button";
// import "../../style/pages/ReactTest.scss";
import Routing from "./components/pages/_Routing";

const target = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ul>
        <li>
          <Button variant="contained" color="primary">どうじゃ？</Button>
        </li>
        <li>
          <Link to="/machines"> go to machines</Link>
        </li>
        <li>
          <Link to="/systems"> go to systems</Link>
        </li>
      </ul>
      <Routing/>
    </Router>

  </React.StrictMode>,
  target
);
