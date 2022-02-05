import React from "react";
import Table from "./Table/Table";
import { getMachines } from "reducks/Machines/operations";
import { useDispatch } from "react-redux";
import ModalForm from "pages/Machines/ModalForm/ModalForm";

export default () => {

  // redux hooks
  const dispatch = useDispatch()

  // 更新イベント
  const onClickUpdate = (e: React.MouseEvent) => {
    dispatch(getMachines())
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
