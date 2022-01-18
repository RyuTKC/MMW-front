import React, { useEffect, useContext, useReducer } from "react";
import TableRedux from "components/Machines/Table";
import { updateMachineDatas } from "reducks/MachineData/operations";
import { useDispatch } from "react-redux";

type hookState = {}
type hookAction = {}

const hookReducer = (state: hookState, action: hookAction) => { }

export default () => {
  const dispatch = useDispatch()

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
