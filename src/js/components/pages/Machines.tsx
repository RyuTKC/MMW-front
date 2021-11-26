import React, { VFC } from "react";
import axios from "axios";
import { appConfig } from "appConfig";
import {Link} from "react-router-dom";

const Machines: VFC = () => {
    const getMachines = () => {
        axios.get("/machines");
    }
    axios.defaults.baseURL = appConfig.API_URL;
    // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    return (
        <main>
            <h2>I am Machines</h2>
            <button onClick={getMachines}>now</button>
            <Link to="/systems"> go to systems</Link>

        </main>
    );
};

export default Machines;