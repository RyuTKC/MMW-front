import React, { VFC, useEffect } from "react";
import { appConfig, MachinesAPI } from "appConfig";
import { Link } from "react-router-dom";
import axios from "axios";

export default () => {
  const getMachines = () => {
    const res = appConfig.axios.get<JSON>(MachinesAPI.root)
      .then((res) =>
        console.log(res.data, typeof res.data));
  }

  // リロード更新
  useEffect(getMachines, [])

  return (
    <main>
      <h2>I am Machines</h2>
      <button onClick={getMachines}>now</button>
    </main>
  );
};
