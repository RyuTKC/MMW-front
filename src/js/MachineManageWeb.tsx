import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Link } from "react-router-dom" /* v5 */
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" /* v6 */
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// pick a date util library
import DateFnsUtils from '@date-io/date-fns';
import store, { history } from "reducks/store";
import { StylesProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import Routing from "components/_pages/_RoutingV5";
import { Header, Footer, Nav, Nav2 } from "components/_commons/commonSet/commonSet";

const target = document.getElementById("app");


ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Nav2 />
            <Header />
            {/* <Nav /> */}
            <Routing />
            <Footer />
          </MuiPickersUtilsProvider>
        </ConnectedRouter>
      </Provider>
    </StylesProvider>
  </React.StrictMode>,
  target
);
