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
import store, { RootState } from "reducks/store"
import { getPageNumber } from "reducks/Router/selectors";

export default () => {
  const locationName = useSelector((state: RootState) => state.router.location.pathname)
  const locationState = useSelector((state: RootState) => state.router)
  const dispatch = useDispatch()
  const pageNumber = getPageNumber(locationState);

  console.log(pageNumber)

  const changeTabs = (PageName: string) => {
    console.log("path:", locationName)
    dispatch(push(PageName))
  }

  return (
    // <AppBar position="static">
    <Paper>
      <Tabs value={pageNumber}>
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