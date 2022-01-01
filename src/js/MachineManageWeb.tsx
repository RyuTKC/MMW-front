import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom" /* v5 */
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" /* v6 */
import { Header, Footer, Nav } from "components/_Commons/commonSet";
import Routing from "js/pages/_RoutingV5";
import { Provider } from "react-redux";
import store from "app-redux/store";

const target = document.getElementById("app");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Router>
        <Nav />
        <Routing />
      </Router>
      <Footer />
    </Provider>
  </React.StrictMode>,
  target
);
