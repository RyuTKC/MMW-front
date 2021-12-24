import React, { VFC, useEffect, useState, useRef } from "react";
import { appConfig, MachinesAPI, machineData, MachineData } from "appConfig";
import Table2 from "js/components/Machines/Table2"

export default () => {
  const [machineDatas, setMachineDatas] = useState<machineData[]>([]);
  
  const onClickButton = (e: React.MouseEvent) => {
    getDatas()
  }

  // 関数
  const getDatas = (): void => {
    appConfig.axios.get<machineData[]>(MachinesAPI.root)
      .then(res => {
        setMachineDatas(res.data as machineData[])
      }
      )
      .catch(error =>
        console.error(error)
      )
  }

  useEffect(() => getDatas(), []);

  return (
    <main>
      <h2>機材一覧表示</h2>
      <button onClick={onClickButton}>更新</button>
      <Table2 datas={machineDatas} />
    </main>
  );
};
