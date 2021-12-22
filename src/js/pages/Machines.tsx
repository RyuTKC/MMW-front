import React, { VFC, useEffect, useState } from "react";
import { appConfig, MachinesAPI, machineData, MachineData } from "appConfig";
import Table from "js/components/Machines/Table"

export default () => {
  const [machineDatas, setMachineDatas] = useState<machineData[]>([]);
  useEffect(() => getDatas(), [])


  const onClickButton = (e: React.MouseEvent) => {
    getDatas()
  }
  const getDatas = () => {
    appConfig.axios.get<machineData[]>(MachinesAPI.root)
      .then(res =>
        setMachineDatas(res.data as machineData[]))
      .catch(error =>
        console.error(error))
  }

  return (
    <main>
      <h2>機材一覧表示</h2>
      <button onClick={onClickButton}>更新</button>
      <Table datas={machineDatas} ></Table>
    </main>
  );
};
