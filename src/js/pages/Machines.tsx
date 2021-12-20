import React, { VFC, useEffect, useState } from "react";
import { appConfig, MachinesAPI, machineData, MachineData } from "appConfig";
import Table from "js/components/Machines/Table"

export default () => {
  const [machineDatas, setMachineDatas] = useState<machineData[]>([]);

  const onClickButton = (e: React.MouseEvent) => {
    let getDatas: machineData[] = []
    appConfig.axios.get<machineData[]>(MachinesAPI.root)
      .then(res => {
        getDatas = res.data as machineData[]
      }
      )
      .catch(error =>
        console.error(error)
      )
    console.log(getDatas)
    setMachineDatas(getDatas)
  }
    ;


  return (
    <main>
      <h2>I am Machines</h2>
      <button onClick={onClickButton}>now</button>
      <Table datas={machineDatas}></Table>
    </main>
  );
};
