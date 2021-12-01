import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab";
import { RouteList } from "js/config/common";
import { Link } from "react-router-dom";

export default () => {
    const [value, setValue] = useState(0);

    const changeTabs = (e: React.ChangeEvent<{}>, value: number) => {
        setValue(value);
    }

    return (
        // <AppBar position="static">
        <Paper>
            <Tabs value={value} onChange={changeTabs}>
                <Tab label="TOP" component={Link} to={RouteList.top}></Tab>
                <Tab label="機材管理" component={Link} to={RouteList.machines}></Tab>
                <Tab label="システム管理" component={Link} to={RouteList.systems}></Tab>
                <Tab label="製品管理" component={Link} to={RouteList.products}></Tab>
                <Tab label="ユーザー管理" component={Link} to={RouteList.users}></Tab>
            </Tabs>
        </Paper>
        // /* </AppBar> */
    );
}