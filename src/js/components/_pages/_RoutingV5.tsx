import "core-js/stable";
import React from "react";
import Top from "pages/Top/Top";
import Machines from "pages/Machines/Machines";
import Systems from "pages/Systems/Systems";
import Products from "pages/Products/Products";
import Users from "pages/Users/Users";
import { RouteList } from "appConfig"
/****** routing version 5 ******/
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Companies from "./Companies/Companies";

export default () => {
  return (
    <Switch>
      <Route exact path={RouteList.top} component={Top} />
      <Route exact path={RouteList.machines} component={Machines} />
      <Route exact path={RouteList.systems} component={Systems} />
      <Route exact path={RouteList.products} component={Products} />
      <Route exact path={RouteList.companies} component={Companies} />
      <Route exact path={RouteList.users} component={Users} />
    </Switch>
  );
}