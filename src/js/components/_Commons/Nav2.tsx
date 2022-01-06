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

export default () => {
  const changeTabs = (e: React.ChangeEvent<{}>, value: number) => {
    setValue(value);
  }
  const reloadTabFix = (): number => {
    switch (history.location.pathname) {
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

  const dispatch = useDispatch()
  const history = useHistory();
  const [value, setValue] = useState(reloadTabFix());

  console.log(store.getState().router.location.pathname)
  return (
    // <AppBar position="static">
    <Paper>
      <Tabs value={value} onChange={changeTabs}>
        <Tab label="TOP" onClick={() => dispatch(push(RouteList.top))}></Tab>
        <Tab label="機材管理" onClick={() => dispatch(push(RouteList.machines))}></Tab>
        <Tab label="システム管理" onClick={() => dispatch(push(RouteList.systems))}></Tab>
        <Tab label="製品管理" onClick={() => dispatch(push(RouteList.products))}></Tab>
        <Tab label="ユーザー管理" onClick={() => dispatch(push(RouteList.users))}></Tab>
      </Tabs>
    </Paper>
    // /* </AppBar> */
  );
}