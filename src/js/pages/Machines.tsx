import React, { VFC, useEffect, useState } from "react";
import { appConfig, MachinesAPI } from "appConfig";
import { Link } from "react-router-dom";
import axios from "axios";

interface typeA{
  object: object
}

export default () => {
  const getMachines = (): void => {
    appConfig.axios.get(MachinesAPI.root)
      .then(res => {
        setJasonValue(res.data)
        console.log(res.data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const [jsonValue, setJasonValue] = useState();
  // リロード更新
  useEffect(getMachines, [])

  return (
    <main>
      <h2>I am Machines</h2>
      <button onClick={getMachines}>now</button>
      <div>{JSON.stringify(jsonValue)}</div>
      {/* <ul>
        {jsonValue.map((item, index) => {
          <li>{item}</li>
        })}
      </ul> */}
    </main>
  );
};
