import React, { useEffect, useContext, useReducer } from "react";
import Table from "components/Machines/Table";
import { sortMachineDatas, updateMachineDatas } from "reducks/MachineData/operations";
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
    dispatch(sortMachineDatas("machine_id", false))
  }, []);


  return (
    <main>
      <h2>機材一覧表示</h2>
      <button onClick={onClickUpdate}>更新</button>
      <Table></Table>
    </main>
  );
};
