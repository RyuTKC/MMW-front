import React, { useEffect, useContext, useReducer, createContext, useState } from "react";
import Table from "components/Machines/Table";
import { sortMachineDatas, updateMachineDatas } from "reducks/MachineData/operations";
import { useDispatch } from "react-redux";
import ModalForm from "components/Machines/ModalForm";

type hookState = {}
type hookAction = {}
const hookReducer = (state: hookState, action: hookAction) => { }

type modalContext = {
  display: boolean,
  machine_id: number
}
export const modalContext = createContext<modalContext>({
  display: false,
  machine_id: 0
})


export default () => {
  // react hooks
  const [modalState, setModalState] = useState<modalContext>({display: false, machine_id: 0})  

  // redux hooks
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
      <modalContext.Provider value={modalState}>
        <ModalForm></ModalForm>
        <h2>機材一覧表示</h2>
        <button onClick={onClickUpdate}>更新</button>
        <Table></Table>
      </modalContext.Provider>
    </main>
  );
};
