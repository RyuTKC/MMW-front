import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom" /* v5 */
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" /* v6 */
import { Header, Footer, Nav } from "components/_Commons/commonSet";
import Routing from "js/pages/_RoutingV5";

const target = document.getElementById("app");
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Nav />
      <Routing />
    </Router>
    <Footer />
  </React.StrictMode>,
  target
);
