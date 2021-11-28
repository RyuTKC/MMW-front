import React, { VFC } from "react";
import { appConfig } from "appConfig";
// import * as MMW from "MMW";
import {Link} from "react-router-dom";

const Machines: VFC = () => {
    const getMachines = () => {
        appConfig.axios.get(MMW.Machines.root);
    }


    return (
        <main>
            <h2>I am Machines</h2>
            <button onClick={getMachines}>now</button>
            <Link to="/systems"> go to systems</Link>

        </main>
    );
};

export default Machines;