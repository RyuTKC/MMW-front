import React, { VFC } from "react";
import { appConfig, MachinesAPI } from "appConfig";
import { Link } from "react-router-dom";
import axios from "axios";

export default () => {
    const getMachines = () => {
        const res = appConfig.axios.get(MachinesAPI.root)
            .then((res) => console.log(res));

            return res;
    }

    return (
        // <main onLoad={getMachines()}>
        <main>
            <h2>I am Machines</h2>
            <button onClick={getMachines}>now</button>
        </main>
    );
};
