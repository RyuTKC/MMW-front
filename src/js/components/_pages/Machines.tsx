import React from "react";
import Table from "components/Machines/Table";
import { getMachineDatas } from "reducks/MachineData/operations";
import { useDispatch } from "react-redux";
import ModalForm from "components/Machines/ModalForm/ModalForm";

export default () => {

  // redux hooks
  const dispatch = useDispatch()

  // 更新イベント
  const onClickUpdate = (e: React.MouseEvent) => {
    dispatch(getMachineDatas())
  }

  return (
    <main>
        <ModalForm></ModalForm>
        <h2>機材一覧表示</h2>
        <button onClick={onClickUpdate}>更新</button>
        <Table></Table>
    </main>
  );
};
