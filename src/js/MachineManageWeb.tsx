import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom" /* v5 */
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" /* v6 */
import { Header, Footer, Nav, Nav2 } from "components/_Commons/commonSet";
import Routing from "js/pages/_RoutingV5";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history"
import store, { history } from "js/reducks/store";
import { ConnectedRouter } from "connected-react-router";

const target = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Header />
        {/* <Nav /> */}
        <Nav2 />
        <Routing />
        <Footer />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  target
);
