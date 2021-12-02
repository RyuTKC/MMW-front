import React, { VFC } from "react";
import { appConfig, MachinesAPI } from "appConfig";
import { Link } from "react-router-dom";
import axios from "axios";

export default () => {
    const getSokuhous = () => {
        axios.defaults.baseURL = "http://192.168.166.236:8210";
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.post("WebSokuhouRef.asmx/Get_DepartMaster")
            .then((res) => console.log(res));
    }

    return (
        <main>
            <h2>I am News</h2>
            <button onClick={getSokuhous}>ニュースのテスト</button>
        </main>
    );
};
