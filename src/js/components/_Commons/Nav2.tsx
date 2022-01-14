import React, { useState, useEffect } from "react"
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab";
import { RouteList } from "appConfig";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { push, getAction } from "connected-react-router";
import store from "reducks/store"

const reloadTabFix = (): number => {
  switch (store.getState().router.location.pathname) {
    case RouteList.top:
      return 0;
    case RouteList.machines:
      return 1;
    case RouteList.systems:
      return 2;
    case RouteList.products:
      return 3;
    case RouteList.users:
      return 4;
    default:
      return 0;
  }
}

export default () => {
  const dispatch = useDispatch()
  const [pageNo, setPageNo] = useState(reloadTabFix());

  const changeTabs = (Route: string) => {
    console.log("path:", store.getState().router.location.pathname)
    dispatch(push(Route))
    setPageNo(reloadTabFix());
  }

  return (
    // <AppBar position="static">
    <Paper>
      <Tabs value={pageNo}>
        <Tab label="TOP" onClick={() => changeTabs(RouteList.top)}></Tab>
        <Tab label="機材管理" onClick={() => changeTabs(RouteList.machines)}></Tab>
        <Tab label="システム管理" onClick={() => changeTabs(RouteList.systems)}></Tab>
        <Tab label="製品管理" onClick={() => changeTabs(RouteList.products)}></Tab>
        <Tab label="ユーザー管理" onClick={() => changeTabs(RouteList.users)}></Tab>
      </Tabs>
    </Paper>
    // /* </AppBar> */
  );
}