import { MachineTableStateType, MachineTableActionType, MachineTableActionKind } from "./types"
import { Reducer } from "redux";
import { updateAction } from "./action";

export const initialState: MachineTableStateType = {
  data: [],
  columnDisplayName: {
    machine_id: "ID",
    machine_name: "マシン名",
    host_name: "ホスト名",
    administrator: "管理者",
    place: "保管場所",
    qr_or_barcode: "QRコード",
    maintenance_date: "最終メンテ日",
    assurance: "保障",
    serial_number: "シリアル",
    purchase_date: "購入年月",
    notes: "備考",
    product_id: "製品",
    status_type: "ステータス",
    role_id: "ロール",
    vender_id: "購入ベンダー",
    created_at: "登録日",
    updated_at: "更新日"
  },
  sortData: [],
  sortElement: {
    orderBy: "machine_id",
    sortDirection: "desc"
  }
}

export const machineDataReducer: Reducer<MachineTableStateType, MachineTableActionType> = (state = initialState, action): MachineTableStateType => {

  switch (action.type) {
    case MachineTableActionKind.update:
      return {
        ...state,
        data: action.data
      }
    case MachineTableActionKind.sort:
      // return {
      //   ...state,
      //   sortData: action.sortData,
      //   sortElement: action.sortElement
      // }
      return {
        ...state,
        sortData: action.sortData,
        sortElement: action.sortElement,
      }
    default:
      const _: never = action
      return state
  }
}