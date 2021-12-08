import React, { VFC, useEffect, useState } from "react";
import { appConfig, MachinesAPI, machineData, MachineData } from "appConfig";
import Table from "js/components/Machines/Table"
import { Link } from "react-router-dom";
import axios from "axios";

export default () => {
  const getMachines = (): void => {
    appConfig.axios.get<machineData[]>(MachinesAPI.root)
      .then(res => {
        setMachineDatas(res.data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const [machineDatas, setMachineDatas] = useState<machineData[]>([new MachineData()]);
  // リロード更新
  useEffect(getMachines, [])

  return (
    <main>
      <h2>I am Machines</h2>
      <button onClick={getMachines}>now</button>
      <Table datas={machineDatas}></Table>
    </main>
  );
};
