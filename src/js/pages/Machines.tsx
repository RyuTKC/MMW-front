import React, { VFC, useEffect, useState, useRef, useContext, useReducer } from "react";
import TableRedux from "components/Machines/TableRedux";
import { sortMachineDatas2, updateMachineDatas } from "reducks/MachineData/operations";
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

  const onClickUpdate = (e: React.MouseEvent) => {
    dispatch(updateMachineDatas())
  }

  console.log(machineDataState)

  return (
    <main>
      <h2>機材一覧表示</h2>
      <button onClick={onClickUpdate}>更新</button>
      <TableRedux></TableRedux>
    </main>
  );
};
