import React, { VFC, useEffect, useState, useRef, useContext, useReducer } from "react";
import Counter from "components/_Commons/Counter";
import TableRedux from "components/Machines/TableRedux";
import { updateMachineDatas } from "reducks/MachineData/operations";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "reducks/store";

type hookState = {}
type hookAction = {}

const hookReducer = (state: hookState, action: hookAction) => { }

export default () => {
  const dispatch = useDispatch()
  const machineDataState = useSelector((state: RootStateType) => state.machineData)
  useEffect(() => {
    dispatch(updateMachineDatas())
  }, []);

  const onClickButton = (e: React.MouseEvent) => {
    dispatch(updateMachineDatas())
  }



  return (
    <main>
      <Counter></Counter>
      <h2>機材一覧表示</h2>
      <button onClick={onClickButton}>更新</button>
      <TableRedux></TableRedux>
      {/* <Table2 datas={machineDatas.current} /> */}
    </main>
  );
};
