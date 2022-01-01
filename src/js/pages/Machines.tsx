import React, { VFC, useEffect, useState, useRef, useContext, useReducer } from "react";
import { appConfig, MachinesAPI, machineData, MachineData } from "appConfig";
import Table2 from "components/Machines/Table2"
import Counter from "components/_Commons/Counter";


type hookState = {

}

type hookAction = {}

const hookReducer = (state: hookState, action: hookAction) => { }

export default () => {
  const machineDatas = useRef<machineData[]>([]);

  const onClickButton = (e: React.MouseEvent) => {
    getDatas()
  }

  // 関数
  const getDatas = (): void => {
    appConfig.axios.get<machineData[]>(MachinesAPI.root)
      .then(res => {
        machineDatas.current = res.data as machineData[]
      }
      )
      .catch(error =>
        console.error(error)
      )
  }

  useEffect(() => getDatas(), []);

  return (
    <main>
      <Counter></Counter>
      <h2>機材一覧表示</h2>
      <button onClick={onClickButton}>更新</button>
      <Table2 datas={machineDatas.current} />
    </main>
  );
};
