import React from "react";
import Table from "./Table/Table";
import { getMachineEditElements, getMachine, getMachines } from "reducks/Machines/operations";
import { useDispatch } from "react-redux";
import ModalForm from "pages/Machines/ModalForm/ModalForm";
import { setMachineAction } from "reducks/Machines/action";
import { initialMachineData } from "appConfig";

export default () => {

  // redux hooks
  const dispatch = useDispatch()

  // 更新イベント
  const onClickUpdate = (e: React.MouseEvent) => {
    dispatch(getMachines())
  }

  const onClickNew = (e: React.MouseEvent) => {
    dispatch(getMachineEditElements())
  }

  return (
    <main>
        <ModalForm></ModalForm>
        <h2>機材一覧表示</h2>
        <button onClick={onClickUpdate}>更新</button>
        <button onClick={onClickNew}>新規作成</button>
        <Table></Table>
    </main>
  );
};
