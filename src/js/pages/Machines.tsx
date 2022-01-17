import React, { VFC, useEffect, useState, useRef, useContext, useReducer } from "react";
import TableRedux from "components/Machines/TableRedux";
import { sortMachineDatas2, updateMachineDatas } from "reducks/MachineData/operations";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "reducks/store";
import { machineData, MachineData } from "appConfig";

type hookState = {}
type hookAction = {}

const hookReducer = (state: hookState, action: hookAction) => { }

export default () => {
  const dispatch = useDispatch()
  const machineDataState = useSelector((state: RootStateType) => state.machineData)
  const b = new MachineData()
  // console.log({...machineDataState.sortData})

  // 更新イベント
  const onClickUpdate = (e: React.MouseEvent) => {
    dispatch(updateMachineDatas())
  }

  // 更新
  useEffect(() => {
    dispatch(updateMachineDatas())
  }, []);


  return (
    <main>
      <h2>機材一覧表示</h2>
      <button onClick={onClickUpdate}>更新</button>
      <TableRedux></TableRedux>
    </main>
  );
};
