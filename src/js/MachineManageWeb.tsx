import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Link } from "react-router-dom" /* v5 */
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" /* v6 */
import store, { history } from "reducks/store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import Routing from "pages/_RoutingV5";
import { Header, Footer, Nav, Nav2 } from "components/_Commons/commonSet";

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
