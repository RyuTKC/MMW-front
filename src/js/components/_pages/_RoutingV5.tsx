import "core-js/stable";
import React from "react";
import Top from "components/_pages/Top";
import Machines from "components/_pages/Machines";
import Systems from "components/_pages/Systems";
import Products from "components/_pages/Products";
import Users from "components/_pages/Users";
import { RouteList } from "appConfig"
/****** routing version 5 ******/
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default () => {
  return (
    <Switch>
      <Route exact path={RouteList.top} component={Top} />
      <Route exact path={RouteList.machines} component={Machines} />
      <Route exact path={RouteList.systems} component={Systems} />
      <Route exact path={RouteList.products} component={Products} />
      <Route exact path={RouteList.users} component={Users} />
    </Switch>
  );
}